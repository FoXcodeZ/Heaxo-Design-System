export function Toggle({ on, onChange }) {
  const [inner, setInner] = React.useState(!!on);
  const val = onChange ? !!on : inner;
  const flip = () => onChange ? onChange(!val) : setInner(!val);
  return (
    <button onClick={flip} style={{width:32, height:18, borderRadius:999, padding:0, cursor:'pointer', position:'relative',
      background: val?'#a53273':'#2b2d42', border:'1px solid '+(val?'#a53273':'rgba(255,255,255,0.1)'), transition:'all 120ms'}}>
      <span style={{position:'absolute', top:2, left: val?16:2, width:12, height:12, borderRadius:'50%',
        background: val?'#fff':'#b8b9c6', transition:'all 120ms cubic-bezier(0.22,1,0.36,1)'}}></span>
    </button>
  );
}
