# Medusa Design System

Bu dosya projedeki tüm CSS token'larını, layout yapılarını, komponent kalıplarını ve JS davranışlarını belgelemektedir. Yeni bir projede aynı tasarım sistemini sıfırdan anlatmak zorunda kalmamak için hazırlanmıştır.

Figma kaynak dosyası: `hRFYsry2NDU6GdgzV6oUfJ` (Akasya Web)

---

## 1. Icon Library

Tüm iconlar **Lucide** kullanır:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<!-- Sayfa sonunda: -->
<script>lucide.createIcons();</script>
```

Icon kullanımı:
```html
<i data-lucide="menu"></i>
<!-- Boyut her zaman CSS ile: width/height: 16px; display: block; -->
```

---

## 2. Fontlar

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
```

- `--font-title: 'Geist', sans-serif;` — Basliklar, butonlar, etiketler
- `--font-text:  'Inter', sans-serif;` — Gövde metni, form alanları

Login sayfasında sadece `Inter` yeterli (Geist gerekmez).

---

## 3. Design Tokens (CSS Custom Properties)

Bu token sistemi **Bentas Design System** (Figma: `hRFYsry2NDU6GdgzV6oUfJ`) kaynaklıdır.
Canonical kaynak: `C:\Users\necip\Desktop\MobileDesignSystem\docs\css\styles.css`

Token mimarisi: **Primitif → Renk Koleksiyonu → Semantik (surface/border/text/icon)**

---

### 3.1 Primitif Renk Paleti (`--bt-{renk}-{adım}`)

15 renk ailesi, her biri 12 adım (0, 50, 100…900, 950):

```css
/* Blue */
--bt-blue-0: #ffffff;  --bt-blue-50: #f1f7fe;  --bt-blue-100: #e2edfc;
--bt-blue-200: #bedbf9; --bt-blue-300: #85bdf4; --bt-blue-400: #449bec;
--bt-blue-500: #1c7fdb; --bt-blue-600: #0e62bb; --bt-blue-700: #0d4e97;
--bt-blue-800: #0f447d; --bt-blue-900: #123968; --bt-blue-950: #0c2445;

/* Gray */
--bt-gray-0: #ffffff;  --bt-gray-50: #fafafa;  --bt-gray-100: #f5f5f5;
--bt-gray-200: #e6e6e6; --bt-gray-300: #d4d4d4; --bt-gray-400: #a3a3a3;
--bt-gray-500: #727272; --bt-gray-600: #535353; --bt-gray-700: #404040;
--bt-gray-800: #272727; --bt-gray-900: #1a1a1a; --bt-gray-950: #0b0b0b;

/* Yellow */
--bt-yellow-0: #ffffff; --bt-yellow-50: #fdf9e8; --bt-yellow-100: #f9f2ce;
--bt-yellow-200: #f4e8aa; --bt-yellow-300: #edd882; --bt-yellow-400: #e2c455;
--bt-yellow-500: #d4af2c; --bt-yellow-600: #c49a12; --bt-yellow-700: #aa820a;
--bt-yellow-800: #8c6a05; --bt-yellow-900: #6b5103; --bt-yellow-950: #523e02;

/* Green */
--bt-green-0: #ffffff; --bt-green-50: #e8f3ee; --bt-green-100: #daede5;
--bt-green-200: #b4dbcb; --bt-green-300: #87c1ab; --bt-green-400: #5ea38b;
--bt-green-500: #448871; --bt-green-600: #356c5b; --bt-green-700: #2d584b;
--bt-green-800: #28473e; --bt-green-900: #243d36; --bt-green-950: #243d36;

/* Red */
--bt-red-0: #ffffff; --bt-red-50: #fef2f2; --bt-red-100: #fde6e6;
--bt-red-200: #fbd0d2; --bt-red-300: #f7aaae; --bt-red-400: #f27a83;
--bt-red-500: #e84b5b; --bt-red-600: #d83a52; --bt-red-700: #b31d38;
--bt-red-800: #961b35; --bt-red-900: #801b33; --bt-red-950: #470a17;

/* Teal */
--bt-teal-0: #ffffff; --bt-teal-50: #f0fdfa; --bt-teal-100: #ccfbf1;
--bt-teal-200: #99f6e4; --bt-teal-300: #5eead4; --bt-teal-400: #2dd4bf;
--bt-teal-500: #14b8a6; --bt-teal-600: #0d9488; --bt-teal-700: #0f766e;
--bt-teal-800: #115e59; --bt-teal-900: #134e4a; --bt-teal-950: #042f2e;

/* Lime */
--bt-lime-0: #ffffff; --bt-lime-50: #f7fee7; --bt-lime-100: #ecfccb;
--bt-lime-200: #d9f99d; --bt-lime-300: #bef264; --bt-lime-400: #a3e635;
--bt-lime-500: #84cc16; --bt-lime-600: #65a30d; --bt-lime-700: #4d7c0f;
--bt-lime-800: #3f6212; --bt-lime-900: #365314; --bt-lime-950: #1a2e05;

/* Cyan */
--bt-cyan-0: #ffffff; --bt-cyan-50: #ecfeff; --bt-cyan-100: #cffafe;
--bt-cyan-200: #a5f3fc; --bt-cyan-300: #67e8f9; --bt-cyan-400: #22d3ee;
--bt-cyan-500: #06b6d4; --bt-cyan-600: #0891b2; --bt-cyan-700: #0e7490;
--bt-cyan-800: #155e75; --bt-cyan-900: #164e63; --bt-cyan-950: #083344;

/* Purple */
--bt-purple-0: #ffffff; --bt-purple-50: #faf5ff; --bt-purple-100: #f3e8ff;
--bt-purple-200: #e9d5ff; --bt-purple-300: #d8b4fe; --bt-purple-400: #c084fc;
--bt-purple-500: #a855f7; --bt-purple-600: #9333ea; --bt-purple-700: #7e22ce;
--bt-purple-800: #6b21a8; --bt-purple-900: #581c87; --bt-purple-950: #3b0764;

/* Violet */
--bt-violet-0: #ffffff; --bt-violet-50: #f5f3ff; --bt-violet-100: #ede9fe;
--bt-violet-200: #ddd6fe; --bt-violet-300: #c4b5fd; --bt-violet-400: #a78bfa;
--bt-violet-500: #8b5cf6; --bt-violet-600: #7c3aed; --bt-violet-700: #6d28d9;
--bt-violet-800: #5b21b6; --bt-violet-900: #4c1d95; --bt-violet-950: #2e1065;

/* Indigo */
--bt-indigo-0: #ffffff; --bt-indigo-50: #eef2ff; --bt-indigo-100: #e0e7ff;
--bt-indigo-200: #c7d2fe; --bt-indigo-300: #a5b4fc; --bt-indigo-400: #818cf8;
--bt-indigo-500: #6366f1; --bt-indigo-600: #4f46e5; --bt-indigo-700: #4338ca;
--bt-indigo-800: #3730a3; --bt-indigo-900: #312e81; --bt-indigo-950: #1e1b4b;

/* Sky */
--bt-sky-0: #ffffff; --bt-sky-50: #f0f9ff; --bt-sky-100: #e0f2fe;
--bt-sky-200: #bae6fd; --bt-sky-300: #7dd3fc; --bt-sky-400: #38bdf8;
--bt-sky-500: #0ea5e9; --bt-sky-600: #0284c7; --bt-sky-700: #0369a1;
--bt-sky-800: #075985; --bt-sky-900: #0c4a6e; --bt-sky-950: #082f49;

/* Emerald */
--bt-emerald-0: #ffffff; --bt-emerald-50: #ecfdf5; --bt-emerald-100: #d1fae5;
--bt-emerald-200: #a7f3d0; --bt-emerald-300: #6ee7b7; --bt-emerald-400: #34d399;
--bt-emerald-500: #10b981; --bt-emerald-600: #059669; --bt-emerald-700: #047857;
--bt-emerald-800: #065f46; --bt-emerald-900: #064e3b; --bt-emerald-950: #022c22;

/* Amber */
--bt-amber-0: #ffffff; --bt-amber-50: #fffbeb; --bt-amber-100: #fef3c7;
--bt-amber-200: #fde68a; --bt-amber-300: #fcd34d; --bt-amber-400: #fbbf24;
--bt-amber-500: #f59e0b; --bt-amber-600: #d97706; --bt-amber-700: #b45309;
--bt-amber-800: #92400e; --bt-amber-900: #78350f; --bt-amber-950: #451a03;

/* Orange */
--bt-orange-0: #ffffff; --bt-orange-50: #fff7ed; --bt-orange-100: #ffedd5;
--bt-orange-200: #fed7aa; --bt-orange-300: #fdba74; --bt-orange-400: #fb923c;
--bt-orange-500: #f97316; --bt-orange-600: #ea580c; --bt-orange-700: #c2410c;
--bt-orange-800: #9a3412; --bt-orange-900: #7c2d12; --bt-orange-950: #431407;
```

---

### 3.2 Renk Koleksiyonları (Color Collections)

Semantik isimler, primitiflere `var()` alias olarak. 9 seviye: `default / light / subtle / muted / emphasis / strong / heavy / solid / intense`

```css
/* Base → Gray paleti */
--bt-base-default:  var(--bt-gray-0);    /* #ffffff */
--bt-base-light:    var(--bt-gray-50);
--bt-base-subtle:   var(--bt-gray-100);
--bt-base-muted:    var(--bt-gray-200);
--bt-base-emphasis: var(--bt-gray-300);
--bt-base-strong:   var(--bt-gray-400);
--bt-base-heavy:    var(--bt-gray-500);
--bt-base-solid:    var(--bt-gray-600);
--bt-base-intense:  var(--bt-gray-700);

/* Primary → Blue paleti */
--bt-primary-default:  var(--bt-blue-700);  /* #0d4e97 */
--bt-primary-light:    var(--bt-blue-50);
--bt-primary-subtle:   var(--bt-blue-100);
--bt-primary-muted:    var(--bt-blue-200);
--bt-primary-emphasis: var(--bt-blue-300);
--bt-primary-strong:   var(--bt-blue-400);
--bt-primary-heavy:    var(--bt-blue-500);
--bt-primary-solid:    var(--bt-blue-600);
--bt-primary-intense:  var(--bt-blue-800);

/* Secondary → Gray paleti */
--bt-secondary-default:  var(--bt-gray-700);
--bt-secondary-light:    var(--bt-gray-50);
--bt-secondary-subtle:   var(--bt-gray-100);
--bt-secondary-muted:    var(--bt-gray-200);
--bt-secondary-emphasis: var(--bt-gray-300);
--bt-secondary-strong:   var(--bt-gray-400);
--bt-secondary-heavy:    var(--bt-gray-500);
--bt-secondary-solid:    var(--bt-gray-600);
--bt-secondary-intense:  var(--bt-gray-800);

/* Brand → Blue paleti (Primary ile aynı eşlemeler) */
--bt-brand-default:  var(--bt-blue-700);
--bt-brand-light:    var(--bt-blue-50);   /* ...aynı pattern */
--bt-brand-intense:  var(--bt-blue-800);

/* Error → Red paleti */
--bt-error-default:  var(--bt-red-700);   /* #b31d38 */
--bt-error-light:    var(--bt-blue-0);    /* dikkat: Blue/0 = #ffffff */
--bt-error-subtle:   var(--bt-red-100);
--bt-error-muted:    var(--bt-red-200);
--bt-error-emphasis: var(--bt-red-300);
--bt-error-strong:   var(--bt-red-400);
--bt-error-heavy:    var(--bt-red-500);
--bt-error-solid:    var(--bt-red-600);
--bt-error-intense:  var(--bt-red-800);

/* Success → Green paleti */
--bt-success-default:  var(--bt-green-700); /* #2d584b */
--bt-success-light:    var(--bt-green-50);
--bt-success-subtle:   var(--bt-green-100);
--bt-success-intense:  var(--bt-green-800);

/* Warning → Yellow paleti */
--bt-warning-default:  var(--bt-yellow-700);
--bt-warning-light:    var(--bt-yellow-50);
--bt-warning-subtle:   var(--bt-yellow-100);  /* #f9f2ce */
--bt-warning-intense:  var(--bt-yellow-800);

/* Information → Blue paleti (Primary/Brand ile aynı eşlemeler) */
--bt-information-default:  var(--bt-blue-700);
--bt-information-intense:  var(--bt-blue-800);
```

---

### 3.3 Semantik Token'lar

**4 eksen × 7 kategori × 9 seviye** sistemi. Her eksen aynı pattern'i takip eder.

#### Surface (`--bt-surface-{kategori}-{seviye}`)

