export function IconButton({ icon, active, title, size=28, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick} title={title} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      width:size, height:size, borderRadius:4, border:'1px solid transparent', cursor:'pointer',
      background: active ? '#a53273' : hov ? 'rgba(255,255,255,0.06)' : 'transparent',
      color: active ? '#fff' : hov ? '#ecedf3' : '#b8b9c6',
      display:'inline-flex', alignItems:'center', justifyContent:'center', transition:'all 120ms',
    }}>
      <i data-lucide={icon} style={{width:15, height:15}}></i>
    </button>
  );
}
