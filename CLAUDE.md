# Bentas Design System — Proje Kuralları

## İçerik Kaldırma Yasağı — ZORUNLU

Mevcut bir sayfada herhangi bir içerik (tablo, bölüm, tab içeriği, playground vb.) kaldırılacaksa ya da başka bir yere taşınacaksa **kullanıcıya önceden bildir ve onay al.** Kullanıcı açıkça "kaldır", "sil" veya "taşı" demediği sürece hiçbir mevcut içerik silinmez veya yerinden oynatılmaz. Kural uygulamak (description eklemek, 4-tab standardı, anatomy başlıkları vb.) bu yasağı geçersiz kılmaz — içerik eklenir, mevcut içerik korunur.

## CSS Değişkenleri (Design Tokens) — ZORUNLU

`docs/css/styles.css` kapsamlı bir `--bt-*` design token seti tanımlıyor: spacing, radius, renk/surface, tipografi (font-size + line-height dahil). Yeni bir component eklerken veya mevcut bir component'i değiştirirken **her görsel değer** ilgili token'dan gelmeli — hardcoded px/hex yazılmamalı.

- **Spacing (padding, margin, gap):** `var(--bt-space-{none|2xs|xs|sm|md|lg|xl|2xl|3xl...}, fallback-px)`
- **Font-size / line-height:** `var(--bt-text-{2xs|xs|sm|md|lg|xl|2xl...}-size)` ve `var(--bt-text-{...}-lh)` — asla elle `font-size:12px` / `line-height:16px` yazma
- **Renkler (background, color, border-color):** `var(--bt-surface-*)`, `var(--bt-text-*)`, `var(--bt-border-*)` — hex kodunu sadece fallback olarak yaz: `var(--bt-token, #hex)`
- **Border-radius:** `var(--bt-radius-{none|xs|sm|md|lg|xl...})`

