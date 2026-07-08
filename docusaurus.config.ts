import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Runs in Node.js, no browser APIs here.

const config: Config = {
  title: 'Mistral Documentation Assessment',
  tagline: 'Senior Technical Writer / Developer Educator assessment submission',
  favicon: 'img/favicon.ico',

  // GitHub Pages: https://jakewrites.github.io/mistral/
  url: 'https://jakewrites.github.io',
  baseUrl: '/mistral/',
  organizationName: 'jakewrites',
  projectName: 'mistral',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  // The Recommendation component exposes #r1..#r3 as ids on its <section>.
  // These resolve at runtime (verified in the built HTML) but the static anchor
  // checker only sees Markdown heading anchors, so it cannot validate them.
  // scripts/check-anchors.mjs restores that guardrail: it asserts every
  // recommendations#rN link in docs/ has a matching Recommendation id.
  onBrokenAnchors: 'ignore',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // docs served at the site root
          editUrl: 'https://github.com/jakewrites/mistral/tree/main/',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Documentation Assessment',
      logo: {
        alt: 'Assessment',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'assessmentSidebar',
          position: 'left',
          label: 'Contents',
        },
        {
          to: '/exercise-1/executive-summary',
          label: 'The Audit',
          position: 'left',
        },
        {
          href: 'https://github.com/jakewrites/mistral',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Assessment',
          items: [
            {label: 'Home', to: '/'},
            {label: 'Exercise 1, Audit', to: '/exercise-1/executive-summary'},
            {label: 'Overview', to: '/overview'},
          ],
        },
        {
          title: 'Exercises',
          items: [
            {label: 'Vector Embeddings', to: '/exercise-2/overview'},
            {label: 'API Validation', to: '/exercise-3-api-validation'},
            {label: 'On-Prem IA', to: '/exercise-4-onprem-ia'},
            {label: 'Workflows Enablement', to: '/exercise-5-workflows-enablement'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'README', href: 'https://github.com/jakewrites/mistral#readme'},
            {label: 'Appendix', to: '/appendix'},
            {label: 'GitHub repository', href: 'https://github.com/jakewrites/mistral'},
          ],
        },
      ],
      copyright: `Jake Cahill · Documentation assessment submission · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'python', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
