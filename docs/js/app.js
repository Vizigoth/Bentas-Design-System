/* ============================================================
   MOBILE DESIGN SYSTEM — app.js
   Mews.design exact layout: sidebar + tabs + content + right TOC
   ============================================================ */


// Core engine — navigation and page content are in:
//   pages-mobile.js  (NAV_MOBILE, PAGES)
//   pages-web.js     (NAV_WEB, PAGES_WEB)

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
let currentId       = 'welcome';
let currentTab      = 0;
let openGroups      = new Set();
let currentPlatform = 'web';
let platformDropdownOpen = false;

// ── Helpers ─────────────────────────────────────────────────
function getCurrentNav() { return currentPlatform === 'mobile' ? NAV_MOBILE : NAV_WEB; }
function getPages()      { return currentPlatform === 'mobile' ? PAGES : PAGES_WEB; }
function getPage(id)     { return getPages()[id] || makePage(id); }

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
  search(getCurrentNav(), []);
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
        <svg class="nav-chevron ${isOpen ? 'open' : ''}" data-group-chevron="${item.label}" width="12" height="12"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
      <div class="${kidCls} ${isOpen ? 'open' : ''}" data-group-panel="${item.label}">
        <div class="nav-group-inner">
          ${item.children.map(c => renderItem(c, depth+1)).join('')}
        </div>
      </div>
    `;
  }

  el.innerHTML = getCurrentNav().map(item => renderItem(item, 0)).join('');
}

window.toggleGroup = function(label) {
  const wasOpen = openGroups.has(label);
  wasOpen ? openGroups.delete(label) : openGroups.add(label);

  const panel   = document.querySelector(`[data-group-panel="${label}"]`);
  const chevron = document.querySelector(`[data-group-chevron="${label}"]`);
  if (panel)   panel.classList.toggle('open', !wasOpen);
  if (chevron) chevron.classList.toggle('open', !wasOpen);
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
let _tocObserver = null;

function renderToc(page) {
  const col = document.getElementById('toc-col');
  const el  = document.getElementById('toc');
  if (_tocObserver) { _tocObserver.disconnect(); _tocObserver = null; }
  if (!page.toc || page.toc.length === 0) {
    col.style.display = 'none';
    return;
  }
  col.style.display = 'block';

  const isGrouped = page.toc.length > 0 && typeof page.toc[0] === 'object';
  let firstLink = true;

  if (isGrouped) {
    el.innerHTML = `
      <div class="toc-label">On this page</div>
      ${page.toc.map(({ group, items }) => `
        <div class="toc-group-label">${group}</div>
        ${items.map(item => {
          const isSub = typeof item === 'object' && item !== null;
          const label = isSub ? item.label : item;
          const cls = firstLink ? (firstLink = false, 'active') : '';
          const parentLink = `<div class="toc-link ${cls}" data-target="${label}" onclick="scrollToSection('${label}')">${label}</div>`;
          if (!isSub || !item.sub || !item.sub.length) return parentLink;
          const subLinks = item.sub.map(s =>
            `<div class="toc-link toc-link--sub" data-target="${label}-${s}" onclick="scrollToSection('${label}-${s}')">${s}</div>`
          ).join('');
          return parentLink + subLinks;
        }).join('')}
      `).join('')}
    `;
  } else {
    el.innerHTML = `
      <div class="toc-label">On this page</div>
      ${page.toc.map((t,i) => `
        <div class="toc-link ${i === 0 ? 'active' : ''}" data-target="${t}" onclick="scrollToSection('${t}')">${t}</div>
      `).join('')}
    `;
  }

  setupTocScrollSpy();
}

function setActiveTocLink(id) {
  document.querySelectorAll('#toc .toc-link').forEach(link => {
    link.classList.toggle('active', link.dataset.target === id);
  });
}

function setupTocScrollSpy() {
  const links = Array.from(document.querySelectorAll('#toc .toc-link'));
  const targets = links
    .map(link => document.getElementById(link.dataset.target))
    .filter(Boolean);
  if (!targets.length) return;

  // Page scrolls at document level (window) — .main-header is sticky (68px), so
  // headings must clear it before counting as "in view".
  _tocObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    setActiveTocLink(visible[0].target.id);
  }, {
    root: null,
    rootMargin: '-76px 0px -70% 0px',
    threshold: 0
  });

  targets.forEach(t => _tocObserver.observe(t));
}

window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActiveTocLink(id);
};

window.switchTokenView = function(sectionId, view, btn) {
  const preview = document.getElementById(`token-view-preview-${sectionId}`);
  const json    = document.getElementById(`token-view-json-${sectionId}`);
  if (!preview || !json) return;
  const isPreview = view === 'preview';
  preview.style.display = isPreview ? '' : 'none';
  json.style.display    = isPreview ? 'none' : '';
  btn.closest('.pgd-seg-ctrl').querySelectorAll('.pgd-seg-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
  });
};

window.copyText = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
    btn.classList.add('copy-btn--success');
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove('copy-btn--success'); }, 1500);
  });
};

// ── Platform Switcher ────────────────────────────────────────
const _iconTabletSmartphone = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M15 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2.5"/><path d="M8 19v.01"/></svg>`;
const _iconAppWindow        = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>`;
const _iconChevronsUpDown   = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const _iconCircleCheck      = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;

function renderPlatformSwitcher() {
  const el = document.getElementById('platform-switcher');
  if (!el) return;
  const isMobile = currentPlatform === 'mobile';
  const platformIcon = isMobile ? _iconTabletSmartphone : _iconAppWindow;
  const subLabel     = isMobile ? 'Mobile-v.1.0.0' : 'Web-v.1.0.0';

  const headerTitle = document.getElementById('platform-header-title');
  if (headerTitle) headerTitle.textContent = isMobile ? 'Mobile' : 'Web';

  el.innerHTML = `
    <button class="platform-trigger" onclick="togglePlatformDropdown(event)">
      <div class="platform-icon-btn">
        <div class="platform-icon-inner">${platformIcon}</div>
      </div>
      <div class="platform-text">
        <div class="platform-text-title">Documentation</div>
        <div class="platform-text-sub">${subLabel}</div>
      </div>
      <div class="platform-chevrons">${_iconChevronsUpDown}</div>
    </button>
    ${platformDropdownOpen ? `
    <div class="platform-dropdown">
      <div class="platform-option ${isMobile ? 'active' : ''}" onclick="switchPlatform('mobile', event)">
        <span class="platform-option-label">Mobile-V1.0.0</span>
        ${isMobile ? `<span class="platform-option-check">${_iconCircleCheck}</span>` : ''}
      </div>
      <div class="platform-option ${!isMobile ? 'active' : ''}" onclick="switchPlatform('web', event)">
        <span class="platform-option-label">Web-V1.0.0</span>
        ${!isMobile ? `<span class="platform-option-check">${_iconCircleCheck}</span>` : ''}
      </div>
    </div>` : ''}
  `;
}

window.togglePlatformDropdown = function(e) {
  e.stopPropagation();
  platformDropdownOpen = !platformDropdownOpen;
  renderPlatformSwitcher();
};

window.switchPlatform = function(platform, e) {
  e.stopPropagation();
  currentPlatform = platform;
  platformDropdownOpen = false;
  render();
};

document.addEventListener('click', e => {
  if (platformDropdownOpen && !e.target.closest('#platform-switcher')) {
    platformDropdownOpen = false;
    renderPlatformSwitcher();
  }
});

// ── Full render ─────────────────────────────────────────────
function render() {
  const page = getPage(currentId);
  renderPlatformSwitcher();
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
  renderPlatformSwitcher();
  render();
});
