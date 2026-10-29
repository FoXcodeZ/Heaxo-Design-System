/* @ds-bundle: {"format":4,"namespace":"HeaxoDesignSystem_019de6","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Chip","sourcePath":"components/Chip/Chip.jsx"},{"name":"Field","sourcePath":"components/Field/Field.jsx"},{"name":"IconButton","sourcePath":"components/IconButton/IconButton.jsx"},{"name":"NumericVec3","sourcePath":"components/NumericVec3/NumericVec3.jsx"},{"name":"Toggle","sourcePath":"components/Toggle/Toggle.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"8f0d99541b3a","components/Chip/Chip.jsx":"da6168443729","components/Field/Field.jsx":"58fc317b5eef","components/IconButton/IconButton.jsx":"6fbfc51804ba","components/NumericVec3/NumericVec3.jsx":"4877fc7ba14b","components/Toggle/Toggle.jsx":"ce431e9dafa5","ui_kits/editor/AssetBrowser.jsx":"907af44752b0","ui_kits/editor/CommandPalette.jsx":"fa1552f7dcb2","ui_kits/editor/Console.jsx":"def316604516","ui_kits/editor/EditorTopBar.jsx":"d34ce09e02a6","ui_kits/editor/Inspector.jsx":"03d443ea0116","ui_kits/editor/Primitives.jsx":"4fcb45ed4235","ui_kits/editor/SceneTree.jsx":"20c25c9238d0","ui_kits/editor/Viewport.jsx":"1fe588d1562a","ui_kits/marketing/CTA.jsx":"7a31680a8365","ui_kits/marketing/CodeShowcase.jsx":"763bd42122ea","ui_kits/marketing/FeatureGrid.jsx":"1bf8395e6632","ui_kits/marketing/Footer.jsx":"a12491ed2f17","ui_kits/marketing/Hero.jsx":"3161b5e66e46","ui_kits/marketing/MarketingNav.jsx":"d9a0364268fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HeaxoDesignSystem_019de6 = window.HeaxoDesignSystem_019de6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
const V = {
  primary: {
    background: '#a53273',
    color: '#fff',
    border: '1px solid transparent'
  },
  secondary: {
    background: '#2b2d42',
    color: '#ecedf3',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  ghost: {
    background: 'transparent',
    color: '#b8b9c6',
    border: '1px solid transparent'
  },
  danger: {
    background: 'transparent',
    color: '#e0566c',
    border: '1px solid rgba(224,86,108,0.4)'
  }
};
const H = {
  primary: '#b54284',
  secondary: '#353749',
  ghost: 'rgba(255,255,255,0.05)',
  danger: 'rgba(224,86,108,0.12)'
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  onClick,
  disabled
}) {
  const [hov, setHov] = React.useState(false);
  const v = V[variant] || V.primary;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      ...v,
      background: hov && !disabled ? H[variant] : v.background,
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: size === 'sm' ? 12 : 13,
      padding: size === 'sm' ? '5px 10px' : '7px 13px',
      borderRadius: 6,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      lineHeight: 1.2,
      opacity: disabled ? 0.45 : 1,
      transition: 'background 120ms cubic-bezier(0.22,1,0.36,1)'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 14,
      height: 14
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Chip/Chip.jsx
try { (() => {
const T = {
  neutral: ['#b8b9c6', '#2b2d42', 'rgba(255,255,255,0.1)'],
  success: ['#4ec9b0', 'rgba(78,201,176,0.1)', 'rgba(78,201,176,0.3)'],
  warning: ['#e8b339', 'rgba(232,179,57,0.1)', 'rgba(232,179,57,0.3)'],
  danger: ['#e0566c', 'rgba(224,86,108,0.1)', 'rgba(224,86,108,0.3)'],
  info: ['#5aa9ff', 'rgba(90,169,255,0.1)', 'rgba(90,169,255,0.3)']
};
function Chip({
  tone = 'neutral',
  icon,
  children
}) {
  const [c, bg, bd] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      padding: '2px 9px',
      borderRadius: 999,
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      color: c,
      background: bg,
      border: '1px solid ' + bd
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 11,
      height: 11
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Chip/Chip.jsx", error: String((e && e.message) || e) }); }

// components/Field/Field.jsx
try { (() => {
function Field({
  value,
  placeholder,
  icon,
  width,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
      background: '#232531',
      borderRadius: 6,
      padding: '0 10px',
      width: width || 'auto',
      border: '1px solid ' + (focus ? '#a53273' : 'rgba(255,255,255,0.1)'),
      boxShadow: focus ? '0 0 0 2px rgba(165,50,115,0.18)' : 'none',
      transition: 'all 120ms'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13,
      color: '#82839a'
    }
  }), /*#__PURE__*/React.createElement("input", {
    defaultValue: value,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange && onChange(e.target.value),
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ecedf3',
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 13,
      padding: '7px 0',
      width: '100%'
    }
  }));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Field/Field.jsx", error: String((e && e.message) || e) }); }

