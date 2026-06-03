/* Mobile Documentation — Navigation & Pages */

const NAV_MOBILE = [
  { label: 'Welcome', id: 'welcome' },
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
      { label: 'Accordion',         id: 'components/accordion' },
      { label: 'Alert',             id: 'components/alert' },
      { label: 'Alert Dialog',      id: 'components/alert-dialog' },
      { label: 'Avatar',            id: 'components/avatar' },
      { label: 'Badge',             id: 'components/badge' },
      { label: 'Bottom Sheet',      id: 'components/bottom-sheet' },
      { label: 'Bottom Tab Bar',    id: 'components/bottom-tab-bar' },
      { label: 'Button',            id: 'components/button' },
      { label: 'Button Dock',       id: 'components/button-dock' },
      { label: 'Button Icon',       id: 'components/icon-button' },
      { label: 'Card',              id: 'components/card' },
      { label: 'Checkbox',          id: 'components/checkbox' },
      { label: 'Dialog',            id: 'components/dialog' },
      { label: 'FAB',               id: 'components/fab' },
      { label: 'List Item',         id: 'components/list-item' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Progress',          id: 'components/progress' },
      { label: 'Radio Button',      id: 'components/radio-button' },
      { label: 'Switch',            id: 'components/switch' },
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
    toc: [
      { group: 'Foundation Tokens', items: ['Sizing', 'Spacing', 'Radius', 'Typography', 'Colors'] },
      { group: 'Theme Tokens',      items: ['Background', 'Text', 'Border', 'Visual Assets'] },
    ],
    render: (tab) => {
      const title = 'Foundation Tokens';

      // ── Sizing (Figma: bt-base-sizing-*)
      const sizes = [
        ['base-sizing-none',  '0rem',      '0px'],
        ['base-sizing-3xs',   '0.0625rem', '1px'],
        ['base-sizing-2xs',   '0.125rem',  '2px'],
        ['base-sizing-xs',    '0.25rem',   '4px'],
        ['base-sizing-sm',    '0.375rem',  '6px'],
        ['base-sizing-md',    '0.5rem',    '8px'],
        ['base-sizing-lg',    '0.625rem',  '10px'],
        ['base-sizing-xl',    '0.75rem',   '12px'],
        ['base-sizing-2xl',   '0.875rem',  '14px'],
        ['base-sizing-3xl',   '1rem',      '16px'],
        ['base-sizing-4xl',   '1.125rem',  '18px'],
        ['base-sizing-5xl',   '1.25rem',   '20px'],
        ['base-sizing-6xl',   '1.5rem',    '24px'],
        ['base-sizing-7xl',   '1.75rem',   '28px'],
        ['base-sizing-8xl',   '2rem',      '32px'],
        ['base-sizing-9xl',   '2.25rem',   '36px'],
        ['base-sizing-10xl',  '2.5rem',    '40px'],
        ['base-sizing-11xl',  '2.75rem',   '44px'],
        ['base-sizing-12xl',  '3rem',      '48px'],
        ['base-sizing-13xl',  '3.25rem',   '52px'],
        ['base-sizing-14xl',  '3.5rem',    '56px'],
        ['base-sizing-15xl',  '3.75rem',   '60px'],
        ['base-sizing-16xl',  '4rem',      '64px'],
        ['base-sizing-17xl',  '4.25rem',   '68px'],
        ['base-sizing-18xl',  '4.5rem',    '72px'],
        ['base-sizing-19xl',  '4.75rem',   '76px'],
        ['base-sizing-20xl',  '5rem',      '80px'],
        ['base-sizing-21xl',  '5.25rem',   '84px'],
        ['base-sizing-22xl',  '5.5rem',    '88px'],
        ['base-sizing-23xl',  '5.75rem',   '92px'],
        ['base-sizing-24xl',  '6rem',      '96px'],
        ['base-sizing-25xl',  '6.25rem',   '100px'],
        ['base-sizing-26xl',  '7rem',      '112px'],
        ['base-sizing-27xl',  '7.5rem',    '120px'],
        ['base-sizing-28xl',  '8rem',      '128px'],
        ['base-sizing-29xl',  '8.25rem',   '132px'],
        ['base-sizing-30xl',  '9rem',      '144px'],
        ['base-sizing-31xl',  '10rem',     '160px'],
        ['base-sizing-32xl',  '11rem',     '176px'],
        ['base-sizing-33xl',  '11.25rem',  '180px'],
        ['base-sizing-34xl',  '12rem',     '192px'],
        ['base-sizing-full',  '—',         '9999px'],
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
        ['text-2xs', '10px', '12px'],
        ['text-xs',  '12px', '16px'],
        ['text-sm',  '14px', '16px'],
        ['text-md',  '16px', '24px'],
        ['text-lg',  '18px', '24px'],
        ['text-xl',  '20px', '28px'],
        ['text-2xl', '24px', '32px'],
        ['text-3xl', '28px', '36px'],
        ['text-4xl', '32px', '40px'],
        ['text-5xl', '36px', '44px'],
        ['text-6xl', '40px', '48px'],
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

      const _seg = id => `<div class="seg-ctrl" style="display:inline-flex;align-items:center;background:#f5f5f5;border-radius:8px;padding:4px;gap:0;margin-bottom:16px;"><button class="seg-btn seg-btn--active" onclick="switchTokenView('${id}','preview',this)" style="display:flex;align-items:center;justify-content:center;padding:8px 20px;border-radius:6px;border:none;cursor:pointer;font-family:var(--font);font-size:14px;font-weight:500;line-height:16px;background:var(--bt-blue-700);color:#fff;transition:background 120ms,color 120ms;">Preview</button><button class="seg-btn" onclick="switchTokenView('${id}','json',this)" style="display:flex;align-items:center;justify-content:center;padding:8px 20px;border-radius:6px;border:none;cursor:pointer;font-family:var(--font);font-size:14px;font-weight:500;line-height:16px;background:transparent;color:var(--bt-text-default);transition:background 120ms,color 120ms;">Json</button></div>`;
      const _ci = `<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
      const _jv  = (id, data) => `<div id="token-view-json-${id}" style="display:none;"><div style="position:relative;"><button class="copy-btn" onclick="copyText(document.getElementById('token-json-${id}').textContent,this)" title="Copy JSON" style="position:absolute;top:12px;right:12px;width:32px;height:32px;background:var(--bt-surface-subtle);border-radius:6px;color:var(--bt-text-emphasis);">${_ci}</button><pre id="token-json-${id}" style="background:var(--bt-surface-subtle);color:var(--bt-text-default);border:1px solid var(--bt-border-muted);border-radius:8px;padding:20px 48px 20px 20px;font-family:var(--mono);font-size:13px;line-height:1.7;overflow-x:auto;margin:0;">${JSON.stringify(data, null, 2)}</pre></div></div>`;

      const ourTokensHtml = `
        <h2 id="Sizing">Sizing</h2>
        ${_seg('sizing')}
        <div id="token-view-preview-sizing">
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
        </div>
        ${_jv('sizing', Object.fromEntries(sizes.map(([name, val]) => [`--bt-${name}`, val])))}

        <h2 id="Spacing">Spacing</h2>
        ${_seg('spacing')}
        <div id="token-view-preview-spacing">
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
        </div>
        ${_jv('spacing', Object.fromEntries([
          ['--bt-space-none',  'var(--bt-base-sizing-none)'],
          ['--bt-space-2xs',   'var(--bt-base-sizing-2xs)'],
          ['--bt-space-xs',    'var(--bt-base-sizing-xs)'],
          ['--bt-space-sm',    'var(--bt-base-sizing-sm)'],
          ['--bt-space-md',    'var(--bt-base-sizing-md)'],
          ['--bt-space-lg',    'var(--bt-base-sizing-lg)'],
          ['--bt-space-xl',    'var(--bt-base-sizing-xl)'],
          ['--bt-space-2xl',   'var(--bt-base-sizing-3xl)'],
          ['--bt-space-3xl',   'var(--bt-base-sizing-5xl)'],
          ['--bt-space-4xl',   'var(--bt-base-sizing-6xl)'],
          ['--bt-space-5xl',   'var(--bt-base-sizing-7xl)'],
          ['--bt-space-6xl',   'var(--bt-base-sizing-8xl)'],
          ['--bt-space-7xl',   'var(--bt-base-sizing-9xl)'],
          ['--bt-space-8xl',   'var(--bt-base-sizing-10xl)'],
          ['--bt-space-9xl',   'var(--bt-base-sizing-11xl)'],
          ['--bt-space-10xl',  'var(--bt-base-sizing-12xl)'],
          ['--bt-space-11xl',  'var(--bt-base-sizing-13xl)'],
          ['--bt-space-12xl',  'var(--bt-base-sizing-14xl)'],
          ['--bt-space-13xl',  'var(--bt-base-sizing-15xl)'],
          ['--bt-space-14xl',  'var(--bt-base-sizing-16xl)'],
          ['--bt-space-15xl',  'var(--bt-base-sizing-17xl)'],
          ['--bt-space-16xl',  'var(--bt-base-sizing-18xl)'],
          ['--bt-space-17xl',  'var(--bt-base-sizing-20xl)'],
        ]))}

        <h2 id="Radius">Radius</h2>
        ${_seg('radius')}
        <div id="token-view-preview-radius">
        <table class="token-table">
          <thead><tr><th>Name</th><th>Value</th><th>Pixel</th><th>Example</th></tr></thead>
          <tbody>
            ${radii.map(([name, rem, px, r]) => {
              const rx = Math.min(r, 23.5);
              const straight = 47 - 2 * rx;
              const arcLen = Math.PI * rx / 2;
              let d, offset;
              if (straight < 1) {
                d = +(2 * Math.PI * rx / 16).toFixed(2);
                offset = 0;
              } else if (straight < 10) {
                const perim = 4 * straight + 2 * Math.PI * rx;
                d = +(perim / 16).toFixed(2);
                offset = d;
              } else {
                const N = arcLen > 0.1 ? Math.min(5, Math.max(2, Math.floor(straight / (2 * arcLen)))) : 5;
                d = +(straight / (2 * N)).toFixed(2);
                offset = d;
              }
              const svg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="47" height="47" rx="${rx}" fill="#f1f7fe" stroke="#0d4e97" stroke-dasharray="${d} ${d}" stroke-dashoffset="${offset}"/></svg>`;
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
        </div>
        ${_jv('radius', Object.fromEntries([
          ['--bt-radius-none', 'var(--bt-base-sizing-none)'],
          ['--bt-radius-xs',   'var(--bt-base-sizing-2xs)'],
          ['--bt-radius-sm',   'var(--bt-base-sizing-xs)'],
          ['--bt-radius-md',   'var(--bt-base-sizing-sm)'],
          ['--bt-radius-lg',   'var(--bt-base-sizing-md)'],
          ['--bt-radius-xl',   'var(--bt-base-sizing-lg)'],
          ['--bt-radius-2xl',  'var(--bt-base-sizing-xl)'],
          ['--bt-radius-3xl',  'var(--bt-base-sizing-2xl)'],
          ['--bt-radius-4xl',  'var(--bt-base-sizing-3xl)'],
          ['--bt-radius-5xl',  'var(--bt-base-sizing-5xl)'],
          ['--bt-radius-6xl',  'var(--bt-base-sizing-6xl)'],
          ['--bt-radius-full', 'var(--bt-base-sizing-full)'],
        ]))}

        <h2 id="Typography">Typography</h2>
        ${_seg('typography')}
        <div id="token-view-preview-typography">
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
        </div>
        ${_jv('typography', Object.fromEntries([
          ['--bt-text-2xs', { fontSize: 'var(--bt-base-sizing-lg)',   lineHeight: 'var(--bt-base-sizing-xl)' }],
          ['--bt-text-xs',  { fontSize: 'var(--bt-base-sizing-xl)',   lineHeight: 'var(--bt-base-sizing-3xl)' }],
          ['--bt-text-sm',  { fontSize: 'var(--bt-base-sizing-2xl)',  lineHeight: 'var(--bt-base-sizing-3xl)' }],
          ['--bt-text-md',  { fontSize: 'var(--bt-base-sizing-3xl)',  lineHeight: 'var(--bt-base-sizing-6xl)' }],
          ['--bt-text-lg',  { fontSize: 'var(--bt-base-sizing-4xl)',  lineHeight: 'var(--bt-base-sizing-6xl)' }],
          ['--bt-text-xl',  { fontSize: 'var(--bt-base-sizing-5xl)',  lineHeight: 'var(--bt-base-sizing-7xl)' }],
          ['--bt-text-2xl', { fontSize: 'var(--bt-base-sizing-6xl)',  lineHeight: 'var(--bt-base-sizing-8xl)' }],
          ['--bt-text-3xl', { fontSize: 'var(--bt-base-sizing-7xl)',  lineHeight: 'var(--bt-base-sizing-9xl)' }],
          ['--bt-text-4xl', { fontSize: 'var(--bt-base-sizing-8xl)',  lineHeight: 'var(--bt-base-sizing-10xl)' }],
          ['--bt-text-5xl', { fontSize: 'var(--bt-base-sizing-9xl)',  lineHeight: 'var(--bt-base-sizing-11xl)' }],
          ['--bt-text-6xl', { fontSize: 'var(--bt-base-sizing-10xl)', lineHeight: 'var(--bt-base-sizing-12xl)' }],
        ]))}

        <h2 id="Colors">Colors</h2>
        ${_seg('colors')}
        <div id="token-view-preview-colors">
        ${colorHtml}
        </div>
        ${_jv('colors', Object.fromEntries(Object.entries(palettes).flatMap(([colorName, shades]) => shades.map(([step, hex]) => [`--bt-${colorName.toLowerCase()}-${step}`, hex]))))}

        <h2 id="Background">Background</h2>
        <div class="placeholder">
          <div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
          <div class="placeholder-title">Background Tokens</div>
          <div class="placeholder-text">Yakında eklenecek.</div>
        </div>

        <h2 id="Text">Text</h2>
        ${_seg('text')}
        <div id="token-view-preview-text">

        <p class="section-label" style="margin-bottom:8px;">Base</p>
        <table class="token-table">
          <thead><tr><th>Example</th><th>Variable Token</th><th>Primitive Token</th><th>Hex</th></tr></thead>
          <tbody>
            ${[
              ['--bt-text-default',         'Gray/900',   '#1a1a1a'],
              ['--bt-text-solid',           'Gray/800',   '#272727'],
              ['--bt-text-heavy',           'Gray/700',   '#404040'],
              ['--bt-text-strong',          'Gray/600',   '#535353'],
              ['--bt-text-emphasis',        'Gray/500',   '#727272'],
              ['--bt-text-muted',           'Gray/400',   '#a3a3a3'],
              ['--bt-text-subtle',          'Gray/300',   '#d4d4d4'],
              ['--bt-text-light',           'Gray/200',   '#e6e6e6'],
              ['--bt-text-inverted',        'Gray/0',     '#ffffff'],
              ['--bt-text-brand',           'Blue/700',   '#0d4e97'],
              ['--bt-text-brand-subtle',    'Blue/600',   '#0e62bb'],
              ['--bt-text-brand-light',     'Blue/500',   '#1c7fdb'],
              ['--bt-text-success-emphasis','Green/700',  '#2d584b'],
              ['--bt-text-success-muted',   'Green/50',   '#e8f3ee'],
              ['--bt-text-warning-muted',   'Yellow/50',  '#fdf9e8'],
              ['--bt-text-error-emphasis',  'Red/700',    '#b31d38'],
              ['--bt-text-error-muted',     'Red/50',     '#fef2f2'],
            ].map(([token, colorToken, hex]) => `
              <tr>
                <td>
                  ${hex === '#ffffff'
                    ? `<div style="display:inline-flex;align-items:center;justify-content:center;padding:4px 8px;border-radius:8px;background:#1a1a1a;"><span style="font-size:20px;font-weight:500;line-height:28px;color:#ffffff;">Aa</span></div>`
                    : `<span style="font-size:20px;font-weight:500;line-height:28px;color:${hex}">Aa</span>`
                  }
                </td>
                <td>
                  <div style="display:inline-flex;align-items:center;gap:6px;">
                    <span class="token-name">${token}</span>
                    <button class="copy-btn" onclick="copyText('${token}', this)" title="Copy token">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    </button>
                  </div>
                </td>
                <td>${colorToken}</td>
                <td>
                  <div style="display:inline-flex;align-items:center;gap:6px;">
                    <span>${hex}</span>
                    <button class="copy-btn" onclick="copyText('${hex}', this)" title="Copy hex">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        ${[
          { label: 'Error Scale', tokens: [
            ['--bt-text-error-light',    'Red/50',   '#fef2f2'],
            ['--bt-text-error-subtle',   'Red/100',  '#fde6e6'],
            ['--bt-text-error-muted',    'Red/200',  '#fbd0d2'],
            ['--bt-text-error-emphasis', 'Red/300',  '#f7aaae'],
            ['--bt-text-error-strong',   'Red/400',  '#f27a83'],
            ['--bt-text-error-heavy',    'Red/500',  '#e84b5b'],
            ['--bt-text-error-solid',    'Red/600',  '#d83a52'],
            ['--bt-text-error-default',  'Red/700',  '#b31d38'],
            ['--bt-text-error-intense',  'Red/800',  '#961b35'],
          ]},
          { label: 'Success Scale', tokens: [
            ['--bt-text-success-light',    'Green/50',  '#e8f3ee'],
            ['--bt-text-success-subtle',   'Green/100', '#daede5'],
            ['--bt-text-success-muted',    'Green/200', '#b4dbcb'],
            ['--bt-text-success-emphasis', 'Green/300', '#87c1ab'],
            ['--bt-text-success-strong',   'Green/400', '#5ea38b'],
            ['--bt-text-success-heavy',    'Green/500', '#448871'],
            ['--bt-text-success-solid',    'Green/600', '#356c5b'],
            ['--bt-text-success-default',  'Green/700', '#2d584b'],
            ['--bt-text-success-intense',  'Green/800', '#28473e'],
          ]},
          { label: 'Warning Scale', tokens: [
            ['--bt-text-warning-light',    'Yellow/50',  '#fdf9e8'],
            ['--bt-text-warning-subtle',   'Yellow/100', '#f9f2ce'],
            ['--bt-text-warning-muted',    'Yellow/200', '#f4e8aa'],
            ['--bt-text-warning-emphasis', 'Yellow/300', '#edd882'],
            ['--bt-text-warning-strong',   'Yellow/400', '#e2c455'],
            ['--bt-text-warning-heavy',    'Yellow/500', '#d4af2c'],
            ['--bt-text-warning-solid',    'Yellow/600', '#c49a12'],
            ['--bt-text-warning-default',  'Yellow/700', '#aa820a'],
            ['--bt-text-warning-intense',  'Yellow/800', '#8c6a05'],
          ]},
          { label: 'Information Scale', tokens: [
            ['--bt-text-information-light',    'Blue/50',  '#f1f7fe'],
            ['--bt-text-information-subtle',   'Blue/100', '#e2edfc'],
            ['--bt-text-information-muted',    'Blue/200', '#bedbf9'],
            ['--bt-text-information-emphasis', 'Blue/300', '#85bdf4'],
            ['--bt-text-information-strong',   'Blue/400', '#449bec'],
            ['--bt-text-information-heavy',    'Blue/500', '#1c7fdb'],
            ['--bt-text-information-solid',    'Blue/600', '#0e62bb'],
            ['--bt-text-information-default',  'Blue/700', '#0d4e97'],
            ['--bt-text-information-intense',  'Blue/800', '#0f447d'],
          ]},
          { label: 'Brand Contrast Scale', tokens: [
            ['--bt-text-brand-contrast-light',    'Blue/50',  '#f1f7fe'],
            ['--bt-text-brand-contrast-subtle',   'Blue/100', '#e2edfc'],
            ['--bt-text-brand-contrast-muted',    'Blue/200', '#bedbf9'],
            ['--bt-text-brand-contrast-emphasis', 'Blue/300', '#85bdf4'],
            ['--bt-text-brand-contrast-strong',   'Blue/400', '#449bec'],
            ['--bt-text-brand-contrast-heavy',    'Blue/500', '#1c7fdb'],
            ['--bt-text-brand-contrast-solid',    'Blue/600', '#0e62bb'],
            ['--bt-text-brand-contrast-default',  'Blue/700', '#0d4e97'],
            ['--bt-text-brand-contrast-intense',  'Blue/800', '#0f447d'],
          ]},
        ].map(({ label, tokens }) => `
          <p class="section-label" style="margin-top:32px;margin-bottom:8px;">${label}</p>
          <table class="token-table">
            <thead><tr><th>Example</th><th>Variable Token</th><th>Primitive Token</th><th>Hex</th></tr></thead>
            <tbody>
              ${tokens.map(([token, colorToken, hex]) => `
                <tr>
                  <td><span style="font-size:20px;font-weight:500;line-height:28px;color:${hex}">Aa</span></td>
                  <td><div style="display:inline-flex;align-items:center;gap:6px;"><span class="token-name">${token}</span><button class="copy-btn" onclick="copyText('${token}',this)" title="Copy token"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div></td>
                  <td>${colorToken}</td>
                  <td><div style="display:inline-flex;align-items:center;gap:6px;"><span>${hex}</span><button class="copy-btn" onclick="copyText('${hex}',this)" title="Copy hex"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `).join('')}

        </div>
        ${_jv('text', {
          base: Object.fromEntries([
            ['--bt-text-default',         'var(--bt-gray-900)'],
            ['--bt-text-solid',           'var(--bt-gray-800)'],
            ['--bt-text-heavy',           'var(--bt-gray-700)'],
            ['--bt-text-strong',          'var(--bt-gray-600)'],
            ['--bt-text-emphasis',        'var(--bt-gray-500)'],
            ['--bt-text-muted',           'var(--bt-gray-400)'],
            ['--bt-text-subtle',          'var(--bt-gray-300)'],
            ['--bt-text-light',           'var(--bt-gray-200)'],
            ['--bt-text-inverted',        'var(--bt-gray-0)'],
            ['--bt-text-brand',           'var(--bt-blue-700)'],
            ['--bt-text-brand-subtle',    'var(--bt-blue-600)'],
            ['--bt-text-brand-light',     'var(--bt-blue-500)'],
            ['--bt-text-success-emphasis','var(--bt-green-700)'],
            ['--bt-text-success-muted',   'var(--bt-green-50)'],
            ['--bt-text-warning-muted',   'var(--bt-yellow-50)'],
            ['--bt-text-error-emphasis',  'var(--bt-red-700)'],
            ['--bt-text-error-muted',     'var(--bt-red-50)'],
          ]),
          'error-scale': Object.fromEntries([
            ['--bt-text-error-light',    'var(--bt-red-50)'],
            ['--bt-text-error-subtle',   'var(--bt-red-100)'],
            ['--bt-text-error-muted',    'var(--bt-red-200)'],
            ['--bt-text-error-emphasis', 'var(--bt-red-300)'],
            ['--bt-text-error-strong',   'var(--bt-red-400)'],
            ['--bt-text-error-heavy',    'var(--bt-red-500)'],
            ['--bt-text-error-solid',    'var(--bt-red-600)'],
            ['--bt-text-error-default',  'var(--bt-red-700)'],
            ['--bt-text-error-intense',  'var(--bt-red-800)'],
          ]),
          'success-scale': Object.fromEntries([
            ['--bt-text-success-light',    'var(--bt-green-50)'],
            ['--bt-text-success-subtle',   'var(--bt-green-100)'],
            ['--bt-text-success-muted',    'var(--bt-green-200)'],
            ['--bt-text-success-emphasis', 'var(--bt-green-300)'],
            ['--bt-text-success-strong',   'var(--bt-green-400)'],
            ['--bt-text-success-heavy',    'var(--bt-green-500)'],
            ['--bt-text-success-solid',    'var(--bt-green-600)'],
            ['--bt-text-success-default',  'var(--bt-green-700)'],
            ['--bt-text-success-intense',  'var(--bt-green-800)'],
          ]),
          'warning-scale': Object.fromEntries([
            ['--bt-text-warning-light',    'var(--bt-yellow-50)'],
            ['--bt-text-warning-subtle',   'var(--bt-yellow-100)'],
            ['--bt-text-warning-muted',    'var(--bt-yellow-200)'],
            ['--bt-text-warning-emphasis', 'var(--bt-yellow-300)'],
            ['--bt-text-warning-strong',   'var(--bt-yellow-400)'],
            ['--bt-text-warning-heavy',    'var(--bt-yellow-500)'],
            ['--bt-text-warning-solid',    'var(--bt-yellow-600)'],
            ['--bt-text-warning-default',  'var(--bt-yellow-700)'],
            ['--bt-text-warning-intense',  'var(--bt-yellow-800)'],
          ]),
          'information-scale': Object.fromEntries([
            ['--bt-text-information-light',    'var(--bt-blue-50)'],
            ['--bt-text-information-subtle',   'var(--bt-blue-100)'],
            ['--bt-text-information-muted',    'var(--bt-blue-200)'],
            ['--bt-text-information-emphasis', 'var(--bt-blue-300)'],
            ['--bt-text-information-strong',   'var(--bt-blue-400)'],
            ['--bt-text-information-heavy',    'var(--bt-blue-500)'],
            ['--bt-text-information-solid',    'var(--bt-blue-600)'],
            ['--bt-text-information-default',  'var(--bt-blue-700)'],
            ['--bt-text-information-intense',  'var(--bt-blue-800)'],
          ]),
          'brand-contrast-scale': Object.fromEntries([
            ['--bt-text-brand-contrast-light',    'var(--bt-blue-50)'],
            ['--bt-text-brand-contrast-subtle',   'var(--bt-blue-100)'],
            ['--bt-text-brand-contrast-muted',    'var(--bt-blue-200)'],
            ['--bt-text-brand-contrast-emphasis', 'var(--bt-blue-300)'],
            ['--bt-text-brand-contrast-strong',   'var(--bt-blue-400)'],
            ['--bt-text-brand-contrast-heavy',    'var(--bt-blue-500)'],
            ['--bt-text-brand-contrast-solid',    'var(--bt-blue-600)'],
            ['--bt-text-brand-contrast-default',  'var(--bt-blue-700)'],
            ['--bt-text-brand-contrast-intense',  'var(--bt-blue-800)'],
          ]),
        })}

        <h2 id="Border">Border</h2>
        <div class="placeholder">
          <div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
          <div class="placeholder-title">Border Tokens</div>
          <div class="placeholder-text">Yakında eklenecek.</div>
        </div>

        <h2 id="Visual Assets">Visual Assets</h2>
        <div class="placeholder">
          <div class="placeholder-icon"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
          <div class="placeholder-title">Visual Assets</div>
          <div class="placeholder-text">Yakında eklenecek.</div>
        </div>
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

  'components/bottom-tab-bar': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Anatomy', 'States', 'FAB Action'],
    render: (tab) => {
      const title = 'Bottom Tab Bar';

      const iconHome = `<svg width="20" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H15v-5h-6v5H4a1 1 0 01-1-1V9.5z"/></svg>`;
      const iconRequests = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>`;
      const iconScan = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 7V5a1 1 0 011-1h2M17 4h2a1 1 0 011 1v2M20 17v2a1 1 0 01-1 1h-2M7 20H5a1 1 0 01-1-1v-2"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`;
      const iconReceipt = `<svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 10h8M8 14h5"/></svg>`;
      const iconUser = `<svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.866 3.582-7 8-7s8 3.134 8 7"/></svg>`;

      const tabItem = (icon, label, active) => `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:64px;height:52px;padding:6px 4px;box-sizing:border-box;color:${active ? 'var(--bt-blue-700)' : 'var(--bt-gray-400)'};">
          ${icon}
          <span style="font-size:10px;font-weight:500;line-height:12px;font-family:var(--font);text-align:center;color:inherit;">${label}</span>
        </div>`;

      const navPreview = (activeIdx) => `
        <div style="position:relative;display:inline-flex;flex-direction:column;background:white;border-top:1px solid var(--bt-border-muted);border-radius:0 0 24px 24px;width:373px;box-shadow:0 -2px 12px rgba(0,0,0,0.06);">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 12px;position:relative;">
            <div style="display:flex;gap:8px;">
              ${tabItem(iconHome,     'Ana Sayfa', activeIdx===0)}
              ${tabItem(iconRequests, 'Talepler',  activeIdx===1)}
            </div>
            <div style="position:absolute;left:50%;transform:translateX(-50%);top:-32px;display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div style="width:62px;height:62px;border-radius:9999px;background:var(--bt-blue-700);display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 4px 12px rgba(13,78,151,0.35);">
                ${iconScan}
              </div>
              <span style="font-size:10px;font-weight:500;line-height:12px;font-family:var(--font);color:var(--bt-gray-400);">Giriş Yap</span>
            </div>
            <div style="display:flex;gap:8px;">
              ${tabItem(iconReceipt, 'Aidat',  activeIdx===3)}
              ${tabItem(iconUser,    'Profil', activeIdx===4)}
            </div>
          </div>
          <div style="display:flex;justify-content:center;padding:6px 0;">
            <div style="width:140px;height:6px;background:var(--bt-gray-900);border-radius:3px;opacity:0.2;"></div>
          </div>
        </div>`;

      const previewHtml = `
        <div class="preview-box" style="padding:48px 32px 32px;display:flex;flex-direction:column;gap:48px;align-items:center;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:0;">
            <div style="font-size:12px;font-weight:500;color:var(--bt-text-muted);margin-bottom:16px;font-family:var(--font);">Ana Sayfa aktif</div>
            ${navPreview(0)}
          </div>
        </div>`;

      const anatomyHtml = `
        <h2 id="Anatomy">Anatomy</h2>
        <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;">
          <div style="position:relative;padding-top:56px;">
            ${navPreview(0)}
            <div style="position:absolute;top:0;left:0;right:0;display:flex;justify-content:space-around;font-size:11px;color:var(--bt-text-muted);font-family:var(--font);">
              <span>① FAB</span><span>② Tab öğesi</span><span>③ Home Indicator</span>
            </div>
          </div>
          <table class="token-table" style="flex:1;min-width:280px;">
            <thead><tr><th>#</th><th>Öğe</th><th>Açıklama</th></tr></thead>
            <tbody>
              <tr><td>①</td><td><span class="token-name">FAB</span></td><td>Merkezdeki birincil aksiyon butonu. Barın 32px üstünde konumlanır.</td></tr>
              <tr><td>②</td><td><span class="token-name">Tab öğesi</span></td><td>24×24 ikon + 10px label. Aktif öğe Blue/700 renk alır.</td></tr>
              <tr><td>③</td><td><span class="token-name">Home Indicator</span></td><td>iOS sistem çubuğu. 140×6px, ekran alt kenarına 6px padding.</td></tr>
            </tbody>
          </table>
        </div>`;

      const statesHtml = `
        <h2 id="States">States</h2>
        <div class="preview-box" style="padding:48px 32px 32px;display:flex;gap:48px;align-items:flex-end;flex-wrap:wrap;justify-content:center;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
            <span style="font-size:12px;color:var(--bt-text-muted);font-family:var(--font);">Active</span>
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:64px;height:52px;padding:6px 4px;box-sizing:border-box;background:white;border:1px solid var(--bt-border-muted);border-radius:8px;color:var(--bt-blue-700);">
              ${iconHome}
              <span style="font-size:10px;font-weight:500;line-height:12px;font-family:var(--font);color:var(--bt-blue-700);">Ana Sayfa</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
            <span style="font-size:12px;color:var(--bt-text-muted);font-family:var(--font);">Inactive</span>
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:64px;height:52px;padding:6px 4px;box-sizing:border-box;background:white;border:1px solid var(--bt-border-muted);border-radius:8px;color:var(--bt-gray-400);">
              ${iconUser}
              <span style="font-size:10px;font-weight:500;line-height:12px;font-family:var(--font);color:var(--bt-gray-400);">Profil</span>
            </div>
          </div>
        </div>
        <table class="token-table" style="margin-top:16px;">
          <thead><tr><th>State</th><th>Icon rengi</th><th>Label rengi</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Active</span></td><td><code style="font-size:12px;font-family:var(--mono);">--bt-blue-700</code> · #0d4e97</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-blue-700</code> · #0d4e97</td></tr>
            <tr><td><span class="token-name">Inactive</span></td><td><code style="font-size:12px;font-family:var(--mono);">--bt-gray-400</code> · #a3a3a3</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-gray-400</code> · #a3a3a3</td></tr>
          </tbody>
        </table>`;

      const fabHtml = `
        <h2 id="FAB Action">FAB Action</h2>
        <p class="page-desc">Merkezdeki FAB (Floating Action Button), barın 32px üzerinde yüzer ve birincil aksiyon olarak kullanılır.</p>
        <div class="preview-box" style="padding:56px 32px 32px;display:flex;justify-content:center;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
            <div style="width:62px;height:62px;border-radius:9999px;background:var(--bt-blue-700);display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 4px 12px rgba(13,78,151,0.35);">
              ${iconScan}
            </div>
            <span style="font-size:10px;font-weight:500;line-height:12px;font-family:var(--font);color:var(--bt-gray-400);">Giriş Yap</span>
          </div>
        </div>
        <table class="token-table" style="margin-top:16px;">
          <thead><tr><th>Özellik</th><th>Token</th><th>Değer</th></tr></thead>
          <tbody>
            <tr><td>Boyut</td><td>—</td><td>62×62px</td></tr>
            <tr><td>Border radius</td><td><code style="font-size:12px;font-family:var(--mono);">radius/full</code></td><td>9999px</td></tr>
            <tr><td>Arka plan</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-surface-brand-contrast-default</code></td><td>Blue/700 · #0d4e97</td></tr>
            <tr><td>İkon rengi</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-icon-inverted</code></td><td>#ffffff</td></tr>
            <tr><td>İkon boyutu</td><td>—</td><td>24×24px</td></tr>
            <tr><td>Dikey konum</td><td>—</td><td>Bar üstünde -32px</td></tr>
          </tbody>
        </table>`;

      const designHtml = `
        <h2 id="Token Reference">Token Reference</h2>
        <table class="token-table">
          <thead><tr><th>Özellik</th><th>Token</th><th>Değer</th></tr></thead>
          <tbody>
            <tr><td>Container arka plan</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-surface-primary-default</code></td><td>#ffffff</td></tr>
            <tr><td>Üst border</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-border-muted</code></td><td>Gray/200 · #e6e6e6</td></tr>
            <tr><td>Alt köşe yarıçapı</td><td><code style="font-size:12px;font-family:var(--mono);">radius/6xl</code></td><td>24px</td></tr>
            <tr><td>Tab öğe genişliği</td><td>—</td><td>64px</td></tr>
            <tr><td>Tab öğe yüksekliği</td><td>—</td><td>52px</td></tr>
            <tr><td>Yatay padding</td><td><code style="font-size:12px;font-family:var(--mono);">space/xs</code></td><td>4px</td></tr>
            <tr><td>Dikey padding</td><td><code style="font-size:12px;font-family:var(--mono);">space/sm</code></td><td>6px</td></tr>
            <tr><td>İkon boyutu</td><td>—</td><td>24×24px</td></tr>
            <tr><td>İkon↔Label gap</td><td><code style="font-size:12px;font-family:var(--mono);">space/2xs</code></td><td>2px</td></tr>
            <tr><td>Label font boyutu</td><td><code style="font-size:12px;font-family:var(--mono);">text-2xs</code></td><td>10px</td></tr>
            <tr><td>Label font ağırlığı</td><td><code style="font-size:12px;font-family:var(--mono);">Font/Weight/Medium</code></td><td>500</td></tr>
            <tr><td>Label satır yüksekliği</td><td><code style="font-size:12px;font-family:var(--mono);">text-lh-2xs</code></td><td>12px</td></tr>
            <tr><td>Aktif renk</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-text-brand</code></td><td>Blue/700 · #0d4e97</td></tr>
            <tr><td>Pasif renk</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-text-muted</code></td><td>Gray/400 · #a3a3a3</td></tr>
            <tr><td>Home indicator genişlik</td><td>—</td><td>140px</td></tr>
            <tr><td>Home indicator yükseklik</td><td>—</td><td>6px</td></tr>
          </tbody>
        </table>`;

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Bottom Tab Bar kullanım kuralları.</p>
        <div class="placeholder">
          <div class="placeholder-title">Usage Guidelines</div>
          <div class="placeholder-text">Yakında eklenecek.</div>
        </div>
      `};
      if (tab === 'Design') return { title, html: designHtml };

      return { title, html: `
        <p class="page-desc">Bottom Tab Bar, uygulamanın ana navigasyon öğesidir. 4 sekme ve merkezdeki FAB aksiyonundan oluşur.</p>
        ${previewHtml}
        ${anatomyHtml}
        ${statesHtml}
        ${fabHtml}
      `};
    }
  },

  'components/textbox': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Variants', 'Sizes', 'States', 'Types'],
    render: (tab) => {
      const title = 'TextBox';

      const base = 'display:flex;flex-direction:column;gap:4px;width:280px;font-family:var(--font);';
      const inputBase = 'display:flex;align-items:center;border-radius:8px;border:1px solid;padding-left:16px;height:48px;font-size:16px;font-family:var(--font);background:white;outline:none;width:100%;box-sizing:border-box;';

      const previewHtml = `
        <div class="preview-box" style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;">
          <div style="${base}">
            <div style="${inputBase}border-color:var(--bt-border-muted);cursor:pointer;">
              <div style="display:flex;flex-direction:column;justify-content:center;flex:1;">
                <span style="font-size:12px;color:var(--bt-text-emphasis);letter-spacing:0.04px;">Label</span>
                <span style="font-size:16px;color:var(--bt-text-muted);line-height:24px;">Placeholder</span>
              </div>
            </div>
            <span style="font-size:12px;color:var(--bt-text-default);">Description text</span>
          </div>
          <div style="${base}">
            <div style="${inputBase}border-color:var(--bt-blue-700);cursor:text;">
              <div style="display:flex;flex-direction:column;justify-content:center;flex:1;">
                <span style="font-size:12px;color:var(--bt-text-emphasis);letter-spacing:0.04px;">Label</span>
                <span style="font-size:16px;color:var(--bt-text-default);line-height:24px;">Active state</span>
              </div>
            </div>
            <span style="font-size:12px;color:var(--bt-text-default);">Description text</span>
          </div>
          <div style="${base}">
            <div style="${inputBase}border-color:#f7aaae;background:white;">
              <div style="display:flex;flex-direction:column;justify-content:center;flex:1;">
                <span style="font-size:12px;color:var(--bt-text-emphasis);letter-spacing:0.04px;">Label</span>
                <span style="font-size:16px;color:var(--bt-text-muted);line-height:24px;">Placeholder</span>
              </div>
              <div style="padding:12px;display:flex;align-items:center;">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#b31d38" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
            </div>
            <span style="font-size:12px;color:#b31d38;">Error message</span>
          </div>
          <div style="${base}">
            <div style="${inputBase}border-color:var(--bt-border-muted);background:var(--bt-surface-subtle);">
              <div style="display:flex;flex-direction:column;justify-content:center;flex:1;">
                <span style="font-size:12px;color:var(--bt-text-muted);letter-spacing:0.04px;">Label</span>
                <span style="font-size:16px;color:var(--bt-text-muted);line-height:24px;">Disabled</span>
              </div>
            </div>
            <span style="font-size:12px;color:var(--bt-text-default);">Description text</span>
          </div>
        </div>
      `;

      const variantsHtml = `
        <h2 id="Variants">Variants</h2>
        <p class="page-desc">TextBox üç tip ile gelir: Default, Error ve Success.</p>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Border</th><th>Açıklama</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Default</span></td><td><code style="font-family:var(--mono);font-size:12px;">--bt-border-default</code> #d4d4d4</td><td>Normal giriş durumu.</td></tr>
            <tr><td><span class="token-name">Error</span></td><td><code style="font-family:var(--mono);font-size:12px;">--bt-border-error-emphasis</code> #f7aaae</td><td>Doğrulama hatası. Sağda uyarı ikonu gösterilir.</td></tr>
            <tr><td><span class="token-name">Success</span></td><td>Green/300</td><td>Başarılı doğrulama durumu.</td></tr>
          </tbody>
        </table>
      `;

      const sizesHtml = `
        <h2 id="Sizes">Sizes</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Input Height</th><th>Toplam</th><th>Font</th><th>Preview</th></tr></thead>
          <tbody>
            ${[
              ['Sm', '40px', '64px',  '14px'],
              ['Md', '48px', '72px',  '16px'],
              ['Lg', '56px', '80px',  '18px'],
            ].map(([size, h, total, fs]) => `
              <tr>
                <td><span class="token-name">${size}</span></td>
                <td>${h}</td>
                <td>${total}</td>
                <td>${fs}</td>
                <td>
                  <div style="display:flex;flex-direction:column;gap:4px;">
                    <div style="display:flex;align-items:center;border-radius:8px;border:1px solid var(--bt-border-muted);padding-left:16px;height:${h};background:white;width:220px;box-sizing:border-box;">
                      <div style="display:flex;flex-direction:column;justify-content:center;flex:1;">
                        <span style="font-size:12px;color:var(--bt-text-emphasis);letter-spacing:0.04px;">Label</span>
                        <span style="font-size:${fs};color:var(--bt-text-muted);line-height:${parseInt(fs)+8}px;">Placeholder</span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;

      const statesHtml = `
        <h2 id="States">States</h2>
        <table class="token-table">
          <thead><tr><th>State</th><th>Border</th><th>Background</th><th>Metin</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Default</span></td><td>#d4d4d4</td><td>white</td><td>Placeholder: <code style="font-size:12px;font-family:var(--mono);">--bt-text-emphasis</code></td></tr>
            <tr><td><span class="token-name">Hover</span></td><td>#d4d4d4</td><td>white</td><td>—</td></tr>
            <tr><td><span class="token-name">Active</span></td><td><code style="font-size:12px;font-family:var(--mono);">--bt-border-brand-contrast-default</code> #0d4e97</td><td>white</td><td>Value: <code style="font-size:12px;font-family:var(--mono);">--bt-text-default</code></td></tr>
            <tr><td><span class="token-name">Filled</span></td><td>#d4d4d4</td><td>white</td><td>Value: <code style="font-size:12px;font-family:var(--mono);">--bt-text-default</code></td></tr>
            <tr><td><span class="token-name">Disabled</span></td><td>#d4d4d4</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-surface-primary-subtle</code> #f5f5f5</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-text-muted</code></td></tr>
            <tr><td><span class="token-name">Read Only</span></td><td>#d4d4d4</td><td>#f5f5f5</td><td>—</td></tr>
          </tbody>
        </table>
      `;

      const typesHtml = `
        <h2 id="Types">Types</h2>
        <p class="page-desc">Error ve Success tiplerinde Description Text rengi değişir, Error'da sağ tarafa ikon eklenir.</p>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Description rengi</th><th>İkon</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Default</span></td><td><code style="font-size:12px;font-family:var(--mono);">--bt-text-default</code> #1a1a1a</td><td>—</td></tr>
            <tr><td><span class="token-name">Error</span></td><td><code style="font-size:12px;font-family:var(--mono);">--bt-text-error-emphasis</code> #b31d38</td><td>circle-alert</td></tr>
            <tr><td><span class="token-name">Success</span></td><td>Green/700 #2d584b</td><td>circle-check</td></tr>
          </tbody>
        </table>
      `;

      const designHtml = `
        <h2 id="Tokens">Token Reference</h2>
        <table class="token-table">
          <thead><tr><th>Özellik</th><th>Token</th><th>Değer</th></tr></thead>
          <tbody>
            <tr><td>Border radius</td><td><code style="font-size:12px;font-family:var(--mono);">radius/lg</code></td><td>8px</td></tr>
            <tr><td>Left padding</td><td><code style="font-size:12px;font-family:var(--mono);">space/2xl</code></td><td>16px</td></tr>
            <tr><td>Gap (input ↔ desc)</td><td><code style="font-size:12px;font-family:var(--mono);">space/md</code></td><td>8px</td></tr>
            <tr><td>Label font</td><td>Inter Regular 12px</td><td>letter-spacing: 0.04px</td></tr>
            <tr><td>Value font</td><td>Geist Regular 16px</td><td>line-height: 24px</td></tr>
            <tr><td>Description font</td><td>Inter Regular 12px</td><td>line-height: 16px</td></tr>
            <tr><td>Border (default)</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-border-default</code></td><td>#d4d4d4</td></tr>
            <tr><td>Border (active)</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-border-brand-contrast-default</code></td><td>#0d4e97</td></tr>
            <tr><td>Border (error)</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-border-error-emphasis</code></td><td>#f7aaae</td></tr>
            <tr><td>Bg (default)</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-surface-primary-default</code></td><td>#ffffff</td></tr>
            <tr><td>Bg (disabled)</td><td><code style="font-size:12px;font-family:var(--mono);">--bt-surface-primary-subtle</code></td><td>#f5f5f5</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">TextBox kullanım kuralları.</p>
        <div class="placeholder">
          <div class="placeholder-title">Usage Guidelines</div>
          <div class="placeholder-text">Yakında eklenecek.</div>
        </div>
      `};
      if (tab === 'Design') return { title, html: designHtml };

      return { title, html: `
        <p class="page-desc">TextBox, kullanıcıdan metin girişi almak için kullanılan temel form bileşenidir. 3 boyut, 3 tip ve 6 durum ile gelir.</p>
        ${previewHtml}
        ${variantsHtml}
        ${sizesHtml}
        ${statesHtml}
        ${typesHtml}
      `};
    }
  },

  'components/button': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Variants', 'Sizes', 'States'],
    render: (tab) => {
      const title = 'Button';

      const b = 'display:inline-flex;align-items:center;justify-content:center;border:none;cursor:pointer;font-family:var(--font);font-weight:500;border-radius:6px;white-space:nowrap;transition:opacity 120ms;';

      const variants = [
        { name: 'Solid',   label: 'Primary',   desc: 'Ana aksiyon. Ekran başına bir tane kullanılır.',           style: `${b}background:var(--bt-blue-700);color:#fff;padding:12px 16px;font-size:16px;` },
        { name: 'Flat',    label: 'Secondary',  desc: 'İkincil aksiyonlar. Primary ile yan yana kullanılır.',     style: `${b}background:var(--bt-gray-100);color:var(--bt-gray-900);padding:12px 16px;font-size:16px;` },
        { name: 'Outline', label: 'Tertiary',   desc: 'Düşük öncelikli aksiyonlar. Border ile belirginleştirilir.', style: `${b}background:var(--bt-gray-100);color:var(--bt-gray-900);border:1px solid var(--bt-gray-300);padding:12px 16px;font-size:16px;` },
        { name: 'Ghost',   label: 'Ghost',      desc: 'En düşük öncelik. Toolbar ve inline aksiyonlar için.',     style: `${b}background:transparent;color:var(--bt-gray-900);padding:12px 16px;font-size:16px;` },
      ];

      const sizes = [
        { size: '2xs', py: '4px',  px: '12px', fs: '14px', lh: '16px' },
        { size: 'xs',  py: '6px',  px: '12px', fs: '14px', lh: '16px' },
        { size: 'sm',  py: '8px',  px: '12px', fs: '14px', lh: '16px' },
        { size: 'md',  py: '8px',  px: '16px', fs: '16px', lh: '24px' },
        { size: 'lg',  py: '12px', px: '16px', fs: '16px', lh: '24px' },
        { size: 'xl',  py: '16px', px: '24px', fs: '16px', lh: '24px' },
      ];

      const states = [
        { state: 'Default',  bg: 'var(--bt-blue-700)', color: '#fff',                    border: 'none',                              opacity: '1',    desc: 'Normal durum.' },
        { state: 'Hover',    bg: 'var(--bt-blue-700)', color: '#fff',                    border: 'none',                              opacity: '0.88', desc: 'Mouse üzerinde olduğunda.' },
        { state: 'Pressed',  bg: 'var(--bt-blue-700)', color: '#fff',                    border: 'none',                              opacity: '0.76', desc: 'Tıklama anında.' },
        { state: 'Disabled', bg: 'var(--bt-gray-200)', color: 'var(--bt-gray-400)',      border: 'none',                              opacity: '1',    desc: 'Etkileşim kapalı.' },
      ];

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Button bileşenini ne zaman ve nasıl kullanacağınıza dair kılavuz.</p>
        <h2 id="Do">Do</h2>
        <ul>
          <li>Ekran başına tek bir <strong>Solid</strong> button kullanın</li>
          <li>Label'ları kısa ve aksiyon odaklı tutun</li>
          <li>Sentence case kullanın (örn. "Save changes")</li>
          <li>İkincil aksiyonlar için <strong>Flat</strong> veya <strong>Outline</strong> tercih edin</li>
        </ul>
        <h2>Don't</h2>
        <ul>
          <li>Aynı ekranda birden fazla Solid button kullanmayın</li>
          <li>Label'ları kesmekten kaçının</li>
          <li>Navigasyon için button kullanmayın, link tercih edin</li>
          <li>Disabled state'i gereksiz yere kullanmayın</li>
        </ul>
      `};

      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Figma'dan alınan token ve tasarım değerleri.</p>
        <h2 id="Tokens">Tokens</h2>
        <table class="token-table">
          <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">--bt-blue-700</span></td><td>#0d4e97</td><td>Solid / Primary background</td></tr>
            <tr><td><span class="token-name">--bt-gray-100</span></td><td>#f5f5f5</td><td>Flat & Outline background</td></tr>
            <tr><td><span class="token-name">--bt-gray-200</span></td><td>#e6e6e6</td><td>Disabled background</td></tr>
            <tr><td><span class="token-name">--bt-gray-300</span></td><td>#d4d4d4</td><td>Outline border</td></tr>
            <tr><td><span class="token-name">--bt-gray-400</span></td><td>#a3a3a3</td><td>Disabled text</td></tr>
            <tr><td><span class="token-name">--bt-gray-900</span></td><td>#1a1a1a</td><td>Secondary / Tertiary / Ghost text</td></tr>
            <tr><td><span class="token-name">radius/md</span></td><td>6px</td><td>Border radius (all sizes)</td></tr>
            <tr><td><span class="token-name">Font/Family/Text</span></td><td>Geist</td><td>Font family</td></tr>
            <tr><td><span class="token-name">Font/Weight/Medium</span></td><td>500</td><td>Font weight (all sizes)</td></tr>
            <tr><td><span class="token-name">text-sm</span></td><td>14px / 16px</td><td>2xs · xs · sm sizes</td></tr>
            <tr><td><span class="token-name">text-md</span></td><td>16px / 24px</td><td>md · lg · xl sizes</td></tr>
          </tbody>
        </table>
      `};

      return { title, html: `
        <p class="page-desc">Buttons trigger an action or event, such as submitting a form, opening a dialog, or performing a delete operation.</p>

        <div class="preview-box">
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            ${variants.map(v => `<button style="${v.style}">${v.label}</button>`).join('')}
            <button style="${b}background:var(--bt-gray-200);color:var(--bt-gray-400);padding:12px 16px;font-size:16px;cursor:not-allowed">Disabled</button>
          </div>
        </div>

        <h2 id="Variants">Variants</h2>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Preview</th><th>Description</th></tr></thead>
          <tbody>
            ${variants.map(v => `
            <tr>
              <td><span class="token-name">${v.name}</span></td>
              <td><button style="${v.style}">${v.label}</button></td>
              <td style="color:var(--bt-text-emphasis)">${v.desc}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="Sizes">Sizes</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Padding (V / H)</th><th>Font</th><th>Preview</th></tr></thead>
          <tbody>
            ${sizes.map(s => `
            <tr>
              <td><span class="token-name">${s.size}</span></td>
              <td>${s.py} / ${s.px}</td>
              <td>${s.fs} / ${s.lh}</td>
              <td><button style="${b}background:var(--bt-blue-700);color:#fff;padding:${s.py} ${s.px};font-size:${s.fs};line-height:${s.lh}">Button</button></td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="States">States</h2>
        <table class="token-table">
          <thead><tr><th>State</th><th>Preview</th><th>Description</th></tr></thead>
          <tbody>
            ${states.map(s => `
            <tr>
              <td><span class="token-name">${s.state}</span></td>
              <td><button style="${b}background:${s.bg};color:${s.color};border:${s.border};opacity:${s.opacity};padding:8px 16px;font-size:14px;${s.state==='Disabled'?'cursor:not-allowed;':''}">${s.state}</button></td>
              <td style="color:var(--bt-text-emphasis)">${s.desc}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      `};
    }
  },

  'components/button-dock': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Variants', 'Anatomy', 'Buttons'],
    render: (tab) => {
      const title = 'Button Dock';

      const dockWrap  = `background:var(--bt-surface-default);border-top:1px solid var(--bt-border-muted);border-radius:0 0 var(--bt-radius-6xl) var(--bt-radius-6xl);display:flex;flex-direction:column;width:373px;`;
      const ctrlBase  = `padding:var(--bt-space-2xl) var(--bt-space-3xl) var(--bt-space-3xl);display:flex;`;
      const homeWrap  = `display:flex;justify-content:center;align-items:flex-end;padding:var(--bt-space-sm) 0;`;
      const homeBar   = `width:140px;height:6px;background:var(--bt-gray-900);border-radius:var(--bt-radius-full);`;
      const btnBase   = `display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;font-family:var(--font);font-weight:500;border-radius:var(--bt-radius-md);white-space:nowrap;font-size:var(--bt-text-md-size);line-height:var(--bt-text-md-lh);transition:opacity 120ms;`;
      const btnPrimXL = `${btnBase}background:var(--bt-surface-brand);color:var(--bt-text-inverted);padding:var(--bt-space-2xl) var(--bt-space-4xl);width:100%;`;
      const btnPrimLG = `${btnBase}background:var(--bt-surface-brand);color:var(--bt-text-inverted);padding:var(--bt-space-xl) var(--bt-space-2xl);flex:1;`;
      const btnSecXL  = `${btnBase}background:var(--bt-surface-subtle);color:var(--bt-text-default);padding:var(--bt-space-2xl) var(--bt-space-4xl);width:100%;`;
      const btnSecLG  = `${btnBase}background:var(--bt-surface-subtle);color:var(--bt-text-default);padding:var(--bt-space-xl) var(--bt-space-2xl);flex:1;`;

      const homeIndicator = `<div style="${homeWrap}"><div style="${homeBar}"></div></div>`;

      const variant1 = `
        <div style="${dockWrap}">
          <div style="${ctrlBase}flex-direction:column;">
            <button style="${btnPrimXL}">Button</button>
          </div>
          ${homeIndicator}
        </div>`;

      const variant2 = `
        <div style="${dockWrap}">
          <div style="${ctrlBase}flex-direction:row;gap:var(--bt-space-2xl);">
            <button style="${btnSecLG}">Button</button>
            <button style="${btnPrimLG}">Button</button>
          </div>
          ${homeIndicator}
        </div>`;

      const variant3 = `
        <div style="${dockWrap}">
          <div style="${ctrlBase}flex-direction:column;gap:var(--bt-space-2xl);">
            <button style="${btnPrimXL}">Button</button>
            <button style="${btnSecXL}">Button</button>
          </div>
          ${homeIndicator}
        </div>`;

      const variants = [
        { id: 'v1-single',     label: 'Vertical · 1 Segment',   desc: 'Single full-width primary action. Most common layout.', node: variant1 },
        { id: 'v2-horizontal', label: 'Horizontal · 2 Segment', desc: 'Secondary and primary buttons side by side — secondary left, primary right.', node: variant2 },
        { id: 'v3-vertical',   label: 'Vertical · 2 Segment',   desc: 'Two stacked full-width buttons — primary on top, secondary below.', node: variant3 },
      ];

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Button Dock usage guidelines — when to use each variant and how to compose actions correctly.</p>
        <h2 id="Do">Do</h2>
        <ul>
          <li>Use one Button Dock per screen</li>
          <li>Always place the primary action in the dominant position — right in Horizontal, top in Vertical</li>
          <li>Keep the Home Indicator visible at all times; never overlap it with content</li>
          <li>Keep button labels short and action-oriented</li>
        </ul>
        <h2>Don't</h2>
        <ul>
          <li>Don't add a second Button Dock to the same screen</li>
          <li>Don't place more than two buttons — move extra actions into a menu or bottom sheet</li>
          <li>Don't embed the dock inside scrollable content; it must remain fixed at the bottom</li>
          <li>Don't remove or hide the Home Indicator</li>
        </ul>
      `};

      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Token values extracted from Figma — use these to implement Button Dock in code.</p>
        <h2 id="Tokens">Tokens</h2>
        <table class="token-table">
          <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">--bt-surface-default</span></td><td>#ffffff</td><td>Dock background</td></tr>
            <tr><td><span class="token-name">--bt-border-muted</span></td><td>#e6e6e6</td><td>Top border</td></tr>
            <tr><td><span class="token-name">--bt-radius-6xl</span></td><td>24px</td><td>Bottom corner radius</td></tr>
            <tr><td><span class="token-name">--bt-surface-brand</span></td><td>#0d4e97</td><td>Primary button background</td></tr>
            <tr><td><span class="token-name">--bt-surface-subtle</span></td><td>#f5f5f5</td><td>Secondary button background</td></tr>
            <tr><td><span class="token-name">--bt-text-inverted</span></td><td>#ffffff</td><td>Primary button label</td></tr>
            <tr><td><span class="token-name">--bt-text-default</span></td><td>#1a1a1a</td><td>Secondary button label</td></tr>
            <tr><td><span class="token-name">--bt-gray-900</span></td><td>#1a1a1a</td><td>Home Indicator bar</td></tr>
            <tr><td><span class="token-name">--bt-radius-md</span></td><td>6px</td><td>Button border radius</td></tr>
            <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>Home Indicator vertical padding</td></tr>
            <tr><td><span class="token-name">--bt-space-2xl</span></td><td>16px</td><td>Control top padding · button gap</td></tr>
            <tr><td><span class="token-name">--bt-space-3xl</span></td><td>20px</td><td>Control bottom + horizontal padding</td></tr>
            <tr><td><span class="token-name">--bt-space-xl</span></td><td>12px</td><td>LG button vertical padding</td></tr>
            <tr><td><span class="token-name">--bt-space-4xl</span></td><td>24px</td><td>XL button horizontal padding</td></tr>
            <tr><td><span class="token-name">--bt-text-md-size</span></td><td>16px</td><td>Button font size</td></tr>
            <tr><td><span class="token-name">--bt-text-md-lh</span></td><td>24px</td><td>Button line height</td></tr>
          </tbody>
        </table>
      `};

      return { title, html: `
        <p class="page-desc">A fixed bottom container that groups primary and secondary actions on iOS screens. Always includes a Home Indicator. Three layout variants cover all common action patterns.</p>

        <div class="preview-box" style="gap:32px;flex-wrap:wrap;align-items:flex-end;">
          ${variant1}
          ${variant2}
          ${variant3}
        </div>

        <h2 id="Variants">Variants</h2>
        <table class="token-table">
          <thead><tr><th>Variant</th><th>Preview</th><th>When to use</th></tr></thead>
          <tbody>
            ${variants.map(v => `
            <tr>
              <td><span class="token-name">${v.label}</span></td>
              <td><div style="display:flex;align-items:flex-end;">${v.node}</div></td>
              <td style="color:var(--bt-text-emphasis)">${v.desc}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Dock Container</span></td><td style="color:var(--bt-text-emphasis)">White background, top border, bottom corners rounded at 24px.</td></tr>
            <tr><td><span class="token-name">Control</span></td><td style="color:var(--bt-text-emphasis)">Inner area holding the buttons. Padding: top 16px, bottom 20px, sides 20px.</td></tr>
            <tr><td><span class="token-name">Home Indicator</span></td><td style="color:var(--bt-text-emphasis)">140 × 6px black pill centered at the bottom. Vertical padding 6px. Required in all variants.</td></tr>
          </tbody>
        </table>

        <h2 id="Buttons">Buttons</h2>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Preview</th><th>Padding (V / H)</th><th>Usage</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Primary · XL</span></td>
              <td><button style="${btnPrimXL}width:auto;">Button</button></td>
              <td>16px / 24px</td>
              <td style="color:var(--bt-text-emphasis)">Full-width in Vertical variants</td>
            </tr>
            <tr>
              <td><span class="token-name">Primary · LG</span></td>
              <td><button style="${btnPrimLG}flex:none;">Button</button></td>
              <td>12px / 16px</td>
              <td style="color:var(--bt-text-emphasis)">flex-1 on the right in Horizontal variant</td>
            </tr>
            <tr>
              <td><span class="token-name">Secondary · XL</span></td>
              <td><button style="${btnSecXL}width:auto;">Button</button></td>
              <td>16px / 24px</td>
              <td style="color:var(--bt-text-emphasis)">Bottom button in Vertical · 2 variant</td>
            </tr>
            <tr>
              <td><span class="token-name">Secondary · LG</span></td>
              <td><button style="${btnSecLG}flex:none;">Button</button></td>
              <td>12px / 16px</td>
              <td style="color:var(--bt-text-emphasis)">flex-1 on the left in Horizontal variant</td>
            </tr>
          </tbody>
        </table>
      `};
    }
  },

  'components/icon-button': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Fill Modes', 'Sizes', 'States', 'Anatomy'],
    render: (tab) => {
      const title = 'Button Icon';

      const ico = (color = 'currentColor') => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;

      const base = `display:inline-flex;align-items:center;justify-content:center;border:none;cursor:pointer;border-radius:var(--bt-radius-md);transition:opacity 120ms;flex-shrink:0;`;

      const fillModes = [
        { name: 'Solid',   desc: 'High-emphasis action. Use for the primary icon action on a surface.',                   style: `${base}background:var(--bt-surface-brand);`,         iconColor: '#ffffff' },
        { name: 'Outline', desc: 'Medium-emphasis. Border adds visible affordance without a filled background.',           style: `${base}background:transparent;border:1px solid var(--bt-border-default);`, iconColor: 'var(--bt-icon-default)' },
        { name: 'Flat',    desc: 'Medium-emphasis. Subtle background provides grouping without strong contrast.',          style: `${base}background:var(--bt-surface-subtle);`,        iconColor: 'var(--bt-icon-default)' },
        { name: 'Ghost',   desc: 'Low-emphasis. No background or border. Use in toolbars and dense layouts.',             style: `${base}background:transparent;`,                    iconColor: 'var(--bt-icon-default)' },
      ];

      const sizes = [
        { name: 'xl', px: '56px', padding: '16px', token: '--bt-space-2xl' },
        { name: 'lg', px: '48px', padding: '12px', token: '--bt-space-xl'  },
        { name: 'md', px: '40px', padding: '8px',  token: '--bt-space-md'  },
        { name: 'sm', px: '32px', padding: '4px',  token: '--bt-space-xs'  },
        { name: 'xs', px: '28px', padding: '2px',  token: '--bt-base-sizing-2xs' },
      ];

      const sizePad = { xl: 'var(--bt-space-2xl)', lg: 'var(--bt-space-xl)', md: 'var(--bt-space-md)', sm: 'var(--bt-space-xs)', xs: 'var(--bt-base-sizing-2xs)' };

      const btn = (fillStyle, iconColor, pad = 'var(--bt-space-2xl)') =>
        `<div style="${fillStyle}padding:${pad};">${ico(iconColor)}</div>`;

      const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

      // ── Overview ──────────────────────────────────────────────────────────────
      const overviewHtml = `
        <p class="page-desc">A square button that contains a single icon with no label. Four fill modes and five sizes cover all common use cases across toolbars, cards, and action areas.</p>

        <div class="preview-box" style="gap:12px;flex-wrap:wrap;">
          ${fillModes.map(f => btn(f.style, f.iconColor)).join('')}
        </div>

        <h2 id="Fill Modes">Fill Modes</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Four fill modes, each signalling a different level of emphasis.</p>
        <table class="token-table">
          <thead><tr><th>Mode</th><th>Preview</th><th>When to use</th></tr></thead>
          <tbody>
            ${fillModes.map(f => `
            <tr>
              <td><span class="token-name">${f.name}</span></td>
              <td>${btn(f.style, f.iconColor)}</td>
              <td style="color:var(--bt-text-emphasis)">${f.desc}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="Sizes">Sizes</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">All sizes share a 24 × 24 px icon container; only the outer padding changes.</p>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Total</th><th>Padding</th><th>Padding token</th><th>Preview</th></tr></thead>
          <tbody>
            ${sizes.map(s => `
            <tr>
              <td><span class="token-name">${s.name}</span></td>
              <td>${s.px}</td>
              <td>${s.padding}</td>
              <td>${tk(s.token)}</td>
              <td>${btn(`${base}background:var(--bt-surface-brand);`, '#ffffff', sizePad[s.name])}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="States">States</h2>
        <table class="token-table">
          <thead><tr><th>State</th><th>Solid</th><th>Outline</th><th>Flat</th><th>Ghost</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Default</span></td>
              <td>${btn(`${base}background:var(--bt-surface-brand);`, '#ffffff')}</td>
              <td>${btn(`${base}background:transparent;border:1px solid var(--bt-border-default);`, 'var(--bt-icon-default)')}</td>
              <td>${btn(`${base}background:var(--bt-surface-subtle);`, 'var(--bt-icon-default)')}</td>
              <td>${btn(`${base}background:transparent;`, 'var(--bt-icon-default)')}</td>
              <td style="color:var(--bt-text-emphasis)">Normal interactive state.</td>
            </tr>
            <tr>
              <td><span class="token-name">Hover</span></td>
              <td>${btn(`${base}background:var(--bt-surface-brand);opacity:0.88;`, '#ffffff')}</td>
              <td>${btn(`${base}background:var(--bt-surface-subtle);border:1px solid var(--bt-border-default);`, 'var(--bt-icon-default)')}</td>
              <td>${btn(`${base}background:var(--bt-surface-muted);`, 'var(--bt-icon-default)')}</td>
              <td>${btn(`${base}background:var(--bt-surface-subtle);`, 'var(--bt-icon-default)')}</td>
              <td style="color:var(--bt-text-emphasis)">Cursor over the button.</td>
            </tr>
            <tr>
              <td><span class="token-name">Pressed</span></td>
              <td>${btn(`${base}background:var(--bt-surface-brand);opacity:0.76;`, '#ffffff')}</td>
              <td>${btn(`${base}background:var(--bt-surface-muted);border:1px solid var(--bt-border-default);`, 'var(--bt-icon-default)')}</td>
              <td>${btn(`${base}background:var(--bt-surface-emphasis);`, 'var(--bt-icon-default)')}</td>
              <td>${btn(`${base}background:var(--bt-surface-muted);`, 'var(--bt-icon-default)')}</td>
              <td style="color:var(--bt-text-emphasis)">Active / tap state.</td>
            </tr>
            <tr>
              <td><span class="token-name">Disabled</span></td>
              <td>${btn(`${base}background:var(--bt-surface-muted);cursor:not-allowed;`, 'var(--bt-icon-muted)')}</td>
              <td>${btn(`${base}background:transparent;border:1px solid var(--bt-border-muted);cursor:not-allowed;`, 'var(--bt-icon-muted)')}</td>
              <td>${btn(`${base}background:var(--bt-surface-subtle);cursor:not-allowed;`, 'var(--bt-icon-muted)')}</td>
              <td>${btn(`${base}background:transparent;cursor:not-allowed;`, 'var(--bt-icon-muted)')}</td>
              <td style="color:var(--bt-text-emphasis)">Non-interactive. Use only when an action is temporarily unavailable.</td>
            </tr>
          </tbody>
        </table>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td rowspan="7">Container</td><td>Border Radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
            <tr><td>Size — xl</td><td>—</td><td>56 × 56px</td></tr>
            <tr><td>Size — lg</td><td>—</td><td>48 × 48px</td></tr>
            <tr><td>Size — md</td><td>—</td><td>40 × 40px</td></tr>
            <tr><td>Size — sm</td><td>—</td><td>32 × 32px</td></tr>
            <tr><td>Size — xs</td><td>—</td><td>28 × 28px</td></tr>
            <tr><td>Transition</td><td>—</td><td>opacity 120ms</td></tr>
            <tr><td rowspan="5">Padding (uniform)</td><td>xl</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>lg</td><td>${tk('Space/xl')}</td><td>12px</td></tr>
            <tr><td>md</td><td>${tk('Space/md')}</td><td>8px</td></tr>
            <tr><td>sm</td><td>${tk('Space/xs')}</td><td>4px</td></tr>
            <tr><td>xs</td><td>${tk('Base-sizing/2xs')}</td><td>2px</td></tr>
            <tr><td rowspan="2">Background — Solid</td><td>Default / Hover / Pressed</td><td>${tk('Blue/700')}</td><td>#0d4e97</td></tr>
            <tr><td>Disabled</td><td>${tk('Gray/200')}</td><td>#e6e6e6</td></tr>
            <tr><td>Background — Flat</td><td>Default</td><td>${tk('Gray/100')}</td><td>#f5f5f5</td></tr>
            <tr><td>Background — Outline</td><td>Default</td><td>—</td><td>transparent</td></tr>
            <tr><td>Background — Ghost</td><td>Default</td><td>—</td><td>transparent</td></tr>
            <tr><td>Border — Outline</td><td>Width · Color</td><td>${tk('Gray/300')}</td><td>1px solid #d4d4d4</td></tr>
            <tr><td>Opacity — Solid Hover</td><td>Opacity</td><td>—</td><td>0.88</td></tr>
            <tr><td>Opacity — Solid Pressed</td><td>Opacity</td><td>—</td><td>0.76</td></tr>
            <tr><td rowspan="2">Icon container</td><td>Size</td><td>—</td><td>24 × 24px</td></tr>
            <tr><td>Overflow</td><td>—</td><td>clip</td></tr>
            <tr><td>Icon (SVG)</td><td>Size</td><td>—</td><td>18 × 18px</td></tr>
            <tr><td rowspan="2">Icon color — Solid</td><td>Default / Hover / Pressed</td><td>${tk('Gray/0')}</td><td>#ffffff</td></tr>
            <tr><td>Disabled</td><td>${tk('Gray/400')}</td><td>#a3a3a3</td></tr>
            <tr><td rowspan="2">Icon color — Outline / Flat / Ghost</td><td>Default / Hover / Pressed</td><td>${tk('Gray/900')}</td><td>#1a1a1a</td></tr>
            <tr><td>Disabled</td><td>${tk('Gray/400')}</td><td>#a3a3a3</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Icon Button usage guidelines — when to choose each fill mode and how to size correctly.</p>
        <h2 id="Do">Do</h2>
        <ul>
          <li>Use a recognisable icon that clearly communicates the action without a label</li>
          <li>Add a tooltip on hover so the action is accessible to users unfamiliar with the icon</li>
          <li>Choose the fill mode that matches the emphasis hierarchy — Solid for primary, Ghost for low-priority toolbar actions</li>
          <li>Maintain consistent size within a single toolbar or action group</li>
        </ul>
        <h2>Don't</h2>
        <ul>
          <li>Don't use Icon Button as a navigation element — use Tab Bar or Navigation items instead</li>
          <li>Don't mix multiple Solid icon buttons in the same row; only one action should be primary</li>
          <li>Don't use ambiguous icons without a tooltip fallback</li>
          <li>Don't manually set width/height — let padding and the 24px icon define the button size</li>
        </ul>
      `};

      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Token values extracted from Figma for all fill modes, sizes, and states.</p>
        <h2 id="Fill Mode Tokens">Fill Mode Tokens</h2>
        <table class="token-table">
          <thead><tr><th>Mode</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td rowspan="2"><span class="token-name">Solid</span></td><td>Background</td><td>${tk('--bt-surface-brand')}</td><td>#0d4e97</td></tr>
            <tr><td>Icon color</td><td>${tk('--bt-icon-inverted')}</td><td>#ffffff</td></tr>
            <tr><td rowspan="2"><span class="token-name">Outline</span></td><td>Border</td><td>${tk('--bt-border-default')}</td><td>#d4d4d4</td></tr>
            <tr><td>Icon color</td><td>${tk('--bt-icon-default')}</td><td>#1a1a1a</td></tr>
            <tr><td rowspan="2"><span class="token-name">Flat</span></td><td>Background</td><td>${tk('--bt-surface-subtle')}</td><td>#f5f5f5</td></tr>
            <tr><td>Icon color</td><td>${tk('--bt-icon-default')}</td><td>#1a1a1a</td></tr>
            <tr><td rowspan="1"><span class="token-name">Ghost</span></td><td>Icon color</td><td>${tk('--bt-icon-default')}</td><td>#1a1a1a</td></tr>
          </tbody>
        </table>

        <h2 id="Size Tokens">Size Tokens</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Total</th><th>Padding token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">xl</span></td><td>56 × 56px</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
            <tr><td><span class="token-name">lg</span></td><td>48 × 48px</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
            <tr><td><span class="token-name">md</span></td><td>40 × 40px</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
            <tr><td><span class="token-name">sm</span></td><td>32 × 32px</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
            <tr><td><span class="token-name">xs</span></td><td>28 × 28px</td><td>${tk('--bt-base-sizing-2xs')}</td><td>2px</td></tr>
          </tbody>
        </table>

        <h2 id="State Tokens">State Tokens</h2>
        <table class="token-table">
          <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td rowspan="2"><span class="token-name">Disabled</span></td><td>Background (Solid)</td><td>${tk('--bt-surface-muted')}</td><td>#e6e6e6</td></tr>
            <tr><td>Icon color</td><td>${tk('--bt-icon-muted')}</td><td>#a3a3a3</td></tr>
            <tr><td><span class="token-name">Hover (Solid)</span></td><td>Opacity</td><td>—</td><td>0.88</td></tr>
            <tr><td><span class="token-name">Pressed (Solid)</span></td><td>Opacity</td><td>—</td><td>0.76</td></tr>
            <tr><td><span class="token-name">Shared</span></td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
            <tr><td><span class="token-name">Shared</span></td><td>Icon container</td><td>—</td><td>24 × 24px</td></tr>
          </tbody>
        </table>
      `};

      return { title, html: overviewHtml };
    }
  },

  'components/card': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Types', 'States', 'Card With Header', 'Anatomy'],
    render: (tab) => {
      const title = 'Card';

      const tk  = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const lbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;

      // ── Shared styles ────────────────────────────────────────────────────────
      const cardWrap = (borderColor = 'var(--bt-border-default)') =>
        `background:var(--bt-surface-default);border:1px solid ${borderColor};border-radius:var(--bt-radius-2xl);display:flex;flex-direction:column;width:280px;box-sizing:border-box;font-family:var(--font);`;

      const innerPad = `padding:var(--bt-space-lg);display:flex;align-items:flex-start;justify-content:space-between;width:100%;box-sizing:border-box;`;

      const titleStyle  = `font-size:var(--bt-text-xs-size);font-weight:500;line-height:var(--bt-text-xs-lh);color:var(--bt-text-default);`;
      const subtitleStyle = (color = 'var(--bt-text-default)') =>
        `font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:${color};`;
      const descStyle   = `font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:var(--bt-text-default);`;

      const iconPlaceholder = (muted = false) =>
        `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${muted ? 'var(--bt-icon-muted)' : 'var(--bt-icon-default)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;

      const iconContainer = (muted = false) =>
        `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconPlaceholder(muted)}</div>`;

      const badge = (muted = false) =>
        `<div style="display:inline-flex;align-items:center;gap:2px;padding:2px 8px;background:${muted ? 'transparent' : 'var(--bt-surface-subtle)'};border:1px solid ${muted ? 'var(--bt-border-muted)' : 'var(--bt-border-default)'};border-radius:var(--bt-radius-full);font-size:var(--bt-text-xs-size);font-weight:400;line-height:var(--bt-text-xs-lh);color:${muted ? 'var(--bt-text-muted)' : 'var(--bt-text-default)'};white-space:nowrap;">Label Here</div>`;

      // ── Card builders ────────────────────────────────────────────────────────
      // Verified via Figma Desktop Bridge (figma_execute):
      // Active border  → VariableID:75:398 = Blue/700 = --bt-border-brand (#0d4e97)
      // Default border → VariableID:75:615 = Gray/300 = --bt-border-default (#d4d4d4)
      // Icon fill      → VariableID:75:621 = Gray/900 = --bt-icon-default in ALL states (never muted)
      // Title color    → VariableID:75:621 = Gray/900 = --bt-text-default in ALL states
      // Subtitle/Badge/Desc disabled → VariableID:75:616 = Gray/400 = --bt-text-muted
      const cardSubtitle = (state = 'default') => {
        const border   = state === 'active' ? 'var(--bt-border-brand)' : 'var(--bt-border-default)';
        const subColor = state === 'disabled' ? 'var(--bt-text-muted)' : 'var(--bt-text-default)';
        return `<div style="${cardWrap(border)}">
          <div style="${innerPad}min-height:68px;">
            <div style="display:flex;flex-direction:column;gap:var(--bt-space-xs);">
              <span style="${titleStyle}">Title Here</span>
              <span style="${subtitleStyle(subColor)}">Subtitle Here</span>
            </div>
            ${iconContainer()}
          </div>
        </div>`;
      };

      const cardBadge = (state = 'default') => {
        const border   = state === 'active' ? 'var(--bt-border-brand)' : 'var(--bt-border-default)';
        const bdgMuted = state === 'disabled';
        return `<div style="${cardWrap(border)}">
          <div style="${innerPad}min-height:68px;">
            <div style="display:flex;flex-direction:column;gap:var(--bt-space-xs);">
              <span style="${titleStyle}">Title Here</span>
              ${badge(bdgMuted)}
            </div>
            ${iconContainer()}
          </div>
        </div>`;
      };

      const cardDescription = (state = 'default') => {
        const border   = state === 'active' ? 'var(--bt-border-brand)' : 'var(--bt-border-default)';
        const txtColor = state === 'disabled' ? 'var(--bt-text-muted)' : 'var(--bt-text-default)';
        return `<div style="${cardWrap(border)}">
          <div style="${innerPad}">
            <div style="display:flex;flex-direction:column;gap:var(--bt-space-xs);">
              <span style="${titleStyle}">Title Here</span>
              <span style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:${txtColor};">Description</span>
              <span style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:${txtColor};">Description</span>
              <span style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:${txtColor};">Description</span>
            </div>
            ${iconContainer()}
          </div>
        </div>`;
      };

      // ── Card With Header builder ──────────────────────────────────────────────
      const iconEllipsis = (muted = false) =>
        `<svg width="16" height="4" viewBox="0 0 20 4" fill="${muted ? 'var(--bt-icon-muted)' : 'var(--bt-icon-default)'}" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2"/><circle cx="10" cy="2" r="2"/><circle cx="18" cy="2" r="2"/></svg>`;

      const labelRow = (muted = false, lastIsBadge = false) =>
        `<div style="display:flex;align-items:center;justify-content:space-between;padding:var(--bt-space-2xs) 0;">
          <span style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:${muted ? 'var(--bt-text-muted)' : 'var(--bt-text-default)'};">Label</span>
          ${lastIsBadge
            ? badge(muted)
            : `<span style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:${muted ? 'var(--bt-text-muted)' : 'var(--bt-text-default)'};">Value</span>`}
        </div>`;

      const cardWithHeader = (state = 'default') => {
        const border  = state === 'active' ? 'var(--bt-border-brand)' : 'var(--bt-border-default)';
        const muted   = state === 'disabled';
        const ttlColor = muted ? 'var(--bt-text-muted)' : 'var(--bt-text-default)';
        return `<div style="display:flex;flex-direction:column;width:360px;font-family:var(--font);">
          <div style="background:var(--bt-surface-light);border:1px solid ${border};border-radius:var(--bt-radius-lg) var(--bt-radius-lg) 0 0;display:flex;align-items:center;justify-content:space-between;padding:var(--bt-space-sm) var(--bt-space-lg);box-sizing:border-box;">
            <span style="font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:${ttlColor};">Title Here</span>
            <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;">${iconEllipsis(muted)}</div>
          </div>
          <div style="background:var(--bt-surface-default);border:1px solid ${border};border-top:none;border-radius:0 0 var(--bt-radius-lg) var(--bt-radius-lg);padding:var(--bt-space-lg);display:flex;flex-direction:column;gap:var(--bt-space-xs);box-sizing:border-box;">
            ${labelRow(muted)}
            ${labelRow(muted)}
            ${labelRow(muted)}
            ${labelRow(muted)}
            ${labelRow(muted, true)}
          </div>
        </div>`;
      };

      // ── State chip ────────────────────────────────────────────────────────────
      const stateChip = s => {
        const cfg = {
          default:  { bg:'var(--bt-surface-subtle)',        color:'var(--bt-text-default)', label:'Default'  },
          active:   { bg:'var(--bt-surface-brand-subtle)',  color:'var(--bt-text-brand)',   label:'Active'   },
          disabled: { bg:'var(--bt-surface-muted)',          color:'var(--bt-text-muted)',   label:'Disabled' },
        }[s];
        return `<span style="display:inline-block;padding:2px 10px;border-radius:var(--bt-radius-full);background:${cfg.bg};color:${cfg.color};font-size:11px;font-weight:600;letter-spacing:0.04em;line-height:18px;">${cfg.label}</span>`;
      };

      // ── State group block ─────────────────────────────────────────────────────
      const stateGroup = (label, cards) =>
        `<div style="border:1px solid var(--bt-border-muted);border-radius:10px;overflow:hidden;margin-bottom:16px;">
          <div style="padding:10px 16px;border-bottom:1px solid var(--bt-border-muted);background:var(--bt-surface-default);">
            <span style="font-size:12px;font-weight:600;color:var(--bt-text-default);">${label}</span>
          </div>
          <div style="background:var(--bt-surface-subtle);padding:20px;display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
            ${['default','active','disabled'].map(s =>
              `<div style="display:flex;flex-direction:column;gap:8px;">${stateChip(s)}${cards[s]}</div>`
            ).join('')}
          </div>
        </div>`;

      // ── Overview HTML ─────────────────────────────────────────────────────────
      const overviewHtml = `
        <p class="page-desc">Two card variants — Card and Card With Header — display structured content in a bordered, rounded container. Three content types and three interactive states cover all common data display patterns.</p>

        <h2 id="Types">Types</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:20px;">Three content types — choose based on what secondary information needs to be shown alongside the title.</p>

        <div style="display:flex;gap:20px;overflow-x:auto;padding-bottom:4px;margin-bottom:40px;">
          <div style="flex-shrink:0;display:flex;flex-direction:column;gap:0;">
            <div style="background:var(--bt-surface-subtle);border-radius:10px 10px 0 0;padding:20px;display:flex;justify-content:center;border:1px solid var(--bt-border-muted);border-bottom:none;">
              ${cardSubtitle()}
            </div>
            <div style="padding:14px 16px;border:1px solid var(--bt-border-muted);border-radius:0 0 10px 10px;">
              <div style="font-size:13px;font-weight:600;color:var(--bt-text-default);margin-bottom:4px;">Subtitle</div>
              <div style="font-size:12.5px;line-height:1.6;color:var(--bt-text-emphasis);max-width:280px;">When a single numeric or short value summarises the card content.</div>
            </div>
          </div>
          <div style="flex-shrink:0;display:flex;flex-direction:column;gap:0;">
            <div style="background:var(--bt-surface-subtle);border-radius:10px 10px 0 0;padding:20px;display:flex;justify-content:center;border:1px solid var(--bt-border-muted);border-bottom:none;">
              ${cardBadge()}
            </div>
            <div style="padding:14px 16px;border:1px solid var(--bt-border-muted);border-radius:0 0 10px 10px;">
              <div style="font-size:13px;font-weight:600;color:var(--bt-text-default);margin-bottom:4px;">Badge</div>
              <div style="font-size:12.5px;line-height:1.6;color:var(--bt-text-emphasis);max-width:280px;">When a status label or category tag needs to accompany the title.</div>
            </div>
          </div>
          <div style="flex-shrink:0;display:flex;flex-direction:column;gap:0;">
            <div style="background:var(--bt-surface-subtle);border-radius:10px 10px 0 0;padding:20px;display:flex;justify-content:center;border:1px solid var(--bt-border-muted);border-bottom:none;">
              ${cardDescription()}
            </div>
            <div style="padding:14px 16px;border:1px solid var(--bt-border-muted);border-radius:0 0 10px 10px;">
              <div style="font-size:13px;font-weight:600;color:var(--bt-text-default);margin-bottom:4px;">Description</div>
              <div style="font-size:12.5px;line-height:1.6;color:var(--bt-text-emphasis);max-width:280px;">When multiple lines of supporting text are needed below the title.</div>
            </div>
          </div>
        </div>

        <h2 id="States">States</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:20px;">All three types share the same three states — only the border color and content color change.</p>

        ${stateGroup('Subtitle',     { default: cardSubtitle('default'),     active: cardSubtitle('active'),     disabled: cardSubtitle('disabled')     })}
        ${stateGroup('Badge',        { default: cardBadge('default'),        active: cardBadge('active'),        disabled: cardBadge('disabled')        })}
        ${stateGroup('Description',  { default: cardDescription('default'),  active: cardDescription('active'),  disabled: cardDescription('disabled')  })}

        <table class="token-table" style="margin-bottom:40px;">
          <thead><tr><th>State</th><th>Border</th><th>Content change</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Default</span></td><td>${tk('Gray/300')} · #d4d4d4</td><td>—</td></tr>
            <tr><td><span class="token-name">Active</span></td><td>${tk('Blue/700')} · #0d4e97</td><td>—</td></tr>
            <tr><td><span class="token-name">Disabled</span></td><td>${tk('Gray/300')} · #d4d4d4</td><td>Subtitle / badge / description → ${tk('Gray/400')} · #a3a3a3 · Icon değişmez</td></tr>
          </tbody>
        </table>

        <h2 id="Card With Header">Card With Header</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:20px;">An extended card variant with a distinct header row and a body of label–value pairs. Shares the same three states.</p>

        <div style="border:1px solid var(--bt-border-muted);border-radius:10px;overflow:hidden;margin-bottom:40px;">
          <div style="background:var(--bt-surface-subtle);padding:20px;display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start;">
            ${['default','active','disabled'].map(s =>
              `<div style="display:flex;flex-direction:column;gap:8px;">${stateChip(s)}${cardWithHeader(s)}</div>`
            ).join('')}
          </div>
        </div>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td rowspan="3">Card container</td><td>Background</td><td>${tk('Gray/0')}</td><td>#ffffff</td></tr>
            <tr><td>Border — Default / Disabled</td><td>${tk('Gray/300')}</td><td>1px solid #d4d4d4</td></tr>
            <tr><td>Border — Active</td><td>${tk('Blue/700')}</td><td>1px solid #0d4e97</td></tr>
            <tr><td>Card container (Card)</td><td>Border Radius</td><td>${tk('Radius/2xl')}</td><td>12px</td></tr>
            <tr><td>Card container (Card With Header)</td><td>Border Radius</td><td>${tk('Radius/lg')}</td><td>8px</td></tr>
            <tr><td rowspan="2">Inner padding</td><td>All sides</td><td>${tk('Space/lg')}</td><td>10px</td></tr>
            <tr><td>Row gap (title ↔ subtitle/badge/desc)</td><td>${tk('Space/xs')}</td><td>4px</td></tr>
            <tr><td rowspan="2">Title</td><td>Font size / weight / line-height</td><td>${tk('Title/xs/Medium')}</td><td>12px / 500 / 16px</td></tr>
            <tr><td>Color</td><td>${tk('Gray/900')}</td><td>#1a1a1a</td></tr>
            <tr><td rowspan="2">Subtitle — Default / Active</td><td>Font size / weight / line-height</td><td>${tk('Text/md/Medium')}</td><td>16px / 500 / 24px</td></tr>
            <tr><td>Color</td><td>${tk('Gray/900')}</td><td>#1a1a1a</td></tr>
            <tr><td>Subtitle — Disabled</td><td>Color</td><td>${tk('Gray/400')}</td><td>#a3a3a3</td></tr>
            <tr><td rowspan="2">Description lines</td><td>Font size / weight / line-height</td><td>${tk('Text/sm/Regular')}</td><td>14px / 400 / 16px</td></tr>
            <tr><td>Color — Disabled</td><td>${tk('Gray/400')}</td><td>#a3a3a3</td></tr>
            <tr><td rowspan="3">Badge (Type=Badge)</td><td>Padding</td><td>${tk('Space/md')} · ${tk('Space/2xs')}</td><td>px 8px · py 2px</td></tr>
            <tr><td>Border Radius</td><td>${tk('Radius/full')}</td><td>9999px</td></tr>
            <tr><td>Font size / weight</td><td>${tk('Text/xs/Regular')}</td><td>12px / 400</td></tr>
            <tr><td>Right Control icon</td><td>Size</td><td>—</td><td>24 × 24px</td></tr>
            <tr><td rowspan="3">CWH — Header</td><td>Background</td><td>${tk('Gray/50')}</td><td>#fafafa</td></tr>
            <tr><td>Padding H / V</td><td>${tk('Space/lg')} · ${tk('Space/sm')}</td><td>10px / 6px</td></tr>
            <tr><td>Title font</td><td>${tk('Text/md/Medium')}</td><td>16px / 500 / 24px</td></tr>
            <tr><td rowspan="2">CWH — Body rows</td><td>Font size / weight</td><td>${tk('Text/sm/Regular')}</td><td>14px / 400 / 16px</td></tr>
            <tr><td>Row vertical padding</td><td>${tk('Space/2xs')}</td><td>2px</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Card usage guidelines — when to use each type and how to handle states correctly.</p>
        <h2 id="Do">Do</h2>
        <ul>
          <li>Choose the type that best matches the data — Subtitle for a single key value, Badge for a status, Description for multi-line context</li>
          <li>Use Active state only for genuinely selected or focused cards in a list</li>
          <li>Use Card With Header when the content has a logical section title and multiple label–value pairs</li>
          <li>Keep card width consistent within a list or grid</li>
        </ul>
        <h2>Don't</h2>
        <ul>
          <li>Don't nest cards inside other cards</li>
          <li>Don't use the Disabled state simply to de-emphasise — only use it when the card interaction is genuinely unavailable</li>
          <li>Don't add more than three description lines — use a detail screen instead</li>
          <li>Don't mix Card types within the same list</li>
        </ul>
      `};

      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Token values extracted from Figma for the Card and Card With Header components.</p>
        <h2 id="Tokens">Tokens</h2>
        <table class="token-table">
          <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">--bt-surface-default</span></td><td>#ffffff</td><td>Card background / CWH body background · <em>VariableID:75:611 = Gray/0</em></td></tr>
            <tr><td><span class="token-name">--bt-surface-light</span></td><td>#fafafa</td><td>CWH header background · <em>Surface Colors Primary/--bt-surface-primary-light</em></td></tr>
            <tr><td><span class="token-name">--bt-surface-subtle</span></td><td>#f5f5f5</td><td>Badge background (Tertiary/Outline)</td></tr>
            <tr><td><span class="token-name">--bt-border-default</span></td><td>#d4d4d4</td><td>Card border — Default / Disabled · <em>VariableID:75:615 = Gray/300</em></td></tr>
            <tr><td><span class="token-name">--bt-border-brand</span></td><td>#0d4e97</td><td>Card border — Active state · <em>VariableID:75:398 = Blue/700</em></td></tr>
            <tr><td><span class="token-name">--bt-text-default</span></td><td>#1a1a1a</td><td>Title (tüm durumlar) · <em>VariableID:75:621 = Gray/900</em></td></tr>
            <tr><td><span class="token-name">--bt-text-muted</span></td><td>#a3a3a3</td><td>Subtitle / badge / description — Disabled · <em>VariableID:75:616 = Gray/400</em></td></tr>
            <tr><td><span class="token-name">--bt-icon-default</span></td><td>#1a1a1a</td><td>Right control icon — tüm durumlar (değişmez)</td></tr>
            <tr><td><span class="token-name">--bt-radius-2xl</span></td><td>12px</td><td>Card border radius</td></tr>
            <tr><td><span class="token-name">--bt-radius-lg</span></td><td>8px</td><td>Card With Header border radius</td></tr>
            <tr><td><span class="token-name">--bt-radius-full</span></td><td>9999px</td><td>Badge border radius</td></tr>
            <tr><td><span class="token-name">--bt-space-lg</span></td><td>10px</td><td>Card padding / CWH header horizontal padding</td></tr>
            <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>CWH header vertical padding</td></tr>
            <tr><td><span class="token-name">--bt-space-xs</span></td><td>4px</td><td>Title ↔ content gap</td></tr>
            <tr><td><span class="token-name">--bt-space-2xs</span></td><td>2px</td><td>CWH body row vertical padding / Badge py</td></tr>
            <tr><td><span class="token-name">--bt-space-md</span></td><td>8px</td><td>Badge horizontal padding</td></tr>
          </tbody>
        </table>
      `};

      return { title, html: overviewHtml };
    }
  },

  'components/alert': {
    tabs: ['Overview', 'Usage'],
    toc: ['Types', 'Theme Colors', 'Close Button'],
    render: (tab) => {
      const title = 'Alert';

      // Lucide icons
      const iconCircleAlert = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
      const iconCircleCheck = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
      const iconInfo        = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
      const iconX           = color => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

      // Figma tokens: --bt-surface-{type}-light, --bt-border-{type}-default, --bt-surface-{type}-default
      const TYPE_CFG = {
        error:       { lucideIcon: iconCircleAlert, lucideName: 'circle-alert', accent: '#b31d38', lightBg: '#fef2f2', filledBg: '#b31d38', surfaceLight: '--bt-surface-error-light',       borderToken: '--bt-border-error-default',       surfaceFilled: '--bt-surface-error-default'       },
        warning:     { lucideIcon: iconCircleAlert, lucideName: 'circle-alert', accent: '#aa820a', lightBg: '#fdf9e8', filledBg: '#aa820a', surfaceLight: '--bt-surface-warning-light',     borderToken: '--bt-border-warning-default',     surfaceFilled: '--bt-surface-warning-default'     },
        information: { lucideIcon: iconInfo,        lucideName: 'info',         accent: '#0d4e97', lightBg: '#f1f7fe', filledBg: '#0d4e97', surfaceLight: '--bt-surface-information-light', borderToken: '--bt-border-information-default', surfaceFilled: '--bt-surface-information-default' },
        success:     { lucideIcon: iconCircleCheck, lucideName: 'circle-check', accent: '#2d584b', lightBg: '#daede5', filledBg: '#2d584b', surfaceLight: '--bt-surface-success-light',     borderToken: '--bt-border-success-default',     surfaceFilled: '--bt-surface-success-default'     },
      };

      const TYPES      = ['error', 'warning', 'information', 'success'];
      const TYPE_LABEL = { error: 'Error', warning: 'Warning', information: 'Information', success: 'Success' };
      const TYPE_DESC  = {
        error:       'Critical errors or blocking situations that require immediate action.',
        warning:     'Situations that need attention but are not critical.',
        information: 'Helpful context or neutral information for the user.',
        success:     'Confirms a completed action or positive outcome.',
      };
      const THEMES     = ['stroke', 'light', 'filled'];
      const THEME_DESC = {
        stroke:  'Neutral background with a default gray border. Works on any surface.',
        light:   'Tinted background with a type-matched accent border. Softer emphasis.',
        filled:  'Solid accent background with inverted (white) text and icon. Highest emphasis.',
      };

      const tk  = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const lbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;
      const pw  = inner => `<div style="max-width:440px">${inner}</div>`;

      const alertEl = ({ type = 'error', theme = 'stroke', closeBtn = false, alertTitle = 'Alert Title', desc = 'Short description goes here.' }) => {
        const c = TYPE_CFG[type];
        const isFilled  = theme === 'filled';
        const bg        = isFilled ? c.filledBg : theme === 'light' ? c.lightBg : '#fafafa';
        const border    = isFilled ? 'none' : `1px solid ${theme === 'light' ? c.accent : '#d4d4d4'}`;
        const iconColor = isFilled ? '#fff' : c.accent;
        const textColor = isFilled ? '#fff' : '#1a1a1a';
        const descAlpha = isFilled ? '0.85' : '1';
        return `
          <div style="display:flex;align-items:center;background:${bg};border:${border};border-radius:4px;width:100%;">
            <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${c.lucideIcon(iconColor)}</div>
            <div style="flex:1;padding:8px;min-width:0;">
              <div style="font-size:16px;font-weight:500;color:${textColor};line-height:24px;">${alertTitle}</div>
              <div style="font-size:14px;color:${textColor};opacity:${descAlpha};line-height:16px;margin-top:4px;">${desc}</div>
            </div>
            ${closeBtn ? `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;">${iconX(textColor)}</div>` : ''}
          </div>`;
      };

      const overviewHtml = `
        <p class="page-desc">Inline messages that inform the user about an important state. Four types, three theme colors, and an optional close button.</p>

        <div class="preview-box">
          <div style="display:flex;flex-direction:column;gap:10px;max-width:440px;">
            ${TYPES.map(t => alertEl({ type: t, alertTitle: `${TYPE_LABEL[t]} Alert` })).join('')}
          </div>
        </div>

        <h2 id="Types">Types</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Four semantic types — each with a distinct icon (Lucide) and accent color. Shown here in Stroke theme.</p>
        <table class="token-table">
          <thead><tr><th>Type</th><th style="min-width:340px">Preview</th><th>Description</th></tr></thead>
          <tbody>
            ${TYPES.map(t => `
            <tr>
              <td><span class="token-name">${TYPE_LABEL[t]}</span></td>
              <td>${pw(alertEl({ type: t, alertTitle: `${TYPE_LABEL[t]} Alert` }))}</td>
              <td style="color:var(--bt-text-emphasis)">${TYPE_DESC[t]}</td>
            </tr>`).join('')}
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Type</th><th>Icon (Lucide)</th><th>Accent token</th><th>Value</th></tr></thead>
          <tbody>
            ${TYPES.map(t => {
              const c = TYPE_CFG[t];
              return `<tr>
                <td><span class="token-name">${TYPE_LABEL[t]}</span></td>
                <td>${tk(c.lucideName)}</td>
                <td>${tk(c.borderToken)}</td>
                <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:${c.accent};border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></span>${c.accent}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>

        <h2 id="Theme Colors">Theme Colors</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Three themes control how much visual weight the alert carries.</p>
        ${THEMES.map(th => `
          <div style="margin-bottom:24px;">
            ${lbl(th.charAt(0).toUpperCase() + th.slice(1))}
            <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:12px;">${THEME_DESC[th]}</p>
            <table class="token-table">
              <thead><tr><th>Type</th><th style="min-width:340px">Preview</th></tr></thead>
              <tbody>
                ${TYPES.map(t => `
                <tr>
                  <td><span class="token-name">${TYPE_LABEL[t]}</span></td>
                  <td>${pw(alertEl({ type: t, theme: th, alertTitle: `${TYPE_LABEL[t]} Alert` }))}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        `).join('')}
        <table class="token-table" style="margin-top:4px">
          <thead><tr><th>Theme</th><th>Type</th><th>Background token</th><th>Border token</th></tr></thead>
          <tbody>
            <tr><td rowspan="1"><span class="token-name">Stroke</span></td><td>All</td><td>${tk('--bt-surface-primary-light')} · #fafafa</td><td>${tk('--bt-border-default')} · #d4d4d4</td></tr>
            ${TYPES.map((t, i) => {
              const c = TYPE_CFG[t];
              return `<tr>
                ${i === 0 ? `<td rowspan="4"><span class="token-name">Light</span></td>` : ''}
                <td>${TYPE_LABEL[t]}</td>
                <td>${tk(c.surfaceLight)} · ${c.lightBg}</td>
                <td>${tk(c.borderToken)} · ${c.accent}</td>
              </tr>`;
            }).join('')}
            ${TYPES.map((t, i) => {
              const c = TYPE_CFG[t];
              return `<tr>
                ${i === 0 ? `<td rowspan="4"><span class="token-name">Filled</span></td>` : ''}
                <td>${TYPE_LABEL[t]}</td>
                <td>${tk(c.surfaceFilled)} · ${c.filledBg}</td>
                <td>—</td>
              </tr>`;
            }).join('')}
            <tr><td><span class="token-name">Filled</span> · Text / Icon</td><td colspan="3">${tk('--bt-text-inverted')} / ${tk('--bt-icon-inverted')} · #ffffff</td></tr>
          </tbody>
        </table>

        <h2 id="Close Button">Close Button</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Controlled via the <strong>Close Button</strong> property. Renders a 40×40px hit area on the right edge with a Lucide ${tk('x')} icon.</p>
        <table class="token-table">
          <thead><tr><th>State</th><th style="min-width:340px">Preview</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Off</span></td>
              <td>${pw(alertEl({ type: 'error', theme: 'stroke', closeBtn: false, alertTitle: 'Error Alert' }))}</td>
              <td style="color:var(--bt-text-emphasis)">No close affordance. Use for persistent or mandatory alerts.</td>
            </tr>
            <tr>
              <td><span class="token-name">On</span></td>
              <td>${pw(alertEl({ type: 'error', theme: 'stroke', closeBtn: true, alertTitle: 'Error Alert' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Dismissible. Use when the user may want to hide the alert.</td>
            </tr>
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Border Radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
            <tr><td>Icon container / Close button</td><td>Width × Height</td><td>—</td><td>40 × 40px</td></tr>
            <tr><td>Content area</td><td>Padding</td><td>${tk('--space/md')}</td><td>8px</td></tr>
            <tr><td>Title ↔ Description</td><td>Gap</td><td>${tk('--space/xs')}</td><td>4px</td></tr>
            <tr><td>Title</td><td>Font Size / Weight / Line Height</td><td>${tk('--font/size/text-md')}</td><td>16px / 500 / 24px</td></tr>
            <tr><td>Description</td><td>Font Size / Weight / Line Height</td><td>${tk('--font/size/text-sm')}</td><td>14px / 400 / 16px</td></tr>
            <tr><td>Close icon</td><td>Lucide</td><td>${tk('x')}</td><td>14 × 14px</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Alert usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      return { title, html: overviewHtml };
    }
  },

  'components/alert-dialog': {
    tabs: ['Overview', 'Usage'],
    toc: ['Types', 'Button Layout', 'Anatomy'],
    render: (tab) => {
      const title = 'Alert Dialog';

      // ── Icons (Lucide) ──────────────────────────────────────────────────────
      const iconCircleAlert = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
      const iconCircleCheck = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
      const iconInfo        = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;

      // ── Figma local variable values ─────────────────────────────────────────
      // Space/xs=4  Space/md=8  Space/2xl=16  Space/3xl=20  Space/4xl=24
      // Radius/md=6  Radius/6xl=28  Radius/full=9999
      // Shadow/lg: 0 4px 6px rgba(16,24,40,.031) + 0 12px 16px rgba(16,24,40,.078)
      // Font/size/text-md=16  Font/size/text-sm=14
      // Font/lh/text-lh-md=24  Font/lh/text-lh-sm=20

      const SHADOW = '0 4px 6px rgba(16,24,40,.031),0 12px 16px rgba(16,24,40,.078)';

      // ── Type configuration ──────────────────────────────────────────────────
      const TYPE_CFG = {
        error:       { icon: iconCircleAlert, accent: '#b31d38', lightBg: '#fef2f2', surfaceToken: '--bt-surface-error-light',       borderToken: '--bt-border-error-default'       },
        warning:     { icon: iconCircleAlert, accent: '#aa820a', lightBg: '#fdf9e8', surfaceToken: '--bt-surface-warning-light',     borderToken: '--bt-border-warning-default'     },
        success:     { icon: iconCircleCheck, accent: '#2d584b', lightBg: '#e8f3ee', surfaceToken: '--bt-surface-success-light',     borderToken: '--bt-border-success-default'     },
        information: { icon: iconInfo,        accent: '#0d4e97', lightBg: '#f1f7fe', surfaceToken: '--bt-surface-information-light', borderToken: '--bt-border-information-default' },
      };

      const TYPES      = ['error', 'warning', 'success', 'information'];
      const TYPE_LABEL = { error: 'Error', warning: 'Warning', success: 'Success', information: 'Information' };
      const TYPE_DESC  = {
        error:       'Alerts the user to a critical problem that requires immediate attention before proceeding.',
        warning:     'Warns the user of a potentially undesirable consequence they should be aware of.',
        success:     'Confirms that an action was completed successfully.',
        information: 'Provides neutral, helpful context without implying urgency.',
      };

      const BTN_LAYOUTS      = ['vertical-1', 'horizontal-2', 'vertical-2'];
      const BTN_LAYOUT_LABEL = { 'vertical-1': 'Vertical · 1 button', 'horizontal-2': 'Horizontal · 2 buttons', 'vertical-2': 'Vertical · 2 buttons' };
      const BTN_LAYOUT_DESC  = {
        'vertical-1':  'Single full-width primary action. Use when only one action is needed.',
        'horizontal-2':'Ghost and primary buttons side-by-side. Default two-action layout.',
        'vertical-2':  'Primary action on top, ghost below. Use when button labels are long.',
      };

      const tk  = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const lbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;

      // ── Button builders — labels match Figma exactly ────────────────────────
      // Space/2xl=16px H pad, Space/md=8px V pad · Radius/md=6px
      // horizontal → flex:1 0 0 + min-width:1px (Fill along row)
      // vertical   → width:100% + flex-shrink:0  (Fill cross axis)
      const btnPrimary = (mode = 'h') =>
        `<div style="${mode === 'h' ? 'flex:1 0 0;min-width:1px' : 'width:100%;flex-shrink:0'};display:flex;align-items:center;justify-content:center;padding:8px 16px;background:#0d4e97;border-radius:6px;">
           <span style="font-size:16px;font-weight:500;line-height:24px;color:#fff;white-space:nowrap;">Button</span>
         </div>`;

      const btnGhost = (mode = 'h') =>
        `<div style="${mode === 'h' ? 'flex:1 0 0;min-width:1px' : 'width:100%;flex-shrink:0'};display:flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:6px;">
           <span style="font-size:16px;font-weight:500;line-height:24px;color:#1a1a1a;white-space:nowrap;">Button</span>
         </div>`;

      // ── Button area — Space/3xl=20px H · Space/2xl=16px V padding ───────────
      // gap: horizontal-2 → Space/2xl=16px · vertical-2 → Space/2xl=16px
      const btnArea = layout => {
        if (layout === 'vertical-1') return `
          <div style="padding:16px 20px;width:100%;box-sizing:border-box;display:flex;">
            ${btnPrimary('v')}
          </div>`;
        if (layout === 'horizontal-2') return `
          <div style="padding:16px 20px;width:100%;box-sizing:border-box;display:flex;gap:16px;">
            ${btnGhost('h')}${btnPrimary('h')}
          </div>`;
        return `
          <div style="padding:16px 20px;width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;">
            ${btnPrimary('v')}${btnGhost('v')}
          </div>`;
      };

      // ── Full dialog card ────────────────────────────────────────────────────
      // Radius/6xl=28px · Shadow/lg · Body: p=20px gap=4px · Pictogram: 40px radius-full
      const alertDialogEl = ({ type = 'information', layout = 'vertical-1' }) => {
        const c = TYPE_CFG[type];
        return `
          <div style="background:#fff;border-radius:28px;box-shadow:${SHADOW};display:flex;flex-direction:column;width:100%;max-width:369px;box-sizing:border-box;overflow:hidden;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:20px;">
              <div style="width:40px;height:40px;border-radius:9999px;background:${c.lightBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                ${c.icon(c.accent)}
              </div>
              <div style="display:flex;flex-direction:column;gap:4px;width:100%;">
                <div style="font-size:16px;font-weight:500;line-height:24px;color:#1a1a1a;text-align:center;">Title Text Here</div>
                <div style="font-size:14px;font-weight:400;line-height:20px;color:#1a1a1a;text-align:center;">Description for additional information displayed below the title to clarify the purpose of the section.</div>
              </div>
            </div>
            ${btnArea(layout)}
          </div>`;
      };

      // ── Overview ────────────────────────────────────────────────────────────
      const overviewHtml = `
        <p class="page-desc">A modal dialog used to interrupt the user with information that requires a decision before proceeding. Four semantic types, three button layout variants.</p>

        <div class="preview-box" style="background:#e8eaed;flex-direction:column;align-items:center;gap:48px;padding:40px 24px;">
          ${BTN_LAYOUTS.map(layout => alertDialogEl({ type: 'information', layout })).join('')}
        </div>

        <h2 id="Types">Types</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Four semantic types — each with a distinct icon and accent color on the pictogram circle.</p>
        <table class="token-table">
          <thead><tr><th>Type</th><th style="min-width:300px">Preview</th><th>When to use</th></tr></thead>
          <tbody>
            ${TYPES.map(t => `
            <tr>
              <td><span class="token-name">${TYPE_LABEL[t]}</span></td>
              <td><div style="padding:16px 0;">${alertDialogEl({ type: t, layout: 'vertical-1' })}</div></td>
              <td style="color:var(--bt-text-emphasis)">${TYPE_DESC[t]}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Type</th><th>Icon (Lucide)</th><th>Pictogram bg token</th><th>Accent</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Error</span></td><td>${tk('circle-alert')}</td><td>${tk('--bt-surface-error-light')}</td><td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:#b31d38;border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></span>#b31d38</span></td></tr>
            <tr><td><span class="token-name">Warning</span></td><td>${tk('circle-alert')}</td><td>${tk('--bt-surface-warning-light')}</td><td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:#aa820a;border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></span>#aa820a</span></td></tr>
            <tr><td><span class="token-name">Success</span></td><td>${tk('circle-check')}</td><td>${tk('--bt-surface-success-light')}</td><td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:#2d584b;border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></span>#2d584b</span></td></tr>
            <tr><td><span class="token-name">Information</span></td><td>${tk('info')}</td><td>${tk('--bt-surface-information-light')}</td><td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;border-radius:2px;background:#0d4e97;border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></span>#0d4e97</span></td></tr>
          </tbody>
        </table>

        <h2 id="Button Layout">Button Layout</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Three button arrangements cover all common action patterns.</p>
        ${BTN_LAYOUTS.map(layout => `
          <div style="margin-bottom:28px;">
            ${lbl(BTN_LAYOUT_LABEL[layout])}
            <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:12px;">${BTN_LAYOUT_DESC[layout]}</p>
            <div style="padding:32px 24px;background:#e8eaed;border-radius:10px;display:flex;justify-content:center;">
              ${alertDialogEl({ type: 'information', layout })}
            </div>
          </div>
        `).join('')}
        <table class="token-table">
          <thead><tr><th>Layout</th><th>Figma props</th><th>Button order</th><th>Gap token</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Vertical · 1</span></td><td>Position=Vertical, Segments=1</td><td>Primary only — full width</td><td>—</td></tr>
            <tr><td><span class="token-name">Horizontal · 2</span></td><td>Position=Horizontal, Segments=2</td><td>Ghost (left) + Primary (right)</td><td>${tk('Space/2xl')} · 16px</td></tr>
            <tr><td><span class="token-name">Vertical · 2</span></td><td>Position=Vertical, Segments=2</td><td>Primary (top) + Ghost (bottom)</td><td>${tk('Space/2xl')} · 16px</td></tr>
          </tbody>
        </table>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Border Radius</td><td>${tk('Radius/6xl')}</td><td>28px</td></tr>
            <tr><td>Container</td><td>Shadow</td><td>${tk('Shadow/lg')}</td><td>0 4px 6px rgba(16,24,40,3%) · 0 12px 16px rgba(16,24,40,8%)</td></tr>
            <tr><td>Body</td><td>Padding</td><td>${tk('Space/3xl')}</td><td>20px</td></tr>
            <tr><td>Body</td><td>Gap (pictogram ↔ text)</td><td>${tk('Space/xs')}</td><td>4px</td></tr>
            <tr><td>Title ↔ Description</td><td>Gap</td><td>${tk('Space/xs')}</td><td>4px</td></tr>
            <tr><td>Pictogram circle</td><td>Size</td><td>—</td><td>40 × 40px</td></tr>
            <tr><td>Pictogram circle</td><td>Border Radius</td><td>${tk('Radius/full')}</td><td>9999px</td></tr>
            <tr><td>Icon</td><td>Size</td><td>—</td><td>20 × 20px</td></tr>
            <tr><td>Title</td><td>Font</td><td>${tk('Title/md/Medium')}</td><td>16px / 500 / 24px · center</td></tr>
            <tr><td>Description</td><td>Font</td><td>${tk('Text/sm/Regular')}</td><td>14px / 400 / 20px · center</td></tr>
            <tr><td>Button area</td><td>Padding H</td><td>${tk('Space/3xl')}</td><td>20px</td></tr>
            <tr><td>Button area</td><td>Padding V</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Button</td><td>Padding H</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Button</td><td>Padding V</td><td>${tk('Space/md')}</td><td>8px</td></tr>
            <tr><td>Button</td><td>Border Radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
            <tr><td>Primary button bg</td><td>Color</td><td>${tk('Blue/700')}</td><td>#0d4e97</td></tr>
            <tr><td>Primary button text</td><td>Color</td><td>${tk('Gray/0')}</td><td>#ffffff</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Alert Dialog usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      return { title, html: overviewHtml };
    }
  },

  'components/dialog': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Header Positions', 'Button Layout', 'Anatomy'],
    render: (tab) => {
      const title = 'Dialog';

      // ── Toolbar icons ────────────────────────────────────────────────────────
      // Icon/Placeholder: 24×24 container → 16×16 SVG (matches Accordion)
      const iScan = c =>
        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;

      // Icon/X: 24×24 container → 11.75×11.75 vector ≈ 12×12
      //   viewBox cropped to X path bounds (paths span 6-18 in 24 viewBox)
      const iX = c =>
        `<svg width="12" height="12" viewBox="5 5 14 14" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;

      // 40px Dialog Controls button → 24×24 Icon container → icon SVG
      const iconPlaceholder = () =>
        `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
           <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
             ${iScan('#1a1a1a')}
           </div>
         </div>`;

      const iconX = () =>
        `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
           <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
             ${iX('#1a1a1a')}
           </div>
         </div>`;

      // Input right-control icons — rendered at true Figma vector dimensions inside 24×24 container
      // Chevron: Figma vector 11.5×6.5px → viewBox cropped to path bounds, rendered at 12×7
      const iChevDown = c => `<svg width="12" height="7" viewBox="5 8 14 8" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
      // Calendar: Figma vector 16.5×18.167px → viewBox cropped to content bounds, rendered at 17×18
      const iCalendar = c => `<svg width="17" height="18" viewBox="2 1 20 22" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

      const SHADOW = '0 4px 6px rgba(16,24,40,.031),0 12px 16px rgba(16,24,40,.078)';

      const tk  = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const lbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;

      // ── Button builders ──────────────────────────────────────────────────────
      // Primary bg: Surface Colors Brand/--bt-surface-brand-contrast-default → --bt-surface-brand (#0d4e97)
      const btnPrimary = (mode = 'h') =>
        `<div style="${mode === 'h' ? 'flex:1 0 0;min-width:1px' : 'width:100%;flex-shrink:0'};display:flex;align-items:center;justify-content:center;padding:var(--bt-space-md) var(--bt-space-2xl);background:var(--bt-surface-brand);border-radius:var(--bt-radius-md);">
           <span style="font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:var(--bt-text-inverted);white-space:nowrap;">Button</span>
         </div>`;

      const btnGhost = (mode = 'h') =>
        `<div style="${mode === 'h' ? 'flex:1 0 0;min-width:1px' : 'width:100%;flex-shrink:0'};display:flex;align-items:center;justify-content:center;padding:var(--bt-space-md) var(--bt-space-2xl);border-radius:var(--bt-radius-md);">
           <span style="font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:var(--bt-text-default);white-space:nowrap;">Button</span>
         </div>`;

      const btnArea = layout => {
        if (layout === 'vertical-1') return `
          <div style="padding:var(--bt-space-2xl) var(--bt-space-3xl);width:100%;box-sizing:border-box;display:flex;">
            ${btnPrimary('v')}
          </div>`;
        if (layout === 'horizontal-2') return `
          <div style="padding:var(--bt-space-2xl) var(--bt-space-3xl);width:100%;box-sizing:border-box;display:flex;gap:var(--bt-space-2xl);">
            ${btnGhost('h')}${btnPrimary('h')}
          </div>`;
        return `
          <div style="padding:var(--bt-space-2xl) var(--bt-space-3xl);width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--bt-space-2xl);">
            ${btnPrimary('v')}${btnGhost('v')}
          </div>`;
      };

      // ── Toolbar variants ────────────────────────────────────────────────────
      const toolbar = (headerPos) => {
        const base = `display:flex;align-items:center;height:40px;padding:0 var(--bt-space-2xl);border-bottom:1px solid var(--bt-border-default);background:var(--bt-surface-subtle);box-sizing:border-box;`;
        if (headerPos === 'flex-3') {
          return `<div style="${base}justify-content:space-between;">
            ${iconPlaceholder()}
            <div style="flex:1 0 0;min-width:1px;text-align:center;padding:0 var(--bt-space-md);font-size:var(--bt-text-lg-size);font-weight:500;line-height:var(--bt-text-lg-lh);color:var(--bt-text-default);">Title Text Here</div>
            ${iconX()}
          </div>`;
        }
        if (headerPos === 'left-2') {
          return `<div style="${base}justify-content:space-between;">
            <div style="flex:1 0 0;min-width:1px;font-size:var(--bt-text-lg-size);font-weight:500;line-height:var(--bt-text-lg-lh);color:var(--bt-text-default);">Title Text Here</div>
            ${iconX()}
          </div>`;
        }
        return `<div style="${base}">
          <div style="flex:1 0 0;min-width:1px;font-size:var(--bt-text-lg-size);font-weight:500;line-height:var(--bt-text-lg-lh);color:var(--bt-text-default);">Title Text Here</div>
        </div>`;
      };

      // ── Input field helper ──────────────────────────────────────────────────
      const inputField = (label, placeholder, icon = null) => `
        <div style="display:flex;flex-direction:column;gap:var(--bt-space-sm);">
          <div style="font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:var(--bt-text-default);">${label}</div>
          <div style="display:flex;align-items:center;height:48px;border:1px solid var(--bt-border-default);border-radius:var(--bt-radius-lg);padding:0 var(--bt-space-xl) 0 var(--bt-space-2xl);box-sizing:border-box;background:var(--bt-surface-default);">
            <div style="flex:1 0 0;min-width:1px;font-size:var(--bt-text-md-size);font-weight:400;line-height:var(--bt-text-md-lh);color:var(--bt-text-muted);">${placeholder}</div>
            ${icon ? `<div style="flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;">${icon}</div>` : ''}
          </div>
        </div>`;

      // ── Preview dialog card — description only (for top preview box) ────────
      const dialogEl = ({ headerPos = 'flex-3', layout = 'vertical-1' }) => `
        <div style="background:var(--bt-surface-default);border-radius:var(--bt-radius-lg);box-shadow:${SHADOW};display:flex;flex-direction:column;width:100%;max-width:369px;box-sizing:border-box;overflow:hidden;">
          ${toolbar(headerPos)}
          <div style="display:flex;flex-direction:column;gap:var(--bt-space-2xl);padding:var(--bt-space-3xl);box-sizing:border-box;">
            <div style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:var(--bt-text-default);">Description for additional information displayed below the title to clarify the purpose of the section.</div>
          </div>
          ${btnArea(layout)}
        </div>`;

      // ── Full dialog card — description + form fields (for documentation sections) ──
      const dialogFullEl = ({ headerPos = 'flex-3', layout = 'vertical-1' }) => `
        <div style="background:var(--bt-surface-default);border-radius:var(--bt-radius-lg);box-shadow:${SHADOW};display:flex;flex-direction:column;width:100%;max-width:369px;box-sizing:border-box;overflow:hidden;">
          ${toolbar(headerPos)}
          <div style="display:flex;flex-direction:column;gap:var(--bt-space-2xl);padding:var(--bt-space-3xl);box-sizing:border-box;">
            <div style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:var(--bt-text-default);">Description for additional information displayed below the title to clarify the purpose of the section.</div>
            ${inputField('Label Text', 'Placeholder Text', iChevDown('var(--bt-text-muted)'))}
            ${inputField('Label Text', 'Placeholder Text', iCalendar('var(--bt-text-muted)'))}
          </div>
          ${btnArea(layout)}
        </div>`;

      const HEADER_POSITIONS = ['flex-3', 'left-2', 'left-default'];
      const HEADER_LABEL = {
        'flex-3':        'Flex · Segments=1',
        'left-2':        'Left · Segments=2',
        'left-default':  'Left · Segments=1',
      };
      // Figma: Header Position=Flex/Left, Header Segments=1/2
      const HEADER_FIGMA_PROPS = {
        'flex-3':       'Header Position=Flex, Header Segments=1',
        'left-2':       'Header Position=Left, Header Segments=2',
        'left-default': 'Header Position=Left, Header Segments=1',
      };
      const HEADER_DESC = {
        'flex-3':        'One icon placeholder on each side, title centered. Use for symmetrical dialogs where both sides have controls.',
        'left-2':        'Title left-aligned with a single icon slot on the right. Use when only one toolbar action is needed.',
        'left-default':  'Title left-aligned, no icon controls. The minimal toolbar — use when the dialog has no secondary toolbar actions.',
      };

      const BTN_LAYOUTS      = ['vertical-1', 'horizontal-2', 'vertical-2'];
      const BTN_LAYOUT_LABEL = { 'vertical-1': 'Vertical · 1 button', 'horizontal-2': 'Horizontal · 2 buttons', 'vertical-2': 'Vertical · 2 buttons' };
      const BTN_LAYOUT_DESC  = {
        'vertical-1':   'Single full-width primary action.',
        'horizontal-2': 'Ghost (left) + Primary (right) side-by-side.',
        'vertical-2':   'Primary (top) + Ghost (bottom), stacked.',
      };

      const overviewHtml = `
        <p class="page-desc">A modal overlay for focused content with a persistent toolbar. Three header variants (Flex, Left/2, Left/Default) × three button layouts.</p>

        <div class="preview-box" style="background:#e8eaed;flex-direction:column;align-items:center;gap:32px;padding:40px 24px;">
          ${dialogEl({ headerPos: 'flex-3', layout: 'vertical-1' })}
          ${dialogEl({ headerPos: 'left-2', layout: 'horizontal-2' })}
          ${dialogEl({ headerPos: 'left-default', layout: 'vertical-2' })}
        </div>

        <h2 id="Header Positions">Header Positions</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">The toolbar uses <strong>Icon/Placeholder</strong> slots — generic indicators for whatever icon the implementation places there.</p>
        <table class="token-table">
          <thead><tr><th>Variant</th><th>Figma props</th><th style="min-width:300px">Preview</th><th>When to use</th></tr></thead>
          <tbody>
            ${HEADER_POSITIONS.map(hp => `
            <tr>
              <td><span class="token-name">${HEADER_LABEL[hp]}</span></td>
              <td style="white-space:nowrap">${HEADER_FIGMA_PROPS[hp]}</td>
              <td><div style="padding:16px 0;">${dialogFullEl({ headerPos: hp, layout: 'vertical-1' })}</div></td>
              <td style="color:var(--bt-text-emphasis)">${HEADER_DESC[hp]}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="Button Layout">Button Layout</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Three button arrangements — identical to Alert Dialog.</p>
        ${BTN_LAYOUTS.map(layout => `
          <div style="margin-bottom:28px;">
            ${lbl(BTN_LAYOUT_LABEL[layout])}
            <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:12px;">${BTN_LAYOUT_DESC[layout]}</p>
            <div style="padding:32px 24px;background:#e8eaed;border-radius:10px;display:flex;justify-content:center;">
              ${dialogFullEl({ headerPos: 'left-default', layout })}
            </div>
          </div>
        `).join('')}
        <table class="token-table">
          <thead><tr><th>Layout</th><th>Figma props</th><th>Button order</th><th>Gap token</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Vertical · 1</span></td><td>Position=Vertical, Segments=1</td><td>Primary only — full width</td><td>—</td></tr>
            <tr><td><span class="token-name">Horizontal · 2</span></td><td>Position=Horizontal, Segments=2</td><td>Ghost (left) + Primary (right)</td><td>${tk('Space/2xl')} · 16px</td></tr>
            <tr><td><span class="token-name">Vertical · 2</span></td><td>Position=Vertical, Segments=2</td><td>Primary (top) + Ghost (bottom)</td><td>${tk('Space/2xl')} · 16px</td></tr>
          </tbody>
        </table>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Width</td><td>—</td><td>369px</td></tr>
            <tr><td>Container</td><td>Border Radius</td><td>${tk('Radius/lg')}</td><td>8px</td></tr>
            <tr><td>Container</td><td>Background</td><td>${tk('Surface Colors Primary/--bt-surface-primary-default')}</td><td>${tk('--bt-surface-default')} · #ffffff</td></tr>
            <tr><td>Container</td><td>Shadow</td><td>—</td><td>0 4px 6px rgba(16,24,40,0.03) · 0 12px 16px rgba(16,24,40,0.08)</td></tr>
            <tr><td>Toolbar</td><td>Height</td><td>—</td><td>40px</td></tr>
            <tr><td>Toolbar</td><td>Padding H</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Toolbar</td><td>Background</td><td>${tk('Surface Colors Primary/--bt-surface-primary-subtle')}</td><td>${tk('--bt-surface-subtle')} · #f5f5f5</td></tr>
            <tr><td>Toolbar</td><td>Bottom border</td><td>${tk('Border Colors/--bt-border-default')}</td><td>${tk('--bt-border-default')} · #d4d4d4</td></tr>
            <tr><td>Toolbar title</td><td>Font</td><td>${tk('Title/lg/Medium')}</td><td>Geist 18px / 500 / 24px</td></tr>
            <tr><td>Toolbar title</td><td>Color</td><td>${tk('Text Colors/--bt-text-default')}</td><td>${tk('--bt-text-default')} · #1a1a1a</td></tr>
            <tr><td>Icon/Placeholder btn</td><td>Size</td><td>—</td><td>40 × 40px</td></tr>
            <tr><td>Icon</td><td>Size</td><td>—</td><td>24 × 24px</td></tr>
            <tr><td>Icon</td><td>Color</td><td>${tk('Icon Colors/--bt-icon-default')}</td><td>${tk('--bt-icon-default')} · #1a1a1a</td></tr>
            <tr><td>Body</td><td>Padding</td><td>${tk('Space/3xl')}</td><td>20px</td></tr>
            <tr><td>Body</td><td>Gap</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Description</td><td>Font</td><td>${tk('Text/sm/Regular')}</td><td>Geist 14px / 400 / 16px</td></tr>
            <tr><td>Description</td><td>Color</td><td>${tk('Text Colors/--bt-text-default')}</td><td>${tk('--bt-text-default')} · #1a1a1a</td></tr>
            <tr><td>Input field</td><td>Height</td><td>—</td><td>48px</td></tr>
            <tr><td>Input field</td><td>Padding left</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Input field</td><td>Padding right</td><td>${tk('Space/xl')}</td><td>12px</td></tr>
            <tr><td>Input field</td><td>Border Radius</td><td>${tk('Radius/lg')}</td><td>8px</td></tr>
            <tr><td>Input field</td><td>Border</td><td>${tk('Border Colors/--bt-border-default')}</td><td>${tk('--bt-border-default')} · #d4d4d4</td></tr>
            <tr><td>Button area</td><td>Padding H</td><td>${tk('Space/3xl')}</td><td>20px</td></tr>
            <tr><td>Button area</td><td>Padding V</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Button</td><td>Border Radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
            <tr><td>Primary button bg</td><td>Color</td><td>${tk('Surface Colors Brand/--bt-surface-brand-contrast-default')}</td><td>${tk('--bt-surface-brand')} · #0d4e97</td></tr>
            <tr><td>Primary button text</td><td>Color</td><td>${tk('Text Colors/--bt-text-inverted')}</td><td>${tk('--bt-text-inverted')} · #ffffff</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Dialog usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };

      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Figma Desktop Bridge ile doğrudan ASSK App'ten okunan Dialog token değerleri.</p>
        <h2 id="Token Reference">Token Reference</h2>
        <table class="token-table">
          <thead><tr><th>Figma Variable</th><th>CSS Token</th><th>Value</th><th>Kullanım</th></tr></thead>
          <tbody>
            <tr><td>${tk('Surface Colors Primary/--bt-surface-primary-default')}</td><td>${tk('--bt-surface-default')}</td><td>#ffffff</td><td>Dialog container background</td></tr>
            <tr><td>${tk('Surface Colors Primary/--bt-surface-primary-subtle')}</td><td>${tk('--bt-surface-subtle')}</td><td>#f5f5f5</td><td>Toolbar background</td></tr>
            <tr><td>${tk('Border Colors/--bt-border-default')}</td><td>${tk('--bt-border-default')}</td><td>#d4d4d4</td><td>Toolbar border · Input field border</td></tr>
            <tr><td>${tk('Surface Colors Brand/--bt-surface-brand-contrast-default')}</td><td>${tk('--bt-surface-brand')}</td><td>#0d4e97</td><td>Primary button background</td></tr>
            <tr><td>${tk('Text Colors/--bt-text-default')}</td><td>${tk('--bt-text-default')}</td><td>#1a1a1a</td><td>Toolbar title · Description text</td></tr>
            <tr><td>${tk('Text Colors/--bt-text-inverted')}</td><td>${tk('--bt-text-inverted')}</td><td>#ffffff</td><td>Primary button text</td></tr>
            <tr><td>${tk('Icon Colors/--bt-icon-default')}</td><td>${tk('--bt-icon-default')}</td><td>#1a1a1a</td><td>Toolbar icon rengi</td></tr>
            <tr><td>${tk('Title/lg/Medium')}</td><td>—</td><td>Geist 18px / 500 / 24px</td><td>Toolbar title tipografisi</td></tr>
            <tr><td>${tk('Text/sm/Regular')}</td><td>—</td><td>Geist 14px / 400 / 16px</td><td>Description tipografisi</td></tr>
            <tr><td>${tk('Text/md/Regular')}</td><td>—</td><td>Geist 16px / 400 / 24px</td><td>Input label tipografisi</td></tr>
            <tr><td>${tk('Radius/lg')}</td><td>${tk('--bt-radius-lg')}</td><td>8px</td><td>Container · Input field border radius</td></tr>
            <tr><td>${tk('Radius/md')}</td><td>${tk('--bt-radius-md')}</td><td>6px</td><td>Button border radius</td></tr>
            <tr><td>${tk('Space/3xl')}</td><td>${tk('--bt-space-3xl')}</td><td>20px</td><td>Body padding · Button area padding H</td></tr>
            <tr><td>${tk('Space/2xl')}</td><td>${tk('--bt-space-2xl')}</td><td>16px</td><td>Toolbar padding H · Body gap · Button area padding V</td></tr>
            <tr><td>${tk('Space/xl')}</td><td>${tk('--bt-space-xl')}</td><td>12px</td><td>Input field padding right</td></tr>
            <tr><td>${tk('Space/md')}</td><td>${tk('--bt-space-md')}</td><td>8px</td><td>Button padding V</td></tr>
          </tbody>
        </table>

        <h2 id="Variants">Variants</h2>
        <table class="token-table">
          <thead><tr><th>Property</th><th>Values</th></tr></thead>
          <tbody>
            <tr><td>Size</td><td>Mobile (369px)</td></tr>
            <tr><td>Header Position</td><td>Flex · Left</td></tr>
            <tr><td>Header Segments</td><td>1 · 2</td></tr>
            <tr><td>Button Position</td><td>Vertical · Horizontal</td></tr>
            <tr><td>Button Segments</td><td>1 · 2</td></tr>
          </tbody>
        </table>
      `};

      return { title, html: overviewHtml };
    }
  },

  'components/bottom-sheet': {
    tabs: ['Overview', 'Usage'],
    toc: ['Toolbar', 'Button Layout', 'Anatomy'],
    render: (tab) => {
      const title = 'Bottom Sheet';
      const SHADOW = '0 4px 6px rgba(16,24,40,.031),0 12px 16px rgba(16,24,40,.078)';
      const tk  = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const lbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;

      const iX = c => `<svg width="12" height="12" viewBox="5 5 14 14" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
      const iScan = c => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;

      const iconBtn = svg =>
        `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
           <div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;">${svg}</div>
         </div>`;

      const grabber = () =>
        `<div style="display:flex;justify-content:center;align-items:flex-end;padding:var(--bt-space-md) 0;width:100%;box-sizing:border-box;">
           <div style="width:72px;height:var(--bt-base-sizing-sm);border-radius:var(--bt-radius-full);background:var(--bt-border-default);"></div>
         </div>`;

      const homeIndicator = () =>
        `<div style="display:flex;justify-content:center;align-items:center;padding:var(--bt-space-md) 0;width:100%;box-sizing:border-box;">
           <div style="width:140px;height:var(--bt-base-sizing-sm);border-radius:var(--bt-radius-full);background:var(--bt-text-default);"></div>
         </div>`;

      const toolbar = ({ showGrabber=true, showLeftBtn=true, showRightBtn=true, showSubtitle=false }) => `
        <div>
          ${showGrabber ? grabber() : ''}
          <div style="display:flex;align-items:center;height:40px;justify-content:space-between;padding:0;">
            <div style="display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              ${showLeftBtn ? iconBtn(iScan('var(--bt-icon-default)')) : '<div style="width:40px;"></div>'}
            </div>
            <div style="flex:1 0 0;min-width:1px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 var(--bt-space-md);">
              <div style="font-size:var(--bt-text-lg-size);font-weight:500;line-height:var(--bt-text-lg-lh);color:var(--bt-text-default);white-space:nowrap;">Title Text Here</div>
              ${showSubtitle ? `<div style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:var(--bt-text-emphasis);white-space:nowrap;">Subtitle</div>` : ''}
            </div>
            <div style="display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              ${showRightBtn ? iconBtn(iX('var(--bt-icon-default)')) : '<div style="width:40px;"></div>'}
            </div>
          </div>
        </div>`;

      const btnPrimary = (mode='v') =>
        `<div style="${mode==='h' ? 'flex:1 0 0;min-width:1px' : 'width:100%;flex-shrink:0'};display:flex;align-items:center;justify-content:center;padding:var(--bt-space-xl) var(--bt-space-2xl);background:var(--bt-blue-700);border-radius:var(--bt-radius-md);">
           <span style="font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:var(--bt-text-inverted);white-space:nowrap;">Button</span>
         </div>`;

      const btnGhost = (mode='v') =>
        `<div style="${mode==='h' ? 'flex:1 0 0;min-width:1px' : 'width:100%;flex-shrink:0'};display:flex;align-items:center;justify-content:center;padding:var(--bt-space-xl) var(--bt-space-2xl);background:var(--bt-surface-subtle);border-radius:var(--bt-radius-md);">
           <span style="font-size:var(--bt-text-md-size);font-weight:500;line-height:var(--bt-text-md-lh);color:var(--bt-text-default);white-space:nowrap;">Button</span>
         </div>`;

      const btnArea = (layout) => {
        if (layout === 'vertical-1')   return `<div style="padding:var(--bt-space-2xl) var(--bt-space-3xl) var(--bt-space-8xl);width:100%;box-sizing:border-box;display:flex;flex-direction:column;">${btnPrimary('v')}</div>`;
        if (layout === 'horizontal-2') return `<div style="padding:var(--bt-space-2xl) var(--bt-space-3xl) var(--bt-space-8xl);width:100%;box-sizing:border-box;display:flex;flex-direction:row;gap:var(--bt-space-xl);">${btnGhost('h')}${btnPrimary('h')}</div>`;
        return                                `<div style="padding:var(--bt-space-2xl) var(--bt-space-3xl) var(--bt-space-8xl);width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--bt-space-xl);">${btnPrimary('v')}${btnGhost('v')}</div>`;
      };

      const sheetEl = ({ showGrabber=true, showLeftBtn=true, showRightBtn=true, showSubtitle=false, layout='vertical-1' }) => `
        <div style="background:var(--bt-surface-subtle);border-radius:var(--bt-radius-6xl) var(--bt-radius-6xl) 0 0;box-shadow:${SHADOW};display:flex;flex-direction:column;width:100%;max-width:394px;box-sizing:border-box;overflow:hidden;">
          ${toolbar({ showGrabber, showLeftBtn, showRightBtn, showSubtitle })}
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--bt-space-2xl);padding:var(--bt-space-2xl) var(--bt-space-2xl) var(--bt-space-6xl);box-sizing:border-box;flex:1;min-height:200px;">
            <div style="font-size:var(--bt-text-sm-size);font-weight:400;line-height:var(--bt-text-sm-lh);color:var(--bt-text-default);width:100%;text-align:center;">Description for additional information displayed below the title to clarify the purpose of the section.</div>
          </div>
          ${btnArea(layout)}
          ${homeIndicator()}
        </div>`;

      const TOOLBAR_VARIANTS = [
        { key: 'default',     label: 'Default',           props: {},                                          desc: 'Grabber + sol ve sağ icon buton. Standart yapı.' },
        { key: 'subtitle',    label: 'With Subtitle',     props: { showSubtitle: true },                     desc: 'Başlık altında subtitle gösterilir.' },
        { key: 'no-grabber',  label: 'No Grabber',        props: { showGrabber: false },                     desc: 'Grabber gizli. Kapatma sadece buton ile.' },
        { key: 'no-left',     label: 'No Left Button',    props: { showLeftBtn: false },                     desc: 'Sol kontrol gizli, sadece sağ X buton.' },
      ];

      const BTN_LAYOUTS = [
        { key: 'vertical-1',   label: 'Vertical · 1 button',   desc: 'Tek tam genişlik primary buton.' },
        { key: 'horizontal-2', label: 'Horizontal · 2 buttons', desc: 'Ghost (sol) + Primary (sağ) yan yana.' },
        { key: 'vertical-2',   label: 'Vertical · 2 buttons',  desc: 'Primary (üst) + Ghost (alt) üst üste.' },
      ];

      const overviewHtml = `
        <p class="page-desc">Ekranın altından süzülen modal — persistent toolbar, opsiyonel grabber ve home indicator içerir. Üç toolbar varyantı × üç buton düzeni.</p>

        <div class="preview-box" style="background:#e8eaed;flex-direction:column;align-items:center;gap:32px;padding:40px 24px;">
          ${sheetEl({ showGrabber: true,  showSubtitle: false, layout: 'vertical-1'   })}
          ${sheetEl({ showGrabber: true,  showSubtitle: true,  layout: 'horizontal-2' })}
          ${sheetEl({ showGrabber: false, showSubtitle: false, layout: 'vertical-2'   })}
        </div>

        <h2 id="Toolbar">Toolbar</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Toolbar dört boolean prop ile kontrol edilir: <strong>showGrabber</strong>, <strong>showLeftButton</strong>, <strong>showRightButton</strong>, <strong>showSubtitle</strong>.</p>
        <table class="token-table">
          <thead><tr><th>Varyant</th><th style="min-width:280px">Preview</th><th>Açıklama</th></tr></thead>
          <tbody>
            ${TOOLBAR_VARIANTS.map(v => `
            <tr>
              <td><span class="token-name">${v.label}</span></td>
              <td>
                <div style="padding:16px 0;max-width:280px;">
                  <div style="background:var(--bt-surface-subtle);border-radius:var(--bt-radius-6xl) var(--bt-radius-6xl) 0 0;box-shadow:${SHADOW};overflow:hidden;">
                    ${toolbar(v.props)}
                  </div>
                </div>
              </td>
              <td style="color:var(--bt-text-emphasis)">${v.desc}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="Button Layout">Button Layout</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Button area üç layout destekler — Dialog ile aynı mantık.</p>
        ${BTN_LAYOUTS.map(bl => `
          <div style="margin-bottom:28px;">
            ${lbl(bl.label)}
            <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:12px;">${bl.desc}</p>
            <div style="padding:32px 24px;background:#e8eaed;border-radius:10px;display:flex;justify-content:center;">
              ${sheetEl({ layout: bl.key })}
            </div>
          </div>
        `).join('')}
        <table class="token-table">
          <thead><tr><th>Layout</th><th>Figma props</th><th>Buton sırası</th><th>Gap</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Vertical · 1</span></td><td>Direction=Vertical, Segments=1</td><td>Primary — tam genişlik</td><td>—</td></tr>
            <tr><td><span class="token-name">Horizontal · 2</span></td><td>Direction=Horizontal, Segments=2</td><td>Ghost (sol) + Primary (sağ)</td><td>12px</td></tr>
            <tr><td><span class="token-name">Vertical · 2</span></td><td>Direction=Vertical, Segments=2</td><td>Primary (üst) + Ghost (alt)</td><td>12px</td></tr>
          </tbody>
        </table>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Özellik</th><th>Figma token</th><th>Değer</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Background</td><td>${tk('Gray/100')}</td><td>#f5f5f5</td></tr>
            <tr><td>Container</td><td>Border Radius (üst)</td><td>${tk('Radius/6xl')}</td><td>28px 28px 0 0</td></tr>
            <tr><td>Container</td><td>Shadow</td><td>${tk('Shadow/lg')}</td><td>0 4px 6px rgba(16,24,40,3%) · 0 12px 16px rgba(16,24,40,8%)</td></tr>
            <tr><td>Grabber</td><td>Width</td><td>—</td><td>72px</td></tr>
            <tr><td>Grabber</td><td>Height</td><td>—</td><td>6px</td></tr>
            <tr><td>Grabber</td><td>Padding V</td><td>${tk('Space/md')}</td><td>8px</td></tr>
            <tr><td>Toolbar bar</td><td>Height</td><td>—</td><td>40px</td></tr>
            <tr><td>Toolbar icon btn</td><td>Size</td><td>—</td><td>40 × 40px</td></tr>
            <tr><td>Toolbar icon btn</td><td>Padding</td><td>${tk('Space/md')}</td><td>8px</td></tr>
            <tr><td>Toolbar Title</td><td>Font</td><td>${tk('Title/lg/Medium')}</td><td>18px / 500 / 24px</td></tr>
            <tr><td>Toolbar Title</td><td>Color</td><td>${tk('Gray/900')}</td><td>#1a1a1a</td></tr>
            <tr><td>Subtitle</td><td>Font</td><td>${tk('Text/sm/Regular')}</td><td>14px / 400 / 16px</td></tr>
            <tr><td>Subtitle</td><td>Color</td><td>${tk('Gray/500')}</td><td>#727272</td></tr>
            <tr><td>Body</td><td>Padding top/sides</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Body</td><td>Padding bottom</td><td>${tk('Space/6xl')}</td><td>32px</td></tr>
            <tr><td>Body</td><td>Gap</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Body title</td><td>Font</td><td>${tk('Text/md/Medium')}</td><td>16px / 500 / 24px</td></tr>
            <tr><td>Body description</td><td>Font</td><td>${tk('Text/sm/Regular')}</td><td>14px / 400 / 16px</td></tr>
            <tr><td>Button area</td><td>Padding top</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Button area</td><td>Padding H</td><td>${tk('Space/3xl')}</td><td>20px</td></tr>
            <tr><td>Button area</td><td>Padding bottom</td><td>${tk('Space/8xl')}</td><td>40px (safe area)</td></tr>
            <tr><td>Button area gap</td><td>Gap</td><td>—</td><td>12px</td></tr>
            <tr><td>Button</td><td>Padding V</td><td>${tk('Space/xl')}</td><td>12px</td></tr>
            <tr><td>Button</td><td>Padding H</td><td>${tk('Space/2xl')}</td><td>16px</td></tr>
            <tr><td>Button</td><td>Border Radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
            <tr><td>Primary button bg</td><td>Color</td><td>${tk('Blue/700')}</td><td>#0d4e97</td></tr>
            <tr><td>Ghost button bg</td><td>Color</td><td>${tk('Gray/100')}</td><td>#f5f5f5</td></tr>
            <tr><td>Home Indicator</td><td>Width</td><td>—</td><td>140px</td></tr>
            <tr><td>Home Indicator</td><td>Height</td><td>—</td><td>6px</td></tr>
            <tr><td>Home Indicator</td><td>Padding V</td><td>${tk('Space/md')}</td><td>8px</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Bottom Sheet usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      return { title, html: overviewHtml };
    }
  },

  'components/accordion': {
    tabs: ['Overview', 'Usage'],
    toc: ['Basic', 'Bordered', 'Icon Types', 'Examples'],
    render: (tab) => {
      const title = 'Accordion';

      // ── Icons (Lucide) ──────────────────────────────────────
      const iScan        = c => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;
      const iChevronDown = c => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
      const iChevronUp   = c => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>`;
      const iPlus        = c => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
      const iX           = c => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;

      // state: 'default' | 'active' | 'disabled'
      // iconType: 'chevron' | 'plus'
      // position: 'single' | 'first' | 'middle' | 'last'
      const accItem = ({ label='Title Text Here', desc='', content='', state='default', iconType='chevron', position='single', id }) => {
        const isOpen     = state === 'active';
        const isDisabled = state === 'disabled';
        const titleC = isDisabled ? '#a3a3a3' : '#1a1a1a';
        const descC  = isDisabled ? '#a3a3a3' : '#a3a3a3';
        const iconC  = isDisabled ? '#a3a3a3' : '#1a1a1a';
        const leftC  = isDisabled ? '#a3a3a3' : '#1a1a1a';
        const cursor = isDisabled ? 'not-allowed' : 'pointer';
        const radMap = { single: '6px', first: '6px 6px 0 0', middle: '0', last: '0 0 6px 6px' };
        const borderR   = radMap[position] || '6px';
        const borderTop = (position === 'middle' || position === 'last') ? 'none' : '1px solid #d4d4d4';
        const borderBot = (position === 'first' || position === 'middle') ? 'none' : '1px solid #d4d4d4';
        const hdrBg     = isOpen ? '#f5f5f5' : '#fff';
        const itemStyle = `background:#fff;border-top:${borderTop};border-bottom:${borderBot};border-left:1px solid #d4d4d4;border-right:1px solid #d4d4d4;border-radius:${borderR};overflow:hidden;`;
        const closedIco = iconType === 'chevron' ? iChevronDown(iconC) : iPlus(iconC);
        const openIco   = iconType === 'chevron' ? iChevronUp(iconC)   : iX(iconC);
        const click     = (isDisabled || !id) ? '' : `onclick="window.toggleAcc('${id}')"`;
        return `
          <div id="${id||''}" data-open="${isOpen?'1':'0'}" style="${itemStyle}">
            <div data-hdr ${click} style="display:flex;align-items:center;padding:8px;gap:4px;cursor:${cursor};user-select:none;background:${hdrBg};">
              <span style="flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;">${iScan(leftC)}</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:14px;font-weight:500;color:${titleC};line-height:16px;">${label}</div>
                ${desc ? `<div style="font-size:12px;color:${descC};line-height:16px;margin-top:1px;">${desc}</div>` : ''}
              </div>
              <span data-ico-c style="display:${isOpen?'none':'inline-flex'};width:24px;height:24px;align-items:center;justify-content:center;">${closedIco}</span>
              <span data-ico-o style="display:${isOpen?'inline-flex':'none'};width:24px;height:24px;align-items:center;justify-content:center;">${openIco}</span>
            </div>
            <div data-body style="padding:0 8px 8px 36px;font-size:14px;color:#727272;line-height:20px;background:#fff;${isOpen?'':'display:none'}">${content}</div>
          </div>`;
      };

      const accGroup = (items) => items.map((item, i) => {
        const n = items.length;
        const pos = n === 1 ? 'single' : i === 0 ? 'first' : i === n-1 ? 'last' : 'middle';
        return accItem({ ...item, position: pos });
      }).join('');

      const tk  = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const lbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;
      const pw  = inner => `<div style="max-width:300px">${inner}</div>`;

      const CS = 'This is the content shown inside the accordion when it\'s active.';
      const CL = 'Head to the "Quick start" guide in the docs. If you\'ve used unstyled libraries before, you\'ll feel at home.';

      const overviewHtml = `
        <p class="page-desc">Accordion lets users show and hide sections of content. Two variants (Basic / Bordered), two icon types (Chevron / Plus-X), three states. Click any item to toggle.</p>

        <div class="preview-box">
          <div style="max-width:420px">
            ${accGroup([
              { label: 'Title Text Here', content: CS, state: 'active',  iconType: 'chevron', id: 'pv1' },
              { label: 'Title Text Here', content: CS, state: 'default', iconType: 'chevron', id: 'pv2' },
              { label: 'Title Text Here', content: CS, state: 'default', iconType: 'chevron', id: 'pv3' },
            ])}
          </div>
        </div>

        <h2 id="Basic">Basic</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Standalone item — not grouped. All four corners rounded, full border.</p>
        <table class="token-table">
          <thead><tr><th>State</th><th style="min-width:280px">Preview</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Default</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'chevron', position: 'single' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Collapsed. Content hidden, icon shows closed state.</td>
            </tr>
            <tr>
              <td><span class="token-name">Active</span></td>
              <td>${pw(accItem({ state: 'active', content: CS, iconType: 'chevron', position: 'single', id: 'bs-act' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Expanded. Content visible, icon inverted (chevron-up or ×).</td>
            </tr>
            <tr>
              <td><span class="token-name">Disabled</span></td>
              <td>${pw(accItem({ state: 'disabled', iconType: 'chevron', position: 'single' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Not interactive. All elements visually muted, cursor not-allowed.</td>
            </tr>
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container · Default</td><td>Background</td><td>${tk('--bt-surface-default')}</td><td>#ffffff</td></tr>
            <tr><td>Container · Active</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
            <tr><td>Container</td><td>Border</td><td>${tk('--bt-border-default')}</td><td>#d4d4d4</td></tr>
            <tr><td>Container</td><td>Border Radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
            <tr><td>Title · Default / Active</td><td>Color</td><td>${tk('--bt-text-default')}</td><td>#1a1a1a</td></tr>
            <tr><td>Title · Disabled</td><td>Color</td><td>${tk('--bt-text-muted')}</td><td>#a3a3a3</td></tr>
            <tr><td>Title</td><td>Font Size / Weight</td><td>${tk('--bt-text-sm')}</td><td>14px / 500</td></tr>
            <tr><td>Description</td><td>Color</td><td>${tk('--bt-text-muted')}</td><td>#a3a3a3</td></tr>
            <tr><td>Description</td><td>Font Size</td><td>${tk('--bt-text-xs')}</td><td>12px</td></tr>
            <tr><td>Content</td><td>Color</td><td>${tk('--bt-text-emphasis')}</td><td>#727272</td></tr>
            <tr><td>Right Icons · Default / Active</td><td>Color</td><td>${tk('--bt-icon-default')}</td><td>#1a1a1a</td></tr>
            <tr><td>Left Icon · Default / Active</td><td>Color</td><td>${tk('--bt-icon-default')}</td><td>#1a1a1a</td></tr>
            <tr><td>Left Icon · Disabled</td><td>Color</td><td>${tk('--bt-icon-muted')}</td><td>#a3a3a3</td></tr>
            <tr><td>Header</td><td>Padding</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
            <tr><td>Content area</td><td>Padding left</td><td>—</td><td>36px (8px + 24px icon + 4px gap)</td></tr>
          </tbody>
        </table>

        <h2 id="Bordered">Bordered</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Used when items are stacked in a group. Position controls which corners are rounded and which borders are shared.</p>
        <table class="token-table">
          <thead><tr><th>Position</th><th style="min-width:280px">Preview</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Single</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'chevron', position: 'single' }))}</td>
              <td style="color:var(--bt-text-emphasis)">One item alone in a group. All four corners rounded.</td>
            </tr>
            <tr>
              <td><span class="token-name">First</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'chevron', position: 'first' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Top item. Top corners rounded; bottom border removed to connect to next.</td>
            </tr>
            <tr>
              <td><span class="token-name">Middle</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'chevron', position: 'middle' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Intermediate item. No rounded corners; top border removed.</td>
            </tr>
            <tr>
              <td><span class="token-name">Last</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'chevron', position: 'last' }))}</td>
              <td style="color:var(--bt-text-emphasis)">Bottom item. Bottom corners rounded; top border removed.</td>
            </tr>
          </tbody>
        </table>

        <h2 id="Icon Types">Icon Types</h2>
        <table class="token-table">
          <thead><tr><th>Type</th><th style="min-width:240px">Default</th><th style="min-width:240px">Active</th><th>Lucide Icons</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Chevron</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'chevron', position: 'single' }))}</td>
              <td>${pw(accItem({ state: 'active', iconType: 'chevron', position: 'single', content: CS, id: 'it-cv' }))}</td>
              <td style="color:var(--bt-text-emphasis)">${tk('chevron-down')} → ${tk('chevron-up')}</td>
            </tr>
            <tr>
              <td><span class="token-name">With Plus</span></td>
              <td>${pw(accItem({ state: 'default', iconType: 'plus', position: 'single' }))}</td>
              <td>${pw(accItem({ state: 'active', iconType: 'plus', position: 'single', content: CS, id: 'it-pl' }))}</td>
              <td style="color:var(--bt-text-emphasis)">${tk('plus')} → ${tk('x')}</td>
            </tr>
          </tbody>
        </table>

        <h2 id="Examples">Examples</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Four interactive examples from Figma. Click any item to toggle.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">

          <div>
            ${lbl('With Chevron · All Closed')}
            ${accGroup([
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'chevron', id: 'e1a' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'chevron', id: 'e1b' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'chevron', id: 'e1c' },
            ])}
          </div>

          <div>
            ${lbl('With Chevron · One Open')}
            ${accGroup([
              { label: 'Title Text Here', desc: 'Description', content: CL, state: 'active',  iconType: 'chevron', id: 'e2a' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'chevron', id: 'e2b' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'chevron', id: 'e2c' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'chevron', id: 'e2d' },
            ])}
          </div>


          <div>
            ${lbl('With Plus · All Closed')}
            ${accGroup([
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'plus', id: 'e4a' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'plus', id: 'e4b' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'plus', id: 'e4c' },
            ])}
          </div>

          <div>
            ${lbl('With Plus · One Open')}
            ${accGroup([
              { label: 'Title Text Here', desc: 'Description', content: CL, state: 'active',  iconType: 'plus', id: 'e5a' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'plus', id: 'e5b' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'plus', id: 'e5c' },
              { label: 'Title Text Here', desc: 'Description', content: CS, state: 'default', iconType: 'plus', id: 'e5d' },
            ])}
          </div>


        </div>

        <script>
          window.toggleAcc = function(id) {
            var el = document.getElementById(id);
            if (!el) return;
            var open = el.getAttribute('data-open') === '1';
            el.setAttribute('data-open', open ? '0' : '1');
            var body = el.querySelector('[data-body]');
            var icC  = el.querySelector('[data-ico-c]');
            var icO  = el.querySelector('[data-ico-o]');
            var hdr = el.querySelector('[data-hdr]');
            if (hdr) hdr.style.background = open ? '#fff' : '#f5f5f5';
            if (body) body.style.display = open ? 'none' : 'block';
            if (icC)  icC.style.display  = open ? 'inline-flex' : 'none';
            if (icO)  icO.style.display  = open ? 'none' : 'inline-flex';
          };
        </script>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Accordion usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      return { title, html: overviewHtml };
    }
  },

  'components/avatar': {
    tabs: ['Overview', 'Usage'],
    toc: ['Types', 'Themes', 'Sizes'],
    render: (tab) => {
      const title = 'Avatar';

      const iconUser = (size, color) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>`;

      const SIZE_CFG = {
        '2xs': { dim: 24, iconSize: 16, fs: 12, token: '--bt-base-sizing-6xl' },
        'xs':  { dim: 28, iconSize: 18, fs: 12, token: '--bt-base-sizing-7xl' },
        'sm':  { dim: 32, iconSize: 20, fs: 12, token: '--bt-base-sizing-8xl' },
        'md':  { dim: 40, iconSize: 22, fs: 14, token: '--bt-base-sizing-10xl' },
        'lg':  { dim: 48, iconSize: 24, fs: 14, token: '--bt-base-sizing-12xl' },
        'xl':  { dim: 56, iconSize: 26, fs: 14, token: '--bt-base-sizing-14xl' },
      };

      const avatarEl = ({ size = 'md', themeColor = 'default', type = 'initials', initials = 'EG' }) => {
        const cfg       = SIZE_CFG[size];
        const bg        = themeColor === 'brand' ? '#0d4e97' : '#e6e6e6';
        const textColor = themeColor === 'brand' ? '#ffffff' : '#1a1a1a';
        const iconColor = themeColor === 'brand' ? '#ffffff' : '#a3a3a3';
        const content = type === 'icon'
          ? iconUser(cfg.iconSize, iconColor)
          : `<span style="font-size:${cfg.fs}px;font-weight:500;color:${textColor};font-family:var(--font);line-height:1;">${initials}</span>`;
        return `<div style="width:${cfg.dim}px;height:${cfg.dim}px;border-radius:9999px;background:${bg};display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">${content}</div>`;
      };

      const SIZES = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'];
      const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

      const overviewHtml = `
        <p class="page-desc">Avatar represents a user or entity with a circular container. It supports Initials or Icon type, in Default or Brand theme, across 6 sizes.</p>

        <div class="preview-box">
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="display:flex;align-items:flex-end;gap:12px;">
              ${SIZES.map(s => avatarEl({ size: s, themeColor: 'default', type: 'initials' })).join('')}
            </div>
            <div style="display:flex;align-items:flex-end;gap:12px;">
              ${SIZES.map(s => avatarEl({ size: s, themeColor: 'brand', type: 'initials' })).join('')}
            </div>
            <div style="display:flex;align-items:flex-end;gap:12px;">
              ${SIZES.map(s => avatarEl({ size: s, themeColor: 'default', type: 'icon' })).join('')}
            </div>
            <div style="display:flex;align-items:flex-end;gap:12px;">
              ${SIZES.map(s => avatarEl({ size: s, themeColor: 'brand', type: 'icon' })).join('')}
            </div>
          </div>
        </div>

        <h2 id="Types">Types</h2>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Preview</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Initials</span></td>
              <td><div style="display:flex;gap:8px;align-items:center;">${avatarEl({ size: 'md', themeColor: 'default', type: 'initials' })}${avatarEl({ size: 'md', themeColor: 'brand', type: 'initials' })}</div></td>
              <td style="color:var(--bt-text-emphasis)">Displays the user's initials (max 2 characters).</td>
            </tr>
            <tr>
              <td><span class="token-name">Icon</span></td>
              <td><div style="display:flex;gap:8px;align-items:center;">${avatarEl({ size: 'md', themeColor: 'default', type: 'icon' })}${avatarEl({ size: 'md', themeColor: 'brand', type: 'icon' })}</div></td>
              <td style="color:var(--bt-text-emphasis)">Uses the circle-user-round icon as a generic user placeholder.</td>
            </tr>
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Initials · 2xs / xs / sm</td><td>Font Size / Line Height</td><td>${tk('--bt-text-xs')}</td><td>12px / 16px</td></tr>
            <tr><td>Initials · md / lg / xl</td><td>Font Size / Line Height</td><td>${tk('--bt-text-sm')}</td><td>14px / 16px</td></tr>
            <tr><td>Initials</td><td>Font Weight</td><td>Medium</td><td>500</td></tr>
            <tr><td>Icon</td><td>Name (Lucide)</td><td>circle-user-round</td><td>—</td></tr>
          </tbody>
        </table>

        <h2 id="Themes">Themes</h2>
        <table class="token-table">
          <thead><tr><th>Theme</th><th>Initials</th><th>Icon</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Default</span></td>
              <td>${avatarEl({ size: 'md', themeColor: 'default', type: 'initials' })}</td>
              <td>${avatarEl({ size: 'md', themeColor: 'default', type: 'icon' })}</td>
              <td style="color:var(--bt-text-emphasis)">Gray background with dark text/muted icon. For generic or unassigned contexts.</td>
            </tr>
            <tr>
              <td><span class="token-name">Brand</span></td>
              <td>${avatarEl({ size: 'md', themeColor: 'brand', type: 'initials' })}</td>
              <td>${avatarEl({ size: 'md', themeColor: 'brand', type: 'icon' })}</td>
              <td style="color:var(--bt-text-emphasis)">Brand blue background with white text/icon. For identified or active users.</td>
            </tr>
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Shape</td><td>${tk('--bt-radius-full')}</td><td>9999px</td></tr>
            <tr><td>Container · Default</td><td>Background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
            <tr><td>Container · Brand</td><td>Background</td><td>${tk('--bt-surface-brand-contrast-default')}</td><td>#0d4e97</td></tr>
            <tr><td>Initials · Default</td><td>Text Color</td><td>${tk('--bt-text-default')}</td><td>#1a1a1a</td></tr>
            <tr><td>Initials · Brand</td><td>Text Color</td><td>${tk('--bt-text-inverted')}</td><td>#ffffff</td></tr>
            <tr><td>Icon · Default</td><td>Stroke Color</td><td>${tk('--bt-icon-muted')}</td><td>#a3a3a3</td></tr>
            <tr><td>Icon · Brand</td><td>Stroke Color</td><td>${tk('--bt-icon-inverted')}</td><td>#ffffff</td></tr>
          </tbody>
        </table>

        <h2 id="Sizes">Sizes</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Dimension</th><th>Default</th><th>Brand</th></tr></thead>
          <tbody>
            ${SIZES.map(s => `
            <tr>
              <td><span class="token-name">${s}</span></td>
              <td>${SIZE_CFG[s].dim}px</td>
              <td><div style="display:flex;gap:8px;">${avatarEl({ size: s, themeColor: 'default', type: 'initials' })}${avatarEl({ size: s, themeColor: 'default', type: 'icon' })}</div></td>
              <td><div style="display:flex;gap:8px;">${avatarEl({ size: s, themeColor: 'brand', type: 'initials' })}${avatarEl({ size: s, themeColor: 'brand', type: 'icon' })}</div></td>
            </tr>`).join('')}
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Size</th><th>Dimension</th><th>Token</th></tr></thead>
          <tbody>
            ${SIZES.map(s => `
            <tr>
              <td><span class="token-name">${s}</span></td>
              <td>${SIZE_CFG[s].dim} × ${SIZE_CFG[s].dim}px</td>
              <td>${tk(SIZE_CFG[s].token)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Avatar usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      return { title, html: overviewHtml };
    }
  },

  'components/badge': {
    tabs: ['Overview', 'Usage'],
    toc: ['Types', 'Custom Colors', 'With Icons'],
    render: (tab) => {
      const title = 'Badge';

      // Loader icon (Lucide loader-2), matches Figma Icon/loader asset
      const iLoader = (color, size = 16) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`;

      // Figma properties: Type × Theme Color × State=Default
      // Layout tokens: gap=var(--space/2xs,2px), px=var(--space/md,8px), py=var(--space/2xs,2px), radius=var(--radius/full,9999px)
      // Typography: font/family/text, font-normal (400), font/size/text-xs (12px), font/line-height/text-lh-xs (16px)
      const TYPE_CFG = {
        solid:   { bg: '#0d4e97',    border: '',                    text: '#ffffff', icon: '#ffffff' }, // Surface Colors/Brand/--bt-surface-brand-contrast-default + --bt-text-inverted
        flat:    { bg: '#f5f5f5',    border: '',                    text: '#1a1a1a', icon: '#1a1a1a' }, // --bt-surface-primary-subtle + --bt-text-default
        outline: { bg: '#f5f5f5',    border: '1px solid #d4d4d4',   text: '#1a1a1a', icon: '#1a1a1a' }, // --bt-surface-primary-subtle + --bt-border-default + --bt-text-default
        ghost:   { bg: 'transparent', border: '',                   text: '#1a1a1a', icon: '#1a1a1a' }, // no surface + --bt-text-default
      };

      const BASE_STYLE = `display:inline-flex;align-items:center;gap:2px;padding:2px 8px;border-radius:9999px;font-size:12px;font-weight:400;line-height:16px;white-space:nowrap;font-family:var(--font);`;

      const badgeEl = ({ type = 'solid', label = 'Badge', leftIcon = false, rightIcon = false }) => {
        const c = TYPE_CFG[type];
        const border = c.border ? `border:${c.border};` : '';
        return `<span style="${BASE_STYLE}background:${c.bg};${border}color:${c.text};">${leftIcon ? iLoader(c.icon) : ''}${label}${rightIcon ? iLoader(c.icon) : ''}</span>`;
      };

      // Figma: BadgeCustomColors — Type=Basic|Colored × ThemeColor=Blue|Green|Yellow|Red|Sky|Purple|Cyan|Emerald|Orange
      // Basic:   color-100 bg + gray/300 border (#d4d4d4) + gray/900 text (#1a1a1a)
      // Colored: color-100 bg + color-700 border + color-700 text
      const COLOR_MAP = {
        blue:    { bg: '#e2edfc', accent: '#0d4e97' }, // --blue/100, --blue/700
        green:   { bg: '#daede5', accent: '#2d584b' }, // --green/100, --green/700
        yellow:  { bg: '#f9f2ce', accent: '#aa820a' }, // --yellow/100, --yellow/700
        red:     { bg: '#fde6e6', accent: '#b31d38' }, // --red/100, --red/700
        sky:     { bg: '#e0f2fe', accent: '#0369a1' }, // --sky/100, --sky/700
        purple:  { bg: '#f3e8ff', accent: '#7e22ce' }, // --purple/100, --purple/700
        cyan:    { bg: '#cffafe', accent: '#0e7490' }, // --cyan/100, --cyan/700
        emerald: { bg: '#d1fae5', accent: '#047857' }, // --emerald/100, --emerald/700
        orange:  { bg: '#ffedd5', accent: '#c2410c' }, // --orange/100, --orange/700
      };

      const COLORS = ['blue','green','yellow','red','sky','purple','cyan','emerald','orange'];
      const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
      const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
      const swatch = hex => `<span style="display:inline-flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:2px;background:${hex};border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></span><code style="font-size:11px;font-family:var(--mono)">${hex}</code></span>`;
      const secLbl = t => `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-muted);margin-bottom:8px;">${t}</div>`;

      const colorBadgeEl = ({ color, type = 'basic', label }) => {
        const c = COLOR_MAP[color];
        const border = type === 'colored' ? `1px solid ${c.accent}` : '1px solid #d4d4d4';
        const text   = type === 'colored' ? c.accent : '#1a1a1a';
        return `<span style="${BASE_STYLE}background:${c.bg};border:${border};color:${text};">${label || capitalize(color)}</span>`;
      };

      const overviewHtml = `
        <p class="page-desc">Compact labels for status, category, or metadata. Four type variants — Solid, Flat, Outline, Ghost — plus nine custom color options in Basic and Colored styles.</p>

        <div class="preview-box" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
          ${badgeEl({ type: 'solid',   label: 'Solid' })}
          ${badgeEl({ type: 'flat',    label: 'Flat' })}
          ${badgeEl({ type: 'outline', label: 'Outline' })}
          ${badgeEl({ type: 'ghost',   label: 'Ghost' })}
          ${colorBadgeEl({ color: 'blue',  type: 'basic' })}
          ${colorBadgeEl({ color: 'green', type: 'colored' })}
          ${colorBadgeEl({ color: 'red',   type: 'colored' })}
        </div>

        <h2 id="Types">Types</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Figma properties: <strong>Type</strong> × <strong>Theme Color</strong>. Only the Default state is available.</p>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Theme Color</th><th style="min-width:120px">Preview</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Solid</span></td>
              <td>Primary</td>
              <td>${badgeEl({ type: 'solid', label: 'Badge' })}</td>
              <td style="color:var(--bt-text-emphasis)">Brand-filled background with inverted text. Highest visual weight.</td>
            </tr>
            <tr>
              <td><span class="token-name">Flat</span></td>
              <td>Secondary</td>
              <td>${badgeEl({ type: 'flat', label: 'Badge' })}</td>
              <td style="color:var(--bt-text-emphasis)">Subtle gray fill, no border. Low visual weight for secondary labels.</td>
            </tr>
            <tr>
              <td><span class="token-name">Outline</span></td>
              <td>Tertiary</td>
              <td>${badgeEl({ type: 'outline', label: 'Badge' })}</td>
              <td style="color:var(--bt-text-emphasis)">Gray fill with default border. Use when differentiation from the surface is needed.</td>
            </tr>
            <tr>
              <td><span class="token-name">Ghost</span></td>
              <td>Ghost</td>
              <td>${badgeEl({ type: 'ghost', label: 'Badge' })}</td>
              <td style="color:var(--bt-text-emphasis)">No background, no border. Minimal presence — for dense or nested contexts.</td>
            </tr>
          </tbody>
        </table>
        <table class="token-table" style="margin-top:12px">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Horizontal Padding</td><td>${tk('--space/md')}</td><td>8px</td></tr>
            <tr><td>Container</td><td>Vertical Padding</td><td>${tk('--space/2xs')}</td><td>2px</td></tr>
            <tr><td>Container</td><td>Gap</td><td>${tk('--space/2xs')}</td><td>2px</td></tr>
            <tr><td>Container</td><td>Border Radius</td><td>${tk('--radius/full')}</td><td>9999px</td></tr>
            <tr><td>Solid · Background</td><td>Fill</td><td>${tk('--bt-surface-brand-contrast-default')}</td><td>#0d4e97</td></tr>
            <tr><td>Flat · Background</td><td>Fill</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
            <tr><td>Outline · Background</td><td>Fill</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
            <tr><td>Outline · Border</td><td>Stroke</td><td>${tk('--bt-border-default')}</td><td>#d4d4d4</td></tr>
            <tr><td>Solid · Text / Icon</td><td>Color</td><td>${tk('--bt-text-inverted')} / ${tk('--bt-icon-inverted')}</td><td>#ffffff</td></tr>
            <tr><td>Flat / Outline / Ghost · Text / Icon</td><td>Color</td><td>${tk('--bt-text-default')} / ${tk('--bt-icon-default')}</td><td>#1a1a1a</td></tr>
            <tr><td>Label</td><td>Font Size</td><td>${tk('--font/size/text-xs')}</td><td>12px</td></tr>
            <tr><td>Label</td><td>Font Weight</td><td>Regular</td><td>400</td></tr>
            <tr><td>Label</td><td>Line Height</td><td>${tk('--font/line-height/text-lh-xs')}</td><td>16px</td></tr>
            <tr><td>Icon</td><td>Size</td><td>—</td><td>16 × 16px</td></tr>
          </tbody>
        </table>

        <h2 id="Custom Colors">Custom Colors</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Figma properties: <strong>Type</strong> (Basic / Colored) × <strong>Theme Color</strong>. Basic uses a gray border with dark text; Colored uses a color-matched border and text.</p>

        <div style="margin-bottom:12px;">
          ${secLbl('Basic — color-100 bg · gray/300 border · gray/900 text')}
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${COLORS.map(c => colorBadgeEl({ color: c, type: 'basic' })).join('')}
          </div>
        </div>
        <div style="margin-bottom:24px;">
          ${secLbl('Colored — color-100 bg · color-700 border · color-700 text')}
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${COLORS.map(c => colorBadgeEl({ color: c, type: 'colored' })).join('')}
          </div>
        </div>

        <table class="token-table">
          <thead><tr><th>Color</th><th>BG (color-100)</th><th>Accent (color-700)</th><th>Basic preview</th><th>Colored preview</th></tr></thead>
          <tbody>
            ${COLORS.map(c => {
              const cm = COLOR_MAP[c];
              return `<tr>
                <td><span class="token-name">${capitalize(c)}</span></td>
                <td>${swatch(cm.bg)}</td>
                <td>${swatch(cm.accent)}</td>
                <td>${colorBadgeEl({ color: c, type: 'basic' })}</td>
                <td>${colorBadgeEl({ color: c, type: 'colored' })}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>

        <h2 id="With Icons">With Icons</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:16px;">Controlled via <strong>Show Left Icon</strong> and <strong>Show Right Icon</strong> properties in Figma. Icon is 16×16px and inherits the text color.</p>
        <table class="token-table">
          <thead><tr><th>Configuration</th><th style="min-width:320px">Preview</th></tr></thead>
          <tbody>
            <tr>
              <td style="color:var(--bt-text-emphasis)">Left icon only</td>
              <td><div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${badgeEl({ type: 'solid',   label: 'Badge', leftIcon: true })}
                ${badgeEl({ type: 'flat',    label: 'Badge', leftIcon: true })}
                ${badgeEl({ type: 'outline', label: 'Badge', leftIcon: true })}
                ${badgeEl({ type: 'ghost',   label: 'Badge', leftIcon: true })}
              </div></td>
            </tr>
            <tr>
              <td style="color:var(--bt-text-emphasis)">Right icon only</td>
              <td><div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${badgeEl({ type: 'solid',   label: 'Badge', rightIcon: true })}
                ${badgeEl({ type: 'flat',    label: 'Badge', rightIcon: true })}
                ${badgeEl({ type: 'outline', label: 'Badge', rightIcon: true })}
                ${badgeEl({ type: 'ghost',   label: 'Badge', rightIcon: true })}
              </div></td>
            </tr>
            <tr>
              <td style="color:var(--bt-text-emphasis)">Both icons</td>
              <td><div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${badgeEl({ type: 'solid',   label: 'Badge', leftIcon: true, rightIcon: true })}
                ${badgeEl({ type: 'flat',    label: 'Badge', leftIcon: true, rightIcon: true })}
                ${badgeEl({ type: 'outline', label: 'Badge', leftIcon: true, rightIcon: true })}
                ${badgeEl({ type: 'ghost',   label: 'Badge', leftIcon: true, rightIcon: true })}
              </div></td>
            </tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Badge usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      return { title, html: overviewHtml };
    }
  },

  'components/switch': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: ['Sizes', 'States', 'Label Position', 'Anatomy'],
    render: (tab) => {
      const title = 'Switch';
      const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

      // ── Size configs — read directly from Figma plugin (figma_execute) ──────
      // Track cornerRadius = 4 (Radius/sm), padding = 2px all sides
      // Thumb is a square: size = trackH - 4, cornerRadius = 4 (Radius/sm)
      // thumbOff = 2 (paddingLeft), thumbOn = trackW - 2 - thumbSize (paddingRight)
      const trackCfg = {
        sm: { w: 32, h: 20, thumb: 16, thumbOff: 2, thumbOn: 14 },
        md: { w: 40, h: 24, thumb: 20, thumbOff: 2, thumbOn: 18 },
        lg: { w: 48, h: 28, thumb: 24, thumbOff: 2, thumbOn: 22 },
      };

      // ── Token map — Figma variable → CSS custom property ───────────────────
      // Selected track:   Surface Colors/Brand/--bt-surface-brand-contrast-default  → --bt-surface-brand   (#0d4e97)
      // Sel Disabled:     Surface Colors/Brand/--bt-surface-brand-contrast-muted    → --bt-blue-200        (#bedbf9)
      // Unselected track: Surface Colors Primary/--bt-surface-primary-emphasis      → --bt-surface-emphasis(#d4d4d4)
      // Unsel Disabled:   Surface Colors Primary/--bt-surface-primary-muted         → --bt-surface-muted   (#e6e6e6)
      // Thumb:            Surface Colors Primary/--bt-surface-primary-default       → --bt-surface-default (#ffffff)
      // Focus/primary:    Focus Ring/primary  → box-shadow 0 0 0 3px #0D4E973D
      // Focus/neutral:    Focus Ring/neutral  → box-shadow 0 0 0 3px #D4D4D43D
      // Thumb shadow:     Shadow/md           → double drop-shadow
      const trackColors = {
        'selected-default':    { track: 'var(--bt-surface-brand)',     thumb: 'var(--bt-surface-default)' },
        'selected-focused':    { track: 'var(--bt-surface-brand)',     thumb: 'var(--bt-surface-default)', ring: '0 0 0 3px rgba(13,78,151,0.24)' },
        'selected-disabled':   { track: 'var(--bt-blue-200)',          thumb: 'var(--bt-surface-default)' },
        'unselected-default':  { track: 'var(--bt-surface-emphasis)',  thumb: 'var(--bt-surface-default)' },
        'unselected-focused':  { track: 'var(--bt-surface-emphasis)',  thumb: 'var(--bt-surface-default)', ring: '0 0 0 3px rgba(212,212,212,0.24)' },
        'unselected-disabled': { track: 'var(--bt-surface-muted)',     thumb: 'var(--bt-surface-muted)' },
      };

      // Shadow/md: offset(0,2) radius:4 + offset(0,4) radius:8
      const thumbShadow = '0 2px 4px rgba(16,24,40,0.06),0 4px 8px rgba(16,24,40,0.10)';

      const switchEl = (size, mode, state) => {
        const c = trackCfg[size];
        const { track, thumb, ring } = trackColors[`${mode}-${state}`] || trackColors['unselected-default'];
        const isOn   = mode === 'selected';
        const thumbX = isOn ? c.thumbOn : c.thumbOff;
        return `<div style="display:inline-flex;align-items:center;flex-shrink:0;">
          <div style="width:${c.w}px;height:${c.h}px;border-radius:4px;background:${track};position:relative;padding:2px;box-sizing:border-box;${ring ? `box-shadow:${ring};` : ''}">
            <div style="position:absolute;top:2px;left:${thumbX}px;width:${c.thumb}px;height:${c.thumb}px;border-radius:4px;background:${thumb};box-shadow:${thumbShadow};"></div>
          </div>
        </div>`;
      };

      // ── Full switch row with label (Label/md/Regular = 16px/400/24px) ───────
      // Text/sm/Regular = 14px/400/16px for description
      // Text Colors/--bt-text-default  → --bt-text-default  (#1a1a1a)
      // Text Colors/Brand/--bt-text-brand-contrast-default → --bt-text-brand (#0d4e97)
      // Text Colors/--bt-text-emphasis → --bt-text-emphasis (#727272)
      const switchRow = (mode, state, side = 'right') => {
        const sw = switchEl('md', mode, state);
        const isDisabled = state === 'disabled';
        const labelColor = isDisabled ? 'var(--bt-text-muted)' : 'var(--bt-text-default)';
        const reqColor   = isDisabled ? 'var(--bt-text-muted)' : 'var(--bt-text-brand)';
        const descColor  = isDisabled ? 'var(--bt-text-muted)' : 'var(--bt-text-emphasis)';
        const labelBlock = `<div style="display:flex;flex-direction:column;gap:2px;flex:1;">
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
            <span style="font-size:16px;font-weight:400;line-height:24px;color:${labelColor};font-family:var(--font);">Label Here</span>
            <span style="font-size:14px;font-weight:400;color:${reqColor};font-family:var(--font);">(Required Field)</span>
          </div>
          <span style="font-size:14px;font-weight:400;line-height:16px;color:${descColor};font-family:var(--font);">Description for additional information here.</span>
        </div>`;
        const items = side === 'left'
          ? [labelBlock, `<div style="flex-shrink:0;">${sw}</div>`]
          : [`<div style="flex-shrink:0;">${sw}</div>`, labelBlock];
        return `<div style="display:flex;align-items:center;justify-content:space-between;gap:var(--bt-space-xs);width:369px;">${items.join('')}</div>`;
      };

      const stateChip = (label, bg) =>
        `<span style="display:inline-block;padding:2px 10px;border-radius:9999px;background:${bg};font-size:11px;font-weight:600;letter-spacing:.04em;line-height:18px;color:#fff;font-family:var(--font);">${label}</span>`;

      // ── Overview ──────────────────────────────────────────────────────────────
      const overviewHtml = `
        <p class="page-desc">Switch, tek bir ayarı açık/kapalı konumuna getiren toggle kontrolüdür. Üç boyut (sm/md/lg), üç durum (Default/Focused/Disabled) ve iki etiket konumu ile gelir.</p>

        <h2 id="Sizes">Sizes</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:20px;">Switch üç boyutta gelir — sm, md ve lg. Soldaki her çiftte ilki Unselected, ikincisi Selected durumunu gösterir.</p>
        <div style="border:1px solid var(--bt-border-muted);border-radius:10px;overflow:hidden;margin-bottom:32px;">
          <div style="background:var(--bt-surface-subtle);padding:24px;display:flex;gap:40px;align-items:center;flex-wrap:wrap;">
            ${['sm','md','lg'].map(s => `
              <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
                <div style="display:flex;gap:12px;align-items:center;">
                  ${switchEl(s,'unselected','default')}
                  ${switchEl(s,'selected','default')}
                </div>
                <span style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-emphasis);font-family:var(--font);">${s}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <table class="token-table" style="margin-bottom:40px;">
          <thead><tr><th>Size</th><th>Track W × H</th><th>Thumb Ø</th><th>Thumb X (Off / On)</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">sm</span></td><td>32 × 20px</td><td>16 × 16px</td><td>2px / 14px</td></tr>
            <tr><td><span class="token-name">md</span></td><td>40 × 24px</td><td>20 × 20px</td><td>2px / 18px</td></tr>
            <tr><td><span class="token-name">lg</span></td><td>48 × 28px</td><td>24 × 24px</td><td>2px / 22px</td></tr>
          </tbody>
        </table>

        <h2 id="States">States</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:20px;">Her mod (Unselected / Selected) üç durumu destekler: Default, Focused ve Disabled.</p>
        <div style="border:1px solid var(--bt-border-muted);border-radius:10px;overflow:hidden;margin-bottom:16px;">
          <div style="padding:10px 16px;border-bottom:1px solid var(--bt-border-muted);background:var(--bt-surface-default);">
            <span style="font-size:12px;font-weight:600;color:var(--bt-text-default);">Unselected (Off)</span>
          </div>
          <div style="background:var(--bt-surface-subtle);padding:20px;display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
            ${[['Default','default','#535353'],['Focused','focused','#0e62bb'],['Disabled','disabled','#a3a3a3']].map(([lbl,state,bg]) => `
              <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
                ${stateChip(lbl, bg)}
                ${switchEl('md','unselected',state)}
              </div>
            `).join('')}
          </div>
        </div>
        <div style="border:1px solid var(--bt-border-muted);border-radius:10px;overflow:hidden;margin-bottom:32px;">
          <div style="padding:10px 16px;border-bottom:1px solid var(--bt-border-muted);background:var(--bt-surface-default);">
            <span style="font-size:12px;font-weight:600;color:var(--bt-text-default);">Selected (On)</span>
          </div>
          <div style="background:var(--bt-surface-subtle);padding:20px;display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
            ${[['Default','default','#535353'],['Focused','focused','#0e62bb'],['Disabled','disabled','#a3a3a3']].map(([lbl,state,bg]) => `
              <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
                ${stateChip(lbl, bg)}
                ${switchEl('md','selected',state)}
              </div>
            `).join('')}
          </div>
        </div>
        <table class="token-table" style="margin-bottom:40px;">
          <thead><tr><th>State</th><th>Track — Unselected</th><th>Track — Selected</th><th>Thumb</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Default</span></td><td>${tk('--bt-surface-emphasis')} #d4d4d4</td><td>${tk('--bt-surface-brand')} #0d4e97</td><td>${tk('--bt-surface-default')} #ffffff</td></tr>
            <tr><td><span class="token-name">Focused</span></td><td>${tk('--bt-surface-emphasis')} + Focus Ring/neutral</td><td>${tk('--bt-surface-brand')} + Focus Ring/primary</td><td>${tk('--bt-surface-default')} #ffffff</td></tr>
            <tr><td><span class="token-name">Disabled</span></td><td>${tk('--bt-surface-muted')} #e6e6e6</td><td>${tk('--bt-blue-200')} #bedbf9</td><td>${tk('--bt-surface-muted')} #e6e6e6</td></tr>
          </tbody>
        </table>

        <h2 id="Label Position">Label Position</h2>
        <p style="font-size:13px;color:var(--bt-text-emphasis);margin-bottom:20px;">Etiket switchin soluna (Label Side=Left) ya da sağına (Label Side=Right) yerleştirilebilir. Label fontu ${tk('Label/md/Regular')} (16px/400/24px), description fontu ${tk('Text/sm/Regular')} (14px/400/16px).</p>
        <div style="border:1px solid var(--bt-border-muted);border-radius:10px;overflow:hidden;margin-bottom:40px;">
          <div style="background:var(--bt-surface-subtle);padding:24px;display:flex;flex-direction:column;gap:0;">
            ${[
              ['Unselected · Label Right', 'unselected', 'default',  'right'],
              ['Selected · Label Right',   'selected',   'default',  'right'],
              ['Disabled · Label Right',   'selected',   'disabled', 'right'],
              ['Unselected · Label Left',  'unselected', 'default',  'left'],
              ['Selected · Label Left',    'selected',   'default',  'left'],
              ['Disabled · Label Left',    'unselected', 'disabled', 'left'],
            ].map(([lbl,mode,state,side],i) => `
              <div style="padding:12px 0;${i > 0 ? 'border-top:1px solid var(--bt-border-muted);' : ''}">
                <div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--bt-text-emphasis);margin-bottom:8px;font-family:var(--font);">${lbl}</div>
                ${switchRow(mode, state, side)}
              </div>
            `).join('')}
          </div>
        </div>

        <h2 id="Anatomy">Anatomy</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Figma Variable</th><th>CSS Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td rowspan="3">Track — Selected</td><td>Background</td><td>${tk('Surface Colors/Brand/--bt-surface-brand-contrast-default')}</td><td>${tk('--bt-surface-brand')}</td><td>#0d4e97</td></tr>
            <tr><td>Background — Disabled</td><td>${tk('Surface Colors/Brand/--bt-surface-brand-contrast-muted')}</td><td>${tk('--bt-blue-200')}</td><td>#bedbf9</td></tr>
            <tr><td>Border Radius</td><td>${tk('Radius/sm')}</td><td>—</td><td>4px</td></tr>
            <tr><td rowspan="3">Track — Unselected</td><td>Background</td><td>${tk('Surface Colors Primary/--bt-surface-primary-emphasis')}</td><td>${tk('--bt-surface-emphasis')}</td><td>#d4d4d4</td></tr>
            <tr><td>Background — Disabled</td><td>${tk('Surface Colors Primary/--bt-surface-primary-muted')}</td><td>${tk('--bt-surface-muted')}</td><td>#e6e6e6</td></tr>
            <tr><td>Border Radius</td><td>${tk('Radius/sm')}</td><td>—</td><td>4px</td></tr>
            <tr><td>Track Padding</td><td>All sides</td><td>${tk('Space/2xs')}</td><td>${tk('--bt-space-2xs')}</td><td>2px</td></tr>
            <tr><td rowspan="3">Thumb</td><td>Background</td><td>${tk('Surface Colors Primary/--bt-surface-primary-default')}</td><td>${tk('--bt-surface-default')}</td><td>#ffffff</td></tr>
            <tr><td>Border Radius</td><td>${tk('Radius/sm')}</td><td>—</td><td>4px</td></tr>
            <tr><td>Shadow</td><td>${tk('Shadow/md')}</td><td>—</td><td>0 2px 4px #1018280F, 0 4px 8px #1018281A</td></tr>
            <tr><td>Focus Ring — Selected</td><td>Box Shadow</td><td>${tk('Focus Ring/primary')}</td><td>—</td><td>0 0 0 3px rgba(13,78,151,0.24)</td></tr>
            <tr><td>Focus Ring — Unselected</td><td>Box Shadow</td><td>${tk('Focus Ring/neutral')}</td><td>—</td><td>0 0 0 3px rgba(212,212,212,0.24)</td></tr>
            <tr><td rowspan="2">Label</td><td>Font</td><td>${tk('Label/md/Regular')}</td><td>—</td><td>Geist 16px / 400 / 24px</td></tr>
            <tr><td>Color</td><td>${tk('Text Colors/--bt-text-default')}</td><td>${tk('--bt-text-default')}</td><td>#1a1a1a</td></tr>
            <tr><td>Required Field</td><td>Color</td><td>${tk('Text Colors/Brand/--bt-text-brand-contrast-default')}</td><td>${tk('--bt-text-brand')}</td><td>#0d4e97</td></tr>
            <tr><td rowspan="2">Description</td><td>Font</td><td>${tk('Text/sm/Regular')}</td><td>—</td><td>Geist 14px / 400 / 16px</td></tr>
            <tr><td>Color</td><td>${tk('Text Colors/--bt-text-emphasis')}</td><td>${tk('--bt-text-emphasis')}</td><td>#727272</td></tr>
            <tr><td>Label ↔ Switch gap</td><td>Gap</td><td>${tk('Space/xs')}</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
            <tr><td>Track border radius</td><td>Border Radius</td><td>—</td><td>—</td><td>9999px (pill)</td></tr>
            <tr><td>Row height</td><td>Height</td><td>—</td><td>—</td><td>44px</td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `
        <p class="page-desc">Switch kullanım kuralları — ne zaman toggle, ne zaman checkbox kullanılmalı?</p>
        <h2 id="Do">Do</h2>
        <ul>
          <li>Switch'i anlık efektli ayarlar için kullan (Wi-Fi, bildirimler, karanlık mod gibi).</li>
          <li>Etiket her zaman açık ve net olsun — switch durumunu açıklayan bir fiil ya da isim kullan.</li>
          <li>Label Side'ı ekran genişliğine ve form düzenine göre seç.</li>
          <li>Disabled durumunda neden devre dışı olduğunu yakınında açıkla.</li>
        </ul>
        <h2 id="Dont">Don't</h2>
        <ul>
          <li>Formlarda birden fazla seçim gerektiren durumlarda switch kullanma — Checkbox tercih et.</li>
          <li>Switch değişikliği kaydet/onayla aksiyonu gerektirmemeli; değişiklik anlık uygulanmalı.</li>
          <li>Switch etiketini "On/Off" gibi durumu tekrar eden ifadelerle doldurma.</li>
          <li>Aynı formda sm, md ve lg boyutlarını birlikte kullanma — boyutu sabit tut.</li>
        </ul>
        <h2 id="Switch vs Checkbox">Switch vs Checkbox</h2>
        <table class="token-table">
          <thead><tr><th>Kriter</th><th>Switch</th><th>Checkbox</th></tr></thead>
          <tbody>
            <tr><td>Etki zamanı</td><td>Anlık</td><td>Form submit sonrası</td></tr>
            <tr><td>Seçim sayısı</td><td>Tekil (açık/kapalı)</td><td>Çoklu olabilir</td></tr>
            <tr><td>Kullanım bağlamı</td><td>Ayarlar, tercihler</td><td>Formlar, listeler</td></tr>
          </tbody>
        </table>
      `};

      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Figma ASSK App variable'larından çıkarılan Switch token değerleri.</p>
        <h2 id="Tokens">Token Reference</h2>
        <table class="token-table">
          <thead><tr><th>Figma Variable</th><th>CSS Token</th><th>Value</th><th>Kullanım</th></tr></thead>
          <tbody>
            <tr><td>${tk('Surface Colors/Brand/--bt-surface-brand-contrast-default')}</td><td>${tk('--bt-surface-brand')}</td><td>#0d4e97</td><td>Track — Selected Default/Focused</td></tr>
            <tr><td>${tk('Surface Colors/Brand/--bt-surface-brand-contrast-muted')}</td><td>${tk('--bt-blue-200')}</td><td>#bedbf9</td><td>Track — Selected Disabled</td></tr>
            <tr><td>${tk('Surface Colors Primary/--bt-surface-primary-emphasis')}</td><td>${tk('--bt-surface-emphasis')}</td><td>#d4d4d4</td><td>Track — Unselected Default/Focused</td></tr>
            <tr><td>${tk('Surface Colors Primary/--bt-surface-primary-muted')}</td><td>${tk('--bt-surface-muted')}</td><td>#e6e6e6</td><td>Track — Unselected Disabled</td></tr>
            <tr><td>${tk('Surface Colors Primary/--bt-surface-primary-default')}</td><td>${tk('--bt-surface-default')}</td><td>#ffffff</td><td>Thumb tüm durumlar</td></tr>
            <tr><td>${tk('Shadow/md')}</td><td>—</td><td>double drop-shadow</td><td>Thumb gölgesi</td></tr>
            <tr><td>${tk('Focus Ring/primary')}</td><td>—</td><td>0 0 0 3px #0D4E973D</td><td>Focus ring — Selected</td></tr>
            <tr><td>${tk('Focus Ring/neutral')}</td><td>—</td><td>0 0 0 3px #D4D4D43D</td><td>Focus ring — Unselected</td></tr>
            <tr><td>${tk('Text Colors/--bt-text-default')}</td><td>${tk('--bt-text-default')}</td><td>#1a1a1a</td><td>Label metni</td></tr>
            <tr><td>${tk('Text Colors/Brand/--bt-text-brand-contrast-default')}</td><td>${tk('--bt-text-brand')}</td><td>#0d4e97</td><td>Required Field metni</td></tr>
            <tr><td>${tk('Text Colors/--bt-text-emphasis')}</td><td>${tk('--bt-text-emphasis')}</td><td>#727272</td><td>Description metni</td></tr>
            <tr><td>${tk('Label/md/Regular')}</td><td>—</td><td>Geist 16px/400/24px</td><td>Label tipografisi</td></tr>
            <tr><td>${tk('Text/sm/Regular')}</td><td>—</td><td>Geist 14px/400/16px</td><td>Description tipografisi</td></tr>
            <tr><td>${tk('Space/xs')}</td><td>${tk('--bt-space-xs')}</td><td>4px</td><td>Label ↔ Switch gap</td></tr>
            <tr><td>${tk('Space/2xs')}</td><td>${tk('--bt-space-2xs')}</td><td>2px</td><td>Label ↔ Description gap</td></tr>
          </tbody>
        </table>
        <h2 id="Size Specs">Size Specs</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Track W</th><th>Track H</th><th>Thumb Ø</th><th>Thumb X (Off / On)</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">sm</span></td><td>32px</td><td>20px</td><td>16 × 16px</td><td>2px / 14px</td></tr>
            <tr><td><span class="token-name">md</span></td><td>40px</td><td>24px</td><td>20 × 20px</td><td>2px / 18px</td></tr>
            <tr><td><span class="token-name">lg</span></td><td>48px</td><td>28px</td><td>24 × 24px</td><td>2px / 22px</td></tr>
          </tbody>
        </table>
      `};

      return { title, html: overviewHtml };
    }
  },

};