```css
/* Primary → Gray (default=Blue/0) */
--bt-surface-primary-default:  var(--bt-blue-0);    /* #ffffff */
--bt-surface-primary-light:    var(--bt-gray-50);
--bt-surface-primary-subtle:   var(--bt-gray-100);
--bt-surface-primary-muted:    var(--bt-gray-200);
--bt-surface-primary-emphasis: var(--bt-gray-300);
--bt-surface-primary-strong:   var(--bt-gray-400);
--bt-surface-primary-heavy:    var(--bt-gray-500);
--bt-surface-primary-solid:    var(--bt-gray-600);
--bt-surface-primary-intense:  var(--bt-gray-800);  /* Figma bug: Secondary grubunda tanımlı */

/* Secondary → Gray */
--bt-surface-secondary-default:  var(--bt-gray-50);
--bt-surface-secondary-light:    var(--bt-gray-100);
--bt-surface-secondary-subtle:   var(--bt-gray-200);
--bt-surface-secondary-muted:    var(--bt-gray-300);
--bt-surface-secondary-emphasis: var(--bt-gray-400);
--bt-surface-secondary-strong:   var(--bt-gray-500);
--bt-surface-secondary-heavy:    var(--bt-gray-600);
--bt-surface-secondary-solid:    var(--bt-gray-700);

/* Brand → Blue */
--bt-surface-brand-default:   var(--bt-blue-700);  /* #0d4e97 */
--bt-surface-brand-light:     var(--bt-blue-50);   /* #f1f7fe */
--bt-surface-brand-subtle:    var(--bt-blue-100);  /* #e2edfc */
--bt-surface-brand-muted:     var(--bt-blue-200);
--bt-surface-brand-emphasis:  var(--bt-blue-300);
--bt-surface-brand-strong:    var(--bt-blue-400);
--bt-surface-brand-heavy:     var(--bt-blue-500);
--bt-surface-brand-solid:     var(--bt-blue-600);
--bt-surface-brand-intense:   var(--bt-blue-800);

/* Error → Red */
--bt-surface-error-default:   var(--bt-red-700);
--bt-surface-error-light:     var(--bt-red-50);    /* #fef2f2 */
--bt-surface-error-subtle:    var(--bt-red-100);   /* #fde6e6 */
--bt-surface-error-muted:     var(--bt-red-200);
--bt-surface-error-emphasis:  var(--bt-red-300);
--bt-surface-error-strong:    var(--bt-red-400);
--bt-surface-error-heavy:     var(--bt-red-500);
--bt-surface-error-solid:     var(--bt-red-600);
--bt-surface-error-intense:   var(--bt-red-800);

/* Success → Green | Warning → Yellow | Information → Blue — aynı pattern */
```

#### Border (`--bt-border-{kategori}-{seviye}`)

```css
/* Primary → Gray (default=Gray/300) */
--bt-border-primary-default:   var(--bt-gray-300);  /* #d4d4d4 */
--bt-border-primary-light:     var(--bt-gray-50);
--bt-border-primary-subtle:    var(--bt-gray-100);
--bt-border-primary-muted:     var(--bt-gray-200);  /* #e6e6e6 */
--bt-border-primary-emphasis:  var(--bt-gray-400);
--bt-border-primary-strong:    var(--bt-gray-500);
--bt-border-primary-heavy:     var(--bt-gray-600);
--bt-border-primary-solid:     var(--bt-gray-700);
--bt-border-intense:           var(--bt-gray-800);  /* Figma leaf adı */

/* Brand → Blue */
--bt-border-brand-default:   var(--bt-blue-700);  /* #0d4e97 */
--bt-border-brand-light:     var(--bt-blue-50);
--bt-border-brand-subtle:    var(--bt-blue-100);
--bt-border-brand-muted:     var(--bt-blue-200);
--bt-border-brand-intense:   var(--bt-blue-800);

/* Error → Red | Success → Green | Warning → Yellow | Information → Blue — aynı pattern */
```

#### Text (`--bt-text-{kategori}-{seviye}`)

```css
/* Primary → Gray (inverted=Gray/0) */
--bt-text-primary-default:   var(--bt-gray-900);  /* #1a1a1a */
--bt-text-primary-light:     var(--bt-gray-200);
--bt-text-primary-subtle:    var(--bt-gray-300);
--bt-text-primary-muted:     var(--bt-gray-400);  /* #a3a3a3 */
--bt-text-primary-emphasis:  var(--bt-gray-500);  /* #727272 */
--bt-text-primary-strong:    var(--bt-gray-600);
--bt-text-primary-heavy:     var(--bt-gray-700);
--bt-text-primary-solid:     var(--bt-gray-800);
--bt-text-primary-inverted:  var(--bt-gray-0);    /* #ffffff */

/* Brand → Blue */
--bt-text-brand-default:  var(--bt-blue-700);  /* #0d4e97 */
--bt-text-brand-light:    var(--bt-blue-50);
--bt-text-brand-intense:  var(--bt-blue-800);

/* Error → Red */
--bt-text-error-default:  var(--bt-red-700);   /* #b31d38 */

/* Success → Green */
--bt-text-success-default:  var(--bt-green-700);  /* #2d584b */

/* Warning → Yellow | Information → Blue — aynı pattern */
```

#### Icon (`--bt-icon-{kategori}-{seviye}`)

```css
/* Primary → Gray (inverted=Gray/0) */
--bt-icon-primary-default:   var(--bt-gray-900);  /* #1a1a1a */
--bt-icon-primary-light:     var(--bt-gray-200);
--bt-icon-primary-subtle:    var(--bt-gray-300);
--bt-icon-primary-muted:     var(--bt-gray-400);  /* #a3a3a3 */
--bt-icon-primary-emphasis:  var(--bt-gray-500);  /* #727272 */
--bt-icon-primary-strong:    var(--bt-gray-600);  /* #535353 */
--bt-icon-primary-heavy:     var(--bt-gray-700);
--bt-icon-primary-solid:     var(--bt-gray-800);
--bt-icon-primary-inverted:  var(--bt-gray-0);    /* #ffffff */

/* Brand → Blue | Error → Red | Success → Green | Warning → Yellow — aynı pattern */
--bt-icon-brand-default:   var(--bt-blue-700);
--bt-icon-error-default:   var(--bt-red-700);
```

---

### 3.4 Backward-Compat Alias'lar

Kısa isimler, tam semantik token'lara alias:

```css
/* Text */
--bt-text-default:   var(--bt-text-primary-default);
--bt-text-muted:     var(--bt-text-primary-muted);
--bt-text-emphasis:  var(--bt-text-primary-emphasis);
--bt-text-strong:    var(--bt-text-primary-strong);
--bt-text-heavy:     var(--bt-text-primary-heavy);
--bt-text-solid:     var(--bt-text-primary-solid);
--bt-text-subtle:    var(--bt-text-primary-subtle);
--bt-text-light:     var(--bt-text-primary-light);
--bt-text-inverted:  var(--bt-text-primary-inverted);
--bt-text-brand:     var(--bt-text-brand-default);
--bt-text-success:   var(--bt-text-success-default);
--bt-text-warning:   var(--bt-text-warning-default);
--bt-text-error:     var(--bt-text-error-default);

/* Surface */
--bt-surface-default:  var(--bt-surface-primary-default);
--bt-surface-light:    var(--bt-surface-primary-light);
--bt-surface-subtle:   var(--bt-surface-primary-subtle);
--bt-surface-muted:    var(--bt-surface-primary-muted);
--bt-surface-emphasis: var(--bt-surface-primary-emphasis);
--bt-surface-brand:    var(--bt-surface-brand-default);
--bt-surface-success:  var(--bt-surface-success-light);
--bt-surface-warning:  var(--bt-surface-warning-light);
--bt-surface-error:    var(--bt-surface-error-light);

/* Border */
--bt-border-default:      var(--bt-border-primary-default);
--bt-border-muted:        var(--bt-border-primary-muted);
--bt-border-subtle:       var(--bt-border-primary-subtle);
--bt-border-emphasis:     var(--bt-border-primary-emphasis);
--bt-border-brand:        var(--bt-border-brand-default);
--bt-border-brand-light:  #f1f7fe;  /* Blue/50 hex direkt */

/* Icon */
--bt-icon-default:   var(--bt-icon-primary-default);
--bt-icon-muted:     var(--bt-icon-primary-muted);
--bt-icon-emphasis:  var(--bt-icon-primary-emphasis);
--bt-icon-inverted:  var(--bt-icon-primary-inverted);
--bt-icon-brand:     var(--bt-icon-brand-default);
```

---

### 3.5 Base Sizing Scale

```css
--bt-base-sizing-none: 0px;
--bt-base-sizing-3xs:  1px;   --bt-base-sizing-2xs:  2px;
--bt-base-sizing-xs:   4px;   --bt-base-sizing-sm:   6px;
--bt-base-sizing-md:   8px;   --bt-base-sizing-lg:   10px;
--bt-base-sizing-xl:   12px;  --bt-base-sizing-2xl:  14px;
--bt-base-sizing-3xl:  16px;  --bt-base-sizing-4xl:  18px;
--bt-base-sizing-5xl:  20px;  --bt-base-sizing-6xl:  24px;
--bt-base-sizing-7xl:  28px;  --bt-base-sizing-8xl:  32px;
--bt-base-sizing-9xl:  36px;  --bt-base-sizing-10xl: 40px;
--bt-base-sizing-11xl: 44px;  --bt-base-sizing-12xl: 48px;
--bt-base-sizing-13xl: 52px;  --bt-base-sizing-14xl: 56px;
--bt-base-sizing-15xl: 60px;  --bt-base-sizing-16xl: 64px;
--bt-base-sizing-17xl: 68px;  --bt-base-sizing-18xl: 72px;
--bt-base-sizing-19xl: 76px;  --bt-base-sizing-20xl: 80px;
--bt-base-sizing-21xl: 84px;  --bt-base-sizing-22xl: 88px;
--bt-base-sizing-23xl: 92px;  --bt-base-sizing-24xl: 96px;
--bt-base-sizing-25xl: 100px; --bt-base-sizing-26xl: 112px;
--bt-base-sizing-27xl: 120px; --bt-base-sizing-28xl: 128px;
--bt-base-sizing-29xl: 132px; --bt-base-sizing-30xl: 144px;
--bt-base-sizing-31xl: 160px; --bt-base-sizing-32xl: 176px;
--bt-base-sizing-33xl: 180px; --bt-base-sizing-34xl: 192px;
--bt-base-sizing-full: 9999px;
```

---

### 3.6 Spacing

```css
--bt-space-none: 0px;   --bt-space-2xs: 2px;
--bt-space-xs:   4px;   --bt-space-sm:  6px;
--bt-space-md:   8px;   --bt-space-lg:  10px;
--bt-space-xl:   12px;  --bt-space-2xl: 16px;
--bt-space-3xl:  20px;  --bt-space-4xl: 24px;
--bt-space-5xl:  28px;  --bt-space-6xl: 32px;
--bt-space-7xl:  36px;  --bt-space-8xl: 40px;
--bt-space-9xl:  44px;  --bt-space-10xl: 48px;
--bt-space-11xl: 52px;  --bt-space-12xl: 56px;
--bt-space-13xl: 60px;  --bt-space-14xl: 64px;
--bt-space-15xl: 68px;  --bt-space-16xl: 72px;
--bt-space-17xl: 80px;
```

---

### 3.7 Border Radius

```css
--bt-radius-none: 0px;   --bt-radius-xs:   2px;
--bt-radius-sm:   4px;   --bt-radius-md:   6px;
--bt-radius-lg:   8px;   --bt-radius-xl:   10px;
--bt-radius-2xl:  12px;  --bt-radius-3xl:  14px;
--bt-radius-4xl:  16px;  --bt-radius-5xl:  20px;
--bt-radius-6xl:  24px;  --bt-radius-full: 9999px;
```

---

### 3.8 Tipografi Scale

`--bt-text-{size}-size` (font-size) + `--bt-text-{size}-lh` (line-height):

```css
--bt-text-2xs-size: 10px;  --bt-text-2xs-lh: 12px;
--bt-text-xs-size:  12px;  --bt-text-xs-lh:  16px;
--bt-text-sm-size:  14px;  --bt-text-sm-lh:  16px;
--bt-text-md-size:  16px;  --bt-text-md-lh:  24px;
--bt-text-lg-size:  18px;  --bt-text-lg-lh:  24px;
--bt-text-xl-size:  20px;  --bt-text-xl-lh:  28px;
--bt-text-2xl-size: 24px;  --bt-text-2xl-lh: 32px;
--bt-text-3xl-size: 28px;  --bt-text-3xl-lh: 36px;
--bt-text-4xl-size: 32px;  --bt-text-4xl-lh: 40px;
--bt-text-5xl-size: 36px;  --bt-text-5xl-lh: 44px;
--bt-text-6xl-size: 40px;  --bt-text-6xl-lh: 48px;
```

---

### 3.9 Medusa'ya Özgü Ek Token'lar

MobileDesignSystem'de tanımsız, yalnızca medusa projesinde kullanılıyor:

