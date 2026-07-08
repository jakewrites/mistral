import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

export function PageMock({
  title,
  badge,
  lede,
  footer,
  variant,
  children,
}: {
  title: string;
  badge?: string;
  lede?: string;
  footer?: string;
  variant?: 'live';
  children: ReactNode;
}): ReactNode {
  return (
    <div
      className={
        variant === 'live' ? `${styles.page} ${styles.live}` : styles.page
      }>
      <div className={styles.header}>
        <div className={styles.pageTitle}>{title}</div>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      {lede && <p className={styles.lede}>{lede}</p>}
      <div className={styles.cards}>{children}</div>
      {footer && <p className={styles.footer}>{footer}</p>}
    </div>
  );
}

export function JobCard({
  title,
  links,
  callout,
  children,
}: {
  title?: string;
  links?: string[];
  callout?: ReactNode;
  children: ReactNode;
}): ReactNode {
  return (
    <section className={styles.card}>
      {title && <div className={styles.cardTitle}>{title}</div>}
      <div className={styles.cardBody}>{children}</div>
      {callout && <div className={styles.callout}>{callout}</div>}
      {links && links.length > 0 && (
        <div className={styles.links}>
          {links.map((l) => (
            <span key={l} className={styles.link}>
              {l}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export function FaqMock({
  title,
  questions,
}: {
  title: string;
  questions: string[];
}): ReactNode {
  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.faq}>
        {questions.map((q) => (
          <div key={q} className={styles.faqRow}>
            <span>{q}</span>
            <span className={styles.faqToggle}>+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
