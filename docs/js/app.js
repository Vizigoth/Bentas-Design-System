/* ============================================================
   MOBILE DESIGN SYSTEM DOCS — app.js
   Single-page app with hash routing
   ============================================================ */

// ── Navigation structure ────────────────────────────────────
const NAV = [
  {
    section: 'Get Started',
    items: [
      { label: 'Introduction',  id: 'get-started/introduction' },
      { label: "What's New",    id: 'get-started/whats-new' },
      { label: 'Contributing',  id: 'get-started/contributing' },
    ]
  },
  {
    section: 'Foundation',
    items: [
      { label: 'Colors',        id: 'foundation/colors' },
      { label: 'Typography',    id: 'foundation/typography' },
      { label: 'Spacing',       id: 'foundation/spacing' },
      { label: 'Border Radius', id: 'foundation/border-radius' },
      { label: 'Elevation',     id: 'foundation/elevation' },
      { label: 'Iconography',   id: 'foundation/iconography' },
      { label: 'Motion',        id: 'foundation/motion' },
    ]
  },
  {
    section: 'Components',
    items: [
      { label: 'Navigation', children: [
        { label: 'Bottom Tab Bar',    id: 'components/bottom-tab-bar', status: 'stable' },
        { label: 'Top App Bar',       id: 'components/top-app-bar',    status: 'stable' },
        { label: 'Navigation Drawer', id: 'components/nav-drawer',     status: 'beta' },
      ]},
      { label: 'Actions', children: [
        { label: 'Button',       id: 'components/button',      status: 'stable' },
        { label: 'FAB',          id: 'components/fab',         status: 'stable' },
        { label: 'Icon Button',  id: 'components/icon-button', status: 'stable' },
      ]},
      { label: 'Inputs', children: [
        { label: 'Text Field',    id: 'components/text-field',    status: 'stable' },
        { label: 'Checkbox',      id: 'components/checkbox',      status: 'stable' },
        { label: 'Radio Button',  id: 'components/radio-button',  status: 'stable' },
        { label: 'Toggle',        id: 'components/toggle',        status: 'stable' },
        { label: 'Slider',        id: 'components/slider',        status: 'beta' },
      ]},
      { label: 'Feedback', children: [
        { label: 'Alert',    id: 'components/alert',    status: 'stable' },
        { label: 'Snackbar', id: 'components/snackbar', status: 'stable' },
        { label: 'Progress', id: 'components/progress', status: 'stable' },
        { label: 'Skeleton', id: 'components/skeleton', status: 'new' },
      ]},
      { label: 'Data Display', children: [
        { label: 'Card',      id: 'components/card',      status: 'stable' },
        { label: 'List Item', id: 'components/list-item', status: 'stable' },
        { label: 'Avatar',    id: 'components/avatar',    status: 'stable' },
        { label: 'Badge',     id: 'components/badge',     status: 'stable' },
        { label: 'Chip',      id: 'components/chip',      status: 'beta' },
      ]},
      { label: 'Overlays', children: [
        { label: 'Bottom Sheet', id: 'components/bottom-sheet', status: 'stable' },
        { label: 'Dialog',       id: 'components/dialog',       status: 'stable' },
        { label: 'Tooltip',      id: 'components/tooltip',      status: 'beta' },
      ]},
    ]
  },
  {
    section: 'Patterns',
    items: [
      { label: 'Empty States',  id: 'patterns/empty-states' },
      { label: 'Error States',  id: 'patterns/error-states' },
      { label: 'Forms',         id: 'patterns/forms' },
      { label: 'Onboarding',    id: 'patterns/onboarding' },
    ]
  }
];