```css
/* Etkileşim durumları */
--bt-primary-hover:  #0b4485;
--bt-primary-active: #093a72;

/* Tab yüzey durumları */
--bt-surface-tab-default: #f3f4f6;
--bt-surface-tab-hover:   #e8e9eb;

/* Login sayfası brand paneli */
--brand-bg:       #05238b;
--btn-primary-bg: #3559c7;
```

> **Not**: Medusa projesi bu token sistemi kurulmadan önce geliştirildiğinden bazı
> bileşenlerde bare hex değerleri veya eski `--color-gray-*` isimleri kullanılmaktadır.
> Yeni projelerde yukarıdaki `--bt-*` sistemi kullanılmalıdır.

---

## 4. Reset

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
input  { font-family: inherit; outline: none; }
html, body { height: 100%; overflow: hidden; font-family: var(--font-text); }
```

---

## 5. App Shell Layout

```
.app-layout                     ← display:flex; height:100vh
  ├── .sidebar                  ← width:280px; flex-shrink:0
  └── .main-content             ← flex:1; min-width:0; display:flex; flex-direction:column
```

```css
.app-layout { display: flex; height: 100vh; }

.main-content {
  flex: 1; min-width: 0;
  display: flex; flex-direction: column;
  height: 100%; overflow: hidden;
  position: relative;
}
.main-content[hidden] { display: none !important; }
```

---

## 6. Sidebar — Standart Sidebar

> **2026-07-22 güncellemesi:** Bu bölüm eskiden Medusa'nın kendi bespoke sidebar'ını
> (`.sidebar-header`, `.nav-item-btn` vb.) belgeliyordu. O yapı artık **Bentas Design
> System'in Standart Sidebar component'ine** (`.stb-*`, Figma node `502:18421`)
> geçirildi — Medusa'nın `dashboard.html`'i bu component'in gerçek bir tüketicisi.
> Aşağıdaki CSS, Bentas-Design-System'in `docs/css/styles.css`'teki `.stb-*` bloğu
> ile **birebir aynı** (sadece token isimleri host projeye göre değişir — bkz. not).
> Design system'in kendi dokümantasyonunda ayrıca bir **Hub Sidebar** (`.sbx-*`,
> kalıcı ikon rail + ayrı toggle edilebilir drawer) varyantı da var; Medusa bunu
> kullanmıyor, o yüzden burada belgelenmedi — gerekirse Bentas-Design-System'in
> `components/sidebar` sayfasına bakılabilir.

### Yapı

```
.stb-shell                        ← tek panel, kendi üst butonuyla 280px ↔ 48px
  ├── .stb-top                    ← her zaman görünür: menu-toggle + logo + başlık
  │     ├── .stb-menu-btn
  │     └── .stb-brand            ← .stb-logo + .stb-title (collapsed'de gizlenir)
  └── .stb-body                   ← flex:1, column
        ├── .stb-search-wrap      ← .bt-searchbox (gerçek SearchBox component'i)
        │                           (collapsed'de gizlenir)
        ├── .stb-list             ← flex:1, scroll — nav item'lar (.stb-item)
        └── (proje-özel alt bölüm ── Medusa'da: kullanıcı satırı + overflow menü,
             kendi class'larını korur, Standart Sidebar'ın parçası değildir)
```

**Kritik prensip:** Collapsed/expanded state DOM değişmez — `.stb-shell.is-collapsed`
class'ı eklenir, `.stb-item-label` ve arama alanı `display:none` ile gizlenir. Bu
yüzden state geçişi CSS `transition: width` ile pürüzsüz animasyonlanır.

### CSS (token isimleri Bentas-Design-System'in `--bt-*` sistemine göre; Medusa gibi
kısaltılmış token seti kullanan projelerde `--bt-space-*`→`--space-*`,
`--bt-radius-*`→`--radius-*` şeklinde eşleştirin — **değerler aynı, sadece isim**)

```css
.stb-shell {
  width: 280px; flex-shrink: 0;
  display: flex; flex-direction: column;
  height: 100%;
  background: var(--bt-surface-primary-default);
  border-right: 1px solid var(--bt-border-primary-default);
  overflow: hidden;
  transition: width 200ms ease;
}
.stb-shell.is-collapsed { width: 48px; }

.stb-top {
  display: flex; align-items: center;
  gap: var(--bt-space-md);
  height: 48px;
  padding: var(--bt-space-sm) var(--bt-space-lg);
  background: var(--bt-primary-default);
  box-sizing: border-box; flex-shrink: 0;
}
.stb-shell.is-collapsed .stb-top { justify-content: center; padding: var(--bt-space-lg); }

.stb-menu-btn {
  width: 28px; height: 28px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  border: none; padding: 0;
  border-radius: var(--bt-radius-sm);
  background: var(--bt-primary-default);
  color: var(--bt-text-primary-inverted);
  cursor: pointer; transition: background 100ms;
}
.stb-menu-btn:hover { background: var(--bt-primary-intense); } /* Medusa: --bt-primary-hover/-active kendi token'ı */

.stb-brand { display: flex; align-items: center; gap: var(--bt-space-sm); min-width: 0; overflow: hidden; }
.stb-shell.is-collapsed .stb-brand { display: none; }

/* Bentas'ta placeholder gradient logo; gerçek bir logo görseli varsa
   (Medusa gibi) bu kutu sadece 36×36/radius-md container'dır, içine <img> konur */
.stb-logo { width: 36px; height: 36px; border-radius: var(--bt-radius-md); flex-shrink: 0; overflow: hidden; }
.stb-title {
  font-family: var(--font-title); font-weight: 500;
  font-size: var(--bt-text-lg-size, 18px); line-height: var(--bt-text-lg-lh, 24px);
  color: var(--bt-text-primary-inverted); white-space: nowrap;
}

.stb-body { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.stb-shell.is-collapsed .stb-body { padding-top: var(--bt-space-2xl); }

/* Search — gerçek .bt-searchbox (md: 32px yükseklik) reuse edilir, statik taklit değil */
.stb-search-wrap { padding: var(--bt-space-xl) var(--bt-space-lg) var(--bt-space-md); flex-shrink: 0; }
.stb-shell.is-collapsed .stb-search-wrap { display: none; }

.stb-list { flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: var(--bt-space-2xs); }
.stb-item { padding: 0 var(--bt-space-md); flex-shrink: 0; box-sizing: border-box; }
.stb-item-inner {
  display: flex; align-items: center;
  height: 32px; width: 100%;
  border-radius: var(--bt-radius-md);
  background: var(--bt-surface-primary-default);
  color: var(--bt-text-primary-default);
  text-align: left; cursor: pointer; box-sizing: border-box;
  transition: background 100ms, color 100ms;
}
.stb-item-inner:hover { background: var(--bt-surface-primary-subtle); }
.stb-item-inner:active { background: var(--bt-base-emphasis); }
.stb-item-inner.is-selected { background: var(--bt-surface-brand-default); color: var(--bt-text-primary-inverted); }
.stb-item-inner.is-selected .stb-item-icon { color: var(--bt-text-primary-inverted); }
.stb-item-inner.is-selected:hover,
.stb-item-inner.is-selected:active { background: var(--bt-primary-intense); }

.stb-item-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; padding: var(--bt-space-xs); /* 4px pad + 24px ikon = 32px kontrol */
  color: var(--bt-icon-primary-strong); box-sizing: border-box; flex-shrink: 0;
}
.stb-item-label {
  flex: 1; min-width: 0; padding: var(--bt-space-md) 2px;
  font-size: 13px; line-height: 16px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.stb-shell.is-collapsed .stb-item-label { display: none; }
.stb-shell.is-collapsed .stb-item-inner { justify-content: center; } /* label gidince tek kalan ikon ortalanır */
```

### JS Davranışı

```js
window._stbToggle = function (btn) {
  const shell = btn.closest('.stb-shell');
  if (shell) shell.classList.toggle('is-collapsed');
};
// onclick="window._stbToggle(this)" — menu-toggle butonunda

// Nav seçimi (tek seçim, kendi .stb-list'i içinde):
window._stbSelectItem = function (el) {
  const list = el.closest('.stb-list');
  if (!list) return;
  const current = list.querySelector('.stb-item-inner.is-selected');
  if (current && current !== el) current.classList.remove('is-selected');
  el.classList.add('is-selected');
};
```

### ⚠️ Lucide icon tuzağı (bir consuming projede tekrar yaşandı)

Lucide `createIcons()` çalıştığında `<i data-lucide="...">` etiketini **`<svg>`'ye
dönüştürür** (tag adı değişir, class'lar/attribute'lar korunur). Bu yüzden
`.stb-item-icon i { width:16px }` gibi **tag-tabanlı descendant seçiciler** işlem
sonrası hiçbir şeye eşleşmez — DOM'da artık `i` yok, `svg` var. Doğrusu: boyut
class'ını **doğrudan ikon elementinin üzerine** yaz (`<i data-lucide="menu"
class="stb-menu-icon">`), `.stb-menu-icon { width:14px; height:14px; }` gibi bir
class seçiciyle hedefle — Lucide bu class'ı yeni `<svg>`'ye aktarır, güvenilir
şekilde çalışır.

### Consuming proje örneği: Medusa Dashboard

`medusa-demo/dashboard.html` bu component'i gerçek bir üründe kullanıyor — bkz.
[[project_medusa_dashboard]]. Adaptasyonda dikkat edilenler:
- İçerik (logo görseli, uygulama adı, nav item'ların ikon/etiketleri, arama
  placeholder'ı) tamamen korundu — sadece yapı/state sistemi değişti.
- Kullanıcı satırı + overflow menü (`.user-widget`/`.uw-*`) Standart Sidebar'ın
  parçası **değil** — Medusa'ya özel bir alt bölüm olarak `.stb-body` içine,
  `.stb-list`'ten sonra üçüncü çocuk olarak eklendi, kendi class'larıyla
  dokunulmadan bırakıldı; sadece collapsed state'te `.user-info` metni gizlenecek
  tek bir ek kural eklendi.
- Token isimleri host projenin kendi kısaltılmış setine çevrildi (`--bt-space-lg`,
  `--bt-text-lg-size/-lh`, `--bt-base-emphasis` gibi eksik olanlar host'un
  `:root`'una eklendi).
- Nav item'lar `<div role="button">` değil gerçek `<button>` olarak yazıldı —
  klavye (Enter/Space) native çalışsın diye, orijinal Medusa markup'ı da zaten
  `<button>` kullanıyordu.

---

## 7. Page Header & Toolbar

```css
/* Sayfa başlık çubuğu */
.page-header {
  display: flex; align-items: center;
  height: 36px;
  border-bottom: 1px solid var(--bt-border-primary-default);
  padding: var(--space-sm) var(--space-xl);
  flex-shrink: 0;
  background: var(--bt-surface-primary-default);
}
.page-title {
  font-family: var(--font-title); font-size: var(--text-md);
  font-weight: 500; line-height: var(--lh-md);
  color: var(--color-gray-900); white-space: nowrap;
}

/* Toolbar (filtreler, butonlar, arama) */
.toolbar {
  display: flex; align-items: center; justify-content: space-between;
  height: 40px;
  border-bottom: 1px solid var(--bt-border-primary-default);
  padding: var(--space-sm) var(--space-xl);
  flex-shrink: 0;
  background: var(--bt-base-default);
}
.toolbar-actions { display: flex; gap: 10px; align-items: center; }

/* Toolbar search (280px genişlik) */
.toolbar-search {
  display: flex; align-items: center;
  width: 280px; height: 28px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-default);
  overflow: hidden;
}
.toolbar-search-input {
  flex: 1; min-width: 0; border: none;
  font-size: var(--text-sm); color: var(--bt-text-primary-default);
  background: transparent; outline: none;
  padding: var(--space-xs) var(--space-xs) var(--space-xs) var(--space-xl);
}
.toolbar-search-input::placeholder { color: var(--bt-text-primary-muted); }
.toolbar-search-sep {
  width: 1px; height: 28px;
  background: var(--bt-border-primary-default); flex-shrink: 0;
}
```

---

## 8. Butonlar

### 8.1 Base .btn

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-sm); height: 28px; padding: 0 var(--space-md);
  border-radius: var(--radius-sm);
  font-family: var(--font-title); font-size: var(--text-xs);
  font-weight: 400; line-height: var(--lh-xs);
  cursor: pointer; transition: opacity 0.15s, background 0.15s;
}
.btn-icon { width: 16px; height: 16px; display: block; flex-shrink: 0; }
```

### 8.2 Varyantlar

```css
/* Primary — mavi dolu */
.btn-primary {
  background: var(--bt-primary-default);
  color: var(--bt-text-primary-inverted); border: none;
}
.btn-primary:hover  { background: var(--bt-primary-hover); }
.btn-primary:active { background: var(--bt-primary-active); transform: scale(0.97); }
.btn-primary:disabled {
  background: var(--bt-base-muted); color: var(--bt-text-primary-muted);
  cursor: not-allowed; pointer-events: none;
}

/* Outline — çerçeveli */
.btn-outline {
  background: transparent; color: var(--bt-text-primary-default);
  border: 1px solid var(--bt-border-primary-default);
}
.btn-outline:hover { background: var(--bt-surface-primary-subtle); }

/* Danger — kırmızı dolu */
.btn-danger { background: #b31d38; color: #ffffff; border: none; }
.btn-danger:hover  { background: #961630; }
.btn-danger:active { background: #7d1228; transform: scale(0.97); }

/* Flat small (text-only, toolbar) */
.btn-flat-sm {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: var(--space-sm) var(--space-md); border: none;
  border-radius: var(--radius-sm); background: transparent;
  color: var(--bt-text-primary-default);
  font-size: var(--text-xs); cursor: pointer; transition: background 0.15s;
}
.btn-flat-sm:hover { background: var(--bt-surface-primary-subtle); }
.btn-flat-sm--danger { color: #b31d38; }
.btn-flat-sm--danger:hover { background: #fef2f2; }
.btn-flat-sm:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

/* Outline small */
.btn-outline-sm {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: transparent;
  color: var(--bt-text-primary-default); font-size: var(--text-xs);
  cursor: pointer; transition: background 0.15s;
}
.btn-outline-sm:hover { background: var(--bt-surface-primary-subtle); }
```

### 8.3 Split Button (Flat)

```css
.sb-flat { position: relative; display: inline-flex; align-items: stretch; border-radius: var(--radius-sm); }
.sb-flat__btn {
  padding: var(--space-2xs) var(--space-sm); background: transparent; border: none;
  font-size: var(--text-xs); cursor: pointer;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  transition: background 0.12s;
}
.sb-flat__divider { width: 1px; background: var(--bt-border-primary-default); align-self: stretch; }
.sb-flat__split {
  display: inline-flex; align-items: center; justify-content: center;
  padding: var(--space-2xs); width: 20px; background: transparent; border: none;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0; cursor: pointer;
}
.sb-flat__btn:hover, .sb-flat__split:hover,
.sb-flat.is-open .sb-flat__btn,
.sb-flat.is-open .sb-flat__split { background: var(--bt-surface-primary-subtle); }

/* Dropdown list */
.sb-flat__list {
  position: absolute; top: calc(100% + 4px); left: 0; min-width: 140px;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  z-index: 200; overflow: hidden;
}
.sb-flat__list[hidden] { display: none; }
.sb-flat__item {
  display: flex; align-items: center; gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-xs); cursor: pointer;
  color: var(--bt-text-primary-default); transition: background 0.1s;
}
.sb-flat__item:hover { background: var(--bt-surface-primary-subtle); }
```

---

## 9. Data Table

### Yapı

```
.table-container                ← flex:1; padding:16px; overflow:hidden
  └── .grid-card                ← white card, border, border-radius:4px
        ├── .sc-tabs             ← segmented control (tablo türü seçimi)
        └── .grid-table-wrap     ← overflow:auto; flex:1
              └── .grid-table-inner  ← min-height:100%; width:1950px (sabit genişlik)
                    └── table.data-table
```

```css
.table-container {
  flex: 1; overflow: hidden; padding: var(--space-2xl);
  background: var(--bt-surface-primary-light);
  display: flex; flex-direction: column; min-height: 0;
}
.grid-card {
  flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 12px;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); padding: 16px; overflow: hidden;
}
.grid-table-wrap { flex: 1; min-height: 0; overflow: auto; }
.grid-table-inner { min-height: 100%; display: flex; flex-direction: column; width: 1950px; }

.data-table {
  border-collapse: collapse; table-layout: fixed; width: 1950px;
}
```

### Header Row

```css
.data-table thead tr { height: 36px; }
.data-table th {
  background: var(--bt-base-default);
  border-top: 1px solid var(--bt-border-primary-default);
  box-shadow: inset 0 -1px 0 var(--bt-border-primary-default);
  padding: 0; font-weight: 400;
  position: sticky; top: 0; z-index: 1;
  overflow: visible; user-select: none;
}
.data-table th:first-child { border-left:  1px solid var(--bt-border-primary-default); }
.data-table th:last-child  { border-right: 1px solid var(--bt-border-primary-default); }

.th-inner { display: flex; align-items: center; height: 36px; }
.th-label {
  font-size: var(--text-xs); font-weight: 500; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  flex: 1; min-width: 0;
}
```

### Kolon Resize Handle

```css
.col-resize-handle {
  position: absolute; right: 0; top: 0; bottom: 0;
  width: 4px; cursor: col-resize; z-index: 2; transition: background 0.15s;
}
.col-resize-handle:hover,
.col-resize-handle.is-resizing { background: var(--bt-primary-default); opacity: 0.4; }
```

JS: `mousedown` → `mousemove` ile `th.style.width` güncelle, `col` elementinin `width` attribute'unu da güncelle.

### Kolon Sort

```css
th[data-col] { cursor: pointer; user-select: none; }
.th-sort {
  display: flex; align-items: center; justify-content: center;
  width: 20px; height: 28px; flex-shrink: 0;
  color: var(--bt-icon-primary-muted, #aaa); opacity: 0;
  transition: opacity 0.15s, color 0.15s;
}
th[data-col]:hover .th-sort { opacity: 0.45; }
th[data-sort="asc"]  .th-sort,
th[data-sort="desc"] .th-sort { opacity: 1; color: var(--bt-primary-default); }
```

### Data Rows

```css
.data-table tbody tr { height: 32px; }
.data-table tbody tr:hover td { background: var(--bt-surface-primary-subtle); }
.data-table tbody tr.is-selected-row td { background: var(--bt-surface-brand-subtle); }

/* Row blur-in animasyonu (yeni eklenen satır) */
@keyframes textBlurInFlash {
  0%   { filter: blur(5px); opacity: 0;   background-color: transparent; }
  8%   { filter: blur(5px); opacity: 0.2; background-color: #dcfce7; }
  55%  { filter: blur(0px); opacity: 1;   background-color: #dcfce7; }
  100% { filter: blur(0px); opacity: 1;   background-color: transparent; }
}
.tr-blur-in td { animation: textBlurInFlash 1.6s cubic-bezier(0.4,0,0.2,1) forwards; }

.data-table td {
  background: var(--bt-base-default);
  border-bottom: 1px solid var(--bt-border-primary-default);
  padding: 0; overflow: hidden;
}
.data-table td:first-child { border-left:  1px solid var(--bt-border-primary-default); }
.data-table td:last-child  { border-right: 1px solid var(--bt-border-primary-default); }

.td-inner { display: flex; align-items: center; height: 32px; }
.td-cell  { display: flex; align-items: center; flex: 1; min-width: 0; padding: var(--space-md); }
.td-text  {
  font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  flex: 1; min-width: 0;
}
```

### Frozen First Column

```css
.data-table th:first-child,
.data-table td:first-child {
  position: sticky; left: 0; z-index: 2;
  background: var(--bt-base-default);
}
.data-table thead th:first-child { z-index: 4; }
.data-table td:first-child { overflow: visible; }

/* Sağ taraf gölgesi */
.data-table th:first-child::after,
.data-table td:first-child::after {
  content: ''; position: absolute;
  top: 0; right: -8px; width: 8px; height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.04), transparent);
  pointer-events: none;
}
```

### Checkbox

```css
.checkbox-box {
  width: 16px; height: 16px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-2xs);
  background: var(--bt-surface-primary-default);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0;
}
.checkbox-box:hover { border-color: var(--bt-primary-default); }
.checkbox-box.is-checked { background: var(--bt-primary-default); border-color: var(--bt-primary-default); }
.checkbox-box svg { display: none; width: 12px; height: 12px; color: white; }
.checkbox-box.is-checked svg { display: block; }
```

### Badge (Durum / Öncelik)

```css
.badge-cell {
  display: flex; align-items: center; justify-content: center;
  flex: 1; height: 28px; padding: var(--space-2xs) var(--space-2xl);
}
.badge {
  display: inline-flex; align-items: center; justify-content: center;
  flex: 1; border-radius: var(--radius-full);
  border: 1px solid var(--bt-border-primary-default);
  background: var(--bt-secondary-light);
  padding: 2px var(--space-md);
}
.badge-text { font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs); }

/* Durum renkleri */
.badge--onay-bkl    { background: var(--bt-warning-subtle); }
.badge--calisiliyor { background: var(--orange-200); }
.badge--tamamlandi  { background: var(--green-100); }
.badge--bilgi-bek   { background: var(--purple-100); }
.badge--redded      { background: #fee2e2; }
.badge--onaylandi   { background: var(--green-100); }
```

### Renkli Dot

```css
.dot-wrap { display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; flex-shrink: 0; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--bt-primary-default); }
.dot--type-acik      { background: var(--blue-500); }
.dot--type-onay-bek  { background: var(--yellow-500); }
.dot--type-onaylandi { background: var(--teal-600); }
.dot--type-redded    { background: var(--red-500); }
```

### Öncelik & İş Türü Icon Renkleri

```css
/* Öncelik */
.oncelik-icon--dusuk  { color: var(--gray-400); }
.oncelik-icon--normal { color: var(--blue-600); }
.oncelik-icon--yuksek { color: var(--orange-600); }
.oncelik-icon--acil   { color: var(--red-600); }

/* İş Türü */
.is-turu-icon--acik      { color: var(--blue-500); }
.is-turu-icon--onay-bek  { color: var(--yellow-500); }
.is-turu-icon--onaylandi { color: var(--teal-600); }
.is-turu-icon--redded    { color: var(--red-500); }
```

### Kolon Visibility Toggle (Sütun Göster/Gizle)

```css
.col-toggle-btn {
  display: flex; align-items: center; gap: 6px;
  height: 32px; padding: 0 10px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-xs);
  background: var(--bt-surface-primary-default);
  cursor: pointer; transition: background 0.15s;
}
.col-toggle-menu {
  position: absolute; top: calc(100% + 6px); right: 0;
  width: 237px; background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(16,24,40,0.10), 0px 2px 2px rgba(16,24,40,0.06);
  z-index: 500; padding: 16px;
  display: flex; gap: 8px; flex-direction: column;
  opacity: 0; transform: translateY(-6px) scale(0.97); transform-origin: top right;
  pointer-events: none; transition: opacity 0.18s ease, transform 0.18s ease;
}
.col-toggle-menu.is-open { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

/* Toggle switch (32×20, thumb 16×16, radius:4px) */
.col-sw {
  flex-shrink: 0; width: 32px; height: 20px; padding: 2px;
  border-radius: 4px; background: #d4d4d4;
  display: flex; align-items: center; cursor: pointer; transition: background 0.2s;
}
.col-sw.is-on { background: var(--bt-surface-brand-default); }
.col-sw-thumb {
  width: 16px; height: 16px; border-radius: 4px;
  background: #fff; flex-shrink: 0;
  transform: translateX(0); transition: transform 0.2s;
}
.col-sw.is-on .col-sw-thumb { transform: translateX(12px); }
```

Kolon gizleme: `data-table` üzerine `col-hidden-N` class'ı eklenir (N = 2–15).
```css
.data-table.col-hidden-N thead tr th:nth-child(N),
.data-table.col-hidden-N tbody tr td:nth-child(N) { display: none; }
```

### Column Filter Panel (Kolon Başlığı Filtresi)

```css
.col-fp {
  position: fixed; z-index: 400;
  min-width: 200px; max-width: 280px;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 12px rgba(16,24,40,0.14);
  display: flex; flex-direction: column; overflow: hidden;
}
.col-fp[hidden] { display: none; }
.col-fp-input {
  width: 100%; height: 28px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-xs); padding: 0 8px;
  font-size: var(--text-xs); outline: none;
}
.col-fp-input:focus { border-color: var(--bt-primary-default); }
.col-fp-list { overflow-y: auto; max-height: 200px; padding: 4px 0; }
.col-fp-item {
  display: flex; align-items: center; gap: 8px;
  padding: 5px 10px; cursor: pointer; font-size: var(--text-xs);
}
.col-fp-item:hover { background: var(--bt-surface-primary-subtle); }
.col-fp-item-check {
  width: 14px; height: 14px; flex-shrink: 0;
  border: 1.5px solid var(--bt-border-primary-default);
  border-radius: 3px; display: flex; align-items: center; justify-content: center;
}
.col-fp-item.is-checked .col-fp-item-check { background: var(--bt-primary-default); border-color: var(--bt-primary-default); }
.col-fp-item.is-checked .col-fp-item-check::after { content: '✓'; color: #fff; font-size: 9px; }
```

### Segmented Control (Tablo Tab)

```css
.sc-tabs {
  display: inline-flex; align-self: flex-start;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); overflow: hidden;
}
.sc-tab {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs);
  background: var(--bt-surface-primary-subtle);
  cursor: pointer; white-space: nowrap; transition: background 0.12s, color 0.12s;
}
.sc-tab:hover:not(.is-active) { background: var(--bt-surface-tab-hover); }
.sc-tab.is-active { background: var(--bt-surface-brand-default); color: var(--bt-text-primary-inverted); }
```

Satır gizleme: `tr.sc-hidden`, `tr.fp-hidden`, `tr.search-hidden`, `tr.cf-hidden` → `display:none`

### Grid Footer (seçim özeti)

```css
.bnt-grid-footer {
  display: none; align-items: center; gap: 8px;
  padding: 8px var(--space-xl);
  border-top: 1px solid var(--bt-border-primary-default);
  background: var(--bt-base-default); flex-shrink: 0;
}
.bnt-grid-footer.is-visible { display: flex; }
.bnt-footer-label { font-size: 12px; font-weight: 500; color: var(--bt-text-primary-emphasis); }
.bnt-footer-count { font-size: 12px; font-weight: 600; color: var(--bt-primary-default); }
```

---

## 10. Side Panels (Sağdan Kayan Paneller)

### 10.1 Task Add Panel (Yeni Talep / 653px)

#### Anatomy

```
task-panel (aside, role=dialog, hidden)
  ├── task-panel__header (40px)
  │     ├── task-panel__header-left   ← [×] close btn + title
  │     └── [Kaydet] btn              ← sağda, footer YOK
  └── task-panel__body (flex:1, arka plan: surface-light)
        └── task-panel__card          ← beyaz inner card, overflow-y:auto
              ├── tp-field (İşin Adı)
              ├── tp-field (Açıklama)
              └── tp-field (...)
```

> **Header yapısı:** Close butonu + başlık **solda** (`header-left`), Kaydet butonu **header'ın sağında**. Ayrı bir footer bölümü yoktur.
>
> **Inner card:** Body, açık renkli (`surface-light`) bir dolgu alanıdır; formun kendisi beyaz (`surface-default`) bordered card içinde yaşar.

#### CSS

```css
/* Arka plan overlay */
.panel-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.35); z-index: 100;
  opacity: 0; pointer-events: none; transition: opacity 0.28s ease;
}
.panel-overlay.is-open { opacity: 1; pointer-events: all; }

/* Panel kabuğu — başlangıçta hidden attribute + translateX(100%) */
.task-panel {
  position: fixed; top: 0; right: 0;
  width: 653px; height: 100vh; z-index: 201;
  display: flex; flex-direction: column;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.task-panel.is-open { transform: translateX(0); }

/* Header — 40px */
.task-panel__header {
  height: 40px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--space-xl);
  background: var(--bt-surface-primary-default);
  border-bottom: 1px solid var(--bt-border-primary-default);
  box-shadow: 0px 2px 3px rgba(0,0,0,0.08);
}
.task-panel__header-left { display: flex; align-items: center; gap: var(--space-md); }
.task-panel__title {
  font-family: var(--font-title); font-size: var(--text-md);
  font-weight: 400; line-height: var(--lh-md); color: var(--color-gray-900);
}
.task-panel__close {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; padding: var(--space-sm);
  border-radius: var(--radius-sm); color: var(--bt-text-primary-default);
  transition: background 0.15s;
}
.task-panel__close:hover { background: var(--bt-surface-primary-subtle); }

/* Body */
.task-panel__body {
  flex: 1; min-height: 0; display: flex; flex-direction: column;
  padding: var(--space-2xl); background: var(--bt-surface-primary-light);
}

/* Inner card — formun yaşadığı beyaz alan */
.task-panel__card {
  flex: 1; background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); padding: 20px;
  display: flex; flex-direction: column; gap: 16px;
  overflow-y: auto;
}
```

#### HTML Skeleton

```html
<div class="panel-overlay" id="panelOverlay" aria-hidden="true"></div>

<aside class="task-panel" id="taskPanel"
       role="dialog" aria-modal="true"
       aria-labelledby="taskPanelTitle"
       hidden>

  <div class="task-panel__header">
    <div class="task-panel__header-left">
      <button class="task-panel__close" id="taskPanelClose" aria-label="Kapat">
        <i data-lucide="x"></i>
      </button>
      <span class="task-panel__title" id="taskPanelTitle">Yeni İş Talebi Ekle</span>
    </div>
    <button class="btn btn-primary" id="taskPanelSave">Kaydet</button>
  </div>

  <div class="task-panel__body">
    <div class="task-panel__card">
      <!-- tp-field'ler buraya -->
    </div>
  </div>

</aside>
```

#### JS — Open / Close

```js
const panel   = document.getElementById('taskPanel');
const overlay = document.getElementById('panelOverlay');

function openPanel() {
  // Edit panel açıksa sola it
  if (editPanel.classList.contains('is-open')) {
    editPanel.classList.add('is-pushed-panel');
  }

  panel.hidden = false;           // hidden kaldır — DOM'a geri al
  panel.getBoundingClientRect();  // ⚠️ reflow zorla: animasyonun başlaması için şart
  panel.classList.add('is-open');
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');

  lucide.createIcons();           // ⚠️ hidden iken ikonlar init edilemez — burada çağır
}

function closePanel() {
  editPanel.classList.remove('is-pushed-panel');
  panel.classList.remove('is-open');
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');

  // Animasyon bittikten sonra DOM'dan gizle
  panel.addEventListener('transitionend', function hide() {
    panel.hidden = true;
    panel.removeEventListener('transitionend', hide);
  }, { once: true });
}

document.getElementById('taskPanelClose').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
});
```

#### Kritik Notlar

| Kural | Neden |
|---|---|
| `panel.hidden = false` → `getBoundingClientRect()` → `classList.add('is-open')` | `hidden` kaldırılır kaldırılmaz browser layout'u hesaplar; reflow olmadan transform start state görünmez, animasyon çalışmaz |
| Kapatmada `transitionend` bekle, sonra `hidden = true` set et | Animasyon tamamlanmadan `hidden=true` yapılırsa panel anında yok olur |
| `lucide.createIcons()` panel açılışında | `hidden` iken `display:none` gibi davranır; icon SVG'leri oluşturulamaz |
| `role="dialog"` + `aria-modal="true"` + `aria-labelledby` | Ekran okuyucular için zorunlu |
| Kaydet butonu **header'da sağda**, ayrı footer yok | Medusa pattern — dar panel'de footer alan kaybedeceğinden tercih edilmiyor |

### 10.2 Filter Panel (653px — aynı yapı)

```css
.filter-panel {
  position: fixed; top: 0; right: 0;
  width: 653px; height: 100vh; z-index: 101;
  display: flex; flex-direction: column;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.filter-panel.is-open { transform: translateX(0); }
.filter-panel.is-fullscreen { width: 100vw; }
.filter-panel.is-fullscreen .filter-panel-inner { width: 653px; }
```

`filter-panel-header`, `filter-panel-body`, `filter-panel-inner` yapısı task-panel ile aynı.

Panel header'daki icon buton:
```css
.fp-icon-btn {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; padding: var(--space-sm);
  border: none; background: none; border-radius: var(--radius-sm);
  cursor: pointer; color: var(--bt-text-primary-default); transition: background 0.15s;
}
.fp-icon-btn:hover { background: var(--bt-surface-primary-subtle); }
.fp-icon-btn svg { width: 16px; height: 16px; }
```

### 10.3 Edit Panel (Full-Screen, Daraltılabilir)

Edit panel tüm ekranı kaplar ve iki sütuna ayrılır.

```css
.edit-panel {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  z-index: 200; display: flex; flex-direction: column;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              left 0.3s ease, right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.edit-panel.is-open { transform: translateX(0); }

/* Daraltılmış: sol yarıda görünür */
.edit-panel.is-collapsed {
  left: 50%;
  box-shadow: -12px 0 32px 0 rgba(0,0,0,0.18);
}

/* Task panel ile birlikte açık: edit panel push olur */
.edit-panel.is-open.is-pushed-panel { transform: translateX(0); }
.edit-panel.is-open.is-collapsed.is-pushed-panel { transform: translateX(max(-653px, -50vw)); }

/* Header */
.edit-panel__header {
  height: 40px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--space-xl);
  background: var(--bt-surface-primary-default);
  border-bottom: 1px solid var(--bt-border-primary-default);
  box-shadow: 0px 2px 3px rgba(0,0,0,0.08);
}
.edit-panel__title {
  font-family: var(--font-title); font-size: var(--text-md);
  font-weight: 400; line-height: var(--lh-md); color: var(--color-gray-900);
}

/* Toolbar */
.edit-panel__toolbar {
  flex-shrink: 0; display: flex; align-items: center;
  padding: var(--space-sm) var(--space-3xl);
  background: var(--bt-surface-primary-default);
  border-bottom: 1px solid var(--color-gray-300);
  gap: 10px;
}

/* Body: iki sütun */
.edit-panel__body { flex: 1; min-height: 0; display: flex; }

/* Sol sütun (form alanları) — 465px */
.edit-panel__left {
  width: 465px; flex-shrink: 0; height: 100%;
  background: var(--bt-surface-primary-default);
  border-right: 1px solid var(--bt-border-primary-default);
  overflow-y: auto; display: flex; flex-direction: column;
  gap: var(--space-2xl); padding: var(--space-3xl);
  transition: width 0.3s ease;
}

/* Sağ sütun (aktivite / yorumlar) */
.edit-panel__right {
  flex: 1; min-width: 0; height: 100%;
  background: var(--bt-surface-primary-light);
  display: flex; flex-direction: column; gap: 10px;
  padding: var(--space-2xl) 160px;
  overflow-y: auto;
}

/* Daraltılmış modda sütunlar */
.edit-panel.is-collapsed .edit-panel__left { width: 360px; }
.edit-panel.is-collapsed .edit-panel__right { padding-left: 40px; padding-right: 40px; }
.edit-panel.is-collapsed .ep-row { flex-direction: column; gap: 8px; }
.edit-panel.is-collapsed .ep-col { flex: none; width: 100%; }

/* Sağ taraf kartlar */
.ep-right-card {
  flex-shrink: 0; width: 100%;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); padding: var(--space-3xl);
  display: flex; flex-direction: column; gap: var(--space-2xl);
}

/* Section title (form bölüm başlığı) */
.ep-section-title {
  display: flex; flex-direction: column; gap: 4px;
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--bt-border-primary-default);
  width: 100%; flex-shrink: 0;
}
.ep-section-title h3 {
  font-family: var(--font-title); font-size: var(--text-sm);
  font-weight: 500; color: var(--bt-text-primary-default);
}
.ep-section-title p {
  font-size: var(--text-xs); font-weight: 400;
  color: var(--bt-text-primary-emphasis);
}

/* İki sütun satır */
.ep-row { display: flex; gap: 12px; width: 100%; flex-shrink: 0; }
.ep-col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }

/* Expand/Collapse butonu */
.ep-expand-btn {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border: none; background: transparent;
  cursor: pointer; border-radius: var(--radius-sm);
  color: var(--bt-icon-primary-strong); flex-shrink: 0;
}
.ep-expand-btn:hover { background: var(--bt-surface-primary-subtle); }
.ep-expand-btn svg { width: 14px; height: 14px; stroke-width: 1.5; }
```

---

### 10.4 Panel Stack (Katmanlı Panel Sistemi)

Bir panel içindeki butona basıldığında yeni panel sağdan açılır, alttaki panel sola kayar. Panel kapatıldığında alttakiler geri döner. Sonsuz katman desteklenir.

#### Davranış Akışı

```
Başlangıç:     [App]
Ekle/Düzenle:  [App] ← [Panel A]
İçeride buton: [App] ← [Panel A (sola kaydı)] ← [Panel B]
Panel B kapat: [App] ← [Panel A (geri geldi)]
Panel A kapat: [App]
```

#### CSS

```css
/* Temel panel — sağdan girer */
.panel {
  position: fixed; top: 0; right: 0;
  height: 100vh; z-index: 300;
  background: var(--bt-surface-primary-light);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.panel.is-open { transform: translateX(0); }

/* Üstüne yeni panel açıldığında panel sola kayar.
   inline style (JS tarafından set edilir) transition'ı taşır;
   is-pushed yalnızca CSS fallback olarak kullanılabilir. */
.panel.is-pushed { transform: translateX(-653px); }
.panel.is-fullscreen.is-pushed { transform: translateX(-50vw); }
```

#### JS — Panel Stack Manager

```js
const panelStack = [];

/**
 * Yeni bir panel açar; mevcut tüm açık panelleri sola iter.
 * @param {HTMLElement} panelEl   - Açılacak panel elementi
 * @param {number}      pushOffset - Sola kayma miktarı (px). Default 653.
 */
function pushPanel(panelEl, pushOffset = 653) {
  // Mevcut açık panelleri sola it
  panelStack.forEach(({ el }) => {
    el.style.transform = `translateX(-${pushOffset}px)`;
  });

  panelEl.hidden = false;
  panelEl.getBoundingClientRect(); // reflow — animasyonun başlaması için zorunlu
  panelEl.classList.add('is-open');
  panelStack.push({ el: panelEl, pushOffset });
}

/**
 * En üstteki paneli kapatır; altındakileri orijinal konumuna geri getirir.
 */
function popPanel() {
  if (!panelStack.length) return;
  const { el } = panelStack.pop();

  el.classList.remove('is-open');
  el.addEventListener('transitionend', () => {
    el.hidden = true;
    el.style.transform = '';
  }, { once: true });

  // Alttaki panellerin push offset'ini sıfırla
  panelStack.forEach(({ el: pEl }) => { pEl.style.transform = ''; });
}

// Escape tuşu her zaman en üstteki paneli kapatır
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') popPanel();
});
```

#### Kullanım Örneği

```js
// "Ekle" butonu → Panel A aç
document.getElementById('addBtn').addEventListener('click', () => {
  pushPanel(document.getElementById('panelA'));
});

// Panel A içindeki "İlişki Ekle" → Panel B aç (aynı 653px offset)
document.getElementById('addRelationBtn').addEventListener('click', () => {
  pushPanel(document.getElementById('panelB'));
});

// Her paneliniz bir .panel-close-btn içersin
document.querySelectorAll('.panel-close-btn').forEach(btn => {
  btn.addEventListener('click', popPanel);
});

// Overlay click da yalnızca en üstteki paneli kapatır
document.getElementById('panelOverlay').addEventListener('click', popPanel);
```

#### Kurallar

| Kural | Açıklama |
|---|---|
| `pushOffset` default | 653px (task/filter panel genişliği) |
| Full-screen panel üstüne açılırsa | `pushPanel(panelB, window.innerWidth / 2)` |
| Stack boşken `popPanel()` | Hiçbir şey yapmaz, hata vermez |
| Birden fazla `pushPanel()` çağrısı | Her biri tüm stack'i `pushOffset` px daha sola iter — dikkatli kullan |
| `getBoundingClientRect()` | Reflow tetikler; `hidden = false` sonrası animasyon için zorunlu |

---

## 11. Form Bileşenleri

### 11.1 Label

```css
/* Task panel */
.tp-label {
  font-family: var(--font-title); font-size: var(--text-xs);
  font-weight: 400; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default); display: block;
}
/* Edit panel */
.ep-label {
  font-family: var(--font-title); font-size: var(--text-xs);
  font-weight: 400; line-height: var(--lh-xs);
  color: var(--bt-text-primary-default); display: block;
}
```

### 11.2 Input

```css
/* Task panel input */
.tp-input {
  width: 100%; height: 32px; padding: var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-default);
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.tp-input::placeholder { color: var(--bt-text-primary-muted); }
.tp-input:focus {
  border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}

/* Edit panel read-only */
.ep-input-ro {
  width: 100%; height: 32px; padding: var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-subtle);
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; cursor: default;
}

/* Edit panel editable */
.ep-input-edit {
  width: 100%; height: 32px; padding: var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm);
  background: var(--bt-surface-primary-default);
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.ep-input-edit:focus {
  border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}

/* Textarea */
.tp-textarea { height: 64px; resize: none; padding-top: var(--space-sm); }
.ep-textarea-ro { height: 64px; resize: none; padding-top: var(--space-sm); }
```

### 11.3 Custom Dropdown

```css
/* Task panel dropdown */
.tp-dropdown { position: relative; }
.tp-dropdown-trigger {
  width: 100%; height: 32px;
  padding: var(--space-sm) 36px var(--space-sm) var(--space-xl);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-default);
  font-size: var(--text-xs); color: var(--bt-text-primary-muted);
  text-align: left; cursor: pointer;
  display: flex; align-items: center;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.tp-dropdown-trigger.has-value { color: var(--bt-text-primary-default); }
.tp-dropdown-trigger:focus {
  outline: none; border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}
.tp-dropdown.is-open .tp-input-icon { transform: translateY(-50%) rotate(180deg); }

.tp-dropdown-list {
  position: absolute; top: calc(100% + 4px); left: 0; right: 0;
  background: var(--bt-surface-primary-default);
  border-radius: var(--radius-sm); overflow-y: auto; max-height: 160px;
  z-index: 20;
  box-shadow: 0px 2px 4px rgba(16,24,40,0.06), 0px 4px 8px rgba(16,24,40,0.10);
}
.tp-dropdown-list[hidden] { display: none; }
.tp-dropdown-option {
  display: flex; align-items: center; gap: 10px;
  padding: var(--space-sm) var(--space-md); cursor: pointer;
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
}
.tp-dropdown-option:hover       { background: var(--bt-surface-primary-subtle); }
.tp-dropdown-option.is-selected { background: var(--bt-surface-brand-subtle); }

/* Sağ chevron icon */
.tp-input-icon {
  position: absolute; right: var(--space-sm); top: 50%; transform: translateY(-50%);
  pointer-events: none; color: var(--bt-icon-primary-strong);
  transition: transform 0.2s ease;
}
.icon-tp-sm { width: 16px; height: 16px; display: block; }
```

Edit panel dropdown (`ep-dropdown`, `ep-dd-trigger`, `ep-dd-list`) aynı mantık ama sınıf adları `ep-` prefix'li.

### 11.4 Date Picker

```css
/* Takvim ikonu solda */
.ep-datepicker {
  position: relative; display: flex; align-items: center;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-default);
  height: 32px; overflow: hidden; transition: border-color 0.15s, box-shadow 0.15s;
}
.ep-datepicker:focus-within {
  border-color: var(--bt-primary-default);
  box-shadow: 0 0 0 3px rgba(13,78,151,0.12);
}
.ep-dp-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; flex-shrink: 0;
  color: var(--bt-icon-primary-strong); cursor: pointer;
}
.ep-dp-input {
  flex: 1; min-width: 0; border: none; background: transparent;
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
  outline: none; padding: var(--space-sm) var(--space-xs);
}
/* Gizli native date input — browser picker'ı tetikler */
.ep-dp-native {
  position: absolute; opacity: 0; pointer-events: none;
  width: 0; height: 0; top: 0; left: 0;
}
/* Read-only variant */
.ep-datepicker--ro { background: var(--bt-surface-primary-subtle); pointer-events: none; }
```

### 11.5 Numeric Stepper

```css
.num-stepper {
  display: flex; align-items: stretch; height: 32px;
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-default);
  overflow: hidden;
}
.num-stepper__input {
  flex: 1; min-width: 0; border: none; outline: none;
  padding: 0 var(--space-xl); background: transparent;
  font-size: var(--text-xs); color: var(--bt-text-primary-default);
}
.num-stepper__arrows {
  display: flex; flex-direction: column; flex-shrink: 0;
  border-left: 1px solid var(--bt-border-primary-default);
}
.num-stepper__btn {
  flex: 1; width: 20px; border: none; background: transparent;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  color: var(--bt-text-primary-muted); padding: 0; transition: background 0.1s;
}
.num-stepper__btn + .num-stepper__btn { border-top: 1px solid var(--bt-border-primary-default); }
.num-stepper__btn:hover { background: var(--bt-surface-primary-subtle); color: var(--bt-text-primary-default); }
.num-stepper__btn svg { width: 11px; height: 11px; }
.num-stepper--disabled { background: var(--bt-surface-primary-subtle); pointer-events: none; }
```

### 11.6 File Dropzone

```css
.tp-dropzone {
  display: flex; flex-direction: column; align-items: center; gap: var(--space-md);
  padding: var(--space-2xl) var(--space-md);
  border: 1px dashed var(--bt-border-primary-default);
  border-radius: var(--radius-sm); background: var(--bt-surface-primary-light);
}
.tp-dropzone-text {
  font-size: var(--text-xs); color: var(--bt-text-primary-emphasis);
  text-align: center;
}
```

### 11.7 Edit Panel Segmented Tabs

```css
.ep-tabs {
  display: inline-flex; align-self: flex-start;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-md); padding: var(--space-2xs); flex-shrink: 0;
}
.ep-tab {
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm); border: 1px solid transparent;
  font-size: var(--text-xs); font-weight: 400; line-height: var(--lh-xs);
  background: var(--bt-surface-tab-default); cursor: pointer; transition: background 0.12s;
}
.ep-tab:hover:not(.is-active) { background: var(--bt-surface-tab-hover); }
.ep-tab.is-active {
  background: var(--bt-surface-brand-subtle);
  color: var(--bt-primary-default);
  border-color: var(--bt-primary-default);
}
```

### 11.8 Chips / Multiselect

```css
.tt-chip {
  display: inline-flex; align-items: center; justify-content: center; gap: 2px;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: 4px; padding: 2px 4px;
  font-size: 12px; font-weight: 400;
  color: var(--bt-text-primary-default); white-space: nowrap;
}
```

### 11.9 Text Editor (Rich Text Toolbar)

```css
.tt-editor { display: flex; flex-direction: column; }
.tt-toolbar {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 16px; height: 40px;
  background: var(--bt-surface-primary-subtle);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-md) var(--radius-md) 0 0; flex-shrink: 0;
}
.tt-tool-btn {
  display: flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; padding: 2px; border-radius: 2px;
  border: none; background: transparent; cursor: pointer;
  font-size: 12px; font-weight: 700; color: var(--bt-text-primary-default);
}
.tt-tool-btn:hover { background: rgba(0,0,0,0.08); }
.tt-tool-btn.is-active { background: rgba(0,0,0,0.10); }
.tt-body {
  min-height: 160px; padding: 6px 12px; font-size: 12px;
  color: var(--bt-text-primary-default); outline: none; line-height: 1.5;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default); border-top: none;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
.tt-body:empty::before { content: "Açıklama giriniz..."; color: var(--bt-text-primary-muted); pointer-events: none; }
```

---

## 12. Activity Cards (Edit Panel Sağ Sütun)

```css
.ep-act-card {
  width: 100%; flex-shrink: 0;
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default);
  border-radius: var(--radius-sm); overflow: hidden;
}

/* Header — tıklanabilir, collapse/expand */
.ep-act-card__header {
  display: flex; align-items: flex-start; justify-content: space-between;
  cursor: pointer;
  padding: var(--space-md) var(--space-xs) var(--space-md) var(--space-3xl);
}

/* Avatar */
.ep-act-card__avatar {
  width: 28px; height: 28px; border-radius: var(--radius-full);
  border: 1px solid var(--bt-border-primary-default);
  display: flex; align-items: center; justify-content: center;
  font-size: var(--text-xs); font-weight: 500; flex-shrink: 0;
}
.ep-act-card__avatar--blue { background: var(--bt-primary-default); color: var(--bt-text-primary-inverted); }
.ep-act-card__avatar--gray { background: var(--bt-surface-primary-subtle); color: var(--bt-text-primary-default); }

/* Chevron toggle */
.ep-act-card__chevron {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: var(--radius-sm);
  color: var(--bt-icon-primary-strong); background: none; border: none; cursor: pointer;
}
.ep-act-card__chevron i { transition: transform 0.25s ease; display: block; }
.ep-act-card.is-open .ep-act-card__chevron i { transform: rotate(180deg); }

/* Body — collapsible max-height animasyonu */
.ep-act-card__body {
  display: flex; flex-direction: column; gap: var(--space-2xl);
  overflow: hidden; max-height: 0; padding: 0 var(--space-3xl);
  box-shadow: inset 0 1px 0 var(--bt-border-primary-default);
  transition: max-height 0.3s ease, padding 0.3s ease;
}
.ep-act-card.is-open .ep-act-card__body {
  max-height: 500px; padding: var(--space-2xl) var(--space-3xl);
}

/* Log değişim gösterimi: "alan: eskiDeger → yeniDeger" */
.ep-act-card__log .from { font-weight: 500; color: var(--bt-primary-default); }
.ep-act-card__log .to   { font-weight: 500; color: var(--color-activity-success); }
/* Ok işareti: move-down iconu, -90deg döndürülmüş → sağa ok */
.ep-log-arrow { transform: rotate(-90deg); }
```

---

## 13. Overlay & Dialog

### Alert Dialog (Onay/Hata)

```css
.alert-dialog-overlay {
  display: none; position: fixed; inset: 0; z-index: 10000;
  background: rgba(16,24,40,0.32);
  align-items: center; justify-content: center;
}
.alert-dialog-overlay.is-open { display: flex; }

.alert-dialog {
  background: var(--bt-surface-primary-default);
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 6px rgba(16,24,40,0.03), 0 12px 16px rgba(16,24,40,0.08);
  width: 420px; min-height: 204px;
  display: flex; flex-direction: column;
}

/* İkon: daire içinde daire (outer: brand-light, inner: brand-subtle) */
.alert-dialog__pictogram {
  position: relative; width: 40px; height: 40px;
  border-radius: var(--radius-full); background: #f1f7fe;
  display: flex; align-items: center; justify-content: center;
}
.alert-dialog__pictogram::before {
  content: ''; position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 34px; height: 34px; border-radius: var(--radius-full); background: #e2edfc;
}

/* Error variant */
.alert-dialog__pictogram--error { background: #fef2f2; }
.alert-dialog__pictogram--error::before { background: #fde6e6; }
.alert-dialog__pictogram--error i { color: #b31d38; }

/* Warning variant */
.alert-dialog__pictogram--warning { background: #fffbeb; }
.alert-dialog__pictogram--warning::before { background: #fef3c7; }
.alert-dialog__pictogram--warning i { color: #b45309; }

.alert-dialog__footer {
  flex-shrink: 0; border-top: 1px solid var(--bt-border-primary-muted);
  display: flex; align-items: center; justify-content: flex-end;
  gap: var(--space-2xl); padding: 12px var(--space-3xl);
}
```

### Toast / Alert Banner

```css
.tt-alert-wrap {
  position: fixed; top: 0; left: 50%;
  transform: translateX(-50%) translateY(-120%);
  z-index: 9500; width: 520px; max-width: calc(100vw - 32px);
  padding-top: 16px; opacity: 0; pointer-events: none;
  transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease;
}
.tt-alert-wrap.is-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1; pointer-events: all;
}
.tt-alert {
  display: flex; align-items: center; width: 100%;
  background: #e8f3ee; border: 1px solid #2d584b;
  border-radius: var(--radius-xs); box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
```

### Confetti Animasyonu

```css
.tt-confetti-wrap {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 9300; overflow: hidden;
}
.tt-confetti-piece {
  position: absolute; top: -20px; will-change: transform, opacity;
  /* Her parça JS ile random renk, boyut, animasyon süresi alır */
}
@keyframes confettiFall {
  0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateY(110vh) rotate(680deg); opacity: 0; }
}
@keyframes confettiSway {
  0%   { margin-left: 0px; }
  25%  { margin-left: 20px; }
  75%  { margin-left: -20px; }
  100% { margin-left: 0px; }
}
```

---

## 14. Dashboard (Kontrol Paneli)

```css
.dp-body {
  flex: 1; overflow-y: auto; padding: 24px 28px;
  display: flex; flex-direction: column; gap: 14px;
  background: var(--bt-surface-primary-subtle);
}

/* KPI satırı — auto-fit grid */
.dp-kpi-row {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-xl);
}

/* KPI kart: header + body split (aynı border, border-top yok) */
.dp-kpi-header {
  background: var(--bt-surface-primary-light);
  border: 1px solid var(--bt-border-primary-default);
  border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);
  display: flex; align-items: center; gap: var(--space-xs);
  padding: var(--space-sm) var(--space-xl);
}
.dp-kpi-body {
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default); border-top: none;
  border-bottom-left-radius: var(--radius-md); border-bottom-right-radius: var(--radius-md);
  padding: var(--space-xl); display: flex; flex-direction: column; gap: var(--space-xs);
}
.dp-kpi-value {
  font-family: var(--font-title); font-weight: 500;
  font-size: var(--text-5xl); line-height: var(--lh-5xl);
  color: var(--bt-text-primary-default);
}
.dp-kpi-desc--error   { color: var(--bt-text-error-default); }
.dp-kpi-desc--success { color: var(--bt-text-success-default); }

/* Grafik satırı — auto-fit */
.dp-charts-row {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 12px; align-items: stretch;
}

/* Grafik kartları — aynı header/body split */
.dp-status-header {
  background: var(--bt-surface-primary-light);
  border: 1px solid var(--bt-border-primary-default);
  border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-xl);
}
.dp-status-body {
  background: var(--bt-surface-primary-default);
  border: 1px solid var(--bt-border-primary-default); border-top: none;
  border-bottom-left-radius: var(--radius-md); border-bottom-right-radius: var(--radius-md);
  padding: var(--space-3xl); flex: 1;
  display: flex; align-items: center; justify-content: center;
}
.dp-col-chart { width: 100%; height: 190px; display: block; overflow: visible; }
.dp-row-chart { width: 100%; height: auto; display: block; overflow: visible; }
```

---

## 15. Login Sayfası

### İki Sütun Layout

```css
.login-page { display: flex; height: 100vh; min-height: 600px; }

/* Sol (%62) — beyaz, form */
.panel--left {
  flex: 1 1 62%; display: flex; align-items: center; justify-content: center;
  background: var(--background-color-primary); padding: 40px 32px;
}
.form-wrapper { width: 100%; max-width: 361px; }

/* Sağ (%38) — animasyonlu gradient, marka rengi */
.panel--right {
  flex: 0 0 38%; max-width: 730px;
  position: relative; overflow: hidden;
  background: var(--brand-bg); /* #05238b */
  background-image:
    radial-gradient(circle clamp(300px,24vw,920px) at var(--gx) var(--gy), rgba(2,239,254,0.45) 0%, transparent 68%),
    radial-gradient(ellipse 75% 55% at 118% -8%,  rgba(2,239,254,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 90% 65% at -12% 112%, rgba(18,14,207,0.30) 0%, transparent 55%);
}
```

### Sağ Panel — Animated Gradient Orbs

5 adet orb: #02EFFE (cyan) ve #308FFF (sky blue), blur:70px, `will-change:transform`, birbirinden farklı `ease-in-out infinite alternate` animasyonlar.

```css
.g-orb { position: absolute; border-radius: 50%; filter: blur(70px); will-change: transform; opacity: 0.75; }
.g-orb--1 { width:520px; height:520px; top:-15%; left:-20%; background: radial-gradient(circle,#02EFFE 0%,rgba(2,239,254,0.4)55%,transparent 100%); animation: gorb1 16s ease-in-out infinite alternate; }
/* ... gorb2–gorb5 benzer şekilde */
```

### CSS Hover Grid (Mouse Tracking — JS gerektirmez)

`@property --gx / --gy` + 4×4 `div.hz` grid + CSS `:has()` ile hover'a göre gradient pozisyonu değişir:

```css
@property --gx { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
@property --gy { syntax: '<percentage>'; inherits: false; initial-value: 40%; }
.panel--right { transition: --gx 0.45s ease, --gy 0.45s ease; }
.hover-grid { position:absolute; inset:0; display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(4,1fr); z-index:10; }
.panel--right:has(.hz:nth-child(1):hover)  { --gx: 12%; --gy: 12%; }
/* ... 16 hücreye kadar devam eder */
```

---

## 16. Dropdown & Popup Ortak Kalıplar

Tüm açılır menüler aynı göster/gizle animasyonunu kullanır:

```css
.some-menu {
  opacity: 0; pointer-events: none;
  transform: translateY(-6px) scale(0.97);
  transform-origin: top right;
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.some-menu.is-open {
  opacity: 1; pointer-events: all;
  transform: translateY(0) scale(1);
}
```

Dropdown gölgesi:
```css
box-shadow: 0px 2px 4px rgba(16,24,40,0.06), 0px 4px 8px rgba(16,24,40,0.10);
```

---

## 17. Z-Index Katmanları

| Katman                   | z-index |
|--------------------------|---------|
| Kolon filter panel       | 400     |
| Kolon visibility menu    | 500     |
| Panel overlay (backdrop) | 100     |
| Filter panel             | 101     |
| Edit panel               | 200     |
| Task panel               | 201     |
| TT Panel overlay         | 201     |
| TT Panel                 | 202     |
| User widget (overflow)   | 50      |
| Confetti                 | 9300    |
| Alert banner             | 9500    |
| Alert dialog             | 10000   |
| Talep Durumu dialog      | 9000    |

---

## 18. Genel Shadow Tokenları

```css
/* shadow/sm */
box-shadow: 0px 1px 2px rgba(16,24,40,0.06), 0px 1px 3px rgba(16,24,40,0.10);

/* shadow/md */
box-shadow: 0px 2px 4px rgba(16,24,40,0.06), 0px 4px 8px rgba(16,24,40,0.10);

/* shadow/lg */
box-shadow: 0 4px 6px rgba(16,24,40,0.03), 0 12px 16px rgba(16,24,40,0.08);

/* Panel header shadow */
box-shadow: 0px 2px 3px rgba(0,0,0,0.08);

/* Edit panel collapsed shadow */
box-shadow: -12px 0 32px 0 rgba(0,0,0,0.18);
```

---

## 19. Yeni Proje Başlatma Checklist

1. Lucide script tag'ini `<head>` veya `<body>` sonuna ekle
2. Google Fonts: Inter + Geist (dashboard için), sadece Inter (login için)
3. Bu dosyadaki token bloğunu (`section 3`) `:root {}` içine kopyala
4. Reset bloğunu (`section 4`) ekle
5. `html, body { height: 100%; overflow: hidden; }` — tüm layout buna bağlı
6. `lucide.createIcons()` çağrısını sayfa sonuna ekle
7. Sidebar için `width: 280px` sabit, collapse state'i `is-collapsed` class'ı ile yönet
8. Tüm paneller `transform: translateX(100%)` → `translateX(0)` geçişiyle açılır
9. Açılır menüler `opacity+transform` animasyonu, `[hidden]` attribute veya `is-open` class'ı ile kontrol edilir
10. Tablo satır yüksekliği: header `36px`, data `32px`, toolbar `40px`, page-header `36px`

---

## 20. Token Reference Düzeltmeleri (MobileDesignSystem Denetiminden)

MobileDesignSystem docs sitesindeki 13 bileşen (Alert, Alert Dialog, Dialog, Bottom Sheet,
Accordion, Avatar, Badge, Switch, Button, Button Dock, Icon Button, Card, Bottom Tab Bar,
TextBox) satır satır taranıp render kodundaki ham hex/px değerler `var(--bt-*, fallback)`'a
çevrilirken bulunan, **bu token sistemini kullanan her projede geçerli** hatalar/tuzaklar:

### 20.1 Var olmayan (phantom) token isimleri

Figma'nın ham değişken yolu bazı yerlerde CSS custom property adıymış gibi kullanılmış,
ama böyle bir `--bt-*` değişkeni **tanımlı değil**:

| Yanlış / var olmayan | Doğrusu | Değer |
|---|---|---|
| `--bt-surface-brand-contrast-default` | `--bt-surface-brand` (alias → `--bt-surface-brand-default`) | Blue/700 · `#0d4e97` |

Figma path'i (`Surface Colors/Brand/--bt-surface-brand-contrast-default` gibi) sadece
kaynak izlenebilirliği için yorum/dokümantasyon metni olarak tutulabilir, ama gerçek
`var(...)` çağrısında **her zaman** gerçekten tanımlı token adı kullanılmalı.

### 20.2 Yanlış seviye seçilen semantic token

`--bt-text-error-emphasis` = Red/300 = `#f7aaae` (soluk pembe) — hata mesajı/description
metni için kullanılırsa yanlış olur, çünkü görsel olarak koyu kırmızı (`#b31d38`) bekleniyor.
Koyu kırmızı metin için doğru token: `--bt-text-error` (alias → `--bt-text-error-default`,
Red/700). Aynı tuzak `-emphasis` (300 seviyesi) ile `-default`/`-solid` (700/600 seviyesi)
arasında her renk ailesinde (error/success/warning/brand) tekrar edebilir — seviyeyi
her zaman gerçek render edilmiş rengin hex'iyle karşılaştırarak doğrula.

### 20.3 Icon token'ları border/surface'tan ayrı bir aile

`--bt-icon-{category}-default` kendi başına bir token ailesidir (`--bt-icon-error-default`,
`--bt-icon-warning-default`, vb.) — çoğu zaman `--bt-border-{category}-default` ile aynı
hex'e çözülür (örn. ikisi de Red/700) ama **semantik olarak farklı token'lardır**. Bir
ikonun rengini class'landırırken border token'ını ödünç almak yerine kendi icon token'ını
kullan.

### 20.4 Line-height her zaman bir token'a denk gelmeyebilir

Token skalası: `--bt-text-sm-lh` = **16px** (14px/16 çifti), `--bt-text-md-lh` = 24px.
Bazı component'lerde (örn. Alert Dialog description'ı, Accordion body'si) description
metninin line-height'ı **20px** olarak Figma'da manuel override edilmiş — bu değer
skaladaki hiçbir `--bt-text-*-lh` token'ına denk gelmiyor. Böyle durumlarda değeri yanlış
bir token'a zorla bağlamak (örn. `var(--bt-text-sm-lh, 20px)`) **sessizce yanlış render**
üretir, çünkü fallback değeri değil gerçek token değeri (16px) uygulanır. Kural: font-size
token'ı eşleşiyorsa tokenize et, line-height eşleşmiyorsa literal px olarak bırak ve yanına
kısa bir yorum düş.

### 20.5 Alert Notification (banner) — doğrulanmış tam spec

Figma Desktop Bridge ile Stroke/Light/Filled × 4 tip tek tek doğrulandı:

```
Stroke  bg=--bt-surface-primary-default(#fff)  border=--bt-border-primary-default(#d4d4d4)
        text=--bt-text-primary-default          icon=--bt-icon-{type}-default
Light   bg=--bt-surface-{type}-light            border=--bt-border-{type}-default
        text=--bt-text-primary-default (DEĞİŞMEZ, tint olmuyor)
Filled  bg=--bt-surface-{type}-default          border=none
        text=--bt-text-inverted (title VE description aynı opaklıkta beyaz — %85 fade YOK)
        icon=--bt-icon-inverted

İkon slotu: 40×40 hit-area, --bt-space-md (8px) padding → 24×24 gerçek ikon boyutu
Title:  --bt-text-md-size/-lh (16/24)   Description: --bt-text-sm-size/-lh (14/16)
```

Success/Light arka planı `--bt-surface-success-light` = Green/50 = `#e8f3ee`'dir —
`#daede5` (Green/100) ile karıştırılmamalı.

---

## 21. Playground / Component Preview Toolbar Deseni (MobileDesignSystem docs sitesi)

> Bu bölüm **Medusa Dashboard'a değil**, `MobileDesignSystem\docs` (Bentas DS component
> dokümantasyon sitesi) projesine özeldir. Genel referans olarak bırakıldı — ileride
> benzer bir "component preview / playground" ihtiyacı çıkarsa örnek alınabilir.

Nord Health (nordhealth.design) tarzı, Figma "Playground" toolbar'ından (Bentas DS node
`375:27788`) uyarlanmış, tekrar kullanılabilir bir motor: `docs/js/playground.js` →
`registerPlayground({...})`. Tek bir çağrı, hem `Overview` sekmesinin üstünde hem
`Examples` sekmesinde otomatik render edilen tam bir preview bloğu üretir.

### Toolbar kontrolleri

1. **Variant dropdown** — collapsible, `config.variants` listesini gösterir (örn.
   Sidebar'da Expanded/Collapsed, Alert'te Error/Warning/Success/Information)
2. **Ek prop dropdown'ları** (opsiyonel, `config.props`) — Type dropdown'ının yanına
   istenildiği kadar ek collapsible seçici eklenebilir (Alert'te Theme + Close Button)
3. **Measure** — aktifken preview üzerinde hover edilen elementin **content box'ı mavi**
   (ortasında `W × H` etiketi), **padding'i her kenarda ayrı yeşil şerit** (o kenarın px
   değeri ortada, 0 ise gizli) — klasik DevTools box-model değil, Figma/Nord tarzı
   per-side spacing inspector
4. **Viewport** — preset seçilince buton ikon+etiket gösteren aktif pill'e dönüşür, altında
   düzenlenebilir **W/H px input + swap (⇄) butonu** açılır; frame gerçek cihaz çerçevesi
   gibi (beyaz kutu+border+shadow, sabit width×height, açık gri canvas'ta **sol üstte
   hizalı**). Presetler: Small Mobile 360×780, Large Mobile 414×896, Tablet 768×1024,
   Desktop (sınırsız/ortalanmış eski davranış)
5. **Open in isolation mode** — her playground'da standarttır, ekstra kurulum gerekmez.
   `pgd_id` varsa `isolation.html?pgd_id=X&variant=Y&prop=Z` açılır; `isolation.html`
   `window.PAGES_WEB` üzerinden `render()` loop'u çalıştırır (ilk eşleşmede durur),
   `_pgdConfigs[pgdId]`'yi bulur ve preview'ı doğrudan render eder. Eski
   `PGD_ISOLATE`-kayıtlı componentler (Sidebar, Alert) `component=X` param'ıyla
   çalışmaya devam eder.
6. **Click Me** (opsiyonel, `config.trigger`) — component'in gerçek çalışma anını
   (ekranın üstünden `filter:blur()` + `translateY` ile smooth slide-in/out) gösteren bir
   toast sistemi tetikler. Art arda tıklanınca toast'lar birbirini **değiştirmez, alt alta
   yığılır** — her biri kendi zamanlayıcısıyla bağımsız kaybolur.

Ayrıca toolbar'ın altında, kutudan **bağımsız** (kendi arka plan/border'ı olmayan, sade)
bir **Preview / Code segmented control** var — component sayfasının "Alert" gibi H1
başlığının hemen altında durur, kutunun İÇİNDE değil.

