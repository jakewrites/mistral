---
slug: /exercise-1/strengths
title: 'Exercise 1 · Strengths'
sidebar_label: Strengths
description: What the current Mistral documentation does well and the restructure must preserve.
---

# Strengths

An audit that only lists problems is a liability: it invites a rebuild where a refactor would do. The current documentation has real strengths, and naming them sets the boundary of the proposal, **what not to touch.**

## Quickstarts are genuinely fast

The quickstart set is task-shaped and honest about time cost ("5 min to complete", "under 15 min"). A developer can install an SDK and make a first API call quickly, and the RAG and agent quickstarts get a working pipeline running without ceremony. This is the strongest part of the docs and the model the rest should aspire to.

The *only* problem with quickstarts is that they exist at several URLs at once, a placement issue, addressed in [Recommendation R1](/exercise-1/recommendations#r1), not a content one.

## Model cards are consistent and specific

Each model has a card with context window, pricing, availability, and capabilities in a predictable shape. This consistency is exactly what a Reference surface should provide, and it should be protected: the restructure keeps model cards as the canonical, specs-only source of truth and moves *guidance* (how to prompt, how to sample) out of Models and into Build.

## The Cookbooks are a strong secondary surface

The Cookbooks, 127 runnable, notebook-style recipes, are a valuable, self-contained corpus. They should stay exactly where they are functionally: linked as a **utility surface** from the top navigation rather than folded into the section hierarchy. Cookbooks answer "show me a complete example," which is a different mode from "teach me this task," and conflating the two would weaken both.

## Role-based orientation is the right instinct

The docs already recognise that a Le Chat user, a developer, and an org admin arrive with different goals. That instinct is correct, but it is currently expressed as *structure* (separate top-level sections) when it should be expressed as *entry points* (a landing page that routes each persona to shared, task-based content). The proposal keeps the instinct and changes only its implementation.

## What this means for the proposal

| Strength | Disposition in the proposal |
|----------|-----------------------------|
| Fast, task-shaped quickstarts | **Preserve**; consolidate to canonical URLs |
| Consistent model cards | **Preserve** as specs-only Reference |
| Cookbooks corpus | **Preserve**; keep as a utility link |
| Persona awareness | **Preserve the intent**; re-express as landing-page entry points |

:::note The point of this page
Everything above survives the restructure. The recommendations that follow change *where things live and how many copies exist*, not the quality bar the team has already set.
:::

:::tip Next step
Now the evidence: explore the [Audit Findings](/exercise-1/audit-findings).
:::
