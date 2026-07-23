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

## Component İsimlendirme Kuralı

Bileşen adları **PascalCase** olmalı, kelimeler ayrı harf büyüklüğüyle birleştirilmeli:
- `SearchBox` (✓) — `Searchbox` değil (✗)
- `SplitButton` (✓), `IconButton` (✓), `TextBox` (✓)

Figma sayfa adı referans alınır; belirsizlik varsa major design system'lerdeki (Material, Carbon, Fluent) yaygın kullanım tercih edilir.

## Isolation Mode (Playground Toolbar)

`docs/js/playground.js` içindeki isolation butonu **tüm playground'larda standarttır** — ekstra kurulum gerekmez.

Yeni bir component eklendiğinde sadece `registerPlayground({id: 'pgd-xxx-overview', ...})` yeterli. `isolation.html`, `window.PAGES_WEB` üzerinden tüm sayfaların `render()` fonksiyonlarını çağırarak `_pgdConfigs`'i doldurur ve ilgili playground'ı `pgd_id` URL parametresiyle bulur.

`window.PGD_ISOLATE` kaydı veya `config.isolate` **artık yeni componentler için gerekli değil** — sadece Sidebar ve Alert gibi eskiden eklenmiş özel mount davranışları olan componentlerde kalır.

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

- **2026-07-17**: Checkbox / Radio Button / Switch component'lerindeki hardcoded değerler retroaktif olarak `--bt-*` token'larına geçirildi.
- **2026-07-20**: Isolation mode tüm playground'lar için standart hale getirildi; `pgd_id` URL parametresi sistemi eklendi. Repo adı `MobileDesignSystem` → `Bentas-Design-System` olarak değişti.
- **2026-07-22**: Sidebar component'i **Standart Sidebar** (`.stb-*`, tek panel 280↔48px) ve **Hub Sidebar** (`.sbx-*`, kalıcı rail + drawer) olarak iki ayrı tipe ayrıldı; ikisi de Figma'dan tekrar tekrar doğrulanarak (padding/gap/renk/state hataları düzeltildi) yeniden inşa edildi — hover/active/selected/focus state'leri gerçek çalışıyor, searchbox gerçek SearchBox component'ini reuse ediyor. `--bt-surface-secondary-intense` eksik token'ı eklendi, `--bt-surface-primary-intense`'i ezen hatalı ikinci tanım kaldırıldı. Isolation mode Sidebar için özel "app gibi" tam ekran görünüm aldı. Standart Sidebar, Medusa Dashboard projesine (`medusa-demo/dashboard.html`) de taşındı — bkz. design.md §6.