### Kritik kural — component fonksiyonlarının konumu

Playground eklenecek bir bileşenin markup/icon/kod-üretim fonksiyonları `render()`
closure'ı İÇİNDE değil, dosyanın **modül seviyesinde** (top-level `const`/`function`)
tanımlanmalı.

**Web componentleri** (`pages-web.js`): `PAGES_WEB['components/x'] = {...}` şeklinde
ayrı atama, `registerPlayground({id: 'pgd-x-overview', ...})` çağrısı yeterli.
`window.PGD_ISOLATE` kaydı **gerekmez** — isolation mode otomatik çalışır.

**Mobil componentler** (`pages-mobile.js`): `PAGES` literal'inden çıkarılıp dosya
sonuna `PAGES['components/x'] = {...}` olarak taşınır. İzolasyon için
`window.PGD_ISOLATE['componentKey'] = { mount(root, variant, props) {...} }` ile
kayıt yapılması gerekir (eski pattern — henüz pgd_id sistemine geçirilmedi).

### Icon kuralı

Toolbar icon'ları **asla elle yaklaşık çizilmemeli** — Figma'da hangi Lucide icon
kullanılmışsa (bu projede: `chevrons-up-down`, `ruler-dimension-line`, `proportions`,
`square-arrow-out-up-right`, `arrow-left-right`, `mouse-pointer-click`) gerçek path'i
çekilip kullanılmalı:

