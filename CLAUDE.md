# Bentas Design System — Proje Kuralları

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

## Anatomy Bölümü — ZORUNLU

Her component sayfasının Overview tab'ında, her ana bölüm tablosunun (Types, Variants, States vb.) altına bir `<h2>Anatomy</h2>` başlığı ve token tablosu eklenmeli. Başlık düz `<h2>` olmalı — inline style yok, `.content h2` CSS'i otomatik uygulanır.

Tablo formatı (diğer section tablolarıyla aynı `token-table` class'ı):
```html
<h2>Anatomy</h2>
<table class="token-table" style="margin-top:12px">
  <thead><tr><th>Element</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
  <tbody>
    <tr><td>Element adı</td><td>CSS property</td><td>${tk('--bt-token-adi')}</td><td>#hex veya px değeri</td></tr>
    <!-- Token karşılığı olmayan sabit değerler için Token sütununa — yazılır -->
  </tbody>
</table>
```

- `tk(v)` helper'ı ile token adları `<code>` formatında gösterilir
- Renk/spacing/typography tokenları her zaman yazılır
- Sabit değerler (px, %) için Token sütunu `—` olur
- Component'in farklı varyantları/tipleri ayrı satır olarak listelenir (örn. `Confirm · Information`, `Confirm · Error`)

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

**Card** — 2026-08-05.
Detaylı oturum geçmişi: `HISTORY.md`
