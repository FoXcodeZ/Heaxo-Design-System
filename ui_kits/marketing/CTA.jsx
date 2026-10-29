/* global React */
function CTA() {
  return (
    <section style={{
      padding:'96px 32px', borderTop:'1px solid rgba(255,255,255,0.06)',
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
        width:900, height:600, pointerEvents:'none',
        background:'radial-gradient(ellipse at center, rgba(165,50,115,0.25) 0%, transparent 65%)',
      }}/>
      <div style={{maxWidth:760, margin:'0 auto', textAlign:'center', position:'relative'}}>
        <h2 style={{fontFamily:"'Space Grotesk', sans-serif", fontWeight:700, fontSize:56, letterSpacing:'-0.03em', lineHeight:1.05, color:'#fff', margin:'0 0 20px'}}>
          Ship the game,<br/>not the engine.
        </h2>
        <p style={{fontFamily:"'Inter Tight', sans-serif", fontSize:18, lineHeight:1.5, color:'#b8b9c6', margin:'0 0 32px'}}>
          Heaxo 0.4 is in public beta. Free for hobby and indie projects.
        </p>
        <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
          <a href="#" style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:15, color:'#fff',
            background:'#a53273', padding:'12px 22px', borderRadius:8, textDecoration:'none',
            boxShadow:'0 0 0 1px rgba(165,50,115,0.4), 0 0 32px rgba(165,50,115,0.35)',
          }}>
            <i data-lucide="download" style={{width:16, height:16}}></i>Download Heaxo
          </a>
          <a href="#" style={{
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:15, color:'#ecedf3',
            background:'transparent', padding:'12px 20px', borderRadius:8, textDecoration:'none',
            border:'1px solid rgba(255,255,255,0.15)',
          }}>
            Read the docs<i data-lucide="arrow-right" style={{width:14, height:14}}></i>
          </a>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
