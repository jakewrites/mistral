---
slug: /exercise-2/overview
title: 'Exercise 2 · Vector Embeddings'
sidebar_label: Overview
description: One concept, two reader jobs. Understand embeddings, and design a retrieval system with them.
---

# Explaining Vector Embeddings

<p className="doc-meta">Exercise 2 · Developer education · One concept, two jobs</p>

The brief asks for one complex concept, **vector embeddings**, explained for two readers, and labels them *Version A* (new to it) and *Version B* (experienced). I deliver them as two real documents:

- [**What are embeddings?**](/exercise-2/version-a): the brief's Version A.
- [**Design a retrieval system with embeddings**](/exercise-2/version-b): the brief's Version B.

And I made a sharper cut than a difficulty split, the same one [Exercise 1](/exercise-1/recommendations#r1) argues for: **split by the reader's job, not their experience level.**

## The two jobs

The two readers do not want the same explanation at two depths. They want two different things:

| | What are embeddings? | Design a retrieval system |
|---|---|---|
| **The job** | *Understand what an embedding is* | *Design a retrieval system that uses them* |
| Reader | Developer new to AI | Experienced engineer or researcher |
| Assumes | Can code; no ML background | Comfortable with vectors and ML basics |
| Shape | Narrative, analogy, one diagram | Decision tables, formulas, trade-offs |
| Ends with | A mental model | Design calls: dimensionality, metric, index, retrieval quality |

The design guide is not "the concept one, deeper." It is a **different deliverable**: a design guide, not a longer tutorial. An expert should not have to scroll past the map-of-meaning analogy to reach `nprobe` versus `efSearch`, and a newcomer will never need to.

Both are technically accurate and grounded in Mistral's own `mistral-embed`. The concept guide builds the intuition; the design guide assumes it and goes straight to the trade-offs.

## Why two pages, not one progressive page

The real objection is not "why not a *beginners-skip-this* toggle". Those fail, because they ask the reader to self-diagnose mid-sentence. It is the stronger one: *why not one page that starts simple and builds up?* That is genuine progressive disclosure, and it is exactly what [Exercise 1](/exercise-1/recommendations#r1) prescribes when a page serves two readers. So this split has to survive my own doctrine, or it is an inconsistency.

It survives on the test Exercise 1 uses: **is this one job at two depths, or two different jobs?**

- **One job at two depths**, like *prompting*, where a Vibe user and a developer both want "how do I steer the model," just at different depths. That gets **one progressive page**.
- **Two different jobs**, like *understand the concept* versus *design the system*. Different deliverables, different structures (narrative versus decision tables). That gets **two pages**.

Embeddings is the second case. And I split by the *job*, not the audience, which is why the reader never lands in the wrong document. Split it the other way, into an audience-named "beginner" page and an "advanced" page, and you have rebuilt the exact anti-pattern Exercise 1 spends its length attacking.

:::tip Start
New to the concept? Start with [What are embeddings?](/exercise-2/version-a). Building a retrieval system? Read [Design a retrieval system with embeddings](/exercise-2/version-b).
:::
