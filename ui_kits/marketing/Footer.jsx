/* global React */
function Footer() {
  const cols = [
    { h:'Product', links:['Editor','Engine','Benchmarks','Roadmap','Releases']},
    { h:'Develop', links:['Docs','Tutorials','API reference','Sample projects','GitHub']},
    { h:'Community', links:['Discord','Forums','Showcase','Office hours']},
    { h:'Company', links:['About','Blog','Careers','Press']},
  ];
  return (
    <footer style={{
      padding:'64px 32px 32px', borderTop:'1px solid rgba(255,255,255,0.06)',
      background:'#16171f',
    }}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr', gap:32}}>
        <div>
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
            <img src="../../assets/heaxo-logo.svg" style={{width:28, height:28, borderRadius:5}}/>
            <span style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:800, fontSize:18, letterSpacing:'-0.03em', color:'#fff'}}>Heaxo</span>
          </div>
          <p style={{fontFamily:"'Inter Tight', sans-serif", fontSize:13, lineHeight:1.6, color:'#82839a', margin:0, maxWidth:280}}>
            Real-time 3D engine and editor for production-grade games.
          </p>
        </div>
        {cols.map(c=>(
          <div key={c.h}>
            <div style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em', color:'#ecedf3', marginBottom:14}}>{c.h}</div>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:9}}>
              {c.links.map(l=>(<li key={l}><a href="#" style={{fontFamily:"'Inter Tight', sans-serif", fontSize:13, color:'#b8b9c6', textDecoration:'none'}}>{l}</a></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth:1100, margin:'48px auto 0', paddingTop:24,
        borderTop:'1px solid rgba(255,255,255,0.06)',
        display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16,
        fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:'#555670', letterSpacing:'0.04em',
      }}>
        <span>© 2026 HEAXO LABS</span>
        <span>VERSION 0.4.2-BETA · BUILD 8a3f1c</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
