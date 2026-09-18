---
name: add-input
description: Use when adding a new input-family component (SearchBox, TextBox, Dropdown, Date Input, Date Picker, DateTime Picker, MultiSelect, Select LookUp, Textarea) or when the user explicitly asks to re-analyze/revise an EXISTING one's Figma-to-code architecture in the Bentas Design System. Governs the shared Base Input Figma node hierarchy, the .bt-input__box CSS core reuse pattern, and the workflow for when to build fresh vs. when to touch an existing component. Complements add-component (which governs docs-page authoring: tabs/TOC/playground config) — this skill governs the underlying component's Figma node mapping and CSS/JS architecture. Created 2026-09-18 after a naming-drift incident (bt-input__meta/__field/__control were invented names with no Figma equivalent) that required a full rename pass across SearchBox/TextBox/Dropdown/Date Input.
---

# Input Component Architecture Standard

This skill holds the Bentas Design System's rules for building or revising the Figma→code
architecture of a Base-Input-family component. For docs-page authoring conventions (tabs, TOC,
playground config, description rules) see the **`add-component`** skill — load both together when
building a new input page. For universal rules that apply to every change (icon wrapper, CSS
tokens, component reuse, naming, design.md sync) see the project's root `CLAUDE.md`.

## Workflow — when to act, when to wait

- **New component** ("X'i ekle" + a Figma reference): build it from scratch against this standard,
  verified node-by-node against the user's Figma file. Do not guess values — every color, padding,
  and state must come from `get_metadata`/`get_design_context`.
- **Existing component** (SearchBox/TextBox/Dropdown/Date Input, or any future one already built):
  only touch it when the user explicitly says so. The user's own workflow is: they finish/correct
  the component in Figma first, then say "bunu analiz et, revize et" — never infer that a Figma
  change means "go analyze and fix it" on your own.
- **Never start a component the user hasn't named.** If unclear which one is next, ask.

## The confirmed Base Input Figma hierarchy — GÜNCEL/NİHAİ reference

Verified node-by-node against DateInput's real Figma layer tree (`_Base DateInput` node
`1420:6793`, `DateInput` node `1422:7778`, "Bentas DS" file) on 2026-09-18, then applied
retroactively to SearchBox/TextBox/Dropdown. **`design.md` §25 is the canonical, always-current
class table** — read it before writing any markup. Do not trust §20-24's inline class names blindly;
those sections describe history and may predate the §25 rename.

```
[Component] Input Class          (root wrapper — the component's OWN name, e.g. "Dropdown", "DateInput")
├─ Input Label Value
├─ [Component] Input              (the box — everything inside it)
│   ├─ Input Controls (left)      (optional — leading icon/button slot)
│   ├─ Input Content
│   │   ├─ Prepend Text           (optional)
│   │   ├─ Input Value            (the actual value/selection text)
│   │   └─ Append Text            (optional)
│   ├─ Validation                 (icon, shown in Error states)
│   ├─ Input Clear Button         (shown when Input Value is filled)
│   └─ Input Controls (right)     (optional — trailing icon/button slot)
├─ Input Hint Value                (optional)
└─ Input Error Value               (independent node — NOT a modifier of Hint Value)
```

Real rendering order inside the box (confirmed): `Controls(left) → Content → Validation →
Clear Button → Controls(right)`.

### Class mapping (code ↔ Figma) — do not invent alternatives

| Figma | CSS class |
|---|---|
| `[Component] Input Class` | `.bt-input` (shared) + `.bt-{component}` (identity, same element) |
| `Input Label Value` | `.bt-input__label-value` (contains `.bt-input__label`) |
| `[Component] Input` (box) | `.bt-input__box` (shared core — like `.bt-input`, an abstraction over "every component's own box", not one single Figma node) |
| `Input Controls` | `.bt-input__controls` (+ `--button` modifier for Content=Button family, e.g. Dropdown's chevron) |
| `Input Content` | `.bt-input__content` |
| `Prepend Text` / `Append Text` | `.bt-input__prepend-text` / `.bt-input__append-text` |
| `Input Value` | `.bt-input__value` |
| `Validation` | `.bt-input__validation` (own class — NOT a modifier of Controls) |
| `Input Clear Button` | `.bt-input__clear-button` (own class) |
| `Input Advanced Filter Button` (SearchBox) | `.bt-input__filter-button` (own class) |
| `Hint Value` | `.bt-input__hint-value` |
| `Error Value` | `.bt-input__error-value` (own class — NOT `.bt-input__hint-value--error`; Figma treats it as a fully independent node) |

**Prepend Text / Append Text are standard properties on every Base Input consumer** — even if a
given component's demo doesn't obviously need them, add the toggle (`prepend`/`prependValue`,
`append`/`appendValue`, `TBX_BOOL_OPTS` pattern, default off) via the shared
`_biAffixHtml()`/`BI_AFFIX_PROPS` helpers in `pages-web.js`. Don't skip them because "this
component probably doesn't need a prefix" — the user's instruction was that these are part of the
base structure, not optional per component.

## State behavior — don't assume it reduces to simple booleans

TextBox/Dropdown's state logic collapses cleanly to `isFilled`/`isError`/`isReadOnly` booleans.
**Do not assume every new component will.** DateInput's Figma states didn't: Error showed a dark
(non-placeholder) value even without Active/Filled; Disabled AND Read Only both rendered the Clear
Button but only Read Only showed dark text. When a component's states don't reduce cleanly, write
an explicit per-state config object (see `DTI_STATE_CONFIG` in `pages-web.js` as the reference
pattern: `{dark, clear, validation, cursor?, disabled?, readonly?}` per state) rather than forcing
booleans that produce wrong output for edge states.

## Verification — non-negotiable

1. `get_metadata` on the component's Figma page to find the base building-block and the full field
   (Size × State) frame.
2. `get_design_context` on the base building-block AND on enough State variants (Hover, Focus,
   Active, Filled, Error, Error Focus, Disabled, Read Only at minimum) to capture every real color/
   padding/text-color difference — don't infer a state's styling from a sibling component's
   equivalent state without checking, even when they look architecturally identical (DateInput's
   Content padding turned out symmetric 8px on every side, unlike TextBox/Dropdown's asymmetric
   rule, because DateInput never renders a left/right control in its real field states).
3. When the isolated base building-block's own demo props disagree with the actual field-level
   instances (as happened with DateInput's Content horizontal padding: the base story showed 4px/
   8px/4px across sm/md/lg, but every real field instance showed a uniform 8px), trust the
   field-level instances — they're what's actually shipped — and flag the discrepancy to the user
   rather than silently picking one.
4. Report anything that looks like an unresolved Figma decision (e.g. DateInput's calendar icon
   existing on the base component but never appearing in any real field state) as an open question
   in `design.md`, not as a silent assumption either way.

## After building — still required, this skill doesn't replace it

Per `CLAUDE.md`'s "design.md ve CLAUDE.md senkronizasyonu" rule: update `docs/css/styles.css` +
`docs/js/pages-web.js`, add/update the component's `design.md` section, add a `HISTORY.md` entry.
This skill governs *how* you build the architecture; it does not remove the documentation-sync
requirement.
