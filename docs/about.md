---
slug: /about
title: About this submission
sidebar_label: About
description: How this submission was built, where AI assisted, and where the judgement is mine.
---

# About this submission

<p className="doc-meta">Read this to understand how the submission was made and how to weigh it.</p>

The assessment permits AI assistance and asks that my own thinking be clearly visible. This page is my attempt to make the line explicit, what I decided, and what a tool helped me produce.

## How to read the submission

Read in sidebar order. [Exercise 1](/exercise-1/executive-summary) is the centrepiece and the best signal of how I think about documentation strategy; the other four are shorter and self-contained. The [Appendix](/appendix) holds the original artefacts so claims can be checked at source.

## Where the judgement is mine

These are decisions, not outputs, the parts a reviewer should weigh:

- **The audit's structure.** Choosing to model the audit as one row per URL with a `writer_placement_rule`, and reducing 420 pages to four themed findings rather than a spreadsheet dump.
- **The six-section architecture** and the five placement principles behind it, including the calls that are genuinely contestable (folding Evaluate & Ship into Build; keeping Cookbooks as a utility link rather than a section).
- **The prioritisation.** Sequencing R1 first for a fast, low-risk win and holding R5/R6 as guardrails is a judgement about change management, not just ranking.
- **The two-audience split in Exercise 2**, and the decision to write two coherent narratives rather than one page with difficulty toggles.
- **The `input` vs `inputs` finding in Exercise 3**, noticing that the REST field and SDK argument disagree, and deciding it was worth foregrounding as the thing most likely to trip a reader.
- **The Exercise 4 IA**, including the deliberate refusal to make a page-per-backend top level, and the specific borrowings from Kubernetes and Terraform.
- **The Exercise 5 framing**, leading SEs with durability, own-infra execution, and the "kill a worker" demo moment.

## Where AI assisted

I used AI tools (Claude) deliberately and disclose it plainly:

- **Drafting and tightening prose** from my outlines and decisions, then edited for accuracy and voice.
- **Scaffolding this Docusaurus site** and building the reusable React components (the recommendation card, the audit explorer, the artifact embeds).
- **Cross-checking technical claims** against the live `docs.mistral.ai`, model ids, endpoints, the SDK surface, the embeddings dimension, and the Workflows architecture, rather than asserting them from memory.
- **Generating the audit summary statistics** from the CSV programmatically at build time.

What AI did **not** do: decide what to audit, how to weigh findings, which trade-offs to name, or how to structure the argument. Those are the judgements above, and they are mine.

## Technical validation

Every load-bearing factual claim was verified against the live Mistral documentation at the time of writing (July 2026): the existence of the `Developers` section, the duplicated quickstart URLs, prompt-engineering and sampling filed under `Models`, the `mistral-embed` 1024-dimension output, the chat and embeddings endpoints and request shapes, and the Temporal-based hybrid architecture of Workflows. [Exercise 3](/exercise-3-api-validation) ships a runnable harness so its results can be reproduced against a live key.

## Colophon

- **Built with** Docusaurus (TypeScript), with Mermaid for diagrams and a small set of custom React components.
- **Design:** a single warm accent on a restrained neutral palette; system fonts; light and dark both first-class. Minimal by intent, the content is the product.
- **Source:** [github.com/jakewrites/mistral](https://github.com/jakewrites/mistral). See the [README](https://github.com/jakewrites/mistral#readme) to run it locally.

:::tip Start reading
Begin with the [Exercise 1 Executive Summary](/exercise-1/executive-summary).
:::
