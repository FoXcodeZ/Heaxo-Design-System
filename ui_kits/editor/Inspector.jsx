/* global React, NumericVec3, Toggle, Chip */
const { useState: useStateInsp } = React;

function Section({ title, icon, children, defaultOpen=true }) {
  const [open, setOpen] = useStateInsp(defaultOpen);
  return (
    <div style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
      <div onClick={()=>setOpen(!open)} style={{
        display:'flex', alignItems:'center', gap:7, padding:'10px 12px',
        cursor:'pointer', background:'rgba(255,255,255,0.02)',
      }}>
        <i data-lucide={open?'chevron-down':'chevron-right'} style={{width:11, height:11, color:'#82839a'}}></i>
        <i data-lucide={icon} style={{width:13, height:13, color:'#d472a4'}}></i>
        <span style={{
          fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:11,
          textTransform:'uppercase', letterSpacing:'0.07em', color:'#ecedf3',
        }}>{title}</span>
      </div>
      {open && <div style={{padding:'8px 12px 12px'}}>{children}</div>}
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:6}}>
      <span style={{
        width:78, color:'#82839a', fontSize:11,
        fontFamily:"'Inter Tight', sans-serif",
      }}>{label}</span>
      <div style={{flex:1}}>{children}</div>
    </div>
  );
}

function Inspector({ name='Terrain_01' }) {
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100%', background:'#1c1d28', overflow:'hidden'}}>
      {/* Header */}
      <div style={{
        padding:'10px 12px', borderBottom:'1px solid rgba(255,255,255,0.08)',
        display:'flex', alignItems:'center', gap:10,
      }}>
        <div style={{
          width:28, height:28, background:'rgba(165,50,115,0.15)',
          border:'1px solid rgba(165,50,115,0.35)', borderRadius:6,
          display:'inline-flex', alignItems:'center', justifyContent:'center',
        }}>
          <i data-lucide="mountain" style={{width:14, height:14, color:'#d472a4'}}></i>
        </div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontFamily:"'Inter Tight', sans-serif", fontWeight:600, fontSize:13, color:'#ecedf3', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{name}</div>
          <div style={{display:'flex', gap:4, marginTop:2}}>
            <Chip tone="neutral">Mesh</Chip>
            <Chip tone="info">Static</Chip>
          </div>
        </div>
      </div>

      <div style={{flex:1, overflow:'auto'}}>
        <Section title="Transform" icon="move-3d">
          <Row label="Position"><NumericVec3 value={[12.480, 0.000, -4.250]}/></Row>
          <Row label="Rotation"><NumericVec3 value={[0, 45, 0]}/></Row>
          <Row label="Scale"><NumericVec3 value={[1, 1, 1]}/></Row>
        </Section>
        <Section title="Mesh" icon="box">
          <Row label="Source"><div style={{
            background:'#232531', border:'1px solid rgba(255,255,255,0.08)', borderRadius:4,
            padding:'5px 8px', fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:'#5aa9ff',
          }}>terrain_01.mesh</div></Row>
          <Row label="Verts"><span style={mono}>4,096</span></Row>
          <Row label="Tris"><span style={mono}>8,128</span></Row>
          <Row label="Cast shadows"><Toggle on={true}/></Row>
          <Row label="Receive"><Toggle on={true}/></Row>
        </Section>
        <Section title="Material" icon="square">
          <Row label="Shader"><div style={{
            background:'#232531', border:'1px solid rgba(255,255,255,0.08)', borderRadius:4,
            padding:'5px 8px', fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:'#4ec9b0',
          }}>standard_pbr</div></Row>
          <Row label="Albedo">
            <div style={{display:'flex', gap:6, alignItems:'center'}}>
              <div style={{width:20, height:20, background:'#7a6552', border:'1px solid rgba(255,255,255,0.1)', borderRadius:3}}/>
              <span style={mono}>#7a6552</span>
            </div>
          </Row>
          <Row label="Roughness"><Slider value={0.78}/></Row>
          <Row label="Metallic"><Slider value={0.05}/></Row>
        </Section>
        <Section title="Physics" icon="orbit" defaultOpen={false}>
          <Row label="Type">—</Row>
        </Section>
      </div>
    </div>
  );
}

function Slider({ value=0.5 }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <div style={{flex:1, height:4, background:'#232531', borderRadius:2, position:'relative'}}>
        <div style={{position:'absolute', left:0, top:0, bottom:0, width: `${value*100}%`, background:'#a53273', borderRadius:2}}/>
        <div style={{position:'absolute', left: `${value*100}%`, top:'50%', transform:'translate(-50%,-50%)', width:10, height:10, borderRadius:'50%', background:'#fff', border:'2px solid #a53273'}}/>
      </div>
      <span style={{...mono, width:38, textAlign:'right'}}>{value.toFixed(2)}</span>
    </div>
  );
}

const mono = { fontFamily:"'JetBrains Mono', monospace", fontSize:11, color:'#ecedf3' };

window.Inspector = Inspector;
