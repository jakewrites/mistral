#!/usr/bin/env bash
# Validation harness for Exercise 3 — the curl half.
# Requires MISTRAL_API_KEY in the environment. Do not commit your key.
set -euo pipefail

: "${MISTRAL_API_KEY:?Set MISTRAL_API_KEY first}"

echo "=== TEST 1 — POST /v1/chat/completions ==="
curl -sS https://api.mistral.ai/v1/chat/completions \
  -H "Authorization: Bearer ${MISTRAL_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mistral-large-latest",
    "messages": [{"role": "user", "content": "What is Mistral AI? Answer in one sentence."}]
  }' | python3 -m json.tool

echo
echo "=== TEST 2 — POST /v1/embeddings (note: field is \"input\", singular) ==="
curl -sS https://api.mistral.ai/v1/embeddings \
  -H "Authorization: Bearer ${MISTRAL_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mistral-embed",
    "input": ["a puppy", "a young dog", "quarterly revenue"]
  }' | python3 -c "import sys,json; d=json.load(sys.stdin); print('model:', d['model']); print('count:', len(d['data'])); print('dim:', len(d['data'][0]['embedding'])); print('usage:', d['usage'])"
