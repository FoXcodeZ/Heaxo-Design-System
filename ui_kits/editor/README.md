# Heaxo Editor — UI Kit

A hi-fi recreation of the Heaxo editor. The layout follows category convention (Godot/Unreal/Unity): top bar, left scene tree + asset browser, center viewport, right inspector, bottom console. Components are cosmetic-only — they don't run a real engine.

## Files

- `index.html` — full editor screen, click-thru-ish.
- `EditorTopBar.jsx` — title bar with menus, scene name, run controls.
- `SceneTree.jsx` — left-rail scene hierarchy.
- `AssetBrowser.jsx` — tabbed asset browser below the scene tree.
- `Viewport.jsx` — center 3D canvas with HUD overlay + gizmos + tool toolbar.
- `Inspector.jsx` — right-rail property inspector (Transform, Mesh, Material).
- `Console.jsx` — bottom log/console panel.
- `CommandPalette.jsx` — overlay command palette (⌘K).
- `Primitives.jsx` — Button, IconButton, Field, NumericVec3, Toggle, Chip.

## Note

This kit was built without access to the real Heaxo editor codebase or screenshots. Layout and chrome are extrapolated from category conventions and should be replaced/refined against the actual product.
