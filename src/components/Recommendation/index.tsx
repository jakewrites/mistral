import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

type Priority = 'P1' | 'P2' | 'P3';
type Scale = 'High' | 'Medium' | 'Low';

interface RecommendationProps {
  /** Stable identifier, e.g. "R1", referenced from the Prioritisation table. */
  id: string;
  title: string;
  priority: Priority;
  /** Expected impact magnitude, shown as a pill. */
  impact: Scale;
  /** Implementation effort, shown as a pill. */
  effort: Scale;
  observation: ReactNode;
  /** Concrete evidence, pass audit rows, counts, URLs as children. */
  children: ReactNode;
  recommendation: ReactNode;
  expectedImpact: ReactNode;
}

const priorityLabel: Record<Priority, string> = {
  P1: 'P1 · Now',
  P2: 'P2 · Next',
  P3: 'P3 · Later',
};

export default function Recommendation({
  id,
  title,
  priority,
  impact,
  effort,
  observation,
  children,
  recommendation,
  expectedImpact,
}: RecommendationProps): ReactNode {
  return (
    <section className={styles.card} id={id.toLowerCase()}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.id}>{id}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.pills}>
          <span className={`${styles.pill} ${styles[`prio${priority}`]}`}>
            {priorityLabel[priority]}
          </span>
          <span className={styles.pill}>Impact: {impact}</span>
          <span className={styles.pill}>Effort: {effort}</span>
        </div>
      </header>

      <dl className={styles.body}>
        <dt>Observation</dt>
        <dd>{observation}</dd>

        <dt>Evidence</dt>
        <dd className={styles.evidence}>{children}</dd>

        <dt>Recommendation</dt>
        <dd>{recommendation}</dd>

        <dt>Expected impact</dt>
        <dd>{expectedImpact}</dd>
      </dl>
    </section>
  );
}