Sabit piksel değeri sadece **token karşılığı olmayan** boyutlarda kabul edilebilir (örn. bir ikonun tam 16×16px olması gibi element-özel bir ölçüm — bu da önce Figma'dan doğrulanmalı).

## Yeni token gerekiyorsa

Önce `docs/css/styles.css` `:root` bloğundaki mevcut `--bt-*` token'lar arasında eşleşen bir değer ara. Yoksa Figma'daki gerçek variable adını/değerini kullanıcıya danışmadan icat etme: Figma Desktop Bridge ile ilgili node'u incele (`get_metadata` → `get_design_context` → `get_screenshot`), çıkan `var(--.../token-name, fallback)` değerini styles.css'teki karşılığıyla eşleştir.

## Kontrol (component tamamlandığında)

O component'in CSS bloğunda hardcoded px/hex değer kalmadığından emin ol — yalnızca `var(--bt-*, fallback)` deseninin fallback kısmında px/hex görünmeli. CSS selector specificity'ye dikkat: aynı elementi hedefleyen daha genel bir kural (örn. `.content p`) component'in kendi class'ını ezebilir — component class'larını yeterince spesifik yaz (örn. `.bt-x-field .bt-x__desc`).

## Mevcut Component'leri Reuse Et — ZORUNLU

Yeni bir component oluştururken, içinde kullanılan alt öğeler (buton, ikon, input vb.) için **özel CSS yazmak yerine tasarım sistemine eklenmiş component class'larını kullan**.

- **Button**: `bt-btn bt-btn--{size} bt-btn--{variant}` — asla custom `button` stili yazma
- **Genel kural**: O öğenin design system'de karşılığı varsa onu kullan; yoksa yeni component olarak ekle

Örnek (Upload → Select Files):
```html
<!-- ✗ Yanlış: custom class -->
<button class="bt-dropzone__link">Select Files</button>

<!-- ✓ Doğru: gerçek button component -->
<button class="bt-btn bt-btn--xs bt-btn--primary-ghost">Select Files</button>
```

Yeni component tasarlanırken Figma'da iç öğelerin hangi design system component'ini kullandığı `get_design_context` çıktısından (`data-name="Button"` gibi) anlaşılabilir — o component'in class'larını kullan.

## Component İsimlendirme Kuralı

Bileşen adları **PascalCase** olmalı, kelimeler ayrı harf büyüklüğüyle birleştirilmeli:
- `SearchBox` (✓) — `Searchbox` değil (✗)
- `SplitButton` (✓), `IconButton` (✓), `TextBox` (✓)

Figma sayfa adı referans alınır; belirsizlik varsa major design system'lerdeki (Material, Carbon, Fluent) yaygın kullanım tercih edilir.

## Isolation Mode (Playground Toolbar)

`docs/js/playground.js` içindeki isolation butonu **tüm playground'larda standarttır** — ekstra kurulum gerekmez.

Yeni bir component eklendiğinde sadece `registerPlayground({id: 'pgd-xxx-overview', ...})` yeterli. `isolation.html`, `window.PAGES_WEB` üzerinden tüm sayfaların `render()` fonksiyonlarını çağırarak `_pgdConfigs`'i doldurur ve ilgili playground'ı `pgd_id` URL parametresiyle bulur.

`window.PGD_ISOLATE` kaydı veya `config.isolate` **artık yeni componentler için gerekli değil** — sadece Sidebar ve Alert gibi eskiden eklenmiş özel mount davranışları olan componentlerde kalır.

## Properties Drawer'da `prop.group` Kullanımı — ZORUNLU

`registerPlayground`'daki Properties drawer'ı (`docs/js/playground.js`), `config.props`'taki her prop'u opsiyonel bir `group: 'Etiket'` alanına göre bölümlere ayırabilir. Bu **sadece Card'a özel bir istisna değil, karmaşık (multi-section) component'ler için proje standardıdır**:

- **Header/Body/Footer gibi birbirinden ayrı, kendi içinde birden fazla prop barındıran mantıksal bölümleri olan component'lerde** (Card, Dialog gibi) her bölüm kendi `group` adıyla etiketlenmeli (örn. `group: 'Header'`, `group: 'Footer'`) — drawer'da bölüm başlıklarıyla ayrılmış, taranabilir bir liste üretir.
- **TEK bir mantıksal yapılandırma yüzeyi olan basit component'lerde** (Button'ın Theme/Size/Content/State'i gibi düz bir prop listesi) `group` HİÇ KULLANILMAMALI — tüm prop'lar group'suz bırakılmalı, drawer'da gereksiz bölüm ayraçları göstermeden tek düz liste kalmalı.

Yeni bir component eklerken hangi yaklaşımın uygun olduğuna karar vermek için: component'in Figma'daki tanımı birden fazla bağımsız alt-yapı (Header/Body/Footer gibi) içeriyorsa `group` kullan; tek bir düz varyasyon yüzeyiyse kullanma.

## Playground Toolbar Boolean Toggle Standardı — ZORUNLU

Bir playground'da bir öğeyi (icon, label, description, control vb.) tamamen göster/gizle amacıyla eklenen her toggle **`On`/`Off`** seçeneklerini kullanmalı — `Yes`/`No`, `Show`/`Hide`, `Visible`/`Hidden` gibi varyasyonlar kullanılmaz. Bu proje genelinde tek standart.

- Paylaşılan seçenek dizisi: `TBX_BOOL_OPTS = [{ key: 'on', label: 'On' }, { key: 'off', label: 'Off' }]` (dosyada en üstte, Checkbox bloğundan önce tanımlı — ilk kullanım noktasından önce olması **zorunlu**, aksi halde `const` temporal-dead-zone hatası verir).
- Yeni bir boolean toggle eklerken **ayrı bir seçenek dizisi tanımlama** — `TBX_BOOL_OPTS`'u doğrudan reuse et (`options: TBX_BOOL_OPTS`). Component'e özel bir isim gerekiyorsa (okunabilirlik için) `const XYZ_OPTS = TBX_BOOL_OPTS;` şeklinde alias ver, içeriğini kopyalama.
- Render fonksiyonlarındaki kontroller `=== 'on'` / `!== 'off'` şeklinde yazılır (eski `=== 'yes'` / `!== 'no'` / `=== 'show'` kalıpları kullanılmaz).
- Bu, sadece toggle'ın **iki seçeneğinin adı** için geçerli — prop'un kendi etiketi (örn. "Show Description", "Show Content") aynen kalır, sadece o etiketin altındaki Yes/No veya Show/Hide seçenekleri On/Off olur.

**Geçmiş:** Bu standart 2026-07-29'da geriye dönük olarak uygulandı — önceden Checkbox/Radio/Switch `Show`/`Hide` (`CHK_SHOW_OPTS`/`CHK_DESC_OPTS`), TextBox/Textarea/Accordion/Dialog `Yes`/`No` (`TBX_BOOL_OPTS`) kullanıyordu; hepsi `On`/`Off`'a taşındı, `CHK_SHOW_OPTS`/`CHK_DESC_OPTS` kaldırılıp `TBX_BOOL_OPTS`'a alias'landı. Bkz. HISTORY.md.

## Playground Preview Centering — ZORUNLU

`registerPlayground`'daki `preview` callback'i döndürdüğü HTML'i her zaman bir centering wrapper'a sarmalıdır — aksi hâlde component playground'da sola yaslanır.

İki standart kalıp:

```javascript
// Küçük / buton / ikon tipi bileşenler:
return `<div style="display:flex;align-items:center;justify-content:center;padding:16px;">${html}</div>`;

// Form / full-width bileşenler:
return `<div style="max-width:440px;width:100%;margin:0 auto;">${html}</div>`;
```

Yeni bir component eklenirken bu wrapper **zorunludur** — eklenmezse playground'da sola yaslanır.

## Playground CSS Sekmesi — ZORUNLU

`registerPlayground` çağrısında **`css` callback'i her zaman eklenmelidir** — bu, playground'daki Preview / Code / **CSS** üç sekmesinin tamamının görünmesini sağlar.

```javascript
registerPlayground({
  id: 'pgd-xxx-overview',
  variants: VARIANTS,
  preview: (state, p) => xxxHtml(state, p),
  code:    (state, p) => xxxHtml(state, p),
  css:     (state, p) => xxxCss(state, p),   // ← ZORUNLU
})
```

`xxxCss(state, props)` fonksiyonu:
- Seçili state/props kombinasyonuna göre **ilgili CSS kurallarını** üretir
- Her property değerinin yanına token adı + fallback hex comment ekler: `var(--bt-text-brand-default)  /* #0d4e97 */`
- Dosya başında top-level `const`/`function` olarak tanımlanır (render closure içinde değil)
- Satır üretimi için `const p = (k, v) => \`  \${k}: \${v};\`` helper pattern kullanılır
- **Return formatı ZORUNLU** — diğer componentlerle aynı `<pre>` wrapper ve HTML escape:
```javascript
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
return `<pre class="code-block" style="margin:0;border-radius:0;border:none;min-height:100%;">${esc(lines.join('\n'))}</pre>`;
```

## Her Bölümün Dokümantasyon Yapısı — ZORUNLU

Bir component sayfasındaki **her `<h2>` ve `<h3>` bölümü** — Header/Body/Footer/States/Anatomy/Building Blocks gibi her türlü bölüm — aynı üç adımlı yapıyı izler:

**1. Başlık** (`<h2>` veya `<h3>`)
- TOC'ta yer alan `<h2>` bölümlerinin `id` değeri `toc` dizisiyle birebir eşleşmeli
- Anatomy dahil her başlık açıkça yazılır — `<h3>Anatomy</h3>` başlıksız bare `<table>` kabul edilmez

**2. Description** (`<p class="page-desc">`) — ZORUNLU, istisnasız
- **3–5 cümle**, şu üç katmanı tek okuma akışında barındırır:
  1. **Tasarım kararı** — Bu bölüm neden bu şekilde tasarlandı? Hangi UX problemini çözüyor?
  2. **Görsel / davranışsal mekanik** — Hangi state'ler var, nasıl çalışıyor, hangi kısıtlamalar var?
  3. **Implementasyon referansı** — CSS class, token adı, Blazor/Telerik API (tek cümle yeterli)
- Anatomy bölümleri dahil — 2–3 cümle, yapısal katmanları + token/class adlarını + Blazor karşılığını kısaca belirtmeli
- **Kabul edilmez:** "Aşağıda örnekler:", "Playground'da dene.", tek cümlelik geçiş metinleri

**3. İçerik** — description'dan hemen sonra gelir, bare HTML kabul edilmez
- `registerPlayground(...)` — interaktif demo
- `<table class="token-table" style="margin-top:12px">` — token/anatomy/states tablosu; `tk(v)` helper'ı ile token adları `<code>` formatında, token karşılığı olmayanlar için Token sütununa `—`
- `.example-viewer` — statik görsel örnek

## Statik Demo Gösterimi — "Example Viewer" Pattern

Bir sayfada **playground olmadan** (interaktif prop/variant yok) bir şeyi sadece görsel olarak göstermek gerektiğinde, kullanıcı **"example viewer kullan"** veya **"example viewer'a koy"** diyebilir. Bu, `registerPlayground` yerine şu statik HTML yapısını kullanmak demektir:

```html
<!-- Önizleme alanı (playground preview ile aynı görünüm) -->
<div class="example-viewer">
  <div class="example-viewer-preview">
    <div class="pgd-preview-inner">
      <div class="pgd-viewport-frame" style="width:100%">
        <!-- Gösterilecek içerik buraya -->
      </div>
    </div>
  </div>
</div>

<!-- Kod gösterimi (playground Code tab ile aynı görünüm) -->
<div class="example-viewer">
  <div class="example-viewer-code">
    <pre><!-- HTML/CSS kodu buraya --></pre>
  </div>
</div>
```

**Kurallar:**
- `.example-viewer` → kenarlı, rounded wrapper (`border: 1px solid var(--bt-border-muted); border-radius: 10px`)
- `.example-viewer-preview` → açık arka planlı önizleme alanı (`min-height/max-height: 460px`)
- `.example-viewer-code` → kod alanı (`border-top` ile preview'dan ayrılır); yalnız kullanılabilir
- İkisi **aynı** `.example-viewer` içinde art arda veya **ayrı** `.example-viewer` blokları olarak kullanılabilir
- Preview içindeki içerik genellikle `padding:32px` ve `overflow-x:auto` alır
- **`registerPlayground` kullanılmaz** — bu pattern tamamen statik/interaktif değil

**Kod renklendirme (syntax highlighting + satır numaraları) — ZORUNLU:**

`applyCodeHighlighting` iki selector'ı otomatik işler — doğru class/id kullanılırsa ek kurulum gerekmez:

```html
<!-- HTML kodu (language-markup + line-numbers) -->
<!-- pre id'si mutlaka "-code" ile bitmeli, .example-viewer-code içinde olmalı -->
<div class="example-viewer-code">
  <pre id="ev-{sayfa-adı}-code">...escaped HTML...</pre>
</div>

<!-- CSS kodu (language-css + line-numbers) -->
<!-- .example-viewer-code içinde veya dışında, sadece class="code-block" yeterli -->
<div class="example-viewer-code">
  <pre class="code-block">...escaped CSS...</pre>
</div>
```

- HTML gösteriminde `id` **benzersiz** olmalı, `-code` ile bitmeli
- İçerik her zaman HTML-escape edilmeli: `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`
- Playground'daki `_pgdEsc()` yerine sayfa içinde inline IIFE: `${(() => { const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); return esc(\`...\`); })()}`

## Sayfa Tab Yapısı — ZORUNLU (4 Tab Standardı)

Her component sayfası (Web dokümantasyonu, `PAGES_WEB[...]`) **dört tab** taşımalı, bu sırayla:

```javascript
tabs: ['Overview', 'Examples', 'CSS Properties', 'Usage'],
```

- **Overview** — component'in ne olduğunu tanıtan kısa açıklama + TEK bir interaktif `registerPlayground` (component'in tüm prop'larını kapsayan genel amaçlı demo) + varsa `toc`'taki bölümlerle eşleşen Anatomy/yapı tabloları.
- **Examples** — component'in farklı varyant/tip kombinasyonlarını gösteren, genelde birden fazla küçük `registerPlayground` veya statik önizleme tablosu içeren AYRI bir tab. Overview'daki tek genel playground'un aksine, burada component'in somut kullanım senaryoları (örn. Button'daki Solid/Outline/Flat/Ghost örnekleri, Card'daki Header Types/Body Content tabloları) yer alır — Overview'a gömülmez.
- **CSS Properties** — design token–CSS değişken eşleşme tablosu (`token-table`).
- **Usage** — Do/Don't listeleri.

Bir component'in **State/Anatomy** gibi tab-özel içerikleri varsa (örn. Clickable Card'ın Default/Hover/Active State tablosu) bunlar **Examples** tab'ına gider, Overview'da sadece genel playground + kısa açıklama kalır.

**Bu, geriye dönük bir standart** — 2026-08-12'de siteye uygulandı (bkz. HISTORY.md), yeni eklenen HER component bu 4-tab yapısıyla gelmeli, `['Overview', 'CSS Properties', 'Usage']` (Examples'sız 3-tab) veya sadece `['Overview']` gibi eksik yapılar kabul edilmez.

