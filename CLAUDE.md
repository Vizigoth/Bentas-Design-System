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

## design.md ve CLAUDE.md senkronizasyonu — ZORUNLU

Bu projede oluşturulan component'ler (markup + CSS + JS davranışı) **bundan sonraki
Bentaş projelerinde de kullanılacak** — yani bu repo sadece kendi docs sitesi değil,
aynı zamanda diğer projelerin kopyalayıp yapıştıracağı bir referans kaynağı.
Bu yüzden bir component eklendiğinde/değiştirildiğinde:

1. `docs/css/styles.css` + `docs/js/pages-web.js` (gerçek implementasyon) güncellenir.
2. **`design.md`** o component'in ilgili bölümü (yapı + CSS + JS davranışı, taşınabilir/token-adı-agnostik anlatımla) güncellenir — yeni bir projede bu dosya tek başına yeterli olmalı.
3. **`CLAUDE.md`**'nin "Geçmiş" bölümüne kısa bir not eklenir.

Bunu component değişikliği yapılan HER oturumda otomatik yap, kullanıcı ayrıca hatırlatmasın.

## Geçmiş

- **2026-07-24 (devam 7)**: Figma'nın 5 "Focus Ring" Effect Style'ı (primary/neutral %50, error/success/warning %24 — karışık) kullanıcı kararıyla **hepsi %25 opaklığa** sabitlendi: `rgba(13,78,151,*)`, `rgba(212,212,212,*)`, `rgba(232,75,91,*)`, `rgba(212,175,44,*)` — `styles.css`'te 95, `pages-web.js`'te (canlı state hesaplamaları + dokümantasyon tabloları) 49 kullanım güncellendi. `rgba(13,78,151,0.12)` (`.bt-win-*` demo panelindeki farklı amaçlı, daha soluk ring) kasıtlı olarak dokunulmadan bırakıldı. `pages-mobile.js`'te bu renklerle eşleşen kullanım yok, dokunulmadı.

