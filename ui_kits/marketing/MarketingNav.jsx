/* global React */
function MarketingNav() {
  return (
    <nav style={{
      position:'sticky', top:0, zIndex:50,
      background:'rgba(22,23,31,0.72)', backdropFilter:'blur(16px)',
      borderBottom:'1px solid rgba(255,255,255,0.06)',
      padding:'14px 32px', display:'flex', alignItems:'center', gap:32,
    }}>
      <a href="#" style={{display:'flex', alignItems:'center', gap:10, textDecoration:'none'}}>
        <img src="../../assets/heaxo-logo.svg" style={{width:28, height:28, borderRadius:5}}/>
        <span style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:800, fontSize:18, letterSpacing:'-0.03em', color:'#fff'}}>Heaxo</span>
      </a>
      <div style={{display:'flex', gap:24, marginLeft:8}}>
        {['Editor','Engine','Docs','Showcase','Pricing'].map(l=>(
          <a key={l} href="#" style={{fontFamily:"'Inter Tight', sans-serif", fontSize:14, color:'#b8b9c6', textDecoration:'none'}}>{l}</a>
        ))}
      </div>
      <span style={{flex:1}}/>
      <a href="#" style={{fontFamily:"'Inter Tight', sans-serif", fontSize:14, color:'#b8b9c6', textDecoration:'none'}}>Sign in</a>
      <a href="#" style={{
        fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:13,
        color:'#fff', background:'#a53273', padding:'8px 14px', borderRadius:6, textDecoration:'none',
      }}>Download 0.4</a>
    </nav>
  );
}
window.MarketingNav = MarketingNav;
