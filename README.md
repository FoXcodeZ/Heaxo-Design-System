# Heaxo Design System

**Heaxo** is an advanced 3D game engine with an in‑progress editor. Think Godot/Unreal/Unity-class tooling: a real-time viewport, scene tree, inspector, asset browser, scripting, build pipeline.

**Tech stack (do not get this wrong):**
- **Engine core:** modern, cache-friendly **ECS in C++**.
- **Primary scripting:** **C#** with hot-reload — this is what game code looks like in marketing, samples, slides, screenshots.
- **Secondary:** **C++** for engine-side or perf-critical user code, plus a **node-based visual scripting** graph for designers.
- **Never use Rust in any Heaxo asset** — it is not part of the stack. Sample code in any UI kit, slide, or doc must be C# (game code) or C++ (engine code).

The editor is currently the most expressive surface of the brand; a marketing site sits alongside it to communicate what the engine is.

This design system codifies the Heaxo visual language so any agent can produce on-brand interfaces, marketing assets, slides, and prototypes.

---

## Sources & inputs

The system was bootstrapped from a small set of brand primitives provided by the user:

- `uploads/icon_default.svg` — primary mark (256×256 SVG)
- `uploads/icon_default_rounded.png` — same mark on rounded-square tile
- `uploads/favicon.ico` — tab icon

> **Important:** No codebase, Figma file, or marketing screenshots were provided. The visual language below is an *extrapolation* from the logo's color and form, paired with conventions from the broader 3D-engine/editor category (Godot, Unreal, Unity, Bevy, Blender). If a real Heaxo product exists with established UI, treat this system as a strawman and update it against the actual product. **Please share the codebase, Figma, or screenshots when available** — see [Caveats](#caveats--asks).

---

## The brand at a glance

- **Name:** Heaxo
- **Category:** 3D game engine + editor
- **Tech:** cache-friendly **ECS** at the core; engine in **C++**; primary scripting in **C#** with hot-reload; **C++** and **node-based visual scripting** as alternates. Treat C# as the default sample-code language anywhere copy or screenshots show "what game code looks like".
- **Mark:** A magenta/plum outlined triangle with three nodes at its vertices — reads as a polygon (faces), a vertex graph (topology), or a tetrahedron (3D primitive). The mark is unapologetically *technical*.
- **Mood:** Cinematic, dark, technical, confident. Not playful, not corporate. Closer to **Houdini** or **Unreal** than to Roblox or GameMaker.
- **Personality:** Precise. Performance-obsessed. Respects the craft. Treats developers as engineers, not customers.

---

## Visual foundations

### Color

The palette is derived directly from the logo: **deep navy** (`#2b2d42`) for canvases, **plum/magenta** (`#a53273`) as the singular brand accent. Everything else is a desaturated dark surface scale.

- **Surfaces** are cool dark with a slight violet bias (`#16171f` → `#424458`). Five steps so panels can layer cleanly inside the editor.
- **Plum is used sparingly** — only for primary actions, focused selection, gizmo tints, and the brand mark itself. Overusing it cheapens it.
- **Functional colors** (`success/warning/danger/info`) are tuned to coexist with plum without clashing — teal-cyan, amber, coral-red, sky-blue.
- **Gizmo axes** are canonical: X = coral-red, Y = lime, Z = sky-blue. Don't mess with these — engine users have decades of muscle memory.
- **Light mode is intentionally not provided.** Heaxo is a dark-first product. If a light surface is ever needed (docs, blog, invoices) treat it as a separate "off-brand" mode.

Tokens live in `colors_and_type.css`.

### Type

- **Inter Tight** — primary UI and headline face. Geometric, dense, modern. Slight negative tracking (`-0.02em` to `-0.04em`) on display sizes.
- **Space Grotesk** — display alternative for big marketing/hero moments where Inter Tight feels too neutral.
- **JetBrains Mono** — engine/editor mono. Used for code, telemetry HUDs (FPS, draw calls), file paths, numeric inputs.
- Body copy is set on a comfortable `1.6` line-height; UI chrome tightens to `1.4`. Hero display goes to `1.05`.
- Editor chrome runs at **12px** (dense IDE convention). Marketing body runs at **16px**. There is no in-between in chrome contexts.

### Spacing, radii, shape

