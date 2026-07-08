---
slug: /overview
title: Overview
description: How this assessment submission is structured, how to read it, where the judgement is mine, and where AI assisted.
---

# Overview

This is my submission for the Mistral AI Senior Technical Writer / Developer Educator assessment: five exercises, built as one working documentation site rather than five attachments, because the structure, tone, and cross-linking are themselves part of the answer.

:::note Why a site and not five documents
The role is about documentation systems, not isolated pages. Building the submission as a working Docusaurus site lets me demonstrate information architecture, progressive disclosure, and developer-experience decisions in the medium they actually live in, rather than describing them in prose.
:::

## The five exercises

| # | Exercise | What it demonstrates |
|---|----------|----------------------|
| 1 | [Documentation Critique & Rewrite](/exercise-1/executive-summary) | Documentation strategy, information architecture, evidence-based recommendation |
| 2 | [Explaining Vector Embeddings](/exercise-2/overview) | Developer education, reader calibration, technical accuracy |
| 3 | [Validating the Mistral API](/exercise-3-api-validation) | Ability to validate code, honest field reporting |
| 4 | [On-Prem Deployment IA](/exercise-4-onprem-ia) | Documentation architecture for a complex operational domain |
| 5 | [Workflows Enablement Guide](/exercise-5-workflows-enablement) | Internal enablement writing for a technical-sales audience |

## How to read this

**Exercise 1 is the centrepiece.** The brief is open, so it reads the docs through one deliberate lens, information architecture, because findability is the binding constraint on a platform expanding this fast. It is structured as a documentation strategy proposal, the kind of artefact a docs engineer would bring to a planning review, and it is backed by a structural audit of `docs.mistral.ai`. Every recommendation cites the specific evidence that motivated it, and the proposal names the calls it leaves open. The IA tree and landing-page design behind it are embedded in the [Appendix](/appendix), so claims can be checked at source.

The remaining four exercises are shorter and self-contained. Each opens with an audience and a purpose statement, follows a consistent template, and ends with next steps.

## One writer, five readers

Audience calibration is easiest to judge across the whole submission, because the same platform is written up five ways. The sharpest contrast is Exercise 3 against Exercise 5: the same API, once for a self-serve developer validating it alone at a terminal, once for a Solutions Engineer selling it in a room.

| Exercise | Reader | What changes for them |
|---|---|---|
| 1 | Docs and engineering leadership | Strategic register; every claim costed and evidenced; no tutorials |
| 2A | Developer new to AI | Analogy before API; one mental model; no maths |
| 2B | Experienced engineer | No scaffolding; straight to trade-offs, metrics, and failure modes |
| 3 | Self-serve developer | Step-by-step, exact commands, verbatim outputs and error bodies |
| 5 | Solutions Engineer | Terse and objection-driven; demo script and talk tracks; no code |

(Exercise 4 is absent from the table by design: it is an information-architecture blueprint, not prose written for a single reader, so it has no one voice to place here.)

Two readers sit outside that table but inside the proposal. The **Vibe user**, Mistral's least technical, who never touches the API, is served through Products (UI-first) and the plain-language side of shared pages; [the Audit walks all three reader journeys](/exercise-1/audit-findings#three-journeys). And one reader further out than any human: the **agent**. Mistral's own models, coding assistants, and Vibe itself now fetch and cite these docs, yet docs.mistral.ai scores just **7/100** on an *"is it agent ready?"* probe. The spectrum runs Vibe user → developer → infrastructure engineer → agent, and the agent wants what the humans do: one canonical home per thing ([R3](/exercise-1/recommendations#r3)).

## Where the judgement is mine

The assessment permits AI assistance and asks that my own thinking be clearly visible, so this section and the next make the line explicit: what I decided, and what a tool helped me produce. These are decisions, not outputs. They are the parts a reviewer should weigh:

- **The audit's structure.** Choosing to reduce the review to three themed structural findings, each with a one-line placement rule behind it, rather than a page-by-page dump.
- **The findability score.** Scoring findability (a 4, the axis I assessed) rather than grading content I did not audit, and saying so plainly.
- **The six-section architecture plus an orthogonal managed/self-hosted surface axis**, and the placement principles behind it, including the genuinely contestable calls (modelling self-hosting as a surface rather than a section of its own, folding Evaluate & Ship into Build, and keeping Cookbooks as a utility link rather than a section).
- **The prioritisation.** Sequencing R1's config-only parts first for a fast, low-risk win and holding the Reference admission test (R2) as a guardrail is a judgement about change management, not just ranking.
- **The task-based split in Exercise 2.** Treating *understand embeddings* and *design a retrieval system* as two different jobs, not one concept at two difficulty levels, and reconciling that with Exercise 1's split-by-task rule.
- **The `input` vs `inputs` finding in Exercise 3**, noticing that the REST field and SDK argument disagree, and deciding it was worth foregrounding as the thing most likely to trip a reader.
- **The Exercise 4 IA**, including the deliberate refusal to make a page-per-backend top level, and the specific borrowings from Kubernetes and Terraform.
- **The Exercise 5 framing**, leading SEs with durability, own-infra execution, and the "kill a worker" demo moment.

## Where AI assisted

I used AI tools (Claude) deliberately and disclose it plainly:

- **Applying the placement rules and drafting prose.** I designed the information architecture and wrote the placement rules. AI helped apply them and draft from my outlines, which I then reviewed and corrected for accuracy and voice. The taxonomy, the rules, and the judgement are mine.
- **Scaffolding this Docusaurus site** and building the reusable React components (the recommendation card, the artifact embeds).
- **Cross-checking technical claims** against the live `docs.mistral.ai` (model ids, endpoints, the SDK surface, the embeddings dimension, and the Workflows architecture) rather than asserting them from memory.

What AI did **not** do: define the information architecture or the placement rules, decide what to audit, how to weigh findings, which trade-offs to name, or how to structure the argument. Those are the judgements above, and they are mine.

## Technical validation

Every load-bearing factual claim was verified against the live Mistral documentation at the time of writing (July 2026): the existence and contents of the `Developers` section, the glossary filed under Getting Started, the `mistral-embed` 1024-dimension output, the chat and embeddings endpoints and request shapes, and the Temporal-based hybrid architecture of Workflows. [Exercise 3](/exercise-3-api-validation) ships a runnable harness so its results can be reproduced against a live key.

## Colophon

- **Built with** Docusaurus (TypeScript), with Mermaid for diagrams and a small set of custom React components.
- **Design:** a single warm accent on a restrained neutral palette, system fonts, and first-class light and dark modes. Minimal by intent: the content is the product.
- **Source:** [github.com/jakewrites/mistral](https://github.com/jakewrites/mistral). See the [README](https://github.com/jakewrites/mistral#readme) to run it locally.

:::tip Start reading
Begin with the [Exercise 1 Executive Summary](/exercise-1/executive-summary).
:::
