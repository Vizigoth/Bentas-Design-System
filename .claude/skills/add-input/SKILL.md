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
│   │   └─ Input Button           (optional — ONLY when Content=Button, e.g. Dropdown's
│   │                              chevron or Date Picker's calendar icon; Content=Icon
│   │                              has no this layer, icon sits directly in Controls)
│   ├─ Input Content
│   │   ├─ Prepend Text           (optional)
│   │   ├─ Input Value            (the actual value/selection text)
│   │   └─ Append Text            (optional)
│   ├─ Validation                 (icon, shown in Error states)
│   ├─ Input Clear Button         (shown when Input Value is filled)
│   └─ Input Controls (right)     (optional — trailing icon/button slot, same Input Button rule)
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
| `Input Controls` | `.bt-input__controls` (the slot — always the outer element, NEVER carries padding, see note below) |
| `Input Button` (Content=Button — Controls wraps this Figma sub-component) | `.bt-input__button` (own class, nested INSIDE `.bt-input__controls` — see note below) |
| `Input Content` | `.bt-input__content` |
| `Prepend Text` / `Append Text` | `.bt-input__prepend-text` / `.bt-input__append-text` |
| `Input Value` | `.bt-input__value` |
| `Validation` | `.bt-input__validation` (own class — NOT a modifier of Controls) |
| `Input Clear Button` | `.bt-input__clear-button` (own class) |
| `Input Advanced Filter Button` (SearchBox) | `.bt-input__filter-button` (own class) |
| `Hint Value` | `.bt-input__hint-value` |
| `Error Value` | `.bt-input__error-value` (own class — NOT `.bt-input__hint-value--error`; Figma treats it as a fully independent node) |

**`Input Controls` vs. `Input Button` — corrected 2026-09-21 after a naming-drift near-miss.**
`Input Controls` is only ever the outer slot; it holds ONE of two things:
- A **decorative icon with no state of its own** (Content=Icon, e.g. SearchBox's leading search
  icon) — just `.bt-input__controls > .bt-icon`, no extra class, no hover behavior.
- **`Input Button`** (Content=Button) — a single, reusable Figma component with its own real
  Default/Hover states, instantiated identically across components (Dropdown's chevron AND Date
  Picker's calendar toggle are the SAME `Input Button` component, just a different icon swapped
  in — confirmed via `get_design_context`, node family under `1281:12913`). This is ALWAYS
  `.bt-input__controls > .bt-input__button > .bt-icon`, in every consumer — do not invent a
  second class for "the interactive one" (an earlier draft of this note did exactly that, treating
  Date Picker's button as architecturally different from Dropdown's chevron because Date Picker's
  is independently clickable — wrong: it's the same component, only the click-wiring differs).
  `.bt-input__button`'s CSS covers BOTH triggers at once (own `:hover` AND
  `.bt-input__box:hover/:focus-within/--active .bt-input__button`), so it works whether the
  consumer wires the click on the button itself (Date Picker) or on the whole box (Dropdown,
  where the chevron isn't independently clickable but must still light up when the box does).
  Never reduce this to a modifier on `.bt-input__controls` (`--button` existed briefly and was
  removed) — `Input Button` is a real nested Figma layer, so it gets its own nested class, exactly
  like `Input Clear Button`/`Input Advanced Filter Button` already do. See `design.md` §26.4.

**`Input Controls` NEVER carries the size-based padding — a THIRD correction on this exact same
element, 2026-09-21, same session.** Two fixes in and this still got shipped wrong once more: the
per-size padding (2/4/6px at sm/md/lg) was put on `.bt-input__controls` itself, reasoning "same
visual result either way." It is not the same result. Figma's own code for the master set (node
`1283:3651`) is unambiguous: `Input Controls` → `p-[spacing-none, 0px]`, always; the padding token
lives on the CHILD — `Input Button` when Content=Button, or is baked into a fixed width/height on
`Input Controls` itself when Content=Icon (28/32/36px at sm/md/lg, no padding token at all there
either). Putting the padding on `.bt-input__controls` while `.bt-input__button` tried to fill it
with `width/height:100%` produced a real, visible bug: percentage height/width on a flex child of
an auto-sized flex parent resolves to `auto`, so the button shrank to its own content size and the
hover/active background sat inside a smaller box than `.bt-input__controls`'s padded area — a
visible gap around the highlight that doesn't exist in Figma. **The correct split:**
`.bt-input__controls` gets a fixed `width`/`height` per size (28/32/36px) and NO padding, ever;
`.bt-input__button` gets the per-size `padding` (2/4/2xs / 4/xs / 6/sm) and sizes itself
intrinsically (no `width/height:100%`) — its padding + the 24×24 icon then equals the parent's
fixed box exactly, so the hover/active fill reaches every edge. Before touching either element
again, re-derive both rules from `get_design_context` on the master set, not from what "looks"
equivalent.

**`Input Button`'s real state count is 5, not 2 — verify against the MASTER "Input Controls"
component set (Figma node `1283:3651`), not just one consumer's field instances.** A first pass
that only checked Dropdown's/Date Input's own field states found Default/Hover and assumed Active
reused Hover's color — wrong. The master set (Position=Left/Right × Content=Button/Icon ×
Type=Search/Dropdown/Select/Date/Counter/Icon × Size=sm/md/lg × State=Default/Hover/Active/
Selected/Disabled) is the actual source of truth for this shared building-block and shows:
Default (no bg) → Hover `--bt-base-subtle` (#f5f5f5) → **Active `--bt-base-muted` (#e6e6e6,
darker than Hover, NOT the same token)** → Selected (visually identical to Active) → Disabled (no
bg). When a new Base Input consumer wires its box to an "active/open" state, map it to
`--bt-base-muted` via `.bt-input__box--active .bt-input__button`, never to Hover's subtle color.
`Selected` has no current consumer (reserved — e.g. a future Type=Select/Counter stepper button's
pressed state) but is documented as `.bt-input__button--selected` so it isn't silently dropped.
Content=Icon's Hover variant, checked the same way, produced byte-identical output to its Default
— confirming decorative icons really do have no state, that half of the original note was right.

**Prepend Text / Append Text are standard properties on every Base Input consumer whose Figma
source actually carries those slots** — even if a given component's demo doesn't obviously need
them, add the toggle (`prepend`/`prependValue`, `append`/`appendValue`, `TBX_BOOL_OPTS` pattern,
default off) via the shared `_biAffixHtml()`/`BI_AFFIX_PROPS` helpers in `pages-web.js`. Don't skip
them because "this component probably doesn't need a prefix" — the user's original instruction was
that these are part of the base structure, not optional per component.

**Correction, 2026-09-22 — this is not an unconditional rule.** Date Input/Date Picker had
Prepend/Append added under the rule above, then the user revised `_Base DateInput` in Figma to drop
those slots entirely (replaced with a multi-segment `Input Value` — separate date/time/AM-PM text
nodes — laying groundwork for a future Time Picker; see `design.md` §24.7). Both were removed from
Date Input/Date Picker's code. **The actual rule: verify against the component's CURRENT Figma
node before assuming Prepend/Append belongs — don't carry the toggle forward automatically just
because a sibling Base Input consumer has it, and don't add it to a new Base-DateInput-family
component (Time Picker, DateTime Picker) without checking that component's own field states first.**

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
