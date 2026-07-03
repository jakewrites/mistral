---
slug: /exercise-2/overview
title: 'Exercise 2 · Vector Embeddings'
sidebar_label: Overview
description: Explaining vector embeddings for two audiences, new-to-AI and experienced engineers.
---

# Explaining Vector Embeddings

<p className="doc-meta">Exercise 2 · Developer education · One concept, two audiences</p>

The brief is to explain one complex AI concept, **vector embeddings**, clearly. The most common failure mode in AI documentation is writing one page that serves no one: too much jargon for a newcomer, too much hand-waving for an engineer. So this exercise is deliberately split into **two versions of the same concept**, each written for a specific reader.

This split is itself the developer-education point: **audience segmentation is a documentation decision, not a writing style.** The same fact, "an embedding is a vector that represents meaning", needs a different scaffold depending on what the reader already knows.

## Choose your version

| Version | Audience | Assumes | Optimised for |
|---------|----------|---------|---------------|
| [**Version A**](/exercise-2/version-a) | Developers new to AI | Can code; no ML background | Building an accurate mental model |
| [**Version B**](/exercise-2/version-b) | Experienced engineers | Comfortable with vectors, ML basics | Making correct design decisions |

Both are technically accurate and both are grounded in Mistral's own embedding model, `mistral-embed`. Version A builds the intuition; Version B assumes it and moves straight to the trade-offs.

:::note Why not one page with a "beginners skip this" note
Inline difficulty toggles ask the reader to self-diagnose mid-sentence and usually fail both audiences. Two coherent narratives, each complete on its own, respect the reader's time more than one page that constantly qualifies itself.
:::

:::tip Start
New to embeddings? Start with [Version A](/exercise-2/version-a). Already comfortable? Go to [Version B](/exercise-2/version-b).
:::
