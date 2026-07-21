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
      { label: 'Alert Toaster',     id: 'components/alert' },
      { label: 'Avatar',            id: 'components/avatar' },
      { label: 'Badge',             id: 'components/badge' },
      { label: 'Bottom Sheet',      id: 'components/bottom-sheet' },
      { label: 'Bottom Tab Bar',    id: 'components/bottom-tab-bar' },
      { label: 'Button',            id: 'components/button' },
      { label: 'Button Group',      id: 'components/button-group' },
      { label: 'Split Button',      id: 'components/split-button' },
      { label: 'Card',              id: 'components/card' },
      { label: 'Checkbox',          id: 'components/checkbox' },
      { label: 'Dialog',            id: 'components/dialog' },
      { label: 'FAB',               id: 'components/fab' },
      { label: 'Icon Button',       id: 'components/icon-button' },
      { label: 'List Item',         id: 'components/list-item' },
      { label: 'Navigation Drawer', id: 'components/nav-drawer' },
      { label: 'Progress',          id: 'components/progress' },
      { label: 'Radio Button',      id: 'components/radio-button' },
      { label: 'SearchBox',          id: 'components/searchbox' },
      { label: 'Sidebar',           id: 'components/sidebar' },
      { label: 'Skeleton',          id: 'components/skeleton' },
      { label: 'Snackbar',          id: 'components/snackbar' },
      { label: 'Switch',            id: 'components/switch' },
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

const sbxRailButton = () => `<div class="sbx-btn">${sbxIconPlaceholder}</div>`;
const sbxDrawerItem = (label) => `
          <div class="sbx-item">
            <div class="sbx-item-inner">
              <div class="sbx-item-icon">${sbxIconPlaceholder}</div>
              <div class="sbx-item-label">${label}</div>
            </div>
          </div>`;

// ── Variant A — Rail + Drawer ────────────────────────────────────
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

// ── Variant B — Platform Switcher ────────────────────────────────
const sb2IconChevron = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const sb2IconMore    = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

const sb2Item = (label, active = false) => `
          <div class="sb2-item${active ? ' active' : ''}">
            <div class="sb2-item-icon">${sbxIconPlaceholder}</div>
            <span class="sb2-item-label">${label}</span>
          </div>`;

function sidebarMarkupB() {
  return `
        <div class="sb2-shell">
          <aside class="sb2">
            <div class="sb2-switcher">
              <div class="sb2-switcher-icon"></div>
              <div class="sb2-switcher-info">
                <span class="sb2-switcher-name">Workspace Adı</span>
                <span class="sb2-switcher-sub">Platform / Plan</span>
              </div>
              <div class="sb2-switcher-chevron">${sb2IconChevron}</div>
            </div>
            <nav class="sb2-nav">
              <div class="sb2-section">
                ${sb2Item('Ana Sayfa', true)}
                ${sb2Item('Raporlar')}
                ${sb2Item('Görevler')}
              </div>
              <div class="sb2-section">
                <p class="sb2-section-label">Yönetim</p>
                ${sb2Item('Kullanıcılar')}
                ${sb2Item('Ayarlar')}
              </div>
              <div class="sb2-section">
                <p class="sb2-section-label">Destek</p>
                ${sb2Item('Belgeler')}
                ${sb2Item('Yardım')}
              </div>
            </nav>
            <div class="sb2-footer">
              <div class="sb2-user">
                <div class="sb2-user-avatar"></div>
                <div class="sb2-user-info">
                  <span class="sb2-user-name">Ad Soyad</span>
                  <span class="sb2-user-email">kullanici@email.com</span>
                </div>
                <div class="sb2-user-more">${sb2IconMore}</div>
              </div>
            </div>
          </aside>
        </div>`;
}

function sidebarCodeSnippetB() {
  return `<aside class="sb2">
  <div class="sb2-switcher">
    <div class="sb2-switcher-icon"><!-- logo --></div>
    <div class="sb2-switcher-info">
      <span class="sb2-switcher-name">Workspace Adı</span>
      <span class="sb2-switcher-sub">Platform</span>
    </div>
    <div class="sb2-switcher-chevron"><!-- chevron icon --></div>
  </div>
  <nav class="sb2-nav">
    <div class="sb2-section">
      <div class="sb2-item active">
        <div class="sb2-item-icon"><!-- icon --></div>
        <span class="sb2-item-label">Ana Sayfa</span>
      </div>
      <!-- …repeat per item -->
    </div>
    <div class="sb2-section">
      <p class="sb2-section-label">Bölüm Başlığı</p>
      <div class="sb2-item">
        <div class="sb2-item-icon"><!-- icon --></div>
        <span class="sb2-item-label">Menü Öğesi</span>
      </div>
    </div>
  </nav>
  <div class="sb2-footer">
    <div class="sb2-user">
      <div class="sb2-user-avatar"><!-- avatar --></div>
      <div class="sb2-user-info">
        <span class="sb2-user-name">Ad Soyad</span>
        <span class="sb2-user-email">email@domain.com</span>
      </div>
      <div class="sb2-user-more"><!-- more icon --></div>
    </div>
  </div>
</aside>`;
}

// ── Unified dispatcher ────────────────────────────────────────────
function sidebarMarkup(variant) {
  if (variant === 'b') return sidebarMarkupB();
  return sidebarMarkupA(variant);
}
function sidebarCodeSnippet(variant) {
  if (variant === 'b') return sidebarCodeSnippetB();
  return sidebarCodeSnippetA(variant);
}

