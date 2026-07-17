# MobileDesignSystem — Proje Kuralları

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

## Geçmiş

Checkbox / Radio Button / Switch component'lerindeki hardcoded font-size/line-height/gap/border-radius/beyaz-hex değerleri 2026-07-17'de retroaktif olarak `--bt-text-*-size/-lh`, `--bt-space-*`, `--bt-radius-*`, `--bt-surface-primary-default` token'larına geçirildi. Bu kural yeni eklenen her component için geçerli — component tamamlandığında yukarıdaki "Kontrol" adımını uygula.