```bash
curl -sL "https://unpkg.com/lucide-static@latest/icons/<icon-name>.svg"
```

---

## 12. Upload

Dosya yükleme bileşeni. Drop Zone + Upload File parçalarından oluşur. Tamamen interaktif — gerçek dosya seçimi, progress animasyonu, success/failed state yönetimi.

### 12.1 Drop Zone (`.bt-dropzone`)

`Select Files` butonu `bt-btn bt-btn--xs bt-btn--primary-ghost` component'idir. İkonlar inline SVG.

```html
<!-- Default -->
<div class="bt-upload">
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
</div>
```

**State modifiers:** `bt-dropzone--uploading` | `bt-dropzone--completed` | `bt-dropzone--failed` | `bt-dropzone--disabled`

**Status icons (inline SVG, 16×16):**
- Uploading: `arrow-up-from-line`
- Completed: `circle-check`
- Failed: `circle-alert`
- Disabled: `<button ... disabled>` → `bt-btn--primary-ghost:disabled` otomatik muted renk verir

```css
.bt-dropzone {
  display: flex; flex-direction: column;
  border: 1px dashed var(--bt-border-primary-default, #d4d4d4);
  border-radius: var(--bt-radius-sm, 4px);
  background: var(--bt-surface-primary-subtle, #f5f5f5);
  width: 100%;
}
.bt-dropzone__inner {
  display: flex; align-items: center; justify-content: center;
  gap: var(--bt-space-xs, 4px); padding: var(--bt-space-md, 8px);
}
/* Select Files butonu gerçek design system button'u — sadece underline eklenir */
.bt-dropzone .bt-btn { text-decoration: underline; }
.bt-dropzone__status {
  display: flex; align-items: center; gap: var(--bt-space-xs, 4px);
  font-size: var(--bt-text-xs-size, 12px); line-height: var(--bt-text-xs-lh, 16px);
  color: var(--bt-text-primary-default, #1a1a1a); white-space: nowrap;
}
.bt-dropzone--disabled  .bt-dropzone__status { color: var(--bt-text-primary-muted, #a3a3a3); }
.bt-dropzone--uploading .bt-dropzone__status { color: var(--bt-text-brand-default, #0d4e97); }
.bt-dropzone--completed .bt-dropzone__status { color: var(--bt-text-success-default, #2d584b); }
.bt-dropzone--failed    .bt-dropzone__status { color: var(--bt-text-error-default, #b31d38); }
.bt-dropzone__status-icon { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; flex-shrink: 0; }
.bt-dropzone__status-icon svg { width: 16px; height: 16px; }
```

