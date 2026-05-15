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
      { label: 'Bottom Tab Bar',    id: 'components/bottom-tab-bar' },
      { label: 'Top App Bar',       id: 'components/top-app-bar' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Button',            id: 'components/button' },
      { label: 'TextBox',           id: 'components/textbox' },
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

  'components/alert': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: [
      { group: 'Overview', items: ['Types', 'Theme Colors', 'Close Button'] },
      { group: 'Design',   items: ['Variants', 'Themes', 'Properties', 'Spacing'] },
    ],
    render: (tab) => {
      const title = 'Alert';

      const iconCircleAlert = color => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
      const iconX          = color => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

      const TYPE_CFG = {
        error:       { icon: '#b31d38', lightBg: '#fef2f2', lightBorder: '#fbd0d2', filledBg: '#b31d38' },
        warning:     { icon: '#aa820a', lightBg: '#fdf9e8', lightBorder: '#f4e8aa', filledBg: '#aa820a' },
        information: { icon: '#0d4e97', lightBg: '#f1f7fe', lightBorder: '#bedbf9', filledBg: '#0d4e97' },
        success:     { icon: '#2d584b', lightBg: '#e8f3ee', lightBorder: '#b4dbcb', filledBg: '#2d584b' },
      };

      const alertEl = ({ type = 'error', theme = 'stroke', closeBtn = false, alertTitle = 'Alert Title', desc = 'Açıklama metni buraya gelecek.' }) => {
        const c = TYPE_CFG[type];
        const isFilled  = theme === 'filled';
        const bg        = isFilled ? c.filledBg : theme === 'light' ? c.lightBg : '#fafafa';
        const border    = isFilled ? 'none' : `1px solid ${theme === 'light' ? c.lightBorder : '#d4d4d4'}`;
        const iconColor = isFilled ? '#fff' : c.icon;
        const textColor = isFilled ? '#fff' : '#1a1a1a';
        const descAlpha = isFilled ? '0.85' : '1';
        return `
          <div style="display:flex;align-items:center;background:${bg};border:${border};border-radius:4px;flex:1;min-width:0;">
            <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${iconCircleAlert(iconColor)}</div>
            <div style="flex:1;padding:8px;min-width:0;">
              <div style="font-size:16px;font-weight:500;color:${textColor};line-height:24px;">${alertTitle}</div>
              <div style="font-size:14px;color:${textColor};opacity:${descAlpha};line-height:16px;margin-top:2px;">${desc}</div>
            </div>
            ${closeBtn ? `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;">${iconX(textColor)}</div>` : ''}
          </div>`;
      };

      const TYPES      = ['error', 'warning', 'information', 'success'];
      const TYPE_LABEL = { error: 'Error', warning: 'Warning', information: 'Information', success: 'Success' };
      const TYPE_DESC  = {
        error:       'Displays critical errors and blocking situations.',
        warning:     'For situations that require attention but are not critical.',
        information: 'Provides helpful information and explanations.',
        success:     'Confirms successful operations to the user.',
      };
      const THEMES     = ['stroke', 'light', 'filled'];

      const overviewHtml = `
        <p class="page-desc">Alert, kullanıcıyı önemli bir durum hakkında bilgilendiren satır içi mesajlardır. 4 tip, 3 tema ve isteğe bağlı kapatma butonu ile gelir.</p>

        <div class="preview-box">
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${TYPES.map(t => alertEl({ type: t, alertTitle: `${TYPE_LABEL[t]} Alert` })).join('')}
          </div>
        </div>

        <h2 id="Types">Types</h2>
        <table class="token-table">
          <thead><tr><th>Type</th><th>Preview</th><th>Description</th></tr></thead>
          <tbody>
            ${TYPES.map(t => `
            <tr>
              <td><span class="token-name">${TYPE_LABEL[t]}</span></td>
              <td>${alertEl({ type: t, alertTitle: `${TYPE_LABEL[t]} Alert` })}</td>
              <td style="color:var(--bt-text-emphasis)">${TYPE_DESC[t]}</td>
            </tr>`).join('')}
          </tbody>
        </table>

        <h2 id="Theme Colors">Theme Colors</h2>
        ${TYPES.map(t => `
          <h3 style="font-size:13px;font-weight:600;color:var(--bt-text-default);margin:20px 0 8px;text-transform:uppercase;letter-spacing:.04em;">${TYPE_LABEL[t]}</h3>
          <table class="token-table">
            <thead><tr><th>Theme</th><th>Preview</th></tr></thead>
            <tbody>
              ${THEMES.map(th => `
              <tr>
                <td><span class="token-name">${th.charAt(0).toUpperCase()+th.slice(1)}</span></td>
                <td>${alertEl({ type: t, theme: th, alertTitle: `${TYPE_LABEL[t]} Alert` })}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        `).join('')}

        <h2 id="Close Button">Close Button</h2>
        <table class="token-table">
          <thead><tr><th>State</th><th>Preview</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Off</span></td>
              <td>${alertEl({ type: 'error', closeBtn: false, alertTitle: 'Error Alert' })}</td>
            </tr>
            <tr>
              <td><span class="token-name">On</span></td>
              <td>${alertEl({ type: 'error', closeBtn: true, alertTitle: 'Error Alert' })}</td>
            </tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Alert kullanım kuralları.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Yakında eklenecek.</div></div>` };
      if (tab === 'Design') return { title, html: `
        <p class="page-desc">Alert bileşeninin Figma'dan alınan token ve tasarım değerleri.</p>

        <h2 id="Variants">Variants</h2>
        <table class="token-table">
          <thead><tr><th>Variant</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Error</span></td><td style="color:var(--bt-text-emphasis)">Displays critical errors and blocking situations.</td></tr>
            <tr><td><span class="token-name">Warning</span></td><td style="color:var(--bt-text-emphasis)">For situations that require attention but are not critical.</td></tr>
            <tr><td><span class="token-name">Information</span></td><td style="color:var(--bt-text-emphasis)">Provides helpful information and explanations.</td></tr>
            <tr><td><span class="token-name">Success</span></td><td style="color:var(--bt-text-emphasis)">Confirms successful operations to the user.</td></tr>
          </tbody>
        </table>

        <h2 id="Themes">Themes</h2>
        <table class="token-table">
          <thead><tr><th>Theme</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Stroke</span></td><td style="color:var(--bt-text-emphasis)">Default theme. Neutral background with a type-matched border.</td></tr>
            <tr><td><span class="token-name">Light</span></td><td style="color:var(--bt-text-emphasis)">Pastel background tinted to match the alert type.</td></tr>
            <tr><td><span class="token-name">Filled</span></td><td style="color:var(--bt-text-emphasis)">Strong color, high contrast. White text on a colored background.</td></tr>
          </tbody>
        </table>

        <h2 id="Properties">Properties</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Border Radius</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-radius-sm</code></td><td>4px</td></tr>
            <tr><td>Container · Stroke</td><td>Background</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-surface-primary-subtle</code></td><td>#fafafa</td></tr>
            <tr><td>Container · Stroke</td><td>Border</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-border-default</code></td><td>#d4d4d4</td></tr>
            <tr><td>Container · Light · Error</td><td>Background</td><td>—</td><td>#fef2f2</td></tr>
            <tr><td>Container · Light · Error</td><td>Border</td><td>—</td><td>#fbd0d2</td></tr>
            <tr><td>Container · Light · Warning</td><td>Background</td><td>—</td><td>#fdf9e8</td></tr>
            <tr><td>Container · Light · Warning</td><td>Border</td><td>—</td><td>#f4e8aa</td></tr>
            <tr><td>Container · Light · Information</td><td>Background</td><td>—</td><td>#f1f7fe</td></tr>
            <tr><td>Container · Light · Information</td><td>Border</td><td>—</td><td>#bedbf9</td></tr>
            <tr><td>Container · Light · Success</td><td>Background</td><td>—</td><td>#e8f3ee</td></tr>
            <tr><td>Container · Light · Success</td><td>Border</td><td>—</td><td>#b4dbcb</td></tr>
            <tr><td>Container · Filled · Error</td><td>Background</td><td>—</td><td>#b31d38</td></tr>
            <tr><td>Container · Filled · Warning</td><td>Background</td><td>—</td><td>#aa820a</td></tr>
            <tr><td>Container · Filled · Information</td><td>Background</td><td>—</td><td>#0d4e97</td></tr>
            <tr><td>Container · Filled · Success</td><td>Background</td><td>—</td><td>#2d584b</td></tr>
            <tr><td>Title</td><td>Font Size / Line Height</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-text-md</code></td><td>16px / 24px</td></tr>
            <tr><td>Title</td><td>Font Weight</td><td>Medium</td><td>500</td></tr>
            <tr><td>Description</td><td>Font Size / Line Height</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-text-sm</code></td><td>14px / 16px</td></tr>
          </tbody>
        </table>

        <h2 id="Spacing">Spacing</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Value</th><th>Token</th></tr></thead>
          <tbody>
            <tr><td>Content Area</td><td>Padding</td><td>8px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-space-md</code></td></tr>
            <tr><td>Content Area</td><td>Gap (title ↔ description)</td><td>2px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-2xs</code></td></tr>
            <tr><td>Icon Container</td><td>Width × Height</td><td>40 × 40px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-10xl</code></td></tr>
            <tr><td>Close Button</td><td>Width × Height</td><td>40 × 40px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-10xl</code></td></tr>
          </tbody>
        </table>
      `};
      return { title, html: overviewHtml };
    }
  },

  'components/avatar': {
    tabs: ['Overview', 'Usage', 'Design'],
    toc: [
      { group: 'Overview', items: ['Types', 'Themes', 'Sizes'] },
      { group: 'Design',   items: ['Variants', 'Properties', 'Spacing'] },
    ],
    render: (tab) => {
      const title = 'Avatar';

      const iconUser = (size, color) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>`;

      const SIZE_CFG = {
        '2xs': { dim: 24, iconSize: 16, fs: 12 },
        'xs':  { dim: 28, iconSize: 18, fs: 12 },
        'sm':  { dim: 32, iconSize: 20, fs: 12 },
        'md':  { dim: 40, iconSize: 22, fs: 14 },
        'lg':  { dim: 48, iconSize: 24, fs: 14 },
        'xl':  { dim: 56, iconSize: 26, fs: 14 },
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

        <h2 id="Themes">Themes</h2>
        <table class="token-table">
          <thead><tr><th>Theme</th><th>Initials</th><th>Icon</th><th>Description</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="token-name">Default</span></td>
              <td>${avatarEl({ size: 'md', themeColor: 'default', type: 'initials' })}</td>
              <td>${avatarEl({ size: 'md', themeColor: 'default', type: 'icon' })}</td>
              <td style="color:var(--bt-text-emphasis)">Gray background with dark text/icon. Used for generic or unassigned contexts.</td>
            </tr>
            <tr>
              <td><span class="token-name">Brand</span></td>
              <td>${avatarEl({ size: 'md', themeColor: 'brand', type: 'initials' })}</td>
              <td>${avatarEl({ size: 'md', themeColor: 'brand', type: 'icon' })}</td>
              <td style="color:var(--bt-text-emphasis)">Brand blue background with white text/icon. Used for identified or active users.</td>
            </tr>
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
      `;

      const designHtml = `
        <p class="page-desc">Design tokens and specifications extracted from Figma.</p>

        <h2 id="Variants">Variants</h2>
        <table class="token-table">
          <thead><tr><th>Variant</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">Initials</span></td><td style="color:var(--bt-text-emphasis)">Displays the user's initials (max 2 characters). Font size scales with avatar size.</td></tr>
            <tr><td><span class="token-name">Icon</span></td><td style="color:var(--bt-text-emphasis)">Uses the circle-user-round icon as a generic user placeholder when no initials are available.</td></tr>
            <tr><td><span class="token-name">Default</span></td><td style="color:var(--bt-text-emphasis)">Gray background (#e6e6e6) with dark text/icon. For generic or unassigned contexts.</td></tr>
            <tr><td><span class="token-name">Brand</span></td><td style="color:var(--bt-text-emphasis)">Brand blue (#0d4e97) background with white text/icon. For identified or active users.</td></tr>
          </tbody>
        </table>

        <h2 id="Properties">Properties</h2>
        <table class="token-table">
          <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Container</td><td>Shape</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-radius-full</code></td><td>9999px (circle)</td></tr>
            <tr><td>Container · Default</td><td>Background</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-surface-primary-muted</code></td><td>#e6e6e6</td></tr>
            <tr><td>Container · Brand</td><td>Background</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-surface-brand-contrast-default</code></td><td>#0d4e97</td></tr>
            <tr><td>Initials · Default</td><td>Text Color</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-text-default</code></td><td>#1a1a1a</td></tr>
            <tr><td>Initials · Brand</td><td>Text Color</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-text-inverted</code></td><td>#ffffff</td></tr>
            <tr><td>Initials · 2xs / xs / sm</td><td>Font Size / Line Height</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-text-xs</code></td><td>12px / 16px</td></tr>
            <tr><td>Initials · md / lg / xl</td><td>Font Size / Line Height</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-text-sm</code></td><td>14px / 16px</td></tr>
            <tr><td>Initials</td><td>Font Weight</td><td>Medium</td><td>500</td></tr>
            <tr><td>Icon · Default</td><td>Stroke Color</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-icon-muted</code></td><td>#a3a3a3</td></tr>
            <tr><td>Icon · Brand</td><td>Stroke Color</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-icon-inverted</code></td><td>#ffffff</td></tr>
            <tr><td>Icon</td><td>Name</td><td>circle-user-round</td><td>Lucide icon</td></tr>
          </tbody>
        </table>

        <h2 id="Spacing">Spacing</h2>
        <table class="token-table">
          <thead><tr><th>Size</th><th>Dimension</th><th>Token</th></tr></thead>
          <tbody>
            <tr><td><span class="token-name">2xs</span></td><td>24 × 24px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-6xl</code></td></tr>
            <tr><td><span class="token-name">xs</span></td><td>28 × 28px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-7xl</code></td></tr>
            <tr><td><span class="token-name">sm</span></td><td>32 × 32px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-8xl</code></td></tr>
            <tr><td><span class="token-name">md</span></td><td>40 × 40px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-10xl</code></td></tr>
            <tr><td><span class="token-name">lg</span></td><td>48 × 48px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-12xl</code></td></tr>
            <tr><td><span class="token-name">xl</span></td><td>56 × 56px</td><td><code style="font-size:12px;font-family:var(--mono)">--bt-base-sizing-14xl</code></td></tr>
          </tbody>
        </table>
      `;

      if (tab === 'Usage') return { title, html: `<p class="page-desc">Avatar usage guidelines.</p><div class="placeholder"><div class="placeholder-title">Usage Guidelines</div><div class="placeholder-text">Coming soon.</div></div>` };
      if (tab === 'Design') return { title, html: designHtml };
      return { title, html: overviewHtml };
    }
  },

};
