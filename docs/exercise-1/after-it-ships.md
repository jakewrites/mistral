---
slug: /exercise-1/after-it-ships
title: 'Exercise 1 · After it Ships'
sidebar_label: After it Ships
description: The signals that show whether the restructure worked, and the operating model that keeps Engineering, Product, and Support equally served.
---

# After it Ships

Every recommendation names an expected impact; this page is how those get checked. It starts with the hard part (how you measure an information-architecture change at all), then the signals to watch after each phase ships, and the operating model that keeps the docs serving Engineering, Product, and Support on equal terms rather than whoever asks loudest.

## Measuring an IA change

An IA change moves *findability*, not content, so the usual metrics mislead: pageviews, time-on-page, and bounce all shift for reasons unrelated to whether the reader found what they needed. Measuring a restructure with attention metrics is the classic mistake. The honest measure is **task success**, and the instrument for it is **tree testing**.

A tree test gives a reader a real task and lets them navigate the naked tree (labels only, no page content, no visual design), so it measures the structure and nothing else. It records three things: **success** (did they reach the right page?), **directness** (without backtracking?), and **time-to-locate**. It is the reverse of the card sort in [Open Questions](/exercise-1/open-questions).

Two properties make it the right tool here. It **isolates the IA from confounders**: the same tasks run on two trees, with nothing else changing, so a product launch or a traffic swing cannot muddy the result. And it works **before anything ships**, so the proposed tree can be validated against the current one cheaply, which de-risks the whole restructure instead of betting on it.

The task set is drawn from the journeys the audit found broken, so "success" means the misplaced pages now get found:

| Task | Finding it tests |
|---|---|
| Create or reset an API key | The Studio decode ([the developer walk](/exercise-1/executive-summary#where-the-developer-path-broke)) |
| Find what error code 1500 means | Error glossary placement ([R2](/exercise-1/recommendations#r2)) |
| Pick a model for RAG | Model selection (Models) |
| Turn on SSO for your team | Admin |
| Find how to self-host Le Chat | The surface axis ([R1](/exercise-1/recommendations#r1)) |
| Find the changelog | The Developers junk drawer ([R1](/exercise-1/recommendations#r1)) |

**Leading vs lagging.** Tree-test success and directness are the *leading* indicator: measurable before ship, cheap, and causal. The live signals below (time-to-first-successful-call, zero-result search, "couldn't find it" tickets) are *lagging*: they are the real-world outcome, but confounded, so they confirm the win rather than prove it.

## Baseline first

A signal means nothing without a baseline, and an IA change needs two.

**The task-success baseline** is the one that matters. Run the tree test above on the *current* tree before touching anything, and record the success rate, directness, and time for each task. That is the number the restructure has to beat, on the same tasks, on the new tree: first pre-build (a cheap go/no-go), then live after ship.

**The behavioral baseline** captures four weeks of live data for the lagging signals: internal-search queries (especially zero-result queries), Search Console impressions and click-through for the pages being redirected, nav-path analytics, and the support team's docs-related ticket count. A day of work, and together the two baselines turn "the restructure felt better" into two numbers: one causal, one real-world.

## Signals per recommendation

| Recommendation | Signal to watch | What good looks like |
|---|---|---|
| [R1](/exercise-1/recommendations#r1): reorganise + dissolve Developers | 301 hit counts on redirected pages; zero-result searches for "changelog", "SDK", "error codes"; bounce and scroll-and-exit on section hubs and the landing page | Redirect traffic decays as links update and one canonical URL wins each query; the zero-result list shrinks; hubs route rather than dead-end, and persona entry points get clicked, not scrolled past |
| [R2](/exercise-1/recommendations#r2): Reference discipline | Time-on-page for Reference, which should be short because it is a look-up surface; repeat visits to the same Reference page within a session | Reference visits get shorter, not longer; readers confirm and leave |
| [R3](/exercise-1/recommendations#r3): agent-ready docs | `.md` links advertised in `llms.txt` that resolve; the isitagentready.com score against its 7/100 baseline; AI-bot hits and agent-sourced referrals in server logs once `robots.txt` ships | Every advertised `.md` URL returns 200; the agent-readiness score climbs off its 7/100 floor; AI crawlers appear in logs and cite canonical URLs, not duplicates |

## The one product metric that matters most

The metric I would fight for is **time-to-first-successful-call**: the elapsed time between a user creating an API key in Studio and their first `200` response. It needs one join between product telemetry and docs analytics, and it is the most honest measure of Get Started, because every misplaced page and redundant URL the audit found ultimately shows up as minutes added to that funnel. If the restructure works, the median drops.

## The support signal

Word of mouth says "the docs are better." Ticket data says where they still fail. Two cheap mechanisms:

- **Tag docs-related tickets at triage.** Tag "couldn't find it" separately from "found it but it was wrong". The first measures this proposal; the second feeds the content backlog the [executive summary](/exercise-1/executive-summary) deliberately scoped out.
- **Track the top deflection articles.** These are the ten pages support agents link most often. If agents keep linking a page, readers are not finding it themselves. That is a placement bug before it is a content bug.

## Keeping Engineering, Product, and Support equally served {#equally-served}

A docs team's failure mode is serving whoever is loudest that quarter. The defence is not goodwill; it is an intake process where each stakeholder has a defined channel, a defined contribution, and a defined return.

| Stakeholder | What they give the docs | What they get back | Mechanism |
|---|---|---|---|
| Engineering | Review of technical accuracy; the OpenAPI spec as the source for the API reference | Fewer interruptions, because the reference answers what Slack used to | Docs-as-code: PRs reviewed like code, and the reference generated from the spec so samples cannot drift (the drift is real; see [Gap 2 in Exercise 3](/exercise-3-api-validation#documentation-gaps-i-found)) |
| Product | Launch briefs and feature intent, before GA; deprecation notices at sunset | Docs shipped with the feature, not weeks after; no stale guidance after retirement | Docs in the launch definition-of-done (no docs, no GA sign-off) and in the deprecation checklist (a capability is not retired until every surface that teaches it, cookbooks included, is banner-marked or removed; the audit caught a live miss) |
| Support | Ticket tags and deflection-article data | A backlog that fixes the pages costing them the most tickets | A standing docs-backlog lane fed by ticket data, triaged monthly against the same impact/effort grid as the [Sequencing plan](/exercise-1/recommendations#sequencing) |

Requests from all three land in one backlog and get ranked by the same impact and effort criteria used to sequence R1 to R3. That is what "equally served" means in practice: not equal airtime, but one transparent queue where a Support-sourced fix can outrank a Product-sourced nice-to-have on evidence.

:::note What I would not measure
Pageviews. A pageview cannot distinguish "found it" from "still looking", and optimising for it rewards the redundant pages this proposal removes. Every signal above is a proxy for task completion, not attention.
:::

:::tip Next
The calls this proposal deliberately leaves open are on [Open Questions](/exercise-1/open-questions).
:::