## Varyant Dokümantasyonu — Tek Sayfa Standardı — ZORUNLU

Bir component'in birden fazla davranışsal varyantı varsa (örn. Card → Default/Clickable/Selectable/Collapsible/Scrollable), **bu varyantlar ayrı sidebar sayfaları olarak değil, ana component sayfasında TOC bölümleri olarak** dokümante edilir. Bu kural 2026-08-27'de Card component'i üzerinde uygulanmış ve tüm component'ler için genel standard olarak kabul edilmiştir.

**Sidebar nav:** Component için tek bir leaf item — grup + children yapısı kullanılmaz.
```javascript
{ label: 'ComponentName', id: 'components/component-name' }   // ✓
// Children listesi ile grup yapısı  ✗
```

**TOC:** Ana component bölümleri + her varyant adı düz bir dizi olarak listelenir:
```javascript
toc: ['Section1', 'Section2', 'Variant A', 'Variant B', 'Variant C'],
```

**Her varyant bölümünün zorunlu içeriği** (bu sırayla):

1. `<h2 id="Variant Name">Variant Name</h2>` — id değeri toc dizisindeki string ile birebir eşleşmeli
2. `<p class="page-desc">` — description kuralına göre 3–5 cümle (tasarım kararı + görsel mekanik + implementasyon referansı)
3. `${registerPlayground({...})}` — o varyanta özel tam playground; ID formatı `pgd-{component}-{variant}-sec` (sub-sayfalardaki `pgd-{component}-{variant}-overview` ID'siyle çakışmama için)
4. `<h3>Alt Bölüm</h3>` + description + içerik — varyanta özel alt bölümler (örnekler):
   - **States** tablosu (Default/Hover/Active/Selected gibi etkileşim durumları varsa)
   - **Body Content** tablosu (içerik kombinasyonlarını gösteren tablo varsa)
   - **Anatomy** tablosu (her varyant için token listesi — ZORUNLU)

**Playground ID çakışması:** Ana component sayfasındaki varyant playground'larının ID'leri, eski sub-sayfaların (eğer hâlâ PAGES_WEB'de tanımlıysa) playground ID'leriyle çakışmamalı. `-sec` son eki bu ayrımı sağlar.

**Sub-sayfalar:** Eski sub-sayfa `PAGES_WEB[...]` tanımları silinmek zorunda değil — sidebar'dan kaldırılmaları yeterli. Ancak yeni component eklenirken sub-sayfa hiç oluşturulmaz.

## Data Table Örneklerinde Properties Tutarlılığı — ZORUNLU

Data Table'ın TÜM örnek sayfaları (`components/data-table*` — Data Table, Toolbar, Actions, Frozen Column First/Last, Inline Editing, InCell Editing, ve gelecekte eklenecek her yeni Data Table örneği, örn. Sorting/Filter Menu) **aynı temel Properties setine** sahip olmalı (kullanıcı isteğiyle, 2026-08-24, bkz. HISTORY.md). Bu otomatik/koddan gelen bir davranış DEĞİL — yeni bir Data Table sayfası eklerken/mevcut birini değiştirirken elle uygulanması gereken bir kontrol listesi:

1. **Her veri kolonu kendi Content prop'una sahip olmalı** — `field`'ı olan HER kolon (Checkbox ve Actions HARİÇ), `GRID_TABLE_CONTENT_OPTS` (None/Checkbox/Dot/Icon/Avatar/Avatar Group/Badge/Button/Switch/Inline TextBox/Inline Dropdown) kullanan bir `xContent` prop'u almalı, `group: 'Columns'` altında. Sayfaya özel yardımcı kolonlar bile (örn. Frozen'daki Department/Location/Last Login) bu kuraldan MUAF DEĞİL — Figma'da karşılığı olmasalar bile Content prop'u almalılar (varsayılan `'none'` ile mevcut görünüm korunur).
2. **`Table` grubu her zaman `Rows`/`Row State`/`Sort`/`Filter` içermeli** — `rowCount`(`GRID_TABLE_ROW_OPTS`), `rowState`(`GRID_STATE_OPTS`), `showSort`/`showFilter`(`TBX_BOOL_OPTS`). Sort/Filter TEK bir kolona bağlanmaz (`gridXColumns(p)` içinde `const showSort=p.showSort==='on'` okunup HER veri kolonuna `sort`/`filter` geçilir) — `gridHeaderCellHtml`'e `showSort`/`showFilter`, `gridCellHtml`'e `sortValue: c.field ? row[c.field] : undefined` iletilmeli (sıralama gerçekten çalışsın diye, bkz. `window.btGridSortBy`).
3. **Actions kolonu varsa** (Data Table Actions/Frozen Last deseni) `actionsContent` prop'u da `GRID_TABLE_CONTENT_OPTS` kullanmalı (Columns grubunun sonunda). Inline Editing'in Edit/Save/Cancel çifti gibi sayfaya özel eylem kolonları bu kuraldan muaf (bunlar bir "content kind" değil).
4. **Editable/dual-view sayfalarında** (Inline/InCell Editing deseni) Content prop'ları `editable`/`editKind`'tan TAMAMEN BAĞIMSIZ kalmalı — `gridCellHtml`'in `leading`/`trailing` (view) ve `editable`/`editKind` (edit) param'ları zaten ayrık çalışıyor, hangi content-kind seçilirse seçilsin editKind (textbox/dropdown) sabit kalır.

Yeni bir Data Table örneği eklerken bu dört maddeyi kontrol et — kullanıcı ayrıca hatırlatmadan.

## "On this page" (TOC) — Overview Linki Otomatik

`docs/js/app.js`'teki `renderToc()`, `page.toc` dizisi olan HER sayfanın "On this page" panelinin en üstüne otomatik olarak sayfanın başına (`#page-title`) atlayan bir **"Overview"** linki ekler. Bu **merkezi/otomatik** bir davranış — yeni bir component sayfası eklerken `toc` dizisine manuel `'Overview'` eklemeye gerek YOK, `renderToc()` bunu kendisi prepend ediyor. `page.toc` boşsa (`toc: []`) TOC paneli hiç gösterilmiyor, bu davranış değişmedi.

## design.md ve CLAUDE.md senkronizasyonu — ZORUNLU

Bu projede oluşturulan component'ler (markup + CSS + JS davranışı) **bundan sonraki
Bentaş projelerinde de kullanılacak** — yani bu repo sadece kendi docs sitesi değil,
aynı zamanda diğer projelerin kopyalayıp yapıştıracağı bir referans kaynağı.
Bu yüzden bir component eklendiğinde/değiştirildiğinde:

1. `docs/css/styles.css` + `docs/js/pages-web.js` (gerçek implementasyon) güncellenir.
2. **`design.md`** o component'in ilgili bölümü (yapı + CSS + JS davranışı, taşınabilir/token-adı-agnostik anlatımla) güncellenir — yeni bir projede bu dosya tek başına yeterli olmalı.
3. **`HISTORY.md`**'ye kısa bir oturum notu eklenir.

Bunu component değişikliği yapılan HER oturumda otomatik yap, kullanıcı ayrıca hatırlatmasın.

## Son Tamamlanan Component

**Data Table (Grid)** — 2026-08-12 (HeaderCell + GridCell + No Record Available + Frozen Column varyasyonu, bkz. design.md §17), en son 2026-08-24'te Inline Editing + InCell Editing sayfalarıyla (design.md §17.5), 7 sayfanın tamamında tutarlı Table-level Sort/Filter (gerçek sıralama, hover-only sort ikonları, 3 tıklık asc→desc→reset döngüsü), **Sorting** ve **Filtering** sayfalarıyla (design.md §17.6) ve GERÇEK çalışan Filter overlay'iyle (Ara/Tümünü Seç/kolon-verisinden-türeyen checkbox listesi/Temizle-Uygula, satırları fiilen filtreler, aktif buton state'i — TÜM Data Table sayfalarında paylaşılan tek kod yolu) genişletildi (design.md §17.7).
Detaylı oturum geçmişi: `HISTORY.md`
