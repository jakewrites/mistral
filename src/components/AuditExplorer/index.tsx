import React, {useMemo, useState, type ReactNode} from 'react';
import auditData from '@site/src/data/audit.json';
import styles from './styles.module.css';

interface Row {
  url: string;
  page_title: string;
  proposed_l1: string;
  proposed_l2: string;
  proposed_l3: string;
  proposed_l4: string;
  url_flag: string;
  writer_placement_rule: string;
  flag_type: string;
}

const rows = auditData as Row[];

const FLAG_ORDER = ['DUPLICATE', 'REDIRECT', 'MOVE', 'KEEP'];
const PAGE_SIZE = 40;

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean))).sort();
}

const flagClass: Record<string, string> = {
  DUPLICATE: styles.flagDuplicate,
  REDIRECT: styles.flagRedirect,
  MOVE: styles.flagMove,
  KEEP: styles.flagKeep,
};

export default function AuditExplorer(): ReactNode {
  const [query, setQuery] = useState('');
  const [l1, setL1] = useState('');
  const [flag, setFlag] = useState('');
  const [limit, setLimit] = useState(PAGE_SIZE);

  const l1Options = useMemo(() => uniqueSorted(rows.map((r) => r.proposed_l1)), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (l1 && r.proposed_l1 !== l1) return false;
      if (flag && r.flag_type !== flag) return false;
      if (!q) return true;
      return (
        r.url.toLowerCase().includes(q) ||
        r.page_title.toLowerCase().includes(q) ||
        r.writer_placement_rule.toLowerCase().includes(q) ||
        r.url_flag.toLowerCase().includes(q)
      );
    });
  }, [query, l1, flag]);

  const visible = filtered.slice(0, limit);
  const shortPath = (url: string) =>
    url.replace(/^https?:\/\/docs\.mistral\.ai/, '') || '/';

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search 420 pages, URL, title, or placement rule…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setLimit(PAGE_SIZE);
          }}
          aria-label="Search audited pages"
        />
        <select
          className={styles.select}
          value={l1}
          onChange={(e) => {
            setL1(e.target.value);
            setLimit(PAGE_SIZE);
          }}
          aria-label="Filter by proposed top-level section"
        >
          <option value="">All sections</option>
          {l1Options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={flag}
          onChange={(e) => {
            setFlag(e.target.value);
            setLimit(PAGE_SIZE);
          }}
          aria-label="Filter by audit flag"
        >
          <option value="">All actions</option>
          {FLAG_ORDER.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <p className={styles.count}>
        Showing <strong>{Math.min(limit, filtered.length)}</strong> of{' '}
        <strong>{filtered.length}</strong> pages
        {filtered.length !== rows.length ? ` (filtered from ${rows.length})` : ''}
      </p>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Current URL</th>
              <th>Proposed placement</th>
              <th>Action</th>
              <th>Writer placement rule</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => {
              const placement = [r.proposed_l1, r.proposed_l2, r.proposed_l3, r.proposed_l4]
                .filter(Boolean)
                .join(' / ');
              return (
                <tr key={r.url}>
                  <td>
                    <code className={styles.url}>{shortPath(r.url)}</code>
                  </td>
                  <td>{placement}</td>
                  <td>
                    {r.flag_type && r.flag_type !== 'KEEP (implicit)' ? (
                      <span className={`${styles.flag} ${flagClass[r.flag_type] ?? ''}`}>
                        {r.flag_type}
                      </span>
                    ) : (
                      <span className={styles.flagNone}>, </span>
                    )}
                  </td>
                  <td className={styles.rule}>{r.writer_placement_rule}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {limit < filtered.length && (
        <button className={styles.more} onClick={() => setLimit((n) => n + PAGE_SIZE)}>
          Show {Math.min(PAGE_SIZE, filtered.length - limit)} more
        </button>
      )}
    </div>
  );
}