// ── Page definitions ────────────────────────────────────────
const PAGES = {

  'welcome': {
    title: 'Welcome',
    breadcrumb: [],
    tabs: [],
    render: () => `
      <div class="welcome-hero">
        <div class="welcome-tag">
          <span class="welcome-tag-dot"></span>
          v1.0.0 · In development
        </div>
        <h1 class="welcome-title">Mobile Design System</h1>
        <p class="welcome-desc">
          A comprehensive set of design guidelines, components, and tokens
          for building consistent, accessible mobile experiences.
        </p>
        <div class="welcome-actions">
          <button class="btn-primary" onclick="navigate('get-started/introduction')">
            Get Started
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
          <button class="btn-secondary" onclick="navigate('foundation/colors')">
            Browse Foundation
          </button>
        </div>
      </div>

      <div class="welcome-stats">
        <div><div class="stat-value">7</div><div class="stat-label">Foundation categories</div></div>
        <div><div class="stat-value">20+</div><div class="stat-label">Components</div></div>
        <div><div class="stat-value">4</div><div class="stat-label">UX Patterns</div></div>
      </div>

      <p class="section-label">What's inside</p>
      <div class="card-grid">
        <div class="card" onclick="navigate('foundation/colors')">
          <div class="card-icon">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343"/>
            </svg>
          </div>
          <div class="card-title">Foundation</div>
          <div class="card-desc">Color, typography, spacing, and motion tokens that define our visual language.</div>
          <div class="card-link">Explore Foundation →</div>
        </div>
        <div class="card" onclick="navigate('components/button')">
          <div class="card-icon">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
          </div>
          <div class="card-title">Components</div>
          <div class="card-desc">Reusable mobile components — buttons, inputs, sheets, and more.</div>
          <div class="card-link">Browse Components →</div>
        </div>
        <div class="card" onclick="navigate('patterns/empty-states')">
          <div class="card-icon">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"/>
            </svg>
          </div>
          <div class="card-title">Patterns</div>
          <div class="card-desc">Proven UX patterns for empty states, errors, forms, and onboarding.</div>
          <div class="card-link">View Patterns →</div>
        </div>
      </div>
    `
  },

  'get-started/introduction': {
    title: 'Introduction',
    breadcrumb: ['Get Started'],
    status: 'stable',
    tabs: ['Overview'],
    render: () => `
      <h2>What is the Mobile Design System?</h2>
      <p>The Mobile Design System (MDS) is a shared set of design principles, components, and tokens used to build consistent mobile experiences across iOS and Android platforms.</p>
      <p>It is the single source of truth for our mobile product teams — designers and developers working from the same foundation.</p>

      <h2>Principles</h2>
      <ul>
        <li><strong>Consistent</strong> — Same patterns across all screens and platforms</li>
        <li><strong>Accessible</strong> — WCAG 2.1 AA compliant by default</li>
        <li><strong>Efficient</strong> — Fast to implement, easy to maintain</li>
        <li><strong>Scalable</strong> — Built to grow with the product</li>
      </ul>

      <div class="divider"></div>

      <h2>Getting started</h2>
      <p>Choose your path based on your role:</p>

      <div class="callout callout-info">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>Start with <strong>Foundation</strong> to understand our core tokens before diving into components.</span>
      </div>
    `
  },

  'foundation/colors': {
    title: 'Colors',
    breadcrumb: ['Foundation'],
    status: 'stable',
    tabs: ['Overview', 'Tokens'],
    render: (tab) => tab === 'Tokens' ? `
      <h2>Color tokens</h2>
      <p>Color tokens will be populated from your Figma local variables.</p>
      <div class="placeholder-content">
        <div class="placeholder-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343"/>
          </svg>
        </div>
        <div class="placeholder-title">Token dosyası henüz bağlanmadı</div>
        <div class="placeholder-text">Figma local variables buraya eklenecek.</div>
      </div>
    ` : `
      <h2>Color system</h2>
      <p>Our color system is built on a set of semantic tokens that map to primitive values. This ensures consistency across all surfaces.</p>

      <h3>Brand colors</h3>
      <p>Primary brand colors used for interactive elements, highlights, and calls to action.</p>
      <table class="token-table">
        <thead>
          <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>color.brand.primary</code></td>
            <td><span class="token-swatch"><span class="swatch" style="background:#1B6EF3"></span>#1B6EF3</span></td>
            <td>Buttons, links, active states</td>
          </tr>
          <tr>
            <td><code>color.brand.primary-hover</code></td>
            <td><span class="token-swatch"><span class="swatch" style="background:#1558C0"></span>#1558C0</span></td>
            <td>Hover state of primary</td>
          </tr>
          <tr>
            <td><code>color.brand.primary-light</code></td>
            <td><span class="token-swatch"><span class="swatch" style="background:#EEF4FF"></span>#EEF4FF</span></td>
            <td>Backgrounds, tints</td>
          </tr>
        </tbody>
      </table>

      <div class="divider"></div>

      <div class="callout callout-info">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>Tüm token değerleri Figma <strong>asskapp</strong> dosyasındaki local variables ile senkronize edilecek.</span>
      </div>
    `
  },

  'components/button': {
    title: 'Button',
    breadcrumb: ['Components', 'Actions'],
    status: 'stable',
    tabs: ['Overview', 'Usage', 'Design'],
    render: (tab) => {
      if (tab === 'Usage') return `
        <h2>Usage guidelines</h2>
        <p>Use buttons to trigger actions. Choose the button type based on the importance of the action.</p>
        <h3>Do</h3>
        <ul>
          <li>Use a single primary button per view</li>
          <li>Keep button labels short and action-oriented</li>
          <li>Use sentence case for button labels</li>
        </ul>
        <h3>Don't</h3>
        <ul>
          <li>Don't use more than one primary button per screen</li>
          <li>Don't truncate button labels</li>
        </ul>
      `;
      if (tab === 'Design') return `
        <h2>Design specs</h2>
        <p>Figma specs ve anotasyonlar buraya eklenecek.</p>
        <div class="placeholder-content">
          <div class="placeholder-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="placeholder-title">Figma specs</div>
          <div class="placeholder-text">Figma'dan design specs buraya bağlanacak.</div>
        </div>
      `;
      return `
        <h2>Overview</h2>
        <p>Buttons trigger an action or event, such as submitting a form, opening a dialog, or performing a delete operation.</p>

        <div class="preview-box">
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <button style="background:#1B6EF3;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Primary</button>
            <button style="background:#fff;color:#111827;border:1px solid #E5E7EB;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Secondary</button>
            <button style="background:transparent;color:#1B6EF3;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Ghost</button>
            <button style="background:#FEE2E2;color:#DC2626;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Danger</button>
          </div>
        </div>

        <h2>Variants</h2>
        <table class="token-table">
          <thead><tr><th>Variant</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><code>primary</code></td><td>Main call to action. Use once per view.</td></tr>
            <tr><td><code>secondary</code></td><td>Secondary actions alongside a primary button.</td></tr>
            <tr><td><code>ghost</code></td><td>Low-emphasis actions, toolbars.</td></tr>
            <tr><td><code>danger</code></td><td>Destructive actions like delete or remove.</td></tr>
          </tbody>
        </table>
      `;
    }
  },

};

