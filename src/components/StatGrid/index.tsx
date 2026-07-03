import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

export interface Stat {
  value: string;
  label: string;
  sub?: string;
}

export default function StatGrid({stats}: {stats: Stat[]}): ReactNode {
  return (
    <div className={styles.grid}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.value}>{s.value}</div>
          <div className={styles.label}>{s.label}</div>
          {s.sub && <div className={styles.sub}>{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}