// components/IconButton/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  active,
  title,
  size = 28,
  onClick
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      borderRadius: 4,
      border: '1px solid transparent',
      cursor: 'pointer',
      background: active ? '#a53273' : hov ? 'rgba(255,255,255,0.06)' : 'transparent',
      color: active ? '#fff' : hov ? '#ecedf3' : '#b8b9c6',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 120ms'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 15,
      height: 15
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/IconButton/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/NumericVec3/NumericVec3.jsx
try { (() => {
const AX = [['X', '#e0566c', 'rgba(224,86,108,0.1)'], ['Y', '#b6e34d', 'rgba(182,227,77,0.1)'], ['Z', '#5aa9ff', 'rgba(90,169,255,0.1)']];
function NumericVec3({
  value = [0, 0, 0],
  precision = 3,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, AX.map(([l, c, bg], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'inline-flex',
      background: '#232531',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 700,
      color: c,
      background: bg,
      padding: '4px 7px'
    }
  }, l), /*#__PURE__*/React.createElement("input", {
    defaultValue: Number(value[i]).toFixed(precision),
    onChange: e => {
      const v = [...value];
      v[i] = parseFloat(e.target.value) || 0;
      onChange && onChange(v);
    },
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ecedf3',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      padding: '4px 7px',
      width: 54
    }
  }))));
}
Object.assign(__ds_scope, { NumericVec3 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/NumericVec3/NumericVec3.jsx", error: String((e && e.message) || e) }); }

// components/Toggle/Toggle.jsx
try { (() => {
function Toggle({
  on,
  onChange
}) {
  const [inner, setInner] = React.useState(!!on);
  const val = onChange ? !!on : inner;
  const flip = () => onChange ? onChange(!val) : setInner(!val);
  return /*#__PURE__*/React.createElement("button", {
    onClick: flip,
    style: {
      width: 32,
      height: 18,
      borderRadius: 999,
      padding: 0,
      cursor: 'pointer',
      position: 'relative',
      background: val ? '#a53273' : '#2b2d42',
      border: '1px solid ' + (val ? '#a53273' : 'rgba(255,255,255,0.1)'),
      transition: 'all 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: val ? 16 : 2,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: val ? '#fff' : '#b8b9c6',
      transition: 'all 120ms cubic-bezier(0.22,1,0.36,1)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Toggle/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/AssetBrowser.jsx
try { (() => {
/* global React */
const {
  useState: useStateAB
} = React;
const ASSETS = [{
  name: 'Terrain_01',
  kind: 'mesh',
  icon: 'mountain',
  size: '2.4 MB'
}, {
  name: 'Player',
  kind: 'mesh',
  icon: 'box',
  size: '884 KB'
}, {
  name: 'Stone',
  kind: 'material',
  icon: 'square',
  size: '132 KB'
}, {
  name: 'Grass',
  kind: 'material',
  icon: 'square',
  size: '96 KB'
}, {
  name: 'Skybox_dusk',
  kind: 'texture',
  icon: 'image',
  size: '4.1 MB'
}, {
  name: 'normal_brick',
  kind: 'texture',
  icon: 'image',
  size: '1.2 MB'
}, {
  name: 'PlayerController.cs',
  kind: 'script',
  icon: 'file-code-2',
  size: '4 KB'
}, {
  name: 'EnemyAI.cs',
  kind: 'script',
  icon: 'file-code-2',
  size: '6 KB'
}, {
  name: 'Renderer.cpp',
  kind: 'script',
  icon: 'file-code-2',
  size: '18 KB'
}, {
  name: 'Damage.vsg',
  kind: 'script',
  icon: 'workflow',
  size: '2 KB'
}, {
  name: 'Footsteps',
  kind: 'audio',
  icon: 'audio-lines',
  size: '320 KB'
}, {
  name: 'Ambient_wind',
  kind: 'audio',
  icon: 'audio-lines',
  size: '1.8 MB'
}, {
  name: 'Idle_anim',
  kind: 'anim',
  icon: 'play-circle',
  size: '48 KB'
}];
const KIND_COLOR = {
  mesh: '#d472a4',
  material: '#e8b339',
  texture: '#5aa9ff',
  script: '#4ec9b0',
  audio: '#be4f88',
  anim: '#b6e34d'
};
function AssetBrowser() {
  const [tab, setTab] = useStateAB('all');
  const filtered = tab === 'all' ? ASSETS : ASSETS.filter(a => a.kind === tab);
  const tabs = [['all', 'All'], ['mesh', 'Meshes'], ['material', 'Materials'], ['texture', 'Textures'], ['script', 'Scripts']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#1c1d28',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 10px',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0
    }
  }, tabs.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      padding: '4px 9px',
      background: 'transparent',
      border: 'none',
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 11,
      color: tab === k ? '#ecedf3' : '#82839a',
      borderBottom: `2px solid ${tab === k ? '#a53273' : 'transparent'}`,
      marginBottom: -1,
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: '#555670'
    }
  }, filtered.length, " ITEMS")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 8,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 72px)',
      gap: 8,
      alignContent: 'flex-start'
    }
  }, filtered.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      width: 72,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      padding: 6,
      borderRadius: 4,
      cursor: 'pointer'
    },
    onMouseOver: e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)',
    onMouseOut: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: '#16171f',
      borderRadius: 4,
      border: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": a.icon,
    style: {
      width: 22,
      height: 22,
      color: KIND_COLOR[a.kind]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 3,
      right: 3,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 8,
      color: KIND_COLOR[a.kind],
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, a.kind.slice(0, 3))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 10,
      color: '#ecedf3',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%'
    }
  }, a.name)))));
}
window.AssetBrowser = AssetBrowser;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/AssetBrowser.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/CommandPalette.jsx
try { (() => {
/* global React */
const {
  useState: useStateCmd,
  useEffect: useEffectCmd
} = React;
const COMMANDS = [{
  icon: 'file-plus',
  name: 'New scene',
  kbd: '⌘N'
}, {
  icon: 'folder-open',
  name: 'Open scene…',
  kbd: '⌘O'
}, {
  icon: 'save',
  name: 'Save scene',
  kbd: '⌘S'
}, {
  icon: 'play',
  name: 'Run scene',
  kbd: '⌘R'
}, {
  icon: 'box',
  name: 'Add: Mesh'
}, {
  icon: 'sun',
  name: 'Add: Directional Light'
}, {
  icon: 'video',
  name: 'Add: Camera'
}, {
  icon: 'cpu',
  name: 'Toggle GPU profiler'
}, {
  icon: 'package',
  name: 'Build project…'
}, {
  icon: 'settings',
  name: 'Project settings'
}];
function CommandPalette({
  open,
  onClose
}) {
  const [q, setQ] = useStateCmd('');
  const [sel, setSel] = useStateCmd(0);
  useEffectCmd(() => {
    if (!open) {
      setQ('');
      setSel(0);
    }
  }, [open]);
  if (!open) return null;
  const filtered = COMMANDS.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 120,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 520,
      background: 'rgba(28,29,40,0.95)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 10,
      boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 14,
      height: 14,
      color: '#82839a'
    }
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setSel(0);
    },
    placeholder: "Search commands, scenes, assets\u2026",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ecedf3',
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: '#555670',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 3,
      padding: '1px 6px'
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6,
      maxHeight: 320,
      overflow: 'auto'
    }
  }, filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      textAlign: 'center',
      color: '#82839a',
      fontSize: 12
    }
  }, "No results"), filtered.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    onClick: onClose,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      borderRadius: 5,
      background: i === sel ? '#a53273' : 'transparent',
      color: i === sel ? '#fff' : '#ecedf3',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": c.icon,
    style: {
      width: 14,
      height: 14,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 13,
      flex: 1
    }
  }, c.name), c.kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: i === sel ? 'rgba(255,255,255,0.7)' : '#555670'
    }
  }, c.kbd)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      gap: 14,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: '#555670',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2191\u2193 NAVIGATE"), /*#__PURE__*/React.createElement("span", null, "\u21B5 RUN"), /*#__PURE__*/React.createElement("span", null, "ESC CLOSE"))));
}
window.CommandPalette = CommandPalette;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/Console.jsx
try { (() => {
/* global React */
const {
  useState: useStateConsole
} = React;
const LOGS = [{
  lvl: 'info',
  t: '14:02:11',
  msg: 'Scene loaded · World.scene · 12 entities'
}, {
  lvl: 'info',
  t: '14:02:11',
  msg: 'Loaded mesh terrain_01.mesh (4096 verts)'
}, {
  lvl: 'info',
  t: '14:02:12',
  msg: 'Compiled shader standard_pbr in 84 ms'
}, {
  lvl: 'warn',
  t: '14:02:14',
  msg: 'PlayerController.cs: missing reference for footstep audio bus'
}, {
  lvl: 'info',
  t: '14:02:18',
  msg: 'Build target: linux-x86_64 · debug'
}, {
  lvl: 'info',
  t: '14:02:21',
  msg: 'Hot-reload registered for PlayerController.cs (C# domain)'
}, {
  lvl: 'err',
  t: '14:02:33',
  msg: 'Compile failed: unresolved symbol Vec3::Cross at PlayerController.cs:42'
}, {
  lvl: 'info',
  t: '14:02:38',
  msg: 'Recompiled. 1 error → 0'
}];
const COLOR = {
  info: '#82839a',
  warn: '#e8b339',
  err: '#e0566c'
};
const PREFIX = {
  info: 'INFO',
  warn: 'WARN',
  err: 'ERR '
};
function Console({
  open,
  onToggle
}) {
  const [filter, setFilter] = useStateConsole('all');
  const filtered = filter === 'all' ? LOGS : LOGS.filter(l => l.lvl === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: open ? 200 : 32,
      background: '#16171f',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'height 180ms cubic-bezier(0.22,1,0.36,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#b8b9c6',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'chevron-down' : 'chevron-up',
    style: {
      width: 11,
      height: 11
    }
  }), "Console"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), [['all', 'All', null], ['info', 'Info', '#82839a'], ['warn', 'Warn', '#e8b339'], ['err', 'Errors', '#e0566c']].map(([k, l, c]) => {
    const count = k === 'all' ? LOGS.length : LOGS.filter(x => x.lvl === k).length;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setFilter(k),
      style: {
        background: filter === k ? 'rgba(255,255,255,0.06)' : 'transparent',
        border: 'none',
        borderRadius: 3,
        padding: '3px 8px',
        cursor: 'pointer',
        color: filter === k ? '#ecedf3' : '#82839a',
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: 11,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, c && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: c
      }
    }), l, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#555670'
      }
    }, count));
  }), /*#__PURE__*/React.createElement("button", {
    title: "Clear",
    style: {
      ...iconBtn,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2",
    style: iconSty
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '6px 10px',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      lineHeight: 1.5
    }
  }, filtered.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#555670',
      flex: 'none'
    }
  }, l.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: COLOR[l.lvl],
      fontWeight: 700,
      flex: 'none'
    }
  }, PREFIX[l.lvl]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: l.lvl === 'err' ? '#e0566c' : '#ecedf3'
    }
  }, l.msg)))));
}
const iconBtn = {
  width: 22,
  height: 22,
  background: 'transparent',
  border: 'none',
  color: '#82839a',
  borderRadius: 3,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const iconSty = {
  width: 12,
  height: 12
};
window.Console = Console;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/Console.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/EditorTopBar.jsx
try { (() => {
/* global React, IconButton, Button, Chip */
const {
  useState: useStateTopBar
} = React;
function EditorTopBar({
  sceneName = 'Untitled.scene',
  dirty = true,
  playing,
  onTogglePlay,
  onCommandPalette
}) {
  const menus = ['Scene', 'Edit', 'Project', 'Build', 'Help'];
  const [openMenu, setOpenMenu] = useStateTopBar(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      background: '#1c1d28',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      gap: 4,
      fontFamily: "'Inter Tight', sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 8px 0 4px',
      marginRight: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/heaxo-logo.svg",
    style: {
      width: 22,
      height: 22,
      borderRadius: 4
    }
  })), menus.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setOpenMenu(openMenu === m ? null : m),
    style: {
      background: openMenu === m ? 'rgba(255,255,255,0.06)' : 'transparent',
      border: 'none',
      color: '#ecedf3',
      fontFamily: 'inherit',
      fontSize: 12,
      padding: '5px 10px',
      borderRadius: 4,
      cursor: 'pointer'
    }
  }, m)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "box",
    style: {
      width: 13,
      height: 13,
      color: '#d472a4'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#b8b9c6'
    }
  }, sceneName, dirty && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e8b339'
    }
  }, " \u25CF"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: '#232531',
      borderRadius: 6,
      padding: 3,
      gap: 2,
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: playing ? 'square' : 'play',
    active: playing,
    onClick: onTogglePlay,
    title: "Run scene"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "pause",
    title: "Pause"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "step-forward",
    title: "Step"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onCommandPalette,
    style: {
      marginLeft: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: '#232531',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 6,
      padding: '5px 10px',
      color: '#82839a',
      fontSize: 12,
      fontFamily: 'inherit',
      cursor: 'pointer',
      minWidth: 200,
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 13,
      height: 13
    }
  }), /*#__PURE__*/React.createElement("span", null, "Search & commands"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: '#555670'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "success",
    icon: "circle-check"
  }, "Build OK")));
}
window.EditorTopBar = EditorTopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/EditorTopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/Inspector.jsx
try { (() => {
/* global React, NumericVec3, Toggle, Chip */
const {
  useState: useStateInsp
} = React;
function Section({
  title,
  icon,
  children,
  defaultOpen = true
}) {
  const [open, setOpen] = useStateInsp(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      padding: '10px 12px',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'chevron-down' : 'chevron-right',
    style: {
      width: 11,
      height: 11,
      color: '#82839a'
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13,
      color: '#d472a4'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      color: '#ecedf3'
    }
  }, title)), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px 12px'
    }
  }, children));
}
function Row({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 78,
      color: '#82839a',
      fontSize: 11,
      fontFamily: "'Inter Tight', sans-serif"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children));
}
function Inspector({
  name = 'Terrain_01'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#1c1d28',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'rgba(165,50,115,0.15)',
      border: '1px solid rgba(165,50,115,0.35)',
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mountain",
    style: {
      width: 14,
      height: 14,
      color: '#d472a4'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: '#ecedf3',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "neutral"
  }, "Mesh"), /*#__PURE__*/React.createElement(Chip, {
    tone: "info"
  }, "Static")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Transform",
    icon: "move-3d"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Position"
  }, /*#__PURE__*/React.createElement(NumericVec3, {
    value: [12.480, 0.000, -4.250]
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Rotation"
  }, /*#__PURE__*/React.createElement(NumericVec3, {
    value: [0, 45, 0]
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Scale"
  }, /*#__PURE__*/React.createElement(NumericVec3, {
    value: [1, 1, 1]
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Mesh",
    icon: "box"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Source"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#232531',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 4,
      padding: '5px 8px',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: '#5aa9ff'
    }
  }, "terrain_01.mesh")), /*#__PURE__*/React.createElement(Row, {
    label: "Verts"
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "4,096")), /*#__PURE__*/React.createElement(Row, {
    label: "Tris"
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "8,128")), /*#__PURE__*/React.createElement(Row, {
    label: "Cast shadows"
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: true
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Receive"
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: true
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Material",
    icon: "square"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Shader"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#232531',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 4,
      padding: '5px 8px',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: '#4ec9b0'
    }
  }, "standard_pbr")), /*#__PURE__*/React.createElement(Row, {
    label: "Albedo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      background: '#7a6552',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "#7a6552"))), /*#__PURE__*/React.createElement(Row, {
    label: "Roughness"
  }, /*#__PURE__*/React.createElement(Slider, {
    value: 0.78
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Metallic"
  }, /*#__PURE__*/React.createElement(Slider, {
    value: 0.05
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Physics",
    icon: "orbit",
    defaultOpen: false
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Type"
  }, "\u2014"))));
}
function Slider({
  value = 0.5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 4,
      background: '#232531',
      borderRadius: 2,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${value * 100}%`,
      background: '#a53273',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${value * 100}%`,
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#fff',
      border: '2px solid #a53273'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      width: 38,
      textAlign: 'right'
    }
  }, value.toFixed(2)));
}
const mono = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: '#ecedf3'
};
window.Inspector = Inspector;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/Inspector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/Primitives.jsx
try { (() => {
/* global React */
const {
  useState
} = React;

// -------------------- Button --------------------
function Button({
  variant = 'primary',
  icon,
  children,
  onClick,
  size = 'md'
}) {
  const styles = {
    base: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: size === 'sm' ? 12 : 13,
      padding: size === 'sm' ? '5px 10px' : '7px 13px',
      borderRadius: 6,
      border: '1px solid transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      transition: 'all 120ms cubic-bezier(0.22,1,0.36,1)',
      lineHeight: 1.2
    },
    primary: {
      background: '#a53273',
      color: '#fff'
    },
    secondary: {
      background: '#2b2d42',
      color: '#ecedf3',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    ghost: {
      background: 'transparent',
      color: '#b8b9c6'
    },
    danger: {
      background: 'transparent',
      color: '#e0566c',
      border: '1px solid rgba(224,86,108,0.4)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...styles.base,
      ...styles[variant]
    },
    onMouseOver: e => {
      if (variant === 'primary') e.currentTarget.style.background = '#b54284';
      if (variant === 'secondary') e.currentTarget.style.background = '#353749';
      if (variant === 'ghost') e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
    },
    onMouseOut: e => {
      Object.assign(e.currentTarget.style, styles[variant]);
      Object.assign(e.currentTarget.style, styles.base);
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 14,
      height: 14
    }
  }), children);
}

// -------------------- IconButton --------------------
function IconButton({
  icon,
  active,
  onClick,
  title,
  size = 28
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    style: {
      width: size,
      height: size,
      borderRadius: 4,
      background: active ? '#a53273' : 'transparent',
      border: '1px solid transparent',
      color: active ? '#fff' : '#b8b9c6',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 120ms'
    },
    onMouseOver: e => {
      if (!active) {
        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.color = '#ecedf3';
      }
    },
    onMouseOut: e => {
      if (!active) {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#b8b9c6';
      }
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 15,
      height: 15
    }
  }));
}

