---
slug: /exercise-4-onprem-ia
title: 'Exercise 4 · On-Prem Deployment IA'
sidebar_label: 'Exercise 4: On-Prem IA'
description: An information-architecture design for Mistral on-prem / self-hosted deployment documentation.
---

# Information Architecture: On-Prem Deployment

<p className="doc-meta">Exercise 4 · Documentation architecture · This is the IA design, not the documentation itself</p>

The brief is explicit: design the information architecture for Mistral's on-prem deployment documentation, not the documentation itself. So this page is a design artefact. It defines the mental models, the navigation, the content-type separation, and the journeys, and it justifies each decision against how Kubernetes and Terraform solve the same problems. Both document genuinely hard self-managed software well, though not flawlessly, and the flaws are as instructive as the strengths.

This exercise dovetails with Exercise 1, and the two meet on a clean split. [R1](/exercise-1/recommendations#r1) treats managed and self-hosted as a **surface** for the content both deployments share. The task-based user guides (call the API, build a RAG pipeline, write a prompt) read almost identically whether Mistral runs the service or you do, so those stay one set of pages with a deployment-mode and version selector, not two copies.

This exercise is about the part that is *not* shared: the **operator side** of self-hosted. Installing, upgrading, scaling, observing, and securing a cluster are tasks that do not exist for a managed customer, and there is enough of that content, deep and sequential, to earn its **own navigation tree** rather than a toggle on a shared page. So self-hosting appears in the IA two ways: a selector on the shared user guides, and a dedicated operator tree for the lifecycle a platform engineer runs. Exercise 1 makes the case for the surface. Exercise 4 is the blueprint for that operator tree.

## Why on-prem deployment is hard to document

Self-hosting docs fail in predictable ways, and the failure is usually structural, not editorial:

1. **They mix audiences.** An evaluator deciding *whether* to self-host, an SRE *operating* a cluster, and a security reviewer *auditing* it need different things from the same corpus.
2. **They mix content types.** "Concepts", "how do I do X", and "what is every config flag" get interleaved on one page, so no reader can scan.
3. **They organise by tool, not by journey.** A page per backend (vLLM, TGI, TensorRT-LLM) with no spine leaves the reader to assemble the path (prerequisites, install, configure, validate, operate) themselves.

The design below is built to prevent all three.

## Mental model: the reader is on a journey, not at a page

The core design decision is to treat on-prem deployment as a **lifecycle** the reader moves through, and to make the top-level structure mirror that lifecycle. Every page belongs to a phase, and the reader always knows which phase they are in.

```mermaid
flowchart LR
  E[Evaluate<br/>should I self-host?] --> P[Plan<br/>sizing & prerequisites]
  P --> I[Install<br/>pick a backend, deploy]
  I --> C[Configure<br/>make it yours]
  C --> V[Validate<br/>prove it works]
  V --> O[Operate<br/>scale, upgrade, observe]
  O --> S[Secure<br/>harden & comply]
  O --> T[Troubleshoot<br/>when it breaks]
  S --> O
  T --> O
```

This is the same instinct behind the Kubernetes **"Setup"** journey (learning environment to production cluster) and Terraform's **"Get Started to Use Cases to Operations"** progression: the docs carry the reader through phases rather than dumping a flat reference.

## Content-type separation (the load-bearing decision)

Kubernetes and Terraform both separate content by *type*, following the Diátaxis model: Tutorials, How-to Guides, Concepts, and Reference are distinct and never blended. Kubernetes labels its sections exactly this way (Concepts, Tasks, Tutorials, Reference). Terraform separates hand-written guides and tutorials from language and provider reference that is largely generated and exhaustive.

The on-prem IA adopts the same separation as a hard rule:

| Content type | Answers | Example page | Rule |
|---|---|---|---|
| **Concept** | "How does this work / what is it?" | *How inference serving works* | Explains; never lists every flag |
| **Task (how-to)** | "How do I do X?" | *Deploy Mistral on Kubernetes with vLLM* | Goal-oriented, ordered steps, one outcome |
| **Tutorial** | "Walk me through my first one" | *Serve your first model on a single GPU* | Learning-oriented, safe to fail |
| **Reference** | "What is the exact value of X?" | *Server configuration parameters* | Exhaustive, scannable, no narrative |

:::note Why this matters more on-prem than anywhere else
Deployment is where readers most want to **look something up mid-incident** (a flag, a port, an env var) and least want to read prose. Keeping Reference exhaustive and separate, and keeping Tasks free of reference dumps, is what makes the docs usable at 2 a.m. This is the same reason [Recommendation R2](/exercise-1/recommendations#r2) keeps the main docs' Reference specs-only.
:::

## Proposed navigation

One **Self-managed Deployment** home, structured by lifecycle phase, with Reference broken out as its own scannable surface. This is not a new tab in the main docs navigation: per [R1](/exercise-1/recommendations#r1), self-hosting is a surface, and this tree is what that surface exposes, entered from the self-hosting pages in Models and the landing page's sovereign entry point.

```mermaid
flowchart LR
  Root[Self-managed Deployment] --> Overview[Overview & when to self-host]
  Root --> Plan[Plan]
  Root --> Install[Install]
  Root --> Operate[Operate]
  Root --> Secure[Security & Compliance]
  Root --> Trouble[Troubleshooting]
  Root --> Ref[Reference]

  Plan --> P1[Sizing & GPU requirements]
  Plan --> P2[Prerequisites & supported platforms]
  Plan --> P3[Architecture patterns]

  Install --> I1[Quickstart: single node]
  Install --> I2[Kubernetes + vLLM]
  Install --> I3[TGI / TensorRT-LLM backends]
  Install --> I4[Air-gapped install]

  Operate --> O1[Scaling & load balancing]
  Operate --> O2[Upgrades & rollback]
  Operate --> O3[Observability & health]
  Operate --> O4[Model & weight management]

  Secure --> S1[Network & isolation]
  Secure --> S2[Secrets & key management]
  Secure --> S3[Data residency & compliance]

  Ref --> R1[Server config parameters]
  Ref --> R2[Environment variables]
  Ref --> R3[Error codes & exit states]
  Ref --> R4[Compatibility matrix]
```

Navigation principles applied:

- **Lifecycle at the top level, tools one level down.** Backends (vLLM, TGI, TensorRT-LLM) are *choices within Install*, not top-level sections, mirroring how Kubernetes puts "container runtimes" under setup tasks rather than at the top, and how Terraform nests providers under a common workflow.
- **One "Overview" front door** that answers the evaluate question and routes the three audiences, exactly the role Terraform's "Introduction" and the Kubernetes "Overview" play.
- **Reference is a sibling, not a child, of the tasks.** It is reachable from every phase because that is how it is used.

### How readers reach this {#entry}

The tree above is a *destination*. Three entry points lead into it, because a self-hosted reader arrives three ways:

- **From the product.** R1's paired entry points (Vibe managed | Vibe self-hosted) inside Products, the main path for "can I run Vibe on my own infrastructure?"
- **From the landing page.** The *"deploy on your own infrastructure"* sovereign entry point ([landing-page design](/appendix#2-landing-page-design)).
- **From search.** The surface marker ([R1](/exercise-1/recommendations#r1)) keeps a deep landing oriented to its surface.

**The gated case: Vibe Enterprise.** Vibe Enterprise self-hosted is sold enterprise-to-enterprise, so its deep runbooks may sit behind an entitlement. That does not make it undiscoverable: per the [Considerations rule](/exercise-1/recommendations#considerations), a **public stub** states that self-hosting exists, when to choose it, and the entitlement-or-contact path. Discovery is public; the runbook may be gated.

## Deployment journeys

The IA encodes named journeys so the reader can follow a spine instead of assembling one. Each journey is an ordered path across the sections above.

```mermaid
sequenceDiagram
    participant R as Reader (SRE)
    participant D as Docs
    R->>D: "Should we self-host?" (Overview)
    D-->>R: Decision guide + trade-offs vs API
    R->>D: "What do we need?" (Plan / Sizing, Prerequisites)
    D-->>R: GPU/memory matrix, supported platforms
    R->>D: "Deploy it" (Install / K8s + vLLM)
    D-->>R: Ordered task, copy-paste manifests
    R->>D: "Is it healthy?" (Operate / Observability)
    D-->>R: Health checks, metrics to watch
    R->>D: "Lock it down" (Security)
    D-->>R: Network isolation, secrets, residency
```

**Primary journeys the IA must serve first-class:**

1. **Evaluator** to Overview to Plan (trade-offs, sizing) to decision. May never install.
2. **First deploy** to Quickstart (single node) to Validate. Learning-oriented, safe.
3. **Production deploy** to Plan to Install (K8s + vLLM) to Operate to Security. The real path.
4. **Air-gapped / sovereign** to Overview to Air-gapped install to Security (data residency). The differentiated path Mistral should feature, echoing the "Deploy on your own infrastructure" entry point in the [landing-page design](/appendix).

## Operations, security, troubleshooting

These three are first-class top-level phases, not appendices. The mistake most self-hosting docs make is treating them as afterthoughts.

- **Operations** is task-based and lifecycle-shaped: scaling, upgrades/rollback, observability, model management. It borrows Terraform's "operations and workflow" framing and Kubernetes' "Administer a Cluster" task cluster, so day-2 concerns get their own home, distinct from install.
- **Security & Compliance** is a *named destination*, because on-prem is often chosen *for* security and a reviewer needs to audit without reading install guides. It follows Kubernetes' pattern of a dedicated Security section rather than scattering security notes into task pages.
- **Troubleshooting** is structured as **symptom to cause to fix**, cross-linked from the tasks and operations pages that can produce each symptom, not a flat FAQ. Reference-grade error codes live in Reference. The *diagnosis narrative* lives here.

```mermaid
flowchart LR
  Sym[Symptom<br/>e.g. OOM on load] --> Cause[Likely causes<br/>GPU memory, model size]
  Cause --> Fix[Fixes<br/>quantization, sharding]
  Fix --> Ref2[Reference:<br/>memory requirements matrix]
```

## Versioning and deprecation for self-hosted docs {#versioning}

Managed docs need none of this. The product has one live version, so the docs are continuously deployed and unversioned. Self-hosted docs cannot work that way: an operator runs the version they installed, sometimes for years, and documentation for a version they do not run describes someone else's cluster. [R1](/exercise-1/recommendations#r1) gates self-hosted content by version. This section is the policy behind the gate.

- **The docs mirror the product support matrix.** Which versions get documented is not a docs decision. If Mistral supports v3.0 and v2.5, the docs maintain v3.0 and v2.5, and a docs version retires when its product version reaches end of life. One rule, no drift, and Support never has to explain why a supported product has unsupported docs.
- **Every supported version is hosted and switchable.** Self-hosted pages carry a version selector, the way Kubernetes serves its current and recent releases and Terraform versions its language and provider reference. The latest supported version lives at the unprefixed, canonical URL. Older supported versions live under a version segment (`/vibe/self-hosted/v2.5/...`), and the reader's choice is remembered across pages.
- **EOL versions are archived, not deleted.** Customers run old clusters long after end of life, and deleting the docs for software a customer still operates is how a 2 a.m. incident gets worse. An EOL version stays online as a frozen snapshot with a banner (what date it reached EOL, a link to the nearest supported version, a link to the migration guide). It leaves the version selector's default list, and it is marked `noindex` with a canonical pointing at the latest equivalent page, so archives never compete with the canonical URL in search. That is [R1](/exercise-1/recommendations#r1)'s discipline applied to time instead of locale.
- **A deprecation inside a version propagates to every surface.** The audit caught this failing live: fine-tuning carries a deprecation banner while its cookbooks still teach it with no notice. The rule per version is the same as the rule site-wide. A deprecation is not done until every page, example, and cookbook that teaches the capability is banner-marked or retired.

**What this looks like in Products.** Vibe ships managed and self-hosted, and its source lives once, under Products. The Vibe landing page offers two entry points, managed and self-hosted, and the reader picks once and browses only their surface's docs. The version selector exists only inside the self-hosted tree, because managed has no versions to select, and universal pages (model cards, prompting) sit outside the split. A feature that does not exist in the selected version says so and names the version that added it, which beats silently showing a screen the operator's install does not have. And because search drops readers into trees they did not choose, every page in a split tree opens with a surface marker and a one-click switch to its counterpart, per [R1](/exercise-1/recommendations#r1)'s wrong-door rule.

## Why this structure, summary of the borrowings

| Decision | Borrowed from | Rationale |
|---|---|---|
| Separate Concept / Task / Tutorial / Reference | Kubernetes (Diátaxis) | Each reader mode gets a surface it can scan |
| Lifecycle phases as top-level nav | Terraform (Get Started to Use Cases to Operations) | Readers deploy in phases; nav should match |
| Backends nested under Install | Both | Tool choice is a step, not a section |
| Reference exhaustive + generated where possible | Terraform provider/registry reference | Config surfaces are large and change often |
| Dedicated Security destination | Kubernetes Security section | On-prem is often chosen *for* security; auditors need a door |
| Symptom-based Troubleshooting | Kubernetes "Debug" tasks | Incidents are entered by symptom, not by cause |
| Versioned docs with an archive policy | Kubernetes versioned docs | Operators run old versions for years, so the docs must match what they run |

## Where the models fail, and what this design does instead

Borrowing only the good parts would be uncritical. Two specific failures in these docs shaped this design as much as their strengths did:

- **Kubernetes gives the same day-2 task two homes.** Cluster administration guidance appears under both Concepts ("Cluster Administration") and Tasks ("Administer a Cluster"), so an SRE mid-upgrade has to check two parents and reconcile the overlap. The lesson: labelled content types only work if admission is policed. This IA gives every operational task exactly one home under Operate, and Concept pages link to it rather than paraphrase it.
- **Terraform separates *provider* reference by surface, not just by section.** Tutorials and Terraform's own language reference live on the developer site, but each provider's resource reference lives in the Registry, a different site with its own sidebar and its own search scope. The jump from "follow the tutorial" to "look up this argument" crosses surfaces and loses that context. The lesson is *not* "don't separate reference". Reference **should** be its own section; a distinct content type is the whole point of Diátaxis and of [R2](/exercise-1/recommendations#r2). It is "don't separate it onto another **surface**." This IA keeps Reference a distinct section but on the same surface: same tree, same search index, one click from any phase. Separate section, same surface.

:::note What I deliberately did not do
I did not write the pages. I also did not design a page-per-backend top level, the most common on-prem docs anti-pattern: it optimises for the docs author's mental model (one tool = one page) over the reader's (one goal = one journey). The lifecycle spine is the whole point.
:::

:::tip Next step
Continue to [Exercise 5, Workflows Enablement](/exercise-5-workflows-enablement).
:::
