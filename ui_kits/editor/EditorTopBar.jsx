/* global React, IconButton, Button, Chip */
const { useState: useStateTopBar } = React;

function EditorTopBar({ sceneName='Untitled.scene', dirty=true, playing, onTogglePlay, onCommandPalette }) {
  const menus = ['Scene', 'Edit', 'Project', 'Build', 'Help'];
  const [openMenu, setOpenMenu] = useStateTopBar(null);
  return (
    <div style={{
      height: 40, background:'#1c1d28', borderBottom:'1px solid rgba(255,255,255,0.08)',
      display:'flex', alignItems:'center', padding:'0 8px', gap:4,
      fontFamily:"'Inter Tight', sans-serif",
    }}>
      {/* Logo */}
      <div style={{display:'flex', alignItems:'center', gap:8, padding:'0 8px 0 4px', marginRight:4}}>
        <img src="../../assets/heaxo-logo.svg" style={{width:22, height:22, borderRadius:4}}/>
      </div>

      {/* Menus */}
      {menus.map(m=>(
        <button key={m} onClick={()=>setOpenMenu(openMenu===m?null:m)} style={{
          background: openMenu===m ? 'rgba(255,255,255,0.06)' : 'transparent',
          border:'none', color:'#ecedf3', fontFamily:'inherit', fontSize:12,
          padding:'5px 10px', borderRadius:4, cursor:'pointer',
        }}>{m}</button>
      ))}

      {/* Scene name center */}
      <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center', gap:8}}>
        <i data-lucide="box" style={{width:13, height:13, color:'#d472a4'}}></i>
        <span style={{fontSize:12, color:'#b8b9c6'}}>{sceneName}{dirty && <span style={{color:'#e8b339'}}> ●</span>}</span>
      </div>

      {/* Play controls */}
      <div style={{display:'inline-flex', background:'#232531', borderRadius:6, padding:3, gap:2, border:'1px solid rgba(255,255,255,0.08)'}}>
        <IconButton icon={playing?'square':'play'} active={playing} onClick={onTogglePlay} title="Run scene"/>
        <IconButton icon="pause" title="Pause"/>
        <IconButton icon="step-forward" title="Step"/>
      </div>

      <button onClick={onCommandPalette} style={{
        marginLeft:8, display:'inline-flex', alignItems:'center', gap:8,
        background:'#232531', border:'1px solid rgba(255,255,255,0.08)', borderRadius:6,
        padding:'5px 10px', color:'#82839a', fontSize:12, fontFamily:'inherit', cursor:'pointer',
        minWidth: 200, justifyContent:'flex-start',
      }}>
        <i data-lucide="search" style={{width:13, height:13}}></i>
        <span>Search & commands</span>
        <span style={{marginLeft:'auto', fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:'#555670'}}>⌘K</span>
      </button>

      <div style={{marginLeft:8}}>
        <Chip tone="success" icon="circle-check">Build OK</Chip>
      </div>
    </div>
  );
}

window.EditorTopBar = EditorTopBar;