### 12.2 Upload File (`.bt-upload-file`)

İkon ve butonlar inline SVG. Action butonları `bt-upload-file__btn` custom class'ıdır (24×24px icon button).

```html
<!-- Uploading -->
<div class="bt-upload-file">
  <div class="bt-upload-file__content">
    <div class="bt-upload-file__icon"><!-- file SVG --></div>
    <div class="bt-upload-file__info">
      <span class="bt-upload-file__name">Document.pdf</span>
      <span class="bt-upload-file__size">225.68 KB</span>
    </div>
    <div class="bt-upload-file__controls">
      <span class="bt-upload-file__pct">%25</span>
      <button class="bt-upload-file__btn" onclick="btUplRemove(this)"><!-- x SVG --></button>
    </div>
  </div>
  <div class="bt-upload-file__progress">
    <div class="bt-upload-file__progress-fill" style="width:25%"></div>
  </div>
</div>

<!-- Success: bt-upload-file--success + size text değişir + pct/bar kalkar -->
<!-- Failed:  bt-upload-file--failed  + size text değişir + retry(rotate-cw) + x buton -->
```

**Right controls per state:**
- Uploading: `%25` pct + `x` butonu + progress bar
- Success: `x` butonu (pct + bar kalkar)
- Failed: `rotate-cw` butonu + `x` butonu (pct + bar kalkar)