// ── Generic placeholder renderer ────────────────────────────
function placeholderPage(id) {
  const parts = id.split('/');
  const label = parts[parts.length - 1]
    .split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

  return {
    title: label,
    breadcrumb: parts.slice(0, -1).map(p => p.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')),
    status: 'stable',
    tabs: ['Overview'],
    render: () => `
      <div class="placeholder-content">
        <div class="placeholder-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <div class="placeholder-title">${label}</div>
        <div class="placeholder-text">Bu sayfa yakında eklenecek.</div>
      </div>
    `
  };
}

// ── State ───────────────────────────────────────────────────
let currentPage = 'welcome';
let currentTab  = 0;
let openGroups  = new Set();

// ── Router ──────────────────────────────────────────────────
function navigate(id, tabIndex = 0) {
  currentPage = id || 'welcome';
  currentTab  = tabIndex;
  window.location.hash = currentPage === 'welcome' ? '' : currentPage;
  renderPage();
  updateNav();
}

window.navigate = navigate;

window.addEventListener('hashchange', () => {
  const id = window.location.hash.replace('#', '') || 'welcome';
  currentPage = id;
  currentTab  = 0;
  renderPage();
  updateNav();
});

// ── Sidebar render ──────────────────────────────────────────
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');

  nav.innerHTML = NAV.map(section => `
    <div class="nav-section">
      <div class="nav-section-title">${section.section}</div>
      ${section.items.map(item => {
        if (item.children) {
          const isOpen = openGroups.has(item.label);
          const hasActive = item.children.some(c => c.id === currentPage);
          if (hasActive && !isOpen) openGroups.add(item.label);

          return `
            <div class="nav-item group-trigger" onclick="toggleGroup('${item.label}')">
              <span>${item.label}</span>
              <svg class="nav-chevron ${openGroups.has(item.label) ? 'open' : ''}"
                   width="12" height="12" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="nav-children ${openGroups.has(item.label) ? 'open' : ''}">
              ${item.children.map(child => `
                <div class="nav-child ${child.id === currentPage ? 'active' : ''}"
                     onclick="navigate('${child.id}')">
                  ${child.label}
                </div>
              `).join('')}
            </div>
          `;
        }
        return `
          <div class="nav-item ${item.id === currentPage ? 'active' : ''}"
               onclick="navigate('${item.id}')">
            ${item.label}
          </div>
        `;
      }).join('')}
    </div>
  `).join('');
}

