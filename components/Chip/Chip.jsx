const T = {
  neutral: ['#b8b9c6','#2b2d42','rgba(255,255,255,0.1)'],
  success: ['#4ec9b0','rgba(78,201,176,0.1)','rgba(78,201,176,0.3)'],
  warning: ['#e8b339','rgba(232,179,57,0.1)','rgba(232,179,57,0.3)'],
  danger: ['#e0566c','rgba(224,86,108,0.1)','rgba(224,86,108,0.3)'],
  info: ['#5aa9ff','rgba(90,169,255,0.1)','rgba(90,169,255,0.3)'],
};
export function Chip({ tone='neutral', icon, children }) {
  const [c,bg,bd] = T[tone] || T.neutral;
  return (
    <span style={{display:'inline-flex', alignItems:'center', gap:5, whiteSpace:'nowrap', flexShrink:0, padding:'2px 9px', borderRadius:999,
      fontFamily:"'Inter Tight', sans-serif", fontSize:11, fontWeight:600, color:c, background:bg, border:'1px solid '+bd}}>
      {icon && <i data-lucide={icon} style={{width:11, height:11}}></i>}
      {children}
    </span>
  );
}
