/* global React */
const { useState: useStateScene } = React;

const SCENE = {
  name: 'World', icon: 'box', kind:'SCENE', children: [
    { name: 'Environment', icon:'layers', children: [
      { name: 'Terrain_01', icon:'mountain', kind:'MESH' },
      { name: 'DirectionalLight', icon:'sun', kind:'LIGHT' },
      { name: 'Skybox', icon:'cloud', kind:'ENV' },
    ]},
    { name: 'Player', icon:'user', children: [
      { name: 'PlayerMesh', icon:'box', kind:'MESH' },
      { name: 'Controller', icon:'gamepad-2', kind:'C#' },
      { name: 'Footsteps', icon:'volume-2', kind:'AUDIO' },
    ]},
    { name: 'MainCamera', icon:'video', kind:'CAM' },
    { name: 'NPCs', icon:'users', children: [
      { name: 'Merchant', icon:'user', kind:'MESH' },
      { name: 'Guard_01', icon:'user', kind:'MESH' },
    ]},
  ],
};

function TreeRow({ node, depth=0, selected, onSelect, expanded, onToggleExpand }) {
  const hasChildren = node.children && node.children.length>0;
  const isOpen = expanded.has(node.name);
  const isSelected = selected === node.name;
  return (
    <>
      <div onClick={()=>onSelect(node.name)} style={{
        display:'flex', alignItems:'center', gap:5, padding:'3px 8px',
        paddingLeft: 8 + depth*16, borderRadius: 3, cursor:'pointer',
        background: isSelected ? '#a53273' : 'transparent',
        color: isSelected ? '#fff' : '#ecedf3',
        fontFamily:"'Inter Tight', sans-serif", fontSize:12,
      }}
      onMouseOver={e=>{ if(!isSelected) e.currentTarget.style.background='rgba(255,255,255,0.04)';}}
      onMouseOut={e=>{ if(!isSelected) e.currentTarget.style.background='transparent';}}
      >
        <span onClick={e=>{e.stopPropagation(); if(hasChildren) onToggleExpand(node.name);}}
          style={{width:12, height:12, display:'inline-flex', alignItems:'center', justifyContent:'center', opacity: hasChildren?0.6:0}}>
          <i data-lucide={isOpen?'chevron-down':'chevron-right'} style={{width:11, height:11}}></i>
        </span>
        <i data-lucide={node.icon} style={{width:13, height:13, opacity:0.85, flex:'none'}}></i>
        <span style={{flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{node.name}</span>
        {node.kind && <span style={{
          fontFamily:"'JetBrains Mono', monospace", fontSize:9, letterSpacing:'0.05em',
          color: isSelected ? 'rgba(255,255,255,0.7)' : '#82839a',
        }}>{node.kind}</span>}
      </div>
      {hasChildren && isOpen && node.children.map((c,i)=>(
        <TreeRow key={i} node={c} depth={depth+1} selected={selected} onSelect={onSelect}
          expanded={expanded} onToggleExpand={onToggleExpand}/>
      ))}
    </>
  );
}

function SceneTree({ selected='Terrain_01', onSelect }) {
  const [expanded, setExpanded] = useStateScene(new Set(['World','Environment','Player']));
  const toggle = (name) => {
    const next = new Set(expanded);
    next.has(name) ? next.delete(name) : next.add(name);
    setExpanded(next);
  };
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100%', background:'#1c1d28'}}>
      {/* Header */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'8px 10px', borderBottom:'1px solid rgba(255,255,255,0.06)',
      }}>
        <span style={{
          fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:11,
          textTransform:'uppercase', letterSpacing:'0.08em', color:'#b8b9c6',
        }}>Scene</span>
        <div style={{display:'flex', gap:2}}>
          <button title="Add" style={iconBtnStyle}><i data-lucide="plus" style={iconStyle}></i></button>
          <button title="Filter" style={iconBtnStyle}><i data-lucide="filter" style={iconStyle}></i></button>
        </div>
      </div>
      {/* Search */}
      <div style={{padding:'8px 10px', borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
        <div style={{
          display:'flex', alignItems:'center', gap:6,
          background:'#16171f', border:'1px solid rgba(255,255,255,0.06)', borderRadius:4,
          padding:'4px 8px',
        }}>
          <i data-lucide="search" style={{width:11, height:11, color:'#555670'}}></i>
          <input placeholder="Filter…" style={{
            background:'transparent', border:'none', outline:'none', flex:1,
            color:'#ecedf3', fontFamily:"'Inter Tight', sans-serif", fontSize:11,
          }}/>
        </div>
      </div>
      {/* Tree */}
      <div style={{flex:1, overflow:'auto', padding:'4px 0'}}>
        <TreeRow node={SCENE} selected={selected} onSelect={onSelect}
          expanded={expanded} onToggleExpand={toggle}/>
      </div>
    </div>
  );
}

const iconBtnStyle = {
  width:22, height:22, background:'transparent', border:'none',
  color:'#82839a', borderRadius:3, cursor:'pointer',
  display:'inline-flex', alignItems:'center', justifyContent:'center',
};
const iconStyle = { width:12, height:12 };

window.SceneTree = SceneTree;
