/* Web Documentation — Navigation & Pages */

// ── Navigation tree — Web (Get Started dahil) ────────────────
const NAV_WEB = [
  { label: 'Welcome', id: 'welcome' },
  {
    label: 'Get Started', children: [
      { label: 'Introduction',  id: 'get-started/introduction' },
      { label: "What's New",    id: 'get-started/whats-new' },
      { label: 'Contributing',  id: 'get-started/contributing' },
    ]
  },
  {
    label: 'Foundations', children: [
      {
        label: 'Design Tokens', children: [
          { label: 'Our Tokens',  id: 'foundations/tokens/our-tokens' },
        ]
      },
    ]
  },
  {
    label: 'Components', children: [
      { label: 'Accordion',        id: 'components/accordion' },
      { label: 'Alert',            id: 'components/alert' },
      { label: 'Avatar',           id: 'components/avatar' },
      { label: 'Bottom Tab Bar',   id: 'components/bottom-tab-bar' },
      { label: 'Top App Bar',      id: 'components/top-app-bar' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Button',            id: 'components/button' },
      { label: 'TextBox',           id: 'components/textbox' },
      { label: 'FAB',               id: 'components/fab' },
      { label: 'Icon Button',       id: 'components/icon-button' },
      { label: 'Text Field',        id: 'components/text-field' },
      { label: 'Checkbox',          id: 'components/checkbox' },
      { label: 'Radio Button',      id: 'components/radio-button' },
      { label: 'Toggle',            id: 'components/toggle' },
      { label: 'Snackbar',          id: 'components/snackbar' },
      { label: 'Progress',          id: 'components/progress' },
      { label: 'Skeleton',          id: 'components/skeleton' },
      { label: 'Card',              id: 'components/card' },
      { label: 'List Item',         id: 'components/list-item' },
      { label: 'Badge',             id: 'components/badge' },
      { label: 'Bottom Sheet',      id: 'components/bottom-sheet' },
      { label: 'Dialog',            id: 'components/dialog' },
    ]
  },
  {
    label: 'Patterns', children: [
      { label: 'Empty States',  id: 'patterns/empty-states' },
      { label: 'Error States',  id: 'patterns/error-states' },
      { label: 'Forms',         id: 'patterns/forms' },
      { label: 'Onboarding',    id: 'patterns/onboarding' },
    ]
  },
  {
    label: 'Layout', children: [
      { label: 'Grid',    id: 'layout/grid' },
      { label: 'Stack',   id: 'layout/stack' },
    ]
  },
  {
    label: 'Resources', children: [
      { label: 'Figma Libraries', id: 'resources/figma' },
      { label: 'Changelog',       id: 'resources/changelog' },
    ]
  },
];

const PAGES_WEB = Object.assign({}, PAGES);
