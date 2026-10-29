/* global React */
const { useState: useStateConsole } = React;

const LOGS = [
  { lvl:'info', t:'14:02:11', msg:'Scene loaded · World.scene · 12 entities'},
  { lvl:'info', t:'14:02:11', msg:'Loaded mesh terrain_01.mesh (4096 verts)'},
  { lvl:'info', t:'14:02:12', msg:'Compiled shader standard_pbr in 84 ms'},
  { lvl:'warn', t:'14:02:14', msg:'PlayerController.cs: missing reference for footstep audio bus'},
  { lvl:'info', t:'14:02:18', msg:'Build target: linux-x86_64 · debug'},
  { lvl:'info', t:'14:02:21', msg:'Hot-reload registered for PlayerController.cs (C# domain)'},
  { lvl:'err',  t:'14:02:33', msg:'Compile failed: unresolved symbol Vec3::Cross at PlayerController.cs:42'},
  { lvl:'info', t:'14:02:38', msg:'Recompiled. 1 error → 0'},
];

const COLOR = { info:'#82839a', warn:'#e8b339', err:'#e0566c' };
const PREFIX = { info:'INFO', warn:'WARN', err:'ERR ' };

function Console({ open, onToggle }) {
  const [filter, setFilter] = useStateConsole('all');
  const filtered = filter==='all' ? LOGS : LOGS.filter(l=>l.lvl===filter);
  return (
    <div style={{
      height: open?200:32,
      background:'#16171f', borderTop:'1px solid rgba(255,255,255,0.08)',
      display:'flex', flexDirection:'column', transition:'height 180ms cubic-bezier(0.22,1,0.36,1)',
    }}>
      {/* Header */}
      <div style={{
        height:32, padding:'0 10px', display:'flex', alignItems:'center', gap:10,
        borderBottom: open?'1px solid rgba(255,255,255,0.06)':'none', flex:'none',
      }}>
        <button onClick={onToggle} style={{
          background:'transparent', border:'none', cursor:'pointer',
          color:'#b8b9c6', display:'inline-flex', alignItems:'center', gap:6,
          fontFamily:"'Inter Tight', sans-serif", fontSize:11, fontWeight:600,
          textTransform:'uppercase', letterSpacing:'0.07em', padding:0,
        }}>
          <i data-lucide={open?'chevron-down':'chevron-up'} style={{width:11, height:11}}></i>
          Console
        </button>
        <span style={{flex:1}}/>
        {[['all','All',null],['info','Info','#82839a'],['warn','Warn','#e8b339'],['err','Errors','#e0566c']].map(([k,l,c])=>{
          const count = k==='all'?LOGS.length:LOGS.filter(x=>x.lvl===k).length;
          return (
            <button key={k} onClick={()=>setFilter(k)} style={{
              background: filter===k?'rgba(255,255,255,0.06)':'transparent',
              border:'none', borderRadius:3, padding:'3px 8px', cursor:'pointer',
              color: filter===k?'#ecedf3':'#82839a',
              fontFamily:"'Inter Tight', sans-serif", fontSize:11,
              display:'inline-flex', alignItems:'center', gap:5,
            }}>
              {c && <span style={{width:6, height:6, borderRadius:'50%', background:c}}/>}
              {l} <span style={{color:'#555670'}}>{count}</span>
            </button>
          );
        })}
        <button title="Clear" style={{...iconBtn, marginLeft:4}}><i data-lucide="trash-2" style={iconSty}></i></button>
      </div>
      {/* Body */}
      {open && (
        <div style={{flex:1, overflow:'auto', padding:'6px 10px', fontFamily:"'JetBrains Mono', monospace", fontSize:11, lineHeight:1.5}}>
          {filtered.map((l,i)=>(
            <div key={i} style={{display:'flex', gap:10, padding:'2px 0'}}>
              <span style={{color:'#555670', flex:'none'}}>{l.t}</span>
              <span style={{color:COLOR[l.lvl], fontWeight:700, flex:'none'}}>{PREFIX[l.lvl]}</span>
              <span style={{color: l.lvl==='err'?'#e0566c':'#ecedf3'}}>{l.msg}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const iconBtn = { width:22, height:22, background:'transparent', border:'none', color:'#82839a', borderRadius:3, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' };
const iconSty = { width:12, height:12 };

window.Console = Console;
