#!/usr/bin/env python3
"""
Validation harness for Exercise 3.

Runs two live calls against the Mistral API and prints the observed responses so
they can be pasted into the documentation. Requires MISTRAL_API_KEY in the
environment and the `mistralai` package (`pip install mistralai`).

Usage:
    export MISTRAL_API_KEY=...      # do not commit this
    python scripts/validate_api.py
"""
import json
import os
import sys

try:
    from mistralai import Mistral
except ImportError:
    sys.exit("mistralai not installed. Run: pip install mistralai")

api_key = os.environ.get("MISTRAL_API_KEY")
if not api_key:
    sys.exit("Set MISTRAL_API_KEY in your environment first.")

client = Mistral(api_key=api_key)


def rule(title: str) -> None:
    print("\n" + "=" * 60 + f"\n{title}\n" + "=" * 60)


rule("TEST 1 — chat.complete (model=mistral-large-latest)")
chat = client.chat.complete(
    model="mistral-large-latest",
    messages=[{"role": "user", "content": "What is Mistral AI? Answer in one sentence."}],
)
print("id:            ", chat.id)
print("model:         ", chat.model)
print("finish_reason: ", chat.choices[0].finish_reason)
print("content:       ", chat.choices[0].message.content)
print("usage:         ", chat.usage)

rule("TEST 2 — embeddings.create (model=mistral-embed)")
emb = client.embeddings.create(
    model="mistral-embed",
    inputs=["a puppy", "a young dog", "quarterly revenue"],
)
print("model:         ", emb.model)
print("count:         ", len(emb.data))
print("dimension:     ", len(emb.data[0].embedding))
print("first 3 dims:  ", [round(x, 4) for x in emb.data[0].embedding[:3]])
print("usage:         ", emb.usage)

# Sanity check the whole point of embeddings: puppy ~ young dog >> revenue.
import math


def cosine(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    na = math.sqrt(sum(x * x for x in a))
    nb = math.sqrt(sum(y * y for y in b))
    return dot / (na * nb)


v = [d.embedding for d in emb.data]
print("cos(puppy, young dog):     ", round(cosine(v[0], v[1]), 4))
print("cos(puppy, quarterly rev): ", round(cosine(v[0], v[2]), 4))
