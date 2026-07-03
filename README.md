# Mistral Documentation Assessment

My submission for the Mistral AI **Senior Technical Writer / Developer Educator** assessment, built as a single Docusaurus site so that its information architecture and developer experience are part of the answer, not just described in prose.

**Live site:** https://jakewrites.github.io/mistral/

The five exercises:

1. **Documentation Audit & Strategy**, a strategy proposal backed by a real audit of the 420 live pages on `docs.mistral.ai` (the centrepiece).
2. **Explaining Vector Embeddings**, one concept in two versions: new-to-AI and experienced-engineer.
3. **Validating the Mistral API**, runnable Python + curl walkthroughs with expected vs. observed output and field notes.
4. **On-Prem Deployment IA**, an information-architecture *design* (not the prose), modelled on Kubernetes and Terraform.
5. **Workflows Enablement Guide**, an internal Solutions-Engineer cheat sheet for Mistral Workflows.

## Project structure

```
.
├── docs/                        # All exercise content (Markdown / MDX)
│   ├── overview.md              # Orientation: how to read the submission
│   ├── exercise-1/              # Centrepiece: the documentation audit
│   │   ├── executive-summary.mdx
│   │   ├── methodology.md
│   │   ├── strengths.md
│   │   ├── audit-findings.mdx   # Themed findings + interactive audit explorer
│   │   ├── recommendations.mdx  # Six recommendations (templated component)
│   │   ├── prioritisation.md
│   │   ├── example-rewrite.mdx
│   │   └── appendix.mdx
│   ├── exercise-2/              # Vector embeddings, Version A & B
│   ├── exercise-3-api-validation.mdx
│   ├── exercise-4-onprem-ia.md
│   ├── exercise-5-workflows-enablement.md
│   ├── appendix.mdx             # Source IA artefacts (embedded)
│   └── about.md                 # AI-use disclosure + where the judgement is
├── src/
│   ├── components/              # Reusable React components
│   │   ├── Recommendation/      # Observation/Evidence/Recommendation/Impact/Effort/Priority card
│   │   ├── AuditExplorer/       # Filterable, searchable view of all 420 audited pages
│   │   ├── ArtifactEmbed/       # Iframe wrapper for the original HTML artefacts
│   │   └── StatGrid/            # Headline stat tiles
│   ├── data/                    # audit.json + audit-summary.json (generated from the CSV)
│   ├── pages/index.tsx          # Custom landing page
│   └── css/custom.css           # Minimal theme (one accent; light + dark)
├── static/artifacts/           # Original IA artefacts: audit CSV, IA tree, landing page, docx
├── scripts/                    # Live API validation harness (Exercise 3)
│   ├── validate_api.py
│   └── validate_api.sh
├── docusaurus.config.ts
└── sidebars.ts
```

## Run it locally

Requires Node.js ≥ 18.

```bash
npm install
npm start          # dev server at http://localhost:3000/mistral/
```

## Build

```bash
npm run build      # static output in build/
npm run serve      # preview the production build locally
```

## Deploy (GitHub Pages)

Configured for `https://jakewrites.github.io/mistral/`.

```bash
GIT_USER=jakewrites npm run deploy
```

## Reproduce the API validation (Exercise 3)

```bash
pip install mistralai
export MISTRAL_API_KEY="your-key"   # never commit this
python scripts/validate_api.py       # SDK version
bash   scripts/validate_api.sh       # curl version
```

## Why the assessment is structured this way

- **One site, not five documents.** The role is about documentation *systems*. Presenting the work as a navigable site lets information architecture, progressive disclosure, and cross-linking be demonstrated in situ.
- **Exercise 1 is weighted as the centrepiece.** It is structured as a documentation-strategy proposal and backed by real evidence, a 420-row placement audit that is explorable in the browser and downloadable. Every recommendation cites the findings that motivated it.
- **Reusable components encode the templates.** The recommendation card and audit explorer make the structure consistent and the evidence interactive, rather than static tables.
- **Technical claims are verified, not asserted.** Factual claims were cross-checked against live `docs.mistral.ai`; Exercise 3 ships a runnable harness.
- **AI use is disclosed.** See [`docs/about.md`](docs/about.md) for exactly where AI assisted and where the judgement is mine.

## Colophon

Docusaurus (TypeScript) · Mermaid diagrams · custom React components · minimal single-accent theme with first-class dark mode.