```css
.bt-upload-file { display: flex; flex-direction: column; gap: var(--bt-space-xs, 4px); width: 100%; }
.bt-upload-file__content { display: flex; align-items: center; gap: var(--bt-space-xs, 4px); width: 100%; }
.bt-upload-file__icon { display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; flex-shrink: 0; color: var(--bt-text-primary-default, #1a1a1a); }
.bt-upload-file__icon svg { width: 16px; height: 16px; }
.bt-upload-file__info { display: flex; flex-direction: column; gap: var(--bt-space-2xs, 2px); flex: 1 0 0; min-width: 0; }
.bt-upload-file__name { font-size: var(--bt-text-xs-size, 12px); line-height: var(--bt-text-xs-lh, 16px); color: var(--bt-text-primary-default, #1a1a1a); }
.bt-upload-file__size { font-size: var(--bt-text-2xs-size, 10px); line-height: var(--bt-text-2xs-lh, 12px); color: var(--bt-text-primary-emphasis, #727272); }
.bt-upload-file--success .bt-upload-file__size { color: var(--bt-text-success-default, #2d584b); }
.bt-upload-file--failed  .bt-upload-file__size { color: var(--bt-text-error-default, #b31d38); }
.bt-upload-file__controls { display: flex; align-items: center; gap: var(--bt-space-xs, 4px); flex-shrink: 0; }
.bt-upload-file__pct { font-size: var(--bt-text-xs-size, 12px); color: var(--bt-text-brand-default, #0d4e97); padding: 0 var(--bt-space-md, 8px); }
.bt-upload-file__btn { display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; padding: var(--bt-space-xs, 4px); border-radius: var(--bt-radius-sm, 4px); border: none; background: none; cursor: pointer; box-sizing: border-box; }
.bt-upload-file__btn:hover { background: var(--bt-surface-primary-subtle, #f5f5f5); }
.bt-upload-file__btn svg { width: 16px; height: 16px; pointer-events: none; }
.bt-upload-file__progress { position: relative; width: 100%; height: 6px; border-radius: var(--bt-radius-sm, 4px); background: var(--bt-surface-primary-muted, #e6e6e6); overflow: hidden; }
.bt-upload-file__progress-fill { position: absolute; left: 0; top: 0; height: 100%; border-radius: var(--bt-radius-sm, 4px); background: var(--bt-primary-default, #0d4e97); transition: width 0.2s ease; }
```

