import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

interface ExerciseCard {
  n: string;
  title: string;
  blurb: string;
  to: string;
  tag: string;
}

const exercises: ExerciseCard[] = [
  {
    n: '01',
    title: 'Documentation Critique & Rewrite',
    blurb:
      'A documentation strategy proposal for the Mistral docs: a full-site structural placement review, three findings, and four prioritised recommendations.',
    to: '/exercise-1/executive-summary',
    tag: 'Centrepiece',
  },
  {
    n: '02',
    title: 'Explaining Vector Embeddings',
    blurb:
      'One concept, two reader jobs: a plain-language version to understand embeddings, and a rigorous version to design a retrieval system with them.',
    to: '/exercise-2/overview',
    tag: 'Developer education',
  },
  {
    n: '03',
    title: 'Validating the Mistral API',
    blurb:
      'Python and curl walkthroughs run against the live API, with expected vs. observed output, troubleshooting, and honest field notes.',
    to: '/exercise-3-api-validation',
    tag: 'Technical validation',
  },
  {
    n: '04',
    title: 'On-Prem Deployment IA',
    blurb:
      'An information-architecture design (not the prose) for self-hosted deployment, modelled on Kubernetes and Terraform documentation.',
    to: '/exercise-4-onprem-ia',
    tag: 'Information architecture',
  },
  {
    n: '05',
    title: 'Workflows Enablement Guide',
    blurb:
      'An internal cheat sheet for Solutions Engineers: how Workflows works, demo scenario, objections, limitations, and positioning.',
    to: '/exercise-5-workflows-enablement',
    tag: 'Internal enablement',
  },
];

const demonstrates = [
  'Documentation strategy',
  'Technical writing',
  'Developer education',
  'Technical validation',
  'Documentation architecture',
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation Assessment"
      description="Senior Technical Writer / Developer Educator assessment submission, Jake Cahill.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Mistral AI · Assessment submission</p>
          <h1 className={styles.title}>
            Senior Technical Writer / Developer Educator Assessment
          </h1>
          <p className={styles.lede}>
            Five exercises, presented as a single documentation product rather than a
            set of attachments. The goal is to show how I would think about, structure,
            and validate documentation for a developer audience, with my reasoning made
            visible at every step.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryBtn} to="/exercise-1/executive-summary">
              Start with the audit
            </Link>
            <Link className={styles.secondaryBtn} to="/overview">
              How to read this submission
            </Link>
          </div>
          <ul className={styles.chips}>
            {demonstrates.map((d) => (
              <li key={d} className={styles.chip}>
                {d}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.grid} aria-label="Exercises">
          {exercises.map((ex) => (
            <Link key={ex.n} to={ex.to} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardN}>{ex.n}</span>
                <span className={styles.cardTag}>{ex.tag}</span>
              </div>
              <h2 className={styles.cardTitle}>{ex.title}</h2>
              <p className={styles.cardBlurb}>{ex.blurb}</p>
              <span className={styles.cardLink}>Read</span>
            </Link>
          ))}
        </section>

        <section className={styles.note}>
          <p>
            <strong>A note on AI assistance.</strong> This assessment allows AI tools, and
            I used them. The judgement, what to audit, how to prioritise, which
            trade-offs to surface, is mine, and the{' '}
            <Link to="/overview#where-ai-assisted">Overview</Link> is explicit about where
            each was applied.
          </p>
        </section>
      </main>
    </Layout>
  );
}
