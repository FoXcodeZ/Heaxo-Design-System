/* global React */
const { useState: useStateCmd, useEffect: useEffectCmd } = React;

const COMMANDS = [
  { icon:'file-plus', name:'New scene', kbd:'⌘N' },
  { icon:'folder-open', name:'Open scene…', kbd:'⌘O' },
  { icon:'save', name:'Save scene', kbd:'⌘S' },
  { icon:'play', name:'Run scene', kbd:'⌘R' },
  { icon:'box', name:'Add: Mesh' },
  { icon:'sun', name:'Add: Directional Light' },
  { icon:'video', name:'Add: Camera' },
  { icon:'cpu', name:'Toggle GPU profiler' },
  { icon:'package', name:'Build project…' },
  { icon:'settings', name:'Project settings' },
];

function CommandPalette({ open, onClose }) {
  const [q, setQ] = useStateCmd('');
  const [sel, setSel] = useStateCmd(0);
  useEffectCmd(()=>{ if(!open){ setQ(''); setSel(0);} },[open]);
  if (!open) return null;
  const filtered = COMMANDS.filter(c=>c.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div onClick={onClose} style={{
      position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)',
      display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:120, zIndex:100,
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:520, background:'rgba(28,29,40,0.95)', backdropFilter:'blur(16px)',
        border:'1px solid rgba(255,255,255,0.12)', borderRadius:10,
        boxShadow:'0 24px 64px rgba(0,0,0,0.7)', overflow:'hidden',
      }}>
        <div style={{
          display:'flex', alignItems:'center', gap:10, padding:'12px 16px',
          borderBottom:'1px solid rgba(255,255,255,0.08)',
        }}>
          <i data-lucide="search" style={{width:14, height:14, color:'#82839a'}}></i>
          <input autoFocus value={q} onChange={e=>{setQ(e.target.value); setSel(0);}} placeholder="Search commands, scenes, assets…" style={{
            flex:1, background:'transparent', border:'none', outline:'none',
            color:'#ecedf3', fontFamily:"'Inter Tight', sans-serif", fontSize:14,
          }}/>
          <span style={{
            fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:'#555670',
            border:'1px solid rgba(255,255,255,0.1)', borderRadius:3, padding:'1px 6px',
          }}>ESC</span>
        </div>
        <div style={{padding:6, maxHeight:320, overflow:'auto'}}>
          {filtered.length===0 && <div style={{padding:20, textAlign:'center', color:'#82839a', fontSize:12}}>No results</div>}
          {filtered.map((c,i)=>(
            <div key={c.name} onClick={onClose} style={{
              display:'flex', alignItems:'center', gap:10, padding:'8px 10px', borderRadius:5,
              background: i===sel ? '#a53273' : 'transparent',
              color: i===sel ? '#fff' : '#ecedf3',
              cursor:'pointer',
            }}>
              <i data-lucide={c.icon} style={{width:14, height:14, opacity:0.85}}></i>
              <span style={{fontFamily:"'Inter Tight', sans-serif", fontSize:13, flex:1}}>{c.name}</span>
              {c.kbd && <span style={{
                fontFamily:"'JetBrains Mono', monospace", fontSize:10,
                color: i===sel ? 'rgba(255,255,255,0.7)' : '#555670',
              }}>{c.kbd}</span>}
            </div>
          ))}
        </div>
        <div style={{
          padding:'8px 14px', borderTop:'1px solid rgba(255,255,255,0.06)',
          display:'flex', gap:14, fontFamily:"'JetBrains Mono', monospace", fontSize:10, color:'#555670', letterSpacing:'0.04em',
        }}>
          <span>↑↓ NAVIGATE</span><span>↵ RUN</span><span>ESC CLOSE</span>
        </div>
      </div>
    </div>
  );
}

window.CommandPalette = CommandPalette;