### 12.3 Upload container (`.bt-upload`)

```html
<div class="bt-upload">          <!-- Default: sadece dropzone -->
<div class="bt-upload bt-upload--multiple">  <!-- Multiple: gap artıyor -->
```

```css
.bt-upload { display: flex; flex-direction: column; gap: var(--bt-space-xs, 4px); width: 100%; }
.bt-upload--multiple { gap: var(--bt-space-md, 8px); }
```

### 12.4 JS Davranışı

`pages-web.js`'de global fonksiyonlar — başka projelere taşınırken kopyalanır:

| Fonksiyon | Açıklama |
|---|---|
| `btUplStartUpload(upload, files)` | File array'i alır, dropzone'u uploading yapar, her dosya için progress animasyonu başlatır |
| `btUplCompleteRow(row, success)` | Dosya satırını success/failed state'e geçirir, bar'ı kaldırır |
| `btUplRemove(btn)` | Dosya satırını siler; kalan yoksa dropzone'u default'a döndürür |
| `btUplRetry(btn)` | Başarısız dosyayı yeni bir satırla değiştirir, yeniden upload animasyonu başlatır |
| `btUplDrop(dz, event)` | Drag & drop event handler — `ondrop` ile bağlanır |
| `btUplSetDzState(dz, state)` | Drop zone class + status HTML'ini günceller (`'default'|'uploading'|'completed'|'failed'`) |
| `btUplFormatSize(bytes)` | Baytı KB/MB string'e çevirir |
