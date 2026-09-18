# Bentas Design System — Proje Kuralları

## İçerik Kaldırma Yasağı — ZORUNLU

Mevcut bir sayfada herhangi bir içerik (tablo, bölüm, tab içeriği, playground vb.) kaldırılacaksa ya da başka bir yere taşınacaksa **kullanıcıya önceden bildir ve onay al.** Kullanıcı açıkça "kaldır", "sil" veya "taşı" demediği sürece hiçbir mevcut içerik silinmez veya yerinden oynatılmaz. Kural uygulamak (description eklemek, 4-tab standardı, anatomy başlıkları vb.) bu yasağı geçersiz kılmaz — içerik eklenir, mevcut içerik korunur.

## İkon Wrapper Standardı — ZORUNLU

Component içinde Lucide SVG ikon kullanılacaksa **her zaman** `<span class="bt-icon">` wrapper'ı kullanılır — component'e özel bir icon slot class'ı (`bt-xxx__icon` gibi) **asla** tanımlanmaz.

```html
<span class="bt-icon">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Lucide path -->
  </svg>
</span>
```

- `.bt-icon` → 24×24px, `inline-flex`, centered (`styles.css`'te global tanımlı)
- `.bt-icon svg` → 16×16px, CSS tarafından zorlanır — SVG'ye `width`/`height` attribute'u **yazılmaz**
- `viewBox="0 0 24 24"` her zaman kalır (Lucide koordinat sistemi)
- Farklı boyut gerekiyorsa (örn. 20×20 wrapper) — önce Figma'dan doğrula, sonra component'e özel override yaz (global class'ı değiştirme)

## CSS Değişkenleri (Design Tokens) — ZORUNLU

`docs/css/styles.css` kapsamlı bir `--bt-*` design token seti tanımlıyor: spacing, radius, renk/surface, tipografi (font-size + line-height dahil). Yeni bir component eklerken veya mevcut bir component'i değiştirirken **her görsel değer** ilgili token'dan gelmeli — hardcoded px/hex yazılmamalı.

- **Spacing (padding, margin, gap):** `var(--bt-space-{none|2xs|xs|sm|md|lg|xl|2xl|3xl...}, fallback-px)`
- **Font-size / line-height:** `var(--bt-text-{2xs|xs|sm|md|lg|xl|2xl...}-size)` ve `var(--bt-text-{...}-lh)` — asla elle `font-size:12px` / `line-height:16px` yazma
- **Renkler (background, color, border-color):** `var(--bt-surface-*)`, `var(--bt-text-*)`, `var(--bt-border-*)` — hex kodunu sadece fallback olarak yaz: `var(--bt-token, #hex)`
- **Border-radius:** `var(--bt-radius-{none|xs|sm|md|lg|xl...})`

Sabit piksel değeri sadece **token karşılığı olmayan** boyutlarda kabul edilebilir (örn. bir ikonun tam 16×16px olması gibi element-özel bir ölçüm — bu da önce Figma'dan doğrulanmalı).

Yeni bir token gerektiğinde veya bir component tamamlandığında yapılacak kontroller için, ve genel olarak component sayfası ekleme/dokümante etme iş akışı (playground config, tab yapısı, description kuralları, varyant dokümantasyonu vb.) için: **`add-component` skill'i** (`.claude/skills/add-component/SKILL.md`).

Bir **input-ailesi component'i** (SearchBox, TextBox, Dropdown, Date Input, Date Picker, MultiSelect, Select LookUp, Textarea) eklerken veya kullanıcı açıkça var olan birini revize etmeni istediğinde — Base Input'un Figma node hiyerarşisi, güncel class isimlendirmesi ve ne zaman sıfırdan kurup ne zaman dokunmayacağın için: **`add-input` skill'i** (`.claude/skills/add-input/SKILL.md`, `add-component` ile BİRLİKTE yüklenir — `add-input` mimariyi, `add-component` sayfa/tab yapısını kapsar).

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

### CSS class isimlerinde kısaltma icat etme — ZORUNLU (kullanıcı kararı, 2026-09-17)

CSS class prefix'leri **Figma'daki gerçek component/katman adını** yansıtmalı — `bt-dd-option`, `bt-tbx`, `bt-adlg` gibi kendi başına anlaşılmayan kısaltmalar İCAT EDİLMEZ. Figma'da bir katman "Dropdown List Item" diyorsa class da `bt-dropdown-list-item` olmalı, "dd" gibi bir kısaltmaya sıkıştırılmaz. (Not: `bt-tbx`/`bt-adlg`/`bt-crd` gibi mevcut kısaltmalar geçmiş oturumlardan kalma — yeni bir component/katman eklerken AYNI kısaltma alışkanlığı TEKRARLANMAZ, mevcut isimlere dokunmak ayrı bir karar gerektirir.)

**Paylaşılan wrapper class'ları da kimliksiz bırakılmaz.** Birden fazla component aynı CSS'i paylaşıyorsa (örn. `.bt-input` — SearchBox/TextBox/Dropdown/Date Picker'ın ortak Label/Hint/Error sarmalayıcısı), paylaşılan class'a ek olarak her component KENDİ kimlik class'ını da aynı elemente ekler (`class="bt-input bt-dropdown"`, `class="bt-input bt-textbox"`) — DOM'da hangi component olduğu paylaşılan class'a bakarak asla belirsiz kalmaz. Bu, component'in kendi input kutusunda zaten uygulanan desenle (`.bt-input__box.bt-searchbox` gibi) aynı prensip — yalnızca dış wrapper'a da uygulanmalı.

### `.bt-tbx` → `.bt-input` tam rename tamamlandı (2026-09-17, devam)

Paylaşılan dış sarmalayıcı `.bt-tbx` → `.bt-input` oldu (çocukları: `__meta`/`__label`/`__required`/`__anchor`/`__helper→__hint`); çakışmayı önlemek için Base Input'un kutu çekirdeği önce `.bt-input__box`'a taşındı (`.bt-input--X` → `.bt-input__box--X`, `.bt-input__text` → `.bt-input__value`), `.bt-tbx__box`/`.bt-dropdown__box` kimlik class'ları kaldırılıp ata-seçiciyle (`.bt-textbox .bt-input__box--{size} ...`) değiştirildi. **Bilinçli, kalıcı olmayan sınır:** eski "TEXTBOX" sisteminin içi (`.bt-tbx__input/__field/__text/__control/__icon/__clear`, MultiSelect/Select LookUp/Date Picker/Dialog örneği/Data Table Inline-InCell edit hücrelerinde) bu turda DOKUNULMADI — bu 3 component henüz Base Input'a migrate edilmedi (Figma karşılaştırması yapılmadı), ayrı bir oturum bekliyor. Detay ve tam class tablosu: `design.md` §22.9.

### Base Input çekirdeğinin İÇ katmanları da Figma isimlerine tam taşındı (2026-09-18)

Yukarıdaki 09-17 rename'i sadece DIŞ sarmalayıcıyı (`.bt-tbx`→`.bt-input`) kapsıyordu — `.bt-input__box`'un İÇİNDEKİ katmanlar (`__meta`, `__field`, `__control`, `__hint`/`--error`) hâlâ Figma'dan doğrulanmamış, icat edilmiş isimler taşıyordu. Kullanıcı DateInput'u eklerken bunu fark etti ("son konuştuğumuz yapıda nerede input box yazıyor... input meta diye neden input labelın bir taşıyıcısı var") — Date Input'un Figma katman ağacı node-by-node doğrulanırken ortaya çıkan gerçek isimlere göre TÜM Base Input tüketicileri (SearchBox/TextBox/Dropdown/Date Input) tek seferde revize edildi:

| Eski (icat edilmiş) | Yeni (Figma) |
|---|---|
| `.bt-input__meta` (Label Value'nun sarmalayıcısı — Figma'da hiç yoktu) | `.bt-input__label-value` |
| `.bt-input__field` | `.bt-input__content` |
| `.bt-input__control` | `.bt-input__controls` |
| `.bt-input__control--validation` (modifier) | `.bt-input__validation` (kendi class'ı — Figma'da ayrı component) |
| `.bt-input__control--fixed.--clear.--clickable` (modifier zinciri) | `.bt-input__clear-button` (kendi class'ı) |
| `.bt-input__control--fixed.--filter.--clickable` | `.bt-input__filter-button` (kendi class'ı) |
| `.bt-input__control--button` (modifier) | `.bt-input__controls--button` (aynı, sadece isim düzeltildi) |
| `.bt-input__hint` | `.bt-input__hint-value` |
| `.bt-input__hint--error` (Hint'in modifier'ı, ayrı element DEĞİL) | `.bt-input__error-value` (Hint'ten TAMAMEN bağımsız kendi class'ı — Figma'da ayrı bir node) |
| — (hiç yoktu) | `.bt-input__prepend-text` / `.bt-input__append-text` (YENİ — standart Base Input property'si, kullanıcı isteğiyle eklendi) |

Bu rename `.bt-input__box`'ı KULLANAN her yerde (SearchBox/TextBox/Dropdown/Date Input'un kendi sayfaları + Sidebar arama kutusu + Data Table filtre paneli arama alanı + Design Examples) uygulandı; paylaşılan DIŞ sarmalayıcı class'ları (`.bt-input__label-value`, `.bt-input__hint-value`, `.bt-input__error-value`) eski "TEXTBOX" sistemini kullanan sayfalarda da (MultiSelect/Select LookUp/eski Date Picker/Dialog örneği/Data Table Inline-InCell) OTOMATİK güncellendi (saf string rename, görsel/davranışsal hiçbir şey değişmedi — tarayıcıda tek tek doğrulandı). Detay: `design.md` §20-24.

## design.md ve CLAUDE.md senkronizasyonu — ZORUNLU

Bu projede oluşturulan component'ler (markup + CSS + JS davranışı) **bundan sonraki
Bentaş projelerinde de kullanılacak** — yani bu repo sadece kendi docs sitesi değil,
aynı zamanda diğer projelerin kopyalayıp yapıştıracağı bir referans kaynağı.
Bu yüzden bir component eklendiğinde/değiştirildiğinde:

1. `docs/css/styles.css` + `docs/js/pages-web.js` (gerçek implementasyon) güncellenir.
2. **`design.md`** o component'in ilgili bölümü (yapı + CSS + JS davranışı, taşınabilir/token-adı-agnostik anlatımla) güncellenir — yeni bir projede bu dosya tek başına yeterli olmalı.
3. **`HISTORY.md`**'ye kısa bir oturum notu eklenir.

Bunu component değişikliği yapılan HER oturumda otomatik yap, kullanıcı ayrıca hatırlatmasın.

## Component sayfası ekleme/dokümante etme

Playground config standartları (prop.group, boolean toggle, preview centering, CSS tab), bölüm açıklama kuralları, 4-tab yapısı, Example Viewer pattern, varyant/çok-eksenli dokümantasyon standartları ve Data Table properties tutarlılığı **`add-component` skill'ine taşındı** (2026-09-07, doctor cleanup — bkz. HISTORY.md). Bir component eklerken veya bir component sayfasını restructure/dokümante ederken bu skill otomatik yüklenir.

## Son Tamamlanan Component

**Base Input çekirdeği — iç katman rename + Prepend/Append Text** — 2026-09-18 (SearchBox/TextBox/Dropdown/Date Input'un TAMAMINI etkileyen çekirdek revizyon, Date Input eklendikten hemen sonra aynı oturumda). Kullanıcı, önceden üzerinde anlaşılan Figma input hiyerarşisiyle kodu karşılaştırınca `.bt-input__meta`/`.bt-input__field`/`.bt-input__control`(+modifier'ları)/`.bt-input__hint--error` gibi isimlerin Figma'da karşılığı olmayan, icat edilmiş isimler olduğunu fark etti (CLAUDE.md'nin kendi kuralıyla çelişiyordu) — tam class tablosu için bkz. yukarıdaki "Base Input çekirdeğinin İÇ katmanları da Figma isimlerine tam taşındı" ve `design.md` §25 (GÜNCEL/NİHAİ referans). Aynı oturumda, daha önce hiç implemente edilmemiş **Prepend Text / Append Text** (standart Base Input property'leri) tüm 4 component'e eklendi. Tarayıcıda doğrulandı (SearchBox'ta canlı Prepend/Append toggle, Dropdown'ın aç/kapa davranışı, Clear butonu davranışı, eski "TEXTBOX" sistemini kullanan sayfalarda (Select LookUp/MultiSelect/Data Table) regresyon olmadığı) — konsol hatası yok, commit'lenmedi.

**Date Input** — 2026-09-18 (`components/date-input`, Inputs grubu, Base Input geçiş programının 4. adımı — SearchBox→TextBox→Dropdown'dan sonra). Figma "Date Inputs" sayfası (`_Base DateInput` + `DateInput`, sm/md/lg × 9 state) node-by-node Desktop Bridge ile doğrulandı. TextBox'la aynı mimari (gerçek `<input>`) ama Content yatay padding'i her iki yanda sabit 8px (TextBox'ın sağ-4px kuralından farklı) ve state davranışı basit boolean'lara indirgenemediği için açık bir `DTI_STATE_CONFIG` tablosuyla uygulandı. **Açık nokta:** Figma'nın field state'lerinde takvim ikonu (Input Controls) hiç görünmüyor — muhtemelen ayrı bir gelecek "Date Picker" component'ine ait, ikon eklenmeden bırakıldı, kullanıcı onayı bekliyor (design.md §24.4). Bu oturumda ayrıca kullanıcı tüm input component'leri için genel bir standart Figma/kod hiyerarşisi tanımladı (Label Value / [Component] Input → Input Controls(left) + Content[Prepend/Value/Append] + Validation + Clear Button + Input Controls(right) / Hint Value / Error Value) — bundan sonraki her input component'i (Select LookUp/MultiSelect/Date Picker/Textarea vb.) bu standarda göre kurulacak.

**Alert** (notification banner) — 2026-09-17 (`components/alert`, Feedback grubu, daha önce yalnızca boş bir nav linkiydi — sıfırdan implement edildi). Figma "Alert Notification" (node 381:28155) Desktop Bridge ile yeniden analiz edildi: 4 Type (Error/Warning/Success/Information, Primary eksen) × 3 Theme Color (Stroke/Light/Filled, Core "Themes" ekseni) × Close Button + Show Description (Feature toggle'lar). `.bt-alert` + `.bt-alert--{type}` (custom property'ler) + `.bt-alert--light`/`--filled`; `.bt-icon` standardından sapan component-özel 18×18 ikon override'ı, gerçek `btAlertDismiss` kapatma davranışı + playground "Click Me" toast trigger'ı. **Alert Dialog'la (`.bt-adlg`, modal) hiçbir kod/CSS bağımlılığı yok — kavramsal olarak ayrı iki component**; design.md'de de bu netleştirildi: `## 23. Alert` kendi bağımsız üst-seviye bölümü (önceden yanlışlıkla "Overlay & Dialog" altında Alert Dialog'un `###` alt-bölümü gibi duruyordu, Alert bir overlay olmadığı için taşındı).

**Tab** — 2026-08-31 (`components/tab`, Layout grubu). Fill Mode: Line / Bordered / Segmented; yatay+dikey; Size Sm/Md/Lg; State Default/Hover/Selected/Focus/Disabled; opsiyonel ikon, sayı rozeti (`Show Counter`), kapatma butonu (Type=Closable, gerçek `.bt-btn` reuse). `.bt-tab-list` + `.bt-tab` class'ları, `window.btTabSelect`. Figma "Bentas DS" › "Tabs" (Base Tab 1040:6309 + Tab 1045:22304). design.md §17. Nav'daki eski `tab-menu-horizontal`/`tab-menu-vertical` placeholder'ları kaldırıldı.

**Data Table (Grid)** — 2026-08-12 (HeaderCell + GridCell + No Record Available + Frozen Column varyasyonu, bkz. design.md §15), en son 2026-08-24'te Inline Editing + InCell Editing sayfalarıyla (design.md §15.5), 7 sayfanın tamamında tutarlı Table-level Sort/Filter (gerçek sıralama, hover-only sort ikonları, 3 tıklık asc→desc→reset döngüsü), **Sorting** ve **Filtering** sayfalarıyla (design.md §15.6) ve GERÇEK çalışan Filter overlay'iyle (Ara/Tümünü Seç/kolon-verisinden-türeyen checkbox listesi/Temizle-Uygula, satırları fiilen filtreler, aktif buton state'i — TÜM Data Table sayfalarında paylaşılan tek kod yolu) genişletildi (design.md §15.7).
Detaylı oturum geçmişi: `HISTORY.md`
