import React, {useState, type ReactNode} from 'react';
import styles from './styles.module.css';

const versions = [
  {id: 'v3.0', label: 'v3.0 · latest', eol: false},
  {id: 'v2.5', label: 'v2.5', eol: false},
  {id: 'v2.0', label: 'v2.0 · EOL', eol: true},
];

const managedPages = [
  'Get started with Vibe',
  'Chat, Work, and Code',
  'Connectors',
  'Custom instructions',
];

const selfHostedPages = [
  'Plan and prerequisites',
  'Install',
  'Configure',
  'Upgrade and rollback',
  'Observability',
  'Reference',
];

type Surface = 'entry' | 'managed' | 'self';

export default function SurfaceMock(): ReactNode {
  const [surface, setSurface] = useState<Surface>('entry');
  const [version, setVersion] = useState('v3.0');
  const current = versions.find((v) => v.id === version);

  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <span className={styles.crumb}>Products › Vibe</span>
        <span className={styles.tag}>Interactive mock</span>
      </div>

      {surface === 'entry' && (
        <div>
          <p className={styles.lede}>How do you run Vibe?</p>
          <div className={styles.cards}>
            <button
              type="button"
              className={styles.card}
              onClick={() => setSurface('managed')}>
              <span className={styles.cardTitle}>Managed</span>
              <span className={styles.cardDesc}>
                The SaaS product. Continuously updated, so there are no
                versions to pick.
              </span>
            </button>
            <button
              type="button"
              className={styles.card}
              onClick={() => setSurface('self')}>
              <span className={styles.cardTitle}>Self-hosted</span>
              <span className={styles.cardDesc}>
                Runs in your infrastructure. Documented per supported release.
              </span>
            </button>
          </div>
        </div>
      )}

      {surface === 'managed' && (
        <div>
          <div className={styles.marker}>
            <span>
              You are reading the <strong>managed</strong> Vibe docs ·
              continuously updated
            </span>
            <button
              type="button"
              className={styles.switch}
              onClick={() => setSurface('self')}>
              Switch to self-hosted
            </button>
          </div>
          <ul className={styles.pages}>
            {managedPages.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {surface === 'self' && (
        <div>
          <div className={styles.marker}>
            <span>
              You are reading the <strong>self-hosted</strong> Vibe docs
            </span>
            <select
              className={styles.version}
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              aria-label="Documentation version">
              {versions.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              className={styles.switch}
              onClick={() => setSurface('managed')}>
              Switch to managed
            </button>
          </div>
          {current?.eol && (
            <div className={styles.eol}>
              v2.0 reached end of life. This snapshot no longer receives
              updates. See the v3.0 docs, or the v2.0 to v3.0 migration guide.
            </div>
          )}
          <ul className={styles.pages}>
            {selfHostedPages.map((p) => (
              <li key={p}>
                {p}
                {p === 'Upgrade and rollback' ? ` (${version})` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.foot}>
        {surface === 'entry' ? (
          <span>
            Shared pages (model choice, prompting) sit outside this split and
            are linked from both trees, never copied.
          </span>
        ) : (
          <button
            type="button"
            className={styles.reset}
            onClick={() => {
              setSurface('entry');
              setVersion('v3.0');
            }}>
            Back to the entry choice
          </button>
        )}
      </div>
    </div>
  );
}
