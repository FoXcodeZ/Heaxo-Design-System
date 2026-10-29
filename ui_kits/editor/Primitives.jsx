/* global React */
const { useState } = React;

// -------------------- Button --------------------
function Button({ variant = 'primary', icon, children, onClick, size='md' }) {
  const styles = {
    base: {
      fontFamily: "'Inter Tight', sans-serif",
      fontWeight: 600,
      fontSize: size==='sm'?12:13,
      padding: size==='sm'?'5px 10px':'7px 13px',
      borderRadius: 6,
      border: '1px solid transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      transition: 'all 120ms cubic-bezier(0.22,1,0.36,1)',
      lineHeight: 1.2,
    },
    primary:   { background:'#a53273', color:'#fff' },
    secondary: { background:'#2b2d42', color:'#ecedf3', border:'1px solid rgba(255,255,255,0.1)' },
    ghost:     { background:'transparent', color:'#b8b9c6' },
    danger:    { background:'transparent', color:'#e0566c', border:'1px solid rgba(224,86,108,0.4)'},
  };
  return (
    <button onClick={onClick} style={{...styles.base, ...styles[variant]}}
      onMouseOver={e=>{
        if(variant==='primary') e.currentTarget.style.background='#b54284';
        if(variant==='secondary') e.currentTarget.style.background='#353749';
        if(variant==='ghost') e.currentTarget.style.background='rgba(255,255,255,0.05)';
      }}
      onMouseOut={e=>{
        Object.assign(e.currentTarget.style, styles[variant]);
        Object.assign(e.currentTarget.style, styles.base);
      }}>
      {icon && <i data-lucide={icon} style={{width:14, height:14}}></i>}
      {children}
    </button>
  );
}

// -------------------- IconButton --------------------
function IconButton({ icon, active, onClick, title, size = 28 }) {
  return (
    <button onClick={onClick} title={title} style={{
      width: size, height: size, borderRadius: 4,
      background: active ? '#a53273' : 'transparent',
      border: '1px solid transparent',
      color: active ? '#fff' : '#b8b9c6',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', transition: 'all 120ms',
    }}
    onMouseOver={e=>{ if(!active){ e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.color='#ecedf3'; } }}
    onMouseOut={e=>{ if(!active){ e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#b8b9c6'; } }}>
      <i data-lucide={icon} style={{width:15, height:15}}></i>
    </button>
  );
}

// -------------------- Field --------------------
function Field({ value, onChange, placeholder, icon, width }) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{
      display:'inline-flex', alignItems:'center',
      background:'#232531', border:`1px solid ${focus?'#a53273':'rgba(255,255,255,0.1)'}`,
      borderRadius: 6, padding: '0 10px', width: width || 'auto',
      boxShadow: focus ? '0 0 0 2px rgba(165,50,115,0.18)' : 'none',
      transition: 'all 120ms',
    }}>
      {icon && <i data-lucide={icon} style={{width:13, height:13, color:'#82839a', marginRight:8}}></i>}
      <input
        value={value||''} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{
          background:'transparent', border:'none', outline:'none',
          color:'#ecedf3', fontFamily:"'Inter Tight', sans-serif", fontSize:13,
          padding:'7px 0', width: '100%',
        }}
      />
    </div>
  );
}

// -------------------- NumericVec3 --------------------
function NumericVec3({ value=[0,0,0], onChange }) {
  const labels = [['X','#e0566c','rgba(224,86,108,0.1)'],['Y','#b6e34d','rgba(182,227,77,0.1)'],['Z','#5aa9ff','rgba(90,169,255,0.1)']];
  return (
    <div style={{display:'flex', gap:6}}>
      {labels.map(([lbl,col,bg],i)=>(
        <div key={lbl} style={{
          display:'inline-flex', background:'#232531',
          border:'1px solid rgba(255,255,255,0.08)', borderRadius:4, overflow:'hidden',
        }}>
          <span style={{
            fontFamily:"'JetBrains Mono', monospace", fontSize:10, fontWeight:700,
            color:col, background:bg, padding:'4px 7px',
          }}>{lbl}</span>
          <input
            value={value[i].toFixed(3)}
            onChange={e=>{const v=[...value]; v[i]=parseFloat(e.target.value)||0; onChange?.(v);}}
            style={{
              background:'transparent', border:'none', outline:'none',
              color:'#ecedf3', fontFamily:"'JetBrains Mono', monospace", fontSize:11,
              padding:'4px 7px', width:54,
            }}
          />
        </div>
      ))}
    </div>
  );
}

// -------------------- Toggle --------------------
function Toggle({ on, onChange }) {
  return (
    <button onClick={()=>onChange?.(!on)} style={{
      width: 32, height: 18, borderRadius: 999,
      background: on ? '#a53273' : '#2b2d42',
      border: `1px solid ${on?'#a53273':'rgba(255,255,255,0.1)'}`,
      position: 'relative', cursor: 'pointer', padding: 0,
      transition: 'all 120ms',
    }}>
      <span style={{
        position:'absolute', top:1, left: on ? 15 : 1,
        width: 12, height: 12, borderRadius: '50%',
        background: on ? '#fff' : '#b8b9c6',
        transition: 'all 120ms cubic-bezier(0.22,1,0.36,1)',
      }}/>
    </button>
  );
}

// -------------------- Chip --------------------
function Chip({ tone='neutral', icon, children }) {
  const tones = {
    neutral: { color:'#b8b9c6', bg:'#2b2d42', bd:'rgba(255,255,255,0.1)' },
    success: { color:'#4ec9b0', bg:'rgba(78,201,176,0.1)', bd:'rgba(78,201,176,0.3)' },
    warning: { color:'#e8b339', bg:'rgba(232,179,57,0.1)', bd:'rgba(232,179,57,0.3)' },
    danger:  { color:'#e0566c', bg:'rgba(224,86,108,0.1)', bd:'rgba(224,86,108,0.3)' },
    info:    { color:'#5aa9ff', bg:'rgba(90,169,255,0.1)', bd:'rgba(90,169,255,0.3)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:5,
      padding:'2px 9px', borderRadius:999,
      fontFamily:"'Inter Tight', sans-serif", fontSize:11, fontWeight:600,
      color:t.color, background:t.bg, border:`1px solid ${t.bd}`,
    }}>
      {icon && <i data-lucide={icon} style={{width:11, height:11}}></i>}
      {children}
    </span>
  );
}

window.Button = Button;
window.IconButton = IconButton;
window.Field = Field;
window.NumericVec3 = NumericVec3;
window.Toggle = Toggle;
window.Chip = Chip;