// Isolation mode target — docs/isolation.html looks this up by ?component=.
window.PGD_ISOLATE = window.PGD_ISOLATE || {};
window.PGD_ISOLATE['sidebar'] = {
  mount(root, variant) { root.innerHTML = sidebarMarkup(variant); }
};

const SBX_VARIANTS = [
  { key: 'expanded',  label: 'A · Expanded' },
  { key: 'collapsed', label: 'A · Collapsed' },
  { key: 'b',         label: 'B · Platform Switcher' },
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
      <h2>When to use Variant A (Rail + Drawer)</h2>
      <ul>
        <li>Complex B2B apps where the rail provides always-visible global navigation</li>
        <li>When users need to collapse the drawer to maximise content area</li>
        <li>When the app has two distinct navigation levels (global rail + contextual drawer)</li>
      </ul>
      <h2>When to use Variant B (Platform Switcher)</h2>
      <ul>
        <li>SaaS dashboards, docs sites, or settings pages (Linear, Vercel, Notion style)</li>
        <li>When a workspace/organisation switcher is required at the top</li>
        <li>When nav items are grouped into labelled sections</li>
      </ul>
      <h2>Do</h2>
      <ul>
        <li><strong>A:</strong> Keep the rail's icon set short and stable — it should not scroll</li>
        <li><strong>A:</strong> Pin account/settings actions in the drawer bottom slot, separated by a divider</li>
        <li><strong>B:</strong> Use section labels to group related items; omit the label when there's only one group</li>
        <li><strong>B:</strong> Keep the switcher's workspace name short enough to avoid truncation at 260px</li>
      </ul>
      <h2>Don't</h2>
      <ul>
        <li><strong>A:</strong> Don't mix unrelated actions into the rail — it's for global, always-visible entry points only</li>
        <li><strong>A:</strong> Don't remove the rail when collapsing the drawer — the rail stays as the persistent anchor</li>
        <li><strong>B:</strong> Don't nest section groups more than one level deep</li>
        <li><strong>B:</strong> Don't use Variant B when a collapse behaviour is required — it has no collapse state</li>
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

      <p class="page-desc">Two sidebar variants. <strong>Variant A</strong> — a dark icon rail paired with an expandable drawer; best for complex B2B apps. <strong>Variant B</strong> — a single-pane sidebar with a workspace switcher and grouped nav sections; best for docs, settings, or SaaS dashboards.</p>

      <h2 id="Structure">Structure</h2>
      <p style="font-size:13px;color:var(--bt-text-primary-muted);margin-bottom:8px">Variant A</p>
      <table class="token-table" style="margin-bottom:24px;">
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

      <p style="font-size:13px;color:var(--bt-text-primary-muted);margin-bottom:8px">Variant B</p>
      <table class="token-table">
        <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td rowspan="2">Sidebar</td><td>Width</td><td>—</td><td>260px</td></tr>
          <tr><td>Background</td><td>${tk('Surface/Primary default')}</td><td>#ffffff</td></tr>
          <tr><td rowspan="3">Workspace Switcher</td><td>Height</td><td>—</td><td>52px</td></tr>
          <tr><td>Icon size</td><td>—</td><td>24 × 24px, radius 6px</td></tr>
          <tr><td>Name</td><td>${tk('Text-1/Medium')}</td><td>13px / 500</td></tr>
          <tr><td rowspan="2">Nav item</td><td>Height</td><td>—</td><td>32px</td></tr>
          <tr><td>Active bg</td><td>${tk('Primary/subtle')}</td><td>#e6f0fc · text #0d4e97</td></tr>
          <tr><td>Section label</td><td>—</td><td>11px / 500 / uppercase / #a3a3a3</td></tr>
          <tr><td rowspan="2">User row</td><td>Height</td><td>—</td><td>36px</td></tr>
          <tr><td>Avatar</td><td>—</td><td>24px circle · ${tk('Base/emphasis')}</td></tr>
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
  'base-solid':        { bg:'var(--bt-base-light)',          color:'var(--bt-text-primary-default)',   divider:'var(--bt-border-primary-default)', hover:{bg:'var(--bt-base-emphasis)'},      active:{bg:'var(--bt-base-emphasis)'},      focus:'rgba(212,212,212,.50)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'base-outline':      { border:'var(--bt-border-primary-default)', color:'var(--bt-text-primary-default)', divider:'var(--bt-border-primary-default)', hover:{bg:'var(--bt-base-emphasis)'},  active:{bg:'var(--bt-base-emphasis)'},      focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'base-flat':         { color:'var(--bt-text-primary-default)',   divider:'rgba(163,163,163,0.40)',   hover:{bg:'var(--bt-base-emphasis)'},      active:{bg:'var(--bt-base-emphasis)'},      focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'base-ghost':        { color:'var(--bt-text-primary-default)',   divider:'rgba(163,163,163,0.40)',   hover:{effect:'text-decoration: underline'},                                            focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-solid':     { bg:'var(--bt-primary-default)',    color:'var(--bt-text-primary-inverted)',  divider:'var(--bt-primary-solid)',          hover:{bg:'var(--bt-primary-intense)'},     active:{bg:'var(--bt-primary-intense)'},    focus:'rgba(13,78,151,.50)',   dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'primary-outline':   { border:'var(--bt-primary-default)', color:'var(--bt-primary-default)',       divider:'var(--bt-primary-default)',        hover:{bg:'var(--bt-primary-subtle)'},      active:{bg:'var(--bt-primary-subtle)'},     focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-flat':      { color:'var(--bt-primary-default)',        divider:'rgba(13,78,151,0.25)',     hover:{bg:'var(--bt-primary-subtle)'},      active:{bg:'var(--bt-primary-subtle)'},     focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'primary-ghost':     { color:'var(--bt-primary-default)',        divider:'rgba(13,78,151,0.25)',     hover:{color:'var(--bt-primary-intense)'}, active:{color:'var(--bt-primary-default)'}, focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-solid':   { bg:'var(--bt-secondary-default)',  color:'var(--bt-text-primary-inverted)',  divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-secondary-intense)'},   active:{bg:'var(--bt-secondary-intense)'},  focus:'rgba(212,212,212,.50)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'secondary-outline': { border:'var(--bt-border-primary-default)', color:'var(--bt-text-primary-default)', divider:'var(--bt-border-primary-default)', hover:{bg:'var(--bt-secondary-emphasis)'}, active:{bg:'var(--bt-secondary-emphasis)'}, focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-flat':    { color:'var(--bt-text-primary-default)',   divider:'rgba(163,163,163,0.40)',   hover:{bg:'var(--bt-secondary-emphasis)'}, active:{bg:'var(--bt-secondary-emphasis)'}, focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'secondary-ghost':   { color:'var(--bt-text-primary-default)',   divider:'rgba(163,163,163,0.40)',   hover:{effect:'text-decoration: underline'},                                            focus:'rgba(212,212,212,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'success-solid':     { bg:'var(--bt-success-default)',    color:'var(--bt-text-primary-inverted)',  divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-success-intense)'},     active:{bg:'var(--bt-success-intense)'},    focus:'rgba(68,135,113,.24)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'success-outline':   { border:'var(--bt-border-success-default)', color:'var(--bt-text-success-default)', divider:'var(--bt-border-success-default)', hover:{bg:'var(--bt-success-subtle)'}, active:{bg:'var(--bt-success-subtle)'},  focus:'rgba(68,135,113,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'success-flat':      { color:'var(--bt-text-success-default)',    divider:'rgba(68,135,113,0.25)',   hover:{bg:'var(--bt-success-subtle)'},      active:{bg:'var(--bt-success-subtle)'},     focus:'rgba(68,135,113,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'success-ghost':     { color:'var(--bt-text-success-default)',    divider:'rgba(68,135,113,0.25)',   hover:{color:'var(--bt-success-intense)'},  active:{color:'var(--bt-success-default)'}, focus:'rgba(68,135,113,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-solid':     { bg:'var(--bt-warning-default)',    color:'var(--bt-text-primary-inverted)',  divider:'rgba(0,0,0,0.15)',                hover:{bg:'var(--bt-warning-intense)'},     active:{bg:'var(--bt-warning-intense)'},    focus:'rgba(212,175,44,.24)', dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'warning-outline':   { border:'var(--bt-border-warning-default)', color:'var(--bt-text-warning-default)', divider:'var(--bt-border-warning-default)', hover:{bg:'var(--bt-warning-subtle)'}, active:{bg:'var(--bt-warning-subtle)'},  focus:'rgba(212,175,44,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-flat':      { color:'var(--bt-text-warning-default)',    divider:'rgba(212,175,44,0.35)',   hover:{bg:'var(--bt-warning-subtle)'},      active:{bg:'var(--bt-warning-subtle)'},     focus:'rgba(212,175,44,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-ghost':     { color:'var(--bt-text-warning-default)',    divider:'rgba(212,175,44,0.35)',   hover:{color:'var(--bt-warning-intense)'},  active:{color:'var(--bt-warning-default)'}, focus:'rgba(212,175,44,.24)', dis:{color:'var(--bt-text-primary-muted)'} },
  'error-solid':       { bg:'var(--bt-error-default)',      color:'var(--bt-text-primary-inverted)',  divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-error-intense)'},       active:{bg:'var(--bt-error-intense)'},      focus:'rgba(232,75,91,.24)',  dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'error-outline':     { border:'var(--bt-border-error-default)', color:'var(--bt-text-error-default)', divider:'var(--bt-border-error-default)', hover:{bg:'var(--bt-error-subtle)'},        active:{bg:'var(--bt-error-subtle)'},       focus:'rgba(232,75,91,.24)',  dis:{color:'var(--bt-text-primary-muted)'} },
  'error-flat':        { color:'var(--bt-text-error-default)',      divider:'rgba(232,75,91,0.25)',    hover:{bg:'var(--bt-error-subtle)'},        active:{bg:'var(--bt-error-subtle)'},       focus:'rgba(232,75,91,.24)',  dis:{color:'var(--bt-text-primary-muted)'} },
  'error-ghost':       { color:'var(--bt-text-error-default)',      divider:'rgba(232,75,91,0.25)',    hover:{color:'var(--bt-error-intense)'},    active:{color:'var(--bt-error-default)'},   focus:'rgba(232,75,91,.24)',  dis:{color:'var(--bt-text-primary-muted)'} },
  'information-solid': { bg:'var(--bt-information-default)', color:'var(--bt-text-primary-inverted)', divider:'rgba(255,255,255,0.30)',           hover:{bg:'var(--bt-information-intense)'}, active:{bg:'var(--bt-information-intense)'},focus:'rgba(13,78,151,.50)',   dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'information-outline':{ border:'var(--bt-border-information-default)', color:'var(--bt-information-default)', divider:'var(--bt-border-information-default)', hover:{bg:'var(--bt-information-subtle)'}, active:{bg:'var(--bt-information-subtle)'}, focus:'rgba(13,78,151,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
  'information-flat':  { color:'var(--bt-information-default)',     divider:'rgba(13,78,151,0.25)',    hover:{bg:'var(--bt-information-subtle)'},  active:{bg:'var(--bt-information-subtle)'}, focus:'rgba(13,78,151,.50)',   dis:{color:'var(--bt-text-primary-muted)'} },
  'information-ghost': { color:'var(--bt-information-default)',     divider:'rgba(13,78,151,0.25)',    hover:{color:'var(--bt-information-intense)'}, active:{color:'var(--bt-information-default)'}, focus:'rgba(13,78,151,.50)', dis:{color:'var(--bt-text-primary-muted)'} },
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
    if (d.active.bg)    lines.push(prop('background', d.active.bg));
    if (d.active.color) lines.push(prop('color', d.active.color));
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
      <h3 style="font-size:13px;font-weight:600;color:var(--bt-text-primary);margin:20px 0 12px;text-transform:capitalize;">${theme.label}</h3>
      ${_spltStateTable(theme.key)}`).join('')}
    `};
  }
};

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
const CHK_DESC_OPTS = [
  { key: 'show', label: 'Show' },
  { key: 'hide', label: 'Hide' },
];
const CHK_SHOW_OPTS = [
  { key: 'yes', label: 'Show' },
  { key: 'no',  label: 'Hide' },
];

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
    desc         = 'show',
    showContent  = 'yes',
    showLabel    = 'yes',
    showRequired = 'yes',
  } = props;
  const boxCls   = _chkBoxCls(state, checked, size);
  const fieldCls = _chkFieldCls(state, side);
  const descHtml = desc === 'show' ? `\n        <p class="bt-checkbox__desc">Description for additional information here.</p>` : '';
  const labelHtml    = showLabel    === 'yes' ? `<span class="bt-checkbox__label">Label Text</span>` : '';
  const requiredHtml = showRequired === 'yes' ? `<span class="bt-checkbox__required">(Required Field)</span>` : '';
  const contentHtml  = showContent  === 'yes' ? `
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
    desc         = 'show',
    showContent  = 'yes',
    showLabel    = 'yes',
    showRequired = 'yes',
  } = props;
  const boxCls   = _chkBoxCls(state, checked, size);
  const fieldCls = _chkFieldCls(state, side);
  const chk      = checked === 'on' ? '\n    <!-- checkmark svg -->' : '';
  const labelLine    = showLabel    === 'yes' ? '\n      <span class="bt-checkbox__label">Label Text</span>' : '';
  const requiredLine = showRequired === 'yes' ? '\n      <span class="bt-checkbox__required">(Required Field)</span>' : '';
  const descLine     = (showContent === 'yes' && desc === 'show') ? '\n    <p class="bt-checkbox__desc">Description for additional information here.</p>' : '';
  const contentBlock = showContent === 'yes'
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
        lines.push(p('box-shadow',   '0 0 0 3px rgba(212,212,212,0.5)'));
      } else {
        lines.push(p('background',   'var(--bt-surface-brand-intense)  /* #0f447d */'));
        lines.push(p('box-shadow',   '0 0 0 3px rgba(13,78,151,0.5)'));
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
          { key: 'showContent',  label: 'Show Content',    options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',      options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',   options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'desc',         label: 'Show Description',options: CHK_DESC_OPTS,    default: 'show'  },
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
          { key: 'showContent',  label: 'Show Content',    options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',      options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',   options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'desc',         label: 'Show Description',options: CHK_DESC_OPTS,    default: 'show'  },
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
          <tr><td rowspan="2">Focused</td><td>Off</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(212,212,212,0.5)</td></tr>
          <tr><td>On</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.5)</td></tr>
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
          { key: 'showContent',  label: 'Show Content',    options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',      options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',   options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'desc',         label: 'Show Description',options: CHK_DESC_OPTS,    default: 'show'  },
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
            <td>${pw(chkPreview(s.key, { checked:'off', desc:'hide' }))}</td>
            <td>${pw(chkPreview(s.key, { checked:'on',  desc:'hide' }))}</td>
          </tr>`).join('')}
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
            <td>${pw(chkPreview('default', { checked:'off', size:'lg', desc:'hide' }))}</td>
            <td>${pw(chkPreview('default', { checked:'on',  size:'lg', desc:'hide' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Md (Default)</span></td>
            <td>16 × 16px</td>
            <td>12 × 12px</td>
            <td>${pw(chkPreview('default', { checked:'off', size:'md', desc:'hide' }))}</td>
            <td>${pw(chkPreview('default', { checked:'on',  size:'md', desc:'hide' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Sm</span></td>
            <td>12 × 12px</td>
            <td>12 × 12px</td>
            <td>${pw(chkPreview('default', { checked:'off', size:'sm', desc:'hide' }))}</td>
            <td>${pw(chkPreview('default', { checked:'on',  size:'sm', desc:'hide' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2 id="Label Position">Label Position</h2>
      <table class="token-table">
        <thead><tr><th>Side</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Label Right</span></td>
            <td>${pw(chkPreview('default', { checked:'on', side:'right', desc:'show' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Label Left</span></td>
            <td>${pw(chkPreview('default', { checked:'on', side:'left', desc:'show' }))}</td>
          </tr>
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
    desc         = 'show',
    showContent  = 'yes',
    showLabel    = 'yes',
    showRequired = 'yes',
  } = props;
  const dotCls   = _rdDotCls(state, selected, size);
  const fieldCls = _rdFieldCls(state, side);
  const descHtml = desc === 'show' ? `\n        <p class="bt-radio__desc">Description for additional information here.</p>` : '';
  const labelHtml    = showLabel    === 'yes' ? `<span class="bt-radio__label">Label Text</span>` : '';
  const requiredHtml = showRequired === 'yes' ? `<span class="bt-radio__required">(Required Field)</span>` : '';
  const contentHtml  = showContent  === 'yes' ? `
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
    desc         = 'show',
    showContent  = 'yes',
    showLabel    = 'yes',
    showRequired = 'yes',
  } = props;
  const dotCls   = _rdDotCls(state, selected, size);
  const fieldCls = _rdFieldCls(state, side);
  const labelLine    = showLabel    === 'yes' ? '\n      <span class="bt-radio__label">Label Text</span>' : '';
  const requiredLine = showRequired === 'yes' ? '\n      <span class="bt-radio__required">(Required Field)</span>' : '';
  const descLine     = (showContent === 'yes' && desc === 'show') ? '\n    <p class="bt-radio__desc">Description for additional information here.</p>' : '';
  const contentBlock = showContent === 'yes'
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
      lines.push(p('box-shadow', '0 0 0 3px rgba(212,212,212,0.5)'));
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
      lines.push(p('box-shadow', '0 0 0 3px rgba(13,78,151,0.5)'));
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
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'show'  },
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
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'show'  },
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
          <tr><td rowspan="2">Focused</td><td>Off</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(212,212,212,0.5)</td></tr>
          <tr><td>On</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.5)</td></tr>
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
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS,    default: 'yes'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS,    default: 'show'  },
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
            <td>${pw(rdPreview(s.key, { selected:'off', desc:'hide' }))}</td>
            <td>${pw(rdPreview(s.key, { selected:'on',  desc:'hide' }))}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Diameter</th><th>Inner dot</th><th>Unselected</th><th>Selected</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Lg</span></td>
            <td>20px</td><td>8px</td>
            <td>${pw(rdPreview('default', { selected:'off', size:'lg', desc:'hide' }))}</td>
            <td>${pw(rdPreview('default', { selected:'on',  size:'lg', desc:'hide' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Md (Default)</span></td>
            <td>16px</td><td>6px</td>
            <td>${pw(rdPreview('default', { selected:'off', size:'md', desc:'hide' }))}</td>
            <td>${pw(rdPreview('default', { selected:'on',  size:'md', desc:'hide' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Sm</span></td>
            <td>12px</td><td>4.5px</td>
            <td>${pw(rdPreview('default', { selected:'off', size:'sm', desc:'hide' }))}</td>
            <td>${pw(rdPreview('default', { selected:'on',  size:'sm', desc:'hide' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2 id="Label Position">Label Position</h2>
      <table class="token-table">
        <thead><tr><th>Side</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Label Right</span></td>
            <td>${pw(rdPreview('default', { selected:'on', side:'right', desc:'show' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Label Left</span></td>
            <td>${pw(rdPreview('default', { selected:'on', side:'left',  desc:'show' }))}</td>
          </tr>
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
    desc         = 'show',
    showContent  = 'yes',
    showLabel    = 'yes',
    showRequired = 'yes',
  } = props;
  const trackCls = _swTrackCls(state, on, size);
  const fieldCls = _swFieldCls(state, side);
  const descHtml = desc === 'show' ? `\n        <div class="bt-switch__desc-row"><p class="bt-switch__desc">Description for additional information here.</p></div>` : '';
  const labelHtml    = showLabel    === 'yes' ? `<span class="bt-switch__label">Label Text</span>` : '';
  const requiredHtml = showRequired === 'yes' ? `<span class="bt-switch__required">(Required Field)</span>` : '';
  const contentHtml  = showContent  === 'yes' ? `
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
    desc         = 'show',
    showContent  = 'yes',
    showLabel    = 'yes',
    showRequired = 'yes',
  } = props;
  const trackCls = _swTrackCls(state, on, size);
  const fieldCls = _swFieldCls(state, side);
  const labelLine    = showLabel    === 'yes' ? '\n      <span class="bt-switch__label">Label Text</span>' : '';
  const requiredLine = showRequired === 'yes' ? '\n      <span class="bt-switch__required">(Required Field)</span>' : '';
  const descLine     = (showContent === 'yes' && desc === 'show') ? '\n    <div class="bt-switch__desc-row">\n      <p class="bt-switch__desc">Description for additional information here.</p>\n    </div>' : '';
  const contentBlock = showContent === 'yes'
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
        lines.push(p('box-shadow',  '0 0 0 3px rgba(212,212,212,0.5)'));
      } else {
        lines.push(p('background',  'var(--bt-surface-brand-intense)  /* #0f447d */'));
        lines.push(p('box-shadow',  '0 0 0 3px rgba(13,78,151,0.5)'));
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
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'show'  },
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
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'show'  },
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
          <tr><td rowspan="2">Focused</td><td>Off</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(212,212,212,0.5)</td></tr>
          <tr><td>On</td><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.5)</td></tr>
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
          { key: 'showContent',  label: 'Show Content',     options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showLabel',    label: 'Show Label',       options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'showRequired', label: 'Show Required',    options: CHK_SHOW_OPTS, default: 'yes'   },
          { key: 'desc',         label: 'Show Description', options: CHK_DESC_OPTS, default: 'show'  },
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
            <td>${pw(swPreview(s.key, { on:'off', desc:'hide' }))}</td>
            <td>${pw(swPreview(s.key, { on:'on',  desc:'hide' }))}</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Track</th><th>Thumb</th><th>Off</th><th>On</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Lg</span></td>
            <td>48 × 28px</td><td>24 × 24px</td>
            <td>${pw(swPreview('default', { on:'off', size:'lg', desc:'hide' }))}</td>
            <td>${pw(swPreview('default', { on:'on',  size:'lg', desc:'hide' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Md</span></td>
            <td>40 × 24px</td><td>20 × 20px</td>
            <td>${pw(swPreview('default', { on:'off', size:'md', desc:'hide' }))}</td>
            <td>${pw(swPreview('default', { on:'on',  size:'md', desc:'hide' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Sm (Default)</span></td>
            <td>32 × 20px</td><td>16 × 16px</td>
            <td>${pw(swPreview('default', { on:'off', size:'sm', desc:'hide' }))}</td>
            <td>${pw(swPreview('default', { on:'on',  size:'sm', desc:'hide' }))}</td>
          </tr>
        </tbody>
      </table>

      <h2 id="Content Position">Content Position</h2>
      <table class="token-table">
        <thead><tr><th>Side</th><th>Preview</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="token-name">Content Left (Default)</span></td>
            <td>${pw(swPreview('default', { on:'on', side:'left', desc:'show' }))}</td>
          </tr>
          <tr>
            <td><span class="token-name">Content Right</span></td>
            <td>${pw(swPreview('default', { on:'on', side:'right', desc:'show' }))}</td>
          </tr>
        </tbody>
      </table>
    `};
  },
};

// ── Searchbox ────────────────────────────────────────────────────
const _sbxIconClear = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

const SBX_SIZE_OPTS = [
  { key: 'lg', label: 'Lg' },
  { key: 'md', label: 'Md' },
  { key: 'sm', label: 'Sm (Default)' },
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
      <div class="${cls}" style="max-width:320px;">
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
  if (state === 'active') lines.push(p('box-shadow', '0 0 0 3px rgba(13,78,151,0.5)'));
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
          { key: 'size', label: 'Size', options: SBX_SIZE_OPTS, default: 'sm' },
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
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.5)</td></tr>
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
          <tr><td>font-size / line-height</td><td>${tk('--bt-text-xs-size')} / ${tk('--bt-text-xs-lh')}</td><td>12px / 16px</td></tr>
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
        <li>SearchBox'ı genel bir form text field'ı olarak kullanma — o iş için Text Field bileşenini tercih et</li>
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
          { key: 'size', label: 'Size', options: SBX_SIZE_OPTS, default: 'sm' },
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

      <h2 id="Sizes">Sizes</h2>
      <table class="token-table">
        <thead><tr><th>Size</th><th>Height</th><th>Preview</th></tr></thead>
        <tbody>
          <tr><td><span class="token-name">Lg</span></td><td>36px</td><td>${sbxPreview('default', { size: 'lg' })}</td></tr>
          <tr><td><span class="token-name">Md</span></td><td>32px</td><td>${sbxPreview('default', { size: 'md' })}</td></tr>
          <tr><td><span class="token-name">Sm (Default)</span></td><td>28px</td><td>${sbxPreview('default', { size: 'sm' })}</td></tr>
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
  'warning-flat':      'rgba(212,175,44,0.35)',   'warning-ghost':      'rgba(212,175,44,0.35)',
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
  'primary-outline':    { default:{shadow:'inset 0 0 0 1px var(--bt-primary-default)',color:'var(--bt-primary-default)'},                                                                          focus:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default), 0 0 0 3px rgba(13,78,151,.50)'},     hover:{bg:'var(--bt-primary-subtle)'},   active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'primary-flat':       { default:{color:'var(--bt-primary-default)'},                                              hover:{bg:'var(--bt-primary-subtle)'},                                         focus:{bg:'var(--bt-primary-subtle)',shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                 active:{bg:'var(--bt-primary-subtle)',shadow:'inset 0 0 0 1px var(--bt-primary-default)'},     dis:{color:'var(--bt-text-primary-muted)'} },
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
  'success-outline':    { default:{shadow:'inset 0 0 0 1px var(--bt-border-success-default)',color:'var(--bt-text-success-default)'},                                                              focus:{bg:'var(--bt-success-subtle)',shadow:'inset 0 0 0 1px var(--bt-border-success-default), 0 0 0 3px rgba(68,135,113,.24)'},hover:{bg:'var(--bt-success-subtle)'},  active:{bg:'var(--bt-success-subtle)',shadow:'inset 0 0 0 1px var(--bt-success-default)'},      dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'success-flat':       { default:{color:'var(--bt-text-success-default)'},                                         hover:{bg:'var(--bt-success-subtle)'},                                         focus:{bg:'var(--bt-success-subtle)',shadow:'0 0 0 3px rgba(68,135,113,.24)'},                                                active:{bg:'var(--bt-success-subtle)',shadow:'inset 0 0 0 1px var(--bt-success-default)'},      dis:{color:'var(--bt-text-primary-muted)'} },
  'success-ghost':      { default:{color:'var(--bt-text-success-default)'},                                         hover:{color:'var(--bt-success-intense)'},                                     focus:{shadow:'0 0 0 3px rgba(68,135,113,.24)'},                                                                             active:{color:'var(--bt-success-default)'},                                           dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-solid':      { default:{bg:'var(--bt-warning-default)',color:'var(--bt-text-primary-inverted)'},          hover:{bg:'var(--bt-warning-intense)'},                                        focus:{shadow:'0 0 0 3px rgba(212,175,44,.24)'},                                                                             active:{bg:'var(--bt-warning-intense)'},                                              dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'warning-outline':    { default:{shadow:'inset 0 0 0 1px var(--bt-border-warning-default)',color:'var(--bt-text-warning-default)'},                                                              focus:{bg:'var(--bt-warning-subtle)',shadow:'inset 0 0 0 1px var(--bt-border-warning-default), 0 0 0 3px rgba(212,175,44,.24)'},hover:{bg:'var(--bt-warning-subtle)'},  active:{bg:'var(--bt-warning-subtle)',shadow:'inset 0 0 0 1px var(--bt-warning-default)'},      dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'warning-flat':       { default:{color:'var(--bt-text-warning-default)'},                                         hover:{bg:'var(--bt-warning-subtle)'},                                         focus:{bg:'var(--bt-warning-subtle)',shadow:'0 0 0 3px rgba(212,175,44,.24)'},                                                active:{bg:'var(--bt-warning-subtle)',shadow:'inset 0 0 0 1px var(--bt-warning-default)'},      dis:{color:'var(--bt-text-primary-muted)'} },
  'warning-ghost':      { default:{color:'var(--bt-text-warning-default)'},                                         hover:{color:'var(--bt-warning-intense)'},                                     focus:{shadow:'0 0 0 3px rgba(212,175,44,.24)'},                                                                             active:{color:'var(--bt-warning-default)'},                                           dis:{color:'var(--bt-text-primary-muted)'} },
  'error-solid':        { default:{bg:'var(--bt-error-default)',color:'var(--bt-text-primary-inverted)'},            hover:{bg:'var(--bt-error-intense)'},                                          focus:{shadow:'0 0 0 3px rgba(232,75,91,.24)'},                                                                              active:{bg:'var(--bt-error-intense)'},                                                dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'error-outline':      { default:{shadow:'inset 0 0 0 1px var(--bt-border-error-default)',color:'var(--bt-text-error-default)'},                                                                  focus:{bg:'var(--bt-error-subtle)',shadow:'inset 0 0 0 1px var(--bt-border-error-default), 0 0 0 3px rgba(232,75,91,.24)'},   hover:{bg:'var(--bt-error-subtle)'},     active:{bg:'var(--bt-error-subtle)',shadow:'inset 0 0 0 1px var(--bt-error-default)'},         dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'error-flat':         { default:{color:'var(--bt-text-error-default)'},                                           hover:{bg:'var(--bt-error-subtle)'},                                           focus:{bg:'var(--bt-error-subtle)',shadow:'0 0 0 3px rgba(232,75,91,.24)'},                                                   active:{bg:'var(--bt-error-subtle)',shadow:'inset 0 0 0 1px var(--bt-error-default)'},         dis:{color:'var(--bt-text-primary-muted)'} },
  'error-ghost':        { default:{color:'var(--bt-text-error-default)'},                                           hover:{color:'var(--bt-error-intense)'},                                       focus:{shadow:'0 0 0 3px rgba(232,75,91,.24)'},                                                                              active:{color:'var(--bt-error-default)'},                                             dis:{color:'var(--bt-text-primary-muted)'} },
  'information-solid':  { default:{bg:'var(--bt-information-default)',color:'var(--bt-text-primary-inverted)'},      hover:{bg:'var(--bt-information-intense)'},                                    focus:{shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                                                              active:{bg:'var(--bt-information-intense)'},                                          dis:{bg:'var(--bt-base-muted)',color:'var(--bt-text-primary-muted)'} },
  'information-outline':{ default:{shadow:'inset 0 0 0 1px var(--bt-border-information-default)',color:'var(--bt-information-default)'},                                                           focus:{bg:'var(--bt-information-subtle)',shadow:'inset 0 0 0 1px var(--bt-border-information-default), 0 0 0 3px rgba(13,78,151,.50)'},hover:{bg:'var(--bt-information-subtle)'},active:{bg:'var(--bt-information-subtle)',shadow:'inset 0 0 0 1px var(--bt-information-default)'},dis:{color:'var(--bt-text-primary-muted)',shadow:'inset 0 0 0 1px var(--bt-base-muted)'} },
  'information-flat':   { default:{color:'var(--bt-information-default)'},                                          hover:{bg:'var(--bt-information-subtle)'},                                     focus:{bg:'var(--bt-information-subtle)',shadow:'0 0 0 3px rgba(13,78,151,.50)'},                                             active:{bg:'var(--bt-information-subtle)',shadow:'inset 0 0 0 1px var(--bt-information-default)'},dis:{color:'var(--bt-text-primary-muted)'} },
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
      <h3 style="font-size:13px;font-weight:600;color:var(--bt-text-primary);margin:20px 0 12px;text-transform:capitalize;">${theme.label}</h3>
      ${_btnStateTable(theme.key)}`).join('')}
    `};
  }
};

// ── TextBox ─────────────────────────────────────────────────────
const _tbxIconValidation = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
const _tbxIconClear      = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

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
const TBX_SIZE_OPTS  = [{ key: 'sm', label: 'Sm' }, { key: 'md', label: 'Md' }, { key: 'lg', label: 'Lg' }];
const TBX_BOOL_OPTS  = [{ key: 'yes', label: 'Yes' }, { key: 'no', label: 'No' }];

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
  const inputAttrs     = (isFilled ? ' value="Placeholder Text"' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');
  return `<div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${inputAttrs} /></div>${validationHtml}${clearHtml}`;
}

function tbxPreview(state, props = {}) {
  const { size = 'sm', label = 'yes', required = 'yes', helper = 'yes' } = props;
  const labelHtml    = label    === 'yes' ? `<span class="bt-tbx__label">Label Text</span>` : '';
  const requiredHtml = required === 'yes' ? `<span class="bt-tbx__required">Required Field</span>` : '';
  const metaHtml  = (label === 'yes' || required === 'yes') ? `<div class="bt-tbx__meta">${labelHtml}${requiredHtml}</div>` : '';
  const helperHtml   = helper   === 'yes' ? `<span class="bt-tbx__helper">Helper Text</span>` : '';
  return `
    <div style="display:flex;align-items:center;justify-content:center;padding:24px;">
      <div class="${_tbxCls(state, size)}" style="max-width:320px;">
        ${metaHtml}
        <div class="bt-tbx__input">${_tbxInputInner(state)}</div>
        ${helperHtml}
      </div>
    </div>`;
}

function tbxCode(state, props = {}) {
  const { size = 'sm', label = 'yes', required = 'yes', helper = 'yes' } = props;
  const cls = _tbxCls(state, size);
  const isError    = state === 'error' || state === 'error-focused';
  const isFilled   = state === 'filled';
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readonly';

  const metaParts = [];
  if (label    === 'yes') metaParts.push('  <span class="bt-tbx__label">Label Text</span>');
  if (required === 'yes') metaParts.push('  <span class="bt-tbx__required">Required Field</span>');
  const metaBlock   = metaParts.length ? `<div class="bt-tbx__meta">\n${metaParts.join('\n')}\n</div>\n` : '';
  const valBlock    = isError  ? `\n  <div class="bt-tbx__control">\n    <!-- circle-info icon 15×15 -->\n  </div>` : '';
  const clearBlock  = isFilled ? `\n  <div class="bt-tbx__control">\n    <!-- clear (×) icon 10×10 -->\n  </div>` : '';
  const helperBlock = helper === 'yes' ? `\n<span class="bt-tbx__helper">Helper Text</span>` : '';
  const inputAttrs  = (isFilled ? ' value="..."' : '') + (isDisabled ? ' disabled' : '') + (isReadOnly ? ' readonly' : '');

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
    isError ? '0 0 0 3px rgba(179,29,56,0.5)' : '0 0 0 3px rgba(13,78,151,0.5)'));
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
      { key: 'size',     label: 'Size',     options: TBX_SIZE_OPTS, default: 'sm'  },
      { key: 'label',    label: 'Label',    options: TBX_BOOL_OPTS, default: 'yes' },
      { key: 'required', label: 'Required', options: TBX_BOOL_OPTS, default: 'yes' },
      { key: 'helper',   label: 'Helper',   options: TBX_BOOL_OPTS, default: 'yes' },
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
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(13,78,151,0.5)</td></tr>
          <tr><td rowspan="2">Disabled</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Read Only</td><td>background</td><td>${tk('--bt-surface-primary-subtle')}</td><td>#f5f5f5</td></tr>
          <tr><td>border</td><td>${tk('--bt-border-primary-default')}</td><td>#d4d4d4</td></tr>
          <tr><td rowspan="2">Error</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>label / required</td><td>${tk('--bt-text-error-default')}</td><td>#b31d38</td></tr>
          <tr><td rowspan="2">Error Focused</td><td>border</td><td>${tk('--bt-border-error-default')}</td><td>#b31d38</td></tr>
          <tr><td>box-shadow</td><td colspan="2">0 0 0 3px rgba(179,29,56,0.5)</td></tr>
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
          <tr><td>font-size / line-height</td><td>${tk('--bt-text-xs-size')} / ${tk('--bt-text-xs-lh')}</td><td>12px / 16px</td></tr>
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
          <tr><td>Focus ring</td><td>box-shadow</td><td>${tk('Focus Ring/primary')}</td><td>0 0 0 3px rgba(13,78,151,0.5)</td></tr>
          <tr><td>Error focus ring</td><td>box-shadow</td><td>—</td><td>0 0 0 3px rgba(179,29,56,0.5)</td></tr>
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
                    <div class="bt-tbx__field"><input class="bt-tbx__text" type="text" placeholder="Placeholder Text"${s.key === 'filled' ? ' value="Placeholder Text"' : ''}${s.key === 'disabled' ? ' disabled' : ''}${s.key === 'readonly' ? ' readonly' : ''} /></div>
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

// Expose for isolation.html auto-render
window.PAGES_WEB = PAGES_WEB;