- **4px base grid.** No half-pixel weirdness.
- **Radii are restrained.** `6px` for buttons/inputs, `10px` for cards, `14px` for elevated marketing cards. Pills are reserved for status chips and tags. **No 24px+ "soft" radii** — Heaxo is a tool, not a consumer app.
- **Borders matter.** Heaxo uses `1px` semi-transparent white strokes (`rgba(255,255,255,0.06–0.18)`) on every panel edge. This is the dominant separator style — preferred over harsh dividers or drop shadows.
- **Shadows are deep but quiet.** Long, low-opacity shadows (`0 12px 32px rgba(0,0,0,0.55)`) plus a subtle `1px` inner highlight stroke for a bevel-against-darkness effect. We never use puffy mid-gray shadows.

### Backgrounds & surfaces

- **No big gradients across page backgrounds.** Solid dark surfaces.
- **A single brand gradient is permitted** in marketing hero moments only: a radial plum-to-navy glow seeded behind the logo or a primary CTA. Use once per page maximum.
- **Subtle wireframe / dot-grid patterns** are part of the language for hero backgrounds — they reinforce the 3D-engine identity. Use at low opacity (4–8% white).
- **Imagery is dark, cinematic, and technical.** Renders, viewport captures, point clouds, debug overlays. **Never** stock photography of people. **Never** warm or pastel imagery. If a render is shown, it should look like something rendered in Heaxo — neutral cool light, real materials, slight cinematic vignette.

### Animation

- **Eases are sharp out / soft in.** `cubic-bezier(0.22, 1, 0.36, 1)` for almost everything. No bouncy springs except for occasional micro-feedback (button press, toggle) where `0.34, 1.56, 0.64, 1` is acceptable.
- **Durations are short.** `120ms` for instant feedback, `180ms` default, `320ms` for larger panel transitions. Nothing should feel slow — this is a tool.
- **No fade-in-on-scroll on UI.** Reserve scroll-triggered motion for marketing only.
- **Hover** = subtle background lighten (~6%) and/or border emphasis. **Press** = background darken + 1px translateY OR scale(0.98). Avoid color shifts on press.
- **Focus** = 1px plum ring, NOT a glow halo by default. The plum glow shadow is reserved for primary CTAs and the focused viewport.

### Transparency & blur

- **Backdrop blur is for floating chrome only** — the command palette overlay, dropdown menus, the viewport HUD pill. Never on full-screen modals.
- Glass surfaces use `rgba(28,29,40,0.72)` over `backdrop-filter: blur(16px)`.
- **Solid panels are preferred** for stability; the editor reads better without translucent panel chrome.

### Layout rules

- The editor follows a **fixed 4-zone layout**: top bar, left sidebar (scene/asset trees), center viewport, right inspector, optional bottom panel (console/timeline). Zones are separated by 1px strokes, not gutters.
- Marketing layout is on a **12-column grid**, max-width `1200px`, with generous vertical rhythm (`80px+` between sections).
- **Fixed elements:** editor top bar, viewport HUD overlay, marketing nav. Everything else scrolls.

---

## Content fundamentals

### Voice

- **Direct. Technical. Confident.** Heaxo speaks to engineers and tech artists who already know what a vertex shader is. Don't over-explain.
- **Second person, sparingly.** "Build worlds at native speed" — fine. "You're going to love…" — never.
- **First person plural** ("we") only in the blog or release notes. The product itself never refers to itself.
- **No exclamation marks** outside of error toasts. No "Welcome!" or "Awesome!".
- **No marketing fluff.** Ship the spec, not the sentiment.

### Casing

- **Sentence case** for buttons, menu items, panel titles. ("New scene", not "New Scene")
- **Title Case** for product surfaces: "Scene View", "Asset Browser" — these are proper nouns within the engine.
- **ALL CAPS** is reserved for `eyebrows`, telemetry HUD labels, and the wordmark. Tracked `0.08em`.

### Examples

> ✅ **"Real-time editor for production-grade 3D."**  
> ✅ **"Build, light, and ship — without leaving the viewport."**  
> ✅ **"Scene saved · 12 entities · 1.4 MB"** (status bar)  
> ✅ **"Compile failed: unresolved symbol `Vec3::cross`"** (error toast)  
>
> ❌ "Welcome to Heaxo! Let's build something amazing 🎮"  
> ❌ "Unleash your creativity with our powerful new tools."  
> ❌ "Oops! Something went wrong."

### Emoji

- **No emoji in product UI.** Ever.
- **No emoji in marketing copy.** Ever.
- **Acceptable in social posts and informal release notes** if used sparingly (one max), and never decorative.

