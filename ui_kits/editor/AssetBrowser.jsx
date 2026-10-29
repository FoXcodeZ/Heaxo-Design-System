/* global React */
const { useState: useStateAB } = React;

const ASSETS = [
  { name:'Terrain_01', kind:'mesh', icon:'mountain', size:'2.4 MB' },
  { name:'Player', kind:'mesh', icon:'box', size:'884 KB' },
  { name:'Stone', kind:'material', icon:'square', size:'132 KB' },
  { name:'Grass', kind:'material', icon:'square', size:'96 KB' },
  { name:'Skybox_dusk', kind:'texture', icon:'image', size:'4.1 MB' },
  { name:'normal_brick', kind:'texture', icon:'image', size:'1.2 MB' },
  { name:'PlayerController.cs', kind:'script', icon:'file-code-2', size:'4 KB' },
  { name:'EnemyAI.cs', kind:'script', icon:'file-code-2', size:'6 KB' },
  { name:'Renderer.cpp', kind:'script', icon:'file-code-2', size:'18 KB' },
  { name:'Damage.vsg', kind:'script', icon:'workflow', size:'2 KB' },
  { name:'Footsteps', kind:'audio', icon:'audio-lines', size:'320 KB' },
  { name:'Ambient_wind', kind:'audio', icon:'audio-lines', size:'1.8 MB' },
  { name:'Idle_anim', kind:'anim', icon:'play-circle', size:'48 KB' },
];

const KIND_COLOR = {
  mesh:'#d472a4', material:'#e8b339', texture:'#5aa9ff',
  script:'#4ec9b0', audio:'#be4f88', anim:'#b6e34d',
};

function AssetBrowser() {
  const [tab, setTab] = useStateAB('all');
  const filtered = tab==='all' ? ASSETS : ASSETS.filter(a=>a.kind===tab);
  const tabs = [['all','All'], ['mesh','Meshes'], ['material','Materials'], ['texture','Textures'], ['script','Scripts']];
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100%', background:'#1c1d28', borderTop:'1px solid rgba(255,255,255,0.08)'}}>
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'6px 10px', borderBottom:'1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{display:'flex', gap:0}}>
          {tabs.map(([k,l])=>(
            <button key={k} onClick={()=>setTab(k)} style={{
              padding:'4px 9px', background:'transparent', border:'none',
              fontFamily:"'Inter Tight', sans-serif", fontSize:11,
              color: tab===k?'#ecedf3':'#82839a',
              borderBottom: `2px solid ${tab===k?'#a53273':'transparent'}`,
              marginBottom:-1, cursor:'pointer',
            }}>{l}</button>
          ))}
        </div>
        <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:'#555670'}}>{filtered.length} ITEMS</span>
      </div>
      <div style={{
        flex:1, overflow:'auto', padding:8,
        display:'grid', gridTemplateColumns:'repeat(auto-fill, 72px)', gap:8, alignContent:'flex-start',
      }}>
        {filtered.map(a=>(
          <div key={a.name} style={{
            width:72, display:'flex', flexDirection:'column', alignItems:'center', gap:4,
            padding:6, borderRadius:4, cursor:'pointer',
          }}
          onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.04)'}
          onMouseOut={e=>e.currentTarget.style.background='transparent'}
          >
            <div style={{
              width:56, height:56, background:'#16171f', borderRadius:4,
              border:'1px solid rgba(255,255,255,0.06)',
              display:'flex', alignItems:'center', justifyContent:'center',
              position:'relative',
            }}>
              <i data-lucide={a.icon} style={{width:22, height:22, color:KIND_COLOR[a.kind]}}></i>
              <span style={{
                position:'absolute', bottom:3, right:3,
                fontFamily:"'JetBrains Mono', monospace", fontSize:8,
                color:KIND_COLOR[a.kind], textTransform:'uppercase', letterSpacing:'0.05em',
              }}>{a.kind.slice(0,3)}</span>
            </div>
            <span style={{
              fontFamily:"'Inter Tight', sans-serif", fontSize:10,
              color:'#ecedf3', textAlign:'center', whiteSpace:'nowrap',
              overflow:'hidden', textOverflow:'ellipsis', width:'100%',
            }}>{a.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.AssetBrowser = AssetBrowser;
