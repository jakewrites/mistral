import React, {type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface DownloadLinkProps {
  /** Path under /static, e.g. "/artifacts/documentation-audit.csv". */
  href: string;
  children: ReactNode;
}

/**
 * A block-level download link. Rendered as a div wrapper so it never ends up
 * nested inside an auto-generated paragraph, which produced invalid HTML.
 */
export default function DownloadLink({href, children}: DownloadLinkProps): ReactNode {
  return (
    <div className={styles.wrap}>
      <a className={styles.link} href={useBaseUrl(href)} download>
        {children}
      </a>
    </div>
  );
}
