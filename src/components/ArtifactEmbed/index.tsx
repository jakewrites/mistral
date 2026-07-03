import React, {type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface ArtifactEmbedProps {
  /** Path under /static, e.g. "/artifacts/ia-tree.html". */
  src: string;
  title: string;
  /** Optional one-line caption describing what the artifact is. */
  caption?: ReactNode;
  height?: number;
}

export default function ArtifactEmbed({
  src,
  title,
  caption,
  height = 560,
}: ArtifactEmbedProps): ReactNode {
  const url = useBaseUrl(src);
  return (
    <figure className={styles.figure}>
      <div className={styles.frameWrap}>
        <iframe
          className={styles.frame}
          src={url}
          title={title}
          style={{height}}
          loading="lazy"
        />
      </div>
      <figcaption className={styles.caption}>
        {caption ? <span>{caption}</span> : <span>{title}</span>}
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open standalone
        </a>
      </figcaption>
    </figure>
  );
}
