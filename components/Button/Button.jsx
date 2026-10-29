const V = {
  primary: { background:'#a53273', color:'#fff', border:'1px solid transparent' },
  secondary: { background:'#2b2d42', color:'#ecedf3', border:'1px solid rgba(255,255,255,0.1)' },
  ghost: { background:'transparent', color:'#b8b9c6', border:'1px solid transparent' },
  danger: { background:'transparent', color:'#e0566c', border:'1px solid rgba(224,86,108,0.4)' },
};
const H = { primary:'#b54284', secondary:'#353749', ghost:'rgba(255,255,255,0.05)', danger:'rgba(224,86,108,0.12)' };
export function Button({ variant='primary', size='md', icon, children, onClick, disabled }) {
  const [hov, setHov] = React.useState(false);
  const v = V[variant] || V.primary;
  return (
    <button onClick={onClick} disabled={disabled} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      ...v, background: hov && !disabled ? H[variant] : v.background,
      fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize: size==='sm'?12:13,
      padding: size==='sm'?'5px 10px':'7px 13px', borderRadius:6, cursor: disabled?'not-allowed':'pointer',
      display:'inline-flex', alignItems:'center', gap:7, whiteSpace:'nowrap', flexShrink:0, lineHeight:1.2, opacity: disabled?0.45:1,
      transition:'background 120ms cubic-bezier(0.22,1,0.36,1)',
    }}>
      {icon && <i data-lucide={icon} style={{width:14, height:14}}></i>}
      {children}
    </button>
  );
}