### Numbers, units, code

- Always show units: `120 fps`, `1.4 MB`, `12 ms`, `4096×4096`.
- Numbers in chrome are mono. Numbers in body copy are sans.
- Code references in body use `inline mono` with a subtle background tint. File paths always mono.

---

## Iconography

- **Lucide** (https://lucide.dev) is the chosen icon system — clean 1.5px stroke, geometric, matches Inter Tight's tone. Used everywhere in the editor and marketing.
- **The Heaxo mark itself** is the only "branded" icon. It appears in the splash screen, the editor's about dialog, the favicon, and the top-left corner of the marketing nav. It is *never* recolored away from plum-on-navy.
- **No emoji as icons.** No unicode characters as icons (no `⚙` for settings — use Lucide `Settings`). No mixing of icon families.
- **Sizing:** `14px` and `16px` in editor chrome; `20px` and `24px` in marketing. Stroke weight stays at `1.5` regardless of size — do not scale stroke with size.
- **Color:** Icons inherit `--fg-2` by default. Active/selected icons go to `--fg-0` or `--plum-400`. Disabled icons go to `--fg-4`. Functional state icons use the matching semantic color (success/warning/danger/info).
- **Brand motif:** The triangle-with-vertex-nodes from the logo can be reused as a decorative element in marketing — as a section divider, as a loading spinner (rotating), as an empty-state graphic. Keep it monochrome plum.
- **3D-specific glyphs:** Gizmo arrows, axis labels (X/Y/Z), grid icons, mesh wireframe glyphs, vertex/edge/face mode icons — these come from a small custom set in `assets/glyphs/` (placeholder; fill in once real product UI is available).

> **Substitution flag:** Lucide is a substitute for Heaxo's real icon set, which we don't have. If the engine has a custom glyph font or sprite sheet, replace Lucide with it.

---

## File index

| Path | What's in it |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Agent skill manifest — entry point when this system is loaded as a skill. |
| `colors_and_type.css` | All design tokens: colors, type scale, spacing, radii, shadows, motion. |
| `assets/` | Logos, favicons, brand marks. Drop product screenshots and renders here. |
| `preview/` | Small HTML cards that populate the Design System tab — color palettes, type specimens, button states, etc. |
| `ui_kits/editor/` | Hi-fi recreation of the Heaxo editor (top bar, viewport, scene tree, inspector, console, command palette). |
| `ui_kits/marketing/` | Marketing site components (nav, hero, feature grid, C# code showcase, footer). |
| `screenshots/` | Reference screenshots of the kits as currently rendered. |

### Components

Exported on the design-system bundle (`components/<Name>/`):

- Button
- IconButton
- Chip
- Toggle
- NumericVec3
- Field

### UI kits

- **`ui_kits/editor/`** — the in-app editor. Index renders a full editor screenshot-equivalent: top bar + scene tree + viewport with HUD + inspector + console. Components: `EditorTopBar`, `SceneTree`, `Viewport`, `Inspector`, `Console`, `AssetBrowser`, `CommandPalette`, `Button`, `IconButton`, `Field`, `Slider`, `Checkbox`.
- **`ui_kits/marketing/`** — the public site. Index renders the homepage. Components: `MarketingNav`, `Hero`, `FeatureGrid`, `CodeShowcase`, `Footer`, `MarketingButton`.

---

## Caveats & asks

This system was built **without access to the real Heaxo codebase, Figma, or screenshots** — only the logo. Everything below is extrapolated:

- **Voice and copy examples** are inferred from category conventions. If Heaxo's marketing has an established tone, please share it.
- **The editor UI kit** is modeled after Godot/Unreal layout conventions. Real Heaxo editor screenshots would let us match its actual chrome.
- **Icon set** uses Lucide as a stand-in. Replace with the engine's actual icon font/sprite if one exists.
- **Fonts** are Google Fonts (Inter Tight, Space Grotesk, JetBrains Mono). If Heaxo licenses different faces, swap the `@import` in `colors_and_type.css`.
- **A second logo lockup** (wordmark "Heaxo" next to the mark) was not provided — we render it in Inter Tight 800 with `-0.04em` tracking as a placeholder.

**Please share** any of: codebase repo, Figma file, marketing site URL, screenshots of the editor in any state, sample copy, or font licenses. The system will tighten dramatically once any of these are wired in.
