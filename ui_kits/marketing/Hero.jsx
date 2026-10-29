/* global React */
function Hero() {
  return (
    <section style={{position:'relative', overflow:'hidden', padding:'96px 32px 64px'}}>
      {/* Plum radial glow */}
      <div style={{
        position:'absolute', top:-200, left:'50%', transform:'translateX(-50%)',
        width:1200, height:800, pointerEvents:'none',
        background:'radial-gradient(ellipse at center, rgba(165,50,115,0.32) 0%, rgba(165,50,115,0) 60%)',
      }}/>
      {/* Wireframe dot grid */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize:'48px 48px',
        maskImage:'radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)',
        WebkitMaskImage:'radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)',
      }}/>

      <div style={{maxWidth:1100, margin:'0 auto', position:'relative', textAlign:'center'}}>
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          padding:'5px 12px', borderRadius:999,
          background:'rgba(165,50,115,0.12)', border:'1px solid rgba(165,50,115,0.3)',
          fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:11,
          textTransform:'uppercase', letterSpacing:'0.08em', color:'#d472a4',
          marginBottom:24,
        }}>
          <span style={{width:6, height:6, borderRadius:'50%', background:'#d472a4'}}/>
          Editor 0.4 — Public Beta
        </div>

        <h1 style={{
          fontFamily:"'Space Grotesk', sans-serif", fontWeight:700,
          fontSize:'clamp(48px, 7vw, 88px)', lineHeight:1.02,
          letterSpacing:'-0.04em', color:'#fff', margin:'0 0 24px',
        }}>
          Build worlds at <span style={{color:'#a53273'}}>native speed.</span>
        </h1>
        <p style={{
          fontFamily:"'Inter Tight', sans-serif", fontSize:20, lineHeight:1.5,
          color:'#b8b9c6', maxWidth:680, margin:'0 auto 36px',
        }}>
          Heaxo is a real-time 3D engine and editor for production-grade games.
          Vulkan and Metal backends, hot-reload everywhere, ships to every platform you target.
        </p>
        <div style={{display:'flex', gap:12, justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
          <a href="#" style={ctaPrimary}>
            <i data-lucide="download" style={{width:16, height:16}}></i>Download 0.4 — macOS
          </a>
          <a href="#" style={ctaSecondary}>
            <i data-lucide="terminal" style={{width:16, height:16}}></i>git clone heaxo/engine
          </a>
        </div>

        {/* Editor preview frame */}
        <div style={{marginTop:64, position:'relative'}}>
          <div style={{
            background:'#1c1d28', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12,
            boxShadow:'0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset',
            overflow:'hidden', textAlign:'left',
          }}>
            <div style={{
              height:36, background:'#16171f', borderBottom:'1px solid rgba(255,255,255,0.08)',
              display:'flex', alignItems:'center', gap:6, padding:'0 12px',
            }}>
              <span style={{width:11, height:11, borderRadius:'50%', background:'#e0566c'}}/>
              <span style={{width:11, height:11, borderRadius:'50%', background:'#e8b339'}}/>
              <span style={{width:11, height:11, borderRadius:'50%', background:'#4ec9b0'}}/>
              <span style={{flex:1, textAlign:'center', fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:'#82839a'}}>Heaxo Editor — World.scene</span>
            </div>
            <div style={{
              height:380,
              background:'linear-gradient(135deg, #1a1d2e 0%, #2b2d42 60%, #16171f 100%)',
              position:'relative', overflow:'hidden',
            }}>
              {/* Mini wireframe mesh */}
              <svg width="320" height="320" viewBox="0 0 220 220" style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)'}}>
                <polygon points="110,30 180,80 175,170 110,200 45,170 40,80" fill="rgba(43,45,66,0.85)" stroke="#a53273" strokeWidth="1.5"/>
                <polygon points="110,30 180,80 110,110" fill="rgba(165,50,115,0.18)" stroke="#a53273" strokeWidth="1"/>
                <polygon points="110,30 110,110 40,80" fill="rgba(165,50,115,0.10)" stroke="#a53273" strokeWidth="1"/>
                <polygon points="180,80 175,170 110,110" fill="rgba(165,50,115,0.14)" stroke="#a53273" strokeWidth="1"/>
                <polygon points="40,80 110,110 45,170" fill="rgba(165,50,115,0.08)" stroke="#a53273" strokeWidth="1"/>
                {[[110,30],[180,80],[175,170],[110,200],[45,170],[40,80]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="3" fill="#d472a4" stroke="#fff" strokeWidth="0.5"/>
                ))}
              </svg>
              {/* HUD pill */}
              <div style={{
                position:'absolute', top:14, left:'50%', transform:'translateX(-50%)',
                background:'rgba(28,29,40,0.72)', backdropFilter:'blur(16px)',
                border:'1px solid rgba(255,255,255,0.1)', borderRadius:999,
                padding:'5px 14px', display:'inline-flex', gap:14,
                fontFamily:"'JetBrains Mono', monospace", fontSize:10, fontWeight:500,
                letterSpacing:'0.06em', textTransform:'uppercase',
              }}>
                <span style={{color:'#b6e34d'}}>120 FPS</span>
                <span style={{color:'#b8b9c6'}}>8.3 MS</span>
                <span style={{color:'#82839a'}}>12 ENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ctaPrimary = {
  display:'inline-flex', alignItems:'center', gap:8,
  fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:15, color:'#fff',
  background:'#a53273', padding:'12px 20px', borderRadius:8, textDecoration:'none',
  boxShadow:'0 0 0 1px rgba(165,50,115,0.4), 0 0 32px rgba(165,50,115,0.35)',
};
const ctaSecondary = {
  display:'inline-flex', alignItems:'center', gap:8,
  fontFamily:"'JetBrains Mono', monospace", fontSize:13, color:'#ecedf3',
  background:'#1c1d28', padding:'12px 18px', borderRadius:8,
  border:'1px solid rgba(255,255,255,0.1)', textDecoration:'none',
};
window.Hero = Hero;
