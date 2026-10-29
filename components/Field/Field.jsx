export function Field({ value, placeholder, icon, width, onChange }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{display:'inline-flex', alignItems:'center', gap:8, flexShrink:0, background:'#232531', borderRadius:6, padding:'0 10px', width: width||'auto',
      border:'1px solid '+(focus?'#a53273':'rgba(255,255,255,0.1)'), boxShadow: focus?'0 0 0 2px rgba(165,50,115,0.18)':'none', transition:'all 120ms'}}>
      {icon && <i data-lucide={icon} style={{width:13, height:13, color:'#82839a'}}></i>}
      <input defaultValue={value} placeholder={placeholder} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        onChange={e=>onChange && onChange(e.target.value)}
        style={{background:'transparent', border:'none', outline:'none', color:'#ecedf3', fontFamily:"'Inter Tight', sans-serif", fontSize:13, padding:'7px 0', width:'100%'}}/>
    </div>
  );
}
