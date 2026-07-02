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

// ── Sidebar — interactive example-viewer toggle ───────────────
window._sbxToggle = function() {
  const el = document.getElementById('sbxDrawer');
  if (el) el.classList.toggle('is-collapsed');
};

PAGES_WEB['components/sidebar'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc: ['Structure', 'Anatomy'],
  render: (tab) => {
    const title = 'Sidebar';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    // Icons — reuses the same corner-bracket "Icon/Placeholder" convention as
    // other component pages (e.g. Card) since the Figma source uses placeholder
    // icon slots for all rail/drawer items. Search box uses a real search icon
    // (Figma node "Icon/search", distinct from the placeholder slots).
    const iconSearch = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`;
    const iconPlaceholder = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/></svg>`;

    const railButton = () => `<div class="sbx-btn">${iconPlaceholder}</div>`;
    const drawerItem = (label) => `
          <div class="sbx-item">
            <div class="sbx-item-inner">
              <div class="sbx-item-icon">${iconPlaceholder}</div>
              <div class="sbx-item-label">${label}</div>
            </div>
          </div>`;

    // Single source of truth for the live preview markup.
    const sidebarMarkup = () => `
        <div class="sbx-shell">
          <div class="sbx-rail">
            <div class="sbx-logo"></div>
            <div class="sbx-center">
              ${railButton()}
              <div class="sbx-collapse" onclick="window._sbxToggle()" title="Toggle drawer"></div>
              ${railButton()}
              ${railButton()}
              ${railButton()}
            </div>
            <div class="sbx-bottom">
              ${railButton()}
              ${railButton()}
            </div>
          </div>
          <div class="sbx-drawer" id="sbxDrawer">
            <div class="sbx-drawer-top">
              <div class="sbx-searchbox">
                <div class="sbx-searchbox-icon">${iconSearch}</div>
                <div class="sbx-searchbox-text">Placeholder Text</div>
                <div class="sbx-searchbox-kbd">Tab</div>
              </div>
            </div>
            <div class="sbx-drawer-center">
              ${drawerItem('Drawer Item Label')}
              ${drawerItem('Drawer Item Label')}
              ${drawerItem('Drawer Item Label')}
              ${drawerItem('Drawer Item Label')}
              ${drawerItem('Drawer Item Label')}
            </div>
            <div class="sbx-drawer-bottom">
              ${drawerItem('Drawer Item Label')}
            </div>
          </div>
        </div>`;

    // Clean, copy-pastable reference markup shown in the code panel.
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const drawerItemCode = `      <div class="sbx-item">
        <div class="sbx-item-inner">
          <div class="sbx-item-icon"><!-- icon --></div>
          <div class="sbx-item-label">Drawer Item Label</div>
        </div>
      </div>`;
    const codeSnippet = `<nav class="sbx-shell">
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
  <div class="sbx-drawer">
    <div class="sbx-drawer-top">
      <div class="sbx-searchbox">
        <div class="sbx-searchbox-icon"><!-- search icon --></div>
        <div class="sbx-searchbox-text">Placeholder Text</div>
        <div class="sbx-searchbox-kbd">Tab</div>
      </div>
    </div>
    <div class="sbx-drawer-center">
${drawerItemCode}
${drawerItemCode}
      <!-- …repeat per nav item -->
    </div>
    <div class="sbx-drawer-bottom">
${drawerItemCode}
    </div>
  </div>
</nav>`;

    // Shared Playground block — same markup as the Examples tab, used at the
    // top of Overview too. Kept as a separate const so the Examples tab's own
    // HTML below stays untouched.
    const playgroundBlock = `
      <div class="example-viewer" style="margin-bottom:32px;">
        <div class="example-viewer-toolbar">
          <button class="example-viewer-toggle" onclick="window._sbxToggle()">Toggle Drawer</button>
        </div>
        <div class="example-viewer-preview">${sidebarMarkup()}</div>
        <div class="example-viewer-code">
          <pre id="sbxCode">${esc(codeSnippet)}</pre>
          <button class="copy-btn" onclick="copyText(document.getElementById('sbxCode').textContent, this)" title="Copy code">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          </button>
        </div>
      </div>`;

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Live preview of the Sidebar — a fixed navigation rail paired with an expandable drawer. Toggle the drawer and copy the generated markup below.</p>
      <h2>Playground</h2>
      <div class="example-viewer">
        <div class="example-viewer-toolbar">
          <button class="example-viewer-toggle" onclick="window._sbxToggle()">Toggle Drawer</button>
        </div>
        <div class="example-viewer-preview">${sidebarMarkup()}</div>
        <div class="example-viewer-code">
          <pre id="sbxCode">${esc(codeSnippet)}</pre>
          <button class="copy-btn" onclick="copyText(document.getElementById('sbxCode').textContent, this)" title="Copy code">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          </button>
        </div>
      </div>
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
      ${playgroundBlock}

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