- **2026-07-24 (devam 6)**: Bir önceki notta Textarea'nın error ring'inin "her zaman görünür" olması gerektiği yazılmıştı — kullanıcı bunun Figma'da kendi hatası olduğunu belirtti, doğrusu diğer tüm input'larla (TextBox/Dropdown/MultiSelect/DatePicker/SelectLookUp — hepsi `.bt-tbx` paylaşıyor) aynı: ring **sadece focus'ta** görünmeli. `.bt-txa` bu davranışa geri döndürüldü (plain Error = sadece border, Error Focused = border+ring), sadece rgba değeri düzeltildi. Asıl kalıcı bug `.bt-tbx`'te (ve onu paylaşan Dropdown/MultiSelect/DatePicker/SelectLookUp'ta) de bulundu — hepsi yanlış `rgba(179,29,56,0.5)` kullanıyordu, doğrusu `rgba(232,75,91,0.24)` (Figma "Focus Ring/error"). Hem CSS hem `pages-web.js`'teki tüm bu component'lerin dokümantasyon tabloları/kod panelleri düzeltildi. Ayrıca Textarea'nın **Filled** state'inde eksik olan Clear Control (× butonu, sağ üstte absolute, `.bt-tbx__clear`+`.bt-txa__clear`) eklendi — hem CSS'e hem preview/code/css panellerine hem Class Reference tablosuna işlendi. `txaCss` kod panelindeki eski (boyuta göre değişen, yanlış) padding hesaplaması da sabit `--bt-space-sm` (6px) olarak düzeltildi.

- **2026-07-24 (devam 5)**: **Textarea** component'i Figma'daki "Base TextArea" (574:2591) ve "TextArea" (579:25815, 3 boyut × 9 state) node'larıyla yeniden karşılaştırıldı, 2 gerçek hata bulunup düzeltildi: (1) padding her boyutta (Sm/Md/Lg) Figma'da sabit `--bt-space-sm` (6px, dört yön) iken kodumuzda boyuta göre yanlışlıkla değişiyordu (4/6/8px dikey, 12px yatay) — `.bt-txa__text` tek bir sabit `padding: var(--bt-space-sm, 6px)` kuralına indirgendi, boyut kuralları sadece `min-height` bırakacak şekilde sadeleştirildi. (2) Error ring rengi/alfası yanlıştı (`rgba(179,29,56,0.5)` yerine Figma'nın "Focus Ring/error" token değeri `rgba(232,75,91,0.24)` olmalıydı) ve sadece focus'ta değil **her zaman** (plain Error state'te de) görünmesi gerekiyordu — `.bt-txa--error`/`--error-focused` tek kurala birleştirildi. `pages-web.js`'teki Textarea "CSS Properties" tablosu da bu doğru değerlere güncellendi (diğer component'lerin aynı desendeki eski tabloları — TextBox/MultiSelect/Dropdown/DatePicker vb. — kasıtlı olarak dokunulmadan bırakıldı, onların CSS'i ayrıca doğrulanmadı).

- **2026-07-24 (devam 4)**: Figma'nın Effect Styles panelinde "xs, sm, md, lg, xl, 2xl, 3xl" olmak üzere 7 shadow (elevation) seviyesi olduğu bulundu (REST API token'ı süresi dolduğu için `figma_get_variables` ile değil, kullanıcının bir katmana geçici olarak uygulayıp seçmesiyle `get_variable_defs`'ten okundu). `styles.css`'e `--bt-shadow-{xs|sm|md|lg|xl|2xl|3xl}` olarak eklendi; projede zaten literal rgba olarak kullanılan **md** (`.bt-switch__thumb`, `.bt-win-dropdown__list`) ve **lg** (`.bt-dd-options`, `.bt-cal`, `.platform-dropdown`) bu token'lara geçirildi — `.platform-dropdown`'daki hafif yuvarlama farkı (`0.03/0.08` → `0.031/0.078`) da bu sırada düzeltildi. "Our Tokens" sayfasına Radius'tan hemen sonra yeni bir "Shadow" bölümü eklendi (TOC'a da işlendi). design.md §3.7b'ye taşındı.

- **2026-07-24 (devam 3)**: "Text Field" component'i **"Textarea"** olarak yeniden adlandırıldı (`pages-web.js`: nav label, sayfa route'u `components/text-field` → `components/textarea`, başlık, prose metinleri) — CSS class prefix zaten `.bt-txa` (textarea) olduğu için isim artık koddaki gerçeklikle örtüşüyor. `pages-mobile.js`'teki nav girdisi (aynı isim, gerçek sayfa implementasyonu yok, placeholder'a düşüyor) kullanıcının isteğiyle dokunulmadan bırakıldı.

- **2026-07-24 (devam 2)**: `pages-web.js`'te Anatomy/States alt-başlıklarında (`Standart Sidebar`, `Hub Sidebar` etiketleri + Button/SplitButton "States" theme başlıkları) gerçek bir bug bulundu: `color:var(--bt-text-primary)` — bu isimde bir CSS değişkeni hiç yok (sadece `--bt-text-primary-default/-muted/...` gibi soneksiz olanlar var), fallback da olmadığından sessizce yanlış renge düşüyordu. `--bt-text-primary-muted` + fallback'e düzeltildi. Aynı elementlerdeki hardcoded `margin-bottom:8px` / `margin:20px 0 12px` de `var(--bt-space-md/-3xl/-xl, ...)` token'larına çevrildi. `font-size:13px` kasıtlı literal bırakıldı — skalada tam karşılığı yok (Figma'nın kendi ayrı `text-1`/13px primitive'i, bkz. `.bt-dd-option__text`'teki aynı durum).

