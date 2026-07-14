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
      { label: 'Design Examples', id: 'foundations/design-examples' },
      {
        label: 'Design Tokens', children: [
          { label: 'Our Tokens',  id: 'foundations/tokens/our-tokens' },
        ]
      },
    ]
  },
  {
    label: 'Components', children: [
      { label: 'Accordion',         id: 'components/accordion' },
      { label: 'Alert',             id: 'components/alert' },
      { label: 'Avatar',            id: 'components/avatar' },
      { label: 'Badge',             id: 'components/badge' },
      { label: 'Bottom Sheet',      id: 'components/bottom-sheet' },
      { label: 'Bottom Tab Bar',    id: 'components/bottom-tab-bar' },
      { label: 'Button',            id: 'components/button' },
      { label: 'Card',              id: 'components/card' },
      { label: 'Checkbox',          id: 'components/checkbox' },
      { label: 'Dialog',            id: 'components/dialog' },
      { label: 'FAB',               id: 'components/fab' },
      { label: 'Icon Button',       id: 'components/icon-button' },
      { label: 'List Item',         id: 'components/list-item' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Progress',          id: 'components/progress' },
      { label: 'Radio Button',      id: 'components/radio-button' },
      { label: 'Sidebar',           id: 'components/sidebar' },
      { label: 'Skeleton',          id: 'components/skeleton' },
      { label: 'Snackbar',          id: 'components/snackbar' },
      { label: 'Text Field',        id: 'components/text-field' },
      { label: 'TextBox',           id: 'components/textbox' },
      { label: 'Toggle',            id: 'components/toggle' },
      { label: 'Top App Bar',       id: 'components/top-app-bar' },
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

// ── Sidebar — shared markup + Playground registration ─────────
// Hoisted to module scope (rather than nested inside render()) so both the
// component page and the standalone isolation.html page can call it.
window._sbxToggle = function() {
  const el = document.getElementById('sbxDrawer');
  if (el) el.classList.toggle('is-collapsed');
};

const sbxIconSearch = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`;
const sbxIconPlaceholder = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/></svg>`;

const sbxRailButton = () => `<div class="sbx-btn">${sbxIconPlaceholder}</div>`;
const sbxDrawerItem = (label) => `
          <div class="sbx-item">
            <div class="sbx-item-inner">
              <div class="sbx-item-icon">${sbxIconPlaceholder}</div>
              <div class="sbx-item-label">${label}</div>
            </div>
          </div>`;

// Single source of truth for the live preview markup. `variant` controls the
// drawer's initial state ('expanded' | 'collapsed'); the rail's own collapse
// button still toggles it further from there.
function sidebarMarkup(variant) {
  const collapsedCls = variant === 'collapsed' ? ' is-collapsed' : '';
  return `
        <div class="sbx-shell">
          <div class="sbx-rail">
            <div class="sbx-logo"></div>
            <div class="sbx-center">
              ${sbxRailButton()}
              <div class="sbx-collapse" onclick="window._sbxToggle()" title="Toggle drawer"></div>
              ${sbxRailButton()}
              ${sbxRailButton()}
              ${sbxRailButton()}
            </div>
            <div class="sbx-bottom">
              ${sbxRailButton()}
              ${sbxRailButton()}
            </div>
          </div>
          <div class="sbx-drawer${collapsedCls}" id="sbxDrawer">
            <div class="sbx-drawer-top">
              <div class="sbx-searchbox">
                <div class="sbx-searchbox-icon">${sbxIconSearch}</div>
                <div class="sbx-searchbox-text">Placeholder Text</div>
                <div class="sbx-searchbox-kbd">Tab</div>
              </div>
            </div>
            <div class="sbx-drawer-center">
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label')}
            </div>
            <div class="sbx-drawer-bottom">
              ${sbxDrawerItem('Drawer Item Label')}
            </div>
          </div>
        </div>`;
}

// Clean, copy-pastable reference markup shown in the code panel.
const sbxDrawerItemCode = `      <div class="sbx-item">
        <div class="sbx-item-inner">
          <div class="sbx-item-icon"><!-- icon --></div>
          <div class="sbx-item-label">Drawer Item Label</div>
        </div>
      </div>`;
function sidebarCodeSnippet(variant) {
  return `<nav class="sbx-shell">
  <div class="sbx-rail">
    <div class="sbx-logo"></div>
    <div class="sbx-center">
      <div class="sbx-btn"><!-- icon --></div>
      <div class="sbx-collapse"></div>
      <div class="sbx-btn"><!-- icon --></div>
      <div class="sbx-btn"><!-- icon --></div>
      <div class="sbx-btn"><!-- icon --></div>
    </div>
    <div class="sbx-bottom">
      <div class="sbx-btn"><!-- icon --></div>
      <div class="sbx-btn"><!-- icon --></div>
    </div>
  </div>
  <div class="sbx-drawer${variant === 'collapsed' ? ' is-collapsed' : ''}">
    <div class="sbx-drawer-top">
      <div class="sbx-searchbox">
        <div class="sbx-searchbox-icon"><!-- search icon --></div>
        <div class="sbx-searchbox-text">Placeholder Text</div>
        <div class="sbx-searchbox-kbd">Tab</div>
      </div>
    </div>
    <div class="sbx-drawer-center">
${sbxDrawerItemCode}
${sbxDrawerItemCode}
      <!-- …repeat per nav item -->
    </div>
    <div class="sbx-drawer-bottom">
${sbxDrawerItemCode}
    </div>
  </div>
</nav>`;
}

// Isolation mode target — docs/isolation.html looks this up by ?component=.
window.PGD_ISOLATE = window.PGD_ISOLATE || {};
window.PGD_ISOLATE['sidebar'] = {
  mount(root, variant) { root.innerHTML = sidebarMarkup(variant); }
};

const SBX_VARIANTS = [
  { key: 'expanded',  label: 'Expanded' },
  { key: 'collapsed', label: 'Collapsed' },
];

PAGES_WEB['components/sidebar'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc: ['Structure', 'Anatomy'],
  render: (tab) => {
    const title = 'Sidebar';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Live preview of the Sidebar — a fixed navigation rail paired with an expandable drawer. Pick a variant, toggle the drawer, measure it, preview it at other viewport widths, or open it in isolation mode.</p>
      <h2>Playground</h2>
      ${registerPlayground({
        id: 'pgd-sidebar-examples',
        variants: SBX_VARIANTS,
        preview: sidebarMarkup,
        code: sidebarCodeSnippet,
        isolate: 'sidebar',
        noMargin: true,
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Design tokens used to build the Sidebar, mapped to their Figma source and existing <code style="font-family:var(--mono);font-size:12px;">--bt-*</code> variables.</p>
      <table class="token-table">
        <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">--bt-surface-primary-intense</span></td><td>#272727</td><td>Rail background · Figma: Surface/Secondary/--bt-surface-primary-intense (Gray/800)</td></tr>
          <tr><td><span class="token-name">--bt-base-default</span></td><td>#ffffff</td><td>Drawer / drawer item background</td></tr>
          <tr><td><span class="token-name">--bt-border-primary-default</span></td><td>#d4d4d4</td><td>Rail / drawer right border, searchbox border, shortcut badge border</td></tr>
          <tr><td><span class="token-name">--bt-border-subtle</span></td><td>#f5f5f5</td><td>Drawer bottom divider (pinned item)</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-default</span></td><td>#1a1a1a</td><td>Drawer item label</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-muted</span></td><td>#a3a3a3</td><td>Searchbox placeholder text</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-strong</span></td><td>#535353</td><td>Shortcut badge text, drawer item icon</td></tr>
          <tr><td><span class="token-name">--bt-radius-md</span></td><td>6px</td><td>Logo / searchbox / drawer item radius</td></tr>
          <tr><td><span class="token-name">--bt-radius-sm</span></td><td>4px</td><td>Rail icon-button radius</td></tr>
          <tr><td><span class="token-name">--bt-radius-xs</span></td><td>2px</td><td>Shortcut badge radius</td></tr>
          <tr><td><span class="token-name">--bt-space-md</span></td><td>8px</td><td>Rail horizontal padding · drawer item horizontal padding</td></tr>
          <tr><td><span class="token-name">--bt-space-xs</span></td><td>4px</td><td>Drawer item vertical padding · icon padding</td></tr>
          <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>Rail bottom-zone gap</td></tr>
          <tr><td><span class="token-name">--bt-space-xl</span></td><td>12px</td><td>Drawer top/bottom horizontal padding</td></tr>
          <tr><td><span class="token-name">--bt-space-2xl</span></td><td>16px</td><td>Drawer top/bottom vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-space-4xl</span></td><td>24px</td><td>Rail vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-space-8xl</span></td><td>40px</td><td>Gap between rail zones (top/center/bottom)</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Sidebar usage guidelines.</p>
      <h2>Do</h2>
      <ul>
        <li>Keep the rail's icon set short and stable — it should not scroll</li>
        <li>Use the drawer for the primary navigation list; let it scroll independently when items overflow</li>
        <li>Pin account/settings-type actions in the drawer bottom slot, separated by a divider</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Don't mix unrelated actions into the rail — it's for global, always-visible entry points only</li>
        <li>Don't remove the rail when collapsing the drawer — the rail stays as the persistent anchor</li>
      </ul>
    `};

    // ── Overview ──────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-sidebar-overview',
        variants: SBX_VARIANTS,
        preview: sidebarMarkup,
        code: sidebarCodeSnippet,
        isolate: 'sidebar',
      })}

      <p class="page-desc">A two-part navigation shell: a fixed icon rail and an expandable drawer with a search box and a scrollable item list.</p>

      <h2 id="Structure">Structure</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Zone</th><th>Contents</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Rail · Top</span></td><td>App logo placeholder (40×40)</td></tr>
          <tr><td><span class="token-name">Rail · Center</span></td><td>Icon buttons + collapse control, vertically centered, grows to fill height</td></tr>
          <tr><td><span class="token-name">Rail · Bottom</span></td><td>Secondary icon buttons (e.g. settings, help)</td></tr>
          <tr><td><span class="token-name">Drawer · Top</span></td><td>Searchbox with keyboard shortcut hint</td></tr>
          <tr><td><span class="token-name">Drawer · Center</span></td><td>Scrollable list of drawer items</td></tr>
          <tr><td><span class="token-name">Drawer · Bottom</span></td><td>Pinned item, separated by a top divider</td></tr>
        </tbody>
      </table>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="4">Rail</td><td>Width</td><td>—</td><td>56px</td></tr>
          <tr><td>Background</td><td>${tk('Surface/Secondary intense')}</td><td>#272727</td></tr>
          <tr><td>Border right</td><td>${tk('Border/Primary default')}</td><td>1px solid #d4d4d4</td></tr>
          <tr><td>Padding V / H</td><td>${tk('Space/4xl')} · ${tk('Space/md')}</td><td>24px / 8px</td></tr>
          <tr><td>Logo / Collapse control</td><td>Border radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
          <tr><td rowspan="2">Rail icon button</td><td>Size</td><td>—</td><td>28 × 28px</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/sm')}</td><td>4px</td></tr>
          <tr><td rowspan="2">Drawer</td><td>Width</td><td>—</td><td>280px</td></tr>
          <tr><td>Background</td><td>${tk('Base/default')}</td><td>#ffffff</td></tr>
          <tr><td rowspan="3">Searchbox</td><td>Height</td><td>—</td><td>28px</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
          <tr><td>Placeholder text</td><td>${tk('Text/xs/Regular')}</td><td>12px / 400 / 16px · #a3a3a3</td></tr>
          <tr><td>Shortcut badge</td><td>Border radius</td><td>${tk('Radius/xs')}</td><td>2px</td></tr>
          <tr><td rowspan="3">Drawer item</td><td>Padding V / H</td><td>${tk('Space/xs')} · ${tk('Space/md')}</td><td>4px / 8px</td></tr>
          <tr><td>Inner border radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
          <tr><td>Label</td><td>${tk('Text-1/Regular')}</td><td>13px / 400 / 16px · #1a1a1a</td></tr>
        </tbody>
      </table>
    `};
  }
};

// ── Button ──────────────────────────────────────────────────────
const _btnIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/></svg>`;

const BTN_FILL_VARIANTS = [
  { key: 'solid',   label: 'Solid' },
  { key: 'outline', label: 'Outline' },
  { key: 'flat',    label: 'Flat' },
  { key: 'ghost',   label: 'Ghost' },
];
const BTN_SIZE_VARIANTS = [
  { key: '2xs', label: '2xs' },
  { key: 'xs',  label: 'xs' },
  { key: 'sm',  label: 'sm' },
  { key: 'md',  label: 'md' },
  { key: 'lg',  label: 'lg' },
  { key: 'xl',  label: 'xl' },
  { key: '2xl', label: '2xl' },
];
const BTN_CONTENT_OPTS = [
  { key: 'icon-text', label: 'Icon & Text' },
  { key: 'icon',      label: 'Icon Only' },
];
const BTN_STATE_OPTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'focus',    label: 'Focus' },
  { key: 'active',   label: 'Active' },
  { key: 'selected', label: 'Selected' },
  { key: 'disabled', label: 'Disabled' },
];
const BTN_THEME_OPTS = [
  { key: 'base',        label: 'Base' },
  { key: 'primary',     label: 'Primary' },
  { key: 'secondary',   label: 'Secondary' },
  { key: 'success',     label: 'Success' },
  { key: 'warning',     label: 'Warning' },
  { key: 'error',       label: 'Error' },
  { key: 'information', label: 'Information' },
];

function _btnCls(fill, size, content, state, theme = 'primary') {
  const parts = [`bt-btn`, `bt-btn--${theme}-${fill}`, `bt-btn--${size}`];
  if (content === 'icon') parts.push('bt-btn--icon');
  if (state === 'hover')    parts.push('bt-btn--state-hover');
  if (state === 'focus')    parts.push('bt-btn--state-focus');
  if (state === 'active')   parts.push('bt-btn--state-active');
  if (state === 'selected') parts.push('bt-btn--state-selected');
  return parts.join(' ');
}

function btnPreview(fill, size, content, state, theme = 'primary') {
  const disabled = state === 'disabled';
  const cls = _btnCls(fill, size, content, disabled ? 'default' : state, theme);
  const icon = _btnIcon;
  const text = content === 'icon' ? '' : '<span>Button</span>';
  const inner = icon + text;
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:32px;">
      <button class="${cls}"${disabled ? ' disabled' : ''}>${inner}</button>
    </div>`;
}

function btnCode(fill, size, content, state, theme = 'primary') {
  const disabled = state === 'disabled';
  const cls = _btnCls(fill, size, content, disabled ? 'default' : state, theme);
  const icon = '<!-- icon 16x16 -->';
  const text = content === 'icon' ? '' : 'Button';
  const inner = [icon, text].filter(Boolean).join('\n  ');
  return `<button class="${cls}"${disabled ? ' disabled' : ''}>\n  ${inner}\n</button>`;
}

function _stateRow(fill, theme = 'primary') {
  const states = [
    { label: 'Default',  cls: '',                      disabled: false },
    { label: 'Hover',    cls: ' bt-btn--state-hover',  disabled: false },
    { label: 'Focus',    cls: ' bt-btn--state-focus',  disabled: false },
    { label: 'Active',   cls: ' bt-btn--state-active', disabled: false },
    { label: 'Selected', cls: ' bt-btn--state-selected', disabled: false },
    { label: 'Disabled', cls: '',                      disabled: true  },
  ];
  return states.map(s => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <button class="bt-btn bt-btn--${theme}-${fill} bt-btn--sm${s.cls}"${s.disabled ? ' disabled' : ''}>${_btnIcon}<span>${s.label}</span></button>
      <span style="font-size:11px;color:var(--bt-text-primary-muted)">${s.label}</span>
    </div>`).join('');
}

PAGES_WEB['components/button'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc: ['Anatomy', 'Sizes', 'States'],
  render: (tab) => {
    const title = 'Button';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    // ── Examples ─────────────────────────────────────────────────
    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Solid, Outline, Flat ve Ghost fill modlari; 7 tema rengi, 7 boyut, 2 icerik tipi ve 4 state ile.</p>

      <h2>Solid</h2>
      ${registerPlayground({
        id: 'pgd-btn-solid-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: BTN_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => btnPreview('solid', sz, p.content, p.state, p.theme),
        code:    (sz, p) => btnCode('solid', sz, p.content, p.state, p.theme),
      })}

      <h2>Outline</h2>
      ${registerPlayground({
        id: 'pgd-btn-outline-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: BTN_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => btnPreview('outline', sz, p.content, p.state, p.theme),
        code:    (sz, p) => btnCode('outline', sz, p.content, p.state, p.theme),
      })}

      <h2>Flat</h2>
      ${registerPlayground({
        id: 'pgd-btn-flat-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: BTN_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => btnPreview('flat', sz, p.content, p.state, p.theme),
        code:    (sz, p) => btnCode('flat', sz, p.content, p.state, p.theme),
      })}

      <h2>Ghost</h2>
      ${registerPlayground({
        id: 'pgd-btn-ghost-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: BTN_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => btnPreview('ghost', sz, p.content, p.state, p.theme),
        code:    (sz, p) => btnCode('ghost', sz, p.content, p.state, p.theme),
      })}
    `};

    // ── CSS Properties ───────────────────────────────────────────
    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Primary Button icin kullanilan design token - CSS degisken eslesmeler.</p>
      <table class="token-table">
        <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">--bt-primary-default</span></td><td>#0d4e97</td><td>Solid bg · Outline &amp; Ghost text/border · Default state</td></tr>
          <tr><td><span class="token-name">--bt-primary-intense</span></td><td>#0f447d</td><td>Hover &amp; active bg (Solid)</td></tr>
          <tr><td><span class="token-name">--bt-primary-subtle</span></td><td>#e2edfc</td><td>Hover bg (Outline &amp; Ghost)</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-inverted</span></td><td>#ffffff</td><td>Text &amp; icon rengi — Solid uzerinde</td></tr>
          <tr><td><span class="token-name">--bt-base-muted</span></td><td>#e6e6e6</td><td>Disabled bg (Solid) · Disabled border (Outline)</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-muted</span></td><td>#a3a3a3</td><td>Disabled text &amp; icon rengi</td></tr>
          <tr><td><span class="token-name">--bt-radius-sm</span></td><td>4px</td><td>Border radius (tum boyutlar)</td></tr>
          <tr><td><span class="token-name">--bt-space-2xs</span></td><td>2px</td><td>py — 2xs</td></tr>
          <tr><td><span class="token-name">--bt-space-xs</span></td><td>4px</td><td>px — 2xs · py — xs · Icon Only 2xs/xs padding</td></tr>
          <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>py — sm · Icon–label gap (tum boyutlar) · Icon Only sm padding</td></tr>
          <tr><td><span class="token-name">--bt-space-md</span></td><td>8px</td><td>px — xs/sm/md/lg · py — md · Icon Only md padding</td></tr>
          <tr><td><span class="token-name">--bt-space-lg</span></td><td>10px</td><td>py — lg · Icon Only lg padding</td></tr>
          <tr><td><span class="token-name">--bt-space-xl</span></td><td>12px</td><td>py/px — xl · px — 2xl · Icon Only xl padding</td></tr>
          <tr><td><span class="token-name">--bt-space-2xl</span></td><td>16px</td><td>py — 2xl · Icon Only 2xl padding</td></tr>
          <tr><td><span class="token-name">Focus Ring/primary</span></td><td>#0D4E9780 · spread 3px</td><td>Focus ring (box-shadow)</td></tr>
          <tr><td><span class="token-name">Label/xs/Regular</span></td><td>Geist 12px/400/16px</td><td>Tum boyutlarda label stili</td></tr>
        </tbody>
      </table>
    `};

    // ── Usage ────────────────────────────────────────────────────
    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Primary Button kullanim kilavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Solid butonu sayfanin tek ana aksiyonu (CTA) icin kullan</li>
        <li>Hiyerarsiyi koru: Solid → Outline → Ghost, azalan onem sirasıyla</li>
        <li>Disabled durumda butonu gizlemek yerine devre disi birak</li>
        <li>Icon + Text kombinasyonunda ikon sol tarafta, metin sagda olsun</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Ayni satirda birden fazla Solid buton koyma</li>
        <li>Ghost butonu izole ortamda kullanma — arka yuzey rengi olmadan kaybolur</li>
        <li>Token disinda hardcoded renk kullanma; her zaman <code style="font-family:var(--mono)">--bt-primary-*</code> tokenlarini kullan</li>
      </ul>
    `};

    // ── Overview ─────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-btn-overview',
        variants: BTN_FILL_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'size',    label: 'Size',    options: BTN_SIZE_VARIANTS, default: 'sm'        },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS,  default: 'icon-text' },
          { key: 'state',   label: 'State',   options: BTN_STATE_OPTS,    default: 'default'   },
        ],
        preview: (fill, p) => btnPreview(fill, p.size, p.content, p.state, p.theme),
        code:    (fill, p) => btnCode(fill, p.size, p.content, p.state, p.theme),
      })}

      <p class="page-desc">Aksiyon tetikleyen tiklanabilir UI elemani. Fill mode (Solid / Outline / Flat / Ghost), 7 tema rengi (Base / Primary / Secondary / Success / Warning / Error / Information), 7 boyut (2xs–2xl) ve 2 icerik tipiyle yapilandirilabilir.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="4">Container</td><td>Background (Solid, Default)</td><td>${tk('Color/Primary/--bt-primary-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Background (Solid, Hover)</td><td>${tk('Color/Primary/--bt-primary-intense')}</td><td>#0f447d</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/radius-sm')}</td><td>4px</td></tr>
          <tr><td>Focus ring</td><td>${tk('Focus Ring/primary')}</td><td>box-shadow 0 0 0 3px #0D4E9780</td></tr>
          <tr><td rowspan="3">Label (2xs)</td><td>Font family</td><td>${tk('Font/Family/Label')}</td><td>Geist</td></tr>
          <tr><td>Size / weight</td><td>${tk('Font/Size/text-xs · Font/Weight/Regular')}</td><td>12px / 400</td></tr>
          <tr><td>Line height</td><td>${tk('Font/Line-Height/text-lh-xs')}</td><td>16px</td></tr>
          <tr><td rowspan="9">Spacing</td><td>2xs — py / px</td><td>${tk('Space/spacing-2xs · Space/spacing-xs')}</td><td>2px / 4px</td></tr>
          <tr><td>xs — py / px</td><td>${tk('Space/spacing-xs · Space/spacing-md')}</td><td>4px / 8px</td></tr>
          <tr><td>sm — py / px</td><td>${tk('Space/spacing-sm · Space/spacing-md')}</td><td>6px / 8px</td></tr>
          <tr><td>md — py / px</td><td>${tk('Space/spacing-md · Space/spacing-md')}</td><td>8px / 8px</td></tr>
          <tr><td>lg — py / px</td><td>${tk('Space/spacing-lg · Space/spacing-md')}</td><td>10px / 8px</td></tr>
          <tr><td>xl — py / px</td><td>${tk('Space/spacing-xl · Space/spacing-xl')}</td><td>12px / 12px</td></tr>
          <tr><td>2xl — py / px</td><td>${tk('Space/spacing-2xl · Space/spacing-xl')}</td><td>16px / 12px</td></tr>
          <tr><td>Icon Only — padding</td><td>py degeri (kare)</td><td>size ile ayni py</td></tr>
          <tr><td>Icon–label gap</td><td>${tk('Space/spacing-sm')}</td><td>6px</td></tr>
          <tr><td>Icon</td><td>Size (tum boyutlar)</td><td>—</td><td>16 × 16px</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <div style="display:flex;align-items:flex-end;flex-wrap:wrap;gap:12px;padding:24px;background:var(--bt-surface-subtle);border-radius:8px;margin-bottom:40px;">
        <button class="bt-btn bt-btn--primary-solid bt-btn--2xs">${_btnIcon}<span>2xs</span></button>
        <button class="bt-btn bt-btn--primary-solid bt-btn--xs">${_btnIcon}<span>xs</span></button>
        <button class="bt-btn bt-btn--primary-solid bt-btn--sm">${_btnIcon}<span>sm</span></button>
        <button class="bt-btn bt-btn--primary-solid bt-btn--md">${_btnIcon}<span>md</span></button>
        <button class="bt-btn bt-btn--primary-solid bt-btn--lg">${_btnIcon}<span>lg</span></button>
        <button class="bt-btn bt-btn--primary-solid bt-btn--xl">${_btnIcon}<span>xl</span></button>
        <button class="bt-btn bt-btn--primary-solid bt-btn--2xl">${_btnIcon}<span>2xl</span></button>
      </div>

      <h2 id="States">States</h2>
      ${['base','primary','secondary','success','warning','error','information'].map(theme => `
      <h3 style="font-size:13px;font-weight:600;color:var(--bt-text-primary);margin:20px 0 12px;text-transform:capitalize;">${theme.charAt(0).toUpperCase()+theme.slice(1)}</h3>
      <div style="display:flex;flex-wrap:wrap;gap:16px;margin-bottom:8px;">
        ${['solid','outline','flat','ghost'].map(f => `
        <div>
          <p style="font-size:11px;font-weight:600;color:var(--bt-text-primary-muted);margin:0 0 8px;text-transform:uppercase;letter-spacing:.06em;">${f.charAt(0).toUpperCase()+f.slice(1)}</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;padding:16px;background:var(--bt-surface-subtle);border-radius:8px;">${_stateRow(f, theme)}</div>
        </div>`).join('')}
      </div>`).join('')}
    `};
  }
};
