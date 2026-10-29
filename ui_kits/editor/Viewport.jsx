/* global React */

function Viewport({ playing }) {
  return (
    <div style={{
      flex:1, position:'relative', overflow:'hidden',
      background: 'linear-gradient(135deg, #1a1d2e 0%, #2b2d42 60%, #16171f 100%)',
      borderLeft:'1px solid rgba(255,255,255,0.08)',
      borderRight:'1px solid rgba(255,255,255,0.08)',
    }}>
      {/* Dot grid */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize:'32px 32px',
        maskImage:'radial-gradient(ellipse at center, black 30%, transparent 90%)',
        WebkitMaskImage:'radial-gradient(ellipse at center, black 30%, transparent 90%)',
      }}/>

      {/* Floor grid (perspective) */}
      <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}} preserveAspectRatio="none" viewBox="0 0 800 500">
        <defs>
          <linearGradient id="floor-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.0)"/>
            <stop offset="100%" stopColor="rgba(255,255,255,0.18)"/>
          </linearGradient>
        </defs>
        {/* horizontal lines (receding) */}
        {[0,1,2,3,4,5,6,7,8].map(i=>{
          const y = 280 + i*22;
          return <line key={'h'+i} x1="0" y1={y} x2="800" y2={y} stroke="url(#floor-fade)" strokeWidth="1"/>;
        })}
        {/* converging vertical lines */}
        {[-6,-4,-2,-1,0,1,2,4,6].map(n=>{
          const x = 400 + n*80;
          return <line key={'v'+n} x1={x} y1="280" x2={400+n*40} y2="500" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>;
        })}
      </svg>

      {/* Center "selected" mesh — wireframe-ish polyhedron */}
      <div style={{position:'absolute', left:'50%', top:'48%', transform:'translate(-50%,-50%)'}}>
        <svg width="220" height="220" viewBox="0 0 220 220">
          <defs>
            <radialGradient id="meshGlow"><stop offset="0%" stopColor="rgba(165,50,115,0.3)"/><stop offset="100%" stopColor="rgba(165,50,115,0)"/></radialGradient>
          </defs>
          <ellipse cx="110" cy="110" rx="100" ry="100" fill="url(#meshGlow)"/>
          {/* mesh body */}
          <polygon points="110,30 180,80 175,170 110,200 45,170 40,80" fill="rgba(43,45,66,0.85)" stroke="#a53273" strokeWidth="1.5"/>
          <polygon points="110,30 180,80 110,110" fill="rgba(165,50,115,0.18)" stroke="#a53273" strokeWidth="1"/>
          <polygon points="110,30 110,110 40,80" fill="rgba(165,50,115,0.10)" stroke="#a53273" strokeWidth="1"/>
          <polygon points="180,80 175,170 110,110" fill="rgba(165,50,115,0.14)" stroke="#a53273" strokeWidth="1"/>
          <polygon points="40,80 110,110 45,170" fill="rgba(165,50,115,0.08)" stroke="#a53273" strokeWidth="1"/>
          {/* vertices */}
          {[[110,30],[180,80],[175,170],[110,200],[45,170],[40,80],[110,110]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="2.5" fill="#d472a4" stroke="#fff" strokeWidth="0.5"/>
          ))}
          {/* selection bbox */}
          <rect x="32" y="22" width="156" height="186" fill="none" stroke="#e8b339" strokeWidth="1" strokeDasharray="3 3"/>
          <rect x="29" y="19" width="6" height="6" fill="#e8b339"/>
          <rect x="185" y="19" width="6" height="6" fill="#e8b339"/>
          <rect x="29" y="205" width="6" height="6" fill="#e8b339"/>
          <rect x="185" y="205" width="6" height="6" fill="#e8b339"/>
        </svg>

        {/* gizmo overlay */}
        <svg width="160" height="160" viewBox="0 0 160 160" style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none'}}>
          <line x1="80" y1="80" x2="140" y2="80" stroke="#e0566c" strokeWidth="2.5"/>
          <polygon points="140,80 132,76 132,84" fill="#e0566c"/>
          <line x1="80" y1="80" x2="80" y2="20" stroke="#b6e34d" strokeWidth="2.5"/>
          <polygon points="80,20 76,28 84,28" fill="#b6e34d"/>
          <line x1="80" y1="80" x2="40" y2="120" stroke="#5aa9ff" strokeWidth="2.5"/>
          <polygon points="40,120 47,114 47,122" fill="#5aa9ff"/>
          <circle cx="80" cy="80" r="3" fill="#fff"/>
        </svg>
      </div>

      {/* Top-left tool toolbar */}
      <div style={{position:'absolute', top:10, left:10, display:'flex', gap:6}}>
        <ToolGroup tools={[['mouse-pointer-2','select',true],['move','translate'],['rotate-3d','rotate'],['scale','scale']]}/>
        <ToolGroup tools={[['grid-3x3','grid'],['ruler','ruler',true],['magnet','snap']]}/>
        <ToolGroup tools={[['layers','layers'],['eye','visible'],['lock','lock']]}/>
      </div>

      {/* HUD pill top-center */}
      <div style={{
        position:'absolute', top:14, left:'50%', transform:'translateX(-50%)',
        background:'rgba(28,29,40,0.72)', backdropFilter:'blur(16px)',
        border:'1px solid rgba(255,255,255,0.1)', borderRadius:999,
        padding:'5px 14px', display:'inline-flex', gap:14, alignItems:'center',
        fontFamily:"'JetBrains Mono', monospace", fontSize:10, fontWeight:500,
        letterSpacing:'0.06em', textTransform:'uppercase',
      }}>
        <span style={{color:playing?'#b6e34d':'#82839a'}}>{playing?'120 FPS':'IDLE'}</span>
        <span style={{color:'#b8b9c6'}}>8.3 MS</span>
        <span style={{color:'#82839a'}}>12 ENT · 1.4 MB</span>
      </div>

      {/* Camera controls top-right */}
      <div style={{position:'absolute', top:10, right:10, display:'flex', gap:6}}>
        <select style={selectStyle}>
          <option>Perspective</option><option>Top</option><option>Front</option><option>Side</option>
        </select>
        <select style={selectStyle}>
          <option>Solid</option><option>Wireframe</option><option>Material</option><option>Rendered</option>
        </select>
      </div>

      {/* Axis indicator bottom-right */}
      <div style={{position:'absolute', bottom:14, right:14}}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <line x1="32" y1="32" x2="56" y2="32" stroke="#e0566c" strokeWidth="2"/>
          <line x1="32" y1="32" x2="32" y2="8" stroke="#b6e34d" strokeWidth="2"/>
          <line x1="32" y1="32" x2="14" y2="50" stroke="#5aa9ff" strokeWidth="2"/>
          <text x="58" y="35" fontSize="9" fontFamily="JetBrains Mono" fill="#e0566c" fontWeight="700">X</text>
          <text x="34" y="9" fontSize="9" fontFamily="JetBrains Mono" fill="#b6e34d" fontWeight="700">Y</text>
          <text x="6" y="56" fontSize="9" fontFamily="JetBrains Mono" fill="#5aa9ff" fontWeight="700">Z</text>
        </svg>
      </div>

      {/* Bottom-left selected info */}
      <div style={{
        position:'absolute', bottom:14, left:14,
        fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:'#82839a',
        letterSpacing:'0.04em',
      }}>
        <div style={{color:'#d472a4'}}>Terrain_01</div>
        <div>verts 4,096 · tris 8,128</div>
      </div>
    </div>
  );
}

function ToolGroup({ tools }) {
  return (
    <div style={{
      display:'inline-flex', background:'rgba(28,29,40,0.72)', backdropFilter:'blur(16px)',
      border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, padding:3, gap:2,
    }}>
      {tools.map(([icon,title,active])=>(
        <button key={icon} title={title} style={{
          width:26, height:26, borderRadius:3,
          background: active?'#a53273':'transparent', border:'none',
          color: active?'#fff':'#b8b9c6', cursor:'pointer',
          display:'inline-flex', alignItems:'center', justifyContent:'center',
        }}>
          <i data-lucide={icon} style={{width:13, height:13}}></i>
        </button>
      ))}
    </div>
  );
}

const selectStyle = {
  background:'rgba(28,29,40,0.72)', backdropFilter:'blur(16px)',
  border:'1px solid rgba(255,255,255,0.1)', borderRadius:6,
  color:'#ecedf3', fontFamily:"'Inter Tight', sans-serif", fontSize:11,
  padding:'4px 10px', cursor:'pointer', outline:'none',
};

window.Viewport = Viewport;