function updateNav() {
  renderSidebar();
}

window.toggleGroup = function(label) {
  if (openGroups.has(label)) openGroups.delete(label);
  else openGroups.add(label);
  renderSidebar();
};

// ── Header render ───────────────────────────────────────────
function renderHeader(page) {
  const breadcrumbEl = document.getElementById('breadcrumb');
  const titleEl      = document.getElementById('page-title');
  const tabsEl       = document.getElementById('page-tabs');

  // Breadcrumb
  if (currentPage === 'welcome') {
    breadcrumbEl.innerHTML = '<span class="breadcrumb-current">Home</span>';
  } else {
    const crumbs = ['Home', ...page.breadcrumb, page.title];
    breadcrumbEl.innerHTML = crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      return `
        ${i > 0 ? '<svg class="breadcrumb-sep" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>' : ''}
        <span class="${isLast ? 'breadcrumb-current' : 'breadcrumb-link'}" ${!isLast ? `onclick="navigate('welcome')"` : ''}>${c}</span>
      `;
    }).join('');
  }

  // Title row
  const header = document.querySelector('.header');
  const titleRow = document.getElementById('header-title-row');

  if (currentPage === 'welcome') {
    titleRow.style.display = 'none';
  } else {
    titleRow.style.display = 'flex';
    const badge = page.status ? `<span class="status-badge status-${page.status}">${page.status.charAt(0).toUpperCase() + page.status.slice(1)}</span>` : '';
    titleEl.innerHTML = `${page.title} ${badge}`;
  }

  // Tabs
  if (!page.tabs || page.tabs.length === 0) {
    tabsEl.innerHTML = '';
  } else {
    tabsEl.innerHTML = page.tabs.map((tab, i) => `
      <div class="tab ${i === currentTab ? 'active' : ''}"
           onclick="switchTab(${i})">${tab}</div>
    `).join('');
  }
}

window.switchTab = function(index) {
  currentTab = index;
  const page = getPage(currentPage);
  renderHeader(page);
  renderContent(page);
};

// ── Content render ──────────────────────────────────────────
function getPage(id) {
  return PAGES[id] || placeholderPage(id);
}

function renderContent(page) {
  const content = document.getElementById('content');
  const tab = page.tabs ? page.tabs[currentTab] : null;
  content.innerHTML = page.render(tab);
}

function renderPage() {
  const page = getPage(currentPage);
  renderHeader(page);
  renderContent(page);
  // Scroll content to top
  document.querySelector('.main').scrollTop = 0;
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();

  const hash = window.location.hash.replace('#', '');
  currentPage = hash || 'welcome';
  renderPage();
});
