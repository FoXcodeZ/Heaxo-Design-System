/* global React */
const FEATURES = [
  { icon:'cpu', title:'Native renderer', body:'Vulkan and Metal backends with deferred lighting, clustered shading, and a measured 0.7 ms scene-graph step at 10k entities.' },
  { icon:'terminal', title:'Hot reload', body:'Edit shaders, scripts, and materials. The viewport refreshes without rebuilding — under 80 ms in our test suite.' },
  { icon:'package', title:'Build pipeline', body:'Ship to Windows, macOS, Linux, iOS, Android, and console targets from one project file.' },
  { icon:'box', title:'Asset import', body:'glTF, FBX, USD, OBJ, PSD, EXR. Import on save, automatically watched for changes.' },
  { icon:'audio-lines', title:'Audio engine', body:'DSP graph with realtime convolution, occlusion, and per-source spatialization.' },
  { icon:'orbit', title:'Physics & networking', body:'Deterministic physics for rollback netcode. Replication built into the entity system.' },
];
function FeatureGrid() {
  return (
    <section style={{padding:'96px 32px', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom:56}}>
          <div style={eyebrow}>Engine</div>
          <h2 style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:700, fontSize:40, letterSpacing:'-0.02em', color:'#fff', margin:'8px 0 16px', lineHeight:1.1}}>
            A scene tree, a viewport,<br/>a pipeline that ships.
          </h2>
          <p style={{fontFamily:"'Inter Tight', sans-serif", fontSize:17, color:'#b8b9c6', maxWidth:640, margin:'0 auto', lineHeight:1.5}}>
            Heaxo doesn't reinvent the workflow you already know — it just runs it faster.
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
          {FEATURES.map(f=>(
            <div key={f.title} style={{
              background:'#1c1d28', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10,
              padding:24,
            }}>
              <div style={{
                width:40, height:40, borderRadius:8,
                background:'rgba(165,50,115,0.15)', border:'1px solid rgba(165,50,115,0.35)',
                color:'#d472a4', display:'inline-flex', alignItems:'center', justifyContent:'center',
                marginBottom:16,
              }}>
                <i data-lucide={f.icon} style={{width:20, height:20}}></i>
              </div>
              <h3 style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:17, color:'#fff', margin:'0 0 6px'}}>{f.title}</h3>
              <p style={{fontFamily:"'Inter Tight', sans-serif", fontSize:14, lineHeight:1.55, color:'#b8b9c6', margin:0}}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const eyebrow = {
  fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:12,
  textTransform:'uppercase', letterSpacing:'0.1em', color:'#d472a4',
};
window.FeatureGrid = FeatureGrid;
