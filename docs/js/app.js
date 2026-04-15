/* ============================================================
   MOBILE DESIGN SYSTEM — app.js
   Mews.design exact layout: sidebar + tabs + content + right TOC
   ============================================================ */

// ── Navigation tree ─────────────────────────────────────────
const NAV = [
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
      { label: 'Overview',      id: 'foundations/overview' },
      {
        label: 'Design Tokens', children: [
          { label: 'Overview',         id: 'foundations/tokens/overview' },
          { label: 'Our tokens',       id: 'foundations/tokens/our-tokens' },
          { label: 'Applying tokens',  id: 'foundations/tokens/applying' },
        ]
      },
      // Color ve sonrası şimdilik kaldırıldı
    ]
  },
  {
    label: 'Components', children: [
      { label: 'Bottom Tab Bar',    id: 'components/bottom-tab-bar' },
      { label: 'Top App Bar',       id: 'components/top-app-bar' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Button',            id: 'components/button' },
      { label: 'FAB',               id: 'components/fab' },
      { label: 'Icon Button',       id: 'components/icon-button' },
      { label: 'Text Field',        id: 'components/text-field' },
      { label: 'Checkbox',          id: 'components/checkbox' },
      { label: 'Radio Button',      id: 'components/radio-button' },
      { label: 'Toggle',            id: 'components/toggle' },
      { label: 'Alert',             id: 'components/alert' },
      { label: 'Snackbar',          id: 'components/snackbar' },
      { label: 'Progress',          id: 'components/progress' },
      { label: 'Skeleton',          id: 'components/skeleton' },
      { label: 'Card',              id: 'components/card' },
      { label: 'List Item',         id: 'components/list-item' },
      { label: 'Avatar',            id: 'components/avatar' },
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

// ── Pages ───────────────────────────────────────────────────
const PAGES = {

  'welcome': {
    tabs: [],
    toc: [],
    render: () => ({
      title: '',
      html: `
        <div class="welcome-hero">
          <div class="welcome-tag"><span class="welcome-tag-dot"></span>v1.0.0 · In development</div>
          <h1 class="welcome-title">Mobile Design System</h1>
          <p class="welcome-desc">A shared set of design principles, components, and tokens for building consistent, accessible mobile experiences.</p>
          <div class="welcome-btns">
            <button class="btn-primary" onclick="navigate('get-started/introduction')">Get Started <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></button>
            <button class="btn-secondary" onclick="navigate('foundations/color')">Explore Foundations</button>
          </div>
        </div>
        <div class="welcome-stats">
          <div><div class="stat-val">7</div><div class="stat-lbl">Foundation categories</div></div>
          <div><div class="stat-val">20+</div><div class="stat-lbl">Components</div></div>
          <div><div class="stat-val">4</div><div class="stat-lbl">UX Patterns</div></div>
        </div>
        <p class="section-label">What's inside</p>
        <div class="card-grid">
          <div class="card" onclick="navigate('foundations/color')">
            <div class="card-icon"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 2a10 10 0 010 20"/></svg></div>
            <div class="card-title">Foundations</div>
            <div class="card-desc">Color, typography, spacing, and motion tokens that define our visual language.</div>
            <div class="card-link">Explore →</div>
          </div>
          <div class="card" onclick="navigate('components/button')">
            <div class="card-icon"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
            <div class="card-title">Components</div>
            <div class="card-desc">Reusable mobile UI components — buttons, inputs, sheets, and more.</div>
            <div class="card-link">Browse →</div>
          </div>
          <div class="card" onclick="navigate('patterns/empty-states')">
            <div class="card-icon"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"/></svg></div>
            <div class="card-title">Patterns</div>
            <div class="card-desc">Proven UX patterns for empty states, errors, forms, and onboarding.</div>
            <div class="card-link">View →</div>
          </div>
        </div>
      `
    })
  },

  'foundations/tokens/our-tokens': {
    tabs: ['Overview', 'Our tokens', 'Applying tokens'],
    toc: ['Foundation tokens', 'Sizing', 'Spacing', 'Border radius', 'Border width', 'Opacity', 'Shadow', 'Typography'],
    render: (tab) => {
      const title = 'Foundation tokens';
      if (tab === 'Overview') return { title, html: `<p class="page-desc">Foundation tokens define our global design language — spacing, sizing, radii, typography styles, and more.</p><div class="placeholder"><div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><div class="placeholder-title">Overview</div><div class="placeholder-text">Yakında eklenecek.</div></div>` };
      if (tab === 'Applying tokens') return { title, html: `<p class="page-desc">How to apply tokens in your designs and code.</p><div class="placeholder"><div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><div class="placeholder-title">Applying tokens</div><div class="placeholder-text">Yakında eklenecek.</div></div>` };

      // "Our tokens" tab
      const sizes = [
        ['sizing.50','{sizing-base}*0.5','4px',4],
        ['sizing.100','{sizing-base}*1','8px',8],
        ['sizing.200','{sizing-base}*2','16px',16],
        ['sizing.300','{sizing-base}*3','24px',24],
        ['sizing.400','{sizing-base}*4','32px',32],
        ['sizing.500','{sizing-base}*5','40px',40],
        ['sizing.550','{sizing-base}*5.5','44px',44],
        ['sizing.600','{sizing-base}*6','48px',48],
        ['sizing.700','{sizing-base}*7','56px',56],
      ];
      return { title, html: `
        <p class="page-desc">Foundation tokens define our global design language — spacing, sizing, radii, typography styles, and more. They provide the base values used to build components and layouts.</p>
        <h2 id="Sizing">Sizing</h2>
        <table class="token-table">
          <thead><tr><th>Name</th><th>Formula</th><th>Value</th><th>Example</th></tr></thead>
          <tbody>
            ${sizes.map(([name,formula,val,px]) => `
              <tr>
                <td><span class="token-name">${name}</span></td>
                <td>${formula}</td>
                <td>${val}</td>
                <td><div class="swatch-wrap"><div class="swatch" style="width:${Math.min(px,64)}px;height:${Math.min(px,64)}px"></div></div></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <h2 id="Spacing">Spacing</h2>
        <table class="token-table">
          <thead><tr><th>Name</th><th>Formula</th><th>Value</th><th>Example</th></tr></thead>
          <tbody>
            ${[['spacing.100','4px',4],['spacing.200','8px',8],['spacing.300','12px',12],['spacing.400','16px',16],['spacing.500','20px',20],['spacing.600','24px',24]].map(([name,val,px]) => `
              <tr>
                <td><span class="token-name">${name}</span></td>
                <td>—</td>
                <td>${val}</td>
                <td><div class="swatch-wrap"><div class="swatch" style="width:${px}px;height:${px}px"></div></div></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <h2 id="Border radius">Border radius</h2>
        <table class="token-table">
          <thead><tr><th>Name</th><th>Value</th><th>Example</th></tr></thead>
          <tbody>
            ${[['radius.none','0px',0],['radius.sm','4px',4],['radius.md','8px',8],['radius.lg','12px',12],['radius.xl','16px',16],['radius.full','9999px',9999]].map(([name,val,r]) => `
              <tr>
                <td><span class="token-name">${name}</span></td>
                <td>${val}</td>
                <td><div class="swatch-wrap"><div class="swatch" style="width:32px;height:32px;border-radius:${r}px"></div></div></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `};
    }
  },

  'components/button': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Overview', 'Variants', 'Sizes', 'States'],
    render: (tab) => {
      const title = 'Button';
      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Guidelines for when and how to use buttons.</p>
        <h2 id="Overview">Do</h2>
        <ul>
          <li>Use a single primary button per view</li>
          <li>Keep button labels short and action-oriented</li>
          <li>Use sentence case for button labels</li>
        </ul>
        <h2>Don't</h2>
        <ul>
          <li>Don't use more than one primary button per screen</li>
          <li>Don't truncate button labels</li>
          <li>Don't use buttons for navigation — use links instead</li>
        </ul>
      `};
      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Design specs ve Figma bileşen bağlantıları.</p>
        <div class="placeholder"><div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div><div class="placeholder-title">Figma specs</div><div class="placeholder-text">Figma'dan design specs buraya bağlanacak.</div></div>
      `};
      return { title, html: `
        <p class="page-desc">Buttons trigger an action or event, such as submitting a form, opening a dialog, or performing a delete operation.</p>
        <div class="preview-box">
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <button style="background:#5C5CE6;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Primary</button>
            <button style="background:#fff;color:#111827;border:1px solid #E5E7EB;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Secondary</button>
            <button style="background:transparent;color:#5C5CE6;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Ghost</button>
            <button style="background:#FEE2E2;color:#DC2626;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;cursor:pointer">Danger</button>
          </div>
        </div>
        <h2 id="Variants">Variants</h2>
        <table class="token-table">
          <thead><tr><th>Variant</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">primary</span></td><td>Main call to action. Use once per view.</td></tr>
            <tr><td><span class="token-name">secondary</span></td><td>Secondary actions alongside a primary button.</td></tr>
            <tr><td><span class="token-name">ghost</span></td><td>Low-emphasis actions, toolbars.</td></tr>
            <tr><td><span class="token-name">danger</span></td><td>Destructive actions like delete or remove.</td></tr>
          </tbody>
        </table>
        <h2 id="Sizes">Sizes</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Height</th><th>Padding</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">sm</span></td><td>32px</td><td>8px 14px</td></tr>
            <tr><td><span class="token-name">md</span></td><td>40px</td><td>10px 18px</td></tr>
            <tr><td><span class="token-name">lg</span></td><td>48px</td><td>12px 22px</td></tr>
          </tbody>
        </table>
      `};
    }
  },

};

// ── Generic placeholder ─────────────────────────────────────
function makePage(id) {
  const parts = id.split('/');
  const label = parts[parts.length-1].split('-').map(w => w[0].toUpperCase()+w.slice(1)).join(' ');
  return {
    tabs: ['Overview'],
    toc: [],
    render: () => ({ title: label, html: `
      <p class="page-desc">Bu sayfa yakında eklenecek.</p>
      <div class="placeholder">
        <div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
        <div class="placeholder-title">${label}</div>
        <div class="placeholder-text">İçerik Figma token'ları eklendikten sonra doldurulacak.</div>
      </div>
    `})
  };
}

// ── State ───────────────────────────────────────────────────
let currentId  = 'welcome';
let currentTab = 0;
let openGroups = new Set();

// ── Helpers ─────────────────────────────────────────────────
function getPage(id) { return PAGES[id] || makePage(id); }

function findOpenGroups(id) {
  function search(items, path) {
    for (const item of items) {
      if (item.id === id) return true;
      if (item.children) {
        if (search(item.children, [...path, item.label])) {
          openGroups.add(item.label);
          return true;
        }
      }
    }
    return false;
  }
  search(NAV, []);
}

// ── Navigate ────────────────────────────────────────────────
function navigate(id, tabIndex) {
  currentId  = id || 'welcome';
  currentTab = tabIndex || 0;
  window.location.hash = currentId === 'welcome' ? '' : currentId;
  findOpenGroups(currentId);
  render();
}

window.navigate = navigate;

window.addEventListener('hashchange', () => {
  const id = window.location.hash.replace('#','') || 'welcome';
  currentId  = id;
  currentTab = 0;
  findOpenGroups(id);
  render();
});

// ── Sidebar ─────────────────────────────────────────────────
function renderSidebar() {
  const el = document.getElementById('sidebar-nav');

  function renderItem(item, depth) {
    if (!item.children) {
      // Leaf
      const cls = depth === 0 ? 'nav-item' : depth === 1 ? 'nav-child' : 'nav-grandchild';
      return `<div class="${cls} ${item.id === currentId ? 'active' : ''}"
                   onclick="navigate('${item.id}')">${item.label}</div>`;
    }

    const isOpen   = openGroups.has(item.label);
    const childCls = depth === 0 ? 'nav-item' : 'nav-child';
    const kidCls   = depth === 0 ? 'nav-children' : 'nav-grandchildren';

    return `
      <div class="${childCls} group-trigger" onclick="toggleGroup('${item.label}')">
        <span>${item.label}</span>
        <svg class="nav-chevron ${isOpen ? 'open' : ''}" width="12" height="12"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
      <div class="${kidCls} ${isOpen ? 'open' : ''}">
        ${item.children.map(c => renderItem(c, depth+1)).join('')}
      </div>
    `;
  }

  el.innerHTML = NAV.map(item => renderItem(item, 0)).join('');
}

window.toggleGroup = function(label) {
  openGroups.has(label) ? openGroups.delete(label) : openGroups.add(label);
  renderSidebar();
};

// ── Tabs ────────────────────────────────────────────────────
function renderTabs(page) {
  const el = document.getElementById('tabs-bar');
  if (!page.tabs || page.tabs.length === 0) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'flex';
  el.innerHTML = page.tabs.map((t,i) => `
    <div class="tab ${i === currentTab ? 'active' : ''}" onclick="switchTab(${i})">${t}</div>
  `).join('');
}

window.switchTab = function(i) {
  currentTab = i;
  const page = getPage(currentId);
  renderTabs(page);
  renderContent(page);
};

// ── Content ─────────────────────────────────────────────────
function renderContent(page) {
  const tab     = page.tabs ? page.tabs[currentTab] : null;
  const result  = page.render(tab);
  const titleEl = document.getElementById('page-title');
  const bodyEl  = document.getElementById('content-body');

  titleEl.textContent = result.title || '';
  titleEl.style.display = result.title ? 'block' : 'none';
  bodyEl.innerHTML = result.html;
}

// ── TOC ─────────────────────────────────────────────────────
function renderToc(page) {
  const el = document.getElementById('toc');
  if (!page.toc || page.toc.length === 0) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'block';
  el.innerHTML = `
    <div class="toc-inner">
      <div class="toc-label">On this page</div>
      ${page.toc.map((t,i) => `
        <div class="toc-link ${i === 0 ? 'active' : ''}" onclick="scrollToSection('${t}')">${t}</div>
      `).join('')}
    </div>
  `;
}

window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ── Full render ─────────────────────────────────────────────
function render() {
  const page = getPage(currentId);
  renderSidebar();
  renderTabs(page);
  renderContent(page);
  renderToc(page);
  document.querySelector('.main').scrollTop = 0;
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#','') || 'welcome';
  currentId  = hash;
  currentTab = 0;
  findOpenGroups(hash);
  render();
});
