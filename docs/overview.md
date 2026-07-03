---
slug: /overview
title: Overview
description: How this assessment submission is structured and how to read it.
---

# Overview

This site is my submission for the Mistral AI Senior Technical Writer / Developer Educator assessment. It contains five exercises, presented as one documentation product so that the structure, tone, and cross-linking are themselves part of the answer.

:::note Why a site and not five documents
The role is about documentation systems, not isolated pages. Building the submission as a working Docusaurus site lets me demonstrate information architecture, progressive disclosure, and developer-experience decisions in the medium they actually live in, rather than describing them in prose.
:::

## The five exercises

| # | Exercise | What it demonstrates |
|---|----------|----------------------|
| 1 | [Documentation Audit & Strategy](/exercise-1/executive-summary) | Documentation strategy, information architecture, evidence-based recommendation |
| 2 | [Explaining Vector Embeddings](/exercise-2/overview) | Developer education, audience segmentation, technical accuracy |
| 3 | [Validating the Mistral API](/exercise-3-api-validation) | Ability to validate code, honest field reporting |
| 4 | [On-Prem Deployment IA](/exercise-4-onprem-ia) | Documentation architecture for a complex operational domain |
| 5 | [Workflows Enablement Guide](/exercise-5-workflows-enablement) | Internal enablement writing for a technical-sales audience |

## How to read this

**Exercise 1 is the centrepiece.** It is structured as a documentation strategy proposal, the kind of artefact a docs engineer would bring to a planning review, and it is backed by a real audit of the 420 live pages on `docs.mistral.ai`. Every recommendation cites the specific evidence that motivated it.

The remaining four exercises are shorter and self-contained. Each opens with an audience and a purpose statement, follows a consistent template, and ends with next steps.

## A note on prior work

Before this assessment I had already produced an independent information-architecture redesign of the Mistral documentation: a written recommendations document, a 420-row placement audit, an interactive IA tree, and a landing-page design. That work is the evidence base for Exercise 1 and is reused in Exercise 4. The original artefacts are preserved and embedded in the [Appendix](/appendix) so they can be inspected directly.

## A note on AI assistance

The assessment permits AI tools, and I used them, for drafting, for scaffolding this site, and for cross-checking technical claims. The judgement is mine: what to audit, how to weigh findings, which trade-offs to name, and what to leave out. The [About this submission](/about) page states plainly where AI helped and where it did not.

## Conventions used throughout

- **Admonitions** (`note`, `tip`, `caution`) flag asides, recommendations, and risks.
- **Tabs** separate parallel paths, Python vs. curl, beginner vs. expert.
- **Mermaid diagrams** carry structural and sequence information that prose handles poorly.
- **Cross-links and Next steps** connect pages into journeys rather than leaving them as islands.

:::tip Next step
Start with the [Exercise 1 Executive Summary](/exercise-1/executive-summary).
:::