- **2026-07-17**: Checkbox / Radio Button / Switch component'lerindeki hardcoded değerler retroaktif olarak `--bt-*` token'larına geçirildi.
- **2026-07-20**: Isolation mode tüm playground'lar için standart hale getirildi; `pgd_id` URL parametresi sistemi eklendi. Repo adı `MobileDesignSystem` → `Bentas-Design-System` olarak değişti.
- **2026-07-22**: Sidebar component'i **Standart Sidebar** (`.stb-*`, tek panel 280↔48px) ve **Hub Sidebar** (`.sbx-*`, kalıcı rail + drawer) olarak iki ayrı tipe ayrıldı; ikisi de Figma'dan tekrar tekrar doğrulanarak (padding/gap/renk/state hataları düzeltildi) yeniden inşa edildi — hover/active/selected/focus state'leri gerçek çalışıyor, searchbox gerçek SearchBox component'ini reuse ediyor. `--bt-surface-secondary-intense` eksik token'ı eklendi, `--bt-surface-primary-intense`'i ezen hatalı ikinci tanım kaldırıldı. Isolation mode Sidebar için özel "app gibi" tam ekran görünüm aldı. Standart Sidebar, Medusa Dashboard projesine (`medusa-demo/dashboard.html`) de taşındı — bkz. design.md §6.
- **2026-07-24**: Figma'nın Local Variable Collections'ı (`figma-console` MCP, `figma_get_variables`) ile "Our Tokens" sayfası karşılaştırıldı — **Semantic Typography** koleksiyonu (112 değişken: Text/Title/Label/Subtitle × Regular/Medium/SemiBold/Bold) hiç dokümante edilmemiş bulundu. `--bt-{family}-{size}-{weight}` deseniyle (örn. `--bt-title-lg-semibold`) `styles.css`'e composite `font` shorthand token olarak eklendi, "Our Tokens" sayfasına yeni bölüm olarak işlendi. Ayrıca `--bt-brand-*` semantik renk grubunun Figma'da karşılığı olmadığı (muhtemelen Primary'nin elle eklenmiş kopyası) tespit edildi — henüz aksiyon alınmadı.
- **2026-07-24 (devam)**: Eski ayrık `--bt-text-{size}-size` / `--bt-text-{size}-lh` scale token'ları **tamamen kaldırıldı** — artık tek kaynak composite typography token'ları (`--bt-text-xs-regular` vb.), 112 tanesinin hepsine literal px değerleri gömüldü. Bu token'ları kullanan ~30 CSS kuralı (Checkbox/Radio/Switch label-required-desc, SearchBox/TextBox/TextArea/MultiSelect/Dropdown/DatePicker/Upload/Sidebar) tek tek `font: var(--bt-text-xs-regular, ...)` composite kalıbına geçirildi; `.stb-title` özel olarak `--bt-title-lg-medium`'a bağlandı (Figma yorumundaki "Title/lg/Medium" referansına göre — Text değil Title ailesi). 3 yerde (`Checkbox/Radio/Switch __label-row` `min-height`) ve `.bt-dd-option__text` (13px, skalada karşılığı olmayan boyut) karşılığı kalmayan `line-height` kullanımları literal px'e çevrildi. "Our Tokens" sayfasında "Typography" ve "Semantic Typography" tek bölümde birleşti (`Typography`), TOC'a Text/Title/Label/Subtitle alt-başlıkları eklendi (`app.js` `renderToc` nested item desteği kazandı, `.toc-link--sub` stili eklendi). design.md §3.8 tek bölümde birleştirildi, Sidebar/Alert/Upload örnek CSS'leri güncellendi. `pages-web.js`'teki "CSS Properties" referans tabloları (Sidebar/SearchBox/Dropdown/MultiSelect/DatePicker/TextField/Upload — salt metin, `tk()` ile gösteriliyor, canlı render etkilenmiyordu) da yeni composite token adlarına güncellendi. **`pages-mobile.js` bilinçli olarak dokunulmadan bırakıldı** — kullanıcı o dosyayı ayrı bir oturumda baştan değiştirecek, o yüzden içindeki ~69 eski `--bt-text-{size}-size/-lh` referansı (Alert/Avatar/Badge/BottomSheet/Dialog/Card/Chip/Login/Toast önizlemeleri, çoğu fallback'siz inline `style=`) hâlâ kaldırılmış token'lara işaret ediyor ve bir sonraki pages-mobile.js oturumunda düzeltilmesi gerekiyor.
- **2026-07-23**: **Upload** component'i eklendi (`.bt-dropzone`, `.bt-upload-file`, `.bt-upload`). Figma Desktop Bridge ile 5 bileşen incelendi. Tamamen interaktif: `btUplStartUpload/CompleteRow/Remove/Retry/Drop/SetDzState` global fonksiyonları. `Select Files` butonu `bt-btn bt-btn--xs bt-btn--primary-ghost` (design system button reuse kuralı bununla standartlaştı). Playground CSS sekmesi standartlaştı (`esc + <pre class="code-block">` return formatı). Playground zemin + isolation mode background `--bt-surface-subtle` → `--bt-surface-light` düzeltildi. design.md §12 + CLAUDE.md güncellendi.
