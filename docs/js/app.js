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
      {
        label: 'Design Tokens', children: [
          { label: 'Our Tokens',  id: 'foundations/tokens/our-tokens' },
        ]
      },
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
    tabs: ['Overview', 'Our Tokens', 'Applying Tokens'],
    toc: ['Sizing', 'Spacing', 'Radius', 'Typography', 'Colors'],
    render: (tab) => {
      const title = 'Foundation Tokens';

      // ── Sizing (Figma: bt-base-sizing-*)
      const sizes = [
        ['base-sizing-none', '0rem',    '0px'],
        ['base-sizing-3xs',  '0.25rem', '4px'],
        ['base-sizing-2xs',  '0.5rem',  '8px'],
        ['base-sizing-xs',   '0.75rem', '12px'],
        ['base-sizing-sm',   '1rem',    '16px'],
        ['base-sizing-md',   '1.25rem', '20px'],
        ['base-sizing-lg',   '1.5rem',  '24px'],
        ['base-sizing-xl',   '1.75rem', '28px'],
        ['base-sizing-2xl',  '2rem',    '32px'],
        ['base-sizing-3xl',  '2.25rem', '36px'],
        ['base-sizing-4xl',  '2.5rem',  '40px'],
        ['base-sizing-5xl',  '2.75rem', '44px'],
        ['base-sizing-6xl',  '3rem',    '48px'],
        ['base-sizing-7xl',  '3.25rem', '52px'],
        ['base-sizing-8xl',  '3.5rem',  '56px'],
        ['base-sizing-9xl',  '3.75rem', '60px'],
        ['base-sizing-10xl', '4rem',    '64px'],
        ['base-sizing-11xl', '4.25rem', '68px'],
        ['base-sizing-12xl', '4.5rem',  '72px'],
        ['base-sizing-13xl', '4.75rem', '76px'],
        ['base-sizing-14xl', '5rem',    '80px'],
        ['base-sizing-15xl', '5.25rem', '84px'],
        ['base-sizing-16xl', '5.5rem',  '88px'],
        ['base-sizing-17xl', '5.75rem', '92px'],
        ['base-sizing-18xl', '6rem',    '96px'],
        ['base-sizing-19xl', '6.25rem', '100px'],
        ['base-sizing-20xl', '7.5rem',  '120px'],
      ];

      // ── Spacing (Figma: Space/*)
      const spacing = [
        ['space-none', '0rem',     '0px',   0],
        ['space-2xs',  '0.125rem', '2px',   2],
        ['space-xs',   '0.25rem',  '4px',   4],
        ['space-sm',   '0.375rem', '6px',   6],
        ['space-md',   '0.5rem',   '8px',   8],
        ['space-lg',   '0.625rem', '10px',  10],
        ['space-xl',   '0.75rem',  '12px',  12],
        ['space-2xl',  '1rem',     '16px',  16],
        ['space-3xl',  '1.25rem',  '20px',  20],
        ['space-4xl',  '1.5rem',   '24px',  24],
        ['space-5xl',  '1.75rem',  '28px',  28],
        ['space-6xl',  '2rem',     '32px',  32],
        ['space-7xl',  '2.25rem',  '36px',  36],
        ['space-8xl',  '2.5rem',   '40px',  40],
        ['space-9xl',  '2.75rem',  '44px',  44],
        ['space-10xl', '3rem',     '48px',  48],
        ['space-11xl', '3.25rem',  '52px',  52],
        ['space-12xl', '3.5rem',   '56px',  56],
        ['space-13xl', '3.75rem',  '60px',  60],
        ['space-14xl', '4rem',     '64px',  64],
        ['space-15xl', '4.25rem',  '68px',  68],
        ['space-16xl', '4.5rem',   '72px',  72],
        ['space-17xl', '5rem',     '80px',  80],
      ];

      // ── Radius (Figma: Radius/*)
      const radii = [
        ['radius-none', '0rem',     '0px',    0],
        ['radius-xs',   '0.125rem', '2px',    2],
        ['radius-sm',   '0.25rem',  '4px',    4],
        ['radius-md',   '0.375rem', '6px',    6],
        ['radius-lg',   '0.5rem',   '8px',    8],
        ['radius-xl',   '0.625rem', '10px',   10],
        ['radius-2xl',  '0.75rem',  '12px',   12],
        ['radius-3xl',  '0.875rem', '14px',   14],
        ['radius-4xl',  '1rem',     '16px',   16],
        ['radius-5xl',  '1.25rem',  '20px',   20],
        ['radius-6xl',  '1.5rem',   '24px',   24],
        ['radius-full', '—',        '9999px', 9999],
      ];

      // ── Typography (Figma: Font/Size/* + Font/Line-Height/*)
      const typeScale = [
        ['Font/Size/text-2xs', '10px', '12px'],
        ['Font/Size/text-xs',  '12px', '16px'],
        ['Font/Size/text-sm',  '14px', '16px'],
        ['Font/Size/text-md',  '16px', '24px'],
        ['Font/Size/text-lg',  '18px', '24px'],
        ['Font/Size/text-xl',  '20px', '28px'],
        ['Font/Size/text-2xl', '24px', '32px'],
        ['Font/Size/text-3xl', '28px', '36px'],
        ['Font/Size/text-4xl', '32px', '40px'],
        ['Font/Size/text-5xl', '36px', '44px'],
        ['Font/Size/text-6xl', '40px', '48px'],
      ];

      // ── Colors (Figma: Color Palettes / Primitives)
      const palettes = {
        Blue:   [['50','#f1f7fe'],['100','#e2edfc'],['200','#bedbf9'],['300','#85bdf4'],['400','#449bec'],['500','#1c7fdb'],['600','#0e62bb'],['700','#0d4e97'],['800','#0f447d'],['900','#123968'],['950','#0c2445']],
        Gray:   [['50','#fafafa'],['100','#f5f5f5'],['200','#e6e6e6'],['300','#d4d4d4'],['400','#a3a3a3'],['500','#727272'],['600','#535353'],['700','#404040'],['800','#272727'],['900','#1a1a1a'],['950','#0b0b0b']],
        Green:  [['50','#e8f3ee'],['100','#daede5'],['200','#b4dbcb'],['300','#87c1ab'],['400','#5ea38b'],['500','#448871'],['600','#356c5b'],['700','#2d584b'],['800','#28473e'],['900','#243d36'],['950','#1a2e26']],
        Yellow: [['50','#fdf9e8'],['100','#f9f2ce'],['200','#f4e8aa'],['300','#edd882'],['400','#e2c455'],['500','#d4af2c'],['600','#c49a12'],['700','#aa820a'],['800','#8c6a05'],['900','#6b5103'],['950','#523e02']],
        Red:    [['50','#fef2f2'],['100','#fde6e6'],['200','#fbd0d2'],['300','#f7aaae'],['400','#f27a83'],['500','#e84b5b'],['600','#d83a52'],['700','#b31d38'],['800','#961b35'],['900','#801b33'],['950','#470a17']],
        Teal:   [['50','#f0fdfa'],['100','#ccfbf1'],['200','#99f6e4'],['300','#5eead4'],['400','#2dd4bf'],['500','#14b8a6'],['600','#0d9488'],['700','#0f766e'],['800','#115e59'],['900','#134e4a'],['950','#042f2e']],
        Purple: [['50','#faf5ff'],['100','#f3e8ff'],['200','#e9d5ff'],['300','#d8b4fe'],['400','#c084fc'],['500','#a855f7'],['600','#9333ea'],['700','#7e22ce'],['800','#6b21a8'],['900','#581c87'],['950','#3b0764']],
      };

      const colorHtml = Object.entries(palettes).map(([name, shades]) => `
        <h3 id="color-${name.toLowerCase()}">${name}</h3>
        <div class="color-palette">
          ${shades.map(([step, hex]) => {
            const stepNum = parseInt(step);
            const isDark = stepNum >= 500;
            return `
            <div class="color-chip-wrap">
              <div class="color-chip" style="background:${hex}">
                <span class="color-step" style="color:${isDark ? 'rgba(255,255,255,0.8)' : '#404040'}">${step}</span>
              </div>
              <div class="color-chip-info">
                <span class="color-token-name">${name}/${step}</span>
                <span class="color-hex">${hex}</span>
              </div>
            </div>`;
          }).join('')}
        </div>
      `).join('');

      const ourTokensHtml = `
        <h2 id="Sizing">Sizing</h2>
        <table class="token-table">
          <thead><tr><th>Name</th><th>Value</th><th>Pixel</th><th>Example</th></tr></thead>
          <tbody>
            ${sizes.map(([name, val, px]) => {
              const pxNum = parseInt(px);
              const sz = Math.min(pxNum, 80);
              return `
              <tr>
                <td><span class="token-name">${name}</span></td>
                <td>${val}</td>
                <td>${px}</td>
                <td><div class="swatch-wrap">${pxNum > 0 ? `<div class="swatch" style="width:${sz}px;height:${sz}px"></div>` : ''}</div></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>

        <h2 id="Spacing">Spacing</h2>
        <table class="token-table">
          <thead><tr><th>Name</th><th>Value</th><th>Pixel</th><th>Example</th></tr></thead>
          <tbody>
            ${spacing.map(([name, rem, px, pxNum]) => {
              const gap = Math.min(pxNum, 64);
              return `
              <tr>
                <td><span class="token-name">${name}</span></td>
                <td>${rem}</td>
                <td>${px}</td>
                <td>
                  <div class="spacing-example">
                    <div class="spacing-point spacing-point-a">A</div>
                    <div class="spacing-gap" style="width:${gap}px"></div>
                    <div class="spacing-point spacing-point-b">B</div>
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>

        <h2 id="Radius">Radius</h2>
        <table class="token-table">
          <thead><tr><th>Name</th><th>Value</th><th>Pixel</th><th>Example</th></tr></thead>
          <tbody>
            ${radii.map(([name, rem, px, r]) => {
              const rx = Math.min(r, 24);
              const svg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="47" height="47" rx="${rx}" fill="#f1f7fe" stroke="#0d4e97" stroke-dasharray="24 24"/></svg>`;
              return `
              <tr>
                <td><span class="token-name">${name}</span></td>
                <td>${rem}</td>
                <td>${px}</td>
                <td>${svg}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>

        <h2 id="Typography">Typography</h2>
        <table class="token-table">
          <thead><tr><th>Token</th><th>Size</th><th>Line Height</th><th>Preview</th></tr></thead>
          <tbody>
            ${typeScale.map(([token, size, lh]) => `
              <tr>
                <td><span class="token-name">${token}</span></td>
                <td>${size}</td>
                <td>${lh}</td>
                <td><span style="font-size:${size};line-height:${lh};color:var(--bt-text-default)">Aa</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h2 id="Colors">Colors</h2>
        ${colorHtml}
      `;

      const applyingHtml = `
        <h2 id="Applying Tokens">How to apply tokens</h2>
        <p class="page-desc">How to apply tokens in your designs and code.</p>
        <div class="placeholder">
          <div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
          <div class="placeholder-title">Applying Tokens</div>
          <div class="placeholder-text">Yakında eklenecek.</div>
        </div>
      `;

      if (tab === 'Our Tokens')      return { title, html: `<p class="page-desc">Foundation tokens sourced directly from Figma ASSK App local variables.</p>${ourTokensHtml}` };
      if (tab === 'Applying Tokens') return { title, html: applyingHtml };

      return { title, html: `
        <p class="page-desc">Foundation tokens define our global design language — sizing, spacing, radius, typography and color. Sourced directly from Figma ASSK App local variables.</p>
        ${ourTokensHtml}
        ${applyingHtml}
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
  const col = document.getElementById('toc-col');
  const el  = document.getElementById('toc');
  if (!page.toc || page.toc.length === 0) {
    col.style.display = 'none';
    return;
  }
  col.style.display = 'block';
  el.innerHTML = `
    <div class="toc-label">On this page</div>
    ${page.toc.map((t,i) => `
      <div class="toc-link ${i === 0 ? 'active' : ''}" onclick="scrollToSection('${t}')">${t}</div>
    `).join('')}
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
