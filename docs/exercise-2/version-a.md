---
slug: /exercise-2/version-a
title: 'Vector Embeddings · Version A'
sidebar_label: 'Version A: New to AI'
description: Vector embeddings explained for developers who are new to AI, using analogies and diagrams.
---

# Vector Embeddings, from scratch

<p className="doc-meta">Audience: developers who can code but are new to AI. No maths required.</p>

Computers are good with numbers and bad with meaning. The word "dog" is just three bytes to a computer, it has no idea that "dog" is closer to "puppy" than to "spreadsheet". **Embeddings are how we fix that.** They turn a piece of text into a list of numbers that captures what it *means*, so that a computer can compare meanings the way it compares numbers.

## The one-sentence version

> An embedding gives every piece of text a position on a giant map of meaning, where things that mean similar things end up near each other.

That map has far more than two directions, but the intuition is exactly a map: nearby = similar in meaning, far apart = unrelated.

## A picture

```mermaid
flowchart LR
  T1["'a puppy'"] --> M[Embedding model]
  T2["'a young dog'"] --> M
  T3["'quarterly revenue'"] --> M
  M --> V1["[0.21, -0.44, 0.88, …]"]
  M --> V2["[0.19, -0.41, 0.90, …]"]
  M --> V3["[-0.77, 0.12, -0.03, …]"]
```

The model reads text and outputs a list of numbers, a **vector**. "A puppy" and "a young dog" get almost the same numbers because they mean almost the same thing. "Quarterly revenue" gets very different numbers.

## The map analogy, made concrete

Imagine placing every sentence as a pin on a map:

```mermaid
flowchart TB
  subgraph Map [Map of meaning]
    P1((puppy))
    P2((young dog))
    P3((kitten))
    P4((invoice))
    P5((tax form))
  end
  P1 -.near.- P2
  P1 -.nearish.- P3
  P4 -.near.- P5
```

- "puppy" and "young dog" sit almost on top of each other.
- "kitten" is nearby, also a baby animal, but not a dog.
- "invoice" and "tax form" are off in a completely different neighbourhood.

The embedding model decides all these positions for you, from the text alone.

## Why this is useful: search by meaning

Ordinary search matches **words**. If you search a support site for "my card was declined" but the article says "payment failed", keyword search may miss it, no words in common.

Embeddings match **meaning**. Both phrases land in the same neighbourhood of the map, so a search that compares embeddings finds the article even with zero shared words. This is the engine behind modern AI search and behind **RAG** (retrieval-augmented generation), where an AI app looks up relevant text before answering.

```mermaid
flowchart LR
  Q["User asks:<br/>'my card was declined'"] --> E[Embed the question]
  E --> S[Find the nearest<br/>document embeddings]
  S --> D["Article:<br/>'Why payments fail'"]
  D --> A[Send article + question<br/>to the model to answer]
```

## Try it with Mistral

Mistral has an embedding model called `mistral-embed`. You give it text; it gives you the numbers.

```python
import os
from mistralai import Mistral

client = Mistral(api_key=os.environ["MISTRAL_API_KEY"])

response = client.embeddings.create(
    model="mistral-embed",
    inputs=["a puppy", "a young dog", "quarterly revenue"],
)

# Each input becomes a list of 1024 numbers.
for item in response.data:
    print(len(item.embedding), item.embedding[:3])
```

```text
1024 [0.021, -0.044, 0.088]
1024 [0.019, -0.041, 0.090]
1024 [-0.077, 0.012, -0.003]
```

Every piece of text becomes a list of **1024 numbers**, its coordinates on the map. The first two are nearly identical; the third is nowhere near them.

:::tip The mental model to keep
Text goes into the embedding model and comes out as a point in space. Similar meanings land at nearby points. Everything else (semantic search, RAG, clustering, recommendations) is just measuring distances between those points.
:::

## Where to go next

You now have the intuition. The engineering questions (how similarity is measured, how search stays fast over millions of vectors, and what trade-offs you are signing up for) are covered in [Version B](/exercise-2/version-b).

:::note Next step
Read [Version B, for experienced engineers](/exercise-2/version-b), or see embeddings used in a live request in [Exercise 3](/exercise-3-api-validation).
:::
