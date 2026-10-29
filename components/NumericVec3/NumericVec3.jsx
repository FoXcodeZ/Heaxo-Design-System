const AX = [['X','#e0566c','rgba(224,86,108,0.1)'],['Y','#b6e34d','rgba(182,227,77,0.1)'],['Z','#5aa9ff','rgba(90,169,255,0.1)']];
export function NumericVec3({ value=[0,0,0], precision=3, onChange }) {
  return (
    <div style={{display:'flex', gap:6}}>
      {AX.map(([l,c,bg],i)=>(
        <div key={l} style={{display:'inline-flex', background:'#232531', border:'1px solid rgba(255,255,255,0.08)', borderRadius:4, overflow:'hidden'}}>
          <span style={{fontFamily:"'JetBrains Mono', monospace", fontSize:10, fontWeight:700, color:c, background:bg, padding:'4px 7px'}}>{l}</span>
          <input defaultValue={Number(value[i]).toFixed(precision)}
            onChange={e=>{ const v=[...value]; v[i]=parseFloat(e.target.value)||0; onChange && onChange(v); }}
            style={{background:'transparent', border:'none', outline:'none', color:'#ecedf3', fontFamily:"'JetBrains Mono', monospace", fontSize:11, padding:'4px 7px', width:54}}/>
        </div>
      ))}
    </div>
  );
}
