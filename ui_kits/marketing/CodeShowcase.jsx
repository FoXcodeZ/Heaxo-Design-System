/* global React */
function CodeShowcase() {
  return (
    <section style={{padding:'96px 32px', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center'}}>
        <div>
          <div style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:12, textTransform:'uppercase', letterSpacing:'0.1em', color:'#d472a4', marginBottom:8}}>Scripting</div>
          <h2 style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:700, fontSize:36, letterSpacing:'-0.02em', color:'#fff', margin:'0 0 16px', lineHeight:1.15}}>
            C++ on the inside.<br/>C# on top.
          </h2>
          <p style={{fontFamily:"'Inter Tight', sans-serif", fontSize:16, lineHeight:1.6, color:'#b8b9c6', margin:'0 0 24px'}}>
            The engine core is cache-friendly ECS in modern C++. Write game logic in C# — the primary scripting language — drop into C++ when you need it, or wire systems together in the visual node graph.
          </p>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
            {['Hot-reload C# without restarting the editor','Native C++ for engine and performance code','Node-based visual scripting for designers'].map(t=>(
              <li key={t} style={{display:'flex', alignItems:'center', gap:10, fontFamily:"'Inter Tight', sans-serif", fontSize:14, color:'#ecedf3'}}>
                <i data-lucide="check" style={{width:14, height:14, color:'#4ec9b0', strokeWidth:3}}></i>{t}
              </li>
            ))}
          </ul>
        </div>
        <div style={{
          background:'#16171f', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10,
          boxShadow:'0 12px 32px rgba(0,0,0,0.55)', overflow:'hidden',
        }}>
          <div style={{
            padding:'10px 14px', background:'#1c1d28', borderBottom:'1px solid rgba(255,255,255,0.06)',
            fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:'#82839a',
            display:'flex', alignItems:'center', gap:8,
          }}>
            <i data-lucide="file-code-2" style={{width:13, height:13}}></i>PlayerController.cs
          </div>
          <pre style={{
            margin:0, padding:'18px 20px',
            fontFamily:"'JetBrains Mono', monospace", fontSize:13, lineHeight:1.65,
            color:'#ecedf3', overflow:'auto',
          }}>
<span style={{color:'#82839a'}}>// hot-reloads on save — no rebuild</span>{'\n'}
<span style={{color:'#5aa9ff'}}>using</span> <span style={{color:'#4ec9b0'}}>Heaxo</span>;{'\n'}
{'\n'}
<span style={{color:'#5aa9ff'}}>public class</span> <span style={{color:'#4ec9b0'}}>PlayerController</span> : <span style={{color:'#4ec9b0'}}>Script</span> {'{'}{'\n'}
{'  '}[<span style={{color:'#d472a4'}}>Export</span>] <span style={{color:'#5aa9ff'}}>public float</span> Speed = <span style={{color:'#e8b339'}}>0.12f</span>;{'\n'}
{'\n'}
{'  '}<span style={{color:'#5aa9ff'}}>public override void</span> <span style={{color:'#d472a4'}}>OnUpdate</span>() {'{'}{'\n'}
{'    '}<span style={{color:'#5aa9ff'}}>var</span> xf = <span style={{color:'#d472a4'}}>Get</span>&lt;<span style={{color:'#4ec9b0'}}>Transform</span>&gt;();{'\n'}
{'    '}xf.Translation += <span style={{color:'#4ec9b0'}}>Input</span>.Axis * Speed;{'\n'}
{'  }'}{'\n'}
{'}'}{'\n'}
          </pre>
        </div>
      </div>
    </section>
  );
}
window.CodeShowcase = CodeShowcase;
