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
      { label: 'Alert Dialog',      id: 'components/alert-dialog' },
      { label: 'Alert Toaster',     id: 'components/alert' },
      { label: 'Avatar',            id: 'components/avatar' },
      { label: 'Badge',             id: 'components/badge' },
      { label: 'Button',            id: 'components/button' },
      { label: 'Button Group',      id: 'components/button-group' },
      { label: 'Card',              id: 'components/card' },
      { label: 'Checkbox',          id: 'components/checkbox' },
      { label: 'Dialog',            id: 'components/dialog' },
      { label: 'Icon Button',       id: 'components/icon-button' },
      {
        label: 'Inputs', static: true, children: [
          { label: 'Date Picker',   id: 'components/date-picker' },
          { label: 'Dropdown',      id: 'components/dropdown' },
          { label: 'MultiSelect',   id: 'components/multi-select' },
          { label: 'Radio Button',  id: 'components/radio-button' },
          { label: 'SearchBox',     id: 'components/searchbox' },
          { label: 'Select LookUp', id: 'components/select-lookup' },
          { label: 'Switch',        id: 'components/switch' },
          { label: 'Textarea',      id: 'components/textarea' },
          { label: 'TextBox',       id: 'components/textbox' },
          { label: 'Upload',        id: 'components/upload' },
        ]
      },
      { label: 'List Item',         id: 'components/list-item' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Progress',          id: 'components/progress' },
      { label: 'Sidebar',           id: 'components/sidebar' },
      { label: 'Skeleton',          id: 'components/skeleton' },
      { label: 'Split Button',      id: 'components/split-button' },
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

// ── Design Example: Panel helpers (global, called from onclick) ──
window.dexOpenPanel = function(panelId, overlayId) {
  const panel   = document.getElementById(panelId);
  const overlay = document.getElementById(overlayId);
  panel.hidden = false;
  panel.getBoundingClientRect(); // reflow — animasyonun başlaması için şart
  panel.classList.add('is-open');
  overlay.classList.add('is-open');
};
window.dexClosePanel = function(panelId, overlayId) {
  const panel   = document.getElementById(panelId);
  const overlay = document.getElementById(overlayId);
  panel.classList.remove('is-open');
  overlay.classList.remove('is-open');
  panel.addEventListener('transitionend', function hide() {
    panel.hidden = true;
    panel.removeEventListener('transitionend', hide);
  }, { once: true });
};

// ── Design Examples page ─────────────────────────────────────────
const _dexCloseIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
const _dexPlusIcon  = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;

// Custom dropdown toggle
window.btWinDropdown = function(ddId) {
  const dd = document.getElementById(ddId);
  const list = dd.querySelector('.bt-win-dropdown__list');
  const isOpen = dd.classList.contains('is-open');
  // Close all other open dropdowns
  document.querySelectorAll('.bt-win-dropdown.is-open').forEach(el => el.classList.remove('is-open'));
  if (!isOpen) dd.classList.add('is-open');
};
// Select a dropdown option
window.btWinDropdownSelect = function(ddId, optEl) {
  const dd = document.getElementById(ddId);
  dd.querySelector('.bt-win-dropdown__value').textContent = optEl.textContent;
  dd.classList.remove('is-open');
};
// Date picker: trigger native date input
window.btWinDatePicker = function(nativeId, displayId) {
  const native = document.getElementById(nativeId);
  if (native.showPicker) native.showPicker();
  else native.click();
};
// Date picker: sync selected date to display input
window.btWinDateChange = function(nativeId, displayId) {
  const native = document.getElementById(nativeId);
  const display = document.getElementById(displayId);
  if (native.value) {
    const [y, m, d] = native.value.split('-');
    display.value = `${d}.${m}.${y}`;
  }
};
// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.bt-win-dropdown')) {
    document.querySelectorAll('.bt-win-dropdown.is-open').forEach(el => el.classList.remove('is-open'));
  }
});

PAGES_WEB['foundations/design-examples'] = {
  tabs: [],
  toc:  ['Form Panel'],
  render() {
    const title = 'Design Examples';
    return { title, html: `
      <p class="page-desc">Gerçek kullanım senaryolarını gösteren etkileşimli örnekler. Bileşenlerin birlikte nasıl çalıştığını ve panel / window geçiş davranışlarını burada inceleyebilirsiniz.</p>

      <h2 id="Form Panel">Form Panel — bt-window-sm</h2>
      <p class="page-desc">Bir butona basıldığında sağdan kayan form paneli (<code>bt-window-sm</code>). Panel açıkken arka plan overlay ile kararır; overlay'e veya × butonuna tıklandığında panel kapanır.</p>

      <!-- Trigger -->
      <div class="dex-trigger">
        <button class="bt-btn bt-btn--primary-solid bt-btn--sm"
                onclick="dexOpenPanel('dex-panel-form','dex-overlay-form')">
          ${_dexPlusIcon}<span>Yeni Ekle</span>
        </button>
      </div>

      <!-- Full-page overlay (position:fixed) -->
      <div class="bt-win-overlay" id="dex-overlay-form"
           onclick="dexClosePanel('dex-panel-form','dex-overlay-form')"></div>

      <!-- bt-window-sm: full-page sliding panel (position:fixed, başlangıçta hidden) -->
      <aside class="bt-window-sm" id="dex-panel-form"
             role="dialog" aria-modal="true" aria-labelledby="dex-panel-form-title"
             hidden>

        <!-- Header: [×] + başlık solda · Kaydet sağda -->
        <div class="bt-window-sm__header">
          <div class="bt-window-sm__header-left">
            <button class="bt-window-sm__close"
                    onclick="dexClosePanel('dex-panel-form','dex-overlay-form')"
                    aria-label="Kapat">
              ${_dexCloseIcon}
            </button>
            <span class="bt-window-sm__title" id="dex-panel-form-title">Yeni Görev Ekle</span>
          </div>
          <button class="bt-btn bt-btn--primary-solid bt-btn--sm">Kaydet</button>
        </div>

        <!-- Body -->
        <div class="bt-window-sm__body">
          <div class="bt-window-sm__card">

            <!-- İşin Adı -->
            <div class="bt-win-field">
              <label class="bt-win-label">İşin Adı <span style="color:var(--bt-text-error-default)">*</span></label>
              <input class="bt-win-input" type="text" placeholder="Görev adını girin…">
            </div>

            <!-- Açıklama -->
            <div class="bt-win-field">
              <label class="bt-win-label">Açıklama</label>
              <textarea class="bt-win-textarea" placeholder="Görev hakkında detaylı bilgi…"></textarea>
            </div>

            <!-- Talep Edilen Teslim Tarihi -->
            <div class="bt-win-field">
              <label class="bt-win-label">Talep Edilen Teslim Tarihi</label>
              <div class="bt-win-datepicker">
                <input class="bt-win-input bt-win-datepicker__display" type="text" readonly
                       placeholder="Tarih seçin…" id="dex-date-display"
                       onclick="btWinDatePicker('dex-date-native','dex-date-display')">
                <button class="bt-win-datepicker__icon" type="button"
                        onclick="btWinDatePicker('dex-date-native','dex-date-display')"
                        aria-label="Tarih seç">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </button>
                <input type="date" class="bt-win-datepicker__native" id="dex-date-native"
                       onchange="btWinDateChange('dex-date-native','dex-date-display')">
              </div>
            </div>

            <!-- Uygulama (custom dropdown) -->
            <div class="bt-win-field">
              <label class="bt-win-label">Uygulama</label>
              <div class="bt-win-dropdown" id="dex-dd-app">
                <div class="bt-win-dropdown__wrap">
                  <button type="button" class="bt-win-dropdown__trigger"
                          onclick="btWinDropdown('dex-dd-app')">
                    <span class="bt-win-dropdown__value">Seçin…</span>
                    <svg class="bt-win-dropdown__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <ul class="bt-win-dropdown__list" role="listbox">
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-app',this)">Muhasebe</li>
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-app',this)">Satış</li>
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-app',this)">İnsan Kaynakları</li>
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-app',this)">Üretim</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Öncelik (custom dropdown) -->
            <div class="bt-win-field">
              <label class="bt-win-label">Öncelik</label>
              <div class="bt-win-dropdown" id="dex-dd-priority">
                <div class="bt-win-dropdown__wrap">
                  <button type="button" class="bt-win-dropdown__trigger"
                          onclick="btWinDropdown('dex-dd-priority')">
                    <span class="bt-win-dropdown__value">Seçin…</span>
                    <svg class="bt-win-dropdown__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <ul class="bt-win-dropdown__list" role="listbox">
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-priority',this)">Düşük</li>
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-priority',this)">Orta</li>
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-priority',this)">Yüksek</li>
                    <li class="bt-win-dropdown__option" role="option" onclick="btWinDropdownSelect('dex-dd-priority',this)">Kritik</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Dosya Yükleme -->
            <div class="bt-win-field">
              <label class="bt-win-label">Dosya Yükleme</label>
              <div class="bt-win-dropzone" onclick="this.querySelector('input[type=file]').click()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                <span class="bt-win-dropzone__text">Dosya sürükleyin veya <u>seçin</u></span>
                <input type="file" hidden multiple>
              </div>
            </div>

          </div><!-- /card -->
        </div><!-- /body -->

      </aside><!-- /bt-window-sm -->
    `};
  },
};

// ── Sidebar — shared markup + Playground registration ─────────
// Hoisted to module scope (rather than nested inside render()) so both the
// component page and the standalone isolation.html page can call it.
window._sbxToggle = function() {
  const el = document.getElementById('sbxDrawer');
  if (el) el.classList.toggle('is-collapsed');
};

const sbxIconSearch = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`;
const sbxIconPlaceholder = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/></svg>`;
const sbxIconMenu = `<svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

// Rail icon buttons click-select across the whole rail (center + bottom
// zones share one group, like a single current-section indicator — e.g.
// clicking Settings at the bottom deselects whichever nav icon was active).
window._sbxSelectBtn = function(el) {
  const rail = el.closest('.sbx-rail');
  if (!rail) return;
  const current = rail.querySelector('.sbx-btn.is-selected');
  if (current && current !== el) current.classList.remove('is-selected');
  el.classList.add('is-selected');
};
const sbxRailButton = () => `<div class="sbx-btn" tabindex="0" onclick="window._sbxSelectBtn(this)">${sbxIconPlaceholder}</div>`;
// Nav rows click-select within their own .sbx-drawer-center, same pattern as
// the Standart Sidebar's .stb-list (see window._stbSelectItem).
window._sbxSelectItem = function(el) {
  const list = el.closest('.sbx-drawer-center');
  if (!list) return;
  const current = list.querySelector('.sbx-item-inner.is-selected');
  if (current && current !== el) current.classList.remove('is-selected');
  el.classList.add('is-selected');
};
const sbxDrawerItem = (label, state = 'default') => `
          <div class="sbx-item">
            <div class="sbx-item-inner${state !== 'default' ? ` is-${state}` : ''}" tabindex="0" onclick="window._sbxSelectItem(this)">
              <div class="sbx-item-icon">${sbxIconPlaceholder}</div>
              <div class="sbx-item-label">${label}</div>
            </div>
          </div>`;

// Isolated single-row preview for the Overview "States" table — same idea
// as stbItemStatePreview but for Hub Sidebar's drawer item markup.
function sbxItemStatePreview(state) {
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:12px;background:var(--bt-base-default);">
      <div class="sbx-item" style="padding:0;width:220px;">
        <div class="sbx-item-inner${state !== 'default' ? ` is-${state}` : ''}">
          <div class="sbx-item-icon">${sbxIconPlaceholder}</div>
          <div class="sbx-item-label">Drawer Item Label</div>
        </div>
      </div>
    </div>`;
}

const SBX_ITEM_STATE_VARIANTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'active',   label: 'Active' },
  { key: 'selected', label: 'Selected' },
  { key: 'focus',    label: 'Focus' },
];

// ── Hub Sidebar — persistent icon rail + toggleable drawer ───────
// Single source of truth for the live preview markup. `variant` controls the
// drawer's initial state ('expanded' | 'collapsed'); the rail's own collapse
// button still toggles it further from there.
function sidebarMarkupA(variant) {
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
              <div class="bt-searchbox bt-searchbox--sm">
                <div class="bt-searchbox__control">
                  <span class="bt-searchbox__icon">${sbxIconSearch}</span>
                </div>
                <div class="bt-searchbox__field">
                  <input class="bt-searchbox__text" type="text" placeholder="Placeholder Text" oninput="sbxInput(this)" />
                </div>
                <div class="sbx-searchbox-kbd">Tab</div>
              </div>
            </div>
            <div class="sbx-drawer-center">
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label')}
              ${sbxDrawerItem('Drawer Item Label', 'selected')}
              ${sbxDrawerItem('Drawer Item Label')}
            </div>
            <div class="sbx-drawer-bottom">
              ${sbxDrawerItem('Drawer Item Label')}
            </div>
          </div>
        </div>`;
}

// Clean, copy-pastable reference markup shown in the code panel.
const sbxDrawerItemCode = (state = 'default') => `      <div class="sbx-item">
        <div class="sbx-item-inner${state !== 'default' ? ` is-${state}` : ''}">
          <div class="sbx-item-icon"><!-- icon --></div>
          <div class="sbx-item-label">Drawer Item Label</div>
        </div>
      </div>`;
function sidebarCodeSnippetA(variant) {
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
      <div class="bt-searchbox bt-searchbox--sm">
        <div class="bt-searchbox__control">
          <span class="bt-searchbox__icon"><!-- search icon --></span>
        </div>
        <div class="bt-searchbox__field">
          <input class="bt-searchbox__text" type="text" placeholder="Placeholder Text" />
        </div>
        <div class="sbx-searchbox-kbd">Tab</div>
      </div>
    </div>
    <div class="sbx-drawer-center">
${sbxDrawerItemCode()}
${sbxDrawerItemCode('selected')}
      <!-- …repeat per nav item -->
    </div>
    <div class="sbx-drawer-bottom">
${sbxDrawerItemCode()}
    </div>
  </div>
</nav>`;
}

// ── Standart Sidebar — single panel, collapses to an icon rail ───
// Figma: node 502:18421 ("Standart Sidebar" — Collapsed + Expanded).
// Unlike the Hub Sidebar (persistent rail + separate drawer), this is one
// panel whose own top button toggles its width between a 48px icon-only
// rail and a 280px full panel — the item rows are shared markup; the
// collapsed state just hides the label/right-control via CSS so nothing
// needs to be re-rendered when toggling.
window._stbToggle = function(btn) {
  const shell = btn.closest('.stb-shell');
  if (shell) shell.classList.toggle('is-collapsed');
};

// Item row state: 'default' | 'hover' | 'selected'. Hover has both a forced
// `.is-hover` class (so it can be shown statically in the States table below)
// and a real `:hover` rule in CSS — either path renders identically. `:active`
// (pressed) needs no forced class — it's a real browser pseudo-state.
// Nav rows (withRight === false) click-select within their own .stb-list;
// the pinned row (withRight === true) is a standalone action, not part of
// that selection group, so it never gets the select handler.
const stbItem = (label, state = 'default', withRight = false) => `
          <div class="stb-item">
            <div class="stb-item-inner${state !== 'default' ? ` is-${state}` : ''}"${withRight ? '' : ' onclick="window._stbSelectItem(this)"'}>
              <div class="stb-item-icon">${sbxIconPlaceholder}</div>
              <span class="stb-item-label">${label}</span>
              ${withRight ? `<div class="stb-item-right">${sbxIconPlaceholder}</div>` : ''}
            </div>
          </div>`;

// Click-to-select for the nav list — swaps `.is-selected` to whichever row
// was clicked, scoped to that row's own .stb-list (collapsed rail and
// expanded panel share this markup, so it works identically in both states).
window._stbSelectItem = function(el) {
  const list = el.closest('.stb-list');
  if (!list) return;
  const current = list.querySelector('.stb-item-inner.is-selected');
  if (current && current !== el) current.classList.remove('is-selected');
  el.classList.add('is-selected');
};

function standartSidebarMarkup(state) {
  const collapsedCls = state === 'collapsed' ? ' is-collapsed' : '';
  return `
        <div class="stb-shell${collapsedCls}">
          <div class="stb-top">
            <button class="stb-menu-btn" onclick="window._stbToggle(this)" title="Toggle sidebar" aria-label="Toggle sidebar">${sbxIconMenu}</button>
            <div class="stb-brand">
              <div class="stb-logo"></div>
              <span class="stb-title">Title Here</span>
            </div>
          </div>
          <div class="stb-body">
            <div class="stb-search-wrap">
              <div class="bt-searchbox bt-searchbox--md">
                <div class="bt-searchbox__control">
                  <span class="bt-searchbox__icon">${sbxIconSearch}</span>
                </div>
                <div class="bt-searchbox__field">
                  <input class="bt-searchbox__text" type="text" placeholder="Search" oninput="sbxInput(this)" />
                </div>
                <div class="stb-searchbox-kbd">Tab</div>
              </div>
            </div>
            <div class="stb-list">
              ${stbItem('Drawer Item Label')}
              ${stbItem('Drawer Item Label')}
              ${stbItem('Drawer Item Label')}
              ${stbItem('Drawer Item Label', 'selected')}
              ${stbItem('Drawer Item Label')}
            </div>
            <div class="stb-pinned">
              ${stbItem('Drawer Item Label', 'default', true)}
            </div>
          </div>
        </div>`;
}

const stbItemCode = (label, state = 'default', withRight = false) => `      <div class="stb-item">
        <div class="stb-item-inner${state !== 'default' ? ` is-${state}` : ''}">
          <div class="stb-item-icon"><!-- icon --></div>
          <span class="stb-item-label">${label}</span>${withRight ? '\n          <div class="stb-item-right"><!-- icon --></div>' : ''}
        </div>
      </div>`;

function standartSidebarCodeSnippet(state) {
  return `<nav class="stb-shell${state === 'collapsed' ? ' is-collapsed' : ''}">
  <div class="stb-top">
    <button class="stb-menu-btn" onclick="/* toggle .is-collapsed */"><!-- menu icon --></button>
    <div class="stb-brand">
      <div class="stb-logo"></div>
      <span class="stb-title">Title Here</span>
    </div>
  </div>
  <div class="stb-body">
    <div class="stb-search-wrap">
      <div class="bt-searchbox bt-searchbox--md">
        <div class="bt-searchbox__control">
          <span class="bt-searchbox__icon"><!-- search icon --></span>
        </div>
        <div class="bt-searchbox__field">
          <input class="bt-searchbox__text" type="text" placeholder="Search" />
        </div>
        <div class="stb-searchbox-kbd">Tab</div>
      </div>
    </div>
    <div class="stb-list">
${stbItemCode('Drawer Item Label')}
${stbItemCode('Drawer Item Label', 'selected')}
      <!-- …repeat per nav item -->
    </div>
    <div class="stb-pinned">
${stbItemCode('Drawer Item Label', 'default', true)}
    </div>
  </div>
</nav>`;
}

// Isolated single-row preview used by the Overview "States" table — shows
// the item at a fixed 220px width instead of the full 280px shell so
// Default / Hover / Selected can sit side by side.
function stbItemStatePreview(state) {
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:12px;background:var(--bt-base-default);">
      <div class="stb-item" style="padding:0;width:220px;">
        <div class="stb-item-inner${state !== 'default' ? ` is-${state}` : ''}">
          <div class="stb-item-icon">${sbxIconPlaceholder}</div>
          <span class="stb-item-label">Drawer Item Label</span>
        </div>
      </div>
    </div>`;
}

const STB_ITEM_STATE_VARIANTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'selected', label: 'Selected' },
];

function sidebarCss(type, props) {
  const state = (props && props.state) || 'expanded';
  const collapsed = state === 'collapsed';
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;

  if (type === 'standart') {
    lines.push(`/* Standart Sidebar · ${collapsed ? 'Collapsed' : 'Expanded'} */`);
    lines.push('');
    lines.push('.stb-shell {');
    lines.push(p('width', collapsed ? '48px  /* icon rail */' : '280px  /* full panel */'));
    lines.push(p('background', 'var(--bt-base-default)  /* #ffffff */'));
    lines.push(p('border-right', '1px solid var(--bt-border-primary-default)  /* #d4d4d4 */'));
    lines.push(p('transition', 'width 200ms ease'));
    lines.push('}');
    lines.push('');
    lines.push('.stb-top {');
    lines.push(p('height', '48px'));
    lines.push(p('padding', collapsed ? 'var(--bt-space-lg)  /* 10px all sides — no logo row to anchor against */' : 'var(--bt-space-sm) var(--bt-space-lg)  /* 6px 10px */'));
    lines.push(p('background', 'var(--bt-surface-brand-default)  /* #0d4e97 */'));
    if (collapsed) lines.push(p('justify-content', 'center  /* .stb-brand is hidden */'));
    lines.push('}');
    lines.push('');
    lines.push('.stb-menu-btn {');
    lines.push(p('width', '28px'));
    lines.push(p('height', '28px'));
    lines.push(p('border-radius', 'var(--bt-radius-sm)  /* 4px */'));
    lines.push(p('background', 'var(--bt-primary-default)  /* #0d4e97 */'));
    lines.push('}');
    lines.push('.stb-menu-btn:hover { background: var(--bt-primary-intense); }  /* #0f447d */');
    if (collapsed) {
      lines.push('');
      lines.push('.stb-body { padding-top: var(--bt-space-2xl); }  /* 16px — replaces the hidden Search zone\'s implicit gap */');
    }
    lines.push('');
    lines.push('.stb-item-inner {');
    lines.push(p('height', '32px'));
    lines.push(p('border-radius', 'var(--bt-radius-md)  /* 6px */'));
    lines.push(p('background', 'var(--bt-base-default)  /* #ffffff */'));
    lines.push('}');
    lines.push('');
    lines.push('.stb-item-inner:hover,');
    lines.push('.stb-item-inner.is-hover {');
    lines.push(p('background', 'var(--bt-base-subtle)  /* #f5f5f5 */'));
    lines.push('}');
    lines.push('');
    lines.push('.stb-item-inner.is-selected {');
    lines.push(p('background', 'var(--bt-surface-brand-default)  /* #0d4e97 */'));
    lines.push(p('color', 'var(--bt-text-primary-inverted)  /* #ffffff */'));
    lines.push('}');
    if (collapsed) {
      lines.push('');
      lines.push('.stb-item-label,');
      lines.push('.stb-item-right {');
      lines.push('  display: none;  /* label/right control hidden while collapsed */');
      lines.push('}');
      lines.push('');
      lines.push('.stb-pinned {');
      lines.push('  padding: 0 0 var(--bt-space-4xl);  /* 24px bottom safe-area, no top padding */');
      lines.push('  margin-top: var(--bt-space-2xl);  /* 16px gap from the icon list above */');
      lines.push('}');
    } else {
      lines.push('');
      lines.push('.stb-pinned { padding: var(--bt-space-2xl) 0; }  /* 16px — no divider, spacing alone separates it */');
    }
  } else {
    lines.push(`/* Hub Sidebar · ${collapsed ? 'Collapsed' : 'Expanded'} */`);
    lines.push('');
    lines.push('.sbx-rail {');
    lines.push(p('width', '48px'));
    lines.push(p('background', 'var(--bt-secondary-intense)  /* #272727 */'));
    lines.push(p('padding', 'var(--bt-space-4xl) var(--bt-space-xs)  /* 24px 4px */'));
    lines.push(p('gap', 'var(--bt-space-8xl)  /* 40px between top/center/bottom */'));
    lines.push('}');
    lines.push('');
    lines.push('.sbx-btn {');
    lines.push(p('width', '32px'));
    lines.push(p('height', '32px'));
    lines.push(p('border-radius', 'var(--bt-radius-md)  /* 6px */'));
    lines.push(p('background', 'var(--bt-secondary-intense)  /* invisible against the rail at rest */'));
    lines.push('}');
    lines.push('.sbx-btn:hover,');
    lines.push('.sbx-btn.is-hover,');
    lines.push('.sbx-btn:active,');
    lines.push('.sbx-btn.is-active,');
    lines.push('.sbx-btn.is-selected { background: var(--bt-secondary-solid); }  /* #535353 */');
    lines.push('.sbx-btn:focus-visible,');
    lines.push('.sbx-btn.is-focus { box-shadow: 0 0 0 3px rgba(212,212,212,0.25); }');
    lines.push('');
    lines.push('.sbx-drawer {');
    lines.push(p('width', collapsed ? '0px' : '280px'));
    lines.push(p('opacity', collapsed ? '0' : '1'));
    lines.push(p('border-right', collapsed ? 'none' : '1px solid var(--bt-border-primary-default)'));
    lines.push(p('transition', 'width 180ms ease, opacity 120ms ease'));
    lines.push('}');
    lines.push('');
    lines.push('.sbx-drawer-center { gap: var(--bt-space-2xs); }  /* 2px — no padding on the list itself */');
    lines.push('.sbx-item { padding: 0 var(--bt-space-md); }  /* 8px horizontal only, on the item wrapper */');
    lines.push('');
    lines.push('.sbx-item-inner:hover,');
    lines.push('.sbx-item-inner.is-hover { background: var(--bt-surface-subtle); }  /* #f5f5f5 */');
    lines.push('');
    lines.push('/* Active and Selected share the same neutral gray — no brand colour,');
    lines.push('   unlike the Standart Sidebar\'s selected item */');
    lines.push('.sbx-item-inner:active,');
    lines.push('.sbx-item-inner.is-selected { background: var(--bt-surface-primary-muted); }  /* #e6e6e6 */');
    lines.push('');
    lines.push('.sbx-item-inner:focus-visible,');
    lines.push('.sbx-item-inner.is-focus {');
    lines.push(p('background', 'var(--bt-base-default)'));
    lines.push(p('box-shadow', '0 0 0 3px rgba(212,212,212,0.25)'));
    lines.push('}');
  }

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

// ── Unified dispatcher ────────────────────────────────────────────
// `type` selects Standart vs Hub Sidebar; `props.state` (expanded|collapsed)
// applies to whichever type is active.
function sidebarMarkup(type, props) {
  const state = (props && props.state) || 'expanded';
  return type === 'standart' ? standartSidebarMarkup(state) : sidebarMarkupA(state);
}
function sidebarCodeSnippet(type, props) {
  const state = (props && props.state) || 'expanded';
  return type === 'standart' ? standartSidebarCodeSnippet(state) : sidebarCodeSnippetA(state);
}

// Isolation mode target — docs/isolation.html looks this up by ?component=.
window.PGD_ISOLATE = window.PGD_ISOLATE || {};
window.PGD_ISOLATE['sidebar'] = {
  mount(root, variant, props) { root.innerHTML = sidebarMarkup(variant, props || {}); }
};

const SBX_TYPES = [
  { key: 'standart', label: 'Standart Sidebar' },
  { key: 'hub',       label: 'Hub Sidebar' },
];
const SBX_STATE_OPTS = [
  { key: 'expanded',  label: 'Expanded' },
  { key: 'collapsed', label: 'Collapsed' },
];

PAGES_WEB['components/sidebar'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc: ['Structure', 'Anatomy', 'States'],
  render: (tab) => {
    const title = 'Sidebar';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
    const pw = html => `<div style="padding:12px 0;">${html}</div>`;

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Live preview of the Sidebar. Pick a type — Standart or Hub — and a state — Expanded or Collapsed. Clicking the menu button on the sidebar's own top zone toggles the state directly; measure it, preview it at other viewport widths, or open it in isolation mode.</p>
      <h2>Playground</h2>
      ${registerPlayground({
        id: 'pgd-sidebar-examples',
        variants: SBX_TYPES,
        props: [{ key: 'state', label: 'State', options: SBX_STATE_OPTS, default: 'expanded' }],
        preview: sidebarMarkup,
        code: sidebarCodeSnippet,
        css: sidebarCss,
        isolate: 'sidebar',
        noMargin: true,
      })}

      <h2>Item States (Standart Sidebar)</h2>
      ${registerPlayground({
        id: 'pgd-sidebar-item-states-ex',
        variants: STB_ITEM_STATE_VARIANTS,
        preview: (s) => stbItemStatePreview(s),
        code:    (s) => `<div class="stb-item">\n  <div class="stb-item-inner${s !== 'default' ? ` is-${s}` : ''}">\n    <div class="stb-item-icon"><!-- icon --></div>\n    <span class="stb-item-label">Drawer Item Label</span>\n  </div>\n</div>`,
      })}

      <h2>Item States (Hub Sidebar)</h2>
      ${registerPlayground({
        id: 'pgd-sidebar-hub-item-states-ex',
        variants: SBX_ITEM_STATE_VARIANTS,
        preview: (s) => sbxItemStatePreview(s),
        code:    (s) => `<div class="sbx-item">\n  <div class="sbx-item-inner${s !== 'default' ? ` is-${s}` : ''}">\n    <div class="sbx-item-icon"><!-- icon --></div>\n    <div class="sbx-item-label">Drawer Item Label</div>\n  </div>\n</div>`,
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Design tokens used to build the Sidebar, mapped to their Figma source and existing <code style="font-family:var(--mono);font-size:12px;">--bt-*</code> variables.</p>
      <h2>Standart Sidebar</h2>
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">--bt-surface-brand-default</span></td><td>#0d4e97</td><td>Top zone background (both states)</td></tr>
          <tr><td><span class="token-name">--bt-base-default</span></td><td>#ffffff</td><td>Panel / item background</td></tr>
          <tr><td><span class="token-name">--bt-base-subtle</span></td><td>#f5f5f5</td><td>Item hover background</td></tr>
          <tr><td><span class="token-name">--bt-border-primary-default</span></td><td>#d4d4d4</td><td>Panel right border, searchbox border, shortcut badge border</td></tr>
          <tr><td><span class="token-name">--bt-primary-default / --bt-primary-intense</span></td><td>#0d4e97 / #0f447d</td><td>Menu button background / hover</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-default</span></td><td>#1a1a1a</td><td>Item label (default)</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-inverted</span></td><td>#ffffff</td><td>Title text · selected item label &amp; icon</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-muted</span></td><td>#a3a3a3</td><td>Searchbox placeholder text</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-strong</span></td><td>#535353</td><td>Shortcut badge text, item icon</td></tr>
          <tr><td><span class="token-name">--bt-radius-md</span></td><td>6px</td><td>Logo / searchbox / item radius</td></tr>
          <tr><td><span class="token-name">--bt-radius-sm</span></td><td>4px</td><td>Menu button radius</td></tr>
          <tr><td><span class="token-name">--bt-radius-xs</span></td><td>2px</td><td>Shortcut badge radius</td></tr>
          <tr><td><span class="token-name">--bt-space-lg</span></td><td>10px</td><td>Top zone / search wrap horizontal padding</td></tr>
          <tr><td><span class="token-name">--bt-space-md</span></td><td>8px</td><td>Top zone gap · item horizontal padding (also = collapsed width minus icon)</td></tr>
          <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>Top zone vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-space-xs</span></td><td>4px</td><td>Left/right control padding (24px icon → 32px control)</td></tr>
          <tr><td><span class="token-name">--bt-space-xl</span></td><td>12px</td><td>Search wrap vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-space-2xl</span></td><td>16px</td><td>Pinned item vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-title-lg-medium</span></td><td>500 · 18px / 24px</td><td>Title text</td></tr>
          <tr><td><span class="token-name">--bt-blue-100 / -600 / -700</span></td><td>#e2edfc / #0e62bb / #0d4e97</td><td>App logo placeholder border / gradient</td></tr>
          <tr><td><span class="token-name">--bt-text-xs-regular</span></td><td>400 · 12px / 16px</td><td>Searchbox placeholder text</td></tr>
          <tr><td><span class="token-name">--bt-text-2xs-regular</span></td><td>400 · 10px / 12px</td><td>Shortcut badge text</td></tr>
        </tbody>
      </table>

      <h2>Hub Sidebar</h2>
      <table class="token-table">
        <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">--bt-secondary-intense</span></td><td>#272727</td><td>Rail background · icon button background (invisible at rest)</td></tr>
          <tr><td><span class="token-name">--bt-secondary-solid</span></td><td>#535353</td><td>Icon button hover, active &amp; selected background</td></tr>
          <tr><td><span class="token-name">--bt-gray-900 / -800 / -600</span></td><td>#1a1a1a / #272727 / #535353</td><td>Logo placeholder gradient (both 40px top logo and 36px mid-list logo)</td></tr>
          <tr><td><span class="token-name">--bt-base-default</span></td><td>#ffffff</td><td>Drawer / drawer item background</td></tr>
          <tr><td><span class="token-name">--bt-border-primary-default</span></td><td>#d4d4d4</td><td>Rail / drawer right border, searchbox border, shortcut badge border</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-default</span></td><td>#1a1a1a</td><td>Drawer item label</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-muted</span></td><td>#a3a3a3</td><td>Searchbox placeholder text</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-strong</span></td><td>#535353</td><td>Shortcut badge text, drawer item icon</td></tr>
          <tr><td><span class="token-name">--bt-radius-md</span></td><td>6px</td><td>Logo / searchbox / drawer item / rail icon-button radius</td></tr>
          <tr><td><span class="token-name">--bt-radius-xs</span></td><td>2px</td><td>Shortcut badge radius</td></tr>
          <tr><td><span class="token-name">--bt-space-xs</span></td><td>4px</td><td>Rail horizontal padding · left/right control padding (24px icon → 32px control)</td></tr>
          <tr><td><span class="token-name">--bt-space-md</span></td><td>8px</td><td>Drawer item horizontal padding (also = collapsed rail width minus icon)</td></tr>
          <tr><td><span class="token-name">--bt-space-2xs</span></td><td>2px</td><td>Gap between drawer items · search icon control padding</td></tr>
          <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>Rail bottom-zone gap</td></tr>
          <tr><td><span class="token-name">--bt-space-xl</span></td><td>12px</td><td>Drawer top/bottom horizontal padding</td></tr>
          <tr><td><span class="token-name">--bt-space-2xl</span></td><td>16px</td><td>Drawer top/bottom vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-space-4xl</span></td><td>24px</td><td>Rail vertical padding</td></tr>
          <tr><td><span class="token-name">--bt-space-8xl</span></td><td>40px</td><td>Gap between rail zones (top/center/bottom)</td></tr>
          <tr><td><span class="token-name">--bt-surface-subtle</span></td><td>#f5f5f5</td><td>Drawer item hover background</td></tr>
          <tr><td><span class="token-name">--bt-surface-primary-muted</span></td><td>#e6e6e6</td><td>Drawer item active &amp; selected background (neutral, no brand colour)</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Sidebar usage guidelines.</p>
      <h2>When to use Standart Sidebar</h2>
      <ul>
        <li>Single-level navigation where the whole panel toggles between an icon rail and a full labelled panel</li>
        <li>When there's no need for a second, independent drawer alongside a persistent rail</li>
        <li>Apps with a search-first navigation pattern (search sits at the top of the expanded panel)</li>
      </ul>
      <h2>When to use Hub Sidebar</h2>
      <ul>
        <li>Complex B2B apps where the rail provides always-visible global navigation</li>
        <li>When users need to collapse the drawer to maximise content area while keeping the rail anchored</li>
        <li>When the app has two distinct navigation levels (global rail + contextual drawer)</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li><strong>Standart:</strong> Keep the collapsed rail's icon set identical in order and count to the expanded list — items only lose their label, they don't reflow</li>
        <li><strong>Standart:</strong> Reserve the selected state for the current page only; use hover for transient feedback</li>
        <li><strong>Hub:</strong> Keep the rail's icon set short and stable — it should not scroll</li>
        <li><strong>Hub:</strong> Pin account/settings actions in the drawer bottom slot, separated by a divider</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li><strong>Standart:</strong> Don't drop the pinned bottom item's right control when expanded — it's the only item with a right-side action</li>
        <li><strong>Hub:</strong> Don't mix unrelated actions into the rail — it's for global, always-visible entry points only</li>
        <li><strong>Hub:</strong> Don't remove the rail when collapsing the drawer — the rail stays as the persistent anchor</li>
      </ul>
    `};

    // ── Overview ──────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-sidebar-overview',
        variants: SBX_TYPES,
        props: [{ key: 'state', label: 'State', options: SBX_STATE_OPTS, default: 'expanded' }],
        preview: sidebarMarkup,
        code: sidebarCodeSnippet,
        css: sidebarCss,
        isolate: 'sidebar',
      })}

      <p class="page-desc">Two sidebar types, each with an Expanded and Collapsed state. <strong>Standart Sidebar</strong> — a single panel whose own top button toggles its width between a 48px icon rail and a 280px full panel with search + labelled items. <strong>Hub Sidebar</strong> — a persistent dark icon rail paired with a separately-toggleable 280px drawer; best for complex B2B apps with two navigation levels.</p>

      <h2 id="Structure">Structure</h2>
      <p style="font:var(--bt-text-xs-regular, 400 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin-bottom:var(--bt-space-md, 8px)">Standart Sidebar</p>
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>Zone</th><th>Contents</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Top</span></td><td>Menu/toggle button + app logo &amp; title (title hidden when collapsed)</td></tr>
          <tr><td><span class="token-name">Body · Search</span></td><td>Searchbox with keyboard shortcut hint (hidden when collapsed)</td></tr>
          <tr><td><span class="token-name">Body · List</span></td><td>Scrollable list of items — left icon + label, label hidden when collapsed</td></tr>
          <tr><td><span class="token-name">Body · Pinned</span></td><td>Bottom item with left + right control (no divider — spacing alone separates it)</td></tr>
        </tbody>
      </table>

      <p style="font:var(--bt-text-xs-regular, 400 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin-bottom:var(--bt-space-md, 8px)">Hub Sidebar</p>
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>Zone</th><th>Contents</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Rail · Top</span></td><td>App logo placeholder (40×40)</td></tr>
          <tr><td><span class="token-name">Rail · Center</span></td><td>Icon buttons + collapse control, vertically centered, grows to fill height</td></tr>
          <tr><td><span class="token-name">Rail · Bottom</span></td><td>Secondary icon buttons (e.g. settings, help)</td></tr>
          <tr><td><span class="token-name">Drawer · Top</span></td><td>Searchbox with keyboard shortcut hint</td></tr>
          <tr><td><span class="token-name">Drawer · Center</span></td><td>Scrollable list of drawer items</td></tr>
          <tr><td><span class="token-name">Drawer · Bottom</span></td><td>Pinned item (no divider — spacing alone separates it)</td></tr>
        </tbody>
      </table>

      <h2 id="Anatomy">Anatomy</h2>
      <p style="font:var(--bt-text-xs-regular, 400 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin-bottom:var(--bt-space-md, 8px)">Standart Sidebar</p>
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">Panel</td><td>Width — expanded / collapsed</td><td>—</td><td>280px / 48px</td></tr>
          <tr><td>Background</td><td>${tk('Base/default')}</td><td>#ffffff</td></tr>
          <tr><td>Border right</td><td>${tk('Border/Primary default')}</td><td>1px solid #d4d4d4</td></tr>
          <tr><td rowspan="2">Top zone</td><td>Height</td><td>—</td><td>48px</td></tr>
          <tr><td>Background</td><td>${tk('Surface/Brand default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Menu button</td><td>Size</td><td>—</td><td>28 × 28px</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/sm')}</td><td>4px</td></tr>
          <tr><td rowspan="2">Left / Right control</td><td>Size</td><td>—</td><td>32 × 32px (24px icon + 4px padding)</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
          <tr><td>Search</td><td>Component</td><td>—</td><td>Reuses <code style="font-family:var(--mono);font-size:12px;">.bt-searchbox--md</code> from the SearchBox component (32px, real input)</td></tr>
          <tr><td rowspan="2">Item row</td><td>Height</td><td>—</td><td>32px</td></tr>
          <tr><td>Selected background</td><td>${tk('Surface/Brand default')}</td><td>#0d4e97 · text/icon #ffffff</td></tr>
          <tr><td>Item label</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px · #1a1a1a</td></tr>
        </tbody>
      </table>

      <p style="font:var(--bt-text-xs-regular, 400 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin-bottom:var(--bt-space-md, 8px)">Hub Sidebar</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">Rail</td><td>Width</td><td>—</td><td>48px (matches Standart Sidebar's collapsed width)</td></tr>
          <tr><td>Background</td><td>${tk('color/secondary/--bt-secondary-intense')}</td><td>#272727</td></tr>
          <tr><td>Border right</td><td>${tk('Border/Primary default')}</td><td>1px solid #d4d4d4</td></tr>
          <tr><td rowspan="2">Rail padding / gap</td><td>Padding V / H</td><td>${tk('Space/4xl')} · ${tk('Space/xs')}</td><td>24px / 4px</td></tr>
          <tr><td>Gap between zones</td><td>${tk('Space/8xl')}</td><td>40px</td></tr>
          <tr><td rowspan="2">Logo placeholder (40px top / 36px mid-list)</td><td>Border</td><td>—</td><td>0.75px solid white</td></tr>
          <tr><td>Background</td><td>—</td><td>linear-gradient(-45deg, gray-900 → gray-800 29% → gray-600 100%)</td></tr>
          <tr><td rowspan="2">Rail icon button</td><td>Size</td><td>—</td><td>32 × 32px (24px icon + 4px padding)</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/md')}</td><td>6px</td></tr>
          <tr><td rowspan="2">Drawer</td><td>Width</td><td>—</td><td>280px</td></tr>
          <tr><td>Background / Border right</td><td>${tk('Base/default')}</td><td>#ffffff · 1px solid #d4d4d4</td></tr>
          <tr><td>Searchbox</td><td>Component</td><td>—</td><td>Reuses <code style="font-family:var(--mono);font-size:12px;">.bt-searchbox--sm</code> from the SearchBox component (28px, real input)</td></tr>
          <tr><td>Shortcut badge</td><td>Border radius</td><td>${tk('Radius/xs')}</td><td>2px</td></tr>
          <tr><td rowspan="4">Drawer item</td><td>Padding H / row gap</td><td>${tk('Space/md')} · ${tk('Space/2xs')}</td><td>8px / 2px</td></tr>
          <tr><td>Left control</td><td>—</td><td>32 × 32px (24px icon + 4px padding)</td></tr>
          <tr><td>Hover / Active &amp; Selected background</td><td>${tk('Base/subtle')} · ${tk('Surface/Primary muted')}</td><td>#f5f5f5 · #e6e6e6 — text/icon colour never changes</td></tr>
          <tr><td>Focus</td><td>—</td><td>white bg · 0 0 0 3px rgba(212,212,212,.5) ring</td></tr>
          <tr><td>Label</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px · #1a1a1a</td></tr>
        </tbody>
      </table>

      <h2 id="States">States</h2>
      <p style="font:var(--bt-text-xs-regular, 400 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin-bottom:var(--bt-space-md, 8px)">Item row (Standart Sidebar) — the same states apply to the collapsed rail's icon-only rows, since it's the same markup with the label hidden.</p>
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>State</th><th>Preview</th></tr></thead>
        <tbody>
          ${STB_ITEM_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${pw(stbItemStatePreview(s.key))}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <p style="font:var(--bt-text-xs-regular, 400 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin-bottom:var(--bt-space-md, 8px)">Drawer item (Hub Sidebar)</p>
      <table class="token-table">
        <thead><tr><th>State</th><th>Preview</th></tr></thead>
        <tbody>
          ${SBX_ITEM_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${pw(sbxItemStatePreview(s.key))}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};
  }
};

// ── Split Button ────────────────────────────────────────────────
const _spltChevron = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>`;

const SPLT_FILL_VARIANTS = [
  { key: 'solid',   label: 'Solid' },
  { key: 'outline', label: 'Outline' },
  { key: 'flat',    label: 'Flat' },
  { key: 'ghost',   label: 'Ghost' },
];
const SPLT_SIZE_VARIANTS = [
  { key: '2xs', label: '2xs' },
  { key: 'xs',  label: 'xs' },
  { key: 'sm',  label: 'sm' },
  { key: 'md',  label: 'md' },
  { key: 'lg',  label: 'lg' },
  { key: 'xl',  label: 'xl' },
  { key: '2xl', label: '2xl' },
];
const SPLT_STATE_OPTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'focus',    label: 'Focus' },
  { key: 'active',   label: 'Active' },
  { key: 'selected', label: 'Selected' },
  { key: 'disabled', label: 'Disabled' },
];
const SPLT_CONTENT_OPTS = [
  { key: 'icon-text', label: 'Icon & Text' },
  { key: 'icon',      label: 'Icon Only' },
  { key: 'text',      label: 'Text Only' },
];

// ── CSS Properties data (fill × theme) ──────────────────────────
// Her entry: { bg?, border?, color, divider, hover:{bg?,color?,effect?},
//             active?:{bg?,color?}, focus, dis:{bg?,color} }
const _spltCssProps = {
  'base-solid':        { bg:'var(--bt-base-light)',          color:'var(--bt-text-primary-default)',   divider:'var(--bt-border-primary-default)', hover:{bg:'var(--bt-base-emphasis)'},      active:{bg:'var(--bt-primary-subtle)',border:'var(--bt-primary-default)'},      focus:'rgba(212,212,212,.50)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'base-outline':      { border:'var(--bt-border-primary-default)', color:'var(--bt-text-primary-default)', divider:'var(--bt-border-primary-default)', hover:{bg:'var(--bt-base-emphasis)'},  active:{bg:'var(--bt-primary-subtle)',border:'var(--bt-primary-default)'},      focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'base-flat':         { color:'var(--bt-text-primary-default)',   divider:'var(--bt-border-primary-default)',   hover:{bg:'var(--bt-base-emphasis)'},      active:{bg:'var(--bt-primary-subtle)',border:'var(--bt-primary-default)'},      focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'base-ghost':        { color:'var(--bt-text-primary-default)',   divider:'var(--bt-border-primary-default)',   hover:{effect:'text-decoration: underline'},                                            focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-solid':     { bg:'var(--bt-primary-default)',    color:'var(--bt-text-primary-inverted)',  divider:'var(--bt-primary-solid)',          hover:{bg:'var(--bt-primary-intense)'},     active:{bg:'var(--bt-primary-intense)'},    focus:'rgba(13,78,151,.50)',   dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'primary-outline':   { border:'var(--bt-primary-default)', color:'var(--bt-primary-default)',       divider:'var(--bt-primary-solid)',        hover:{bg:'var(--bt-primary-subtle)'},      active:{bg:'var(--bt-primary-subtle)'},     focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-flat':      { color:'var(--bt-primary-default)',        divider:'var(--bt-primary-solid)',     hover:{bg:'var(--bt-primary-subtle)'},      active:{bg:'var(--bt-primary-subtle)',border:'var(--bt-primary-default)'},     focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-ghost':     { color:'var(--bt-primary-default)',        divider:'var(--bt-primary-solid)',     hover:{color:'var(--bt-primary-intense)'}, active:{color:'var(--bt-primary-default)'}, focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-solid':   { bg:'var(--bt-secondary-default)',  color:'var(--bt-text-primary-inverted)',  divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-secondary-intense)'},   active:{bg:'var(--bt-secondary-intense)'},  focus:'rgba(212,212,212,.50)', dis:{bg:'var(--bt-secondary-muted)',color:'var(--bt-text-primary-muted)'} },
  'secondary-outline': { border:'var(--bt-border-primary-default)', color:'var(--bt-text-primary-default)', divider:'var(--bt-border-primary-default)', hover:{bg:'var(--bt-secondary-emphasis)'}, active:{bg:'var(--bt-primary-subtle)',border:'var(--bt-primary-default)'}, focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-flat':    { color:'var(--bt-text-primary-default)',   divider:'var(--bt-border-primary-default)',   hover:{bg:'var(--bt-secondary-emphasis)'}, active:{bg:'var(--bt-primary-subtle)',border:'var(--bt-primary-default)'}, focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-ghost':   { color:'var(--bt-text-primary-default)',   divider:'var(--bt-border-primary-default)',   hover:{effect:'text-decoration: underline'},                                            focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'success-solid':     { bg:'var(--bt-success-default)',    color:'var(--bt-text-primary-inverted)',  divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-success-intense)'},     active:{bg:'var(--bt-success-intense)'},    focus:'rgba(68,135,113,.24)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'success-outline':   { border:'var(--bt-border-success-default)', color:'var(--bt-text-success-default)', divider:'var(--bt-border-success-default)', hover:{bg:'var(--bt-success-subtle)'}, active:{bg:'var(--bt-success-subtle)'},  focus:'rgba(68,135,113,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'success-flat':      { color:'var(--bt-text-success-default)',    divider:'var(--bt-border-success-default)',   hover:{bg:'var(--bt-success-subtle)'},      active:{bg:'var(--bt-success-subtle)',border:'var(--bt-success-default)'},     focus:'rgba(68,135,113,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'success-ghost':     { color:'var(--bt-text-success-default)',    divider:'var(--bt-border-success-default)',   hover:{color:'var(--bt-success-intense)'},  active:{color:'var(--bt-success-default)'}, focus:'rgba(68,135,113,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-solid':     { bg:'var(--bt-warning-default)',    color:'var(--bt-text-primary-inverted)',  divider:'rgba(0,0,0,0.15)',                hover:{bg:'var(--bt-warning-intense)'},     active:{bg:'var(--bt-warning-intense)'},    focus:'rgba(212,175,44,0.25)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'warning-outline':   { border:'var(--bt-border-warning-default)', color:'var(--bt-text-warning-default)', divider:'var(--bt-border-warning-default)', hover:{bg:'var(--bt-warning-subtle)'}, active:{bg:'var(--bt-warning-subtle)'},  focus:'rgba(212,175,44,0.25)', dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-flat':      { color:'var(--bt-text-warning-default)',    divider:'var(--bt-border-warning-default)',   hover:{bg:'var(--bt-warning-subtle)'},      active:{bg:'var(--bt-warning-subtle)',border:'var(--bt-warning-default)'},     focus:'rgba(212,175,44,0.25)', dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-ghost':     { color:'var(--bt-text-warning-default)',    divider:'var(--bt-border-warning-default)',   hover:{color:'var(--bt-warning-intense)'},  active:{color:'var(--bt-warning-default)'}, focus:'rgba(212,175,44,0.25)', dis:{color:'var(--bt-text-primary-muted)'} },
  'error-solid':       { bg:'var(--bt-error-default)',      color:'var(--bt-text-primary-inverted)',  divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-error-intense)'},       active:{bg:'var(--bt-error-intense)'},      focus:'rgba(232,75,91,.24)',  dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'error-outline':     { border:'var(--bt-border-error-default)', color:'var(--bt-text-error-default)', divider:'var(--bt-border-error-default)', hover:{bg:'var(--bt-error-subtle)'},        active:{bg:'var(--bt-error-subtle)'},       focus:'rgba(232,75,91,.24)',  dis:{color:'var(--bt-text-primary-muted)'} },
  'error-flat':        { color:'var(--bt-text-error-default)',      divider:'var(--bt-border-error-default)',    hover:{bg:'var(--bt-error-subtle)'},        active:{bg:'var(--bt-error-subtle)',border:'var(--bt-error-default)'},       focus:'rgba(232,75,91,.24)',  dis:{color:'var(--bt-text-primary-muted)'} },
  'error-ghost':       { color:'var(--bt-text-error-default)',      divider:'var(--bt-border-error-default)',    hover:{color:'var(--bt-error-intense)'},    active:{color:'var(--bt-error-default)'},   focus:'rgba(232,75,91,.24)',  dis:{color:'var(--bt-text-primary-muted)'} },
  'information-solid': { bg:'var(--bt-information-default)', color:'var(--bt-text-primary-inverted)', divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-information-intense)'}, active:{bg:'var(--bt-information-intense)'},focus:'rgba(13,78,151,.50)',   dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'information-outline':{ border:'var(--bt-border-information-default)', color:'var(--bt-information-default)', divider:'var(--bt-border-information-default)', hover:{bg:'var(--bt-information-subtle)'}, active:{bg:'var(--bt-information-subtle)'}, focus:'rgba(13,78,151,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'information-flat':  { color:'var(--bt-information-default)',     divider:'var(--bt-border-information-default)',    hover:{bg:'var(--bt-information-subtle)'},  active:{bg:'var(--bt-information-subtle)',border:'var(--bt-information-default)'}, focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'information-ghost': { color:'var(--bt-information-default)',     divider:'var(--bt-border-information-default)',    hover:{color:'var(--bt-information-intense)'}, active:{color:'var(--bt-information-default)'}, focus:'rgba(13,78,151,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
};

const _spltSizePyToken = { '2xs':'var(--bt-space-2xs)', 'xs':'var(--bt-space-xs)', 'sm':'var(--bt-space-sm)', 'md':'var(--bt-space-md)', 'lg':'var(--bt-space-lg)', 'xl':'var(--bt-space-xl)', '2xl':'var(--bt-space-2xl)' };
const _spltSizePyVal   = { '2xs':'2px', 'xs':'4px', 'sm':'6px', 'md':'8px', 'lg':'10px', 'xl':'12px', '2xl':'16px' };
const _spltSizePxToken = { '2xs':'var(--bt-space-xs)', 'xs':'var(--bt-space-md)', 'sm':'var(--bt-space-md)', 'md':'var(--bt-space-md)', 'lg':'var(--bt-space-md)', 'xl':'var(--bt-space-xl)', '2xl':'var(--bt-space-xl)' };
const _spltSizePxVal   = { '2xs':'4px', 'xs':'8px', 'sm':'8px', 'md':'8px', 'lg':'8px', 'xl':'12px', '2xl':'12px' };

function spltCss(fill, props) {
  const { theme, size, state } = props;
  const d = _spltCssProps[`${theme}-${fill}`];
  if (!d) return '';

  const disabled = state === 'disabled';
  const lines = [];

  const prop = (p, v) => `  ${p}: ${v};`;

  // Wrapper
  lines.push(`.bt-split-btn--${theme}-${fill} {`);
  if (d.bg)     lines.push(prop('--split-bg', d.bg));
  if (d.border) lines.push(prop('box-shadow', `0 0 0 1px ${d.border}`));
  lines.push(prop('color', d.color));
  lines.push(prop('--split-divider', d.divider));
  lines.push('}');

  // Size
  lines.push('');
  lines.push(`.bt-split-btn--${size} {`);
  lines.push(prop('--split-py', `${_spltSizePyToken[size]}  /* ${_spltSizePyVal[size]} */`));
  lines.push(prop('--split-px', `${_spltSizePxToken[size]}  /* ${_spltSizePxVal[size]} */`));
  lines.push('}');

  // Hover
  if (d.hover) {
    lines.push('');
    lines.push(`.bt-split-btn--${theme}-${fill} .bt-split-btn__button:hover,`);
    lines.push(`.bt-split-btn--${theme}-${fill} .bt-split-btn__split:hover {`);
    if (d.hover.bg)     lines.push(prop('background', d.hover.bg));
    if (d.hover.color)  lines.push(prop('color', d.hover.color));
    if (d.hover.effect) lines.push(`  ${d.hover.effect};`);
    lines.push('}');
  }

  // Active / Selected
  if (d.active) {
    lines.push('');
    lines.push(`.bt-split-btn--${theme}-${fill} .bt-split-btn__button:active,`);
    lines.push(`.bt-split-btn--${theme}-${fill} .bt-split-btn__split:active {`);
    if (d.active.bg)     lines.push(prop('background', d.active.bg));
    if (d.active.color)  lines.push(prop('color', d.active.color));
    if (d.active.border) lines.push(prop('box-shadow', `inset 0 0 0 1px ${d.active.border}`));
    lines.push('}');
  }

  // Focus ring
  lines.push('');
  lines.push(`.bt-split-btn--${theme}-${fill} .bt-split-btn__button:focus-visible,`);
  lines.push(`.bt-split-btn--${theme}-${fill} .bt-split-btn__split:focus-visible {`);
  lines.push(prop('box-shadow', `0 0 0 3px ${d.focus}`));
  lines.push('}');

  // Disabled
  lines.push('');
  lines.push(`.bt-split-btn--${theme}-${fill}[aria-disabled="true"] .bt-split-btn__button,`);
  lines.push(`.bt-split-btn--${theme}-${fill}[aria-disabled="true"] .bt-split-btn__split {`);
  if (d.dis.bg) lines.push(prop('background', d.dis.bg));
  lines.push(prop('color', d.dis.color));
  lines.push(prop('cursor', 'not-allowed'));
  lines.push('}');

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

function _spltCls(fill, size, state, theme = 'primary') {
  const parts = [`bt-split-btn`, `bt-split-btn--${theme}-${fill}`, `bt-split-btn--${size}`];
  if (state === 'hover')    parts.push('bt-split-btn--state-hover');
  if (state === 'focus')    parts.push('bt-split-btn--state-focus');
  if (state === 'active')   parts.push('bt-split-btn--state-active');
  if (state === 'selected') parts.push('bt-split-btn--state-selected');
  return parts.join(' ');
}

function spltPreview(fill, size, state, theme = 'primary', content = 'icon-text') {
  const disabled = state === 'disabled';
  const cls = _spltCls(fill, size, disabled ? 'default' : state, theme);
  const dis = disabled ? ' disabled' : '';
  const iconOnly = content === 'icon';
  const btnCls = iconOnly ? ' bt-split-btn__button--icon' : '';
  const btnIcon = content !== 'text' ? _btnIcon : '';
  const label = content !== 'icon' ? '<span>Button</span>' : '';
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <div class="${cls}">
        <button class="bt-split-btn__button${btnCls}"${dis}>${btnIcon}${label}</button>
        <div class="bt-split-btn__divider"></div>
        <button class="bt-split-btn__split"${dis}>${_spltChevron}</button>
      </div>
    </div>`;
}

function spltCode(fill, size, state, theme = 'primary', content = 'icon-text') {
  const disabled = state === 'disabled';
  const cls = _spltCls(fill, size, disabled ? 'default' : state, theme);
  const dis = disabled ? ' disabled' : '';
  const iconOnly = content === 'icon';
  const btnCls = iconOnly ? ' bt-split-btn__button--icon' : '';
  const codeIcon = content !== 'text' ? '\n    <!-- icon 16x16 -->' : '';
  const label = content !== 'icon' ? '\n    Button' : '';
  return `<div class="${cls}">
  <button class="bt-split-btn__button${btnCls}"${dis}>${codeIcon}${label}
  </button>
  <div class="bt-split-btn__divider"></div>
  <button class="bt-split-btn__split"${dis}>
    <!-- chevron-down 16x16 -->
  </button>
</div>`;
}

function _spltStateTable(theme) {
  return `
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>State</th>${SPLT_FILL_VARIANTS.map(f => `<th>${f.label}</th>`).join('')}</tr></thead>
        <tbody>
          ${SPLT_STATE_OPTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            ${SPLT_FILL_VARIANTS.map(f => `<td>${spltPreview(f.key, 'sm', s.key, theme, 'icon-text')}</td>`).join('')}
          </tr>`).join('')}
        </tbody>
      </table>`;
}

PAGES_WEB['components/split-button'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc: ['Anatomy', 'Sizes', 'States'],
  render: (tab) => {
    const title = 'Split Button';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    // ── Examples ─────────────────────────────────────────────────
    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Solid, Outline, Flat ve Ghost fill modları; 7 tema rengi, 7 boyut ve 6 state ile. Sol part (Button) metin + ikon barındırır, sağ part (Split) dropdown tetikler.</p>

      <h2>Solid</h2>
      ${registerPlayground({
        id: 'pgd-splt-solid-ex',
        variants: SPLT_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: SPLT_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: SPLT_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => spltPreview('solid', sz, p.state, p.theme, p.content),
        code:    (sz, p) => spltCode('solid', sz, p.state, p.theme, p.content),
      })}

      <h2>Outline</h2>
      ${registerPlayground({
        id: 'pgd-splt-outline-ex',
        variants: SPLT_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: SPLT_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: SPLT_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => spltPreview('outline', sz, p.state, p.theme, p.content),
        code:    (sz, p) => spltCode('outline', sz, p.state, p.theme, p.content),
      })}

      <h2>Flat</h2>
      ${registerPlayground({
        id: 'pgd-splt-flat-ex',
        variants: SPLT_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: SPLT_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: SPLT_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => spltPreview('flat', sz, p.state, p.theme, p.content),
        code:    (sz, p) => spltCode('flat', sz, p.state, p.theme, p.content),
      })}

      <h2>Ghost</h2>
      ${registerPlayground({
        id: 'pgd-splt-ghost-ex',
        variants: SPLT_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'content', label: 'Content', options: SPLT_CONTENT_OPTS, default: 'icon-text' },
          { key: 'state',   label: 'State',   options: SPLT_STATE_OPTS,   default: 'default'   },
        ],
        preview: (sz, p) => spltPreview('ghost', sz, p.state, p.theme, p.content),
        code:    (sz, p) => spltCode('ghost', sz, p.state, p.theme, p.content),
      })}
    `};

    // ── CSS Properties ───────────────────────────────────────────
    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Split Button için kullanılan design token–CSS değişken eşleşmeleri. Button ile aynı token sistemini paylaşır; yapısal farklılıklar <code style="font-family:var(--mono);font-size:12px;">bt-split-btn</code> sınıflarıyla uygulanır.</p>
      <table class="token-table">
        <thead><tr><th>Token</th><th>Value</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">--bt-radius-sm</span></td><td>4px</td><td>Wrapper border-radius; __button sol köşe, __split sağ köşe için uygulanır</td></tr>
          <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>__button içi icon–label arası gap</td></tr>
          <tr><td><span class="token-name">--bt-space-2xs</span></td><td>2px</td><td>py — 2xs (20px yükseklik)</td></tr>
          <tr><td><span class="token-name">--bt-space-xs</span></td><td>4px</td><td>px — 2xs · py — xs (24px)</td></tr>
          <tr><td><span class="token-name">--bt-space-sm</span></td><td>6px</td><td>py — sm (28px)</td></tr>
          <tr><td><span class="token-name">--bt-space-md</span></td><td>8px</td><td>py — md · px — xs/sm/md/lg (32px)</td></tr>
          <tr><td><span class="token-name">--bt-space-lg</span></td><td>10px</td><td>py — lg (36px)</td></tr>
          <tr><td><span class="token-name">--bt-space-xl</span></td><td>12px</td><td>py/px — xl (40px)</td></tr>
          <tr><td><span class="token-name">--bt-space-2xl</span></td><td>16px</td><td>py — 2xl · px — 2xl (48px)</td></tr>
          <tr><td><span class="token-name">--bt-primary-default</span></td><td>#0d4e97</td><td>Solid bg · Outline &amp; Flat &amp; Ghost text/border · Default</td></tr>
          <tr><td><span class="token-name">--bt-primary-intense</span></td><td>#0f447d</td><td>Hover &amp; active bg (Solid) · Ghost hover color</td></tr>
          <tr><td><span class="token-name">--bt-primary-subtle</span></td><td>#e2edfc</td><td>Hover bg (Outline, Flat)</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-inverted</span></td><td>#ffffff</td><td>Solid metin &amp; ikon rengi</td></tr>
          <tr><td><span class="token-name">--bt-base-muted</span></td><td>#e6e6e6</td><td>Disabled bg (Solid)</td></tr>
          <tr><td><span class="token-name">--bt-text-primary-muted</span></td><td>#a3a3a3</td><td>Disabled metin &amp; ikon</td></tr>
          <tr><td><span class="token-name">--split-divider (CSS var)</span></td><td>tema-bağımlı</td><td>Divider rengi: Solid=rgba(255,255,255,.30) · Outline=border rengi · Flat/Ghost=tema@25%</td></tr>
          <tr><td><span class="token-name">Focus Ring/primary</span></td><td>#0D4E9780 · 3px</td><td>Focus halkası — box-shadow</td></tr>
        </tbody>
      </table>

      <h2 style="margin-top:32px;">Sub-component Classes</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Uygulama</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">bt-split-btn__button</span></td><td>Sol part — icon + label, rounded-tl + rounded-bl</td></tr>
          <tr><td><span class="token-name">bt-split-btn__divider</span></td><td>1px dikey ayraç, rengini wrapper'dan --split-divider ile alır</td></tr>
          <tr><td><span class="token-name">bt-split-btn__split</span></td><td>Sağ part — yalnızca ikon (chevron), rounded-tr + rounded-br</td></tr>
        </tbody>
      </table>
    `};

    // ── Usage ────────────────────────────────────────────────────
    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Split Button kullanım kılavuzu.</p>
      <h2>Ne zaman kullanılır</h2>
      <ul>
        <li>Birincil aksiyon belirginken alternatif aksiyonların da sunulması gerektiğinde (örn. "Kaydet" + "Taslak Olarak Kaydet")</li>
        <li>Dropdown menü tetikleyicisi olarak — sağ part her zaman dropdown açar</li>
        <li>Araç çubuklarında alan tasarrufu sağlamak için</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Sol part (Button) birincil aksiyonu, sağ part (Split) alternatif seçenekleri açsın</li>
        <li>Fill mode hiyerarşisini Button ile tutarlı tut: Solid → Outline → Flat → Ghost</li>
        <li>Disabled state gerektiğinde her iki parçayı da aynı anda devre dışı bırak</li>
        <li>Sağ partta her zaman chevron-down (↓) ikonu kullan — kullanıcı dropdown beklentisi yaratır</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Sağ parta sadece birincil aksiyon kopyasını koyma — o slot alternatifler içindir</li>
        <li>Ayraçsız iki ayrı buton olarak kullanma; tek bir bileşen olarak render et</li>
        <li>Ghost modunu izole yüzeylerde kullanma — arka plan rengi olmadan kaybolur</li>
        <li>Token dışında hardcoded renk kullanma; her zaman <code style="font-family:var(--mono)">--bt-*</code> tokenlarını kullan</li>
      </ul>
    `};

    // ── Overview ─────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-splt-overview',
        variants: SPLT_FILL_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'size',    label: 'Size',    options: SPLT_SIZE_VARIANTS, default: 'sm'        },
          { key: 'content', label: 'Content', options: SPLT_CONTENT_OPTS,  default: 'icon-text' },
          { key: 'state',   label: 'State',   options: SPLT_STATE_OPTS,    default: 'default'   },
        ],
        preview: (fill, p) => spltPreview(fill, p.size, p.state, p.theme, p.content),
        code:    (fill, p) => spltCode(fill, p.size, p.state, p.theme, p.content),
        css:     (fill, p) => spltCss(fill, p),
      })}

      <p class="page-desc">İki parçalı buton bileşeni: sol <strong>Button</strong> parçası birincil aksiyonu tetikler, sağ <strong>Split</strong> parçası dropdown/alternatif seçenekleri açar. Fill mode (Solid / Outline / Flat / Ghost), 7 tema rengi, 7 boyut ve bağımsız hover/focus state'leri destekler.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">Wrapper</td><td>Display</td><td>—</td><td>inline-flex, align-items: stretch</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/radius-sm')}</td><td>4px (köşeler alt-bileşenlere dağıtılır)</td></tr>
          <tr><td>Outline border (Outline fill)</td><td>${tk('Focus Ring/primary')}</td><td>box-shadow: 0 0 0 1px border-color</td></tr>
          <tr><td rowspan="3">SplitButton Button (sol)</td><td>Padding</td><td>${tk('Space/py × Space/px')}</td><td>Size'a göre değişir (bt-btn ile aynı)</td></tr>
          <tr><td>Icon–label gap</td><td>${tk('Space/spacing-sm')}</td><td>6px</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/radius-sm')}</td><td>4px — yalnızca sol köşeler</td></tr>
          <tr><td rowspan="2">SplitButton Split (sağ)</td><td>Padding</td><td>${tk('Space/py (kare)')}</td><td>py değeri — tüm taraflara eşit</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/radius-sm')}</td><td>4px — yalnızca sağ köşeler</td></tr>
          <tr><td rowspan="2">Divider</td><td>Width</td><td>—</td><td>1px</td></tr>
          <tr><td>Color</td><td>${tk('--split-divider (CSS var)')}</td><td>Fill mode × tema rengi kombinasyonuna göre</td></tr>
          <tr><td>Icon (her iki part)</td><td>Size</td><td>—</td><td>16 × 16px</td></tr>
          <tr><td>Label</td><td>Font</td><td>${tk('Font/Family/Text · text-xs/Regular')}</td><td>Geist 12px / 400 / 16px</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${SPLT_SIZE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${spltPreview('solid', s.key, 'default', 'primary', 'icon-text')}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="States">States</h2>
      ${BTN_THEME_OPTS.map(theme => `
      <h3 style="font:var(--bt-text-xs-semibold, 600 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin:var(--bt-space-3xl, 20px) 0 var(--bt-space-xl, 12px);text-transform:capitalize;">${theme.label}</h3>
      ${_spltStateTable(theme.key)}`).join('')}
    `};
  }
};

// Proje genelindeki playground boolean toggle standardı — bkz. CLAUDE.md
// "Playground Toolbar Boolean Toggle Standardı". Checkbox/Radio/Switch/
// TextBox/Textarea/Accordion/Dialog vb. tüm Show-Hide/Var-Yok toggle'ları
// bunu reuse ediyor, ayrı Yes/No veya Show/Hide seçenek dizisi tanımlanmıyor.
const TBX_BOOL_OPTS = [{ key: 'on', label: 'On' }, { key: 'off', label: 'Off' }];

// ── Checkbox ────────────────────────────────────────────────────
const _chkCheck = `<svg class="bt-checkbox__check" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 5L4 7.5L8.5 2.5"/></svg>`;

const CHK_STATE_VARIANTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'focused',  label: 'Focused' },
  { key: 'disabled', label: 'Disabled' },
  { key: 'invalid',  label: 'Invalid' },
];
const CHK_CHECKED_OPTS = [
  { key: 'off', label: 'Unchecked' },
  { key: 'on',  label: 'Checked' },
];
const CHK_SIZE_OPTS = [
  { key: 'lg', label: 'Lg' },
  { key: 'md', label: 'Md (Default)' },
  { key: 'sm', label: 'Sm' },
];
const CHK_SIDE_OPTS = [
  { key: 'right', label: 'Label Right' },
  { key: 'left',  label: 'Label Left' },
];
// Proje genelindeki On/Off standardına uysun diye TBX_BOOL_OPTS reuse ediliyor
// (bkz. CLAUDE.md "Playground Toolbar Boolean Toggle Standardı").
const CHK_DESC_OPTS = TBX_BOOL_OPTS;
const CHK_SHOW_OPTS = TBX_BOOL_OPTS;

function _chkBoxCls(state, checked, size) {
  const parts = ['bt-checkbox__box'];
  if (size === 'sm')         parts.push('bt-checkbox__box--sm');
  if (size === 'lg')         parts.push('bt-checkbox__box--lg');
  if (checked === 'on')      parts.push('bt-checkbox__box--checked');
  if (state !== 'default')   parts.push(`bt-checkbox__box--${state}`);
  return parts.join(' ');
}

function _chkFieldCls(state, side) {
  const parts = ['bt-checkbox-field'];
  if (side === 'left')       parts.push('bt-checkbox-field--label-left');
  if (state === 'disabled')  parts.push('bt-checkbox-field--disabled');
  if (state === 'invalid')   parts.push('bt-checkbox-field--invalid');
  return parts.join(' ');
}

function chkPreview(state, props = {}) {
  const {
    checked      = 'off',
    size         = 'md',
    side         = 'right',
    desc         = 'on',
    showContent  = 'on',
    showLabel    = 'on',
    showRequired = 'on',
  } = props;
  const boxCls   = _chkBoxCls(state, checked, size);
  const fieldCls = _chkFieldCls(state, side);
  const descHtml = desc === 'on' ? `\n        <p class="bt-checkbox__desc">Description for additional information here.</p>` : '';
  const labelHtml    = showLabel    === 'on' ? `<span class="bt-checkbox__label">Label Text</span>` : '';
  const requiredHtml = showRequired === 'on' ? `<span class="bt-checkbox__required">(Required Field)</span>` : '';
  const contentHtml  = showContent  === 'on' ? `
        <div class="bt-checkbox__content">
          <div class="bt-checkbox__label-row">
            ${labelHtml}${requiredHtml}
          </div>${descHtml}
        </div>` : '';
  const clickAttr = state !== 'disabled'
    ? ` onclick="this.querySelector('.bt-checkbox__box').classList.toggle('bt-checkbox__box--checked')" style="cursor:pointer;"`
    : '';
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <div class="${fieldCls}"${clickAttr}>
        <div class="${boxCls}">${_chkCheck}</div>${contentHtml}
      </div>
    </div>`;
}

function chkCode(state, props = {}) {
  const {
    checked      = 'off',
    size         = 'md',
    side         = 'right',
    desc         = 'on',
    showContent  = 'on',
    showLabel    = 'on',
    showRequired = 'on',
  } = props;
  const boxCls   = _chkBoxCls(state, checked, size);
  const fieldCls = _chkFieldCls(state, side);
  const chk      = checked === 'on' ? '\n    <!-- checkmark svg -->' : '';
  const labelLine    = showLabel    === 'on' ? '\n      <span class="bt-checkbox__label">Label Text</span>' : '';
  const requiredLine = showRequired === 'on' ? '\n      <span class="bt-checkbox__required">(Required Field)</span>' : '';
  const descLine     = (showContent === 'on' && desc === 'on') ? '\n    <p class="bt-checkbox__desc">Description for additional information here.</p>' : '';
  const contentBlock = showContent === 'on'
    ? `\n  <div class="bt-checkbox__content">\n    <div class="bt-checkbox__label-row">${labelLine}${requiredLine}\n    </div>${descLine}\n  </div>`
    : '';
  const code = `<div class="${fieldCls}">
  <div class="${boxCls}">${chk}
  </div>${contentBlock}
</div>`;
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block">${esc(code)}</pre>`;
}

function chkCss(state, props = {}) {
  const { checked = 'off', size = 'md' } = props;
  const isChecked  = checked === 'on';
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;

  lines.push(`/* Checkbox · ${isChecked ? 'Checked' : 'Unchecked'} · ${state.charAt(0).toUpperCase()+state.slice(1)}${size === 'sm' ? ' · Sm' : ''} */`);
  lines.push('');

  // Box default
  lines.push('.bt-checkbox__box {');
  const boxPx = size === 'sm' ? '12px' : size === 'lg' ? '20px' : '16px';
  lines.push(p('width',  boxPx));
  lines.push(p('height', boxPx));
  lines.push(p('border-radius', '2px'));
  if (!isChecked) {
    lines.push(p('background',  'var(--bt-surface-primary-default)  /* #ffffff */'));
    lines.push(p('border',      '1px solid var(--bt-border-primary-default)  /* #d4d4d4 */'));
  } else {
    lines.push(p('background',  'var(--bt-surface-brand-default)  /* #0d4e97 */'));
    lines.push(p('border',      'none'));
  }
  lines.push('}');

  if (state !== 'default') {
    lines.push('');
    const stateLabel = `.bt-checkbox__box--${state}`;

    if (state === 'hover') {
      lines.push(`${stateLabel} {`);
      if (!isChecked) lines.push(p('border-color', 'var(--bt-border-primary-strong)  /* #727272 */'));
      else            lines.push(p('background',   'var(--bt-surface-brand-intense)  /* #0f447d */'));
      lines.push('}');
    }

    if (state === 'focused') {
      lines.push(`${stateLabel} {`);
      if (!isChecked) {
        lines.push(p('border-color', 'var(--bt-border-primary-strong)  /* #727272 */'));
        lines.push(p('box-shadow',   '0 0 0 3px rgba(212,212,212,0.25)'));
      } else {
        lines.push(p('background',   'var(--bt-surface-brand-intense)  /* #0f447d */'));
        lines.push(p('box-shadow',   '0 0 0 3px rgba(13,78,151,0.25)'));
      }
      lines.push('}');
    }

    if (state === 'disabled') {
      lines.push(`${stateLabel} {`);
      if (!isChecked) {
        lines.push(p('background',   'var(--bt-surface-primary-muted)  /* #e6e6e6 */'));
        lines.push(p('border-color', 'var(--bt-border-primary-default)  /* #d4d4d4 */'));
      } else {
        lines.push(p('background',   'var(--bt-surface-brand-muted)  /* #bedbf9 */'));
        lines.push(p('border',       'none'));
      }
      lines.push(p('cursor', 'not-allowed'));
      lines.push('}');
    }

    if (state === 'invalid') {
      lines.push(`${stateLabel} {`);
      if (!isChecked) lines.push(p('border-color', 'var(--bt-border-error-default)  /* #b31d38 */'));
      else            lines.push(p('background',   'var(--bt-surface-error-default)  /* #b31d38 */'));
      lines.push('}');
    }
  }

  lines.push('');
  lines.push('/* Text */');
  lines.push('.bt-checkbox__label, .bt-checkbox__required {');
  if (state === 'disabled') lines.push(p('color', 'var(--bt-text-primary-muted)  /* #a3a3a3 */'));
  else                      lines.push(p('color', 'var(--bt-text-primary-default)  /* #1a1a1a */'));
  lines.push('}');
  lines.push('.bt-checkbox__desc {');
  if (state === 'disabled')      lines.push(p('color', 'var(--bt-text-primary-muted)  /* #a3a3a3 */'));
  else if (state === 'invalid')  lines.push(p('color', 'var(--bt-text-error-default)  /* #b31d38 */'));
  else                           lines.push(p('color', 'var(--bt-text-primary-emphasis)  /* #727272 */'));
  lines.push('}');

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/checkbox'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['States', 'Sizes', 'Label Position'],
  render(tab) {
    const title = 'Checkbox';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
    const pw = html => `<div style="padding:12px 0;">${html}</div>`;

    if (tab === 'Examples') return { title, html: `
      <h2>Unchecked States</h2>
      ${registerPlayground({
        id: 'pgd-chk-unchecked-ex',
        variants: CHK_STATE_VARIANTS,
        props: [
          { key: 'size',         label: 'Size',            options: CHK_SIZE_OPTS,    default: 'md'    },
          { key: 'side',         label: 'Label',           options: CHK_SIDE_OPTS,    default: 'right' },
          { key: 'showContent',  label: 'Show Content',    options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',      options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showRequired', label: 'Show Required',   options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'desc',         label: 'Show Description',options: CHK_DESC_OPTS,    default: 'on'  },
        ],
        preview: (state, p) => chkPreview(state, { ...p, checked: 'off' }),
        code:    (state, p) => chkCode(state, { ...p, checked: 'off' }),
      })}
      <h2>Checked States</h2>
      ${registerPlayground({
        id: 'pgd-chk-checked-ex',
        variants: CHK_STATE_VARIANTS,
        props: [
          { key: 'size',         label: 'Size',            options: CHK_SIZE_OPTS,    default: 'md'    },
          { key: 'side',         label: 'Label',           options: CHK_SIDE_OPTS,    default: 'right' },
          { key: 'showContent',  label: 'Show Content',    options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',      options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showRequired', label: 'Show Required',   options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'desc',         label: 'Show Description',options: CHK_DESC_OPTS,    default: 'on'  },
        ],
        preview: (state, p) => chkPreview(state, { ...p, checked: 'on' }),
        code:    (state, p) => chkCode(state, { ...p, checked: 'on' }),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Checkbox için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Box</th><th>Checkmark container</th><th>CSS class</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Lg</span></td><td>20 × 20px</td><td>12 × 12px</td><td>${tk('.bt-checkbox__box--lg')}</td></tr>
          <tr><td><span class="token-name">Md (Default)</span></td><td>16 × 16px</td><td>12 × 12px</td><td>—</td></tr>
          <tr><td><span class="token-name">Sm</span></td><td>12 × 12px</td><td>12 × 12px</td><td>${tk('.bt-checkbox__box--sm')}</td></tr>
        </tbody>
      </table>
      <h2>Box Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Checked</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Default</td><td>Off</td><td>background</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Hover</td><td>Off</td><td>border-color</td><td>${tk('--bt-border-primary-strong')}</td><td>#727272</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-intense')}</td><td>#0f447d</td></tr>
          <tr><td rowspan="2">Focused</td><td>Off</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(212,212,212,0.25)</td></tr>
          <tr><td>On</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>Off</td><td>background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-muted')}</td><td>#bedbf9</td></tr>
          <tr><td rowspan="2">Invalid</td><td>Off</td><td>border-color</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>
      <h2>Text Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>State</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Label / Required</td><td>Default</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Default</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Description</td><td>Invalid</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>All text</td><td>Disabled</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Checkbox kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Bağımsız açık/kapalı seçenekler için kullan</li>
        <li>Her zaman Label Text ekle — sadece checkbox gösterme</li>
        <li>Invalid state'te Description alanını hata mesajı olarak kullan</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Birbirini dışlayan seçenekler için kullanma — bunun için Radio Button kullan</li>
        <li>Disabled state'teki checkbox'a tooltip olmadan bırakma</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-chk-overview',
        variants: CHK_STATE_VARIANTS,
        props: [
          { key: 'checked',      label: 'Checked',        options: CHK_CHECKED_OPTS, default: 'off'   },
          { key: 'size',         label: 'Size',            options: CHK_SIZE_OPTS,    default: 'md'    },
          { key: 'side',         label: 'Label',           options: CHK_SIDE_OPTS,    default: 'right' },
          { key: 'showContent',  label: 'Show Content',    options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',      options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showRequired', label: 'Show Required',   options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'desc',         label: 'Show Description',options: CHK_DESC_OPTS,    default: 'on'  },
        ],
        preview: (state, p) => chkPreview(state, p),
        code:    (state, p) => chkCode(state, p),
        css:     (state, p) => chkCss(state, p),
      })}

      <p class="page-desc">Form seçim bileşeni. İki boyut (Sm / Md), beş state (Default / Hover / Focused / Disabled / Invalid) ve iki label konumu (Left / Right) destekler.</p>

      <h2 id="States">States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Unchecked</th><th>Checked</th></tr></thead>
        <tbody>
          ${CHK_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${pw(chkPreview(s.key, { checked:'off', desc:'off' }))}</td>
            <td>${pw(chkPreview(s.key, { checked:'on',  desc:'off' }))}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Box · Unchecked Default</td><td>Background</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>Box · Checked Default</td><td>Background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Box · Unchecked Hover</td><td>Border color</td><td>${tk('--bt-border-primary-strong')}</td><td>#727272</td></tr>
          <tr><td>Box · Checked Hover</td><td>Background</td><td>${tk('--bt-surface-brand-intense')}</td><td>#0f447d</td></tr>
          <tr><td>Box · Unchecked Focused</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(212,212,212,.25)</td></tr>
          <tr><td>Box · Checked Focused</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(13,78,151,.25)</td></tr>
          <tr><td>Box · Unchecked Disabled</td><td>Background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Box · Checked Disabled</td><td>Background</td><td>${tk('--bt-surface-brand-muted')}</td><td>#bedbf9</td></tr>
          <tr><td>Box · Unchecked Invalid</td><td>Border color</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>Box · Checked Invalid</td><td>Background</td><td>${tk('--bt-surface-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Box</th><th>Checkmark</th><th>Unchecked</th><th>Checked</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Lg</span></td>
            <td>20 × 20px</td>
            <td>12 × 12px</td>
            <td>${pw(chkPreview('default', { checked:'off', size:'lg', desc:'off' }))}</td>
            <td>${pw(chkPreview('default', { checked:'on',  size:'lg', desc:'off' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Md (Default)</span></td>
            <td>16 × 16px</td>
            <td>12 × 12px</td>
            <td>${pw(chkPreview('default', { checked:'off', size:'md', desc:'off' }))}</td>
            <td>${pw(chkPreview('default', { checked:'on',  size:'md', desc:'off' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Sm</span></td>
            <td>12 × 12px</td>
            <td>12 × 12px</td>
            <td>${pw(chkPreview('default', { checked:'off', size:'sm', desc:'off' }))}</td>
            <td>${pw(chkPreview('default', { checked:'on',  size:'sm', desc:'off' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Box · Lg</td><td>Size</td><td>—</td><td>20 × 20px</td></tr>
          <tr><td>Box · Md (Default)</td><td>Size</td><td>—</td><td>16 × 16px</td></tr>
          <tr><td>Box · Sm</td><td>Size</td><td>—</td><td>12 × 12px</td></tr>
          <tr><td>Checkmark</td><td>Size (tüm boyutlar)</td><td>—</td><td>12 × 12px</td></tr>
        </tbody>
      </table>

      <h2 id="Label Position">Label Position</h2>
      <table class="token-table">
        <thead><tr><th>Side</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Label Right</span></td>
            <td>${pw(chkPreview('default', { checked:'on', side:'right', desc:'on' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Label Left</span></td>
            <td>${pw(chkPreview('default', { checked:'on', side:'left', desc:'on' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Label / Required</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Description · Invalid</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>All text · Disabled</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Radio Button ────────────────────────────────────────────────
const RD_STATE_VARIANTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'focused',  label: 'Focused' },
  { key: 'disabled', label: 'Disabled' },
  { key: 'invalid',  label: 'Invalid' },
];
const RD_SELECTED_OPTS = [
  { key: 'off', label: 'Unselected' },
  { key: 'on',  label: 'Selected' },
];
const RD_SIZE_OPTS = [
  { key: 'lg', label: 'Lg' },
  { key: 'md', label: 'Md (Default)' },
  { key: 'sm', label: 'Sm' },
];
const RD_SIDE_OPTS = [
  { key: 'right', label: 'Label Right' },
  { key: 'left',  label: 'Label Left' },
];

function _rdDotCls(state, selected, size) {
  const parts = ['bt-radio__dot'];
  if (size === 'sm')       parts.push('bt-radio__dot--sm');
  if (size === 'lg')       parts.push('bt-radio__dot--lg');
  if (selected === 'on')   parts.push('bt-radio__dot--selected');
  if (state !== 'default') parts.push(`bt-radio__dot--${state}`);
  return parts.join(' ');
}

function _rdFieldCls(state, side) {
  const parts = ['bt-radio-field'];
  if (side === 'left')      parts.push('bt-radio-field--label-left');
  if (state === 'disabled') parts.push('bt-radio-field--disabled');
  if (state === 'invalid')  parts.push('bt-radio-field--invalid');
  return parts.join(' ');
}

function rdPreview(state, props = {}) {
  const {
    selected     = 'off',
    size         = 'md',
    side         = 'right',
    desc         = 'on',
    showContent  = 'on',
    showLabel    = 'on',
    showRequired = 'on',
  } = props;
  const dotCls   = _rdDotCls(state, selected, size);
  const fieldCls = _rdFieldCls(state, side);
  const descHtml = desc === 'on' ? `\n        <p class="bt-radio__desc">Description for additional information here.</p>` : '';
  const labelHtml    = showLabel    === 'on' ? `<span class="bt-radio__label">Label Text</span>` : '';
  const requiredHtml = showRequired === 'on' ? `<span class="bt-radio__required">(Required Field)</span>` : '';
  const contentHtml  = showContent  === 'on' ? `
        <div class="bt-radio__content">
          <div class="bt-radio__label-row">
            ${labelHtml}${requiredHtml}
          </div>${descHtml}
        </div>` : '';
  const clickAttr = state !== 'disabled'
    ? ` onclick="this.querySelector('.bt-radio__dot').classList.toggle('bt-radio__dot--selected')" style="cursor:pointer;"`
    : '';
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <div class="${fieldCls}"${clickAttr}>
        <div class="${dotCls}"></div>${contentHtml}
      </div>
    </div>`;
}

function rdCode(state, props = {}) {
  const {
    selected     = 'off',
    size         = 'md',
    side         = 'right',
    desc         = 'on',
    showContent  = 'on',
    showLabel    = 'on',
    showRequired = 'on',
  } = props;
  const dotCls   = _rdDotCls(state, selected, size);
  const fieldCls = _rdFieldCls(state, side);
  const labelLine    = showLabel    === 'on' ? '\n      <span class="bt-radio__label">Label Text</span>' : '';
  const requiredLine = showRequired === 'on' ? '\n      <span class="bt-radio__required">(Required Field)</span>' : '';
  const descLine     = (showContent === 'on' && desc === 'on') ? '\n    <p class="bt-radio__desc">Description for additional information here.</p>' : '';
  const contentBlock = showContent === 'on'
    ? `\n  <div class="bt-radio__content">\n    <div class="bt-radio__label-row">${labelLine}${requiredLine}\n    </div>${descLine}\n  </div>`
    : '';
  const code = `<div class="${fieldCls}">
  <div class="${dotCls}"></div>${contentBlock}
</div>`;
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block">${esc(code)}</pre>`;
}

function rdCss(state, props = {}) {
  const { selected = 'off' } = props;
  const isSel = selected === 'on';
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;

  lines.push(`/* Radio Button · ${isSel ? 'Selected' : 'Unselected'} · ${state.charAt(0).toUpperCase()+state.slice(1)} */`);
  lines.push('');
  lines.push('.bt-radio__dot {');
  lines.push(p('width', '16px'));
  lines.push(p('height', '16px'));
  lines.push(p('border-radius', '50%'));
  lines.push(p('border', '1.5px solid var(--bt-border-primary-default, #d4d4d4)'));
  lines.push(p('background', 'var(--bt-surface-primary-default, #ffffff)'));
  lines.push(p('display', 'flex'));
  lines.push(p('align-items', 'center'));
  lines.push(p('justify-content', 'center'));
  lines.push(p('box-sizing', 'border-box'));
  lines.push('}');
  lines.push('');

  if (!isSel) {
    if (state === 'default') {
      lines.push('/* Default — no extra rules needed */');
    } else if (state === 'hover') {
      lines.push('.bt-radio__dot--hover:not(.bt-radio__dot--selected) {');
      lines.push(p('border-color', 'var(--bt-border-primary-strong, #727272)'));
      lines.push('}');
    } else if (state === 'focused') {
      lines.push('.bt-radio__dot--focused:not(.bt-radio__dot--selected) {');
      lines.push(p('border-color', 'var(--bt-border-primary-strong, #727272)'));
      lines.push(p('box-shadow', '0 0 0 3px rgba(212,212,212,0.25)'));
      lines.push('}');
    } else if (state === 'disabled') {
      lines.push('.bt-radio__dot--disabled:not(.bt-radio__dot--selected) {');
      lines.push(p('background', 'var(--bt-surface-primary-muted, #e6e6e6)'));
      lines.push(p('border-color', 'var(--bt-border-primary-default, #d4d4d4)'));
      lines.push('}');
    } else if (state === 'invalid') {
      lines.push('.bt-radio__dot--invalid:not(.bt-radio__dot--selected) {');
      lines.push(p('border-color', 'var(--bt-border-error-default, #b31d38)'));
      lines.push('}');
    }
  } else {
    lines.push('.bt-radio__dot--selected {');
    lines.push(p('background', 'var(--bt-surface-brand-default, #0d4e97)'));
    lines.push(p('border-color', 'transparent'));
    lines.push('}');
    lines.push('');
    lines.push('.bt-radio__dot--selected::after {');
    lines.push(p('content', "''"));
    lines.push(p('display', 'block'));
    lines.push(p('width', '6px'));
    lines.push(p('height', '6px'));
    lines.push(p('border-radius', '50%'));
    lines.push(p('background', '#ffffff'));
    lines.push('}');
    if (state === 'hover') {
      lines.push('');
      lines.push('.bt-radio__dot--selected.bt-radio__dot--hover {');
      lines.push(p('background', 'var(--bt-surface-brand-intense, #0f447d)'));
      lines.push('}');
    } else if (state === 'focused') {
      lines.push('');
      lines.push('.bt-radio__dot--selected.bt-radio__dot--focused {');
      lines.push(p('background', 'var(--bt-surface-brand-intense, #0f447d)'));
      lines.push(p('box-shadow', '0 0 0 3px rgba(13,78,151,0.25)'));
      lines.push('}');
    } else if (state === 'disabled') {
      lines.push('');
      lines.push('.bt-radio__dot--selected.bt-radio__dot--disabled {');
      lines.push(p('background', 'var(--bt-surface-brand-muted, #bedbf9)'));
      lines.push('}');
    } else if (state === 'invalid') {
      lines.push('');
      lines.push('.bt-radio__dot--selected.bt-radio__dot--invalid {');
      lines.push(p('background', 'var(--bt-surface-error-default, #b31d38)'));
      lines.push('}');
    }
  }

  lines.push('');
  lines.push('.bt-radio__content { flex:1; display:flex; flex-direction:column; gap:4px; min-width:0; }');

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/radio-button'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['States', 'Sizes', 'Label Position'],
  render(tab) {
    const title = 'Radio Button';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
    const pw = html => `<div class="preview-wrap">${html}</div>`;

    if (tab === 'Examples') return { title, html: `
      <h2>Unselected States</h2>
      ${registerPlayground({
        id: 'pgd-rd-unselected-ex',
        variants: RD_STATE_VARIANTS,
        props: [
          { key: 'size',         label: 'Size',             options: RD_SIZE_OPTS,  default: 'md'    },
          { key: 'side',         label: 'Label',            options: RD_SIDE_OPTS,  default: 'right' },
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'on'  },
        ],
        preview: (state, p) => rdPreview(state, { ...p, selected: 'off' }),
        code:    (state, p) => rdCode(state, { ...p, selected: 'off' }),
      })}
      <h2>Selected States</h2>
      ${registerPlayground({
        id: 'pgd-rd-selected-ex',
        variants: RD_STATE_VARIANTS,
        props: [
          { key: 'size',         label: 'Size',             options: RD_SIZE_OPTS,  default: 'md'    },
          { key: 'side',         label: 'Label',            options: RD_SIDE_OPTS,  default: 'right' },
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'on'  },
        ],
        preview: (state, p) => rdPreview(state, { ...p, selected: 'on' }),
        code:    (state, p) => rdCode(state, { ...p, selected: 'on' }),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Radio Button için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Diameter</th><th>Inner dot</th><th>CSS class</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Lg</span></td><td>20px</td><td>8px</td><td>${tk('.bt-radio__dot--lg')}</td></tr>
          <tr><td><span class="token-name">Md (Default)</span></td><td>16px</td><td>6px</td><td>—</td></tr>
          <tr><td><span class="token-name">Sm</span></td><td>12px</td><td>4.5px</td><td>${tk('.bt-radio__dot--sm')}</td></tr>
        </tbody>
      </table>
      <h2>Dot Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Selected</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Default</td><td>Off</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Hover</td><td>Off</td><td>border-color</td><td>${tk('--bt-border-primary-strong')}</td><td>#727272</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-intense')}</td><td>#0f447d</td></tr>
          <tr><td rowspan="2">Focused</td><td>Off</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(212,212,212,0.25)</td></tr>
          <tr><td>On</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>Off</td><td>background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-muted')}</td><td>#bedbf9</td></tr>
          <tr><td rowspan="2">Invalid</td><td>Off</td><td>border-color</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>
      <h2>Text Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>State</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Label / Required</td><td>Default</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Default</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Description</td><td>Invalid</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>All text</td><td>Disabled</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-radio-field')}</td><td>Wrapper</td><td>Temel sarmalayıcı — flex row, gap 8px</td></tr>
          <tr><td>${tk('.bt-radio-field--label-left')}</td><td>Wrapper</td><td>Label solda, dot sağda (row-reverse)</td></tr>
          <tr><td>${tk('.bt-radio-field--disabled')}</td><td>Wrapper</td><td>cursor: not-allowed</td></tr>
          <tr><td>${tk('.bt-radio-field--invalid')}</td><td>Wrapper</td><td>Description rengini error'a çevirir</td></tr>
          <tr><td>${tk('.bt-radio__dot')}</td><td>Görsel çember</td><td>16px, border-radius: 50%, default state</td></tr>
          <tr><td>${tk('.bt-radio__dot--sm')}</td><td>Dot</td><td>12px çember</td></tr>
          <tr><td>${tk('.bt-radio__dot--lg')}</td><td>Dot</td><td>20px çember</td></tr>
          <tr><td>${tk('.bt-radio__dot--selected')}</td><td>Dot</td><td>Seçili state — mavi arka plan + beyaz inner dot (::after)</td></tr>
          <tr><td>${tk('.bt-radio__dot--hover')}</td><td>Dot</td><td>Hover state</td></tr>
          <tr><td>${tk('.bt-radio__dot--focused')}</td><td>Dot</td><td>Focused state + focus ring</td></tr>
          <tr><td>${tk('.bt-radio__dot--disabled')}</td><td>Dot</td><td>Disabled state</td></tr>
          <tr><td>${tk('.bt-radio__dot--invalid')}</td><td>Dot</td><td>Invalid/error state</td></tr>
          <tr><td>${tk('.bt-radio__content')}</td><td>İçerik alanı</td><td>Label + required + description wrapper</td></tr>
          <tr><td>${tk('.bt-radio__label-row')}</td><td>İçerik</td><td>Label ve required field'ı yan yana tutar</td></tr>
          <tr><td>${tk('.bt-radio__label')}</td><td>Metin</td><td>14px, primary default renk</td></tr>
          <tr><td>${tk('.bt-radio__required')}</td><td>Metin</td><td>12px, "(Required Field)" metni</td></tr>
          <tr><td>${tk('.bt-radio__desc')}</td><td>Metin</td><td>12px, muted renk, açıklama metni</td></tr>
        </tbody>
      </table>
    `};
    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Radio Button kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Birbirini dışlayan seçenekler arasından tek seçim için kullan</li>
        <li>Her zaman Label Text ekle — sadece dot gösterme</li>
        <li>Invalid state'te Description alanını hata mesajı olarak kullan</li>
        <li>Birden fazla radio'yu grup olarak sun; bağımsız seçenekler için Checkbox kullan</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Bağımsız açık/kapalı seçenekler için kullanma — bunun için Checkbox kullan</li>
        <li>Tek başına (grupsuz) kullanma</li>
        <li>Disabled state'teki radio'ya tooltip olmadan bırakma</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-rd-overview',
        variants: RD_STATE_VARIANTS,
        props: [
          { key: 'selected',     label: 'Selected',         options: RD_SELECTED_OPTS, default: 'off'   },
          { key: 'size',         label: 'Size',             options: RD_SIZE_OPTS,     default: 'md'    },
          { key: 'side',         label: 'Label',            options: RD_SIDE_OPTS,     default: 'right' },
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS,    default: 'on'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS,    default: 'on'  },
        ],
        preview: (state, p) => rdPreview(state, p),
        code:    (state, p) => rdCode(state, p),
        css:     (state, p) => rdCss(state, p),
      })}

      <p class="page-desc">Tekli seçim form bileşeni. Üç boyut (Sm / Md / Lg), beş state (Default / Hover / Focused / Disabled / Invalid) ve iki label konumu (Left / Right) destekler.</p>

      <h2 id="States">States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Unselected</th><th>Selected</th></tr></thead>
        <tbody>
          ${RD_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${pw(rdPreview(s.key, { selected:'off', desc:'off' }))}</td>
            <td>${pw(rdPreview(s.key, { selected:'on',  desc:'off' }))}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Dot · Unselected Default</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Dot · Selected Default</td><td>Background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Dot · Unselected Hover</td><td>Border color</td><td>${tk('--bt-border-primary-strong')}</td><td>#727272</td></tr>
          <tr><td>Dot · Selected Hover</td><td>Background</td><td>${tk('--bt-surface-brand-intense')}</td><td>#0f447d</td></tr>
          <tr><td>Dot · Unselected Focused</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(212,212,212,.25)</td></tr>
          <tr><td>Dot · Selected Focused</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(13,78,151,.25)</td></tr>
          <tr><td>Dot · Unselected Disabled</td><td>Background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Dot · Selected Disabled</td><td>Background</td><td>${tk('--bt-surface-brand-muted')}</td><td>#bedbf9</td></tr>
          <tr><td>Dot · Unselected Invalid</td><td>Border color</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>Dot · Selected Invalid</td><td>Background</td><td>${tk('--bt-surface-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Diameter</th><th>Inner dot</th><th>Unselected</th><th>Selected</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Lg</span></td>
            <td>20px</td><td>8px</td>
            <td>${pw(rdPreview('default', { selected:'off', size:'lg', desc:'off' }))}</td>
            <td>${pw(rdPreview('default', { selected:'on',  size:'lg', desc:'off' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Md (Default)</span></td>
            <td>16px</td><td>6px</td>
            <td>${pw(rdPreview('default', { selected:'off', size:'md', desc:'off' }))}</td>
            <td>${pw(rdPreview('default', { selected:'on',  size:'md', desc:'off' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Sm</span></td>
            <td>12px</td><td>4.5px</td>
            <td>${pw(rdPreview('default', { selected:'off', size:'sm', desc:'off' }))}</td>
            <td>${pw(rdPreview('default', { selected:'on',  size:'sm', desc:'off' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Dot · Lg</td><td>Diameter</td><td>—</td><td>20px</td></tr>
          <tr><td>Dot · Md (Default)</td><td>Diameter</td><td>—</td><td>16px</td></tr>
          <tr><td>Dot · Sm</td><td>Diameter</td><td>—</td><td>12px</td></tr>
        </tbody>
      </table>

      <h2 id="Label Position">Label Position</h2>
      <table class="token-table">
        <thead><tr><th>Side</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Label Right</span></td>
            <td>${pw(rdPreview('default', { selected:'on', side:'right', desc:'on' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Label Left</span></td>
            <td>${pw(rdPreview('default', { selected:'on', side:'left',  desc:'on' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Label / Required</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Description · Invalid</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>All text · Disabled</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Switch ────────────────────────────────────────────────────
const SW_STATE_VARIANTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'focused',  label: 'Focused' },
  { key: 'disabled', label: 'Disabled' },
];
const SW_ON_OPTS = [
  { key: 'off', label: 'Off' },
  { key: 'on',  label: 'On' },
];
const SW_SIZE_OPTS = [
  { key: 'lg', label: 'Lg' },
  { key: 'md', label: 'Md' },
  { key: 'sm', label: 'Sm (Default)' },
];
const SW_SIDE_OPTS = [
  { key: 'left',  label: 'Content Left (Default)' },
  { key: 'right', label: 'Content Right' },
];

function _swTrackCls(state, on, size) {
  const parts = ['bt-switch__track'];
  if (size === 'md')        parts.push('bt-switch__track--md');
  if (size === 'lg')        parts.push('bt-switch__track--lg');
  if (on === 'on')          parts.push('bt-switch__track--on');
  if (state !== 'default')  parts.push(`bt-switch__track--${state}`);
  return parts.join(' ');
}

function _swFieldCls(state, side) {
  const parts = ['bt-switch-field'];
  if (side === 'right')     parts.push('bt-switch-field--content-right');
  if (state === 'disabled') parts.push('bt-switch-field--disabled');
  return parts.join(' ');
}

function swPreview(state, props = {}) {
  const {
    on           = 'off',
    size         = 'sm',
    side         = 'left',
    desc         = 'on',
    showContent  = 'on',
    showLabel    = 'on',
    showRequired = 'on',
  } = props;
  const trackCls = _swTrackCls(state, on, size);
  const fieldCls = _swFieldCls(state, side);
  const descHtml = desc === 'on' ? `\n        <div class="bt-switch__desc-row"><p class="bt-switch__desc">Description for additional information here.</p></div>` : '';
  const labelHtml    = showLabel    === 'on' ? `<span class="bt-switch__label">Label Text</span>` : '';
  const requiredHtml = showRequired === 'on' ? `<span class="bt-switch__required">(Required Field)</span>` : '';
  const contentHtml  = showContent  === 'on' ? `
        <div class="bt-switch__content">
          <div class="bt-switch__label-row">
            ${labelHtml}${requiredHtml}
          </div>${descHtml}
        </div>` : '';
  const clickAttr = state !== 'disabled'
    ? ` onclick="this.querySelector('.bt-switch__track').classList.toggle('bt-switch__track--on')" style="cursor:pointer;"`
    : '';
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <div class="${fieldCls}"${clickAttr}>${contentHtml}
        <div class="${trackCls}"><div class="bt-switch__thumb"></div></div>
      </div>
    </div>`;
}

function swCode(state, props = {}) {
  const {
    on           = 'off',
    size         = 'sm',
    side         = 'left',
    desc         = 'on',
    showContent  = 'on',
    showLabel    = 'on',
    showRequired = 'on',
  } = props;
  const trackCls = _swTrackCls(state, on, size);
  const fieldCls = _swFieldCls(state, side);
  const labelLine    = showLabel    === 'on' ? '\n      <span class="bt-switch__label">Label Text</span>' : '';
  const requiredLine = showRequired === 'on' ? '\n      <span class="bt-switch__required">(Required Field)</span>' : '';
  const descLine     = (showContent === 'on' && desc === 'on') ? '\n    <div class="bt-switch__desc-row">\n      <p class="bt-switch__desc">Description for additional information here.</p>\n    </div>' : '';
  const contentBlock = showContent === 'on'
    ? `\n  <div class="bt-switch__content">\n    <div class="bt-switch__label-row">${labelLine}${requiredLine}\n    </div>${descLine}\n  </div>`
    : '';
  const code = `<div class="${fieldCls}">${contentBlock}
  <div class="${trackCls}">
    <div class="bt-switch__thumb"></div>
  </div>
</div>`;
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block">${esc(code)}</pre>`;
}

function swCss(state, props = {}) {
  const { on = 'off', size = 'sm' } = props;
  const isOn = on === 'on';
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;

  lines.push(`/* Switch · ${isOn ? 'On' : 'Off'} · ${state.charAt(0).toUpperCase()+state.slice(1)}${size !== 'sm' ? ` · ${size.charAt(0).toUpperCase()+size.slice(1)}` : ''} */`);
  lines.push('');

  lines.push('.bt-switch__track {');
  const trackWH = size === 'md' ? ['40px','24px'] : size === 'lg' ? ['48px','28px'] : ['32px','20px'];
  lines.push(p('width',  trackWH[0]));
  lines.push(p('height', trackWH[1]));
  lines.push(p('padding', '2px'));
  lines.push(p('border-radius', '4px'));
  if (!isOn) lines.push(p('background', 'var(--bt-surface-primary-emphasis)  /* #d4d4d4 */'));
  else       lines.push(p('background', 'var(--bt-surface-brand-default)  /* #0d4e97 */; justify-content: flex-end'));
  lines.push('}');

  if (state !== 'default') {
    lines.push('');
    const stateLabel = `.bt-switch__track--${state}`;

    if (state === 'hover') {
      lines.push(`${stateLabel} {`);
      if (!isOn) lines.push(p('background', 'var(--bt-surface-primary-strong)  /* #a3a3a3 */'));
      else       lines.push(p('background', 'var(--bt-surface-brand-intense)  /* #0f447d */'));
      lines.push('}');
    }

    if (state === 'focused') {
      lines.push(`${stateLabel} {`);
      if (!isOn) {
        lines.push(p('background',  'var(--bt-surface-primary-strong)  /* #a3a3a3 */'));
        lines.push(p('box-shadow',  '0 0 0 3px rgba(212,212,212,0.25)'));
      } else {
        lines.push(p('background',  'var(--bt-surface-brand-intense)  /* #0f447d */'));
        lines.push(p('box-shadow',  '0 0 0 3px rgba(13,78,151,0.25)'));
      }
      lines.push('}');
    }

    if (state === 'disabled') {
      lines.push(`${stateLabel} {`);
      if (!isOn) lines.push(p('background', 'var(--bt-surface-primary-muted)  /* #e6e6e6 */'));
      else       lines.push(p('background', 'var(--bt-surface-brand-muted)  /* #bedbf9 */'));
      lines.push(p('cursor', 'not-allowed'));
      lines.push('}');
    }
  }

  lines.push('');
  lines.push('.bt-switch__thumb {');
  const thumbPx = size === 'md' ? '20px' : size === 'lg' ? '24px' : '16px';
  lines.push(p('width',  thumbPx));
  lines.push(p('height', thumbPx));
  lines.push(p('border-radius', '4px'));
  lines.push(p('background', 'var(--bt-surface-primary-default)  /* #ffffff, all states */'));
  lines.push(p('box-shadow', '0 2px 4px rgba(16,24,40,0.06), 0 4px 8px rgba(16,24,40,0.10)'));
  lines.push('}');

  lines.push('');
  lines.push('/* Text */');
  lines.push('.bt-switch__label, .bt-switch__required {');
  if (state === 'disabled') lines.push(p('color', 'var(--bt-text-primary-muted)  /* #a3a3a3 */'));
  else                      lines.push(p('color', 'var(--bt-text-primary-default)  /* #1a1a1a */'));
  lines.push('}');
  lines.push('.bt-switch__desc {');
  if (state === 'disabled') lines.push(p('color', 'var(--bt-text-primary-muted)  /* #a3a3a3 */'));
  else                      lines.push(p('color', 'var(--bt-text-primary-emphasis)  /* #727272 */'));
  lines.push('}');

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/switch'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['States', 'Sizes', 'Content Position'],
  render(tab) {
    const title = 'Switch';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;
    const pw = html => `<div class="preview-wrap">${html}</div>`;

    if (tab === 'Examples') return { title, html: `
      <h2>Off States</h2>
      ${registerPlayground({
        id: 'pgd-sw-off-ex',
        variants: SW_STATE_VARIANTS,
        props: [
          { key: 'size',         label: 'Size',             options: SW_SIZE_OPTS,  default: 'sm'    },
          { key: 'side',         label: 'Content',          options: SW_SIDE_OPTS,  default: 'left'  },
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'on'  },
        ],
        preview: (state, p) => swPreview(state, { ...p, on: 'off' }),
        code:    (state, p) => swCode(state, { ...p, on: 'off' }),
      })}
      <h2>On States</h2>
      ${registerPlayground({
        id: 'pgd-sw-on-ex',
        variants: SW_STATE_VARIANTS,
        props: [
          { key: 'size',         label: 'Size',             options: SW_SIZE_OPTS,  default: 'sm'    },
          { key: 'side',         label: 'Content',          options: SW_SIDE_OPTS,  default: 'left'  },
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'on'  },
        ],
        preview: (state, p) => swPreview(state, { ...p, on: 'on' }),
        code:    (state, p) => swCode(state, { ...p, on: 'on' }),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Switch için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Track</th><th>Thumb</th><th>CSS class</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Lg</span></td><td>48 × 28px</td><td>24 × 24px</td><td>${tk('.bt-switch__track--lg')}</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>40 × 24px</td><td>20 × 20px</td><td>${tk('.bt-switch__track--md')}</td></tr>
          <tr><td><span class="token-name">Sm (Default)</span></td><td>32 × 20px</td><td>16 × 16px</td><td>—</td></tr>
        </tbody>
      </table>
      <h2>Track Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Mode</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Default</td><td>Off</td><td>background</td><td>${tk('--bt-surface-primary-emphasis')}</td><td>#d4d4d4</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Hover</td><td>Off</td><td>background</td><td>${tk('--bt-surface-primary-strong')}</td><td>#a3a3a3</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-intense')}</td><td>#0f447d</td></tr>
          <tr><td rowspan="2">Focused</td><td>Off</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(212,212,212,0.25)</td></tr>
          <tr><td>On</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>Off</td><td>background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>On</td><td>background</td><td>${tk('--bt-surface-brand-muted')}</td><td>#bedbf9</td></tr>
        </tbody>
      </table>
      <h2>Thumb</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>background</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff (tüm state'lerde sabit)</td></tr>
          <tr><td>box-shadow</td><td>${tk('Shadow/md')}</td><td>0 2px 4px rgba(16,24,40,.06), 0 4px 8px rgba(16,24,40,.10)</td></tr>
          <tr><td>border-radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
        </tbody>
      </table>
      <h2>Text Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>State</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Label / Required</td><td>Default</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Default</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>All text</td><td>Disabled</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-switch-field')}</td><td>Wrapper</td><td>Temel sarmalayıcı — inline-flex, gap 8px</td></tr>
          <tr><td>${tk('.bt-switch-field--content-right')}</td><td>Wrapper</td><td>Switch solda, content sağda (row-reverse)</td></tr>
          <tr><td>${tk('.bt-switch-field--disabled')}</td><td>Wrapper</td><td>cursor: not-allowed</td></tr>
          <tr><td>${tk('.bt-switch__track')}</td><td>Görsel track</td><td>32×20px, border-radius 4px, sm/default state</td></tr>
          <tr><td>${tk('.bt-switch__track--md')}</td><td>Track</td><td>40×24px</td></tr>
          <tr><td>${tk('.bt-switch__track--lg')}</td><td>Track</td><td>48×28px</td></tr>
          <tr><td>${tk('.bt-switch__track--on')}</td><td>Track</td><td>On state — mavi arka plan, thumb sağa yaslanır</td></tr>
          <tr><td>${tk('.bt-switch__track--hover')}</td><td>Track</td><td>Hover state</td></tr>
          <tr><td>${tk('.bt-switch__track--focused')}</td><td>Track</td><td>Focused state + focus ring</td></tr>
          <tr><td>${tk('.bt-switch__track--disabled')}</td><td>Track</td><td>Disabled state</td></tr>
          <tr><td>${tk('.bt-switch__thumb')}</td><td>Görsel thumb</td><td>Beyaz kare, radius 4px, gölgeli — tüm state'lerde sabit</td></tr>
          <tr><td>${tk('.bt-switch__content')}</td><td>İçerik alanı</td><td>Label + required + description wrapper, gap: ${tk('--bt-space-xs')} (4px)</td></tr>
          <tr><td>${tk('.bt-switch__label-row')}</td><td>İçerik</td><td>Label ve required field'ı yan yana tutar — gap: ${tk('--bt-space-xs')} (4px), padding: ${tk('--bt-space-none')} (Figma'da bu container için ayrıca seçilmiş, 0px)</td></tr>
          <tr><td>${tk('.bt-switch__label')}</td><td>Metin</td><td>14px, primary default renk</td></tr>
          <tr><td>${tk('.bt-switch__required')}</td><td>Metin</td><td>12px, "(Required Field)" metni — Label ile aynı renk (${tk('--bt-text-primary-default')})</td></tr>
          <tr><td>${tk('.bt-switch__desc-row')}</td><td>İçerik</td><td>Description wrapper — gap: ${tk('--bt-space-none')}, padding: ${tk('--bt-space-none')} (Figma'da bu container için ayrıca seçilmiş, 0px)</td></tr>
          <tr><td>${tk('.bt-switch__desc')}</td><td>Metin</td><td>12px, muted renk, açıklama metni</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Switch kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Switch'i anlık efektli, kaydet/onayla gerektirmeyen ayarlar için kullan (Wi-Fi, bildirimler, karanlık mod gibi).</li>
        <li>Etiketi switch'in durumunu değil, kontrol ettiği ayarı anlatacak şekilde yaz.</li>
        <li>Aynı formda tek bir boyut (sm/md/lg) kullan — karıştırma.</li>
        <li>Disabled durumda neden devre dışı olduğunu Description alanında açıkla.</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Formlarda birden fazla seçim gerektiren durumlarda switch kullanma — Checkbox tercih et.</li>
        <li>Birbirini dışlayan seçenekler için kullanma — Radio Button kullan.</li>
        <li>Switch değişikliğini bir "Kaydet" aksiyonuna bağlama; değişiklik anlık uygulanmalı.</li>
      </ul>
      <h2>Switch vs Checkbox</h2>
      <table class="token-table">
        <thead><tr><th>Kriter</th><th>Switch</th><th>Checkbox</th></tr></thead>
        <tbody>
          <tr><td>Etki zamanı</td><td>Anlık</td><td>Form submit sonrası</td></tr>
          <tr><td>Seçim sayısı</td><td>Tekil (açık/kapalı)</td><td>Çoklu olabilir</td></tr>
          <tr><td>Kullanım bağlamı</td><td>Ayarlar, tercihler</td><td>Formlar, listeler</td></tr>
        </tbody>
      </table>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-sw-overview',
        variants: SW_STATE_VARIANTS,
        props: [
          { key: 'on',           label: 'Mode',             options: SW_ON_OPTS,    default: 'off'   },
          { key: 'size',         label: 'Size',             options: SW_SIZE_OPTS,  default: 'sm'    },
          { key: 'side',         label: 'Content',          options: SW_SIDE_OPTS,  default: 'left'  },
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'on'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'on'  },
        ],
        preview: (state, p) => swPreview(state, p),
        code:    (state, p) => swCode(state, p),
        css:     (state, p) => swCss(state, p),
      })}

      <p class="page-desc">Tek bir ayarı açık/kapalı konumuna getiren toggle kontrolü. Üç boyut (Sm / Md / Lg), dört state (Default / Hover / Focused / Disabled) ve iki content konumu (Left / Right) destekler.</p>

      <h2 id="States">States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Off</th><th>On</th></tr></thead>
        <tbody>
          ${SW_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${pw(swPreview(s.key, { on:'off', desc:'off' }))}</td>
            <td>${pw(swPreview(s.key, { on:'on',  desc:'off' }))}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Track · Off Default</td><td>Background</td><td>${tk('--bt-surface-primary-emphasis')}</td><td>#d4d4d4</td></tr>
          <tr><td>Track · On Default</td><td>Background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Track · Off Hover</td><td>Background</td><td>${tk('--bt-surface-primary-strong')}</td><td>#a3a3a3</td></tr>
          <tr><td>Track · On Hover</td><td>Background</td><td>${tk('--bt-surface-brand-intense')}</td><td>#0f447d</td></tr>
          <tr><td>Track · Off Focused</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(212,212,212,.25)</td></tr>
          <tr><td>Track · On Focused</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(13,78,151,.25)</td></tr>
          <tr><td>Track · Off Disabled</td><td>Background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Track · On Disabled</td><td>Background</td><td>${tk('--bt-surface-brand-muted')}</td><td>#bedbf9</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Track</th><th>Thumb</th><th>Off</th><th>On</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Lg</span></td>
            <td>48 × 28px</td><td>24 × 24px</td>
            <td>${pw(swPreview('default', { on:'off', size:'lg', desc:'off' }))}</td>
            <td>${pw(swPreview('default', { on:'on',  size:'lg', desc:'off' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Md</span></td>
            <td>40 × 24px</td><td>20 × 20px</td>
            <td>${pw(swPreview('default', { on:'off', size:'md', desc:'off' }))}</td>
            <td>${pw(swPreview('default', { on:'on',  size:'md', desc:'off' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Sm (Default)</span></td>
            <td>32 × 20px</td><td>16 × 16px</td>
            <td>${pw(swPreview('default', { on:'off', size:'sm', desc:'off' }))}</td>
            <td>${pw(swPreview('default', { on:'on',  size:'sm', desc:'off' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Track · Lg</td><td>Size</td><td>—</td><td>48 × 28px</td></tr>
          <tr><td>Track · Md</td><td>Size</td><td>—</td><td>40 × 24px</td></tr>
          <tr><td>Track · Sm (Default)</td><td>Size</td><td>—</td><td>32 × 20px</td></tr>
          <tr><td>Thumb · Lg</td><td>Size</td><td>—</td><td>24 × 24px</td></tr>
          <tr><td>Thumb · Md</td><td>Size</td><td>—</td><td>20 × 20px</td></tr>
          <tr><td>Thumb · Sm</td><td>Size</td><td>—</td><td>16 × 16px</td></tr>
        </tbody>
      </table>

      <h2 id="Content Position">Content Position</h2>
      <table class="token-table">
        <thead><tr><th>Side</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Content Left (Default)</span></td>
            <td>${pw(swPreview('default', { on:'on', side:'left', desc:'on' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Content Right</span></td>
            <td>${pw(swPreview('default', { on:'on', side:'right', desc:'on' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Thumb</td><td>Background (tüm state'lerde)</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>Thumb</td><td>Shadow</td><td>${tk('Shadow/md')}</td><td>0 2px 4px rgba(16,24,40,.06), 0 4px 8px rgba(16,24,40,.10)</td></tr>
          <tr><td>Thumb</td><td>Border radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>Label / Required</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>All text · Disabled</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Searchbox ────────────────────────────────────────────────────
const _sbxIconClear = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="1.5" y1="1.5" x2="8.5" y2="8.5"/><line x1="8.5" y1="1.5" x2="1.5" y2="8.5"/></svg>`;

const SBX_SIZE_OPTS = [
  { key: 'lg', label: 'Lg' },
  { key: 'md', label: 'Md (Default)' },
  { key: 'sm', label: 'Sm' },
];
const SBX_STATE_VARIANTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'active',   label: 'Active' },
  { key: 'filled',   label: 'Filled' },
  { key: 'disabled', label: 'Disabled' },
];

function sbxInput(el) {
  el.closest('.bt-searchbox').classList.toggle('bt-searchbox--filled', el.value.length > 0);
}
function sbxClear(el) {
  const box = el.closest('.bt-searchbox');
  const input = box.querySelector('.bt-searchbox__text');
  input.value = '';
  box.classList.remove('bt-searchbox--filled');
  input.focus();
}

function _sbxCls(state, size) {
  const parts = ['bt-searchbox', `bt-searchbox--${size}`];
  if (state !== 'default') parts.push(`bt-searchbox--${state}`);
  return parts.join(' ');
}

function sbxPreview(state, props = {}) {
  const { size = 'sm' } = props;
  const cls = _sbxCls(state, size);
  const disabled = state === 'disabled';
  const filled = state === 'filled';
  const clearHtml = filled ? `
        <div class="bt-searchbox__control bt-searchbox__control--clickable" onclick="sbxClear(this)">
          <span class="bt-searchbox__icon">${_sbxIconClear}</span>
        </div>` : '';
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <div class="${cls}" style="max-width:420px;">
        <div class="bt-searchbox__control">
          <span class="bt-searchbox__icon">${sbxIconSearch}</span>
        </div>
        <div class="bt-searchbox__field">
          <input class="bt-searchbox__text" type="text" placeholder="Placeholder Text"${filled ? ' value="Placeholder Text"' : ''}${disabled ? ' disabled' : ''} oninput="sbxInput(this)" />
        </div>${clearHtml}
      </div>
    </div>`;
}

function sbxCode(state, props = {}) {
  const { size = 'sm' } = props;
  const cls = _sbxCls(state, size);
  const disabled = state === 'disabled';
  const filled = state === 'filled';
  const clearBlock = filled ? `\n  <div class="bt-searchbox__control">\n    <!-- clear icon 10x10 -->\n  </div>` : '';
  const code = `<div class="${cls}">
  <div class="bt-searchbox__control">
    <!-- search icon 14x14 -->
  </div>
  <div class="bt-searchbox__field">
    <input class="bt-searchbox__text" type="text" placeholder="Placeholder Text"${filled ? ' value="Placeholder Text"' : ''}${disabled ? ' disabled' : ''} />
  </div>${clearBlock}
</div>`;
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block">${esc(code)}</pre>`;
}

function sbxCss(state, props = {}) {
  const { size = 'sm' } = props;
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;

  lines.push(`/* Searchbox · ${state.charAt(0).toUpperCase()+state.slice(1)}${size !== 'sm' ? ` · ${size.charAt(0).toUpperCase()+size.slice(1)}` : ''} */`);
  lines.push('');

  lines.push('.bt-searchbox {');
  const h = size === 'md' ? '32px' : size === 'lg' ? '36px' : '28px';
  lines.push(p('height', h));
  lines.push(p('border-radius', 'var(--bt-radius-md)  /* 6px */'));
  lines.push(p('background', state === 'disabled' ? 'var(--bt-surface-secondary-subtle)  /* #e6e6e6 */' : 'var(--bt-surface-primary-default)  /* #ffffff */'));
  const borderColor = (state === 'hover' || state === 'active') ? 'var(--bt-border-brand-default)  /* #0d4e97 */' : 'var(--bt-border-primary-default)  /* #d4d4d4 */';
  lines.push(p('border', `1px solid ${borderColor}`));
  if (state === 'active') lines.push(p('box-shadow', '0 0 0 3px rgba(13,78,151,0.25)'));
  lines.push('}');

  lines.push('');
  lines.push('.bt-searchbox__control {');
  const ctrlPad = size === 'md' ? 'var(--bt-space-xs)  /* 4px */' : size === 'lg' ? 'var(--bt-space-sm)  /* 6px */' : 'var(--bt-space-2xs)  /* 2px */';
  lines.push(p('padding', ctrlPad));
  lines.push('}');

  lines.push('');
  lines.push('.bt-searchbox__field {');
  const fieldPad = size === 'md' ? 'var(--bt-space-sm) var(--bt-space-xs)  /* 6px 4px */' : size === 'lg' ? 'var(--bt-space-md) var(--bt-space-xs)  /* 8px 4px */' : 'var(--bt-space-xs)  /* 4px */';
  lines.push(p('padding', fieldPad));
  lines.push('}');

  lines.push('');
  lines.push('.bt-searchbox__text {');
  lines.push(p('color', state === 'filled' ? 'var(--bt-text-primary-default)  /* #1a1a1a */' : 'var(--bt-text-primary-muted)  /* #a3a3a3 (placeholder) */'));
  lines.push('}');

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/searchbox'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['States', 'Sizes'],
  render(tab) {
    const title = 'SearchBox';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'Examples') return { title, html: `
      <h2>States</h2>
      ${registerPlayground({
        id: 'pgd-sbx-ex',
        variants: SBX_STATE_VARIANTS,
        props: [
          { key: 'size', label: 'Size', options: SBX_SIZE_OPTS, default: 'md' },
        ],
        preview: (state, p) => sbxPreview(state, p),
        code:    (state, p) => sbxCode(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">SearchBox için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Height</th><th>Control padding</th><th>Field padding</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${tk('--bt-space-sm')} (6px)</td><td>${tk('--bt-space-md')} / ${tk('--bt-space-xs')} (8px / 4px)</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${tk('--bt-space-xs')} (4px)</td><td>${tk('--bt-space-sm')} / ${tk('--bt-space-xs')} (6px / 4px)</td></tr>
          <tr><td><span class="token-name">Sm (Default)</span></td><td>28px</td><td>${tk('--bt-space-2xs')} (2px)</td><td>${tk('--bt-space-xs')} (4px, tüm kenarlar)</td></tr>
        </tbody>
      </table>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td>Filled</td><td>color (text)</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-secondary-subtle')}</td><td>#e6e6e6</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4 (değişmez)</td></tr>
        </tbody>
      </table>
      <h2>Shared Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>border-radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>background (Default/Hover/Active/Filled)</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>Placeholder metin rengi</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>Icon kutusu</td><td>—</td><td>24 × 24px (search ikon 14×14, clear ikon 10×10)</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-searchbox')}</td><td>Wrapper</td><td>flex row, border+radius+bg — tüm state stilleri burada</td></tr>
          <tr><td>${tk('.bt-searchbox--sm/--md/--lg')}</td><td>Wrapper</td><td>Yükseklik ve iç padding'leri belirler</td></tr>
          <tr><td>${tk('.bt-searchbox--hover/--active/--disabled')}</td><td>Wrapper</td><td>State'i zorlamak için (docs amaçlı) — gerçek kullanımda :hover/:focus-within otomatik çalışır</td></tr>
          <tr><td>${tk('.bt-searchbox__control')}</td><td>İkon kutusu</td><td>Search (sol) ve Clear (sağ, sadece değer varken) ikonlarını saran kare alan</td></tr>
          <tr><td>${tk('.bt-searchbox__icon')}</td><td>İkon</td><td>24×24, muted renk</td></tr>
          <tr><td>${tk('.bt-searchbox__field')}</td><td>Input sarmalayıcı</td><td>flex:1, size'a göre padding</td></tr>
          <tr><td>${tk('.bt-searchbox__text')}</td><td>Input</td><td>Gerçek <code style="font-family:var(--mono)">&lt;input type="text"&gt;</code>, border/outline sıfırlanmış</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">SearchBox kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Bir liste/tabloyu anlık (debounce'lu) filtrelemek için kullan</li>
        <li>Kullanıcı bir şey yazdığında Clear (X) aksiyonunu göster, tek tıkla temizlensin</li>
        <li>Placeholder'da ne aranacağını belirt (örn. "Sipariş numarası ara")</li>
        <li>Sayfa/tablo genişliğine göre Sm/Md/Lg boyutlarından uygun olanı seç</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>SearchBox'ı genel bir form text field'ı olarak kullanma — o iş için Textarea bileşenini tercih et</li>
        <li>Disabled durumda arama sonucu gösterme; boş/yükleniyor state'i ayrıca ele al</li>
        <li>Token dışında hardcoded renk/spacing kullanma; her zaman <code style="font-family:var(--mono)">--bt-*</code> tokenlarını kullan</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-sbx-overview',
        variants: SBX_STATE_VARIANTS,
        props: [
          { key: 'size', label: 'Size', options: SBX_SIZE_OPTS, default: 'md' },
        ],
        preview: (state, p) => sbxPreview(state, p),
        code:    (state, p) => sbxCode(state, p),
        css:     (state, p) => sbxCss(state, p),
      })}

      <p class="page-desc">Arama/filtreleme için kullanılan input alanı. Üç boyut (Sm / Md / Lg) ve beş state (Default / Hover / Active / Filled / Disabled) destekler. Sol tarafta sabit arama ikonu, değer girildiğinde sağda temizleme (X) aksiyonu belirir.</p>

      <h2 id="States">States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Preview</th></tr></thead>
        <tbody>
          ${SBX_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${sbxPreview(s.key, { size: 'sm' })}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container · Default</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Container · Hover / Active</td><td>Border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Container · Active</td><td>Focus ring</td><td>—</td><td>0 0 0 3px rgba(13,78,151,.25)</td></tr>
          <tr><td>Container · Disabled</td><td>Background</td><td>${tk('--bt-surface-secondary-subtle')}</td><td>#e6e6e6</td></tr>
          <tr><td>Container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Container</td><td>Background (Default/Hover/Active)</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Height</th><th>Preview</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${sbxPreview('default', { size: 'lg' })}</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${sbxPreview('default', { size: 'md' })}</td></tr>
          <tr><td><span class="token-name">Sm (Default)</span></td><td>28px</td><td>${sbxPreview('default', { size: 'sm' })}</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Input text</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>Input text · Filled</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Placeholder</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Icon box</td><td>Size</td><td>—</td><td>24 × 24px</td></tr>
          <tr><td>Search icon</td><td>Size</td><td>—</td><td>14 × 14px</td></tr>
          <tr><td>Clear icon</td><td>Size</td><td>—</td><td>10 × 10px</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Button Group ────────────────────────────────────────────────
const BGRP_FILL_VARIANTS = [
  { key: 'solid',   label: 'Solid' },
  { key: 'outline', label: 'Outline' },
  { key: 'flat',    label: 'Flat' },
  { key: 'ghost',   label: 'Ghost' },
];

// Divider token/value lookup (mirrors Split Button + CSS)
const _bgrpDivider = {
  'primary-solid':     'rgba(255,255,255,0.30)',
  'secondary-solid':   'rgba(255,255,255,0.30)',
  'success-solid':     'rgba(255,255,255,0.30)',
  'error-solid':       'rgba(255,255,255,0.30)',
  'information-solid': 'rgba(255,255,255,0.30)',
  'warning-solid':     'rgba(0,0,0,0.15)',
  'base-solid':        'var(--bt-border-primary-default)',
  'primary-flat':      'rgba(13,78,151,0.25)',    'primary-ghost':      'rgba(13,78,151,0.25)',
  'base-flat':         'rgba(163,163,163,0.40)',  'base-ghost':         'rgba(163,163,163,0.40)',
  'secondary-flat':    'rgba(163,163,163,0.40)',  'secondary-ghost':    'rgba(163,163,163,0.40)',
  'success-flat':      'rgba(68,135,113,0.25)',   'success-ghost':      'rgba(68,135,113,0.25)',
  'warning-flat':      'rgba(212,175,44,0.25)',   'warning-ghost':      'rgba(212,175,44,0.25)',
  'error-flat':        'rgba(232,75,91,0.25)',    'error-ghost':        'rgba(232,75,91,0.25)',
  'information-flat':  'rgba(13,78,151,0.25)',    'information-ghost':  'rgba(13,78,151,0.25)',
};

function _bgrpCls(fill, size, theme) {
  const outlineMod = fill === 'outline' ? ' bt-btn-group--outline' : '';
  return `bt-btn-group bt-btn-group--${theme}-${fill}${outlineMod}`;
}

function _bgrpItemCls(fill, size, theme, content) {
  const parts = [`bt-btn`, `bt-btn--${theme}-${fill}`, `bt-btn--${size}`];
  if (content === 'icon') parts.push('bt-btn--icon');
  return parts.join(' ');
}

function bgrpPreview(fill, size, content, theme = 'primary') {
  const wrapCls  = _bgrpCls(fill, size, theme);
  const itemCls  = _bgrpItemCls(fill, size, theme, content);
  const icon     = content !== 'text'  ? _btnIcon : '';
  const label1   = content !== 'icon'  ? '<span>Option 1</span>' : '';
  const label2   = content !== 'icon'  ? '<span>Option 2</span>' : '';
  const label3   = content !== 'icon'  ? '<span>Option 3</span>' : '';
  const toggle = `onclick="this.classList.toggle('bt-btn--state-selected')"`;
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <div class="${wrapCls}">
        <button class="${itemCls}" ${toggle}>${icon}${label1}</button>
        <button class="${itemCls}" ${toggle}>${icon}${label2}</button>
        <button class="${itemCls}" ${toggle}>${icon}${label3}</button>
      </div>
    </div>`;
}

function bgrpCode(fill, size, content, theme = 'primary') {
  const wrapCls  = _bgrpCls(fill, size, theme);
  const itemCls  = _bgrpItemCls(fill, size, theme, content);
  const icon     = content !== 'text'  ? '\n    <!-- icon 16×16 -->' : '';
  const label1   = content !== 'icon'  ? '\n    Option 1' : '';
  const label2   = content !== 'icon'  ? '\n    Option 2' : '';
  const label3   = content !== 'icon'  ? '\n    Option 3' : '';
  const btn = (lbl) => `<button class="${itemCls}" onclick="this.classList.toggle('bt-btn--state-selected')">${icon}${lbl}\n  </button>`;
  const code = `<div class="${wrapCls}">\n  ${btn(label1)}\n  ${btn(label2)}\n  ${btn(label3)}\n</div>`;
  return `<pre class="code-block">${code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>`;
}

function bgrpCss(fill, props) {
  const { theme, size } = props;
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;
  const divider = _bgrpDivider[`${theme}-${fill}`] || 'rgba(0,0,0,0.12)';

  lines.push(`.bt-btn-group--${theme}-${fill} {`);
  if (fill !== 'outline') lines.push(p('--grp-divider', divider));
  lines.push('}');

  lines.push('');
  lines.push('.bt-btn-group > .bt-btn {');
  lines.push(p('border-radius', '0'));
  lines.push(p('position', 'relative'));
  lines.push('}');

  lines.push('');
  lines.push('.bt-btn-group > .bt-btn:first-child {');
  lines.push(p('border-radius', 'var(--bt-radius-sm) 0 0 var(--bt-radius-sm)  /* 4px */'));
  lines.push('}');

  lines.push('');
  lines.push('.bt-btn-group > .bt-btn:last-child {');
  lines.push(p('border-radius', '0 var(--bt-radius-sm) var(--bt-radius-sm) 0  /* 4px */'));
  lines.push('}');

  if (fill === 'outline') {
    lines.push('');
    lines.push('/* Outline: merge adjacent borders */');
    lines.push('.bt-btn-group--outline > .bt-btn:not(:first-child) {');
    lines.push(p('margin-left', '-1px'));
    lines.push('}');
    lines.push('.bt-btn-group--outline > .bt-btn:hover,');
    lines.push('.bt-btn-group--outline > .bt-btn:focus-visible {');
    lines.push(p('z-index', '1'));
    lines.push('}');
  } else {
    lines.push('');
    lines.push('/* Divider between items */');
    lines.push('.bt-btn-group > .bt-btn:not(:first-child)::before {');
    lines.push(p('content', "''"));
    lines.push(p('position', 'absolute'));
    lines.push(p('left', '0'));
    lines.push(p('top', '0'));
    lines.push(p('bottom', '0'));
    lines.push(p('width', '1px'));
    lines.push(p('background', divider));
    lines.push('}');
  }

  lines.push('');
  lines.push(`/* Item sizing — reuses .bt-btn--${size} */`);
  lines.push(`.bt-btn--${size} {`);
  lines.push(p('--btn-py', `${_btnSizePyToken[size]}  /* ${_btnSizePyVal[size]} */`));
  lines.push(p('--btn-px', `${_btnSizePxToken[size]}  /* ${_btnSizePxVal[size]} */`));
  lines.push(p('padding', 'var(--btn-py) var(--btn-px)'));
  lines.push('}');

  lines.push('');
  lines.push(`/* Item colors — reuses .bt-btn--${theme}-${fill} */`);
  const d = _btnCssProps[`${theme}-${fill}`];
  if (d) {
    lines.push(`.bt-btn--${theme}-${fill} {`);
    if (d.default.bg)     lines.push(p('background', d.default.bg));
    if (d.default.shadow) lines.push(p('box-shadow', d.default.shadow));
    lines.push(p('color', d.default.color));
    lines.push('}');
  }

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/button-group'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'Fill Mode', 'Theme', 'Size'],
  render(tab) {
    const title = 'Button Group';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'Examples') return { title, html: `
      <h2>Solid</h2>
      ${registerPlayground({
        id: 'pgd-bgrp-solid-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,   default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
        ],
        preview: (sz, p) => bgrpPreview('solid',   sz, p.content, p.theme),
        code:    (sz, p) => bgrpCode('solid',   sz, p.content, p.theme),
      })}
      <h2>Outline</h2>
      ${registerPlayground({
        id: 'pgd-bgrp-outline-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,   default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
        ],
        preview: (sz, p) => bgrpPreview('outline', sz, p.content, p.theme),
        code:    (sz, p) => bgrpCode('outline', sz, p.content, p.theme),
      })}
      <h2>Flat</h2>
      ${registerPlayground({
        id: 'pgd-bgrp-flat-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,   default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
        ],
        preview: (sz, p) => bgrpPreview('flat',    sz, p.content, p.theme),
        code:    (sz, p) => bgrpCode('flat',    sz, p.content, p.theme),
      })}
      <h2>Ghost</h2>
      ${registerPlayground({
        id: 'pgd-bgrp-ghost-ex',
        variants: BTN_SIZE_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,   default: 'primary'   },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS, default: 'icon-text' },
        ],
        preview: (sz, p) => bgrpPreview('ghost',   sz, p.content, p.theme),
        code:    (sz, p) => bgrpCode('ghost',   sz, p.content, p.theme),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Button Group, child item'lar için mevcut <code style="font-family:var(--mono)">.bt-btn</code> sınıflarını kullanır; sadece sarmalayıcı ve köşe/divider davranışı yeni CSS ekler.</p>
      <h2>Container</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Value</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('display')}</td><td>inline-flex</td><td>Satır içi yatay düzen</td></tr>
          <tr><td>${tk('align-items')}</td><td>stretch</td><td>Eşit yükseklik</td></tr>
        </tbody>
      </table>
      <h2>Border Radius</h2>
      <table class="token-table">
        <thead><tr><th>Selector</th><th>border-radius</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-btn-group > .bt-btn')}</td><td>0 (tüm iç köşeler düz)</td></tr>
          <tr><td>${tk(':first-child')}</td><td>${tk('var(--bt-radius-sm)')} 0 0 ${tk('var(--bt-radius-sm)')}</td></tr>
          <tr><td>${tk(':last-child')}</td><td>0 ${tk('var(--bt-radius-sm)')} ${tk('var(--bt-radius-sm)')} 0</td></tr>
        </tbody>
      </table>
      <h2>Divider (Solid / Flat / Ghost)</h2>
      <table class="token-table">
        <thead><tr><th>Theme</th><th>Fill</th><th>--grp-divider</th></tr></thead>
        <tbody>
          ${['solid','flat','ghost'].flatMap(f =>
            Object.keys(BTN_THEME_OPTS.reduce((a,o)=>({...a,[o.key]:1}),{})).map(t =>
              _bgrpDivider[`${t}-${f}`]
                ? `<tr><td>${t.charAt(0).toUpperCase()+t.slice(1)}</td><td>${f.charAt(0).toUpperCase()+f.slice(1)}</td><td>${tk(_bgrpDivider[`${t}-${f}`])}</td></tr>`
                : ''
            )
          ).join('')}
        </tbody>
      </table>
      <h2>Outline Merge</h2>
      <table class="token-table">
        <thead><tr><th>Selector</th><th>Property</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-btn-group--outline > .bt-btn:not(:first-child)')}</td><td>margin-left</td><td>-1px</td></tr>
          <tr><td>${tk(':hover / :focus-visible / :active')}</td><td>z-index</td><td>1</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Button Group kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>İlgili, birbirini tamamlayan aksiyonları grupla (örn. Geri / Bugün / İleri)</li>
        <li>Tüm item'larda aynı fill + theme kombinasyonunu kullan</li>
        <li>Icon Only modunda tooltip ekle</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Farklı fill ya da theme'leri aynı grupta karıştırma</li>
        <li>2'den az veya 5'ten fazla item kullanma</li>
        <li>Birincil (Solid) aksiyonu button group içine koymaktan kaçın — gruplayıcı olarak Outline / Flat tercih et</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-bgrp-overview',
        variants: BGRP_FILL_VARIANTS,
        props: [
          { key: 'theme',   label: 'Theme',   options: BTN_THEME_OPTS,    default: 'primary'   },
          { key: 'size',    label: 'Size',    options: BTN_SIZE_VARIANTS, default: 'sm'        },
          { key: 'content', label: 'Content', options: BTN_CONTENT_OPTS,  default: 'icon-text' },
        ],
        preview: (fill, p) => bgrpPreview(fill, p.size, p.content, p.theme),
        code:    (fill, p) => bgrpCode(fill, p.size, p.content, p.theme),
        css:     (fill, p) => bgrpCss(fill, p),
      })}

      <p class="page-desc">Aynı konteyde ilgili aksiyonları yan yana sunan buton bileşeni. Mevcut <code style="font-family:var(--mono)">.bt-btn</code> sınıflarını child item olarak kullanır; sarmalayıcı yalnızca köşe radüsü ve item arası divider davranışını yönetir.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Eleman</th><th>CSS Sınıfı</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>Wrapper</td><td>${tk('.bt-btn-group')}</td><td>inline-flex container</td></tr>
          <tr><td>Wrapper modifier</td><td>${tk('.bt-btn-group--{theme}-{fill}')}</td><td>--grp-divider rengini belirler</td></tr>
          <tr><td>Outline modifier</td><td>${tk('.bt-btn-group--outline')}</td><td>Outline fill için -1px margin trick'i aktifleştirir</td></tr>
          <tr><td>Item</td><td>${tk('.bt-btn .bt-btn--{theme}-{fill} .bt-btn--{size}')}</td><td>Standart Button — radius wrapper tarafından override edilir</td></tr>
        </tbody>
      </table>

      <h2 id="Fill Mode">Fill Mode</h2>
      <table class="token-table">
        <thead><tr><th>Fill</th><th>Divider yöntemi</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>Solid</td><td>${tk('::before')} pseudo-element</td><td>Yarı saydam beyaz/siyah divider</td></tr>
          <tr><td>Outline</td><td>${tk('margin-left: -1px')}</td><td>Bitişik box-shadow'lar birleşir</td></tr>
          <tr><td>Flat</td><td>${tk('::before')} pseudo-element</td><td>Tema renginde düşük opaklıklı divider</td></tr>
          <tr><td>Ghost</td><td>${tk('::before')} pseudo-element</td><td>Flat ile aynı divider rengi</td></tr>
        </tbody>
      </table>

      <h2 id="Theme">Theme</h2>
      <table class="token-table">
        <thead><tr><th>Theme</th><th>Solid Preview</th><th>Outline Preview</th></tr></thead>
        <tbody>
          ${BTN_THEME_OPTS.map(th => `
          <tr>
            <td><span class="token-name">${th.label}</span></td>
            <td>${bgrpPreview('solid',   'sm', 'icon-text', th.key)}</td>
            <td>${bgrpPreview('outline', 'sm', 'icon-text', th.key)}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Size">Size</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${BTN_SIZE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${bgrpPreview('outline', s.key, 'icon-text', 'primary')}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};
  },
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
  { key: 'text',      label: 'Text Only' },
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

// ── Button CSS Properties data (fill × theme) ───────────────────
const _btnCssProps = {
  'primary-solid':      { default:{bg:'var(--bt-primary-default)',color:'var(--bt-text-primary-inverted)'},         hover:{bg:'var(--bt-primary-intense)'},                                        focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                                              active:{bg:'var(--bt-primary-intense)'},                                             dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'primary-outline':    { default:{shadow:'inset 0 0 0 1px var(--bt-primary-default)',color:'var(--bt-primary-default)'},                                                                          focus:{shadow:'inset 0 0 0 1px var(--bt-primary-default), 0 0 0 3px rgba(13,78,151,.50)'},     hover:{bg:'var(--bt-primary-subtle)'},   active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'primary-flat':       { default:{color:'var(--bt-primary-default)'},                                              hover:{bg:'var(--bt-primary-subtle)'},                                         focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                 active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-ghost':      { default:{color:'var(--bt-primary-default)'},                                              hover:{color:'var(--bt-primary-intense)'},                                     focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                                              active:{color:'var(--bt-primary-default)'},                                           dis:{color:'var(--bt-text-primary-muted)'} },
  'base-solid':         { default:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-default)'},               hover:{bg:'var(--bt-base-emphasis)'},                                          focus:{shadow:'0 0 0 3px rgba(212,212,212,.50)'},                                                                            active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'base-outline':       { default:{shadow:'inset 0 0 0 1px var(--bt-border-primary-default)',color:'var(--bt-text-primary-default)'},                                                              focus:{shadow:'inset 0 0 0 1px var(--bt-border-primary-default), 0 0 0 3px rgba(212,212,212,.50)'},                          hover:{bg:'var(--bt-base-emphasis)'},    active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-border-primary-default)'} },
  'base-flat':          { default:{color:'var(--bt-text-primary-default)'},                                         hover:{bg:'var(--bt-base-emphasis)'},                                          focus:{shadow:'0 0 0 3px rgba(212,212,212,.50)'},                                                                            active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)'} },
  'base-ghost':         { default:{color:'var(--bt-text-primary-default)'},                                         hover:{effect:'text-decoration: underline'},                                   focus:{shadow:'0 0 0 3px rgba(212,212,212,.50)'},                                                                            active:{},                                                                            dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-solid':    { default:{bg:'var(--bt-secondary-default)',color:'var(--bt-text-primary-inverted)'},        hover:{bg:'var(--bt-secondary-intense)'},                                      focus:{shadow:'0 0 0 3px rgba(212,212,212,.50)'},                                                                            active:{bg:'var(--bt-secondary-intense)'},                                            dis:{bg:'var(--bt-secondary-muted)',color:'var(--bt-text-primary-muted)'} },
  'secondary-outline':  { default:{shadow:'inset 0 0 0 1px var(--bt-border-primary-default)',color:'var(--bt-text-primary-default)'},                                                              focus:{shadow:'inset 0 0 0 1px var(--bt-border-primary-default), 0 0 0 3px rgba(212,212,212,.50)'},                          hover:{bg:'var(--bt-secondary-emphasis)'},active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-border-primary-default)'} },
  'secondary-flat':     { default:{color:'var(--bt-text-primary-default)'},                                         hover:{bg:'var(--bt-secondary-emphasis)'},                                     focus:{shadow:'0 0 0 3px rgba(212,212,212,.50)'},                                                                            active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-ghost':    { default:{color:'var(--bt-text-primary-default)'},                                         hover:{effect:'text-decoration: underline'},                                   focus:{shadow:'0 0 0 3px rgba(212,212,212,.50)'},                                                                            active:{},                                                                            dis:{color:'var(--bt-text-primary-muted)'} },
  'success-solid':      { default:{bg:'var(--bt-success-default)',color:'var(--bt-text-primary-inverted)'},          hover:{bg:'var(--bt-success-intense)'},                                        focus:{shadow:'0 0 0 3px rgba(68,135,113,.24)'},                                                                             active:{bg:'var(--bt-success-intense)'},                                              dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'success-outline':    { default:{shadow:'inset 0 0 0 1px var(--bt-border-success-default)',color:'var(--bt-text-success-default)'},                                                              focus:{shadow:'inset 0 0 0 1px var(--bt-border-success-default), 0 0 0 3px rgba(68,135,113,.24)'},hover:{bg:'var(--bt-success-subtle)'},  active:{bg:'var(--bt-success-subtle)',shadow:'inset 0 0 0 1px var(--bt-success-default)'},      dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'success-flat':       { default:{color:'var(--bt-text-success-default)'},                                         hover:{bg:'var(--bt-success-subtle)'},                                         focus:{shadow:'0 0 0 3px rgba(68,135,113,.24)'},                                                active:{bg:'var(--bt-success-subtle)',shadow:'inset 0 0 0 1px var(--bt-success-default)'},      dis:{color:'var(--bt-text-primary-muted)'} },
  'success-ghost':      { default:{color:'var(--bt-text-success-default)'},                                         hover:{color:'var(--bt-success-intense)'},                                     focus:{shadow:'0 0 0 3px rgba(68,135,113,.24)'},                                                                             active:{color:'var(--bt-success-default)'},                                           dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-solid':      { default:{bg:'var(--bt-warning-default)',color:'var(--bt-text-primary-inverted)'},          hover:{bg:'var(--bt-warning-intense)'},                                        focus:{shadow:'0 0 0 3px rgba(212,175,44,0.25)'},                                                                             active:{bg:'var(--bt-warning-intense)'},                                              dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'warning-outline':    { default:{shadow:'inset 0 0 0 1px var(--bt-border-warning-default)',color:'var(--bt-text-warning-default)'},                                                              focus:{shadow:'inset 0 0 0 1px var(--bt-border-warning-default), 0 0 0 3px rgba(212,175,44,0.25)'},hover:{bg:'var(--bt-warning-subtle)'},  active:{bg:'var(--bt-warning-subtle)',shadow:'inset 0 0 0 1px var(--bt-warning-default)'},      dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'warning-flat':       { default:{color:'var(--bt-text-warning-default)'},                                         hover:{bg:'var(--bt-warning-subtle)'},                                         focus:{shadow:'0 0 0 3px rgba(212,175,44,0.25)'},                                                active:{bg:'var(--bt-warning-subtle)',shadow:'inset 0 0 0 1px var(--bt-warning-default)'},      dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-ghost':      { default:{color:'var(--bt-text-warning-default)'},                                         hover:{color:'var(--bt-warning-intense)'},                                     focus:{shadow:'0 0 0 3px rgba(212,175,44,0.25)'},                                                                             active:{color:'var(--bt-warning-default)'},                                           dis:{color:'var(--bt-text-primary-muted)'} },
  'error-solid':        { default:{bg:'var(--bt-error-default)',color:'var(--bt-text-primary-inverted)'},            hover:{bg:'var(--bt-error-intense)'},                                          focus:{shadow:'0 0 0 3px rgba(232,75,91,.24)'},                                                                              active:{bg:'var(--bt-error-intense)'},                                                dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'error-outline':      { default:{shadow:'inset 0 0 0 1px var(--bt-border-error-default)',color:'var(--bt-text-error-default)'},                                                                  focus:{shadow:'inset 0 0 0 1px var(--bt-border-error-default), 0 0 0 3px rgba(232,75,91,.24)'},   hover:{bg:'var(--bt-error-subtle)'},     active:{bg:'var(--bt-error-subtle)',shadow:'inset 0 0 0 1px var(--bt-error-default)'},         dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'error-flat':         { default:{color:'var(--bt-text-error-default)'},                                           hover:{bg:'var(--bt-error-subtle)'},                                           focus:{shadow:'0 0 0 3px rgba(232,75,91,.24)'},                                                   active:{bg:'var(--bt-error-subtle)',shadow:'inset 0 0 0 1px var(--bt-error-default)'},         dis:{color:'var(--bt-text-primary-muted)'} },
  'error-ghost':        { default:{color:'var(--bt-text-error-default)'},                                           hover:{color:'var(--bt-error-intense)'},                                       focus:{shadow:'0 0 0 3px rgba(232,75,91,.24)'},                                                                              active:{color:'var(--bt-error-default)'},                                             dis:{color:'var(--bt-text-primary-muted)'} },
  'information-solid':  { default:{bg:'var(--bt-information-default)',color:'var(--bt-text-primary-inverted)'},      hover:{bg:'var(--bt-information-intense)'},                                    focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                                              active:{bg:'var(--bt-information-intense)'},                                          dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'information-outline':{ default:{shadow:'inset 0 0 0 1px var(--bt-border-information-default)',color:'var(--bt-information-default)'},                                                           focus:{shadow:'inset 0 0 0 1px var(--bt-border-information-default), 0 0 0 3px rgba(13,78,151,.50)'},hover:{bg:'var(--bt-information-subtle)'},active:{bg:'var(--bt-information-subtle)',shadow:'inset 0 0 0 1px var(--bt-information-default)'},dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'information-flat':   { default:{color:'var(--bt-information-default)'},                                          hover:{bg:'var(--bt-information-subtle)'},                                     focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                             active:{bg:'var(--bt-information-subtle)',shadow:'inset 0 0 0 1px var(--bt-information-default)'},dis:{color:'var(--bt-text-primary-muted)'} },
  'information-ghost':  { default:{color:'var(--bt-information-default)'},                                          hover:{color:'var(--bt-information-intense)'},                                 focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                                              active:{color:'var(--bt-information-default)'},                                       dis:{color:'var(--bt-text-primary-muted)'} },
};

const _btnSizePyToken = { '2xs':'var(--bt-space-2xs)', 'xs':'var(--bt-space-xs)', 'sm':'var(--bt-space-sm)', 'md':'var(--bt-space-md)', 'lg':'var(--bt-space-lg)', 'xl':'var(--bt-space-xl)', '2xl':'var(--bt-space-2xl)' };
const _btnSizePyVal   = { '2xs':'2px', 'xs':'4px', 'sm':'6px', 'md':'8px', 'lg':'10px', 'xl':'12px', '2xl':'16px' };
const _btnSizePxToken = { '2xs':'var(--bt-space-xs)', 'xs':'var(--bt-space-md)', 'sm':'var(--bt-space-md)', 'md':'var(--bt-space-md)', 'lg':'var(--bt-space-md)', 'xl':'var(--bt-space-xl)', '2xl':'var(--bt-space-xl)' };
const _btnSizePxVal   = { '2xs':'4px', 'xs':'8px', 'sm':'8px', 'md':'8px', 'lg':'8px', 'xl':'12px', '2xl':'12px' };

function btnCss(fill, props) {
  const { theme, size } = props;
  const d = _btnCssProps[`${theme}-${fill}`];
  if (!d) return '';

  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;

  lines.push(`.bt-btn--${size} {`);
  lines.push(p('--btn-py', `${_btnSizePyToken[size]}  /* ${_btnSizePyVal[size]} */`));
  lines.push(p('--btn-px', `${_btnSizePxToken[size]}  /* ${_btnSizePxVal[size]} */`));
  lines.push(p('padding', 'var(--btn-py) var(--btn-px)'));
  lines.push('}');

  lines.push('');
  lines.push(`.bt-btn--${theme}-${fill} {`);
  if (d.default.bg)     lines.push(p('background', d.default.bg));
  if (d.default.shadow) lines.push(p('box-shadow', d.default.shadow));
  lines.push(p('color', d.default.color));
  lines.push('}');

  lines.push('');
  lines.push(`.bt-btn--${theme}-${fill}:hover:not(:disabled) {`);
  if (d.hover.bg)     lines.push(p('background', d.hover.bg));
  if (d.hover.color)  lines.push(p('color', d.hover.color));
  if (d.hover.effect) lines.push(`  ${d.hover.effect};`);
  if (!d.hover.bg && !d.hover.color && !d.hover.effect) lines.push('  /* no change */');
  lines.push('}');

  lines.push('');
  lines.push(`.bt-btn--${theme}-${fill}:focus-visible:not(:disabled) {`);
  if (d.focus.bg)     lines.push(p('background', d.focus.bg));
  if (d.focus.shadow) lines.push(p('box-shadow', d.focus.shadow));
  lines.push('}');

  lines.push('');
  lines.push(`.bt-btn--${theme}-${fill}:active:not(:disabled) {`);
  if (d.active && d.active.bg)     lines.push(p('background', d.active.bg));
  if (d.active && d.active.shadow) lines.push(p('box-shadow', d.active.shadow));
  if (d.active && d.active.color)  lines.push(p('color', d.active.color));
  if (!d.active || (!d.active.bg && !d.active.shadow && !d.active.color)) lines.push('  /* no change */');
  lines.push('}');

  lines.push('');
  lines.push(`.bt-btn--${theme}-${fill}:disabled {`);
  if (d.dis.bg)     lines.push(p('background', d.dis.bg));
  if (d.dis.shadow) lines.push(p('box-shadow', d.dis.shadow));
  lines.push(p('color', d.dis.color));
  lines.push(p('cursor', 'not-allowed'));
  lines.push('}');

  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

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
  const icon = content !== 'text' ? _btnIcon : '';
  const text = content !== 'icon' ? '<span>Button</span>' : '';
  const inner = icon + text;
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:16px;">
      <button class="${cls}"${disabled ? ' disabled' : ''}>${inner}</button>
    </div>`;
}

function btnCode(fill, size, content, state, theme = 'primary') {
  const disabled = state === 'disabled';
  const cls = _btnCls(fill, size, content, disabled ? 'default' : state, theme);
  const icon = content !== 'text' ? '<!-- icon 16x16 -->' : '';
  const text = content !== 'icon' ? 'Button' : '';
  const inner = [icon, text].filter(Boolean).join('\n  ');
  return `<button class="${cls}"${disabled ? ' disabled' : ''}>\n  ${inner}\n</button>`;
}

function _btnStateTable(theme) {
  return `
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>State</th>${BTN_FILL_VARIANTS.map(f => `<th>${f.label}</th>`).join('')}</tr></thead>
        <tbody>
          ${BTN_STATE_OPTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            ${BTN_FILL_VARIANTS.map(f => `<td>${btnPreview(f.key, 'sm', 'icon-text', s.key, theme)}</td>`).join('')}
          </tr>`).join('')}
        </tbody>
      </table>`;
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
        css:     (fill, p) => btnCss(fill, p),
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
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${BTN_SIZE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td>${btnPreview('solid', s.key, 'icon-text', 'default', 'primary')}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="States">States</h2>
      ${BTN_THEME_OPTS.map(theme => `
      <h3 style="font:var(--bt-text-xs-semibold, 600 12px/16px var(--font));color:var(--bt-text-primary-muted, #a3a3a3);margin:var(--bt-space-3xl, 20px) 0 var(--bt-space-xl, 12px);text-transform:capitalize;">${theme.label}</h3>
      ${_btnStateTable(theme.key)}`).join('')}
    `};
  }
};

// ── TextBox ─────────────────────────────────────────────────────
const _tbxIconValidation = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
const _tbxIconClear      = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="1.5" y1="1.5" x2="8.5" y2="8.5"/><line x1="8.5" y1="1.5" x2="1.5" y2="8.5"/></svg>`;

const TBX_STATE_VARIANTS = [
  { key: 'default',       label: 'Default' },
  { key: 'hover',         label: 'Hover' },
  { key: 'focused',       label: 'Focused' },
  { key: 'active',        label: 'Active' },
  { key: 'filled',        label: 'Filled' },
  { key: 'disabled',      label: 'Disabled' },
  { key: 'readonly',      label: 'Read Only' },
  { key: 'error',         label: 'Error' },
  { key: 'error-focused', label: 'Error Focused' },
];
const TBX_SIZE_OPTS  = [{ key: 'sm', label: 'Sm' }, { key: 'md', label: 'Md (Default)' }, { key: 'lg', label: 'Lg' }];

function _tbxCls(state, size) {
  const parts = ['bt-tbx', `bt-tbx--${size}`];
  if (state === 'error-focused') {
    parts.push('bt-tbx--error', 'bt-tbx--error-focused');
  } else if (state !== 'default' && state !== 'filled') {
    parts.push(`bt-tbx--${state}`);
  }
  return parts.join(' ');
}

function _tbxInputInner(state) {
  const isError  = state === 'error' || state === 'error-focused';
  const isFilled = state === 'filled';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';
  const validationHtml = isError  ? `<div class="bt-tbx__control"><span class="bt-tbx__icon">${_tbxIconValidation}</span></div>` : '';
  const clearHtml      = isFilled ? `<div class="bt-tbx__control"><button type="button" class="bt-tbx__clear">${_tbxIconClear}</button></div>` : '';
  const inputAttrs     = ((isFilled || isReadOnly) ? ' value="Placeholder Text"' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  return `<div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} /></div>${validationHtml}${clearHtml}`;
}

function tbxPreview(state, props = {}) {
  const { size = 'sm', label = 'on', required = 'on', helper = 'on' } = props;
  const labelHtml    = label    === 'on' ? `<span class="bt-tbx__label">Label Text</span>` : '';
  const requiredHtml = required === 'on' ? `<span class="bt-tbx__required">Required Field</span>` : '';
  const metaHtml  = (label === 'on' || required === 'on') ? `<div class="bt-tbx__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'on' ? `<span class="bt-tbx__helper">Helper Text</span>` : '';
  return `
    <div style="padding:24px;width:100%;max-width:420px;margin:0 auto;box-sizing:border-box;">
      <div class="${_tbxCls(state, size)}">
        ${metaHtml}
        <div class="bt-tbx__input">${_tbxInputInner(state)}</div>
        ${helperHtml}
      </div>
    </div>`;
}

function tbxCode(state, props = {}) {
  const { size = 'sm', label = 'on', required = 'on', helper = 'on' } = props;
  const cls = _tbxCls(state, size);
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';

  const metaParts = [];
  if (label    === 'on') metaParts.push('  <span class="bt-tbx__label">Label Text</span>');
  if (required === 'on') metaParts.push('  <span class="bt-tbx__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-tbx__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const valBlock    = isError  ? `\n  <div class="bt-tbx__control">\n    <!-- circle-info icon 15×15 -->\n  </div>` : '';
  const clearBlock  = isFilled ? `\n  <div class="bt-tbx__control">\n    <!-- clear (×) icon 10×10 -->\n  </div>` : '';
  const helperBlock = helper === 'on' ? `\n<span class="bt-tbx__helper">Helper Text</span>` : '';
  const inputAttrs  = ((isFilled || isReadOnly) ? ' value="..."' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');

  const code = `${metaBlock}<div class="bt-tbx__input">
  <div class="bt-tbx__field">
    <input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} />
  </div>${valBlock}${clearBlock}
</div>${helperBlock}`;

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block">&lt;div class="${esc(cls)}"&gt;\n${esc(code)}\n&lt;/div&gt;</pre>`;
}

function tbxCss(state, props = {}) {
  const { size = 'sm' } = props;
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;
  const isError   = state === 'error' || state === 'error-focused';
  const isFocused = state === 'focused' || state === 'active' || state === 'error-focused';
  const label = state.charAt(0).toUpperCase() + state.slice(1).replace('-', ' ');

  lines.push(`/* TextBox · ${label}${size !== 'sm' ? ' · ' + size.toUpperCase() : ''} */`);
  lines.push('');
  lines.push('.bt-tbx__input {');
  lines.push(p('height', size === 'lg' ? '36px' : size === 'md' ? '32px' : '28px'));
  lines.push(p('border-radius', 'var(--bt-radius-sm)  /* 4px */'));
  lines.push(p('background',
    (state === 'disabled' || state === 'readonly')
      ? 'var(--bt-surface-primary-subtle)  /* #f5f5f5 */'
      : 'var(--bt-surface-primary-default)  /* #ffffff */'));
  lines.push(p('border', `1px solid ${
    isError
      ? 'var(--bt-border-error-default)  /* #b31d38 */'
      : (state === 'hover' || state === 'focused' || state === 'active')
        ? 'var(--bt-border-brand-default)  /* #0d4e97 */'
        : 'var(--bt-border-primary-default)  /* #d4d4d4 */'
  }`));
  if (isFocused) lines.push(p('box-shadow',
    isError ? '0 0 0 3px rgba(232,75,91,0.25)' : '0 0 0 3px rgba(13,78,151,0.25)'));
  lines.push('}');

  lines.push('');
  lines.push('.bt-tbx__field {');
  lines.push(p('padding', size === 'lg'
    ? 'var(--bt-space-md) var(--bt-space-xs) var(--bt-space-md) var(--bt-space-xl)  /* 8px 4px 8px 12px */'
    : size === 'md'
      ? 'var(--bt-space-sm) var(--bt-space-xs) var(--bt-space-sm) var(--bt-space-xl)  /* 6px 4px 6px 12px */'
      : 'var(--bt-space-xs) var(--bt-space-xs) var(--bt-space-xs) var(--bt-space-xl)  /* 4px 4px 4px 12px */'));
  lines.push('}');

  if (isError) {
    lines.push('');
    lines.push('.bt-tbx__label,');
    lines.push('.bt-tbx__required {');
    lines.push(p('color', 'var(--bt-text-error-default)  /* #b31d38 */'));
    lines.push('}');
  }

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/textbox'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'States', 'Sizes'],
  render(tab) {
    const title = 'TextBox';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    const sharedProps = [
      { key: 'size',     label: 'Size',     options: TBX_SIZE_OPTS, default: 'md'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'on' },
    ];

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Tüm state'ler interaktif playground üzerinde — boyutu ve label görünürlüğünü değiştirin.</p>
      ${registerPlayground({
        id: 'pgd-tbx-ex',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => tbxPreview(state, p),
        code:    (state, p) => tbxCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">TextBox için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Height</th><th>Control padding</th><th>Field padding</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Sm</span></td><td>28px</td><td>${tk('--bt-space-2xs')} (2px)</td><td>${tk('--bt-space-xs')} top/bot · ${tk('--bt-space-xl')} left · ${tk('--bt-space-xs')} right</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${tk('--bt-space-xs')} (4px)</td><td>${tk('--bt-space-sm')} top/bot · ${tk('--bt-space-xl')} left · ${tk('--bt-space-xs')} right</td></tr>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${tk('--bt-space-sm')} (6px)</td><td>${tk('--bt-space-md')} top/bot · ${tk('--bt-space-xl')} left · ${tk('--bt-space-xs')} right</td></tr>
        </tbody>
      </table>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Focused / Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Read Only</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td rowspan="2">Error Focused</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>
      <h2>Shared Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>border-radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>background (Default/Hover/Focused/Error)</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>Placeholder rengi</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Değer metin rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Label rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Required field rengi</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Helper text rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>Control kutusu</td><td>—</td><td>24 × 24px (validation ikon 15×15, clear ikon 10×10)</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-tbx')}</td><td>Wrapper</td><td>flex-col, gap 4px — state modifier'ları buraya eklenir</td></tr>
          <tr><td>${tk('.bt-tbx--sm/md/lg')}</td><td>Wrapper</td><td>Input yüksekliği ve iç padding'i belirler</td></tr>
          <tr><td>${tk('.bt-tbx__meta')}</td><td>Label satırı</td><td>flex row, gap 4px</td></tr>
          <tr><td>${tk('.bt-tbx__label')}</td><td>Label metni</td><td>color: --bt-text-primary-default (error: --bt-text-error-default)</td></tr>
          <tr><td>${tk('.bt-tbx__required')}</td><td>Zorunluk işareti</td><td>color: --bt-text-primary-emphasis (error: --bt-text-error-default)</td></tr>
          <tr><td>${tk('.bt-tbx__input')}</td><td>Input kutusu</td><td>border, radius, bg — tüm state border/shadow değişimleri burada</td></tr>
          <tr><td>${tk('.bt-tbx__field')}</td><td>Metin bölgesi</td><td>flex:1, sol padding 12px (--bt-space-xl)</td></tr>
          <tr><td>${tk('.bt-tbx__text')}</td><td>&lt;input&gt;</td><td>Gerçek HTML input elemanı</td></tr>
          <tr><td>${tk('.bt-tbx__control')}</td><td>İkon sarmalayıcı</td><td>Validation veya clear ikon için</td></tr>
          <tr><td>${tk('.bt-tbx__icon')}</td><td>24×24 ikon alanı</td><td>color: muted (error: --bt-text-error-default)</td></tr>
          <tr><td>${tk('.bt-tbx__clear')}</td><td>Temizle butonu</td><td>Filled state'te gösterilir; × ikonu, hover'da koyu</td></tr>
          <tr><td>${tk('.bt-tbx__helper')}</td><td>Yardım metni</td><td>color: --bt-text-primary-default</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">TextBox kullanım kuralları.</p>
      <h2>When to use</h2>
      <ul>
        <li>Kullanıcının serbest metin gireceği tek satırlık form alanlarında</li>
        <li>Arama, filtreleme veya veri girişi gerektiren formlarda</li>
        <li>Label + Helper text ile birlikte kullanıcıya bağlam sağlamak istediğinde</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Her zaman anlamlı bir <code style="font-family:var(--mono)">placeholder</code> metni ekle</li>
        <li>Zorunlu alanları <code style="font-family:var(--mono)">.bt-tbx__required</code> ile işaretle</li>
        <li>Hata mesajını helper text olarak göster, error state ile birlikte kullan</li>
        <li>Düzenleme yoksa Disabled yerine Read Only kullan — okuma hakkı varsa</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Label'sız TextBox bırakma — erişilebilirlik için label zorunlu</li>
        <li>Çok satırlı metin için TextBox kullanma — bunun yerine Textarea kullan</li>
        <li>Error state'te yalnızca border'ı kırmızı yapma — label ve required field da dönmeli</li>
      </ul>
    `};

    // ── Overview ─────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-tbx-overview',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => tbxPreview(state, p),
        code:    (state, p) => tbxCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}

      <p class="page-desc">Tek satırlık metin giriş bileşeni. Label, Required Field ve Helper Text ile birleşik yapı; 3 boyut (Sm/Md/Lg) ve 9 state sunar.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Element</th><th>Property</th><th>Figma token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">Input kutusu</td><td>Border (Default)</td><td>${tk('Border/Primary/--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Border (Hover/Focused)</td><td>${tk('Border/Brand/--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Border radius</td><td>${tk('Radius/radius-sm')}</td><td>4px</td></tr>
          <tr><td>Sm</td><td>Height</td><td>—</td><td>28px</td></tr>
          <tr><td>Md</td><td>Height</td><td>—</td><td>32px</td></tr>
          <tr><td>Lg</td><td>Height</td><td>—</td><td>36px</td></tr>
          <tr><td rowspan="2">Label</td><td>Font / size</td><td>${tk('Font/Family/Label · Font/Size/text-xs')}</td><td>Geist 12px</td></tr>
          <tr><td>Color</td><td>${tk('Text/Primary/--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Required field</td><td>Color</td><td>${tk('Text/Primary/--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Placeholder</td><td>Color</td><td>${tk('Text/Primary/--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Focus ring</td><td>box-shadow</td><td>${tk('Focus Ring/primary')}</td><td>0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td>Error focus ring</td><td>box-shadow</td><td>—</td><td>0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>

      <h2 id="States">States</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>State</th><th>Preview (Sm)</th></tr></thead>
        <tbody>
          ${TBX_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:6px 0;">
              <div style="max-width:280px;">
                <div class="${_tbxCls(s.key, 'sm')}">
                  <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span><span class="bt-tbx__required">Required Field</span></div>
                  <div class="bt-tbx__input">
                    <div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${(s.key === 'filled' || s.key === 'readonly') ? ' value="Placeholder Text"' : ''}${s.key === 'disabled' ? ' disabled' : ''}${s.key === 'readonly' ? ' readonly' : ''} /></div>
                    ${(s.key === 'error' || s.key === 'error-focused') ? `<div class="bt-tbx__control"><span class="bt-tbx__icon">${_tbxIconValidation}</span></div>` : ''}
                    ${s.key === 'filled' ? `<div class="bt-tbx__control"><button class="bt-tbx__clear">${_tbxIconClear}</button></div>` : ''}
                  </div>
                  <span class="bt-tbx__helper">Helper Text</span>
                </div>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${TBX_SIZE_OPTS.map(sz => `
          <tr>
            <td><span class="token-name">${sz.label}</span></td>
            <td style="padding:6px 0;">
              <div style="max-width:280px;">
                <div class="bt-tbx bt-tbx--${sz.key}">
                  <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span></div>
                  <div class="bt-tbx__input">
                    <div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text" /></div>
                  </div>
                  <span class="bt-tbx__helper">Helper Text</span>
                </div>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};
  },
};

// ── Select LookUp ───────────────────────────────────────────────
// Reuses bt-tbx CSS entirely — adds a left control (search/select icon).
const _slkIconPlus = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

function _slkInputInner(state) {
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled' || state === 'readonly';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';
  const validationHtml = isError  ? `<div class="bt-tbx__control"><span class="bt-tbx__icon">${_tbxIconValidation}</span></div>` : '';
  const clearHtml      = state === 'filled' ? `<div class="bt-tbx__control"><button type="button" class="bt-tbx__clear">${_tbxIconClear}</button></div>` : '';
  const inputAttrs     = (isFilled ? ' value="Placeholder Text"' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  return `
        <div class="bt-tbx__control bt-tbx__control--left">
          <span class="bt-tbx__icon">${_slkIconPlus}</span>
        </div>
        <div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} /></div>${validationHtml}${clearHtml}`;
}

function slkPreview(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const labelHtml    = label    === 'on' ? `<span class="bt-tbx__label">Label Text</span>` : '';
  const requiredHtml = required === 'on' ? `<span class="bt-tbx__required">Required Field</span>` : '';
  const metaHtml     = (label === 'on' || required === 'on') ? `<div class="bt-tbx__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'on' ? `<span class="bt-tbx__helper">Helper Text</span>` : '';
  return `
    <div style="padding:24px;width:100%;max-width:420px;margin:0 auto;box-sizing:border-box;">
      <div class="${_tbxCls(state, size)}">
        ${metaHtml}
        <div class="bt-tbx__input">${_slkInputInner(state)}</div>
        ${helperHtml}
      </div>
    </div>`;
}

function slkCode(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const cls        = _tbxCls(state, size);
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled' || state === 'readonly';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';

  const metaParts = [];
  if (label    === 'on') metaParts.push('  <span class="bt-tbx__label">Label Text</span>');
  if (required === 'on') metaParts.push('  <span class="bt-tbx__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-tbx__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const valBlock    = isError        ? `\n  <div class="bt-tbx__control">\n    <!-- validation icon 15×15 -->\n  </div>` : '';
  const clearBlock  = state === 'filled' ? `\n  <div class="bt-tbx__control">\n    <!-- clear (×) icon 10×10 -->\n  </div>` : '';
  const helperBlock = helper === 'on' ? `\n<span class="bt-tbx__helper">Helper Text</span>` : '';
  const inputAttrs  = (isFilled ? ' value="..."' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');

  const code = `${metaBlock}<div class="bt-tbx__input">
  <div class="bt-tbx__control bt-tbx__control--left">
    <!-- plus icon 16×16 -->
  </div>
  <div class="bt-tbx__field">
    <input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} />
  </div>${valBlock}${clearBlock}
</div>${helperBlock}`;

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block">&lt;div class="${esc(cls)}"&gt;\n${esc(code)}\n&lt;/div&gt;</pre>`;
}

PAGES_WEB['components/select-lookup'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'States', 'Sizes'],
  render(tab) {
    const title = 'Select LookUp';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    const sharedProps = [
      { key: 'size',     label: 'Size',     options: TBX_SIZE_OPTS, default: 'md'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'on' },
    ];

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Tüm state'ler interaktif playground üzerinde — boyutu ve label görünürlüğünü değiştirin.</p>
      ${registerPlayground({
        id: 'pgd-slk-ex',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => slkPreview(state, p),
        code:    (state, p) => slkCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Select LookUp, <code style="font-family:var(--mono)">bt-tbx</code> CSS sınıflarını tamamen miras alır — ek token yoktur.</p>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Focused / Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>text</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td rowspan="2">Error Focused</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-tbx')}</td><td>Wrapper</td><td>TextBox ile aynı CSS — state modifier'ları buraya</td></tr>
          <tr><td>${tk('.bt-tbx--sm/md/lg')}</td><td>Wrapper</td><td>Yükseklik ve iç padding</td></tr>
          <tr><td>${tk('.bt-tbx__control')}</td><td>Sol ikon sarmalayıcı</td><td>Field'dan önce konumlanır — search/select ikonu</td></tr>
          <tr><td>${tk('.bt-tbx__icon')}</td><td>24×24 ikon alanı</td><td>Sol ikon ve sağ validation ikonu için ortak</td></tr>
          <tr><td>${tk('.bt-tbx__field')}</td><td>Metin bölgesi</td><td>Sol ikon solda olduğu için sol padding azalabilir</td></tr>
          <tr><td>${tk('.bt-tbx__clear')}</td><td>Temizle butonu</td><td>Filled state'te sağda gösterilir</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Select LookUp kullanım kuralları.</p>
      <h2>When to use</h2>
      <ul>
        <li>Yazarak arama yapılabilen seçim alanlarında (autocomplete / combo box)</li>
        <li>Listeden tek seçim yapılacak ancak sonuçların filtrelenmesi gerektiğinde</li>
        <li>Seçili değerin görünür kalıp temizlenebilmesi gerektiğinde (Filled + × butonu)</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Sol ikonla arama ya da seçim davranışını göster</li>
        <li>Filled state'te her zaman clear (×) butonunu sun</li>
        <li>Error state'te hem border hem label/required kırmızıya dönsün</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Seçim sonrası left icon'u kaldırma — her zaman görünür kalmalı</li>
        <li>TextBox ile karıştırma — Select LookUp yalnızca listeden seçim içindir</li>
      </ul>
    `};

    // ── Overview ─────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-slk-overview',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => slkPreview(state, p),
        code:    (state, p) => slkCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}

      <p class="page-desc">Sol arama ikonu ve seçim alanından oluşan lookup bileşeni. <code style="font-family:var(--mono)">bt-tbx</code> CSS'ini miras alır; 3 boyut (Sm/Md/Lg) ve 9 state sunar.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Input kutusu</td><td>Border (Default)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Border radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td rowspan="3">Sol ikon (Left Control)</td><td>Kutu boyutu</td><td>—</td><td>24 × 24px</td></tr>
          <tr><td>Sm padding</td><td>${tk('--bt-space-2xs')}</td><td>2px</td></tr>
          <tr><td>Md padding</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
          <tr><td>Lg padding</td><td>${tk('--bt-space-sm')}</td><td>6px</td></tr>
          <tr><td>Sol ikon rengi</td><td>color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Placeholder</td><td>color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Seçili değer</td><td>color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
        </tbody>
      </table>

      <h2 id="States">States</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>State</th><th>Preview (Md)</th></tr></thead>
        <tbody>
          ${TBX_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:6px 0;">
              <div class="${_tbxCls(s.key, 'md')}">
                <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span><span class="bt-tbx__required">Required Field</span></div>
                <div class="bt-tbx__input">${_slkInputInner(s.key)}</div>
                <span class="bt-tbx__helper">Helper Text</span>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${TBX_SIZE_OPTS.map(sz => `
          <tr>
            <td><span class="token-name">${sz.label}</span></td>
            <td style="padding:6px 0;">
              <div class="bt-tbx bt-tbx--${sz.key}">
                <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span></div>
                <div class="bt-tbx__input">
                  <div class="bt-tbx__control bt-tbx__control--left"><span class="bt-tbx__icon">${_slkIconPlus}</span></div>
                  <div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text" /></div>
                </div>
                <span class="bt-tbx__helper">Helper Text</span>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};
  },
};

// ── Dropdown ────────────────────────────────────────────────────
const _ddIconChevron   = `<svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l5 5 5-5"/></svg>`;
const _ddIconChevronUp = `<svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l5-5 5 5"/></svg>`;

function _ddInputInner(state) {
  const isError    = state === 'error' || state === 'error-focused';
  const isActive   = state === 'active';
  const showValue  = state === 'filled' || state === 'readonly' || isActive || isError;
  const textColor  = showValue
    ? 'var(--bt-text-primary-default,#1a1a1a)'
    : 'var(--bt-text-primary-muted,#a3a3a3)';
  const validationHtml = isError ? `<div class="bt-tbx__control"><span class="bt-tbx__icon">${_tbxIconValidation}</span></div>` : '';
  const clearHtml      = state === 'filled' ? `<div class="bt-tbx__control"><button type="button" class="bt-tbx__clear">${_tbxIconClear}</button></div>` : '';
  const chevronIcon    = isActive ? _ddIconChevronUp : _ddIconChevron;
  return `
        <div class="bt-tbx__field"><span class="bt-tbx__text" style="color:${textColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Placeholder Text</span></div>${validationHtml}${clearHtml}
        <div class="bt-tbx__control bt-tbx__control--right">
          <span class="bt-tbx__icon">${chevronIcon}</span>
        </div>`;
}

const _ddIconLoader = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`;

const _ddOptionsHtml = `
  <div class="bt-dd-option bt-dd-option--selected">
    <span class="bt-dd-option__icon">${_ddIconLoader}</span>
    <span class="bt-dd-option__text">Option 1</span>
  </div>
  <div class="bt-dd-option">
    <span class="bt-dd-option__icon">${_ddIconLoader}</span>
    <span class="bt-dd-option__text">Option 2</span>
  </div>
  <div class="bt-dd-option">
    <span class="bt-dd-option__icon">${_ddIconLoader}</span>
    <span class="bt-dd-option__text">Option 3</span>
  </div>
  <div class="bt-dd-option">
    <span class="bt-dd-option__icon">${_ddIconLoader}</span>
    <span class="bt-dd-option__text">Option 4</span>
  </div>`;

// Global toggle for interactive default-state dropdown in playground
window.btDdToggle = function(inputEl) {
  const root   = inputEl.closest('.bt-tbx');
  const isOpen = root.classList.toggle('bt-tbx--active');
  const opts   = root.querySelector('.bt-dd-options');
  if (opts) opts.style.display = isOpen ? '' : 'none';
  const icon = inputEl.querySelector('.bt-tbx__control--right .bt-tbx__icon');
  if (icon) {
    icon.innerHTML = isOpen
      ? '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l5-5 5 5"/></svg>'
      : '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l5 5 5-5"/></svg>';
  }
};

function ddPreview(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const isActive  = state === 'active';
  const isDefault = state === 'default';
  const labelHtml    = label    === 'on' ? `<span class="bt-tbx__label">Label Text</span>` : '';
  const requiredHtml = required === 'on' ? `<span class="bt-tbx__required">Required Field</span>` : '';
  const metaHtml     = (label === 'on' || required === 'on') ? `<div class="bt-tbx__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'on' ? `<span class="bt-tbx__helper">Helper Text</span>` : '';
  // Options panel: always inside bt-tbx__anchor (positioned absolute below input). Hidden initially for default (interactive), visible for active.
  const optionsHtml = (isActive || isDefault) ? `<div class="bt-dd-options"${isDefault ? ' style="display:none;"' : ''}>${_ddOptionsHtml}</div>` : '';
  // Interactive click only for default state
  const inputAttrs  = isDefault ? ` onclick="btDdToggle(this)" style="cursor:pointer;"` : '';
  return `
    <div style="padding:24px;width:100%;max-width:420px;margin:0 auto;box-sizing:border-box;">
      <div class="${_tbxCls(state, size)}">
        ${metaHtml}
        <div class="bt-tbx__anchor">
          <div class="bt-tbx__input"${inputAttrs}>${_ddInputInner(state)}</div>
          ${optionsHtml}
        </div>
        ${helperHtml}
      </div>
    </div>`;
}

function ddCode(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const cls      = _tbxCls(state, size);
  const isError  = state === 'error' || state === 'error-focused';
  const isFilled = state === 'filled';
  const isActive = state === 'active';
  const metaParts = [];
  if (label    === 'on') metaParts.push('  <span class="bt-tbx__label">Label Text</span>');
  if (required === 'on') metaParts.push('  <span class="bt-tbx__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-tbx__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const helperBlock = helper === 'on' ? `\n<span class="bt-tbx__helper">Helper Text</span>` : '';
  const valBlock    = isError  ? `\n  <div class="bt-tbx__control">\n    <!-- circle-alert icon 15×15 -->\n  </div>` : '';
  const clearBlock  = isFilled ? `\n  <div class="bt-tbx__control">\n    <!-- clear (×) icon 10×10 -->\n  </div>` : '';
  const optionsBlock = isActive ? `\n<div class="bt-dd-options">\n  <div class="bt-dd-option bt-dd-option--selected">\n    <span class="bt-dd-option__text">Option 1</span>\n  </div>\n  <div class="bt-dd-option">\n    <span class="bt-dd-option__text">Option 2</span>\n  </div>\n  <div class="bt-dd-option">\n    <span class="bt-dd-option__text">Option 3</span>\n  </div>\n</div>` : '';
  const code = `${metaBlock}<div class="bt-tbx__input">
  <div class="bt-tbx__field">
    <span class="bt-tbx__text">Placeholder Text</span>
  </div>${valBlock}${clearBlock}
  <div class="bt-tbx__control bt-tbx__control--right">
    <!-- ${isActive ? 'chevron-up' : 'chevron-down'} icon -->
  </div>
</div>${optionsBlock}${helperBlock}`;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block">&lt;div class="${esc(cls)}"&gt;\n${esc(code)}\n&lt;/div&gt;</pre>`;
}

PAGES_WEB['components/dropdown'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'States', 'Sizes'],
  render(tab) {
    const title = 'Dropdown';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    const sharedProps = [
      { key: 'size',     label: 'Size',     options: TBX_SIZE_OPTS, default: 'md'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'on' },
    ];

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Tüm state'ler interaktif playground üzerinde — boyutu ve label görünürlüğünü değiştirin.</p>
      ${registerPlayground({
        id: 'pgd-dd-ex',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => ddPreview(state, p),
        code:    (state, p) => ddCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Dropdown için kullanılan design token–CSS değişken eşleşmeleri. ${tk('bt-tbx')} CSS'ini miras alır.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Height</th><th>Field padding</th><th>Control padding</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Sm</span></td><td>28px</td><td>${tk('--bt-space-xs')} top/bot · ${tk('--bt-space-xl')} left · ${tk('--bt-space-xs')} right</td><td>${tk('--bt-space-2xs')} (2px)</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${tk('--bt-space-sm')} top/bot · ${tk('--bt-space-xl')} left · ${tk('--bt-space-xs')} right</td><td>${tk('--bt-space-xs')} (4px)</td></tr>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${tk('--bt-space-md')} top/bot · ${tk('--bt-space-xl')} left · ${tk('--bt-space-xs')} right</td><td>${tk('--bt-space-sm')} (6px)</td></tr>
        </tbody>
      </table>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Hover / Focused</td><td>right control bg</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td rowspan="2">Focused / Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Read Only</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td rowspan="2">Error Focused</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-tbx')}</td><td>Wrapper</td><td>TextBox CSS miras alır — state modifier'ları buraya eklenir</td></tr>
          <tr><td>${tk('.bt-tbx--sm/md/lg')}</td><td>Wrapper</td><td>Input yüksekliği ve padding belirler</td></tr>
          <tr><td>${tk('.bt-tbx__meta')}</td><td>Label satırı</td><td>Label ve Required Field sarmalayıcısı</td></tr>
          <tr><td>${tk('.bt-tbx__input')}</td><td>Input kutusu</td><td>Border, radius, bg — tüm state değişimleri burada</td></tr>
          <tr><td>${tk('.bt-tbx__field')}</td><td>Metin bölgesi</td><td>Seçili değer veya placeholder span'ını içerir</td></tr>
          <tr><td>${tk('.bt-tbx__control')}</td><td>Ikon sarmalayıcı</td><td>Validation veya clear ikon için</td></tr>
          <tr><td>${tk('.bt-tbx__control--right')}</td><td>Chevron sarmalayıcı</td><td>Her state'te sağda; hover/focused'da subtle bg alır</td></tr>
          <tr><td>${tk('.bt-tbx__clear')}</td><td>Temizle butonu</td><td>Filled state'te gösterilir — seçimi sıfırlar</td></tr>
          <tr><td>${tk('.bt-tbx__helper')}</td><td>Yardım metni</td><td>color: --bt-text-primary-default</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Dropdown kullanım kuralları.</p>
      <h2>When to use</h2>
      <ul>
        <li>Önceden tanımlanmış seçenekler arasından tek seçim yapıldığında</li>
        <li>5 veya daha fazla seçenek olduğunda (az seçenek için Radio Button tercih et)</li>
        <li>Form alanlarında kompakt seçim ihtiyacı olduğunda</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Anlamlı bir placeholder metni ekle (örn. "Seçin...")</li>
        <li>Zorunlu alanları <code style="font-family:var(--mono)">.bt-tbx__required</code> ile işaretle</li>
        <li>Filled state'te clear butonu ile seçimi sıfırlama imkânı sun</li>
        <li>Hata mesajını helper text ile birlikte göster</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>2-3 seçenek için Dropdown kullanma — Radio Button daha iyi UX sağlar</li>
        <li>Label'sız Dropdown bırakma</li>
        <li>Uzun arama gerektiren listelerde — Select LookUp kullan</li>
      </ul>
    `};

    // ── Overview ─────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-dd-overview',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => ddPreview(state, p),
        code:    (state, p) => ddCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}

      <p class="page-desc">Listeden tek seçim yapılan dropdown bileşeni. <code style="font-family:var(--mono)">bt-tbx</code> CSS'ini miras alır; 3 boyut (Sm/Md/Lg) ve 9 state sunar.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">Input kutusu</td><td>Border (Default)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Border (Hover/Focused)</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Border radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>Sm</td><td>Height</td><td>—</td><td>28px</td></tr>
          <tr><td>Md</td><td>Height</td><td>—</td><td>32px</td></tr>
          <tr><td>Lg</td><td>Height</td><td>—</td><td>36px</td></tr>
          <tr><td>Chevron kontrol</td><td>bg (hover/focused)</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Placeholder</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Seçili değer</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Focus ring</td><td>box-shadow</td><td>—</td><td>0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td>Error focus ring</td><td>box-shadow</td><td>—</td><td>0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>

      <h2 id="States">States</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>State</th><th>Preview (Md)</th></tr></thead>
        <tbody>
          ${TBX_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:6px 0;">
              <div style="max-width:280px;">
                <div class="${_tbxCls(s.key, 'md')}">
                  <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span><span class="bt-tbx__required">Required Field</span></div>
                  <div class="bt-tbx__input">${_ddInputInner(s.key)}</div>
                  <span class="bt-tbx__helper">Helper Text</span>
                </div>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${TBX_SIZE_OPTS.map(sz => `
          <tr>
            <td><span class="token-name">${sz.label}</span></td>
            <td style="padding:6px 0;">
              <div style="max-width:280px;">
                <div class="bt-tbx bt-tbx--${sz.key}">
                  <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span></div>
                  <div class="bt-tbx__input">
                    <div class="bt-tbx__field"><span class="bt-tbx__text" style="color:var(--bt-text-primary-muted,#a3a3a3);white-space:nowrap;">Placeholder Text</span></div>
                    <div class="bt-tbx__control bt-tbx__control--right"><span class="bt-tbx__icon">${_ddIconChevron}</span></div>
                  </div>
                  <span class="bt-tbx__helper">Helper Text</span>
                </div>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};
  },
};

// ── Textarea ─────────────────────────────────────────────────────
const TXA_STATE_VARIANTS = [
  { key: 'default',       label: 'Default'       },
  { key: 'hover',         label: 'Hover'         },
  { key: 'focused',       label: 'Focused'       },
  { key: 'active',        label: 'Active'        },
  { key: 'filled',        label: 'Filled'        },
  { key: 'disabled',      label: 'Disabled'      },
  { key: 'readonly',      label: 'Read Only'     },
  { key: 'error',         label: 'Error'         },
  { key: 'error-focused', label: 'Error Focused' },
];

const TXA_SIZE_OPTS = [
  { key: 'lg', label: 'Lg' },
  { key: 'md', label: 'Md (Default)' },
  { key: 'sm', label: 'Sm' },
];

function _txaCls(state, size) {
  const parts = ['bt-txa', `bt-txa--${size}`];
  if (state === 'error-focused') {
    parts.push('bt-txa--error', 'bt-txa--error-focused');
  } else if (state !== 'default' && state !== 'filled') {
    parts.push(`bt-txa--${state}`);
  }
  return parts.join(' ');
}

function txaPreview(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const isFilled   = state === 'filled' || state === 'readonly';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';
  const textAttrs  = (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  const content    = isFilled ? 'Placeholder Text' : '';
  const labelHtml    = label    === 'on' ? `<span class="bt-txa__label">Label Text</span>` : '';
  const requiredHtml = required === 'on' ? `<span class="bt-txa__required">Required Field</span>` : '';
  const metaHtml     = (label === 'on' || required === 'on') ? `<div class="bt-txa__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'on' ? `<span class="bt-txa__helper">Helper Text</span>` : '';
  const clearHtml    = state === 'filled' ? `<button type="button" class="bt-tbx__clear bt-txa__clear">${_tbxIconClear}</button>` : '';
  return `
    <div style="padding:24px;width:100%;max-width:420px;margin:0 auto;box-sizing:border-box;">
      <div class="${_txaCls(state, size)}">
        ${metaHtml}
        <div class="bt-txa__input">
          <textarea class="bt-txa__text" placeholder="Placeholder Text"${textAttrs}>${content}</textarea>
          ${clearHtml}
        </div>
        ${helperHtml}
      </div>
    </div>`;
}

function txaCode(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const cls        = _txaCls(state, size);
  const isFilled   = state === 'filled' || state === 'readonly';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';
  const metaParts  = [];
  if (label    === 'on') metaParts.push('  <span class="bt-txa__label">Label Text</span>');
  if (required === 'on') metaParts.push('  <span class="bt-txa__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-txa__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const helperBlock = helper === 'on' ? `\n<span class="bt-txa__helper">Helper Text</span>` : '';
  const textAttrs   = (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  const content     = isFilled ? '...' : '';
  const clearLine   = state === 'filled' ? `\n  <button type="button" class="bt-tbx__clear bt-txa__clear">...</button>` : '';
  const code = `${metaBlock}<div class="bt-txa__input">
  <textarea class="bt-txa__text" placeholder="Placeholder Text"${textAttrs}>${content}</textarea>${clearLine}
</div>${helperBlock}`;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block">&lt;div class="${esc(cls)}"&gt;\n${esc(code)}\n&lt;/div&gt;</pre>`;
}

function txaCss(state, props = {}) {
  const { size = 'md' } = props;
  const lines = [];
  const p = (k, v) => `  ${k}: ${v};`;
  const isError   = state === 'error' || state === 'error-focused';
  const isFocused = state === 'focused' || state === 'active' || state === 'error-focused';
  const label = state.charAt(0).toUpperCase() + state.slice(1).replace('-', ' ');
  const minH  = size === 'lg' ? '96px' : size === 'md' ? '76px' : '56px';
  lines.push(`/* Textarea · ${label}${size !== 'md' ? ' · ' + size.toUpperCase() : ''} */`);
  lines.push('');
  lines.push('.bt-txa__input {');
  lines.push(p('border-radius', 'var(--bt-radius-sm)  /* 4px */'));
  lines.push(p('background',
    (state === 'disabled' || state === 'readonly')
      ? 'var(--bt-surface-primary-subtle)  /* #f5f5f5 */'
      : 'var(--bt-surface-primary-default)  /* #ffffff */'));
  lines.push(p('border', `1px solid ${
    isError
      ? 'var(--bt-border-error-default)  /* #b31d38 */'
      : (state === 'hover' || state === 'focused' || state === 'active')
        ? 'var(--bt-border-brand-default)  /* #0d4e97 */'
        : 'var(--bt-border-primary-default)  /* #d4d4d4 */'
  }`));
  if (isFocused) lines.push(p('box-shadow',
    isError ? '0 0 0 3px rgba(232,75,91,0.25)' : '0 0 0 3px rgba(13,78,151,0.25)'));
  lines.push('}');
  lines.push('');
  lines.push('.bt-txa__text {');
  lines.push(p('min-height', minH));
  lines.push(p('padding', 'var(--bt-space-sm)  /* 6px, constant across sizes */'));
  lines.push('}');
  if (state === 'filled') {
    lines.push('');
    lines.push('.bt-txa__clear {');
    lines.push(p('position', 'absolute'));
    lines.push(p('top', '2px'));
    lines.push(p('right', '2px'));
    lines.push('}');
  }
  if (isError) {
    lines.push('');
    lines.push('.bt-txa__label,');
    lines.push('.bt-txa__required {');
    lines.push(p('color', 'var(--bt-text-error-default)  /* #b31d38 */'));
    lines.push('}');
  }
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

// ── Multi Select ─────────────────────────────────────────────────────────────

const _mslIconXSmall = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="1.5" y1="1.5" x2="8.5" y2="8.5"/><line x1="8.5" y1="1.5" x2="1.5" y2="8.5"/></svg>`;

const _mslChips = `
  <span class="bt-msl__chip"><span class="bt-msl__chip-text">Option 1</span></span>
  <span class="bt-msl__chip"><span class="bt-msl__chip-text">Option 2</span></span>
  <span class="bt-msl__chip"><span class="bt-msl__chip-text">+2 more</span><button type="button" class="bt-msl__chip-remove">${_mslIconXSmall}</button></span>`;

function _mslCls(state, size) {
  return _tbxCls(state, size) + ' bt-msl';
}

function _mslInputInner(state) {
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled';
  const validationHtml = isError  ? `<div class="bt-tbx__control"><span class="bt-tbx__icon">${_tbxIconValidation}</span></div>` : '';
  const clearHtml      = isFilled ? `<div class="bt-tbx__control"><button type="button" class="bt-tbx__clear">${_tbxIconClear}</button></div>` : '';
  return `<div class="bt-tbx__control bt-tbx__control--left"><span class="bt-tbx__icon">${_slkIconPlus}</span></div><div class="bt-msl__content">${_mslChips}</div>${validationHtml}${clearHtml}`;
}

function mslPreview(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const labelHtml    = label    === 'on' ? `<span class="bt-tbx__label">Label Text</span>` : '';
  const requiredHtml = required === 'on' ? `<span class="bt-tbx__required">Required Field</span>` : '';
  const metaHtml     = (label === 'on' || required === 'on') ? `<div class="bt-tbx__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'on' ? `<span class="bt-tbx__helper">Helper Text</span>` : '';
  return `
    <div style="padding:24px;width:100%;max-width:420px;margin:0 auto;box-sizing:border-box;">
      <div class="${_mslCls(state, size)}">
        ${metaHtml}
        <div class="bt-tbx__input">${_mslInputInner(state)}</div>
        ${helperHtml}
      </div>
    </div>`;
}

function mslCode(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const cls     = _mslCls(state, size);
  const isError = state === 'error' || state === 'error-focused';
  const isFilled = state === 'filled';
  const metaParts = [];
  if (label    === 'on') metaParts.push('  <span class="bt-tbx__label">Label Text</span>');
  if (required === 'on') metaParts.push('  <span class="bt-tbx__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-tbx__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const valBlock    = isError  ? `\n  <div class="bt-tbx__control">\n    <!-- circle-alert icon 15×15 -->\n  </div>` : '';
  const clearBlock  = isFilled ? `\n  <div class="bt-tbx__control">\n    <!-- clear (×) icon 10×10 -->\n  </div>` : '';
  const helperBlock = helper === 'on' ? `\n<span class="bt-tbx__helper">Helper Text</span>` : '';
  const code = `${metaBlock}<div class="bt-tbx__input">
  <div class="bt-tbx__control bt-tbx__control--left">
    <!-- plus icon 16×16 -->
  </div>
  <div class="bt-msl__content">
    <span class="bt-msl__chip">
      <span class="bt-msl__chip-text">Option 1</span>
    </span>
    <span class="bt-msl__chip">
      <span class="bt-msl__chip-text">+2 more</span>
      <button class="bt-msl__chip-remove"><!-- × icon 10×10 --></button>
    </span>
  </div>${valBlock}${clearBlock}
</div>${helperBlock}`;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block">&lt;div class="${esc(cls)}"&gt;\n${esc(code)}\n&lt;/div&gt;</pre>`;
}

PAGES_WEB['components/multi-select'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'States', 'Sizes'],
  render(tab) {
    const title = 'MultiSelect';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    const sharedProps = [
      { key: 'size',     label: 'Size',     options: TBX_SIZE_OPTS, default: 'md'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'on' },
    ];

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Tüm state'ler interaktif playground üzerinde — boyutu ve label görünürlüğünü değiştirin.</p>
      ${registerPlayground({
        id: 'pgd-msl-ex',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => mslPreview(state, p),
        code:    (state, p) => mslCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">MultiSelect için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Min Height</th><th>Left control padding</th><th>Content padding</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Sm</span></td><td>28px</td><td>${tk('--bt-space-2xs')} (2px)</td><td>${tk('--bt-space-xs')} (4px) tüm kenar</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${tk('--bt-space-xs')} (4px)</td><td>${tk('--bt-space-sm')} (6px) dikey · ${tk('--bt-space-xs')} (4px) yatay</td></tr>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${tk('--bt-space-sm')} (6px)</td><td>${tk('--bt-space-md')} (8px) dikey · ${tk('--bt-space-xs')} (4px) yatay</td></tr>
        </tbody>
      </table>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Focused / Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>chip opacity</td><td colspan="2">0.6</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>
      <h2>Chip Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>border-radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>padding</td><td>${tk('--bt-space-2xs')} / ${tk('--bt-space-xs')}</td><td>2px / 4px</td></tr>
          <tr><td>gap</td><td>${tk('--bt-space-2xs')}</td><td>2px</td></tr>
          <tr><td>text color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>remove icon color</td><td>${tk('--bt-icon-primary-strong')}</td><td>#535353</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-tbx.bt-msl')}</td><td>Wrapper</td><td>TextBox state sistemi + min-height override; state/size modifier'ları buraya eklenir</td></tr>
          <tr><td>${tk('.bt-tbx__control--left')}</td><td>Plus ikon sarmalayıcı</td><td>Sol tarafta sabit; hover/focused'ta subtle bg</td></tr>
          <tr><td>${tk('.bt-msl__content')}</td><td>Chip alanı</td><td>flex-wrap, gap --bt-space-xs; boyuta göre padding</td></tr>
          <tr><td>${tk('.bt-msl__chip')}</td><td>Tekil chip</td><td>subtle bg + border + radius-sm</td></tr>
          <tr><td>${tk('.bt-msl__chip-text')}</td><td>Chip metni</td><td>12px, nowrap</td></tr>
          <tr><td>${tk('.bt-msl__chip-remove')}</td><td>Chip × butonu</td><td>16×16, +N more chip'inde gösterilir</td></tr>
          <tr><td>${tk('.bt-tbx__clear')}</td><td>Tümünü temizle butonu</td><td>Filled state'te sağda</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">MultiSelect kullanım kuralları.</p>
      <h2>When to use</h2>
      <ul>
        <li>Kullanıcının birden fazla seçenek seçmesi gereken form alanlarında</li>
        <li>Seçili değerlerin chip olarak görünür kalması gerektiğinde</li>
        <li>Dropdown listesinden çoklu seçim yapılacak durumlarda</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Seçilen chip sayısını göster — fazla chip'leri "+N more" olarak topla</li>
        <li>Filled state'te "Tümünü temizle" (×) butonu ekle</li>
        <li>Plus ikonu ile yeni seçim ekleneceğini kullanıcıya göster</li>
        <li>Error state'te helper text ile açıklayıcı mesaj ekle</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Tek seçim için MultiSelect kullanma — Select LookUp veya Dropdown kullan</li>
        <li>Chip'leri readonly state'te kaldırma butonuyla gösterme</li>
      </ul>
    `};

    // ── Overview ───────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-msl-overview',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => mslPreview(state, p),
        code:    (state, p) => mslCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
      <h2>Anatomy</h2>
      <ol>
        <li><strong>Meta</strong> — label + required field satırı</li>
        <li><strong>Left control</strong> — plus ikonu, yeni seçim eklemek için (${tk('.bt-tbx__control--left')})</li>
        <li><strong>Content</strong> — seçili chip'ler (${tk('.bt-msl__content')})</li>
        <li><strong>Chip</strong> — tekil seçim etiketi; "+N more" chip'i kaldırma × butonu içerir</li>
        <li><strong>Clear control</strong> — filled state'te tüm seçimleri temizler</li>
        <li><strong>Validation control</strong> — error state'te uyarı ikonu</li>
        <li><strong>Helper text</strong> — yardımcı bilgi veya hata mesajı</li>
      </ol>
      <h2>States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Class modifier</th><th>Görsel fark</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>—</td><td>Gri border, chip'ler görünür</td></tr>
          <tr><td>Hover</td><td>${tk('.bt-tbx--hover')}</td><td>Mavi border</td></tr>
          <tr><td>Focused</td><td>${tk('.bt-tbx--focused')}</td><td>Mavi border + focus ring</td></tr>
          <tr><td>Active</td><td>${tk('.bt-tbx--active')}</td><td>Mavi border + focus ring (panel açık)</td></tr>
          <tr><td>Filled</td><td>${tk('.bt-tbx--filled')}</td><td>Chip'ler + sağda × (tümünü temizle)</td></tr>
          <tr><td>Disabled</td><td>${tk('.bt-tbx--disabled')}</td><td>Subtle bg, chip'ler %60 opacity</td></tr>
          <tr><td>Read Only</td><td>${tk('.bt-tbx--readonly')}</td><td>Subtle bg, değiştirilemez</td></tr>
          <tr><td>Error</td><td>${tk('.bt-tbx--error')}</td><td>Kırmızı border + label + uyarı ikonu</td></tr>
          <tr><td>Error Focused</td><td>${tk('.bt-tbx--error-focused')}</td><td>Kırmızı border + error ring</td></tr>
        </tbody>
      </table>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Class</th><th>Min Height</th></tr></thead>
        <tbody>
          <tr><td>Small</td><td>${tk('.bt-tbx--sm')}</td><td>28px</td></tr>
          <tr><td>Medium (Default)</td><td>${tk('.bt-tbx--md')}</td><td>32px</td></tr>
          <tr><td>Large</td><td>${tk('.bt-tbx--lg')}</td><td>36px</td></tr>
        </tbody>
      </table>
    `};
  }
};

// ── Date Picker ──────────────────────────────────────────────────────────────

const _dtpIconCalendar = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="0.6" y="2.6" width="12.8" height="11.8" rx="1.5"/><line x1="0.6" y1="6.6" x2="13.4" y2="6.6"/><line x1="4" y1="0.6" x2="4" y2="4.6"/><line x1="10" y1="0.6" x2="10" y2="4.6"/></svg>`;
const _dtpChevLeft  = `<svg width="6" height="11" viewBox="0 0 6 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 1L1 5.5L5 10"/></svg>`;
const _dtpChevRight = `<svg width="6" height="11" viewBox="0 0 6 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1L5 5.5L1 10"/></svg>`;

const _dtpMonthNames = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
const _dtpWeekDays   = ['PZT','SL','ÇR','PR','CM','CT','PZ'];

function _dtpCalendarHtml() {
  const today = new Date();
  const year  = today.getFullYear();
  const month = today.getMonth();
  const todayDay = today.getDate();

  const firstDow    = new Date(year, month, 1).getDay(); // 0=Sun
  const startOffset = firstDow === 0 ? 6 : firstDow - 1; // Monday-based
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev  = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = startOffset - 1; i >= 0; i--)    cells.push({ day: daysInPrev - i, other: true });
  for (let d = 1; d <= daysInMonth; d++)          cells.push({ day: d, other: false, isToday: d === todayDay });
  const rem = (7 - (cells.length % 7)) % 7;
  for (let d = 1; d <= rem; d++)                  cells.push({ day: d, other: true });

  const weekdaysHtml = _dtpWeekDays.map(d => `<div class="bt-cal__weekday">${d}</div>`).join('');
  let weeksHtml = '';
  for (let i = 0; i < cells.length; i += 7) {
    const rowHtml = cells.slice(i, i + 7).map(c => {
      const cls = ['bt-cal__day'];
      if (c.other)   cls.push('bt-cal__day--other-month');
      if (c.isToday) cls.push('bt-cal__day--selected');
      return `<div class="${cls.join(' ')}">${c.day}</div>`;
    }).join('');
    weeksHtml += `<div class="bt-cal__week">${rowHtml}</div>`;
  }

  return `<div class="bt-cal">
    <div class="bt-cal__header">
      <button class="bt-cal__month-btn">${_dtpMonthNames[month]} ${year}</button>
      <div class="bt-cal__nav">
        <button class="bt-cal__nav-btn">${_dtpChevLeft}</button>
        <button class="bt-cal__nav-btn bt-cal__nav-btn--today">Bugün</button>
        <button class="bt-cal__nav-btn">${_dtpChevRight}</button>
      </div>
    </div>
    <div class="bt-cal__body">
      <div class="bt-cal__weekdays">${weekdaysHtml}</div>
      ${weeksHtml}
    </div>
  </div>`;
}

// Global toggle for interactive default-state date picker in playground
window.btDtpToggle = function(inputEl) {
  const root   = inputEl.closest('.bt-tbx');
  const isOpen = root.classList.toggle('bt-tbx--active');
  const cal    = root.querySelector('.bt-cal');
  if (cal) cal.style.display = isOpen ? '' : 'none';
};

function _dtpInputInner(state) {
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';
  const validationHtml = isError  ? `<div class="bt-tbx__control"><span class="bt-tbx__icon">${_tbxIconValidation}</span></div>` : '';
  const clearHtml      = isFilled ? `<div class="bt-tbx__control"><button type="button" class="bt-tbx__clear">${_tbxIconClear}</button></div>` : '';
  const inputAttrs     = ((isFilled || isReadOnly) ? ' value="Placeholder Text"' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  return `<div class="bt-tbx__control bt-tbx__control--left"><span class="bt-tbx__icon">${_dtpIconCalendar}</span></div><div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} /></div>${validationHtml}${clearHtml}`;
}

function _dtpCls(state, size) {
  return _tbxCls(state, size) + ' bt-tbx--icon-left';
}

function dtpPreview(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const isActive  = state === 'active';
  const isDefault = state === 'default';
  const labelHtml    = label    === 'on' ? `<span class="bt-tbx__label">Label Text</span>` : '';
  const requiredHtml = required === 'on' ? `<span class="bt-tbx__required">Required Field</span>` : '';
  const metaHtml     = (label === 'on' || required === 'on') ? `<div class="bt-tbx__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'on' ? `<span class="bt-tbx__helper">Helper Text</span>` : '';
  // Calendar: always rendered for active/default; hidden initially for default (interactive)
  const calHtml      = (isActive || isDefault) ? _dtpCalendarHtml().replace('<div class="bt-cal">', `<div class="bt-cal"${isDefault ? ' style="display:none;"' : ''}>`) : '';
  const inputAttrs   = isDefault ? ` onclick="btDtpToggle(this)" style="cursor:pointer;"` : '';
  return `
    <div style="padding:24px;width:100%;max-width:420px;margin:0 auto;box-sizing:border-box;">
      <div class="${_dtpCls(state, size)}">
        ${metaHtml}
        <div class="bt-tbx__anchor">
          <div class="bt-tbx__input"${inputAttrs}>${_dtpInputInner(state)}</div>
          ${calHtml}
        </div>
        ${helperHtml}
      </div>
    </div>`;
}

function dtpCode(state, props = {}) {
  const { size = 'md', label = 'on', required = 'on', helper = 'on' } = props;
  const cls        = _dtpCls(state, size);
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';
  const metaParts = [];
  if (label    === 'on') metaParts.push('  <span class="bt-tbx__label">Label Text</span>');
  if (required === 'on') metaParts.push('  <span class="bt-tbx__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-tbx__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const valBlock    = isError  ? `\n  <div class="bt-tbx__control">\n    <!-- circle-alert icon 15×15 -->\n  </div>` : '';
  const clearBlock  = isFilled ? `\n  <div class="bt-tbx__control">\n    <!-- clear (×) icon 10×10 -->\n  </div>` : '';
  const helperBlock = helper === 'on' ? `\n<span class="bt-tbx__helper">Helper Text</span>` : '';
  const inputAttrs  = ((isFilled || isReadOnly) ? ' value="..."' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  const code = `${metaBlock}<div class="bt-tbx__input">
  <div class="bt-tbx__control bt-tbx__control--left">
    <!-- calendar icon 14×15 -->
  </div>
  <div class="bt-tbx__field">
    <input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} />
  </div>${valBlock}${clearBlock}
</div>${helperBlock}`;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block">&lt;div class="${esc(cls)}"&gt;\n${esc(code)}\n&lt;/div&gt;</pre>`;
}

PAGES_WEB['components/date-picker'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'States', 'Sizes'],
  render(tab) {
    const title = 'Date Picker';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    const sharedProps = [
      { key: 'size',     label: 'Size',     options: TBX_SIZE_OPTS, default: 'md'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'on' },
    ];

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Tüm state'ler interaktif playground üzerinde — boyutu ve label görünürlüğünü değiştirin.</p>
      ${registerPlayground({
        id: 'pgd-dtp-ex',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => dtpPreview(state, p),
        code:    (state, p) => dtpCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Date Picker için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Height</th><th>Control padding</th><th>Field padding</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Sm</span></td><td>28px</td><td>${tk('--bt-space-2xs')} (2px)</td><td>${tk('--bt-space-xs')} top/bot/left · ${tk('--bt-space-xs')} right</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${tk('--bt-space-xs')} (4px)</td><td>${tk('--bt-space-sm')} top/bot · ${tk('--bt-space-xs')} left/right</td></tr>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${tk('--bt-space-sm')} (6px)</td><td>${tk('--bt-space-md')} top/bot · ${tk('--bt-space-xs')} left/right</td></tr>
        </tbody>
      </table>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Focused / Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Read Only</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td rowspan="2">Error Focused</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>
      <h2>Shared Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>border-radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>background (Default/Hover/Focused/Error)</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>Placeholder rengi</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Değer metin rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Calendar ikon rengi</td><td>${tk('--bt-icon-primary-strong')}</td><td>#535353</td></tr>
          <tr><td>Calendar ikon rengi (disabled)</td><td>${tk('--bt-icon-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-tbx.bt-tbx--icon-left')}</td><td>Wrapper</td><td>TextBox base + sol ikon variant'ı; state modifier'ları buraya eklenir</td></tr>
          <tr><td>${tk('.bt-tbx__control.bt-tbx__control--left')}</td><td>Calendar ikon sarmalayıcı</td><td>Sol tarafta sabit; hover/focused'ta subtle bg (--bt-surface-primary-subtle)</td></tr>
          <tr><td>${tk('.bt-tbx__icon')}</td><td>24×24 ikon alanı</td><td>color: --bt-icon-primary-strong (disabled: --bt-icon-primary-muted)</td></tr>
          <tr><td>${tk('.bt-tbx__field')}</td><td>Metin bölgesi</td><td>flex:1; padding-left --bt-space-xs (4px) — ikon nedeniyle küçültülmüş</td></tr>
          <tr><td>${tk('.bt-tbx__clear')}</td><td>Temizle butonu</td><td>Filled state'te sağda gösterilir</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Date Picker kullanım kuralları.</p>
      <h2>When to use</h2>
      <ul>
        <li>Kullanıcının tarih seçmesi gereken form alanlarında</li>
        <li>Tarih aralığı veya tek tarih girişi gerektiren formlarda</li>
        <li>Takvim açılır paneli ile birlikte kullanılır (Active state)</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Label ile birlikte kullan — kullanıcıya hangi tarih bilgisi beklendiğini belirt</li>
        <li>Filled state'te temizleme (×) butonu göster</li>
        <li>Hata durumunda helper text ile açıklayıcı mesaj ekle</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Serbest metin girişi için Date Picker kullanma — TextBox kullan</li>
        <li>Calendar ikonunu başka amaçlarla değiştirme</li>
      </ul>
    `};

    // ── Overview ───────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-dtp-overview',
        variants: TBX_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => dtpPreview(state, p),
        code:    (state, p) => dtpCode(state, p),
        css:     (state, p) => tbxCss(state, p),
      })}
      <h2>Anatomy</h2>
      <ol>
        <li><strong>Meta</strong> — label + required field satırı</li>
        <li><strong>Left control</strong> — sabit calendar ikonu (${tk('.bt-tbx__control')})</li>
        <li><strong>Field</strong> — metin / input alanı (${tk('.bt-tbx__field')})</li>
        <li><strong>Clear control</strong> — filled state'te × butonu (${tk('.bt-tbx__clear')})</li>
        <li><strong>Validation control</strong> — error state'te uyarı ikonu</li>
        <li><strong>Helper text</strong> — yardımcı bilgi veya hata mesajı</li>
      </ol>
      <h2>States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Class modifier</th><th>Görsel fark</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>—</td><td>Gri border</td></tr>
          <tr><td>Hover</td><td>${tk('.bt-tbx--hover')}</td><td>Mavi border</td></tr>
          <tr><td>Focused</td><td>${tk('.bt-tbx--focused')}</td><td>Mavi border + focus ring</td></tr>
          <tr><td>Active</td><td>${tk('.bt-tbx--active')}</td><td>Mavi border + focus ring (takvim açık)</td></tr>
          <tr><td>Filled</td><td>${tk('.bt-tbx--filled')}</td><td>Değer dolu + × butonu</td></tr>
          <tr><td>Disabled</td><td>${tk('.bt-tbx--disabled')}</td><td>Subtle bg, soluk metin</td></tr>
          <tr><td>Read Only</td><td>${tk('.bt-tbx--readonly')}</td><td>Subtle bg, değiştirilemez</td></tr>
          <tr><td>Error</td><td>${tk('.bt-tbx--error')}</td><td>Kırmızı border + label + uyarı ikonu</td></tr>
          <tr><td>Error Focused</td><td>${tk('.bt-tbx--error-focused')}</td><td>Kırmızı border + error ring</td></tr>
        </tbody>
      </table>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Class</th><th>Height</th></tr></thead>
        <tbody>
          <tr><td>Small</td><td>${tk('.bt-tbx--sm')}</td><td>28px</td></tr>
          <tr><td>Medium (Default)</td><td>${tk('.bt-tbx--md')}</td><td>32px</td></tr>
          <tr><td>Large</td><td>${tk('.bt-tbx--lg')}</td><td>36px</td></tr>
        </tbody>
      </table>
    `};
  }
};

PAGES_WEB['components/textarea'] = {
  tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
  toc:  ['Anatomy', 'States', 'Sizes'],
  render(tab) {
    const title = 'Textarea';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    const sharedProps = [
      { key: 'size',     label: 'Size',     options: TXA_SIZE_OPTS, default: 'md'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'on' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'on' },
    ];

    if (tab === 'Examples') return { title, html: `
      <p class="page-desc">Tüm state'ler interaktif playground üzerinde — boyutu ve label görünürlüğünü değiştirin.</p>
      ${registerPlayground({
        id: 'pgd-txa-ex',
        variants: TXA_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => txaPreview(state, p),
        code:    (state, p) => txaCode(state, p),
        css:     (state, p) => txaCss(state, p),
      })}
    `};

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Textarea için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Min Height</th><th>Padding</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Sm</span></td><td>56px</td><td rowspan="3">${tk('--bt-space-sm')} — all sides (6px), constant across sizes</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>76px</td></tr>
          <tr><td><span class="token-name">Lg</span></td><td>96px</td></tr>
        </tbody>
      </table>
      <h2>State Tokens</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Hover</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td rowspan="2">Focused / Active</td><td>border</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Read Only</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td rowspan="2">Error Focused</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>
      <h2>Shared Tokens</h2>
      <table class="token-table">
        <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>border-radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>background (Default/Hover/Focused/Error)</td><td>${tk('--bt-surface-primary-default')}</td><td>#ffffff</td></tr>
          <tr><td>Placeholder rengi</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Değer metin rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Label rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Required field rengi</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Helper text rengi</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>resize</td><td>—</td><td>vertical (disabled/readonly: none)</td></tr>
        </tbody>
      </table>
      <h2>Class Reference</h2>
      <table class="token-table">
        <thead><tr><th>Class</th><th>Element</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td>${tk('.bt-txa')}</td><td>Wrapper</td><td>flex-col, gap 4px — state modifier'ları buraya eklenir</td></tr>
          <tr><td>${tk('.bt-txa--sm/md/lg')}</td><td>Wrapper</td><td>Min-height ve padding belirler</td></tr>
          <tr><td>${tk('.bt-txa__meta')}</td><td>Label satırı</td><td>flex row, gap 4px</td></tr>
          <tr><td>${tk('.bt-txa__label')}</td><td>Label metni</td><td>color: --bt-text-primary-default (error: --bt-text-error-default)</td></tr>
          <tr><td>${tk('.bt-txa__required')}</td><td>Zorunluk işareti</td><td>color: --bt-text-primary-emphasis (error: --bt-text-error-default)</td></tr>
          <tr><td>${tk('.bt-txa__input')}</td><td>Input kutusu</td><td>border, radius, bg — tüm state border/shadow değişimleri burada</td></tr>
          <tr><td>${tk('.bt-txa__text')}</td><td>&lt;textarea&gt;</td><td>Gerçek HTML textarea elemanı; resize: vertical</td></tr>
          <tr><td>${tk('.bt-tbx__clear')} + ${tk('.bt-txa__clear')}</td><td>Temizle butonu</td><td>Filled state'te sağ üstte gösterilir (absolute, top/right: 2px)</td></tr>
          <tr><td>${tk('.bt-txa__helper')}</td><td>Yardım metni</td><td>color: --bt-text-primary-default</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Textarea kullanım kuralları.</p>
      <h2>When to use</h2>
      <ul>
        <li>Kullanıcının birden fazla satır metin gireceği form alanlarında</li>
        <li>Açıklama, not, yorum gibi uzun içerik girişi gerektiren durumlarda</li>
        <li>Serbest biçimli metin içeriği toplamak istediğinde</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Her zaman anlamlı bir <code style="font-family:var(--mono)">placeholder</code> metni ekle</li>
        <li>Zorunlu alanları <code style="font-family:var(--mono)">.bt-txa__required</code> ile işaretle</li>
        <li>Hata mesajını helper text olarak göster, error state ile birlikte kullan</li>
        <li>Yeterli min-height ile başla — kullanıcı dikey resize yapabilir</li>
        <li><strong>Clear control</strong> — filled state'te sağ üstte <code style="font-family:var(--mono)">.bt-txa__clear</code> × butonu göster</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Label'sız Textarea bırakma — erişilebilirlik için label zorunlu</li>
        <li>Tek satırlık girişler için Textarea kullanma — bunun yerine TextBox kullan</li>
        <li>Error state'te yalnızca border'ı kırmızı yapma — label ve required field da dönmeli</li>
      </ul>
    `};

    // ── Overview ─────────────────────────────────────────────────
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-txa-overview',
        variants: TXA_STATE_VARIANTS,
        props: sharedProps,
        preview: (state, p) => txaPreview(state, p),
        code:    (state, p) => txaCode(state, p),
        css:     (state, p) => txaCss(state, p),
      })}

      <p class="page-desc">Çok satırlı metin giriş bileşeni. Label, Required Field ve Helper Text ile birleşik yapı; 3 boyut (Sm/Md/Lg) ve 9 state sunar.</p>

      <h2 id="Anatomy">Anatomy</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="3">Input kutusu</td><td>Border (Default)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Border (Hover/Focused)</td><td>${tk('--bt-border-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Border radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>Sm</td><td>Min Height</td><td>—</td><td>56px (3 satır)</td></tr>
          <tr><td>Md</td><td>Min Height</td><td>—</td><td>76px (4 satır)</td></tr>
          <tr><td>Lg</td><td>Min Height</td><td>—</td><td>96px (5 satır)</td></tr>
          <tr><td rowspan="2">Label</td><td>Font / size</td><td>${tk('Font/Family/Label · Font/Size/text-xs')}</td><td>Geist 12px</td></tr>
          <tr><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Required field</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Placeholder</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Focus ring</td><td>box-shadow</td><td>—</td><td>0 0 0 3px rgba(13,78,151,0.25)</td></tr>
          <tr><td>Error focus ring</td><td>box-shadow</td><td>—</td><td>0 0 0 3px rgba(232,75,91,0.25)</td></tr>
        </tbody>
      </table>

      <h2 id="States">States</h2>
      <table class="token-table" style="margin-bottom:40px;">
        <thead><tr><th>State</th><th>Preview (Md)</th></tr></thead>
        <tbody>
          ${TXA_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:6px 0;">
              <div style="max-width:280px;">
                <div class="${_txaCls(s.key, 'md')}">
                  <div class="bt-txa__meta"><span class="bt-txa__label">Label Text</span><span class="bt-txa__required">Required Field</span></div>
                  <div class="bt-txa__input">
                    <textarea class="bt-txa__text" placeholder="Placeholder Text"${s.key === 'disabled' ? ' disabled' : ''}${s.key === 'readonly' ? ' readonly' : ''}>${(s.key === 'filled' || s.key === 'readonly') ? 'Placeholder Text' : ''}</textarea>
                  </div>
                  <span class="bt-txa__helper">Helper Text</span>
                </div>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Preview</th></tr></thead>
        <tbody>
          ${TXA_SIZE_OPTS.map(sz => `
          <tr>
            <td><span class="token-name">${sz.label}</span></td>
            <td style="padding:6px 0;">
              <div style="max-width:280px;">
                <div class="bt-txa bt-txa--${sz.key}">
                  <div class="bt-txa__meta"><span class="bt-txa__label">Label Text</span></div>
                  <div class="bt-txa__input">
                    <textarea class="bt-txa__text" placeholder="Placeholder Text"></textarea>
                  </div>
                  <span class="bt-txa__helper">Helper Text</span>
                </div>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};
  },
};

// ── Avatar ─────────────────────────────────────────────────
// Figma node 205:25278. Icon her boyutta SABİT 24×24 (avatar boyutuna göre
// büyümez — Figma'nın tüm 6 boyutunda ayrı ayrı doğrulandı). Border her iki
// temada da ortak (--bt-border-primary-default) — Brand'de arka plan koyu
// olsa da border kalkmıyor, Figma'da iki tema da aynı border class'ını paylaşıyor.
// İkon, Figma'nın "Circle-User-Round" asset'inden birebir alınan fill-path'i —
// lucide'ın stroke-tabanlı circle-user-round'ından farklı, bu yüzden hazır
// lucide path'i kullanılmadı.
const _avatarIconUser = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.844 11.0827C14.844 9.51198 13.5709 8.23851 12.0003 8.23841C10.4295 8.23841 9.15603 9.51192 9.15603 11.0827C9.15603 12.6457 10.417 13.9135 11.9772 13.9258H12.0218C13.5825 13.9142 14.844 12.6461 14.844 11.0827ZM12.0003 15.5783C11.9928 15.5783 11.9852 15.5772 11.9777 15.5772C10.8719 15.5824 9.80339 15.9792 8.96197 16.6975C8.2446 17.3099 7.7326 18.1222 7.48636 19.0246C8.78779 19.8626 10.3373 20.3486 12.0003 20.3486C13.6627 20.3486 15.2114 19.8626 16.5126 19.0251C16.2663 18.1223 15.7547 17.3095 15.037 16.697C14.1956 15.979 13.1273 15.5824 12.0218 15.5772C12.0146 15.5772 12.0074 15.5783 12.0003 15.5783ZM22 12.0003C21.9999 17.523 17.523 21.9999 12.0003 22C9.7954 22 7.75749 21.2859 6.10429 20.0771C6.08567 20.0646 6.06744 20.0518 6.04999 20.0379C3.59281 18.2159 2.00006 15.2942 2 12.0003C2 6.47737 6.47737 2 12.0003 2C17.5231 2.0001 22 6.47743 22 12.0003ZM16.4954 11.0827C16.4954 12.5002 15.8384 13.7631 14.8133 14.587C15.2751 14.8162 15.7111 15.1012 16.1089 15.4407C16.8994 16.1153 17.5059 16.9694 17.8839 17.9226C19.4061 16.4103 20.3486 14.3155 20.3486 12.0003C20.3486 7.38947 16.611 3.65149 12.0003 3.65139C7.38941 3.65139 3.65139 7.38941 3.65139 12.0003C3.65144 14.3152 4.59378 16.4098 6.11558 17.9221C6.49346 16.9695 7.09961 16.1161 7.88953 15.4417C8.28745 15.1021 8.72356 14.8164 9.18559 14.587C8.16098 13.7631 7.50464 12.4998 7.50464 11.0827C7.50464 8.59988 9.5175 6.58702 12.0003 6.58702C14.483 6.58712 16.4954 8.59994 16.4954 11.0827Z"/></svg>`;

const AVATAR_SIZE_VARIANTS = [
  { key: '2xs', label: '2xs' },
  { key: 'xs',  label: 'xs' },
  { key: 'sm',  label: 'sm' },
  { key: 'md',  label: 'md' },
  { key: 'lg',  label: 'lg' },
  { key: 'xl',  label: 'xl' },
];
const AVATAR_THEME_OPTS = [
  { key: 'default', label: 'Default' },
  { key: 'brand',   label: 'Brand' },
];
const AVATAR_TYPE_OPTS = [
  { key: 'initials', label: 'Initials' },
  { key: 'icon',      label: 'Icon' },
];
const _avatarSizeTokenMap = { '2xs': '--bt-base-sizing-6xl', 'xs': '--bt-base-sizing-7xl', 'sm': '--bt-base-sizing-8xl', 'md': '--bt-base-sizing-10xl', 'lg': '--bt-base-sizing-12xl', 'xl': '--bt-base-sizing-14xl' };
const _avatarSizePxMap    = { '2xs': 24, 'xs': 28, 'sm': 32, 'md': 40, 'lg': 48, 'xl': 56 };

function avatarHtml(size, theme, type) {
  const themeClass = theme === 'brand' ? ' bt-avatar--brand' : '';
  const content = type === 'icon'
    ? `<span class="bt-avatar__icon">${_avatarIconUser}</span>`
    : `<span class="bt-avatar__initials">EG</span>`;
  return `<div class="bt-avatar bt-avatar--${size}${themeClass}">${content}</div>`;
}

function avatarPreview(size, props) {
  const theme = (props && props.theme) || 'default';
  const type  = (props && props.type) || 'initials';
  return `<div style="display:flex;align-items:center;justify-content:center;padding:16px;">${avatarHtml(size, theme, type)}</div>`;
}

function avatarCode(size, props) {
  const theme = (props && props.theme) || 'default';
  const type  = (props && props.type) || 'initials';
  const themeClass = theme === 'brand' ? ' bt-avatar--brand' : '';
  const inner = type === 'icon'
    ? `\n  <span class="bt-avatar__icon">\n    <!-- circle-user-round icon, 24×24, sabit -->\n  </span>\n`
    : `\n  <span class="bt-avatar__initials">EG</span>\n`;
  return `<div class="bt-avatar bt-avatar--${size}${themeClass}">${inner}</div>`;
}

function avatarCss(size, props) {
  const theme    = (props && props.theme) || 'default';
  const type     = (props && props.type) || 'initials';
  const isBrand  = theme === 'brand';
  const isMdPlus = ['md', 'lg', 'xl'].includes(size);
  const p = (k, v) => `  ${k}: ${v};`;
  const lines = [];

  lines.push(`/* Avatar · ${size} · ${theme.charAt(0).toUpperCase() + theme.slice(1)} · ${type.charAt(0).toUpperCase() + type.slice(1)} */`, '');
  lines.push('.bt-avatar {');
  lines.push(p('display', 'flex'));
  lines.push(p('align-items', 'center'));
  lines.push(p('justify-content', 'center'));
  lines.push(p('border-radius', 'var(--bt-radius-full)  /* 9999px */'));
  lines.push(p('border', '1px solid var(--bt-border-primary-default)  /* #d4d4d4 — her iki temada da aynı */'));
  lines.push(p('background', isBrand ? 'var(--bt-surface-brand-default)  /* #0d4e97 */' : 'var(--bt-surface-primary-subtle)  /* #f5f5f5 */'));
  lines.push('}');
  lines.push('', `.bt-avatar--${size} {`);
  lines.push(p('width',  `var(${_avatarSizeTokenMap[size]})  /* ${_avatarSizePxMap[size]}px */`));
  lines.push(p('height', `var(${_avatarSizeTokenMap[size]})  /* ${_avatarSizePxMap[size]}px */`));
  lines.push('}');

  if (type === 'initials') {
    lines.push('', '.bt-avatar__initials {');
    lines.push(p('font', isMdPlus ? 'var(--bt-text-sm-medium)  /* 500 14px/16px */' : 'var(--bt-text-xs-medium)  /* 500 12px/16px */'));
    lines.push(p('color', isBrand ? 'var(--bt-text-primary-inverted)  /* #ffffff */' : 'var(--bt-text-primary-default)  /* #1a1a1a */'));
    lines.push('}');
  } else {
    lines.push('', '.bt-avatar__icon {');
    lines.push(p('width', '24px  /* avatar boyutundan bağımsız, sabit */'));
    lines.push(p('height', '24px'));
    lines.push(p('color', isBrand ? 'var(--bt-icon-primary-inverted)  /* #ffffff */' : 'var(--bt-icon-primary-muted)  /* #a3a3a3 */'));
    lines.push('}');
  }

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/avatar'] = {
  tabs: ['Overview', 'CSS Properties', 'Usage'],
  toc:  ['Types', 'Themes', 'Sizes'],
  render(tab) {
    const title = 'Avatar';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Avatar bileşeni için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Shape</td><td>${tk('--bt-radius-full')}</td><td>9999px</td></tr>
          <tr><td>Container</td><td>Border (her iki tema)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Container · Default</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Container · Brand</td><td>Background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Initials · 2xs/xs/sm</td><td>Font</td><td>${tk('--bt-text-xs-medium')}</td><td>500 · 12px/16px</td></tr>
          <tr><td>Initials · md/lg/xl</td><td>Font</td><td>${tk('--bt-text-sm-medium')}</td><td>500 · 14px/16px</td></tr>
          <tr><td>Initials · Default</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Initials · Brand</td><td>Color</td><td>${tk('--bt-text-primary-inverted')}</td><td>#ffffff</td></tr>
          <tr><td>Icon · Default</td><td>Fill</td><td>${tk('--bt-icon-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Icon · Brand</td><td>Fill</td><td>${tk('--bt-icon-primary-inverted')}</td><td>#ffffff</td></tr>
          <tr><td>Icon</td><td>Boyut (sabit)</td><td>—</td><td>24×24px</td></tr>
        </tbody>
      </table>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Size</th><th>Dimension</th><th>Token</th></tr></thead>
        <tbody>
          ${AVATAR_SIZE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.key}</span></td>
            <td>${_avatarSizePxMap[s.key]} × ${_avatarSizePxMap[s.key]}px</td>
            <td>${tk(_avatarSizeTokenMap[s.key])}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Avatar kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Kullanıcının gerçek adı biliniyorsa Initials tipini, kimliği belirsiz/genel bir bağlamda Icon tipini kullan</li>
        <li>Initials için en fazla 2 karakter göster (örn. ad + soyad baş harfi)</li>
        <li>Aktif/tanımlanmış kullanıcılar için Brand temayı, genel/atanmamış bağlamlar için Default temayı tercih et</li>
        <li>Bir listede/tabloda tüm avatarları aynı boyutta tut — karışık boyut hizalamayı bozar</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Icon boyutunu avatar boyutuna göre büyütme — Figma'da bu ikon her zaman sabit 24×24'tür</li>
        <li>Initials'a 2'den fazla karakter sığdırmaya çalışma — dairesel alan taşar</li>
        <li>Brand temada border'ı kaldırma — iki tema da aynı border'ı paylaşır</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-avatar-overview',
        variants: AVATAR_SIZE_VARIANTS,
        props: [
          { key: 'theme', label: 'Theme', options: AVATAR_THEME_OPTS, default: 'default'  },
          { key: 'type',  label: 'Type',  options: AVATAR_TYPE_OPTS,  default: 'initials' },
        ],
        preview: (sz, p) => avatarPreview(sz, p),
        code:    (sz, p) => avatarCode(sz, p),
        css:     (sz, p) => avatarCss(sz, p),
      })}

      <p class="page-desc">Avatar, bir kullanıcıyı veya varlığı dairesel bir konteyner içinde temsil eder. Initials veya Icon tipini, Default ya da Brand temada, 6 farklı boyutta destekler.</p>

      <h2 id="Types">Types</h2>
      <table class="token-table">
        <thead><tr><th>Type</th><th>Preview</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Initials</span></td>
            <td><div style="display:flex;gap:8px;align-items:center;">${avatarHtml('md', 'default', 'initials')}${avatarHtml('md', 'brand', 'initials')}</div></td>
            <td>Kullanıcının baş harflerini gösterir (en fazla 2 karakter).</td>
          </tr>
          <tr>
            <td><span class="token-name">Icon</span></td>
            <td><div style="display:flex;gap:8px;align-items:center;">${avatarHtml('md', 'default', 'icon')}${avatarHtml('md', 'brand', 'icon')}</div></td>
            <td>Genel bir kullanıcı yer tutucusu olarak circle-user-round ikonunu kullanır.</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Shape</td><td>${tk('--bt-radius-full')}</td><td>9999px</td></tr>
          <tr><td>Container</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Initials · 2xs / xs / sm</td><td>Font</td><td>${tk('--bt-text-xs-medium')}</td><td>500 · 12px / 16px</td></tr>
          <tr><td>Initials · md / lg / xl</td><td>Font</td><td>${tk('--bt-text-sm-medium')}</td><td>500 · 14px / 16px</td></tr>
          <tr><td>Icon</td><td>Size</td><td>—</td><td>24 × 24px</td></tr>
        </tbody>
      </table>

      <h2 id="Themes">Themes</h2>
      <table class="token-table">
        <thead><tr><th>Theme</th><th>Initials</th><th>Icon</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Default</span></td>
            <td>${avatarHtml('md', 'default', 'initials')}</td>
            <td>${avatarHtml('md', 'default', 'icon')}</td>
            <td>Açık gri arka plan, koyu metin/soluk ikon. Genel veya atanmamış bağlamlar için.</td>
          </tr>
          <tr>
            <td><span class="token-name">Brand</span></td>
            <td>${avatarHtml('md', 'brand', 'initials')}</td>
            <td>${avatarHtml('md', 'brand', 'icon')}</td>
            <td>Marka mavisi arka plan, beyaz metin/ikon. Tanımlanmış veya aktif kullanıcılar için.</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container · Default</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Container · Brand</td><td>Background</td><td>${tk('--bt-surface-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Initials · Default</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Initials · Brand</td><td>Color</td><td>${tk('--bt-text-primary-inverted')}</td><td>#ffffff</td></tr>
          <tr><td>Icon · Default</td><td>Fill</td><td>${tk('--bt-icon-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Icon · Brand</td><td>Fill</td><td>${tk('--bt-icon-primary-inverted')}</td><td>#ffffff</td></tr>
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Dimension</th><th>Default</th><th>Brand</th></tr></thead>
        <tbody>
          ${AVATAR_SIZE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.key}</span></td>
            <td>${_avatarSizePxMap[s.key]}px</td>
            <td><div style="display:flex;gap:8px;">${avatarHtml(s.key, 'default', 'initials')}${avatarHtml(s.key, 'default', 'icon')}</div></td>
            <td><div style="display:flex;gap:8px;">${avatarHtml(s.key, 'brand', 'initials')}${avatarHtml(s.key, 'brand', 'icon')}</div></td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          ${AVATAR_SIZE_VARIANTS.map(s => `
          <tr><td>Container · ${s.key}</td><td>Width / Height</td><td>${tk(_avatarSizeTokenMap[s.key])}</td><td>${_avatarSizePxMap[s.key]} × ${_avatarSizePxMap[s.key]}px</td></tr>`).join('')}
        </tbody>
      </table>
    `};
  },
};

// ── Accordion ─────────────────────────────────────────────────
// Figma node 605:30055 — 2 varyant (Basic/Bordered) × 2 içerik tipi
// (Chevron/Plus) × state (Default/Hover/Active/Focused/Disabled).
// Tamamen interaktif: header'a tıklayınca gerçekten açılıp kapanır
// (btAccToggle). İkon her zaman "kapalı" glyph'iyle (chevron-down / plus)
// render edilir — "açık" görünümü ayrı bir SVG değil, CSS transform:rotate
// ile üretilir (chevron 180°→chevron-up, plus 45°→×), bu sayede hem daha
// az kod hem de smooth bir dönüş animasyonu oluyor. Content her zaman
// DOM'da durur, .is-open class'ıyla grid-template-rows 0fr↔1fr arası
// animasyonlanır (bkz. styles.css) — [hidden] KULLANILMIYOR çünkü
// display:none transition'ı engeller.

const _accIconChevronDown = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
const _accIconPlus        = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
// Figma'nın Left Control placeholder ikonu ("Icon/placeholder") — lucide "scan",
// asset sunucusundan gerçek path doğrulanarak birebir alındı.
const _accIconScan        = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;

function btAccIcon(iconType) {
  return iconType === 'plus' ? _accIconPlus : _accIconChevronDown;
}

// Global toggle — gerçek DOM manipülasyonu, tam interaktif (Upload/Split Button ile aynı desen)
window.btAccToggle = function(btn) {
  if (btn.disabled) return;
  const willOpen = !btn.classList.contains('is-active');
  btn.classList.toggle('is-active', willOpen);
  btn.setAttribute('aria-expanded', String(willOpen));
  const content = btn.nextElementSibling;
  if (content && content.classList.contains('bt-accordion__content')) {
    content.classList.toggle('is-open', willOpen);
  }
};

const ACC_VARIANT_OPTS = [
  { key: 'basic',    label: 'Basic' },
  { key: 'bordered', label: 'Bordered' },
];
const ACC_ICON_OPTS = [
  { key: 'chevron', label: 'Chevron' },
  { key: 'plus',    label: 'Plus' },
];
const ACC_STATE_OPTS = [
  { key: 'default',  label: 'Default' },
  { key: 'hover',    label: 'Hover' },
  { key: 'active',   label: 'Active' },
  { key: 'focused',  label: 'Focused' },
  { key: 'disabled', label: 'Disabled' },
];
// Figma'daki AccordionBasic/Bordered component'lerinin showDescription ve
// showLeftControl prop'ları — proje genelindeki TBX_BOOL_OPTS (Yes/No)
// konvansiyonuyla tutarlı olsun diye aynısı yeniden kullanılıyor.
const ACC_DESC_OPTS = TBX_BOOL_OPTS;
const ACC_LEFT_OPTS = TBX_BOOL_OPTS;

// Tek bir header (+ opsiyonel content) bloğu üretir. state 'hover'/'focused'
// için CSS'te is-hover/is-focused class'ı zorlanır (Figma'daki statik state
// önizlemesi için) — buton yine de tıklanabilir/gerçek kalır.
function accHeaderHtml({ title = 'Title Text Here', desc = 'Description', iconType = 'chevron', state = 'default', content = null, showLeftIcon = false }) {
  const isActive   = state === 'active';
  const isDisabled = state === 'disabled';
  const cls = ['bt-accordion__header'];
  if (isActive)             cls.push('is-active');
  if (state === 'hover')    cls.push('is-hover');
  if (state === 'focused')  cls.push('is-focused');
  const dis      = isDisabled ? ' disabled' : '';
  const descHtml = desc ? `<span class="bt-accordion__desc">${desc}</span>` : '';
  const leftHtml = showLeftIcon ? `<span class="bt-accordion__control bt-accordion__control--left">${_accIconScan}</span>\n  ` : '';
  const contentHtml = content !== null
    ? `\n<div class="bt-accordion__content${isActive ? ' is-open' : ''}">
  <div class="bt-accordion__content-inner"><div class="bt-accordion__content-pad">${content}</div></div>
</div>`
    : '';
  return `<button class="${cls.join(' ')}" type="button" data-icon-type="${iconType}" aria-expanded="${isActive}"${dis} onclick="btAccToggle(this)">
  ${leftHtml}<span class="bt-accordion__body">
    <span class="bt-accordion__title">${title}</span>
    ${descHtml}
  </span>
  <span class="bt-accordion__control bt-accordion__control--right">${btAccIcon(iconType)}</span>
</button>${contentHtml}`;
}

function accGroupHtml(variant, items) {
  return `<div class="bt-accordion bt-accordion--${variant}">
  ${items.map(it => accHeaderHtml(it)).join('\n  ')}
</div>`;
}

const _accContentText = 'This is the content displayed when the accordion section is expanded. It can contain additional details, descriptions, form elements, or any other information relevant to the selected section.';

// TextBox bileşeninin md/readonly halini yeniden kullanarak 2x2 (2 yatay x 2 dikey) grid — Accordion içeriğinde form-elemanı örneği.
function _accTbxCell() {
  return `<div class="${_tbxCls('readonly', 'md')}">
        <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span></div>
        <div class="bt-tbx__input">${_tbxInputInner('readonly')}</div>
      </div>`;
}
function accTbxGridHtml() {
  return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--bt-space-2xl, 24px);margin-top:var(--bt-space-md, 8px);">
      ${_accTbxCell()}${_accTbxCell()}${_accTbxCell()}${_accTbxCell()}
    </div>`;
}
const _accContentWithGrid = `${_accContentText}${accTbxGridHtml()}`;

// Figma'daki "Accordion Basic/Bordered With Content" örneğiyle birebir aynı
// 4 item'lık grup (3. item açık) — playground'un variant seçici (Basic/Bordered)
// doğrudan bu örneği gösterir, ayrı bir "Show Example" butonuna gerek kalmaz.
function accExampleItems(iconType, showDesc, showLeftIcon) {
  const desc = showDesc ? 'Description' : '';
  return [
    { title: 'Title Text Here', desc, iconType, showLeftIcon, content: _accContentWithGrid },
    { title: 'Title Text Here', desc, iconType, showLeftIcon, content: _accContentWithGrid },
    { title: 'Title Text Here', desc, iconType, showLeftIcon, state: 'active', content: _accContentWithGrid },
    { title: 'Title Text Here', desc, iconType, showLeftIcon, content: _accContentWithGrid },
  ];
}

function accPreview(variant, props) {
  const iconType     = (props && props.icon) || 'chevron';
  const showDesc     = (props && props.desc) !== 'off';
  const showLeftIcon = (props && props.left) !== 'off';
  return `<div style="max-width:440px;width:100%;margin:0 auto;">
  ${accGroupHtml(variant, accExampleItems(iconType, showDesc, showLeftIcon))}
</div>`;
}

function accCode(variant, props) {
  const iconType     = (props && props.icon) || 'chevron';
  const showDesc     = (props && props.desc) !== 'off';
  const showLeftIcon = (props && props.left) !== 'off';
  return accGroupHtml(variant, accExampleItems(iconType, showDesc, showLeftIcon));
}

function accCss(variant, props) {
  const isBordered = variant === 'bordered';
  const p = (k, v) => `  ${k}: ${v};`;
  const lines = [];

  lines.push(`/* Accordion · ${isBordered ? 'Bordered' : 'Basic'} */`, '');
  lines.push('.bt-accordion { width: 100%; }');
  if (isBordered) {
    lines.push('', '.bt-accordion--bordered {');
    lines.push(p('border', '1px solid var(--bt-border-primary-default)  /* #d4d4d4 */'));
    lines.push(p('border-radius', 'var(--bt-radius-md)  /* 6px */'));
    lines.push(p('overflow', 'hidden'));
    lines.push('}');
  }
  lines.push('', '.bt-accordion__header {');
  lines.push(p('display', 'flex'));
  lines.push(p('align-items', 'flex-start'));
  lines.push(p('gap', 'var(--bt-space-xs)  /* 4px */'));
  lines.push(p('padding', 'var(--bt-space-md) var(--bt-space-xl)  /* 8px dikey, 12px yatay */'));
  lines.push(p('background', 'var(--bt-base-default)  /* #ffffff */'));
  lines.push(p('border-bottom', '1px solid var(--bt-border-primary-default)  /* #d4d4d4 */'));
  lines.push('}');
  lines.push('/* Açıkken (is-active) veya son elemansa (:last-child) border-bottom kalkar — bkz. design.md */');
  lines.push('.bt-accordion__header:hover:not(:disabled) .bt-accordion__title {');
  lines.push(p('text-decoration', 'underline'));
  lines.push('}');
  lines.push('.bt-accordion__header:focus-visible {');
  lines.push(p('box-shadow', '0 0 0 3px rgba(212,212,212,0.5)  /* Focus Ring/neutral */'));
  lines.push('}');
  if (isBordered) {
    lines.push('.bt-accordion--bordered .bt-accordion__header:hover:not(:disabled) {');
    lines.push(p('box-shadow', '0 0 0 3px rgba(212,212,212,0.5)'));
    lines.push('}');
  }
  lines.push('', '.bt-accordion__control--right svg {');
  lines.push(p('transition', 'transform 200ms ease  /* açıkken 180°(chevron)/45°(plus) döner — ayrı bir "açık" SVG yok */'));
  lines.push('}');
  lines.push('', '.bt-accordion__title {');
  lines.push(p('font', 'var(--bt-title-sm-medium)  /* 500 14px/16px */'));
  lines.push(p('color', 'var(--bt-text-primary-default)  /* #1a1a1a */'));
  lines.push('}');
  lines.push('.bt-accordion__desc {');
  lines.push(p('font', 'var(--bt-text-xs-regular)  /* 400 12px/16px */'));
  lines.push(p('color', 'var(--bt-text-primary-emphasis)  /* #727272 */'));
  lines.push('}');
  lines.push('.bt-accordion__header:disabled .bt-accordion__title,');
  lines.push('.bt-accordion__header:disabled .bt-accordion__desc,');
  lines.push('.bt-accordion__header:disabled .bt-accordion__control--right {');
  lines.push(p('color', 'var(--bt-text-primary-muted)  /* #a3a3a3 */'));
  lines.push('}');
  lines.push('', '.bt-accordion__content {');
  lines.push(p('display', 'grid'));
  lines.push(p('grid-template-rows', '0fr  /* .is-open → 1fr, smooth aç/kapa animasyonu */'));
  lines.push(p('transition', 'grid-template-rows 250ms ease'));
  lines.push(p('border-bottom', '1px solid var(--bt-border-primary-default)  /* #d4d4d4 */'));
  lines.push('}');
  lines.push('.bt-accordion__content-inner { overflow: hidden; }  /* grid animasyonu için zorunlu */');
  lines.push('.bt-accordion__content-pad {');
  lines.push(p('padding', 'var(--bt-space-xl)  /* 12px, dört yönde de */'));
  lines.push(p('font', 'var(--bt-text-xs-regular)  /* 400 12px/16px */'));
  lines.push(p('color', 'var(--bt-text-primary-default)  /* #1a1a1a */'));
  lines.push('}');

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/accordion'] = {
  tabs: ['Overview', 'CSS Properties', 'Usage'],
  toc:  ['Types', 'States', 'Icon Types'],
  render(tab) {
    const title = 'Accordion';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Accordion bileşeni için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Bordered container</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Bordered container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Header</td><td>Background</td><td>${tk('--bt-base-default')}</td><td>#ffffff</td></tr>
          <tr><td>Header</td><td>Padding (dikey / yatay)</td><td>${tk('--bt-space-md')} / ${tk('--bt-space-xl')}</td><td>8px / 12px</td></tr>
          <tr><td>Header</td><td>Icon–body gap</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
          <tr><td>Header · Hover</td><td>Title text-decoration</td><td>—</td><td>underline</td></tr>
          <tr><td>Header / Content divider</td><td>Border bottom</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Header · Focus / Bordered Hover</td><td>Ring</td><td>${tk('Focus Ring/neutral')}</td><td>0 0 0 3px rgba(212,212,212,.5)</td></tr>
          <tr><td>Right icon · Active</td><td>Rotation (chevron / plus)</td><td>—</td><td>180° / 45°, 200ms ease</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 · 14px/16px</td></tr>
          <tr><td>Title</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Description</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Title / Description / Icon · Disabled</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Left icon (opsiyonel)</td><td>Color</td><td>${tk('--bt-icon-primary-strong')}</td><td>#535353</td></tr>
          <tr><td>Content</td><td>Padding</td><td>${tk('--bt-space-xl')}</td><td>12px (dört yönde de)</td></tr>
          <tr><td>Content</td><td>Açılış/kapanış</td><td>—</td><td>grid-template-rows 0fr↔1fr, 250ms ease</td></tr>
          <tr><td>Content</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Content</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Accordion kullanım kılavuzu.</p>
      <h2>When to use Basic</h2>
      <ul>
        <li>Bağımsız, tek başına duran bölümler için — bir grup/kart yapısına ihtiyaç olmadığında</li>
        <li>Sayfa içinde her item'ın kendi divider'ıyla ayrıldığı, dış çerçevesiz bir liste görünümü istendiğinde</li>
      </ul>
      <h2>When to use Bordered</h2>
      <ul>
        <li>Birden fazla item'ın tek bir kart/grup olarak birlikte sunulması gerektiğinde</li>
        <li>Grubun dış sınırının (border + radius) görsel olarak vurgulanması istendiğinde</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Aynı grup içindeki tüm item'ları aynı varyantta (Basic ya da Bordered) ve aynı içerik tipinde (Chevron ya da Plus) tut</li>
        <li>Başlığı kısa ve tarayıcı-dostu tut; detayları content alanına bırak</li>
        <li>Bir seferde birden fazla item'ın açık kalmasına izin ver — kullanıcı birden fazla bölümü karşılaştırmak isteyebilir</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Chevron ve Plus ikonlarını aynı grup içinde karıştırma</li>
        <li>Disabled item'a tıklanabilir gibi davranma — cursor ve renk zaten bunu iletiyor, ayrıca metinle tekrar etme</li>
        <li>Content alanına header'ın kendi border-bottom'ını manuel ekleme — açık header zaten bunu content'e bırakır</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-accordion-overview',
        variants: ACC_VARIANT_OPTS,
        props: [
          { key: 'icon', label: 'Icon',        options: ACC_ICON_OPTS, default: 'chevron' },
          { key: 'desc', label: 'Description', options: ACC_DESC_OPTS, default: 'on'    },
          { key: 'left', label: 'Left Icon',   options: ACC_LEFT_OPTS, default: 'off'     },
        ],
        preview: (variant, p) => accPreview(variant, p),
        code:    (variant, p) => accCode(variant, p),
        css:     (variant, p) => accCss(variant, p),
      })}

      <p class="page-desc">Accordion, içeriği bölümler halinde gösterip gizlemeyi sağlar. İki varyant (<strong>Basic</strong> / <strong>Bordered</strong>), iki ikon tipi (<strong>Chevron</strong> / <strong>Plus</strong>) destekler. Başlığa tıklamak bölümü gerçekten açar/kapatır. Yukarıdaki örnek Figma'daki "With Content" düzenini birebir yansıtır (3. item açık) — tam interaktif.</p>

      <h2 id="Types">Types</h2>
      <table class="token-table">
        <thead><tr><th>Type</th><th>Preview</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Basic</span></td>
            <td style="padding:8px 0;"><div style="max-width:320px;">${accGroupHtml('basic', [{ content: _accContentText }])}</div></td>
            <td>Dış çerçevesi yok; her item kendi alt border'ıyla ayrılır.</td>
          </tr>
          <tr>
            <td><span class="token-name">Bordered</span></td>
            <td style="padding:8px 0;"><div style="max-width:320px;">${accGroupHtml('bordered', [{ content: _accContentText }])}</div></td>
            <td>Tek bir kart gibi border + radius ile çevrelenir.</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container · Basic</td><td>Item divider</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Container · Bordered</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Container · Bordered</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Header</td><td>Background</td><td>${tk('--bt-base-default')}</td><td>#ffffff</td></tr>
          <tr><td>Header</td><td>Padding (dikey)</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Header</td><td>Padding (yatay)</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 · 14px / 16px</td></tr>
          <tr><td>Title</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>Description</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Content</td><td>Padding</td><td>${tk('--bt-space-xl')}</td><td>12px (dört yönde)</td></tr>
          <tr><td>Content</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>Content</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Content</td><td>Açılış animasyonu</td><td>—</td><td>grid-template-rows 0fr → 1fr, 250ms ease</td></tr>
        </tbody>
      </table>

      <h2 id="States">States</h2>
      <table class="token-table" style="margin-bottom:24px;">
        <thead><tr><th>State</th><th>Basic</th><th>Bordered</th></tr></thead>
        <tbody>
          ${ACC_STATE_OPTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:8px 0;"><div style="max-width:280px;">${accHeaderHtml({ state: s.key, content: s.key === 'active' ? _accContentText : null })}</div></td>
            <td style="padding:8px 0;"><div class="bt-accordion bt-accordion--bordered" style="max-width:280px;">${accHeaderHtml({ state: s.key, content: s.key === 'active' ? _accContentText : null })}</div></td>
          </tr>`).join('')}
        </tbody>
      </table>
      <p class="page-desc" style="margin-top:-8px;">Bordered'ın <strong>Hover</strong>'ı Focused ile aynı nötr ring'i kullanır — Figma'da Basic için ayrı bir Hover varyantı tanımlı değil.</p>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Header · Hover</td><td>Title text-decoration</td><td>—</td><td>underline</td></tr>
          <tr><td>Header · Focused / Bordered Hover</td><td>Focus ring</td><td>${tk('Focus Ring/neutral')}</td><td>0 0 0 3px rgba(212,212,212,.25)</td></tr>
          <tr><td>Title / Description / Icon · Disabled</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
        </tbody>
      </table>

      <h2 id="Icon Types">Icon Types</h2>
      <table class="token-table">
        <thead><tr><th>Type</th><th>Default</th><th>Active</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Chevron</span></td>
            <td style="padding:8px 0;"><div style="max-width:280px;">${accHeaderHtml({ iconType: 'chevron' })}</div></td>
            <td style="padding:8px 0;"><div style="max-width:280px;">${accHeaderHtml({ iconType: 'chevron', state: 'active', content: _accContentText })}</div></td>
          </tr>
          <tr>
            <td><span class="token-name">Plus</span></td>
            <td style="padding:8px 0;"><div style="max-width:280px;">${accHeaderHtml({ iconType: 'plus' })}</div></td>
            <td style="padding:8px 0;"><div style="max-width:280px;">${accHeaderHtml({ iconType: 'plus', state: 'active', content: _accContentText })}</div></td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Icon · Chevron · Active</td><td>Rotation</td><td>—</td><td>180°, 200ms ease</td></tr>
          <tr><td>Icon · Plus · Active</td><td>Rotation (→ ×)</td><td>—</td><td>45°, 200ms ease</td></tr>
          <tr><td>Icon area</td><td>Gap (icon ↔ title)</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
          <tr><td>Left icon (opsiyonel)</td><td>Color</td><td>${tk('--bt-icon-primary-strong')}</td><td>#535353</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Upload ─────────────────────────────────────────────────

const _uplIconFile        = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`;
const _uplIconX           = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
const _uplIconArrowUp     = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 11 7-7 7 7"/><path d="M12 4v13"/><path d="M19 21H5"/></svg>`;
const _uplIconCircleCheck = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
const _uplIconCircleAlert = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
const _uplIconRotateCw    = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>`;
const _uplIconPlus        = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;

// External Drop Zone'un varsayılan (2 satırlı) durum metni — Figma'da (586:3954) "Upload Status"
// kendisi row-flex, metin ayrı bir column-flex bloğunda (586:3955); .bt-edz__status-text bunu karşılar.
const _edzDefaultStatusHtml = `<div class="bt-edz__status-text"><p>Drag and drop files here to upload JPG, PNG, DOC, TXT, XSLX, PDF</p><p>( Max. 1KB - 20MB )</p></div>`;

// ── Upload: global interactivity functions ──────────────────

function btUplFormatSize(bytes) {
  if (bytes < 1024)        return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function btUplSetDzState(zone, state) {
  // External Drop Zone: Standart Upload'daki bt-dropzone--{state} rengi ile aynı eşleme
  if (zone.classList.contains('bt-edz')) {
    const statusEl = zone.querySelector('.bt-edz__status');
    zone.className = 'bt-edz' + (state !== 'default' ? ' bt-edz--' + state : '');
    if (state === 'uploading') {
      statusEl.innerHTML = `<span class="bt-edz__status-icon">${_uplIconArrowUp}</span><span>Uploading Files...</span>`;
    } else if (state === 'completed') {
      statusEl.innerHTML = `<span class="bt-edz__status-icon">${_uplIconCircleCheck}</span><span>Upload Completed</span>`;
    } else if (state === 'failed') {
      statusEl.innerHTML = `<span class="bt-edz__status-icon">${_uplIconCircleAlert}</span><span>Upload Failed</span>`;
    } else {
      statusEl.innerHTML = _edzDefaultStatusHtml;
    }
    return;
  }
  const statusEl = zone.querySelector('.bt-dropzone__status');
  zone.className = 'bt-dropzone' + (state !== 'default' ? ' bt-dropzone--' + state : '');
  if (state === 'uploading') {
    statusEl.innerHTML = `<span class="bt-dropzone__status-icon">${_uplIconArrowUp}</span><span>Uploading Files...</span>`;
  } else if (state === 'completed') {
    statusEl.innerHTML = `<span class="bt-dropzone__status-icon">${_uplIconCircleCheck}</span><span>Upload Completed</span>`;
  } else if (state === 'failed') {
    statusEl.innerHTML = `<span class="bt-dropzone__status-icon">${_uplIconCircleAlert}</span><span>Upload Failed</span>`;
  } else {
    statusEl.innerHTML = `<span>Drag and drop files here to upload</span>`;
  }
}

function btUplBuildFileRow(name, size) {
  const row = document.createElement('div');
  row.className = 'bt-upload-file';
  row.innerHTML = `
    <div class="bt-upload-file__content">
      <div class="bt-upload-file__icon">${_uplIconFile}</div>
      <div class="bt-upload-file__info">
        <span class="bt-upload-file__name">${name}</span>
        <span class="bt-upload-file__size">${size}</span>
      </div>
      <div class="bt-upload-file__controls">
        <span class="bt-upload-file__pct">%0</span>
        <button class="bt-upload-file__btn" onclick="btUplRemove(this)">${_uplIconX}</button>
      </div>
    </div>
    <div class="bt-upload-file__progress">
      <div class="bt-upload-file__progress-fill" style="width:0%"></div>
    </div>`;
  return row;
}

function btUplCompleteRow(row, success) {
  row.classList.add(success ? 'bt-upload-file--success' : 'bt-upload-file--failed');
  row.querySelector('.bt-upload-file__size').textContent =
    success ? 'File successfully uploaded' : 'File failed to upload';
  row.querySelector('.bt-upload-file__controls').innerHTML = success
    ? `<button class="bt-upload-file__btn" onclick="btUplRemove(this)">${_uplIconX}</button>`
    : `<button class="bt-upload-file__btn" onclick="btUplRetry(this)">${_uplIconRotateCw}</button>
       <button class="bt-upload-file__btn" onclick="btUplRemove(this)">${_uplIconX}</button>`;
  const bar = row.querySelector('.bt-upload-file__progress');
  if (bar) bar.remove();
}

function btUplStartUpload(upload, files) {
  if (!files.length) return;
  const dz       = upload.querySelector('.bt-dropzone, .bt-edz');
  const fileList = upload.querySelector('.bt-upload__files');
  btUplSetDzState(dz, 'uploading');
  upload.classList.add('bt-upload--multiple');

  let pending = files.length;

  files.forEach((file, idx) => {
    const row = btUplBuildFileRow(file.name, btUplFormatSize(file.size));
    fileList.appendChild(row);
    const bar    = row.querySelector('.bt-upload-file__progress-fill');
    const pctEl  = row.querySelector('.bt-upload-file__pct');
    let progress = 0;

    setTimeout(() => {
      const iv = setInterval(() => {
        progress += Math.random() * 18 + 4;
        if (progress >= 100) {
          progress = 100;
          clearInterval(iv);
          const success = Math.random() > 0.25;
          btUplCompleteRow(row, success);
          pending--;
          if (pending === 0) {
            const hasFailed = !!fileList.querySelector('.bt-upload-file--failed');
            btUplSetDzState(dz, hasFailed ? 'failed' : 'completed');
          }
          return;
        }
        bar.style.width = progress + '%';
        pctEl.textContent = '%' + Math.round(progress);
      }, 160 + Math.random() * 80);
    }, idx * 250);
  });
}

function btUplRemove(btn) {
  const row    = btn.closest('.bt-upload-file');
  const upload = btn.closest('.bt-upload');
  row.remove();
  const fileList = upload.querySelector('.bt-upload__files');
  const dz       = upload.querySelector('.bt-dropzone, .bt-edz');
  if (!fileList.children.length) {
    upload.classList.remove('bt-upload--multiple');
    btUplSetDzState(dz, 'default');
  } else {
    const hasFailed  = !!fileList.querySelector('.bt-upload-file--failed');
    const hasUploading = !!fileList.querySelector('.bt-upload-file__progress');
    if (!hasUploading) btUplSetDzState(dz, hasFailed ? 'failed' : 'completed');
  }
}

function btUplRetry(btn) {
  const row    = btn.closest('.bt-upload-file');
  const upload = btn.closest('.bt-upload');
  const dz     = upload.querySelector('.bt-dropzone, .bt-edz');
  const name   = row.querySelector('.bt-upload-file__name').textContent;
  const newRow = btUplBuildFileRow(name, '—');
  row.replaceWith(newRow);
  const bar   = newRow.querySelector('.bt-upload-file__progress-fill');
  const pctEl = newRow.querySelector('.bt-upload-file__pct');
  let progress = 0;
  btUplSetDzState(dz, 'uploading');
  const iv = setInterval(() => {
    progress += Math.random() * 18 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(iv);
      const success = Math.random() > 0.15;
      btUplCompleteRow(newRow, success);
      const fileList = upload.querySelector('.bt-upload__files');
      const hasFailed    = !!fileList.querySelector('.bt-upload-file--failed');
      const hasUploading = !!fileList.querySelector('.bt-upload-file__progress');
      if (!hasUploading) btUplSetDzState(dz, hasFailed ? 'failed' : 'completed');
      return;
    }
    bar.style.width = progress + '%';
    pctEl.textContent = '%' + Math.round(progress);
  }, 160 + Math.random() * 80);
}

function btUplDrop(dz, event) {
  event.preventDefault();
  dz.classList.remove('bt-dropzone--dragover');
  btUplStartUpload(dz.closest('.bt-upload'), Array.from(event.dataTransfer.files));
}

const UPL_SEGMENT_VARIANTS = [
  { key: 'default',  label: 'Default'  },
  { key: 'single',   label: 'Single'   },
  { key: 'multiple', label: 'Multiple' },
];

const DZ_STATE_VARIANTS = [
  { key: 'default',   label: 'Default'         },
  { key: 'uploading', label: 'Uploading Files'  },
  { key: 'completed', label: 'Upload Completed' },
  { key: 'failed',    label: 'Upload Failed'    },
  { key: 'disabled',  label: 'Disabled'         },
];

// External Drop Zone'da Figma'da tanımlı 4 state — Disabled hidden frame olarak yok (Standart'tan farkı)
const EDZ_STATE_VARIANTS = [
  { key: 'default',   label: 'Default'         },
  { key: 'uploading', label: 'Uploading Files'  },
  { key: 'completed', label: 'Upload Completed' },
  { key: 'failed',    label: 'Upload Failed'    },
];

const UF_STATE_VARIANTS = [
  { key: 'uploading', label: 'Uploading'         },
  { key: 'success',   label: 'Upload Successful' },
  { key: 'failed',    label: 'Upload Failed'     },
];

function _dzHtml(dzState) {
  let statusHtml = '';
  if (dzState === 'uploading') {
    statusHtml = `<span class="bt-dropzone__status-icon">${_uplIconArrowUp}</span><span>Uploading Files...</span>`;
  } else if (dzState === 'completed') {
    statusHtml = `<span class="bt-dropzone__status-icon">${_uplIconCircleCheck}</span><span>Upload Completed</span>`;
  } else if (dzState === 'failed') {
    statusHtml = `<span class="bt-dropzone__status-icon">${_uplIconCircleAlert}</span><span>Upload Failed</span>`;
  } else {
    statusHtml = `<span>Drag and drop files here to upload</span>`;
  }
  const mod      = dzState !== 'default' ? ` bt-dropzone--${dzState}` : '';
  const disabled = dzState === 'disabled' ? ' disabled' : '';
  return `<div class="bt-dropzone${mod}">
  <div class="bt-dropzone__inner">
    <button class="bt-btn bt-btn--xs bt-btn--primary-ghost"${disabled}>Select Files</button>
    <div class="bt-dropzone__status">${statusHtml}</div>
  </div>
</div>`;
}

function _ufHtml(ufState) {
  const isUploading = ufState === 'uploading';
  const isSuccess   = ufState === 'success';
  const isFailed    = ufState === 'failed';
  const mod     = isSuccess ? ' bt-upload-file--success' : isFailed ? ' bt-upload-file--failed' : '';
  const subtext = isSuccess ? 'File successfully uploaded' : isFailed ? 'File failed to upload' : '225.68 KB';
  const pct     = isUploading ? `<span class="bt-upload-file__pct">%25</span>` : '';
  const retry   = isFailed ? `<button class="bt-upload-file__btn">${_uplIconRotateCw}</button>` : '';
  const remove  = `<button class="bt-upload-file__btn">${_uplIconX}</button>`;
  const bar     = isUploading ? `
  <div class="bt-upload-file__progress">
    <div class="bt-upload-file__progress-fill" style="width:25%"></div>
  </div>` : '';
  return `<div class="bt-upload-file${mod}">
  <div class="bt-upload-file__content">
    <div class="bt-upload-file__icon">${_uplIconFile}</div>
    <div class="bt-upload-file__info">
      <span class="bt-upload-file__name">Document.pdf</span>
      <span class="bt-upload-file__size">${subtext}</span>
    </div>
    <div class="bt-upload-file__controls">${pct}${retry}${remove}</div>
  </div>${bar}
</div>`;
}

function _uplCss(segment) {
  const p = (k, v) => `  ${k}: ${v};`;
  const lines = [];
  const isMultiple = segment === 'multiple';
  const isSingle   = segment === 'single';

  lines.push(`/* Upload · ${segment.charAt(0).toUpperCase() + segment.slice(1)} */`, '');

  lines.push('.bt-upload {');
  lines.push(p('display', 'flex'));
  lines.push(p('flex-direction', 'column'));
  lines.push(p('gap', 'var(--bt-space-xs)  /* 4px */'));
  lines.push(p('width', '100%'));
  lines.push('}');

  if (isMultiple) {
    lines.push('', '.bt-upload--multiple {');
    lines.push(p('gap', 'var(--bt-space-md)  /* 8px */'));
    lines.push('}');
  }

  lines.push('', '.bt-dropzone {');
  lines.push(p('display', 'flex'));
  lines.push(p('flex-direction', 'column'));
  lines.push(p('border', '1px dashed var(--bt-border-primary-default)  /* #d4d4d4 */'));
  lines.push(p('border-radius', 'var(--bt-radius-sm)  /* 4px */'));
  lines.push(p('background', 'var(--bt-surface-primary-subtle)  /* #f5f5f5 */'));
  lines.push(p('width', '100%'));
  lines.push('}');
  lines.push('.bt-dropzone__inner {');
  lines.push(p('display', 'flex'));
  lines.push(p('align-items', 'center'));
  lines.push(p('justify-content', 'center'));
  lines.push(p('gap', 'var(--bt-space-xs)  /* 4px */'));
  lines.push(p('padding', 'var(--bt-space-md)  /* 8px */'));
  lines.push('}');
  lines.push('/* Select Files → bt-btn bt-btn--xs bt-btn--primary-ghost */');
  lines.push('.bt-dropzone .bt-btn {');
  lines.push(p('text-decoration', 'underline'));
  lines.push('}');

  if (isMultiple) {
    lines.push('', '.bt-dropzone--uploading .bt-dropzone__status {');
    lines.push(p('color', 'var(--bt-text-brand-default)  /* #0d4e97 */'));
    lines.push('}');
  }

  if (isSingle || isMultiple) {
    lines.push('', '.bt-upload-file {');
    lines.push(p('display', 'flex'));
    lines.push(p('flex-direction', 'column'));
    lines.push(p('gap', 'var(--bt-space-xs)  /* 4px */'));
    lines.push(p('width', '100%'));
    lines.push('}');
    lines.push('.bt-upload-file__name {');
    lines.push(p('font', 'var(--bt-text-xs-regular)  /* 400 12px/16px */'));
    lines.push(p('color', 'var(--bt-text-primary-default)  /* #1a1a1a */'));
    lines.push('}');
    lines.push('.bt-upload-file__size {');
    lines.push(p('font', 'var(--bt-text-2xs-regular)  /* 400 10px/12px */'));
    lines.push(p('color', 'var(--bt-text-primary-emphasis)  /* #727272 */'));
    lines.push('}');
  }

  if (isSingle) {
    lines.push('', '.bt-upload-file--success .bt-upload-file__size {');
    lines.push(p('color', 'var(--bt-text-success-default)  /* #2d584b */'));
    lines.push('}');
  }

  if (isMultiple) {
    lines.push('', '.bt-upload-file--failed .bt-upload-file__size {');
    lines.push(p('color', 'var(--bt-text-error-default)  /* #b31d38 */'));
    lines.push('}');
    lines.push('', '.bt-upload-file__progress {');
    lines.push(p('height', '6px'));
    lines.push(p('background', 'var(--bt-surface-primary-muted)  /* #e6e6e6 */'));
    lines.push(p('border-radius', 'var(--bt-radius-sm)  /* 4px */'));
    lines.push('}');
    lines.push('.bt-upload-file__progress-fill {');
    lines.push(p('background', 'var(--bt-primary-default)  /* #0d4e97 */'));
    lines.push('}');
  }

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

// Interactive preview — Default variant shows fully functional upload
function _uplPreview(segment) {
  if (segment === 'default') {
    return `<div class="bt-upload" style="max-width:440px;margin:0 auto;">
  <input type="file" multiple class="bt-upload__input" style="display:none"
    onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
  <div class="bt-dropzone"
    ondragover="event.preventDefault(); this.classList.add('bt-dropzone--dragover')"
    ondragleave="this.classList.remove('bt-dropzone--dragover')"
    ondrop="btUplDrop(this, event)">
    <div class="bt-dropzone__inner">
      <button class="bt-btn bt-btn--xs bt-btn--primary-ghost"
        onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">Select Files</button>
      <div class="bt-dropzone__status"><span>Drag and drop files here to upload</span></div>
    </div>
  </div>
  <div class="bt-upload__files"></div>
</div>`;
  }
  // Single / Multiple — static reference previews
  const isMultiple = segment === 'multiple';
  const isSingle   = segment === 'single';
  const mulClass   = isMultiple ? ' bt-upload--multiple' : '';
  const dzState    = isMultiple ? 'uploading' : 'default';
  const files = isSingle
    ? _ufHtml('success')
    : isMultiple
      ? [_ufHtml('failed'), _ufHtml('success'), _ufHtml('uploading')].join('\n')
      : '';
  return `<div class="bt-upload${mulClass}" style="max-width:440px;margin:0 auto;">
  ${_dzHtml(dzState)}${files ? '\n  ' + files.split('\n').join('\n  ') : ''}
</div>`;
}

// Static code output (copy-paste reference, no JS)
function _uplCode(segment) {
  const isMultiple = segment === 'multiple';
  const isSingle   = segment === 'single';
  if (segment === 'default') {
    return `<div class="bt-upload">
  <input type="file" multiple class="bt-upload__input" style="display:none"
    onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
  <div class="bt-dropzone"
    ondragover="event.preventDefault()"
    ondrop="btUplDrop(this, event)">
    <div class="bt-dropzone__inner">
      <button class="bt-btn bt-btn--xs bt-btn--primary-ghost"
        onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">Select Files</button>
      <div class="bt-dropzone__status">
        <span>Drag and drop files here to upload</span>
      </div>
    </div>
  </div>
  <div class="bt-upload__files"></div>
</div>`;
  }
  const mulClass = isMultiple ? ' bt-upload--multiple' : '';
  const dzState  = isMultiple ? 'uploading' : 'default';
  const files = isSingle
    ? _ufHtml('success')
    : isMultiple
      ? [_ufHtml('failed'), _ufHtml('success'), _ufHtml('uploading')].join('\n')
      : '';
  return `<div class="bt-upload${mulClass}">
  ${_dzHtml(dzState)}${files ? '\n  ' + files.split('\n').join('\n  ') : ''}
</div>`;
}

// ── Upload: External Drop Zone (2. tip) ──────────────────────
// Aynı Upload File yapı taşlarını (.bt-upload-file, _ufHtml) reuse eder;
// yalnızca dropzone kutusunun kendisi farklıdır (.bt-edz) — dikey stack,
// gerçek design system Button'u (bt-btn--sm bt-btn--base-outline) ile.
// Uploading/Completed/Failed durum metni rengi Standart Upload'daki
// bt-dropzone--{state} ile aynı token eşlemesini kullanır (kullanıcı kararı —
// Figma'nın node 586:20876 hidden state frame'lerinde metin nötr görünüyordu,
// ama tutarlılık için Standart Upload ile aynı renklendirme tercih edildi).

const UPL_TYPES = [
  { key: 'standart', label: 'Standart Upload'    },
  { key: 'external', label: 'External Drop Zone' },
];

function _edzHtml(state) {
  let statusHtml = '';
  if (state === 'uploading') {
    statusHtml = `<span class="bt-edz__status-icon">${_uplIconArrowUp}</span><span>Uploading Files...</span>`;
  } else if (state === 'completed') {
    statusHtml = `<span class="bt-edz__status-icon">${_uplIconCircleCheck}</span><span>Upload Completed</span>`;
  } else if (state === 'failed') {
    statusHtml = `<span class="bt-edz__status-icon">${_uplIconCircleAlert}</span><span>Upload Failed</span>`;
  } else {
    statusHtml = _edzDefaultStatusHtml;
  }
  const mod = state !== 'default' ? ` bt-edz--${state}` : '';
  return `<div class="bt-edz${mod}">
  <button class="bt-btn bt-btn--sm bt-btn--base-outline">${_uplIconPlus}Select Files</button>
  <div class="bt-edz__status">${statusHtml}</div>
</div>`;
}

function _edzCss(segment) {
  const p = (k, v) => `  ${k}: ${v};`;
  const lines = [];
  const isMultiple = segment === 'multiple';
  const isSingle   = segment === 'single';

  lines.push(`/* External Drop Zone · ${segment.charAt(0).toUpperCase() + segment.slice(1)} */`, '');

  lines.push('.bt-upload.bt-upload--external {');
  lines.push(p('display', 'flex'));
  lines.push(p('flex-direction', 'column'));
  lines.push(p('gap', 'var(--bt-space-md)  /* 8px — segment fark etmeksizin sabit */'));
  lines.push(p('width', '100%'));
  lines.push('}');

  lines.push('', '.bt-edz {');
  lines.push(p('display', 'flex'));
  lines.push(p('flex-direction', 'column'));
  lines.push(p('align-items', 'center'));
  lines.push(p('justify-content', 'center'));
  lines.push(p('gap', 'var(--bt-space-lg)  /* 10px */'));
  lines.push(p('padding', 'var(--bt-space-md)  /* 8px */'));
  lines.push(p('border', '1px dashed var(--bt-border-primary-default)  /* #d4d4d4 */'));
  lines.push(p('border-radius', 'var(--bt-radius-sm)  /* 4px */'));
  lines.push(p('background', 'var(--bt-surface-primary-subtle)  /* #f5f5f5 */'));
  lines.push('}');
  lines.push('/* Select Files → bt-btn bt-btn--sm bt-btn--base-outline (gerçek Button component) */');
  lines.push('.bt-edz__status {');
  lines.push(p('display', 'flex'));
  lines.push(p('align-items', 'center'));
  lines.push(p('justify-content', 'center'));
  lines.push(p('gap', 'var(--bt-space-xs)  /* 4px */'));
  lines.push(p('font', 'var(--bt-text-xs-regular)  /* 400 12px/16px */'));
  lines.push(p('color', 'var(--bt-text-primary-default)  /* #1a1a1a — Default state */'));
  lines.push(p('text-align', 'center'));
  lines.push('}');
  lines.push('/* Uploading/Completed/Failed rengi — bkz. yukarıdaki "External Drop Zone States" tablosu */');
  lines.push('.bt-edz--uploading .bt-edz__status { color: var(--bt-text-brand-default); }    /* #0d4e97 */');
  lines.push('.bt-edz--completed .bt-edz__status { color: var(--bt-text-success-default); }  /* #2d584b */');
  lines.push('.bt-edz--failed    .bt-edz__status { color: var(--bt-text-error-default); }    /* #b31d38 */');

  if (isSingle || isMultiple) {
    lines.push('', '.bt-upload-file {');
    lines.push(p('display', 'flex'));
    lines.push(p('flex-direction', 'column'));
    lines.push(p('gap', 'var(--bt-space-xs)  /* 4px */'));
    lines.push(p('width', '100%'));
    lines.push('}');
    lines.push('/* Dosya satırları Standart Upload ile birebir aynı — bkz. .bt-upload-file */');
  }

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

// Interactive preview — Default segment tam fonksiyonel upload
function _edzPreview(segment) {
  if (segment === 'default') {
    return `<div class="bt-upload bt-upload--external" style="max-width:440px;margin:0 auto;">
  <input type="file" multiple class="bt-upload__input" style="display:none"
    onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
  <div class="bt-edz"
    ondragover="event.preventDefault(); this.classList.add('bt-edz--dragover')"
    ondragleave="this.classList.remove('bt-edz--dragover')"
    ondrop="btUplDrop(this, event)">
    <button class="bt-btn bt-btn--sm bt-btn--base-outline"
      onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">${_uplIconPlus}Select Files</button>
    <div class="bt-edz__status">${_edzDefaultStatusHtml}</div>
  </div>
  <div class="bt-upload__files"></div>
</div>`;
  }
  // Single / Multiple — static reference previews (Standart Upload ile aynı desen)
  const isMultiple = segment === 'multiple';
  const isSingle   = segment === 'single';
  const files = isSingle
    ? _ufHtml('success')
    : isMultiple
      ? [_ufHtml('failed'), _ufHtml('success'), _ufHtml('uploading')].join('\n')
      : '';
  return `<div class="bt-upload bt-upload--external" style="max-width:440px;margin:0 auto;">
  ${_edzHtml('default')}${files ? '\n  ' + files.split('\n').join('\n  ') : ''}
</div>`;
}

// Static code output (copy-paste reference, no JS)
function _edzCode(segment) {
  const isMultiple = segment === 'multiple';
  const isSingle   = segment === 'single';
  if (segment === 'default') {
    return `<div class="bt-upload bt-upload--external">
  <input type="file" multiple class="bt-upload__input" style="display:none"
    onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
  <div class="bt-edz"
    ondragover="event.preventDefault()"
    ondrop="btUplDrop(this, event)">
    <button class="bt-btn bt-btn--sm bt-btn--base-outline"
      onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">
      <!-- plus icon 16×16 -->
      Select Files
    </button>
    <div class="bt-edz__status">
      <div class="bt-edz__status-text">
        <p>Drag and drop files here to upload JPG, PNG, DOC, TXT, XSLX, PDF</p>
        <p>( Max. 1KB - 20MB )</p>
      </div>
    </div>
  </div>
  <div class="bt-upload__files"></div>
</div>`;
  }
  const files = isSingle
    ? _ufHtml('success')
    : isMultiple
      ? [_ufHtml('failed'), _ufHtml('success'), _ufHtml('uploading')].join('\n')
      : '';
  return `<div class="bt-upload bt-upload--external">
  ${_edzHtml('default')}${files ? '\n  ' + files.split('\n').join('\n  ') : ''}
</div>`;
}

// ── Unified dispatcher ────────────────────────────────────────────
// `type` Standart Upload / External Drop Zone seçer; `props.segment`
// (default|single|multiple) her iki tipte de aynı anlama gelir.
function uploadPreview(type, props) {
  const segment = (props && props.segment) || 'default';
  return type === 'external' ? _edzPreview(segment) : _uplPreview(segment);
}
function uploadCode(type, props) {
  const segment = (props && props.segment) || 'default';
  return type === 'external' ? _edzCode(segment) : _uplCode(segment);
}
function uploadCss(type, props) {
  const segment = (props && props.segment) || 'default';
  return type === 'external' ? _edzCss(segment) : _uplCss(segment);
}

PAGES_WEB['components/upload'] = {
  tabs: ['Overview', 'CSS Properties', 'Usage'],
  toc:  ['Drop Zone States', 'External Drop Zone States', 'Upload File States'],
  render(tab) {
    const title = 'Upload';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Upload bileşeni için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <h2>Drop Zone</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Drop Zone</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Border (dashed)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Border radius</td><td>—</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>Padding</td><td>—</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td rowspan="2">Select Files link</td><td>Color (Default)</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Color (Disabled)</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Status text (Default)</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Status text (Uploading)</td><td>Color</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Status text (Completed)</td><td>Color</td><td>${tk('--bt-text-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>Status text (Failed)</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>
      <h2>External Drop Zone</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Drop Zone</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Border (dashed)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Border radius</td><td>—</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>Padding</td><td>—</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Gap (button ↔ status)</td><td>—</td><td>${tk('--bt-space-lg')}</td><td>10px</td></tr>
          <tr><td>Select Files button</td><td>—</td><td colspan="2">Gerçek Button component — <code>bt-btn bt-btn--sm bt-btn--base-outline</code></td></tr>
          <tr><td>Status text</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Status text (Default)</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Status text (Uploading)</td><td>Color</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Status text (Completed)</td><td>Color</td><td>${tk('--bt-text-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>Status text (Failed)</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>
      <h2>Upload File</h2>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">File name</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td rowspan="3">File size / status</td><td>Font</td><td>${tk('--bt-text-2xs-regular')}</td><td>400 · 10px/12px</td></tr>
          <tr><td>Color (Default)</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Color (Success)</td><td>${tk('--bt-text-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>File status (Failed)</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>Progress %</td><td>Color</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Progress bar (track)</td><td>Background</td><td>${tk('--bt-surface-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Progress bar (fill)</td><td>Background</td><td>${tk('--bt-primary-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Icon button hover</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Upload bileşeni kullanım kılavuzu.</p>
      <h2>When to use Standart Upload</h2>
      <ul>
        <li>Formların bir parçası olarak, diğer alanların yanında kompakt bir dosya yükleme kontrolü gerektiğinde</li>
        <li>"Select Files" ile durum metninin tek satırda yan yana durması yeterli olduğunda</li>
      </ul>
      <h2>When to use External Drop Zone</h2>
      <ul>
        <li>Dosya yüklemenin sayfanın/panelin tek başına odağı olduğu, daha vurgulu bir drop alanı gerektiğinde</li>
        <li>Kabul edilen formatlar ve boyut sınırı gibi daha uzun açıklama metninin iki satıra yayılması gerektiğinde</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li>Drop zone'a kabul edilen dosya formatlarını ve maksimum boyutu belirt</li>
        <li>Upload başladığında DropZone durumunu "Uploading Files" olarak güncelle</li>
        <li>Hatalı yüklemelerde kullanıcıya retry butonu sun</li>
        <li>Çoklu dosya yüklemelerinde her dosyanın durumunu ayrı ayrı göster</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Upload tamamlanmadan sayfayı uyarı vermeden yönlendirme yapma</li>
        <li>Dosya adı olmadan sadece progress bar gösterme</li>
        <li>Hata mesajını yalnızca renk değişimiyle ifade etme — açıklayıcı metin ekle</li>
        <li>External Drop Zone'un durum metni rengini Standart Upload'unkinden farklılaştırma — ikisi de aynı brand/success/error token eşlemesini kullanır</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-upl-overview',
        variants: UPL_TYPES,
        props: [{ key: 'segment', label: 'Segment', options: UPL_SEGMENT_VARIANTS, default: 'default' }],
        preview: uploadPreview,
        code:    uploadCode,
        css:     uploadCss,
      })}

      <p class="page-desc">Dosya yükleme bileşeni. İki tip destekler — <strong>Standart Upload</strong> (tek satır dropzone) ve <strong>External Drop Zone</strong> (dikey, vurgulu drop kutusu) — ikisi de aynı Default / Single / Multiple segment modlarını ve Upload File yapı taşını paylaşır.</p>

      <h2 id="Drop Zone States">Drop Zone States (Standart Upload)</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Preview</th></tr></thead>
        <tbody>
          ${DZ_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:8px 0;"><div style="max-width:380px;">${_dzHtml(s.key)}</div></td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Drop Zone</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Drop Zone</td><td>Border (dashed)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Drop Zone</td><td>Border radius</td><td>${tk('--bt-radius-sm')}</td><td>4px</td></tr>
          <tr><td>Drop Zone</td><td>Padding</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Select Files link · Default</td><td>Color</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Select Files link · Disabled</td><td>Color</td><td>${tk('--bt-text-primary-muted')}</td><td>#a3a3a3</td></tr>
          <tr><td>Status text · Default</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Status text · Uploading</td><td>Color</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Status text · Completed</td><td>Color</td><td>${tk('--bt-text-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>Status text · Failed</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>

      <h2 id="External Drop Zone States">External Drop Zone States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Preview</th></tr></thead>
        <tbody>
          ${EDZ_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:8px 0;"><div style="max-width:380px;">${_edzHtml(s.key)}</div></td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Drop Zone</td><td>Background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Drop Zone</td><td>Border (dashed)</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Drop Zone</td><td>Gap (button ↔ status)</td><td>${tk('--bt-space-lg')}</td><td>10px</td></tr>
          <tr><td>Select Files button</td><td>Class</td><td>—</td><td>bt-btn bt-btn--sm bt-btn--base-outline</td></tr>
          <tr><td>Status text</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>Status text · Default</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Status text · Uploading</td><td>Color</td><td>${tk('--bt-text-brand-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Status text · Completed</td><td>Color</td><td>${tk('--bt-text-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>Status text · Failed</td><td>Color</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
        </tbody>
      </table>

      <h2 id="Upload File States">Upload File States</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Preview</th></tr></thead>
        <tbody>
          ${UF_STATE_VARIANTS.map(s => `
          <tr>
            <td><span class="token-name">${s.label}</span></td>
            <td style="padding:8px 0;"><div style="max-width:380px;">${_ufHtml(s.key)}</div></td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>File name</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
          <tr><td>File name</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>File size / status</td><td>Font</td><td>${tk('--bt-text-2xs-regular')}</td><td>400 · 10px / 12px</td></tr>
          <tr><td>File size / status · Default</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Alert Dialog ──────────────────────────────────────────────
// Figma node 625:1451 — 4 Type × 2 Button Position × 3 Button Segments
// Type belirler: ikon + ikon-bg rengi + primary buton rengi
// Button Position: Vertical (butonlar alt alta, tam genişlik) | Horizontal (yan yana, 80px sabit)
// Button Segments: 1 (sadece solid confirm) | 2 (+1 ghost cancel) | 3 (+2 ghost)
// Vertical'da solid ON TOP, ghost(lar) altta; Horizontal'da ghost(lar) solda, solid sağda.

const ADLG_TYPE_OPTS = [
  { key: 'information', label: 'Information' },
  { key: 'success',     label: 'Success' },
  { key: 'warning',     label: 'Warning' },
  { key: 'error',       label: 'Error' },
];
const ADLG_POS_OPTS = [
  { key: 'vertical',   label: 'Vertical' },
  { key: 'horizontal', label: 'Horizontal' },
];
const ADLG_SEG_OPTS = [
  { key: '1', label: '1' },
  { key: '2', label: '2' },
  { key: '3', label: '3' },
];

const _adlgIcons = {
  information: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  error:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
  warning:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
  success:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
};

// type → primary solid button class (information → primary, diğerleri kendi tema)
const _adlgSolidCls = {
  information: 'bt-btn--primary-solid',
  error:       'bt-btn--error-solid',
  warning:     'bt-btn--warning-solid',
  success:     'bt-btn--success-solid',
};

function adlgHtml(p) {
  const type     = (p && p.type)     || 'information';
  const position = (p && p.position) || 'vertical';
  const segments = parseInt((p && p.segments) || '1', 10);

  const solidBtn = `<button class="bt-btn bt-btn--sm ${_adlgSolidCls[type]}" type="button" data-pgd-close>Button</button>`;
  const ghostBtn = `<button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button" data-pgd-close>Button</button>`;

  let footerBtns;
  if (position === 'vertical') {
    // Solid önce (üstte), ghost(lar) altta
    if (segments === 1) footerBtns = solidBtn;
    else if (segments === 2) footerBtns = solidBtn + ghostBtn;
    else footerBtns = solidBtn + ghostBtn + ghostBtn;
  } else {
    // Ghost(lar) solda, solid sağda
    if (segments === 1) footerBtns = solidBtn;
    else if (segments === 2) footerBtns = ghostBtn + solidBtn;
    else footerBtns = ghostBtn + ghostBtn + solidBtn;
  }

  return `<div class="bt-adlg bt-adlg--${type} bt-adlg--${position} bt-adlg--seg-${segments}">
  <div class="bt-adlg__body">
    <div class="bt-adlg__icon-wrap">${_adlgIcons[type] || ''}</div>
    <div class="bt-adlg__text">
      <p class="bt-adlg__title">Title Text Here</p>
      <div class="bt-adlg__desc"><p>Description for additional information displayed below the title to clarify the purpose of the section.</p></div>
    </div>
  </div>
  <div class="bt-adlg__footer">${footerBtns}</div>
</div>`;
}

const _adlgIconBg = {
  information: 'var(--bt-primary-subtle, #e2edfc)',
  error:       'var(--bt-error-subtle, #fde6e6)',
  warning:     'var(--bt-warning-subtle, #f9f2ce)',
  success:     'var(--bt-success-subtle, #daede5)',
};
const _adlgIconColor = {
  information: 'var(--bt-icon-information-default, #0d4e97)',
  error:       'var(--bt-icon-error-default, #b31d38)',
  warning:     'var(--bt-icon-warning-default, #aa820a)',
  success:     'var(--bt-icon-success-default, #2d584b)',
};
const _adlgSolidBg = {
  information: 'var(--bt-primary-default, #0d4e97)',
  error:       'var(--bt-error-default, #b31d38)',
  warning:     'var(--bt-warning-default, #aa820a)',
  success:     'var(--bt-success-default, #2d584b)',
};

function adlgCss(p) {
  const type     = (p && p.type)     || 'information';
  const position = (p && p.position) || 'vertical';
  const segments = (p && p.segments) || '1';
  const pk = (k, v) => `  ${k}: ${v};`;
  const lines = [
    `.bt-adlg {`,
    pk('background',    'var(--bt-base-default, #ffffff)'),
    pk('border-radius', 'var(--bt-radius-md, 6px)'),
    pk('box-shadow',    'var(--bt-shadow-md)'),
    pk('width',         '420px'),
    `}`,
    ``,
    `.bt-adlg__icon-wrap {`,
    pk('background', _adlgIconBg[type]),
    pk('color',      _adlgIconColor[type]),
    `}`,
    ``,
    `.bt-adlg__title {`,
    pk('font',  'var(--bt-title-sm-medium)  /* 500 14px/16px */'),
    pk('color', 'var(--bt-text-primary-default, #1a1a1a)'),
    `}`,
    ``,
    `.bt-adlg__desc {`,
    pk('font',  'var(--bt-text-xs-regular)  /* 400 12px/16px */'),
    pk('color', 'var(--bt-text-primary-default, #1a1a1a)'),
    `}`,
    ``,
    `.bt-adlg__footer {`,
    pk('border-top', 'var(--bt-border-primary-muted, #e6e6e6)'),
    pk('padding',    'var(--bt-space-xl, 12px) var(--bt-space-2xl, 16px)'),
    ...(position === 'horizontal'
      ? [pk('justify-content', 'flex-end')]
      : [
          pk('flex-direction', 'column'),
          ...(segments !== '1' ? [pk('align-items', 'flex-end')] : []),
        ]
    ),
    `}`,
    ``,
    `/* Primary button */`,
    `.${_adlgSolidCls[type]} {`,
    pk('background', _adlgSolidBg[type]),
    pk('color',      'var(--bt-text-primary-inverted, #ffffff)'),
    `}`,
  ];
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}


PAGES_WEB['components/alert-dialog'] = {
  tabs: ['Overview', 'CSS Properties', 'Usage'],
  toc:  ['Types', 'Button Layout'],
  render(tab) {
    const title = 'Alert Dialog';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Alert Dialog bileşeni için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Background</td><td>${tk('--bt-base-default')}</td><td>#ffffff</td></tr>
          <tr><td>Container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Container</td><td>Shadow</td><td>${tk('--bt-shadow-md')}</td><td>0 2px 4px … / 0 4px 8px …</td></tr>
          <tr><td>Container</td><td>Width</td><td>—</td><td>420px</td></tr>
          <tr><td>Body</td><td>Padding</td><td>${tk('--bt-space-3xl')}</td><td>20px</td></tr>
          <tr><td>Body</td><td>Gap (icon ↔ text)</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
          <tr><td>Icon Wrap</td><td>Size</td><td>—</td><td>32×32px</td></tr>
          <tr><td>Icon Wrap</td><td>Radius</td><td>${tk('--bt-radius-full')}</td><td>9999px</td></tr>
          <tr><td>Icon Wrap · Information</td><td>Background</td><td>${tk('--bt-primary-subtle')}</td><td>#e2edfc</td></tr>
          <tr><td>Icon Wrap · Error</td><td>Background</td><td>${tk('--bt-error-subtle')}</td><td>#fde6e6</td></tr>
          <tr><td>Icon Wrap · Warning</td><td>Background</td><td>${tk('--bt-warning-subtle')}</td><td>#f9f2ce</td></tr>
          <tr><td>Icon Wrap · Success</td><td>Background</td><td>${tk('--bt-success-subtle')}</td><td>#daede5</td></tr>
          <tr><td>Icon · Information</td><td>Color</td><td>${tk('--bt-icon-information-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Icon · Error</td><td>Color</td><td>${tk('--bt-icon-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>Icon · Warning</td><td>Color</td><td>${tk('--bt-icon-warning-default')}</td><td>#aa820a</td></tr>
          <tr><td>Icon · Success</td><td>Color</td><td>${tk('--bt-icon-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 · 14px/16px</td></tr>
          <tr><td>Title / Description</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Footer</td><td>Border top</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Footer</td><td>Padding</td><td>${tk('--bt-space-xl')} / ${tk('--bt-space-2xl')}</td><td>12px / 16px</td></tr>
          <tr><td>Footer</td><td>Gap</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Confirm Button · Horizontal</td><td>Width</td><td>—</td><td>80px</td></tr>
          <tr><td>Confirm Button · Vertical</td><td>Width</td><td>—</td><td>100% (full)</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Alert Dialog kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Type'ı içeriğin anlamsal bağlamıyla eşleştir — başarı mesajı için Success, silme onayı için Error kullan</li>
        <li>Tek kritik eylem için Segments=1 (sadece confirm), geri alma seçeneği sunmak için Segments=2 kullan</li>
        <li>Buton metinlerini eylemi açıkça tanımla — "Sil", "Onayla", "İptal" gibi fiiller kullan</li>
        <li>Modal overlay ile birlikte kullan; dialog açıkken arka plan etkileşimini engelle</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Segments=3'ü gereksiz yere kullanma — kullanıcıyı 3 seçenekle bırakmak karar yorgunluğu yaratır</li>
        <li>Aynı anda birden fazla Alert Dialog açma</li>
        <li>Type'ı dekoratif amaçla seçme — her tipin anlamsal bir karşılığı var</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-alert-dialog-overview',
        variants: [{ key: 'default', label: 'Alert Dialog' }],
        props: [
          { key: 'type',     label: 'Type',            options: ADLG_TYPE_OPTS, default: 'information' },
          { key: 'position', label: 'Button Position', options: ADLG_POS_OPTS,  default: 'horizontal' },
          { key: 'segments', label: 'Button Segments', options: ADLG_SEG_OPTS,  default: '2' },
        ],
        preview: (v, p) => `<div style="display:flex;align-items:center;justify-content:center;padding:24px;">${adlgHtml(p)}</div>`,
        code:    (v, p) => adlgHtml(p),
        css:     (v, p) => adlgCss(p),
        trigger: { label: 'Click Me', modal: true },
      })}

      <p class="page-desc">Alert Dialog, kullanıcıdan onay gerektiren veya önemli bilgi içeren modal bir iletişim kutusudur. 4 anlam tipi, 2 buton düzeni ve 1–3 buton segmentiyle özelleştirilebilir.</p>

      <h2 id="Types">Types</h2>
      <table class="token-table">
        <thead><tr><th>Type</th><th>Preview</th><th>Icon</th><th>Kullanım</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Information</span></td>
            <td>${adlgHtml({ type: 'information', position: 'vertical', segments: '1' })}</td>
            <td>circle-info</td>
            <td>Bilgilendirici, nötr içerik. Kullanıcıya bir bağlamı açıklar.</td>
          </tr>
          <tr>
            <td><span class="token-name">Success</span></td>
            <td>${adlgHtml({ type: 'success', position: 'vertical', segments: '1' })}</td>
            <td>circle-check</td>
            <td>Başarılı tamamlanan bir eylemi onaylar.</td>
          </tr>
          <tr>
            <td><span class="token-name">Warning</span></td>
            <td>${adlgHtml({ type: 'warning', position: 'vertical', segments: '1' })}</td>
            <td>triangle-alert</td>
            <td>Dikkat gerektiren, geri alınamaz olabilecek eylemler için.</td>
          </tr>
          <tr>
            <td><span class="token-name">Error</span></td>
            <td>${adlgHtml({ type: 'error', position: 'vertical', segments: '1' })}</td>
            <td>circle-alert</td>
            <td>Yıkıcı veya hata içeren eylemler için — silme, kaldırma vb.</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Icon wrap · Information</td><td>Background</td><td>${tk('--bt-primary-subtle')}</td><td>#e2edfc</td></tr>
          <tr><td>Icon wrap · Success</td><td>Background</td><td>${tk('--bt-success-subtle')}</td><td>#daede5</td></tr>
          <tr><td>Icon wrap · Warning</td><td>Background</td><td>${tk('--bt-warning-subtle')}</td><td>#f9f2ce</td></tr>
          <tr><td>Icon wrap · Error</td><td>Background</td><td>${tk('--bt-error-subtle')}</td><td>#fde6e6</td></tr>
          <tr><td>Icon · Information</td><td>Color</td><td>${tk('--bt-icon-information-default')}</td><td>#0d4e97</td></tr>
          <tr><td>Icon · Success</td><td>Color</td><td>${tk('--bt-icon-success-default')}</td><td>#2d584b</td></tr>
          <tr><td>Icon · Warning</td><td>Color</td><td>${tk('--bt-icon-warning-default')}</td><td>#aa820a</td></tr>
          <tr><td>Icon · Error</td><td>Color</td><td>${tk('--bt-icon-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 · 14px / 20px</td></tr>
          <tr><td>Title / Description</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Description</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px / 16px</td></tr>
        </tbody>
      </table>

      <h2 id="Button Layout">Button Layout</h2>
      <table class="token-table">
        <thead><tr><th>Position</th><th>Segments</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Vertical</span></td>
            <td>1</td>
            <td>${adlgHtml({ type: 'information', position: 'vertical', segments: '1' })}</td>
          </tr>
          <tr>
            <td><span class="token-name">Vertical</span></td>
            <td>2</td>
            <td>${adlgHtml({ type: 'information', position: 'vertical', segments: '2' })}</td>
          </tr>
          <tr>
            <td><span class="token-name">Vertical</span></td>
            <td>3</td>
            <td>${adlgHtml({ type: 'information', position: 'vertical', segments: '3' })}</td>
          </tr>
          <tr>
            <td><span class="token-name">Horizontal</span></td>
            <td>1</td>
            <td>${adlgHtml({ type: 'information', position: 'horizontal', segments: '1' })}</td>
          </tr>
          <tr>
            <td><span class="token-name">Horizontal</span></td>
            <td>2</td>
            <td>${adlgHtml({ type: 'information', position: 'horizontal', segments: '2' })}</td>
          </tr>
          <tr>
            <td><span class="token-name">Horizontal</span></td>
            <td>3</td>
            <td>${adlgHtml({ type: 'information', position: 'horizontal', segments: '3' })}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Footer</td><td>Border top</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Footer</td><td>Padding (vertical)</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
          <tr><td>Footer</td><td>Padding (horizontal)</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Footer</td><td>Gap between buttons</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Button · Vertical layout</td><td>Width</td><td>—</td><td>100% (full)</td></tr>
          <tr><td>Button · Horizontal layout</td><td>Width</td><td>—</td><td>80px</td></tr>
          <tr><td>Confirm · Information</td><td>Class</td><td>—</td><td>${tk('bt-btn--primary-solid')}</td></tr>
          <tr><td>Confirm · Success</td><td>Class</td><td>—</td><td>${tk('bt-btn--success-solid')}</td></tr>
          <tr><td>Confirm · Warning</td><td>Class</td><td>—</td><td>${tk('bt-btn--warning-solid')}</td></tr>
          <tr><td>Confirm · Error</td><td>Class</td><td>—</td><td>${tk('bt-btn--error-solid')}</td></tr>
          <tr><td>Cancel / secondary</td><td>Class</td><td>—</td><td>${tk('bt-btn--base-flat')}</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Dialog ──────────────────────────────────────────────────────
// Figma node 639:17632 — 2 Header Type × Subtitle × 2 Button Position × 3 Button Segments

const DIALOG_HEADER_OPTS = [
  { key: 'left', label: 'Left' },
  { key: 'center', label: 'Center' },
];
const DIALOG_SUBTITLE_OPTS = [
  { key: 'off', label: 'Off' },
  { key: 'on',  label: 'On' },
];
const DIALOG_POS_OPTS = [
  { key: 'horizontal', label: 'Horizontal' },
  { key: 'vertical',   label: 'Vertical' },
];
const DIALOG_SEG_OPTS = [
  { key: '1', label: '1' },
  { key: '2', label: '2' },
  { key: '3', label: '3' },
];

// Figma "Icon/placeholder" asset'i — Accordion'da (_accIconScan) doğrulanan
// lucide "scan" ikonuyla aynı, screenshot ile teyit edildi. Bu proje lucide
// runtime'ı yüklemiyor (data-lucide hiçbir yerde çalışmıyor), o yüzden diğer
// tüm component'ler gibi inline SVG olarak gömülüyor. İkonun kendisi 16×16 —
// 24×24'lük .bt-dialog__icon-wrap'ı doldurmuyor, içinde ortalanıyor (close
// butonundaki 16px icon + 4px padding formülüyle aynı oran).
const _dlgIconScan = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;
const _dlgIconX    = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;

function dialogHtml(variant, props) {
  const p = props || {};
  const headerType   = p.headerType || 'left';
  const subtitle     = p.subtitle === 'on';
  const btnPos       = p.btnPos || 'horizontal';
  const segs         = parseInt(p.segments || '2', 10);
  const leftControl  = (p.leftControl || 'on') !== 'off';
  const rightControl = (p.rightControl || 'on') !== 'off';

  const iconSlot = (headerType === 'center' && leftControl) ? `
    <div class="bt-dialog__icon-slot"><div class="bt-dialog__icon-wrap">${_dlgIconScan}</div></div>` : '';

  const closeControl = rightControl ? `
    <div class="bt-dialog__control">
      <button class="bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon" type="button" data-pgd-close aria-label="Close">
        ${_dlgIconX}
      </button>
    </div>` : '';

  const subtitleRow = subtitle
    ? `<span class="bt-dialog__subtitle">Subtitle</span>`
    : '';

  const primary   = `<button class="bt-btn bt-btn--sm bt-btn--primary-solid" type="button" data-pgd-close>Button</button>`;
  const secondary = `<button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button" data-pgd-close>Button</button>`;
  const tertiary  = `<button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button" data-pgd-close>Button</button>`;

  let footerBtns;
  if (btnPos === 'vertical') {
    if (segs === 1) footerBtns = primary;
    else if (segs === 2) footerBtns = primary + secondary;
    else footerBtns = primary + secondary + tertiary;
  } else {
    if (segs === 1) footerBtns = primary;
    else if (segs === 2) footerBtns = secondary + primary;
    else footerBtns = tertiary + secondary + primary;
  }

  const bodyContent = `
    <p class="bt-dialog__body-text">Description for additional information displayed below the title to clarify the purpose of the section.</p>
    <div class="${_tbxCls('default', 'sm')}">
      <div class="bt-tbx__meta"><span class="bt-tbx__label">Label Text</span></div>
      <div class="bt-tbx__anchor">
        <div class="bt-tbx__input" onclick="btDdToggle(this)" style="cursor:pointer;">${_ddInputInner('default')}</div>
        <div class="bt-dd-options" style="display:none;">${_ddOptionsHtml}</div>
      </div>
    </div>
    <div class="${_txaCls('default', 'sm')}">
      <div class="bt-txa__meta"><span class="bt-txa__label">Label Text</span></div>
      <div class="bt-txa__input">
        <textarea class="bt-txa__text" placeholder="Placeholder Text"></textarea>
      </div>
    </div>
    <div class="bt-upload">
      <input type="file" multiple class="bt-upload__input" style="display:none"
        onchange="btUplStartUpload(this.closest('.bt-upload'), Array.from(this.files)); this.value=''">
      <div class="bt-dropzone"
        ondragover="event.preventDefault(); this.classList.add('bt-dropzone--dragover')"
        ondragleave="this.classList.remove('bt-dropzone--dragover')"
        ondrop="btUplDrop(this, event)">
        <div class="bt-dropzone__inner">
          <button class="bt-btn bt-btn--xs bt-btn--primary-ghost"
            onclick="this.closest('.bt-upload').querySelector('.bt-upload__input').click()">Select Files</button>
          <div class="bt-dropzone__status"><span>Drag and drop files here to upload</span></div>
        </div>
      </div>
      <div class="bt-upload__files"></div>
    </div>`;

  return `<div class="bt-dialog bt-dialog--${headerType} bt-dialog--${btnPos}">
  <div class="bt-dialog__header">
    ${iconSlot}
    <div class="bt-dialog__title-wrap">
      <span class="bt-dialog__title">Title Text Here</span>
      ${subtitleRow}
    </div>
    ${closeControl}
  </div>
  <div class="bt-dialog__body">
    ${bodyContent}
  </div>
  <div class="bt-dialog__footer">
    ${footerBtns}
  </div>
</div>`;
}

function dialogCss(variant, props) {
  const p = props || {};
  const headerType = p.headerType || 'left';
  const subtitle   = p.subtitle === 'on';
  const btnPos     = p.btnPos || 'horizontal';

  const ln = (k, v) => `  ${k}: ${v};`;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const lines = [
    `.bt-dialog {`,
    ln('width', '420px'),
    ln('background', 'var(--bt-base-default, #ffffff)  /* #ffffff */'),
    ln('border-radius', 'var(--bt-radius-md, 6px)  /* 6px */'),
    ln('overflow', 'hidden'),
    ln('display', 'flex'),
    ln('flex-direction', 'column'),
    `}`,
    ``,
    `.bt-dialog__header {`,
    ln('min-height', '40px'),
    ln('background', 'var(--bt-base-subtle, #f5f5f5)  /* #f5f5f5 */'),
    ln('border-bottom', '1px solid var(--bt-border-primary-muted, #e6e6e6)  /* #e6e6e6 */'),
    ln('padding', 'var(--bt-space-none, 0px)'),
    ln('display', 'flex'),
    ln('align-items', 'center'),
    `}`,
    ...(headerType === 'left' ? [``, `.bt-dialog--left .bt-dialog__header {`, ln('padding-left', 'var(--bt-space-xl, 12px)'), `}`] : []),
    ``,
    `.bt-dialog__title {`,
    ln('font', 'var(--bt-title-sm-medium, 500 14px/16px var(--font))'),
    ln('color', 'var(--bt-text-primary-default, #1a1a1a)  /* #1a1a1a */'),
    ...(headerType === 'center' ? [ln('text-align', 'center')] : []),
    `}`,
  ];

  if (subtitle) {
    lines.push(``, `.bt-dialog__subtitle {`);
    lines.push(ln('font', 'var(--bt-text-xs-regular, 400 12px/16px var(--font))'));
    lines.push(ln('color', 'var(--bt-text-primary-emphasis, #727272)  /* #727272 */'));
    lines.push(`}`);
  }

  lines.push(``, `.bt-dialog__body {`);
  lines.push(ln('min-height', '280px'));
  lines.push(ln('padding', 'var(--bt-space-2xl, 16px)  /* 16px */'));
  lines.push(ln('gap', 'var(--bt-space-2xl, 16px)  /* 16px */'));
  lines.push(`}`);

  lines.push(``, `.bt-dialog__footer {`);
  lines.push(ln('border-top', '1px solid var(--bt-border-primary-muted, #e6e6e6)  /* #e6e6e6 */'));
  lines.push(ln('padding', 'var(--bt-space-xl, 12px) var(--bt-space-2xl, 16px)  /* 12px 16px */'));
  lines.push(ln('display', 'flex'));
  lines.push(ln('gap', 'var(--bt-space-md, 8px)  /* 8px */'));
  if (btnPos === 'horizontal') {
    lines.push(ln('justify-content', 'flex-end'));
  } else {
    lines.push(ln('flex-direction', 'column'));
  }
  lines.push(`}`);

  if (btnPos === 'horizontal') {
    lines.push(``, `.bt-dialog--horizontal .bt-dialog__footer .bt-btn {`);
    lines.push(ln('width', '80px'));
    lines.push(ln('justify-content', 'center'));
    lines.push(`}`);
  } else {
    lines.push(``, `.bt-dialog--vertical .bt-dialog__footer .bt-btn {`);
    lines.push(ln('width', '100%'));
    lines.push(ln('justify-content', 'center'));
    lines.push(`}`);
  }

  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/dialog'] = {
  tabs: ['Overview', 'CSS Properties', 'Usage'],
  toc:  ['Header Types', 'Subtitle', 'Button Layout'],
  render(tab) {
    const title = 'Dialog';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Dialog bileşeni için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Width</td><td>—</td><td>420px</td></tr>
          <tr><td>Container</td><td>Background</td><td>${tk('--bt-base-default')}</td><td>#ffffff</td></tr>
          <tr><td>Container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Header</td><td>Min-height</td><td>—</td><td>40px</td></tr>
          <tr><td>Header</td><td>Background</td><td>${tk('--bt-base-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Header</td><td>Border bottom</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Header</td><td>Padding</td><td>${tk('--bt-space-none')}</td><td>0px</td></tr>
          <tr><td>Header · Left type</td><td>Padding-left</td><td>${tk('--bt-space-xl')}</td><td>12px (no icon slot to provide the inset)</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 14px/16px</td></tr>
          <tr><td>Title</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Subtitle</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 12px/16px</td></tr>
          <tr><td>Subtitle</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Control slot (left icon / right close)</td><td>Width &amp; Height</td><td>—</td><td>40px (layout only, matches header height)</td></tr>
          <tr><td>Close button</td><td>Class</td><td>—</td><td>${tk('bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon')} (28×28, reused Button component)</td></tr>
          <tr><td>Icon slot (Center type)</td><td>Width &amp; Height</td><td>—</td><td>24×24 wrapper (${tk('.bt-dialog__icon-wrap')}) in the 40px slot, 16×16 icon inside it</td></tr>
          <tr><td>Body</td><td>Padding</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Body</td><td>Gap</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Footer</td><td>Border top</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Footer</td><td>Padding (vertical)</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
          <tr><td>Footer</td><td>Padding (horizontal)</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Footer</td><td>Gap</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Button · Horizontal</td><td>Width</td><td>—</td><td>80px</td></tr>
          <tr><td>Button · Vertical</td><td>Width</td><td>—</td><td>100% (full)</td></tr>
          <tr><td>Primary button</td><td>Class</td><td>—</td><td>${tk('bt-btn--sm bt-btn--primary-solid')}</td></tr>
          <tr><td>Secondary button</td><td>Class</td><td>—</td><td>${tk('bt-btn--sm bt-btn--base-flat')}</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Dialog kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Karmaşık görevler, form doldurma veya ayrıntılı bilgi sunumu için Dialog kullan</li>
        <li>Başlık metnini kısa ve açıklayıcı tut</li>
        <li>Primary action'ı horizontal düzende sağda, vertical düzende üstte konumlandır</li>
        <li>Backdrop'a tıklayarak veya X butonu ile kapanabilmesini sağla</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>İç içe dialog açma</li>
        <li>Center header type'ı gereksiz yere kullanma — sadece özel bir ikon gerektiğinde kullan</li>
        <li>3'ten fazla footer butonu ekleme</li>
        <li>Body içeriğini aşırı doldurma — çok karmaşık içerik için ayrı bir sayfa tercih et</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-dialog-overview',
        variants: [{ key: 'default', label: 'Dialog' }],
        trigger: { label: 'Click Me', modal: true },
        props: [
          { key: 'headerType',   label: 'Header Type',     options: DIALOG_HEADER_OPTS,   default: 'left' },
          { key: 'subtitle',     label: 'Header Subtitle', options: DIALOG_SUBTITLE_OPTS, default: 'off' },
          { key: 'leftControl',  label: 'Left Control',    options: TBX_BOOL_OPTS,        default: 'on' },
          { key: 'rightControl', label: 'Right Control',   options: TBX_BOOL_OPTS,        default: 'on' },
          { key: 'btnPos',       label: 'Button Position', options: DIALOG_POS_OPTS,      default: 'horizontal' },
          { key: 'segments',     label: 'Button Segments', options: DIALOG_SEG_OPTS,      default: '2' },
        ],
        preview: (v, p) => `<div style="display:flex;align-items:center;justify-content:center;padding:24px;">${dialogHtml(v, p)}</div>`,
        code:    (v, p) => dialogHtml(v, p),
        css:     (v, p) => dialogCss(v, p),
      })}

      <p class="page-desc">Dialog, kullanıcıdan etkileşim gerektiren görevler veya ayrıntılı bilgi sunumu için kullanılan modal bir penceredir. Alert Dialog'un aksine form alanları, açıklamalar ve daha zengin içerik barındırabilir.</p>

      <h2 id="Header Types">Header Types</h2>
      <table class="token-table">
        <thead><tr><th>Type</th><th>Preview</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Left</strong></td>
            <td>${dialogHtml('default', { headerType: 'left', subtitle: 'off', btnPos: 'horizontal', segments: '1' })}</td>
            <td>Başlık sola hizalı. Sağ üstte X butonu. Standart dialog düzeni.</td>
          </tr>
          <tr>
            <td><strong>Center</strong></td>
            <td>${dialogHtml('default', { headerType: 'center', subtitle: 'off', btnPos: 'horizontal', segments: '1' })}</td>
            <td>Sol tarafta ikon slotu, başlık ortalanmış. Özel ikon ile öne çıkarılan içerik için.</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Width</td><td>—</td><td>420px</td></tr>
          <tr><td>Container</td><td>Background</td><td>${tk('--bt-base-default')}</td><td>#ffffff</td></tr>
          <tr><td>Container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Header</td><td>Min-height</td><td>—</td><td>40px</td></tr>
          <tr><td>Header</td><td>Background</td><td>${tk('--bt-base-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Header</td><td>Border bottom</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Header</td><td>Padding</td><td>${tk('--bt-space-none')}</td><td>0px</td></tr>
          <tr><td>Header · Left type</td><td>Padding-left</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 14px/16px</td></tr>
          <tr><td>Title</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Control slot (left icon / right close)</td><td>Width &amp; Height</td><td>—</td><td>40px (layout only)</td></tr>
          <tr><td>Icon slot (Center)</td><td>Width &amp; Height</td><td>—</td><td>24×24 wrapper in the 40px slot, 16×16 icon inside it</td></tr>
          <tr><td>Close button</td><td>Class</td><td>—</td><td>${tk('bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon')} (28×28)</td></tr>
        </tbody>
      </table>

      <h2 id="Subtitle">Subtitle</h2>
      <table class="token-table">
        <thead><tr><th>State</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr><td><strong>Off</strong></td><td>Yalnızca başlık gösterilir. Çoğu kullanım durumu için uygundur.</td></tr>
          <tr><td><strong>On</strong></td><td>Başlığın altında ek açıklama metni görüntülenir.</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Subtitle</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 12px/16px</td></tr>
          <tr><td>Subtitle</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Body</td><td>Padding</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Body</td><td>Gap</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
        </tbody>
      </table>

      <h2 id="Button Layout">Button Layout</h2>
      <table class="token-table">
        <thead><tr><th>Position</th><th>Segments</th><th>Düzen</th></tr></thead>
        <tbody>
          <tr><td>Horizontal</td><td>1</td><td>Tek primary buton, sağa hizalı, 80px genişlik</td></tr>
          <tr><td>Horizontal</td><td>2</td><td>Cancel + Confirm, sağa hizalı, 80px genişlik</td></tr>
          <tr><td>Horizontal</td><td>3</td><td>Skip + Cancel + Confirm, sağa hizalı, 80px genişlik</td></tr>
          <tr><td>Vertical</td><td>1</td><td>Tek primary buton, tam genişlik</td></tr>
          <tr><td>Vertical</td><td>2</td><td>Confirm üstte + Cancel altta, tam genişlik</td></tr>
          <tr><td>Vertical</td><td>3</td><td>Confirm + Cancel + Skip, tam genişlik</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Footer</td><td>Border top</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Footer</td><td>Padding (vertical)</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
          <tr><td>Footer</td><td>Padding (horizontal)</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Footer</td><td>Gap</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Button · Horizontal</td><td>Width</td><td>—</td><td>80px</td></tr>
          <tr><td>Button · Vertical</td><td>Width</td><td>—</td><td>100% (full)</td></tr>
          <tr><td>Primary button</td><td>Class</td><td>—</td><td>${tk('bt-btn--sm bt-btn--primary-solid')}</td></tr>
          <tr><td>Secondary button</td><td>Class</td><td>—</td><td>${tk('bt-btn--sm bt-btn--base-flat')}</td></tr>
        </tbody>
      </table>
    `};
  },
};

// ── Card ────────────────────────────────────────────────────────
// Figma node 670:8121 (Base Card Header, 2 type × 2 position × 3 segments) +
// 757:7380 (Base Card Content Header — aynı yapı, body içindeki bölüm ayıracı
// olarak reuse edilir, her zaman borderless) + 692:30381 (assembled örnek).
// Sol/sağ control slotu bağımsız bir "içerik tipi" seçimi: Icon/Button/
// Checkbox/Switch/Avatar/Avatar Group/Badge/Text — hepsi mevcut bt-* bileşen
// class'ları reuse edilerek render ediliyor (Figma'nın bağımsız show* boolean
// flag'leri yerine playground'da tek seçim kutusuna sadeleştirildi).

const CARD_TYPE_OPTS = [
  { key: 'bordered',   label: 'Bordered' },
  { key: 'borderless', label: 'Borderless' },
];
const CARD_POSITION_OPTS = [
  { key: 'center', label: 'Center' },
  { key: 'left',   label: 'Left' },
];
const CARD_BTN_POS_OPTS = [
  { key: 'horizontal', label: 'Horizontal' },
  { key: 'vertical',   label: 'Vertical' },
];
const CARD_SEG_OPTS = [
  { key: '1', label: '1' },
  { key: '2', label: '2' },
  { key: '3', label: '3' },
];
const CARD_CONTROL_OPTS = [
  { key: 'none',        label: 'None' },
  { key: 'icon',         label: 'Icon' },
  { key: 'button',       label: 'Button' },
  { key: 'checkbox',     label: 'Checkbox' },
  { key: 'switch',       label: 'Switch' },
  { key: 'avatar',       label: 'Avatar' },
  { key: 'avatarGroup',  label: 'Avatar Group' },
  { key: 'badge',        label: 'Badge' },
  { key: 'text',         label: 'Text' },
];

// Figma "Icon/placeholder" asset'i — Accordion/Dialog'da doğrulanan lucide
// "scan" ikonuyla aynı (screenshot ile teyit edildi), control slotlarındaki
// generic leading icon + Card Row Segment ikonu + Button control'ün içindeki
// icon-only buton ikonu için tek kaynak olarak reuse ediliyor.
const _crdIconScan = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;

function crdControlSlot(kind) {
  switch (kind) {
    case 'icon':
      return `<span class="bt-card__control-icon">${_crdIconScan}</span>`;
    case 'button':
      return `<span class="bt-card__control-item"><button type="button" class="bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon" aria-label="Action">${_crdIconScan}</button></span>`;
    // Checkbox/Switch design system'deki gerçek bileşenler — Button gibi
    // gerçekten tıklanabilir/state değiştiren olmalı, statik önizleme değil.
    // Checkbox/Radio/Switch sayfalarındaki aynı onclick+classList.toggle
    // deseni reuse ediliyor (bkz. chkPreview/swPreview).
    case 'checkbox':
      return `<span class="bt-card__control-item" onclick="this.querySelector('.bt-checkbox__box').classList.toggle('bt-checkbox__box--checked')" style="cursor:pointer;"><span class="bt-checkbox__box">${_chkCheck}</span></span>`;
    case 'switch':
      return `<span class="bt-card__control-item" onclick="this.querySelector('.bt-switch__track').classList.toggle('bt-switch__track--on')" style="cursor:pointer;"><span class="bt-switch__track"><span class="bt-switch__thumb"></span></span></span>`;
    case 'avatar':
      return `<span class="bt-card__control-item"><span class="bt-avatar bt-avatar--xs bt-avatar--brand"><span class="bt-avatar__initials">EG</span></span></span>`;
    case 'avatarGroup':
      return `<span class="bt-card__control-item bt-card__control-avatar-group">
        <span class="bt-avatar bt-avatar--xs bt-avatar--brand"><span class="bt-avatar__initials">EG</span></span>
        <span class="bt-avatar bt-avatar--xs bt-avatar--brand"><span class="bt-avatar__initials">EG</span></span>
        <span class="bt-avatar bt-avatar--xs bt-avatar--brand"><span class="bt-avatar__initials">EG</span></span>
        <span class="bt-avatar bt-avatar--xs"><span class="bt-avatar__initials">+5</span></span>
      </span>`;
    case 'badge':
      return `<span class="bt-card__control-item"><span class="bt-card__control-badge">Placeholder</span></span>`;
    case 'text':
      return `<span class="bt-card__control-item"><span class="bt-card__control-text">Additional Text Here</span></span>`;
    default:
      return '';
  }
}

// Hem ana Card Header hem body içindeki (plain:true, her zaman borderless)
// Content Header ayracı için tek kaynak — Dialog'daki Left/Center header
// deseniyle aynı mantık: kontrol slotu olan tarafta title'ın kendi padding'i
// sıfırlanıyor, olmayan tarafta 16px kalıyor.
function crdHeaderHtml(opts) {
  const o = opts || {};
  const type = o.type || 'bordered';
  const position = o.position || 'center';
  const showSubtitle = o.showSubtitle !== false;
  const leftControl = o.leftControl || 'none';
  const rightControl = o.rightControl || 'none';
  const plain = !!o.plain;
  const titleText = o.titleText || 'Card Title Here';
  const subtitleText = o.subtitleText || 'Subtitle';

  const hasLeft = leftControl !== 'none';
  const hasRight = rightControl !== 'none';
  const isCenter = position === 'center';

  const cls = [
    'bt-card__header',
    plain ? 'bt-card__header--plain' : '',
    (!plain && type === 'bordered') ? 'bt-card__header--bordered' : '',
    isCenter ? 'bt-card__header--center' : 'bt-card__header--left',
    hasLeft ? 'bt-card__header--has-left' : '',
    hasRight ? 'bt-card__header--has-right' : '',
  ].filter(Boolean).join(' ');

  // Position=Center'da title gerçekten flex:1'in ortasında değil, kutunun
  // KENDİSİNİN ortasında görünür (text-align:center) — sadece TEK tarafta
  // control varsa flex:1 kutusu asimetrik genişler ve title yanlış tarafa
  // kayar. Boş tarafa, karşı taraftaki control'ün BİREBİR aynı markup'ını
  // (aynı genişlik, visibility:hidden) "ayna" olarak basarak simetri
  // korunuyor — hangi control tipi olursa olsun (Icon/Button/Avatar Group/
  // Badge/Text, hepsi farklı genişlikte) otomatik doğru genişlikte oluyor.
  const leftSlot = hasLeft
    ? `<span class="bt-card__control">${crdControlSlot(leftControl)}</span>`
    : (isCenter && hasRight ? `<span class="bt-card__control" style="visibility:hidden" aria-hidden="true">${crdControlSlot(rightControl)}</span>` : '');
  const rightSlot = hasRight
    ? `<span class="bt-card__control">${crdControlSlot(rightControl)}</span>`
    : (isCenter && hasLeft ? `<span class="bt-card__control" style="visibility:hidden" aria-hidden="true">${crdControlSlot(leftControl)}</span>` : '');

  return `<div class="${cls}">
    ${leftSlot}
    <span class="bt-card__title-wrap">
      <span class="bt-card__title">${titleText}</span>
      ${showSubtitle ? `<span class="bt-card__subtitle">${subtitleText}</span>` : ''}
    </span>
    ${rightSlot}
  </div>`;
}

// "Card Row Segment" — Base Card Content'in (756:6684) 4 örnek satırında da
// aynı: 28×28 leading icon + flex1 Label (sol) + flex1 Value (sağ).
// opts: { showAdditionalText: bool, showRightControl: bool }
function crdRowHtml(opts) {
  const o = opts || {};
  const addText = o.showAdditionalText
    ? `<span class="bt-card__row-add">Additional Text Here</span>` : '';
  const rightSlot = o.showRightControl
    ? `<span class="bt-card__row-right"><span class="bt-card__control-icon">${_crdIconScan}</span></span>` : '';
  return `<div class="bt-card__row">
    <span class="bt-card__row-icon"><span class="bt-card__control-icon">${_crdIconScan}</span></span>
    <span class="bt-card__row-content">
      <span class="bt-card__row-col bt-card__row-col--left">
        <span class="bt-card__row-label">Label Text Here</span>
        ${addText}
      </span>
      <span class="bt-card__row-col bt-card__row-col--right">
        <span class="bt-card__row-value">Value Text Here</span>
        ${addText}
      </span>
    </span>
    ${rightSlot}
  </div>`;
}

function crdHtml(variant, props) {
  const p = props || {};
  const showHeader = (p.showHeader || 'on') === 'on';
  const type = p.type || 'bordered';
  const position = p.position || 'center';
  const showSubtitle = (p.showSubtitle || 'on') === 'on';
  const leftControl = p.leftControl || 'none';
  const rightControl = p.rightControl || 'none';
  const showContentHeader = (p.showContentHeader || 'on') === 'on';
  const showDescription = (p.showDescription || 'on') === 'on';
  // Content Header, Figma'da (757:7380) Card Header ile birebir aynı prop
  // setine sahip (Position/Subtitle/sol-sağ Control) — sadece her zaman
  // borderless/arka plansız. Playground'da da aynı özellikler açık.
  const chPosition     = p.contentHeaderPosition || 'left';
  const chSubtitle     = (p.contentHeaderSubtitle || 'off') === 'on';
  const chLeftControl  = p.contentHeaderLeftControl || 'none';
  const chRightControl = p.contentHeaderRightControl || 'none';
  const showRowAdd   = (p.rowAdditionalText || 'off') === 'on';
  const showRowRight = (p.rowRightControl   || 'off') === 'on';
  const showSegments = (p.showSegments || 'on') === 'on';
  const activeSegs   = showSegments
    ? (p.activeSegments != null ? p.activeSegments : '1,2,3,4,5').split(',').filter(Boolean)
    : [];
  const showFooter   = (p.showFooter || 'on') === 'on';
  const footerBtnPos = p.footerBtnPos || 'horizontal';
  const footerSegs   = parseInt(p.footerSegments || '2', 10);

  const header = showHeader ? crdHeaderHtml({ type, position, showSubtitle, leftControl, rightControl }) : '';
  const contentHeader = showContentHeader ? crdHeaderHtml({
    plain: true, position: chPosition, showSubtitle: chSubtitle, titleText: 'Content Title Here',
    leftControl: chLeftControl, rightControl: chRightControl,
  }) : '';
  const description = showDescription
    ? `<p class="bt-card__description">Description for additional information displayed below the title to clarify the purpose of the section.</p>`
    : '';
  const rowOpts = { showAdditionalText: showRowAdd, showRightControl: showRowRight };
  const rows = [1,2,3,4,5].filter(i => activeSegs.includes(String(i))).map(() => crdRowHtml(rowOpts)).join('');

  // Footer — Dialog footer'ıyla birebir aynı buton mantığı
  const _fPrimary   = `<button class="bt-btn bt-btn--sm bt-btn--primary-solid" type="button">Button</button>`;
  const _fSecondary = `<button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button">Button</button>`;
  const _fTertiary  = `<button class="bt-btn bt-btn--sm bt-btn--base-flat" type="button">Button</button>`;
  let footerBtns;
  if (footerBtnPos === 'vertical') {
    footerBtns = footerSegs === 1 ? _fPrimary
               : footerSegs === 2 ? _fPrimary + _fSecondary
               : _fPrimary + _fSecondary + _fTertiary;
  } else {
    footerBtns = footerSegs === 1 ? _fPrimary
               : footerSegs === 2 ? _fSecondary + _fPrimary
               : _fTertiary + _fSecondary + _fPrimary;
  }
  const footer = showFooter ? `\n  <div class="bt-card__footer">${footerBtns}</div>` : '';

  return `<div class="bt-card bt-card--${footerBtnPos}">
  ${header}
  <div class="bt-card__body">
    ${contentHeader}
    ${description}
    ${rows}
  </div>${footer}
</div>`;
}

function crdCss(variant, props) {
  const p = props || {};
  const type = p.type || 'bordered';
  const position = p.position || 'center';
  const leftControl = p.leftControl || 'none';
  const rightControl = p.rightControl || 'none';
  const hasLeft = leftControl !== 'none';
  const hasRight = rightControl !== 'none';
  const footerBtnPos = p.footerBtnPos || 'horizontal';

  const ln = (k, v) => `  ${k}: ${v};`;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const lines = [
    `.bt-card {`,
    ln('width', '420px'),
    ln('background', 'var(--bt-base-default, #ffffff)  /* #ffffff */'),
    ln('border', '1px solid var(--bt-border-primary-default, #d4d4d4)  /* #d4d4d4 */'),
    ln('border-radius', 'var(--bt-radius-md, 6px)  /* 6px */'),
    ln('overflow', 'hidden'),
    `}`,
    ``,
    `.bt-card__header {`,
    ln('height', '40px'),
    ln('background', 'transparent'),
    ln('display', 'flex'),
    ln('align-items', 'center'),
    ln('justify-content', 'space-between'),
    `}`,
    ...(type === 'bordered' ? [``, `.bt-card__header--bordered {`, ln('background', 'var(--bt-base-subtle, #f5f5f5)  /* #f5f5f5 */'), ln('border-bottom', '1px solid var(--bt-border-primary-default, #d4d4d4)  /* #d4d4d4 */'), `}`] : []),
    ``,
    `.bt-card__title-wrap {`,
    ln('flex', '1 1 0'),
    ...(position === 'center'
      ? [ln('align-items', 'center'), ln('text-align', 'center')]
      : [
          ln('align-items', 'flex-start'),
          ln('text-align', 'left'),
          ln('padding-left',  hasLeft  ? '0' : 'var(--bt-space-2xl, 16px)  /* 16px — sol control yoksa kendi inseti gerekiyor */'),
          ln('padding-right', hasRight ? '0' : 'var(--bt-space-2xl, 16px)  /* 16px */'),
        ]),
    `}`,
    ``,
    `.bt-card__title {`,
    ln('font', 'var(--bt-title-sm-medium, 500 14px/16px var(--font))'),
    ln('color', 'var(--bt-text-primary-default, #1a1a1a)  /* #1a1a1a */'),
    `}`,
    ``,
    `.bt-card__subtitle {`,
    ln('font', 'var(--bt-subtitle-xs-regular, 400 12px/16px var(--font))'),
    ln('color', 'var(--bt-text-primary-emphasis, #727272)  /* #727272 */'),
    `}`,
    ``,
    `.bt-card__body {`,
    ln('padding', 'var(--bt-space-2xl, 16px)  /* 16px */'),
    ln('display', 'flex'),
    ln('flex-direction', 'column'),
    ln('gap', 'var(--bt-space-md, 8px)  /* 8px */'),
    `}`,
    ``,
    `.bt-card__row {`,
    ln('display', 'flex'),
    ln('align-items', 'center'),
    `}`,
    ``,
    `.bt-card__row-icon {`,
    ln('width', '28px'),
    ln('height', '28px'),
    `}`,
    ``,
    `.bt-card__row-icon .bt-card__control-icon {`,
    ln('width', '24px'),
    ln('height', '24px'),
    ln('color', 'var(--bt-icon-primary-strong, #535353)  /* #535353 — ikon kendisi bunu doldurmaz, 16×16 kendi boyutunda ortalanır */'),
    `}`,
    ``,
    `.bt-card__row-col {`,
    ln('flex', '1 1 0'),
    ln('min-width', '0'),
    ln('display', 'flex'),
    ln('flex-direction', 'column'),
    ln('gap', 'var(--bt-space-xs, 4px)  /* 4px — label ↕ additional text */'),
    `}`,
    ``,
    `.bt-card__row-label, .bt-card__row-value {`,
    ln('font', 'var(--bt-label-xs-regular, 400 12px/16px var(--font))'),
    ln('color', 'var(--bt-text-primary-default, #1a1a1a)  /* #1a1a1a */'),
    ln('white-space', 'nowrap'),
    ln('overflow', 'hidden'),
    ln('text-overflow', 'ellipsis'),
    `}`,
    ``,
    `.bt-card__row-add {`,
    ln('font', 'var(--bt-label-xs-regular, 400 12px/16px var(--font))'),
    ln('color', 'var(--bt-text-primary-emphasis, #727272)  /* #727272 */'),
    `}`,
    ``,
    `.bt-card__row-right {`,
    ln('width', '28px'),
    ln('height', '28px'),
    `}`,
    ``,
    `.bt-card__footer {`,
    ln('border-top', '1px solid var(--bt-border-primary-muted, #e6e6e6)  /* #e6e6e6 */'),
    ln('padding', 'var(--bt-space-xl, 12px) var(--bt-space-2xl, 16px)  /* 12px 16px */'),
    ln('display', 'flex'),
    ln('gap', 'var(--bt-space-md, 8px)  /* 8px */'),
    `}`,
    ``,
    ...(footerBtnPos === 'horizontal' ? [
      `.bt-card--horizontal .bt-card__footer {`,
      ln('justify-content', 'flex-end'),
      `}`,
      `.bt-card--horizontal .bt-card__footer .bt-btn {`,
      ln('width', '80px'),
      ln('justify-content', 'center'),
      `}`,
    ] : [
      `.bt-card--vertical .bt-card__footer {`,
      ln('flex-direction', 'column'),
      `}`,
      `.bt-card--vertical .bt-card__footer .bt-btn {`,
      ln('width', '100%'),
      ln('justify-content', 'center'),
      `}`,
    ]),
  ];

  return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
}

PAGES_WEB['components/card'] = {
  tabs: ['Overview', 'CSS Properties', 'Usage'],
  toc:  ['Header Types', 'Control Slots', 'Body', 'Footer'],
  render(tab) {
    const title = 'Card';
    const tk = v => `<code style="font-size:12px;font-family:var(--mono)">${v}</code>`;

    if (tab === 'CSS Properties') return { title, html: `
      <p class="page-desc">Card bileşeni için kullanılan design token–CSS değişken eşleşmeleri.</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Width</td><td>—</td><td>420px</td></tr>
          <tr><td>Container</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Header</td><td>Height</td><td>—</td><td>40px</td></tr>
          <tr><td>Header · Borderless (default)</td><td>Background</td><td>—</td><td>transparent</td></tr>
          <tr><td>Header · Bordered</td><td>Background</td><td>${tk('--bt-base-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Header · Bordered</td><td>Border bottom</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Header · Left, no control</td><td>Title padding</td><td>${tk('--bt-space-2xl')}</td><td>16px (o taraftaki 40px control slotu inseti karşılıyorsa 0'a düşer)</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 · 14px/16px</td></tr>
          <tr><td>Subtitle</td><td>Font</td><td>${tk('--bt-subtitle-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Subtitle</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Control slot</td><td>Width / Height</td><td>—</td><td>min-width 40px (hug content — Avatar Group/Badge/Text gibi geniş içeriklerde büyür) / 40px sabit</td></tr>
          <tr><td>Control · Icon</td><td>Size / Color</td><td>${tk('--bt-icon-primary-strong')}</td><td>24×24, #535353</td></tr>
          <tr><td>Control · Button</td><td>Class</td><td>—</td><td>${tk('bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon')} (28×28)</td></tr>
          <tr><td>Control · Checkbox</td><td>Class</td><td>—</td><td>${tk('bt-checkbox__box')} (16×16)</td></tr>
          <tr><td>Control · Switch</td><td>Class</td><td>—</td><td>${tk('bt-switch__track')} (32×20)</td></tr>
          <tr><td>Control · Avatar / Avatar Group</td><td>Class</td><td>—</td><td>${tk('bt-avatar bt-avatar--xs')} (28×28)</td></tr>
          <tr><td>Body</td><td>Padding</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Body</td><td>Gap</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Row · Icon slot</td><td>Size</td><td>—</td><td>28×28 slot, 24×24 ikon</td></tr>
          <tr><td>Row · Label / Value</td><td>Font</td><td>${tk('--bt-label-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Row · Additional Text</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Row · Col gap</td><td>Gap (label ↕ additional)</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
          <tr><td>Row · Right icon slot</td><td>Size</td><td>—</td><td>28×28 slot, 24×24 ikon</td></tr>
          <tr><td>Footer</td><td>Border top</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Footer</td><td>Padding</td><td>${tk('--bt-space-xl')} / ${tk('--bt-space-2xl')}</td><td>12px / 16px</td></tr>
          <tr><td>Footer</td><td>Gap</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Footer · Horizontal button</td><td>Width</td><td>—</td><td>80px sabit</td></tr>
          <tr><td>Footer · Vertical button</td><td>Width</td><td>—</td><td>100%</td></tr>
        </tbody>
      </table>
    `};

    if (tab === 'Usage') return { title, html: `
      <p class="page-desc">Card kullanım kılavuzu.</p>
      <h2>Do</h2>
      <ul>
        <li>Header'ı Bordered yaparak body'den net bir görsel ayrım oluştur — özellikle Header'da control varsa</li>
        <li>Sol control slotunu bağlamsal bir gösterge (ikon, avatar, checkbox) için kullan; sağ slotu eylem (buton) veya durum (badge, switch) için kullan</li>
        <li>Body içindeki Content Header'ı sadece birden fazla mantıksal bölüm varsa kullan — tek bir içerik bloğu için gereksiz</li>
        <li>Row Segment listelerinde Label/Value çiftlerini tutarlı bir sırayla göster</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li>Hem sol hem sağ slotu doldurup Header'ı kalabalıklaştırma — 40×40'lık slotlar yalnızca tek bir kontrol için tasarlandı</li>
        <li>Position=Center'ı sağ/sol control ile birlikte kullanma — merkezleme, controller asimetrik olduğunda bozulur</li>
        <li>Card içine başka bir Card veya Dialog gömme</li>
      </ul>
    `};

    // Overview
    return { title, html: `
      ${registerPlayground({
        id: 'pgd-card-overview',
        variants: [{ key: 'default', label: 'Card' }],
        // group: aynı isimli kontroller (Position/Subtitle/Left-Right Control)
        // Header ve Content Header için ayrı ayrı tekrarlandığından, toolbar'da
        // karışmaması için iki gruba ayrıldı (bkz. playground.js prop.group —
        // sadece group verilen sayfalarda görünür bir ayraç oluşturuyor,
        // component'e özel ama gerektiğinde başka sayfalarda da kullanılabilir).
        props: [
          { key: 'showHeader',   label: 'Show',          group: 'Header', options: TBX_BOOL_OPTS,      default: 'on' },
          { key: 'type',         label: 'Type',          group: 'Header', options: CARD_TYPE_OPTS,     default: 'bordered' },
          { key: 'position',     label: 'Position',      group: 'Header', options: CARD_POSITION_OPTS, default: 'center' },
          { key: 'showSubtitle', label: 'Subtitle',      group: 'Header', options: TBX_BOOL_OPTS,      default: 'on' },
          { key: 'leftControl',  label: 'Left Control',  group: 'Header', options: CARD_CONTROL_OPTS,  default: 'none' },
          { key: 'rightControl', label: 'Right Control', group: 'Header', options: CARD_CONTROL_OPTS,  default: 'none' },
          { key: 'showContentHeader',        label: 'Show',          group: 'Content Header', options: TBX_BOOL_OPTS,      default: 'on' },
          { key: 'contentHeaderPosition',     label: 'Position',      group: 'Content Header', options: CARD_POSITION_OPTS, default: 'left' },
          { key: 'contentHeaderSubtitle',     label: 'Subtitle',      group: 'Content Header', options: TBX_BOOL_OPTS,      default: 'off' },
          { key: 'contentHeaderLeftControl',  label: 'Left Control',  group: 'Content Header', options: CARD_CONTROL_OPTS,  default: 'none' },
          { key: 'contentHeaderRightControl', label: 'Right Control', group: 'Content Header', options: CARD_CONTROL_OPTS,  default: 'none' },
          { key: 'showDescription',  label: 'Description',    group: 'Body', options: TBX_BOOL_OPTS,      default: 'on' },
          { key: 'showSegments',     label: 'Segments',       group: 'Body', options: TBX_BOOL_OPTS,      default: 'on' },
          { key: 'activeSegments',   label: 'Active',         group: 'Body', type: 'multiselect', options: [{key:'1',label:'1'},{key:'2',label:'2'},{key:'3',label:'3'},{key:'4',label:'4'},{key:'5',label:'5'}], default: '1,2,3,4,5' },
          { key: 'rowAdditionalText', label: 'Additional Text', group: 'Body', options: TBX_BOOL_OPTS,      default: 'off' },
          { key: 'rowRightControl',   label: 'Right Control',   group: 'Body', options: TBX_BOOL_OPTS,      default: 'off' },
          { key: 'showFooter',        label: 'Show',            group: 'Footer', options: TBX_BOOL_OPTS,    default: 'on' },
          { key: 'footerBtnPos',      label: 'Button Position', group: 'Footer', options: CARD_BTN_POS_OPTS, default: 'horizontal' },
          { key: 'footerSegments',    label: 'Segments',        group: 'Footer', options: CARD_SEG_OPTS,    default: '2' },
        ],
        preview: (v, p) => `<div style="display:flex;align-items:center;justify-content:center;padding:24px;">${crdHtml(v, p)}</div>`,
        code:    (v, p) => crdHtml(v, p),
        css:     (v, p) => crdCss(v, p),
      })}

      <p class="page-desc">Card, ilişkili içeriği bir Header ve bir Body olmak üzere iki bölümde gruplayan bir kapsayıcıdır. Header; Bordered/Borderless tip, Center/Left pozisyon ve sol/sağ 40×40 control slotlarıyla özelleştirilebilir. Body ise opsiyonel bir alt-bölüm başlığı (Content Header) ve Label/Value satırlarından oluşan esnek bir içerik alanıdır.</p>

      <h2 id="Header Types">Header Types</h2>
      <p class="page-desc">Figma'da Header, 3 bağımsız eksenden oluşuyor: <strong>Type</strong> (Bordered/Borderless — arka plan+ayraç, aşağıdaki Anatomy tablosunda), <strong>Position</strong> (Center/Left) ve <strong>Segments</strong> (1/2/3 — kaç control slotu dolu). Position × Segments = <strong>6 temel header düzeni</strong>; bunların her biri Bordered veya Borderless olabildiği için toplam 6 × 2 = 12 Figma varyantı var. Bu projede "Segments" ayrı bir seçenek olarak değil, sol/sağ control'lerin bağımsız içerik tipi seçimiyle (None dahil) genelleştirildi — aşağıdaki 6 satır Figma'nın kendi Segments 1/2/3 karşılıklarını gösteriyor.</p>
      <table class="token-table">
        <thead><tr><th style="width:120px">Layout</th><th style="width:35%">Preview</th><th>Açıklama</th></tr></thead>
        <tbody>
          <tr>
            <td>Center · 1 segment</td>
            <td>${crdHeaderHtml({ position: 'center' })}</td>
            <td>Sadece ortalanmış başlık, control yok. Segments=1'in Figma karşılığı.</td>
          </tr>
          <tr>
            <td>Center · 2 segments</td>
            <td>${crdHeaderHtml({ position: 'center', rightControl: 'button' })}</td>
            <td>Tek control (burada sağda Button). Figma'nın kendisi de bu durumda karşı tarafa boş bir 40px "hayalet" kutu koyarak başlığı ortada tutuyor — burada aynı etki, karşı taraftaki control'ün görünmez bir "aynası" ile (herhangi bir genişlikte) sağlanıyor.</td>
          </tr>
          <tr>
            <td>Center · 3 segments</td>
            <td>${crdHeaderHtml({ position: 'center', leftControl: 'icon', rightControl: 'button' })}</td>
            <td>İki control (sol Icon + sağ Button, Figma'nın varsayılan örneği). İki taraf da ~40px footprint'te olduğu sürece simetri bozulmaz.</td>
          </tr>
          <tr>
            <td>Left · 1 segment</td>
            <td>${crdHeaderHtml({ position: 'left' })}</td>
            <td>Başlık sola hizalı, kendi 16px inset'iyle. Control yok.</td>
          </tr>
          <tr>
            <td>Left · 2 segments</td>
            <td>${crdHeaderHtml({ position: 'left', rightControl: 'button' })}</td>
            <td>Tek control (sağda Button) — Left pozisyonda simetri kaygısı olmadığı için karşı tarafa hayalet/ayna gerekmiyor.</td>
          </tr>
          <tr>
            <td>Left · 3 segments</td>
            <td>${crdHeaderHtml({ position: 'left', leftControl: 'icon', rightControl: 'button' })}</td>
            <td>İki control (sol Icon + sağ Button) — en yaygın Card header kullanımı.</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Container</td><td>Border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Container</td><td>Border radius</td><td>${tk('--bt-radius-md')}</td><td>6px</td></tr>
          <tr><td>Header</td><td>Height</td><td>—</td><td>40px</td></tr>
          <tr><td>Header · Borderless (default)</td><td>Background</td><td>—</td><td>transparent</td></tr>
          <tr><td>Header · Bordered</td><td>Background</td><td>${tk('--bt-base-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>Header · Bordered</td><td>Border bottom</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td>Title</td><td>Font</td><td>${tk('--bt-title-sm-medium')}</td><td>500 · 14px/16px</td></tr>
          <tr><td>Title</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
        </tbody>
      </table>

      <h2 id="Control Slots">Control Slots</h2>
      <p class="page-desc">Header'ın sol ve sağ tarafındaki 40×40 slotlar; Icon, Button, Checkbox, Switch, Avatar, Avatar Group, Badge veya Text içeriklerinden birini gösterebilir — tümü design system'deki gerçek bileşenleri reuse eder.</p>
      <table class="token-table">
        <thead><tr><th>Content</th><th>Preview</th><th>Reused Class</th></tr></thead>
        <tbody>
          <tr><td>Icon</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'icon', showSubtitle: false })}</td><td>${tk('.bt-card__control-icon')} (24×24)</td></tr>
          <tr><td>Button</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'button', showSubtitle: false })}</td><td>${tk('bt-btn bt-btn--sm bt-btn--base-flat bt-btn--icon')}</td></tr>
          <tr><td>Checkbox</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'checkbox', showSubtitle: false })}</td><td>${tk('bt-checkbox__box')}</td></tr>
          <tr><td>Switch</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'switch', showSubtitle: false })}</td><td>${tk('bt-switch__track')}</td></tr>
          <tr><td>Avatar</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'avatar', showSubtitle: false })}</td><td>${tk('bt-avatar bt-avatar--xs bt-avatar--brand')}</td></tr>
          <tr><td>Avatar Group</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'avatarGroup', showSubtitle: false })}</td><td>${tk('bt-avatar bt-avatar--xs')} × N, ${tk('margin-left:-12px')}</td></tr>
          <tr><td>Badge</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'badge', showSubtitle: false })}</td><td>${tk('.bt-card__control-badge')}</td></tr>
          <tr><td>Text</td><td>${crdHeaderHtml({ position: 'left', leftControl: 'text', showSubtitle: false })}</td><td>${tk('.bt-card__control-text')}</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Control slot</td><td>Width / Height</td><td>—</td><td>min-width 40px (hug content) / 40px sabit</td></tr>
          <tr><td>Control · Icon</td><td>Color</td><td>${tk('--bt-icon-primary-strong')}</td><td>#535353</td></tr>
          <tr><td>Control · Badge</td><td>Background</td><td>${tk('--bt-base-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Control · Badge</td><td>Border radius</td><td>${tk('--bt-radius-full')}</td><td>9999px</td></tr>
        </tbody>
      </table>

      <h2 id="Body">Body</h2>
      <p class="page-desc">Body; opsiyonel bir Content Header bölüm ayracı, opsiyonel bir açıklama metni ve ikon + Label + Value düzeninde Row Segment listesinden oluşur.</p>
      <table class="token-table">
        <thead><tr><th>Örnek</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td>Content Header + Row Segment</td>
            <td><div class="bt-card" style="width:100%">
              ${crdHeaderHtml({ plain: true, position: 'left', showSubtitle: true, titleText: 'Content Title Here' })}
              <div class="bt-card__body" style="padding-top:0">${crdRowHtml({})}</div>
            </div></td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Body</td><td>Padding</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Body</td><td>Gap</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Description</td><td>Font</td><td>${tk('--bt-text-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Row · Left icon slot</td><td>Size</td><td>—</td><td>28×28 slot, 24×24 ikon</td></tr>
          <tr><td>Row · Left icon</td><td>Color</td><td>${tk('--bt-icon-primary-strong')}</td><td>#535353</td></tr>
          <tr><td>Row · Label / Value</td><td>Font</td><td>${tk('--bt-label-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Row · Label / Value</td><td>Color</td><td>${tk('--bt-text-primary-default')}</td><td>#1a1a1a</td></tr>
          <tr><td>Row · Additional Text</td><td>Font</td><td>${tk('--bt-label-xs-regular')}</td><td>400 · 12px/16px</td></tr>
          <tr><td>Row · Additional Text</td><td>Color</td><td>${tk('--bt-text-primary-emphasis')}</td><td>#727272</td></tr>
          <tr><td>Row · Col gap</td><td>Gap (label ↕ additional)</td><td>${tk('--bt-space-xs')}</td><td>4px</td></tr>
          <tr><td>Row · Right icon slot</td><td>Size</td><td>—</td><td>28×28 slot, 24×24 ikon</td></tr>
        </tbody>
      </table>

      <h2 id="Footer">Footer</h2>
      <p class="page-desc">Footer, Dialog footer'ıyla birebir aynı yapıya sahiptir: border-top ayracı, padding ve yatay/dikey düzenlenebilir buton sırası. Modifier sınıfı (${tk('bt-card--horizontal')} / ${tk('bt-card--vertical')}) ${tk('.bt-card')} wrapper'ına eklenir.</p>
      <table class="token-table">
        <thead><tr><th>Örnek</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td>Horizontal · 2 segments</td>
            <td>${crdHtml('default', { type: 'bordered', position: 'left', showSubtitle: 'off', showContentHeader: 'off', showDescription: 'off', rowAdditionalText: 'off', rowRightControl: 'off', showFooter: 'on', footerBtnPos: 'horizontal', footerSegments: '2' })}</td>
          </tr>
          <tr>
            <td>Vertical · 2 segments</td>
            <td>${crdHtml('default', { type: 'bordered', position: 'left', showSubtitle: 'off', showContentHeader: 'off', showDescription: 'off', rowAdditionalText: 'off', rowRightControl: 'off', showFooter: 'on', footerBtnPos: 'vertical', footerSegments: '2' })}</td>
          </tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table class="token-table" style="margin-top:12px">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Footer</td><td>Border top</td><td>${tk('--bt-border-primary-muted')}</td><td>#e6e6e6</td></tr>
          <tr><td>Footer</td><td>Padding (vertical)</td><td>${tk('--bt-space-xl')}</td><td>12px</td></tr>
          <tr><td>Footer</td><td>Padding (horizontal)</td><td>${tk('--bt-space-2xl')}</td><td>16px</td></tr>
          <tr><td>Footer</td><td>Gap between buttons</td><td>${tk('--bt-space-md')}</td><td>8px</td></tr>
          <tr><td>Footer · Horizontal button</td><td>Width</td><td>—</td><td>80px (sabit)</td></tr>
          <tr><td>Footer · Vertical button</td><td>Width</td><td>—</td><td>100%</td></tr>
        </tbody>
      </table>
    `};
  },
};

// Expose for isolation.html auto-render
window.PAGES_WEB = PAGES_WEB;