// -------------------- Field --------------------
function Field({
  value,
  onChange,
  placeholder,
  icon,
  width
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: '#232531',
      border: `1px solid ${focus ? '#a53273' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: 6,
      padding: '0 10px',
      width: width || 'auto',
      boxShadow: focus ? '0 0 0 2px rgba(165,50,115,0.18)' : 'none',
      transition: 'all 120ms'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13,
      color: '#82839a',
      marginRight: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value || '',
    onChange: e => onChange?.(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ecedf3',
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 13,
      padding: '7px 0',
      width: '100%'
    }
  }));
}

// -------------------- NumericVec3 --------------------
function NumericVec3({
  value = [0, 0, 0],
  onChange
}) {
  const labels = [['X', '#e0566c', 'rgba(224,86,108,0.1)'], ['Y', '#b6e34d', 'rgba(182,227,77,0.1)'], ['Z', '#5aa9ff', 'rgba(90,169,255,0.1)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, labels.map(([lbl, col, bg], i) => /*#__PURE__*/React.createElement("div", {
    key: lbl,
    style: {
      display: 'inline-flex',
      background: '#232531',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 700,
      color: col,
      background: bg,
      padding: '4px 7px'
    }
  }, lbl), /*#__PURE__*/React.createElement("input", {
    value: value[i].toFixed(3),
    onChange: e => {
      const v = [...value];
      v[i] = parseFloat(e.target.value) || 0;
      onChange?.(v);
    },
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ecedf3',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      padding: '4px 7px',
      width: 54
    }
  }))));
}

// -------------------- Toggle --------------------
function Toggle({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange?.(!on),
    style: {
      width: 32,
      height: 18,
      borderRadius: 999,
      background: on ? '#a53273' : '#2b2d42',
      border: `1px solid ${on ? '#a53273' : 'rgba(255,255,255,0.1)'}`,
      position: 'relative',
      cursor: 'pointer',
      padding: 0,
      transition: 'all 120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 1,
      left: on ? 15 : 1,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: on ? '#fff' : '#b8b9c6',
      transition: 'all 120ms cubic-bezier(0.22,1,0.36,1)'
    }
  }));
}

// -------------------- Chip --------------------
function Chip({
  tone = 'neutral',
  icon,
  children
}) {
  const tones = {
    neutral: {
      color: '#b8b9c6',
      bg: '#2b2d42',
      bd: 'rgba(255,255,255,0.1)'
    },
    success: {
      color: '#4ec9b0',
      bg: 'rgba(78,201,176,0.1)',
      bd: 'rgba(78,201,176,0.3)'
    },
    warning: {
      color: '#e8b339',
      bg: 'rgba(232,179,57,0.1)',
      bd: 'rgba(232,179,57,0.3)'
    },
    danger: {
      color: '#e0566c',
      bg: 'rgba(224,86,108,0.1)',
      bd: 'rgba(224,86,108,0.3)'
    },
    info: {
      color: '#5aa9ff',
      bg: 'rgba(90,169,255,0.1)',
      bd: 'rgba(90,169,255,0.3)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '2px 9px',
      borderRadius: 999,
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.bd}`
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 11,
      height: 11
    }
  }), children);
}
window.Button = Button;
window.IconButton = IconButton;
window.Field = Field;
window.NumericVec3 = NumericVec3;
window.Toggle = Toggle;
window.Chip = Chip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/SceneTree.jsx
try { (() => {
/* global React */
const {
  useState: useStateScene
} = React;
const SCENE = {
  name: 'World',
  icon: 'box',
  kind: 'SCENE',
  children: [{
    name: 'Environment',
    icon: 'layers',
    children: [{
      name: 'Terrain_01',
      icon: 'mountain',
      kind: 'MESH'
    }, {
      name: 'DirectionalLight',
      icon: 'sun',
      kind: 'LIGHT'
    }, {
      name: 'Skybox',
      icon: 'cloud',
      kind: 'ENV'
    }]
  }, {
    name: 'Player',
    icon: 'user',
    children: [{
      name: 'PlayerMesh',
      icon: 'box',
      kind: 'MESH'
    }, {
      name: 'Controller',
      icon: 'gamepad-2',
      kind: 'C#'
    }, {
      name: 'Footsteps',
      icon: 'volume-2',
      kind: 'AUDIO'
    }]
  }, {
    name: 'MainCamera',
    icon: 'video',
    kind: 'CAM'
  }, {
    name: 'NPCs',
    icon: 'users',
    children: [{
      name: 'Merchant',
      icon: 'user',
      kind: 'MESH'
    }, {
      name: 'Guard_01',
      icon: 'user',
      kind: 'MESH'
    }]
  }]
};
function TreeRow({
  node,
  depth = 0,
  selected,
  onSelect,
  expanded,
  onToggleExpand
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isOpen = expanded.has(node.name);
  const isSelected = selected === node.name;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => onSelect(node.name),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 8px',
      paddingLeft: 8 + depth * 16,
      borderRadius: 3,
      cursor: 'pointer',
      background: isSelected ? '#a53273' : 'transparent',
      color: isSelected ? '#fff' : '#ecedf3',
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 12
    },
    onMouseOver: e => {
      if (!isSelected) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    },
    onMouseOut: e => {
      if (!isSelected) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      if (hasChildren) onToggleExpand(node.name);
    },
    style: {
      width: 12,
      height: 12,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: hasChildren ? 0.6 : 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": isOpen ? 'chevron-down' : 'chevron-right',
    style: {
      width: 11,
      height: 11
    }
  })), /*#__PURE__*/React.createElement("i", {
    "data-lucide": node.icon,
    style: {
      width: 13,
      height: 13,
      opacity: 0.85,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, node.name), node.kind && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 9,
      letterSpacing: '0.05em',
      color: isSelected ? 'rgba(255,255,255,0.7)' : '#82839a'
    }
  }, node.kind)), hasChildren && isOpen && node.children.map((c, i) => /*#__PURE__*/React.createElement(TreeRow, {
    key: i,
    node: c,
    depth: depth + 1,
    selected: selected,
    onSelect: onSelect,
    expanded: expanded,
    onToggleExpand: onToggleExpand
  })));
}
function SceneTree({
  selected = 'Terrain_01',
  onSelect
}) {
  const [expanded, setExpanded] = useStateScene(new Set(['World', 'Environment', 'Player']));
  const toggle = name => {
    const next = new Set(expanded);
    next.has(name) ? next.delete(name) : next.add(name);
    setExpanded(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#1c1d28'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 10px',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#b8b9c6'
    }
  }, "Scene"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    title: "Add",
    style: iconBtnStyle
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: iconStyle
  })), /*#__PURE__*/React.createElement("button", {
    title: "Filter",
    style: iconBtnStyle
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "filter",
    style: iconStyle
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: '#16171f',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 4,
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 11,
      height: 11,
      color: '#555670'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Filter\u2026",
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      flex: 1,
      color: '#ecedf3',
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 11
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(TreeRow, {
    node: SCENE,
    selected: selected,
    onSelect: onSelect,
    expanded: expanded,
    onToggleExpand: toggle
  })));
}
const iconBtnStyle = {
  width: 22,
  height: 22,
  background: 'transparent',
  border: 'none',
  color: '#82839a',
  borderRadius: 3,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const iconStyle = {
  width: 12,
  height: 12
};
window.SceneTree = SceneTree;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/SceneTree.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/Viewport.jsx
try { (() => {
/* global React */

function Viewport({
  playing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a1d2e 0%, #2b2d42 60%, #16171f 100%)',
      borderLeft: '1px solid rgba(255,255,255,0.08)',
      borderRight: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    },
    preserveAspectRatio: "none",
    viewBox: "0 0 800 500"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "floor-fade",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,0.0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(255,255,255,0.18)"
  }))), [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    const y = 280 + i * 22;
    return /*#__PURE__*/React.createElement("line", {
      key: 'h' + i,
      x1: "0",
      y1: y,
      x2: "800",
      y2: y,
      stroke: "url(#floor-fade)",
      strokeWidth: "1"
    });
  }), [-6, -4, -2, -1, 0, 1, 2, 4, 6].map(n => {
    const x = 400 + n * 80;
    return /*#__PURE__*/React.createElement("line", {
      key: 'v' + n,
      x1: x,
      y1: "280",
      x2: 400 + n * 40,
      y2: "500",
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: "1"
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '48%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "220",
    height: "220",
    viewBox: "0 0 220 220"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "meshGlow"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(165,50,115,0.3)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(165,50,115,0)"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: "110",
    cy: "110",
    rx: "100",
    ry: "100",
    fill: "url(#meshGlow)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "110,30 180,80 175,170 110,200 45,170 40,80",
    fill: "rgba(43,45,66,0.85)",
    stroke: "#a53273",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "110,30 180,80 110,110",
    fill: "rgba(165,50,115,0.18)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "110,30 110,110 40,80",
    fill: "rgba(165,50,115,0.10)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "180,80 175,170 110,110",
    fill: "rgba(165,50,115,0.14)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "40,80 110,110 45,170",
    fill: "rgba(165,50,115,0.08)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), [[110, 30], [180, 80], [175, 170], [110, 200], [45, 170], [40, 80], [110, 110]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x,
    cy: y,
    r: "2.5",
    fill: "#d472a4",
    stroke: "#fff",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "22",
    width: "156",
    height: "186",
    fill: "none",
    stroke: "#e8b339",
    strokeWidth: "1",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "29",
    y: "19",
    width: "6",
    height: "6",
    fill: "#e8b339"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "185",
    y: "19",
    width: "6",
    height: "6",
    fill: "#e8b339"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "29",
    y: "205",
    width: "6",
    height: "6",
    fill: "#e8b339"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "185",
    y: "205",
    width: "6",
    height: "6",
    fill: "#e8b339"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "160",
    height: "160",
    viewBox: "0 0 160 160",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "80",
    x2: "140",
    y2: "80",
    stroke: "#e0566c",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "140,80 132,76 132,84",
    fill: "#e0566c"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "80",
    x2: "80",
    y2: "20",
    stroke: "#b6e34d",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "80,20 76,28 84,28",
    fill: "#b6e34d"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "80",
    x2: "40",
    y2: "120",
    stroke: "#5aa9ff",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "40,120 47,114 47,122",
    fill: "#5aa9ff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "3",
    fill: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(ToolGroup, {
    tools: [['mouse-pointer-2', 'select', true], ['move', 'translate'], ['rotate-3d', 'rotate'], ['scale', 'scale']]
  }), /*#__PURE__*/React.createElement(ToolGroup, {
    tools: [['grid-3x3', 'grid'], ['ruler', 'ruler', true], ['magnet', 'snap']]
  }), /*#__PURE__*/React.createElement(ToolGroup, {
    tools: [['layers', 'layers'], ['eye', 'visible'], ['lock', 'lock']]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(28,29,40,0.72)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 999,
      padding: '5px 14px',
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: playing ? '#b6e34d' : '#82839a'
    }
  }, playing ? '120 FPS' : 'IDLE'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#b8b9c6'
    }
  }, "8.3 MS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#82839a'
    }
  }, "12 ENT \xB7 1.4 MB")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: selectStyle
  }, /*#__PURE__*/React.createElement("option", null, "Perspective"), /*#__PURE__*/React.createElement("option", null, "Top"), /*#__PURE__*/React.createElement("option", null, "Front"), /*#__PURE__*/React.createElement("option", null, "Side")), /*#__PURE__*/React.createElement("select", {
    style: selectStyle
  }, /*#__PURE__*/React.createElement("option", null, "Solid"), /*#__PURE__*/React.createElement("option", null, "Wireframe"), /*#__PURE__*/React.createElement("option", null, "Material"), /*#__PURE__*/React.createElement("option", null, "Rendered"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "32",
    y1: "32",
    x2: "56",
    y2: "32",
    stroke: "#e0566c",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "32",
    y1: "32",
    x2: "32",
    y2: "8",
    stroke: "#b6e34d",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "32",
    y1: "32",
    x2: "14",
    y2: "50",
    stroke: "#5aa9ff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "58",
    y: "35",
    fontSize: "9",
    fontFamily: "JetBrains Mono",
    fill: "#e0566c",
    fontWeight: "700"
  }, "X"), /*#__PURE__*/React.createElement("text", {
    x: "34",
    y: "9",
    fontSize: "9",
    fontFamily: "JetBrains Mono",
    fill: "#b6e34d",
    fontWeight: "700"
  }, "Y"), /*#__PURE__*/React.createElement("text", {
    x: "6",
    y: "56",
    fontSize: "9",
    fontFamily: "JetBrains Mono",
    fill: "#5aa9ff",
    fontWeight: "700"
  }, "Z"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      color: '#82839a',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#d472a4'
    }
  }, "Terrain_01"), /*#__PURE__*/React.createElement("div", null, "verts 4,096 \xB7 tris 8,128")));
}
function ToolGroup({
  tools
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'rgba(28,29,40,0.72)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6,
      padding: 3,
      gap: 2
    }
  }, tools.map(([icon, title, active]) => /*#__PURE__*/React.createElement("button", {
    key: icon,
    title: title,
    style: {
      width: 26,
      height: 26,
      borderRadius: 3,
      background: active ? '#a53273' : 'transparent',
      border: 'none',
      color: active ? '#fff' : '#b8b9c6',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13
    }
  }))));
}
const selectStyle = {
  background: 'rgba(28,29,40,0.72)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 6,
  color: '#ecedf3',
  fontFamily: "'Inter Tight', sans-serif",
  fontSize: 11,
  padding: '4px 10px',
  cursor: 'pointer',
  outline: 'none'
};
window.Viewport = Viewport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/Viewport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CTA.jsx
try { (() => {
/* global React */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 900,
      height: 600,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at center, rgba(165,50,115,0.25) 0%, transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: 56,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: '#fff',
      margin: '0 0 20px'
    }
  }, "Ship the game,", /*#__PURE__*/React.createElement("br", null), "not the engine."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 18,
      lineHeight: 1.5,
      color: '#b8b9c6',
      margin: '0 0 32px'
    }
  }, "Heaxo 0.4 is in public beta. Free for hobby and indie projects."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 15,
      color: '#fff',
      background: '#a53273',
      padding: '12px 22px',
      borderRadius: 8,
      textDecoration: 'none',
      boxShadow: '0 0 0 1px rgba(165,50,115,0.4), 0 0 32px rgba(165,50,115,0.35)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download",
    style: {
      width: 16,
      height: 16
    }
  }), "Download Heaxo"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 15,
      color: '#ecedf3',
      background: 'transparent',
      padding: '12px 20px',
      borderRadius: 8,
      textDecoration: 'none',
      border: '1px solid rgba(255,255,255,0.15)'
    }
  }, "Read the docs", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 14,
      height: 14
    }
  })))));
}
window.CTA = CTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CodeShowcase.jsx
try { (() => {
/* global React */
function CodeShowcase() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#d472a4',
      marginBottom: 8
    }
  }, "Scripting"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '0 0 16px',
      lineHeight: 1.15
    }
  }, "C++ on the inside.", /*#__PURE__*/React.createElement("br", null), "C# on top."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 16,
      lineHeight: 1.6,
      color: '#b8b9c6',
      margin: '0 0 24px'
    }
  }, "The engine core is cache-friendly ECS in modern C++. Write game logic in C# \u2014 the primary scripting language \u2014 drop into C++ when you need it, or wire systems together in the visual node graph."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Hot-reload C# without restarting the editor', 'Native C++ for engine and performance code', 'Node-based visual scripting for designers'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 14,
      color: '#ecedf3'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 14,
      height: 14,
      color: '#4ec9b0',
      strokeWidth: 3
    }
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#16171f',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      boxShadow: '0 12px 32px rgba(0,0,0,0.55)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      background: '#1c1d28',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: '#82839a',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-code-2",
    style: {
      width: 13,
      height: 13
    }
  }), "PlayerController.cs"), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '18px 20px',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 13,
      lineHeight: 1.65,
      color: '#ecedf3',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#82839a'
    }
  }, "// hot-reloads on save \u2014 no rebuild"), '\n', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5aa9ff'
    }
  }, "using"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4ec9b0'
    }
  }, "Heaxo"), ";", '\n', '\n', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5aa9ff'
    }
  }, "public class"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4ec9b0'
    }
  }, "PlayerController"), " : ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4ec9b0'
    }
  }, "Script"), " ", '{', '\n', '  ', "[", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d472a4'
    }
  }, "Export"), "] ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5aa9ff'
    }
  }, "public float"), " Speed = ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e8b339'
    }
  }, "0.12f"), ";", '\n', '\n', '  ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5aa9ff'
    }
  }, "public override void"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d472a4'
    }
  }, "OnUpdate"), "() ", '{', '\n', '    ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5aa9ff'
    }
  }, "var"), " xf = ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d472a4'
    }
  }, "Get"), "<", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4ec9b0'
    }
  }, "Transform"), ">();", '\n', '    ', "xf.Translation += ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4ec9b0'
    }
  }, "Input"), ".Axis * Speed;", '\n', '  }', '\n', '}', '\n'))));
}
window.CodeShowcase = CodeShowcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CodeShowcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
/* global React */
const FEATURES = [{
  icon: 'cpu',
  title: 'Native renderer',
  body: 'Vulkan and Metal backends with deferred lighting, clustered shading, and a measured 0.7 ms scene-graph step at 10k entities.'
}, {
  icon: 'terminal',
  title: 'Hot reload',
  body: 'Edit shaders, scripts, and materials. The viewport refreshes without rebuilding — under 80 ms in our test suite.'
}, {
  icon: 'package',
  title: 'Build pipeline',
  body: 'Ship to Windows, macOS, Linux, iOS, Android, and console targets from one project file.'
}, {
  icon: 'box',
  title: 'Asset import',
  body: 'glTF, FBX, USD, OBJ, PSD, EXR. Import on save, automatically watched for changes.'
}, {
  icon: 'audio-lines',
  title: 'Audio engine',
  body: 'DSP graph with realtime convolution, occlusion, and per-source spatialization.'
}, {
  icon: 'orbit',
  title: 'Physics & networking',
  body: 'Deterministic physics for rollback netcode. Replication built into the entity system.'
}];
function FeatureGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Engine"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '8px 0 16px',
      lineHeight: 1.1
    }
  }, "A scene tree, a viewport,", /*#__PURE__*/React.createElement("br", null), "a pipeline that ships."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 17,
      color: '#b8b9c6',
      maxWidth: 640,
      margin: '0 auto',
      lineHeight: 1.5
    }
  }, "Heaxo doesn't reinvent the workflow you already know \u2014 it just runs it faster.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    style: {
      background: '#1c1d28',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'rgba(165,50,115,0.15)',
      border: '1px solid rgba(165,50,115,0.35)',
      color: '#d472a4',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 17,
      color: '#fff',
      margin: '0 0 6px'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 14,
      lineHeight: 1.55,
      color: '#b8b9c6',
      margin: 0
    }
  }, f.body))))));
}
const eyebrow = {
  fontFamily: "'Inter Tight', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#d472a4'
};
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* global React */
function Footer() {
  const cols = [{
    h: 'Product',
    links: ['Editor', 'Engine', 'Benchmarks', 'Roadmap', 'Releases']
  }, {
    h: 'Develop',
    links: ['Docs', 'Tutorials', 'API reference', 'Sample projects', 'GitHub']
  }, {
    h: 'Community',
    links: ['Discord', 'Forums', 'Showcase', 'Office hours']
  }, {
    h: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '64px 32px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#16171f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/heaxo-logo.svg",
    style: {
      width: 28,
      height: 28,
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-0.03em',
      color: '#fff'
    }
  }, "Heaxo")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 13,
      lineHeight: 1.6,
      color: '#82839a',
      margin: 0,
      maxWidth: 280
    }
  }, "Real-time 3D engine and editor for production-grade games.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#ecedf3',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 13,
      color: '#b8b9c6',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: '#555670',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 HEAXO LABS"), /*#__PURE__*/React.createElement("span", null, "VERSION 0.4.2-BETA \xB7 BUILD 8a3f1c")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* global React */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 32px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -200,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 1200,
      height: 800,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at center, rgba(165,50,115,0.32) 0%, rgba(165,50,115,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
      maskImage: 'radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 12px',
      borderRadius: 999,
      background: 'rgba(165,50,115,0.12)',
      border: '1px solid rgba(165,50,115,0.3)',
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#d472a4',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#d472a4'
    }
  }), "Editor 0.4 \u2014 Public Beta"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: 'clamp(48px, 7vw, 88px)',
      lineHeight: 1.02,
      letterSpacing: '-0.04em',
      color: '#fff',
      margin: '0 0 24px'
    }
  }, "Build worlds at ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#a53273'
    }
  }, "native speed.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 20,
      lineHeight: 1.5,
      color: '#b8b9c6',
      maxWidth: 680,
      margin: '0 auto 36px'
    }
  }, "Heaxo is a real-time 3D engine and editor for production-grade games. Vulkan and Metal backends, hot-reload everywhere, ships to every platform you target."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ctaPrimary
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download",
    style: {
      width: 16,
      height: 16
    }
  }), "Download 0.4 \u2014 macOS"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ctaSecondary
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "terminal",
    style: {
      width: 16,
      height: 16
    }
  }), "git clone heaxo/engine")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1c1d28',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 12,
      boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset',
      overflow: 'hidden',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      background: '#16171f',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#e0566c'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#e8b339'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#4ec9b0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: '#82839a'
    }
  }, "Heaxo Editor \u2014 World.scene")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      background: 'linear-gradient(135deg, #1a1d2e 0%, #2b2d42 60%, #16171f 100%)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "320",
    height: "320",
    viewBox: "0 0 220 220",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "110,30 180,80 175,170 110,200 45,170 40,80",
    fill: "rgba(43,45,66,0.85)",
    stroke: "#a53273",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "110,30 180,80 110,110",
    fill: "rgba(165,50,115,0.18)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "110,30 110,110 40,80",
    fill: "rgba(165,50,115,0.10)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "180,80 175,170 110,110",
    fill: "rgba(165,50,115,0.14)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "40,80 110,110 45,170",
    fill: "rgba(165,50,115,0.08)",
    stroke: "#a53273",
    strokeWidth: "1"
  }), [[110, 30], [180, 80], [175, 170], [110, 200], [45, 170], [40, 80]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x,
    cy: y,
    r: "3",
    fill: "#d472a4",
    stroke: "#fff",
    strokeWidth: "0.5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(28,29,40,0.72)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 999,
      padding: '5px 14px',
      display: 'inline-flex',
      gap: 14,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#b6e34d'
    }
  }, "120 FPS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#b8b9c6'
    }
  }, "8.3 MS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#82839a'
    }
  }, "12 ENT")))))));
}
const ctaPrimary = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'Inter Tight', sans-serif",
  fontWeight: 600,
  fontSize: 15,
  color: '#fff',
  background: '#a53273',
  padding: '12px 20px',
  borderRadius: 8,
  textDecoration: 'none',
  boxShadow: '0 0 0 1px rgba(165,50,115,0.4), 0 0 32px rgba(165,50,115,0.35)'
};
const ctaSecondary = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 13,
  color: '#ecedf3',
  background: '#1c1d28',
  padding: '12px 18px',
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.1)',
  textDecoration: 'none'
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingNav.jsx
try { (() => {
/* global React */
function MarketingNav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(22,23,31,0.72)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/heaxo-logo.svg",
    style: {
      width: 28,
      height: 28,
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '-0.03em',
      color: '#fff'
    }
  }, "Heaxo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginLeft: 8
    }
  }, ['Editor', 'Engine', 'Docs', 'Showcase', 'Pricing'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 14,
      color: '#b8b9c6',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontSize: 14,
      color: '#b8b9c6',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: '#fff',
      background: '#a53273',
      padding: '8px 14px',
      borderRadius: 6,
      textDecoration: 'none'
    }
  }, "Download 0.4"));
}
window.MarketingNav = MarketingNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NumericVec3 = __ds_scope.NumericVec3;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
