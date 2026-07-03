import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * A single hand-authored sidebar. The order is the intended reading order:
 * orientation to the centrepiece audit to the four supporting exercises  to 
 * shared appendix to meta.
 */
const sidebars: SidebarsConfig = {
  assessmentSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Exercise 1: Documentation Audit',
      collapsed: false,
      items: [
        'exercise-1/executive-summary',
        'exercise-1/methodology',
        'exercise-1/strengths',
        'exercise-1/audit-findings',
        'exercise-1/recommendations',
        'exercise-1/prioritisation',
        'exercise-1/example-rewrite',
        'exercise-1/appendix',
      ],
    },
    {
      type: 'category',
      label: 'Exercise 2: Vector Embeddings',
      collapsed: true,
      items: [
        'exercise-2/overview',
        'exercise-2/version-a',
        'exercise-2/version-b',
      ],
    },
    'exercise-3-api-validation',
    'exercise-4-onprem-ia',
    'exercise-5-workflows-enablement',
    'appendix',
    'about',
  ],
};

export default sidebars;
