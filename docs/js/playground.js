/* ============================================================
   PLAYGROUND — reusable component preview toolbar
   Ported from Figma "Playground" toolbar (Bentas DS, node 375:27788):
     Variant select · Measure · Viewport · Open in isolation mode
   Used via registerPlayground({...}) from any pages-*.js page.
   ============================================================ */

const PGD_VIEWPORTS = [
  { key: 'small-mobile', label: 'Small Mobile', width: 360, height: 780 },
  { key: 'large-mobile', label: 'Large Mobile', width: 414, height: 896 },
  { key: 'tablet',       label: 'Tablet',        width: 768, height: 1024 },
  { key: 'desktop',      label: 'Desktop',       width: null, height: null },
];

// Exact paths from Lucide (lucide-static), matching the icons used in the
// Figma source (node 375:27788 — Icon/chevrons-up-down, Icon/ruler-dimension-line,
// Icon/proportions, Icon/square-arrow-out-up-right).
const _pgdIconChevrons = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const _pgdIconRuler     = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v-3"/><path d="M14 15v-3"/><path d="M18 15v-3"/><path d="M2 8V4"/><path d="M22 6H2"/><path d="M22 8V4"/><path d="M6 15v-3"/><rect x="2" y="12" width="20" height="8" rx="2"/></svg>`;
const _pgdIconViewport  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 9v11"/><path d="M2 9h13a2 2 0 0 1 2 2v9"/></svg>`;
const _pgdIconIsolate   = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>`;
const _pgdIconSwap      = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>`;
const _pgdIconClick     = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>`;

const _pgdState   = {};   // id -> { variant, props, measure, viewport, dimW, dimH, openMenu }
const _pgdConfigs = {};   // id -> config, kept so re-renders (state changes) can rebuild the block
window._pgdConfigs = _pgdConfigs; // exposed for isolation.html

function _pgdEsc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function _pgdEnsureState(id, config) {
  if (!_pgdState[id]) {
    const props = {};
    (config.props || []).forEach(p => { props[p.key] = p.default || p.options[0].key; });
    _pgdState[id] = {
      variant: config.variants[0].key,
      props,
      view: 'preview', // 'preview' | 'code'
      measure: false,
      viewport: 'desktop',
      dimW: null,
      dimH: null,
      openMenu: null, // 'variant' | 'viewport' | a props[].key | null
    };
  }
  return _pgdState[id];
}

// config: { id, variants:[{key,label}], props?:[{key,label,options:[{key,label}],default}],
//           preview(variantKey, props)->html, code(variantKey, props)->string, isolate: 'component-key' }
function renderPlayground(config) {
  const st = _pgdEnsureState(config.id, config);
  const variantLabel = config.variants.find(v => v.key === st.variant).label;
  const vp = PGD_VIEWPORTS.find(v => v.key === st.viewport);

  const variantControl = config.variants.length > 1 ? `
    <div class="pgd-dropdown">
      <button class="pgd-variant-btn" onclick="_pgdToggleMenu('${config.id}','variant',event)">
        <span>${variantLabel}</span>${_pgdIconChevrons}
      </button>
      ${st.openMenu === 'variant' ? `
      <div class="pgd-menu">
        ${config.variants.map(v => `<button class="pgd-menu-item ${v.key===st.variant?'active':''}" onclick="_pgdSetVariant('${config.id}','${v.key}')">${v.label}</button>`).join('')}
      </div>` : ''}
    </div>` : '';

  const propControls = (config.props || []).map(prop => {
    const selectedKey = st.props[prop.key];
    const selected = prop.options.find(o => o.key === selectedKey) || prop.options[0];
    return `
    <div class="pgd-dropdown">
      <button class="pgd-variant-btn" onclick="_pgdToggleMenu('${config.id}','${prop.key}',event)">
        <span class="pgd-prop-label">${prop.label}</span><span>${selected.label}</span>${_pgdIconChevrons}
      </button>
      ${st.openMenu === prop.key ? `
      <div class="pgd-menu">
        ${prop.options.map(o => `<button class="pgd-menu-item ${o.key===selectedKey?'active':''}" onclick="_pgdSetProp('${config.id}','${prop.key}','${o.key}')">${o.label}</button>`).join('')}
      </div>` : ''}
    </div>`;
  }).join('');

  const isDevice = vp.key !== 'desktop';

  const viewportControl = `
    <div class="pgd-dropdown">
      <button class="pgd-icon-btn ${isDevice ? 'is-active pgd-icon-btn--labeled' : ''}" title="Viewport" onclick="_pgdToggleMenu('${config.id}','viewport',event)">
        ${_pgdIconViewport}${isDevice ? `<span>${vp.label}</span>` : ''}
      </button>
      ${st.openMenu === 'viewport' ? `
      <div class="pgd-menu pgd-menu-right">
        ${PGD_VIEWPORTS.map(v => `<button class="pgd-menu-item ${v.key===st.viewport?'active':''}" onclick="_pgdSetViewport('${config.id}','${v.key}')"><span>${v.label}</span>${v.width ? `<span class="pgd-menu-item-meta">${v.width} × ${v.height}</span>` : ''}</button>`).join('')}
      </div>` : ''}
    </div>`;

  const isolateControl = `
    <button class="pgd-icon-btn" title="Open in isolation mode" onclick="_pgdOpenIsolation('${config.id}')">${_pgdIconIsolate}</button>`;

  const triggerControl = config.trigger ? `
    <button class="pgd-trigger-btn" onclick="_pgdRunTrigger('${config.id}')">${_pgdIconClick}<span>${(config.trigger.label) || 'Click Me'}</span></button>` : '';

  const dimBar = isDevice ? `
    <div class="pgd-dim-bar">
      <label class="pgd-dim-field">
        <span class="pgd-dim-label">W</span>
        <input type="number" min="1" class="pgd-dim-input" value="${st.dimW}" onchange="_pgdSetDim('${config.id}','w',this.value)">
        <span class="pgd-dim-unit">px</span>
      </label>
      <button class="pgd-dim-swap" title="Swap width and height" onclick="_pgdSwapDims('${config.id}')">${_pgdIconSwap}</button>
      <label class="pgd-dim-field">
        <span class="pgd-dim-label">H</span>
        <input type="number" min="1" class="pgd-dim-input" value="${st.dimH}" onchange="_pgdSetDim('${config.id}','h',this.value)">
        <span class="pgd-dim-unit">px</span>
      </label>
    </div>` : '';

  const frameClass = isDevice ? 'pgd-viewport-frame is-constrained' : 'pgd-viewport-frame';
  const frameStyle = isDevice ? `width:${st.dimW}px;height:${st.dimH}px` : 'width:100%';
  const innerClass = isDevice ? 'pgd-preview-inner is-device' : 'pgd-preview-inner';

  const segControl = `
    <div class="pgd-seg-row">
      <div class="pgd-seg-ctrl">
        <button class="pgd-seg-btn ${st.view === 'preview' ? 'active' : ''}" onclick="_pgdSetView('${config.id}','preview')">Preview</button>
        <button class="pgd-seg-btn ${st.view === 'code' ? 'active' : ''}" onclick="_pgdSetView('${config.id}','code')">Code</button>
        ${config.css ? `<button class="pgd-seg-btn ${st.view === 'css' ? 'active' : ''}" onclick="_pgdSetView('${config.id}','css')">CSS</button>` : ''}
      </div>
    </div>`;

  const previewBlock = `
      <div class="example-viewer-preview">
        <div class="${innerClass}">
          ${dimBar}
          <div class="${frameClass}" id="${config.id}-frame" style="${frameStyle}" onmousemove="_pgdMeasureMove(event,'${config.id}')" onmouseleave="_pgdMeasureLeave('${config.id}')">
            ${config.preview(st.variant, st.props)}
            <div class="pgd-measure-box" id="${config.id}-measure-box">
              <div class="pgd-mb-pad" id="${config.id}-pad-top"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-bottom"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-left"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-pad" id="${config.id}-pad-right"><span class="pgd-mb-label"></span></div>
              <div class="pgd-mb-content" id="${config.id}-content"><span class="pgd-mb-label"></span></div>
            </div>
          </div>
        </div>
      </div>`;

  const codeBlock = `
      <div class="example-viewer-code">
        <pre id="${config.id}-code">${_pgdEsc(config.code(st.variant, st.props))}</pre>
        <button class="copy-btn" onclick="copyText(document.getElementById('${config.id}-code').textContent, this)" title="Copy code">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>`;

  return `
    <div id="${config.id}" style="${config.noMargin ? '' : 'margin-bottom:32px;'}">
      ${segControl}
      <div class="example-viewer">
        <div class="pgd-toolbar">
          ${variantControl}
          ${propControls}
          <button class="pgd-icon-btn ${st.measure?'is-active':''}" title="Measure" onclick="_pgdToggleMeasure('${config.id}')">${_pgdIconRuler}</button>
          ${viewportControl}
          ${isolateControl}
          ${triggerControl}
        </div>
        ${st.view === 'code' ? codeBlock : st.view === 'css' && config.css ? `<div class="example-viewer-code" style="padding:0;max-height:none;">${config.css(st.variant, st.props)}</div>` : previewBlock}
      </div>
    </div>`;
}

function registerPlayground(config) {
  _pgdConfigs[config.id] = config;
  return renderPlayground(config);
}

function _pgdRerender(id) {
  const config = _pgdConfigs[id];
  const container = document.getElementById(id);
  if (!config || !container) return;
  container.outerHTML = renderPlayground(config);
}

window.renderPlayground   = renderPlayground;
window.registerPlayground = registerPlayground;

window._pgdToggleMenu = function(id, which, e) {
  e.stopPropagation();
  const st = _pgdState[id];
  st.openMenu = st.openMenu === which ? null : which;
  _pgdRerender(id);
};

window._pgdSetVariant = function(id, key) {
  const st = _pgdState[id];
  st.variant = key;
  st.openMenu = null;
  _pgdRerender(id);
};

window._pgdSetProp = function(id, propKey, optionKey) {
  const st = _pgdState[id];
  st.props[propKey] = optionKey;
  st.openMenu = null;
  _pgdRerender(id);
};

window._pgdSetView = function(id, view) {
  const st = _pgdState[id];
  st.view = view;
  _pgdRerender(id);
};

window._pgdSetViewport = function(id, key) {
  const st = _pgdState[id];
  const preset = PGD_VIEWPORTS.find(v => v.key === key);
  st.viewport = key;
  st.dimW = preset.width;
  st.dimH = preset.height;
  st.openMenu = null;
  _pgdRerender(id);
};

window._pgdSetDim = function(id, axis, value) {
  const st = _pgdState[id];
  const num = Math.max(1, parseInt(value, 10) || 1);
  if (axis === 'w') st.dimW = num; else st.dimH = num;
  _pgdRerender(id);
};

window._pgdSwapDims = function(id) {
  const st = _pgdState[id];
  const w = st.dimW;
  st.dimW = st.dimH;
  st.dimH = w;
  _pgdRerender(id);
};

window._pgdToggleMeasure = function(id) {
  const st = _pgdState[id];
  st.measure = !st.measure;
  _pgdRerender(id);
};

// Figma/Nord-Health-style spacing inspector: the hovered element's content
// box is highlighted in blue with its W×H centered inside, and its own
// padding is shown as green strips on each side with the px value centered
// in that strip (a side's strip is hidden when its padding is 0).
window._pgdMeasureMove = function(e, id) {
  const st = _pgdState[id];
  if (!st || !st.measure) return;
  const frame = document.getElementById(id + '-frame');
  const box   = document.getElementById(id + '-measure-box');
  if (!frame || !box) return;

  const el = e.target;
  if (el === frame || box.contains(el)) return;

  const frameRect = frame.getBoundingClientRect();
  const cs = getComputedStyle(el);
  const b  = el.getBoundingClientRect(); // border-box, viewport coords

  const bt = parseFloat(cs.borderTopWidth)    || 0, br = parseFloat(cs.borderRightWidth)  || 0;
  const bb = parseFloat(cs.borderBottomWidth) || 0, bl = parseFloat(cs.borderLeftWidth)   || 0;
  const pt = parseFloat(cs.paddingTop) || 0, pr = parseFloat(cs.paddingRight)  || 0;
  const pb = parseFloat(cs.paddingBottom) || 0, pl = parseFloat(cs.paddingLeft) || 0;

  const padBox = {
    left: b.left - frameRect.left + bl,
    top:  b.top  - frameRect.top  + bt,
    width:  b.width  - bl - br,
    height: b.height - bt - bb,
  };
  const contentBox = {
    left: padBox.left + pl,
    top:  padBox.top  + pt,
    width:  Math.max(padBox.width  - pl - pr, 0),
    height: Math.max(padBox.height - pt - pb, 0),
  };

  const setRect = (elm, rect) => {
    elm.style.left   = rect.left + 'px';
    elm.style.top    = rect.top + 'px';
    elm.style.width  = Math.max(rect.width, 0) + 'px';
    elm.style.height = Math.max(rect.height, 0) + 'px';
  };
  const setStrip = (elm, rect, value) => {
    elm.style.display = value > 0.5 ? 'flex' : 'none';
    setRect(elm, rect);
    elm.querySelector('.pgd-mb-label').textContent = Math.round(value);
  };

  box.style.display = 'block';

  setStrip(document.getElementById(id + '-pad-top'),
    { left: padBox.left, top: padBox.top, width: padBox.width, height: pt }, pt);
  setStrip(document.getElementById(id + '-pad-bottom'),
    { left: padBox.left, top: contentBox.top + contentBox.height, width: padBox.width, height: pb }, pb);
  setStrip(document.getElementById(id + '-pad-left'),
    { left: padBox.left, top: contentBox.top, width: pl, height: contentBox.height }, pl);
  setStrip(document.getElementById(id + '-pad-right'),
    { left: contentBox.left + contentBox.width, top: contentBox.top, width: pr, height: contentBox.height }, pr);

  const contentEl = document.getElementById(id + '-content');
  setRect(contentEl, contentBox);
  contentEl.querySelector('.pgd-mb-label').textContent = `${Math.round(contentBox.width)} × ${Math.round(contentBox.height)}`;
};

window._pgdMeasureLeave = function(id) {
  const box = document.getElementById(id + '-measure-box');
  if (box) box.style.display = 'none';
};

window._pgdOpenIsolation = function(id) {
  const config = _pgdConfigs[id];
  const st = _pgdState[id];
  if (!config) return;

  // Explicit PGD_ISOLATE registration → use isolation.html
  if (config.isolate) {
    const params = new URLSearchParams({ component: config.isolate, variant: st.variant, ...st.props });
    window.open('isolation.html?' + params.toString(), '_blank');
    return;
  }

  // Auto-isolation: pass playground id + current state via URL params.
  // isolation.html loads playground.js, calls render() to populate _pgdConfigs,
  // then renders the preview directly — no cross-window communication needed.
  const isoParams = new URLSearchParams({ pgd_id: config.id, variant: st.variant, ...st.props });
  window.open('isolation.html?' + isoParams.toString(), '_blank');
};

// "Click Me" trigger — demonstrates the component the way it behaves at
// runtime (e.g. a toast/alert sliding in from the top of the screen) rather
// than sitting statically inside the preview frame. Shown fixed over the
// whole page, above the site chrome, so it reads as a real notification.
// Repeated clicks stack a new toast below the previous ones instead of
// replacing them — each toast lives and animates out independently.
let _pgdToastSeq = 0;

function _pgdToastHost() {
  let host = document.getElementById('pgd-toast-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'pgd-toast-host';
    document.body.appendChild(host);
  }
  return host;
}

window._pgdRunTrigger = function(id) {
  const config = _pgdConfigs[id];
  const st = _pgdState[id];
  if (!config || !config.trigger) return;

  const host = _pgdToastHost();
  const el = document.createElement('div');
  el.className = 'pgd-toast';
  el.id = 'pgd-toast-' + (++_pgdToastSeq);
  el.innerHTML = config.preview(st.variant, st.props);
  host.appendChild(el);

  void el.offsetHeight; // force reflow so the off-screen start state commits before animating in
  requestAnimationFrame(() => el.classList.add('is-visible'));

  const duration = config.trigger.duration || 3000;
  setTimeout(() => {
    el.classList.remove('is-visible');
    el.classList.add('is-leaving');
    setTimeout(() => { if (host.contains(el)) host.removeChild(el); }, 600);
  }, duration);
};

document.addEventListener('click', (e) => {
  Object.keys(_pgdState).forEach(id => {
    const st = _pgdState[id];
    if (st.openMenu && !e.target.closest(`#${id} .pgd-dropdown`)) {
      st.openMenu = null;
      _pgdRerender(id);
    }
  });
});
