import { useState, useEffect, useRef } from "react";

const SCREENS = {
  INTRO: "intro",
  ROUND1: "round1",
  ROUND2: "round2",
  ROUND2_RESULT: "round2_result",
  FINISH_LINE: "finish_line",
  ROUND3: "round3",
  REVEAL: "reveal",
  CLOSING: "closing",
};

const MONO = "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace";
const SANS = "'DM Sans', 'Helvetica Neue', sans-serif";

function F1CarTop({ color = "#5DCAA5", width = 200, glow = false, style = {} }) {
  const id = `glow-${color.replace(/#/g, "")}-${Math.random().toString(36).slice(2, 6)}`;
  return (
    <svg width={width} viewBox="0 0 240 500" fill="none" style={{ display: "block", transition: "all 0.4s ease", ...style }}>
      {glow && (<defs><filter id={id} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>)}
      <g filter={glow ? `url(#${id})` : undefined} style={{ transition: "all 0.4s ease" }}>
        <rect x="50" y="460" width="140" height="8" rx="2" fill={color} opacity="0.9" />
        <rect x="60" y="470" width="120" height="4" rx="1" fill={color} opacity="0.5" />
        <rect x="46" y="455" width="8" height="22" rx="2" fill={color} opacity="0.7" />
        <rect x="186" y="455" width="8" height="22" rx="2" fill={color} opacity="0.7" />
        <rect x="28" y="420" width="36" height="60" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
        <rect x="176" y="420" width="36" height="60" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
        {[0,1,2,3,4].map(i=>(<g key={`rt${i}`}><line x1="32" y1={428+i*11} x2="60" y2={428+i*11} stroke="#2a2a2a" strokeWidth="1"/><line x1="180" y1={428+i*11} x2="208" y2={428+i*11} stroke="#2a2a2a" strokeWidth="1"/></g>))}
        <path d="M90 440 L80 380 L72 280 L68 200 L74 120 L90 80 L120 40 L150 80 L166 120 L172 200 L168 280 L160 380 L150 440 Z" fill="#111" stroke={color} strokeWidth="1" opacity="0.9"/>
        <path d="M72 280 L44 300 L40 340 L50 380 L80 380 Z" fill="#151515" stroke={color} strokeWidth="0.5" opacity="0.6"/>
        <path d="M168 280 L196 300 L200 340 L190 380 L160 380 Z" fill="#151515" stroke={color} strokeWidth="0.5" opacity="0.6"/>
        <ellipse cx="120" cy="200" rx="22" ry="40" fill="#0a0a0a" stroke="#333" strokeWidth="1"/>
        <path d="M108 180 Q120 160 132 180" fill="none" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
        <line x1="74" y1="120" x2="40" y2="105" stroke="#333" strokeWidth="1.5"/><line x1="74" y1="130" x2="40" y2="140" stroke="#333" strokeWidth="1.5"/>
        <line x1="166" y1="120" x2="200" y2="105" stroke="#333" strokeWidth="1.5"/><line x1="166" y1="130" x2="200" y2="140" stroke="#333" strokeWidth="1.5"/>
        <rect x="20" y="90" width="30" height="56" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1.5"/>
        <rect x="190" y="90" width="30" height="56" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1.5"/>
        {[0,1,2,3].map(i=>(<g key={`ft${i}`}><line x1="24" y1={98+i*12} x2="46" y2={98+i*12} stroke="#2a2a2a" strokeWidth="1"/><line x1="194" y1={98+i*12} x2="216" y2={98+i*12} stroke="#2a2a2a" strokeWidth="1"/></g>))}
        <rect x="30" y="32" width="180" height="6" rx="2" fill={color} opacity="0.8"/>
        <rect x="40" y="24" width="160" height="6" rx="2" fill={color} opacity="0.5"/>
        <rect x="26" y="20" width="8" height="22" rx="2" fill={color} opacity="0.6"/>
        <rect x="206" y="20" width="8" height="22" rx="2" fill={color} opacity="0.6"/>
        <path d="M110 80 L120 20 L130 80" fill="#111" stroke={color} strokeWidth="0.5" opacity="0.7"/>
        <line x1="120" y1="50" x2="120" y2="460" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="4 8"/>
        <text x="120" y="310" textAnchor="middle" fill={color} fontFamily={MONO} fontSize="24" fontWeight="700" opacity="0.5">7</text>
      </g>
    </svg>
  );
}

function F1CarSide({ color = "#5DCAA5", width = 120, number = "7" }) {
  return (
    <svg width={width} viewBox="0 0 200 60" fill="none" style={{ display: "block" }}>
      <rect x="10" y="38" width="24" height="18" rx="9" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
      <rect x="160" y="38" width="24" height="18" rx="9" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
      {[0,1,2].map(i=>(<g key={i}><line x1={14+i*4} y1="40" x2={14+i*4} y2="54" stroke="#2a2a2a" strokeWidth="0.5"/><line x1={164+i*4} y1="40" x2={164+i*4} y2="54" stroke="#2a2a2a" strokeWidth="0.5"/></g>))}
      <path d="M30 44 L20 36 L15 28 L30 18 L60 10 L100 6 L150 8 L175 14 L185 24 L180 36 L175 44 Z" fill="#111" stroke={color} strokeWidth="0.8"/>
      <path d="M60 10 L55 4 L45 2 L40 6" fill="none" stroke={color} strokeWidth="0.6" opacity="0.7"/>
      <path d="M175 14 L182 8 L186 8 L185 14" fill="none" stroke={color} strokeWidth="0.6" opacity="0.7"/>
      <rect x="178" y="10" width="3" height="16" rx="1" fill={color} opacity="0.6"/>
      <path d="M80 40 Q90 26 120 24 Q140 23 155 28 L160 44 Z" fill="#0a0a0a" stroke="#333" strokeWidth="0.5"/>
      <path d="M95 34 Q100 28 110 27" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="28" y1="44" x2="162" y2="44" stroke={color} strokeWidth="0.3" opacity="0.2"/>
      <text x="70" y="34" fill={color} fontFamily={MONO} fontSize="12" fontWeight="700" opacity="0.6">{number}</text>
    </svg>
  );
}

function TireTemp({ temp = 85, label = "FL", size = 64 }) {
  const pct = Math.min(Math.max((temp - 60) / 50, 0), 1);
  const tempColor = pct < 0.4 ? "#5DCAA5" : pct < 0.7 ? "#EF9F27" : "#E24B4A";
  return (
    <div style={{ textAlign: "center" }}>
      <svg width={size} height={size * 1.4} viewBox="0 0 60 84">
        <rect x="4" y="4" width="52" height="76" rx="12" fill="#111" stroke="#2a2a2a" strokeWidth="1"/>
        <rect x="8" y={8 + (1-pct)*68} width="44" height={pct*68} rx="8" fill={tempColor} opacity="0.3"/>
        <rect x="4" y="4" width="52" height="76" rx="12" fill="none" stroke={tempColor} strokeWidth="1.5" opacity="0.6"/>
        {[0,1,2,3,4].map(i=>(<line key={i} x1="12" y1={16+i*14} x2="48" y2={16+i*14} stroke={tempColor} strokeWidth="0.5" opacity="0.2"/>))}
        <text x="30" y="48" textAnchor="middle" dominantBaseline="central" fill="#e8e8e8" fontFamily={MONO} fontSize="14" fontWeight="600">{temp}°</text>
      </svg>
      <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.08em", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function TireSet({ temps = [88,86,92,90] }) {
  const labels = ["FL","FR","RL","RR"];
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px", justifyItems: "center", padding: "8px 0" }}>{temps.map((t,i)=><TireTemp key={i} temp={t} label={labels[i]} size={52}/>)}</div>);
}

function TrackMap({ highlight = 0, color = "#5DCAA5" }) {
  return (<svg width="100%" viewBox="0 0 400 200" style={{ display: "block", opacity: 0.4 }}><path d="M50 150 Q50 50 150 50 L250 50 Q350 50 350 100 Q350 150 300 160 L200 170 Q100 180 80 160 Z" fill="none" stroke="#2a2a2a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/><path d="M50 150 Q50 50 150 50 L250 50 Q350 50 350 100 Q350 150 300 160 L200 170 Q100 180 80 160 Z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="600" strokeDashoffset={600-(highlight/100)*600} style={{ transition: "stroke-dashoffset 1.5s ease" }}/><circle cx="50" cy="150" r="4" fill={color}/><text x="50" y="140" textAnchor="middle" fill="#6b6b6b" fontFamily={MONO} fontSize="8">S/F</text></svg>);
}

function SpeedTrace({ data, color = "#5DCAA5", height = 80 }) {
  const w = 560; const maxV = Math.max(...data);
  const points = data.map((v,i)=>`${(i/(data.length-1))*w},${height-(v/maxV)*(height-10)}`).join(" ");
  return (<svg width="100%" viewBox={`0 0 ${w} ${height}`} style={{ display: "block" }}><polyline points={points} fill="none" stroke={color} strokeWidth="1.5" opacity="0.7"/><polyline points={`0,${height} ${points} ${w},${height}`} fill={`${color}08`} stroke="none"/></svg>);
}

function Gauge({ value=0, max=100, label="", unit="", color="#5DCAA5", size=100 }) {
  const pct=value/max; const r=38; const circ=2*Math.PI*r; const arc=circ*0.75; const offset=arc*(1-pct);
  return (<div style={{ textAlign: "center" }}><svg width={size} height={size*0.85} viewBox="0 0 100 85"><circle cx="50" cy="50" r={r} fill="none" stroke="#1a1a1a" strokeWidth="6" strokeDasharray={`${arc} ${circ}`} strokeDashoffset="0" transform="rotate(135 50 50)" strokeLinecap="round"/><circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="6" strokeDasharray={`${arc} ${circ}`} strokeDashoffset={offset} transform="rotate(135 50 50)" strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s ease" }}/><text x="50" y="48" textAnchor="middle" dominantBaseline="central" fill="#e8e8e8" fontFamily={MONO} fontSize="16" fontWeight="600">{value}{unit && <tspan fontSize="9" fill="#6b6b6b">{unit}</tspan>}</text><text x="50" y="68" textAnchor="middle" fill="#4a4a4a" fontFamily={MONO} fontSize="7" letterSpacing="0.06em">{label}</text></svg></div>);
}

function FadeIn({ children, delay = 0 }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return (<div style={{ opacity: v?1:0, transform: v?"translateY(0)":"translateY(12px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>{children}</div>);
}

function TelemetryValue({ label, value, unit="", color="#9FE1CB", delay=0 }) {
  return (<FadeIn delay={delay}><div style={{ textAlign: "center" }}><div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div><div style={{ fontFamily: MONO, fontSize: 26, fontWeight: 600, color, letterSpacing: "-0.02em" }}>{value}<span style={{ fontSize: 13, fontWeight: 400, color: "#6b6b6b", marginLeft: 2 }}>{unit}</span></div></div></FadeIn>);
}

function DegradationChart({ data, labels, colors }) {
  const w=560,h=160,padL=40,padR=20,padT=10,padB=30; const cw=w-padL-padR,ch=h-padT-padB; const maxLap=Math.max(...data.map(d=>d.length));
  const xS=i=>padL+(i/(maxLap-1))*cw; const yS=v=>padT+(1-v/100)*ch;
  return (<svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: "block", marginTop: 16 }}>{[20,40,60,80,100].map(v=>(<g key={v}><line x1={padL} y1={yS(v)} x2={w-padR} y2={yS(v)} stroke="#2a2a2a" strokeWidth={0.5}/><text x={padL-6} y={yS(v)+4} fill="#4a4a4a" fontSize={9} fontFamily={MONO} textAnchor="end">{v}%</text></g>))}{Array.from({length:maxLap},(_,i)=>i).filter(i=>i%5===0||i===maxLap-1).map(i=>(<text key={i} x={xS(i)} y={h-4} fill="#4a4a4a" fontSize={9} fontFamily={MONO} textAnchor="middle">L{i+1}</text>))}{data.map((s,si)=>(<g key={si}><path d={s.map((v,i)=>`${i===0?"M":"L"}${xS(i)} ${yS(v)}`).join(" ")} fill="none" stroke={colors[si]} strokeWidth={2} opacity={0.9}/><text x={xS(s.length-1)+6} y={yS(s[s.length-1])+3} fill={colors[si]} fontSize={9} fontFamily={MONO}>{labels[si]}</text></g>))}</svg>);
}

function Slider({ label, value, onChange, min=0, max=100, unit="" }) {
  return (<div style={{ display: "flex", alignItems: "center", gap: 12, margin: "8px 0" }}><span style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.06em", minWidth: 110 }}>{label}</span><input type="range" min={min} max={max} value={value} onChange={e=>onChange(Number(e.target.value))} style={{ flex: 1, accentColor: "#5DCAA5" }}/><span style={{ fontFamily: MONO, fontSize: 13, color: "#9FE1CB", minWidth: 48, textAlign: "right" }}>{value}{unit}</span></div>);
}

function ActionButton({ children, onClick, color="#9FE1CB", secondary=false }) {
  const [h, setH] = useState(false);
  return (<button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ fontFamily: MONO, fontSize: 12, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", padding: "12px 32px", border: secondary?`1px solid ${color}40`:"none", borderRadius: 4, background: secondary?(h?`${color}15`:"transparent"):(h?color:`${color}dd`), color: secondary?color:"#0a0a0a", cursor: "pointer", transition: "all 0.2s ease" }}>{children}</button>);
}

function WarningBadge({ children }) { return <div style={{ fontFamily: MONO, fontSize: 10, color: "#EF9F27", background: "#EF9F2715", border: "1px solid #EF9F2740", borderRadius: 4, padding: "6px 12px", display: "inline-block", letterSpacing: "0.04em", textTransform: "uppercase" }}>{children}</div>; }
function ConfidenceBadge({ children }) { return <div style={{ fontFamily: MONO, fontSize: 10, color: "#5DCAA5", background: "#5DCAA515", border: "1px solid #5DCAA540", borderRadius: 4, padding: "6px 12px", display: "inline-block", letterSpacing: "0.04em", textTransform: "uppercase" }}>{children}</div>; }
function ScreenWrapper({ children }) { return <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 24px", maxWidth: 720, margin: "0 auto" }}>{children}</div>; }
function Divider() { return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #333, transparent)", margin: "32px 0" }}/>; }

function FinishLineScreen({ model, choice, onDone }) {
  const [phase, setPhase] = useState(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  useEffect(() => {
    const t1 = setTimeout(()=>setPhase(1), 100);
    const t2 = setTimeout(()=>setPhase(2), 2200);
    const t3 = setTimeout(()=>setPhase(3), 3400);
    const t4 = setTimeout(()=>onDoneRef.current(), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const playerColor = model === "bicycle" ? "#5DCAA5" : "#AFA9EC";
  const isTrust = choice === "trust";
  const playerPos = model === "bicycle" ? 4 : (isTrust ? 11 : 7);

  const allCars = Array.from({ length: 15 }, (_, i) => {
    if (i === playerPos - 1) return { num: "7", color: playerColor, isPlayer: true };
    const colors = ["#e8e8e8","#E24B4A","#EF9F27","#AFA9EC","#6b6b6b","#F0997B","#5DCAA5","#ED93B1","#85B7EB","#97C459","#888","#bbb","#666","#999","#aaa"];
    const nums = ["1","4","11","16","22","3","44","55","63","81","14","23","10","31","77"];
    const ci = i >= playerPos ? i : i;
    return { num: nums[ci % nums.length], color: colors[ci % colors.length], isPlayer: false };
  });

  const visibleCars = allCars.slice(0, Math.min(8, allCars.length));
  const playerIdx = visibleCars.findIndex(c => c.isPlayer);
  if (playerIdx === -1 && playerPos <= 8) { visibleCars[playerPos - 1] = allCars[playerPos - 1]; }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 4, transform: "translateX(-50%)", background: "repeating-linear-gradient(180deg, #333 0px, #333 8px, transparent 8px, transparent 16px)", opacity: 0.3 }}/>
      <div style={{ position: "absolute", left: "calc(50% - 100px)", top: 0, bottom: 0, width: 200, background: "repeating-linear-gradient(180deg, #1a1a1a 0px, #1a1a1a 20px, #111 20px, #111 40px)", opacity: 0.15 }}/>

      <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24, opacity: phase>=1?1:0, transition: "opacity 0.5s" }}>Chequered flag</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 520, padding: "0 24px" }}>
        {visibleCars.map((car, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            transform: phase >= 1 ? "translateX(0)" : "translateX(110%)",
            opacity: phase >= 1 ? 1 : 0,
            transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 180}ms, opacity 0.3s ease ${i * 180}ms`,
          }}>
            <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: car.isPlayer ? car.color : "#4a4a4a", minWidth: 28, textAlign: "right" }}>P{i + 1}</div>
            <F1CarSide color={car.color} width={car.isPlayer ? 140 : 100} number={car.num} />
            {car.isPlayer && <div style={{ fontFamily: MONO, fontSize: 10, color: car.color, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Your car</div>}
          </div>
        ))}
      </div>

      <div style={{ fontFamily: MONO, fontSize: 18, fontWeight: 600, color: "#e8e8e8", marginTop: 32, opacity: phase>=2?1:0, transition: "opacity 0.6s ease" }}>Race complete</div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: "#6b6b6b", marginTop: 6, opacity: phase>=3?1:0, transition: "opacity 0.6s ease" }}>Loading results...</div>
    </div>
  );
}

function IntroScreen({ onChoose }) {
  const [hoverColor, setHoverColor] = useState("#5DCAA580");
  const speedData = Array.from({ length: 80 }, (_, i) => 180 + Math.sin(i*0.15)*60 + Math.sin(i*0.4)*20);
  return (
    <ScreenWrapper>
      <FadeIn><div style={{ fontFamily: MONO, fontSize: 10, color: "#5DCAA5", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Race weekend simulation</div></FadeIn>
      <FadeIn delay={200}><h1 style={{ fontFamily: SANS, fontSize: 34, fontWeight: 600, color: "#e8e8e8", lineHeight: 1.2, margin: "0 0 16px" }}>Your driver needs a setup for qualifying.</h1></FadeIn>
      <FadeIn delay={300}><div style={{ margin: "0 0 16px", opacity: 0.5 }}><SpeedTrace data={speedData} color={hoverColor.replace("80","")} height={50}/></div></FadeIn>
      <FadeIn delay={400}>
        <p style={{ fontFamily: SANS, fontSize: 15, color: "#8a8a8a", lineHeight: 1.7, margin: "0 0 12px" }}>You are the race engineer for a midfield Formula 1 team. Three practice sessions stand between you and qualifying. Every setup decision is informed by simulation.</p>
        <p style={{ fontFamily: SANS, fontSize: 15, color: "#8a8a8a", lineHeight: 1.7, margin: "0 0 24px" }}>More detail sounds better. It is not always better.</p>
      </FadeIn>
      <FadeIn delay={500}><div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><F1CarTop color={hoverColor} width={120}/></div></FadeIn>
      <FadeIn delay={600}><div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Choose your simulation tool</div></FadeIn>
      <FadeIn delay={700}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          {[
            { id: "bicycle", color: "#5DCAA5", label: "Bicycle model", stats: ["6 parameters","Runs in seconds","Easy to validate","You know where it is wrong"], note: "Tradeoff: ignores suspension compliance, thermal coupling, load transfer distribution" },
            { id: "multibody", color: "#AFA9EC", label: "Multibody model", stats: ["35+ parameters","Takes minutes to converge","Captures more physics","Hard to isolate errors"], note: "Tradeoff: error source hidden among dozens of interdependent parameters" },
          ].map(m => (
            <div key={m.id} onClick={()=>onChoose(m.id)}
              onMouseEnter={e=>{ setHoverColor(m.color); e.currentTarget.style.borderColor=m.color; e.currentTarget.style.background=`${m.color}15`; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ setHoverColor("#5DCAA580"); e.currentTarget.style.borderColor=`${m.color}40`; e.currentTarget.style.background=`${m.color}08`; e.currentTarget.style.transform="translateY(0)"; }}
              style={{ border: `1px solid ${m.color}40`, borderRadius: 8, padding: 20, cursor: "pointer", transition: "all 0.25s", background: `${m.color}08` }}>
              <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: m.color, marginBottom: 10 }}>{m.label}</div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", lineHeight: 1.9 }}>{m.stats.map((s,i)=><div key={i}>{s}</div>)}</div>
              <div style={{ marginTop: 12, fontFamily: SANS, fontSize: 12, color: "#555", fontStyle: "italic", lineHeight: 1.5 }}>{m.note}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </ScreenWrapper>
  );
}

function Round1Screen({ model, onContinue }) {
  const color = model==="bicycle"?"#5DCAA5":"#AFA9EC";
  const [brakeBias, setBrakeBias] = useState(57);
  const [arbStiff, setArbStiff] = useState(4);
  const [trackProg, setTrackProg] = useState(0);
  useEffect(()=>{ const t=setTimeout(()=>setTrackProg(100),500); return ()=>clearTimeout(t); },[]);

  const baseLap = 92.4;
  const brakeDelta = (brakeBias - 55) * -0.015;
  const arbDelta = (arbStiff - 3) * -0.008;
  const predictedLap = baseLap + brakeDelta + arbDelta;
  const mins = Math.floor(predictedLap / 60);
  const secs = (predictedLap % 60).toFixed(1);
  const predictedStr = `${mins}:${secs.padStart(4, "0")}`;
  const actualLap = predictedLap + 0.2;
  const actualSecs = (actualLap % 60).toFixed(1);
  const actualStr = `${mins}:${actualSecs.padStart(4, "0")}`;
  const delta = (actualLap - predictedLap).toFixed(1);

  return (
    <ScreenWrapper>
      <FadeIn><div style={{ fontFamily: MONO, fontSize: 10, color: "#EF9F27", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Friday practice — round 1 of 3</div></FadeIn>
      <FadeIn delay={200}><h2 style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: "#e8e8e8", margin: "0 0 6px" }}>Moderate conditions</h2><p style={{ fontFamily: SANS, fontSize: 14, color: "#6b6b6b", margin: "0 0 16px" }}>Track temperature 25 C. Minimal wind. The circuit is green but rubbering in normally.</p></FadeIn>
      <FadeIn delay={400}><TrackMap highlight={trackProg} color={color}/></FadeIn>
      <FadeIn delay={600}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center", margin: "16px 0 24px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}><F1CarTop color={color} width={80}/></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <TelemetryValue label="Prediction" value={predictedStr} color={color}/>
            <TelemetryValue label="Actual" value={actualStr} color="#e8e8e8"/>
            <TelemetryValue label="Delta" value={`+${delta}`} unit="s" color="#5DCAA5"/>
          </div>
          <TireSet temps={[88,86,92,90]}/>
        </div>
      </FadeIn>
      <FadeIn delay={900}>
        <div style={{ border: "1px solid #2a2a2a", borderRadius: 8, padding: 16, marginBottom: 20 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Setup adjustments</div>
          <Slider label="Front brake bias" value={brakeBias} onChange={setBrakeBias} min={50} max={65} unit="%"/>
          <Slider label="Front ARB" value={arbStiff} onChange={setArbStiff} min={1} max={10} unit=" clicks"/>
          <div style={{ fontFamily: MONO, fontSize: 10, color: "#4a4a4a", marginTop: 8 }}>Brake delta: {brakeDelta>=0?"+":""}{(brakeDelta*1000).toFixed(0)}ms | ARB delta: {arbDelta>=0?"+":""}{(arbDelta*1000).toFixed(0)}ms</div>
        </div>
      </FadeIn>
      <FadeIn delay={1100}><div style={{ background: "#5DCAA510", border: "1px solid #5DCAA530", borderRadius: 8, padding: 16, marginBottom: 24 }}><p style={{ fontFamily: SANS, fontSize: 14, color: "#9FE1CB", margin: 0, lineHeight: 1.6 }}>Both models would have gotten you here. Under moderate conditions, fidelity barely matters.</p></div></FadeIn>
      <FadeIn delay={1200}><div style={{ textAlign: "center" }}><ActionButton onClick={onContinue}>Continue to Saturday</ActionButton></div></FadeIn>
    </ScreenWrapper>
  );
}

function Round2Screen({ model, onChoice }) {
  const isBicycle = model==="bicycle"; const color = isBicycle?"#5DCAA5":"#AFA9EC";
  return (
    <ScreenWrapper>
      <FadeIn><div style={{ fontFamily: MONO, fontSize: 10, color: "#E24B4A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Saturday morning — round 2 of 3</div></FadeIn>
      <FadeIn delay={200}><h2 style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: "#e8e8e8", margin: "0 0 6px" }}>Conditions have shifted</h2><p style={{ fontFamily: SANS, fontSize: 14, color: "#6b6b6b", margin: "0 0 16px" }}>Track temperature reads 42 C. Tire degradation is higher than expected. The grip window has shifted.</p></FadeIn>
      <FadeIn delay={400}><div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, alignItems: "center", margin: "0 0 20px" }}><TireSet temps={[104,101,112,108]}/><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><Gauge value={42} max={60} label="Track temp" unit="°C" color="#E24B4A" size={90}/><Gauge value={isBicycle?78:95} max={100} label="Model confidence" unit="%" color={isBicycle?"#EF9F27":"#5DCAA5"} size={90}/></div><F1CarTop color="#E24B4A" width={70}/></div></FadeIn>
      <FadeIn delay={600}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}><TelemetryValue label="Track temp" value="42" unit="C" color="#E24B4A"/><TelemetryValue label="Prediction" value={isBicycle?"1:33.8":"1:33.1"} color={color}/><div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{isBicycle?<WarningBadge>Outside validated range</WarningBadge>:<ConfidenceBadge>All parameters nominal</ConfidenceBadge>}</div></div></FadeIn>
      <FadeIn delay={800}><div style={{ border: `1px solid ${color}40`, borderRadius: 8, padding: 16, marginBottom: 20 }}>{isBicycle?(<><p style={{ fontFamily: SANS, fontSize: 13, color: "#8a8a8a", margin: "0 0 8px", lineHeight: 1.6 }}>Your model flags something. The tire parameters were characterized at 28 C surface temperature. You are now well outside that range.</p><p style={{ fontFamily: SANS, fontSize: 13, color: "#EF9F27", margin: 0 }}>You have a choice.</p></>):(<><p style={{ fontFamily: SANS, fontSize: 13, color: "#8a8a8a", margin: "0 0 8px", lineHeight: 1.6 }}>Your model runs for four minutes and returns 1:33.1. No warnings. Thirty-five parameters were computed. The number feels authoritative.</p><p style={{ fontFamily: SANS, fontSize: 13, color: "#AFA9EC", margin: 0 }}>You have a choice.</p></>)}</div></FadeIn>
      <FadeIn delay={1000}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}><ActionButton onClick={()=>onChoice("trust")} color={color} secondary>Trust the output</ActionButton><ActionButton onClick={()=>onChoice("question")} color={color} secondary>{isBicycle?"Adjust manually":"Question it"}</ActionButton></div></FadeIn>
    </ScreenWrapper>
  );
}

function Round2ResultScreen({ model, choice, onContinue }) {
  const results = { bicycle: { trust: { predicted: "1:33.8", actual: "1:34.2", delta: "+0.4s", deltaColor: "#EF9F27", msg: "You are off by four tenths, but you know exactly why: the tire model was extrapolating. You can correct for this in qualifying prep." }, question: { predicted: "1:33.8", actual: "1:34.1", delta: "+0.3s", deltaColor: "#5DCAA5", msg: "You applied a correction from seasonal thermal trends. Close enough. Your driver reports confidence in the rear under braking." } }, multibody: { trust: { predicted: "1:33.1", actual: "1:34.0", delta: "+0.9s", deltaColor: "#E24B4A", msg: "You are off by nine tenths. The rear is sliding under braking. Something failed in the model, but which of 35 parameters? Qualifying is in four hours." }, question: { predicted: "1:33.1", actual: "1:33.7", delta: "+0.6s", deltaColor: "#EF9F27", msg: "You spent FP3 running diagnostics channel by channel. The tire thermal model is likely the culprit, but you cannot pin it down. You go with a compromise." } } };
  const r = results[model][choice];
  return (
    <ScreenWrapper>
      <FadeIn><div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Saturday result</div></FadeIn>
      <FadeIn delay={200}><div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><F1CarTop color={r.deltaColor} width={100} glow/></div></FadeIn>
      <FadeIn delay={400}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}><TelemetryValue label="Predicted" value={r.predicted} color="#6b6b6b"/><TelemetryValue label="Actual" value={r.actual} color="#e8e8e8"/><TelemetryValue label="Error" value={r.delta} color={r.deltaColor}/></div></FadeIn>
      <FadeIn delay={600}><div style={{ border: `1px solid ${r.deltaColor}40`, borderRadius: 8, padding: 16, marginBottom: 24 }}><p style={{ fontFamily: SANS, fontSize: 14, color: "#b0b0b0", margin: 0, lineHeight: 1.7 }}>{r.msg}</p></div></FadeIn>
      <FadeIn delay={800}><div style={{ textAlign: "center" }}><ActionButton onClick={onContinue}>Continue to race day</ActionButton></div></FadeIn>
    </ScreenWrapper>
  );
}

function Round3Screen({ model, choice, onContinue }) {
  const outcomes = { bicycle: { trust: { pos: "P5", pts: 10, color: "#5DCAA5", lines: ["Consistent through the stints","Understood the car's real limits","Setup conservative but built on knowledge","Tire management solid: accounted for drift"] }, question: { pos: "P5", pts: 10, color: "#5DCAA5", lines: ["Manual corrections paid off all weekend","Knew where the model was strong and weak","Driver confident in the balance","Solid points for a midfield team"] } }, multibody: { trust: { pos: "P12", pts: 0, color: "#E24B4A", lines: ["Tires fell off a cliff by lap 15","Thermal error compounded unseen","Pitted early, lost track position","Setup looked optimal on screen"] }, question: { pos: "P8", pts: 4, color: "#EF9F27", lines: ["Spent Saturday debugging the tool","Compromise setup: safe but unoptimized","Car was driveable but slow","Time lost to the model, not the car"] } } };
  const o = outcomes[model][choice];
  const bicycleDeg = Array.from({length:30},(_,i)=>Math.round(100-i*1.8));
  const trustedDeg = Array.from({length:30},(_,i)=>Math.round(i<14?100-i*2:Math.max(100-28-(i-14)*4.5,5)));
  const questionedDeg = Array.from({length:30},(_,i)=>Math.round(100-i*2.2));
  return (
    <ScreenWrapper>
      <FadeIn><div style={{ fontFamily: MONO, fontSize: 10, color: "#EF9F27", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Race day — round 3 of 3</div></FadeIn>
      <FadeIn delay={200}><div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 20 }}><F1CarTop color={o.color} width={80} glow/><div style={{ textAlign: "center" }}><div style={{ fontFamily: MONO, fontSize: 56, fontWeight: 700, color: o.color, letterSpacing: "-0.04em" }}>{o.pos}</div><div style={{ fontFamily: MONO, fontSize: 14, color: o.pts>0?o.color:"#6b6b6b" }}>{o.pts} points</div></div></div></FadeIn>
      <FadeIn delay={500}><div style={{ border: `1px solid ${o.color}40`, borderRadius: 8, padding: 16, marginBottom: 20 }}>{o.lines.map((line,i)=>(<div key={i} style={{ fontFamily: SANS, fontSize: 13, color: "#b0b0b0", lineHeight: 1.8, paddingLeft: 12, borderLeft: `2px solid ${o.color}40`, marginBottom: i<o.lines.length-1?8:0 }}>{line}</div>))}</div></FadeIn>
      <FadeIn delay={800}><div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>Tire grip over race distance</div><div style={{ border: "1px solid #2a2a2a", borderRadius: 8, padding: "12px 16px" }}><DegradationChart data={[bicycleDeg,trustedDeg,questionedDeg]} labels={["Bicycle","Complex (trusted)","Complex (questioned)"]} colors={["#5DCAA5","#E24B4A","#EF9F27"]}/></div></FadeIn>
      <FadeIn delay={1100}><div style={{ textAlign: "center", marginTop: 20 }}><ActionButton onClick={onContinue}>See what happened</ActionButton></div></FadeIn>
    </ScreenWrapper>
  );
}

const BICYCLE_PARAMS = ["Mass", "Wheelbase", "CoG height", "Cornering stiffness (F)", "Cornering stiffness (R)", "Yaw inertia"];
const MULTIBODY_PARAMS = ["Sprung mass","Unsprung mass (FL)","Unsprung mass (FR)","Unsprung mass (RL)","Unsprung mass (RR)","CoG x","CoG y","CoG z","Roll inertia","Pitch inertia","Yaw inertia","Front spring rate","Rear spring rate","Front damper (bump)","Front damper (rebound)","Rear damper (bump)","Rear damper (rebound)","Front ARB stiffness","Rear ARB stiffness","Front ride height","Rear ride height","Front camber","Rear camber","Front toe","Rear toe","Caster angle","KPI","Ackermann %","Tire Cx (F)","Tire Cx (R)","Tire Cy (F)","Tire Cy (R)","Tire thermal coeff","Tire pressure sens","Aero CoP","CdA","ClA front","ClA rear"];

function ParameterGrid({ params, color, flashErrors = false }) {
  const [flashIdx, setFlashIdx] = useState(new Set());
  useEffect(() => {
    if (!flashErrors) return;
    const interval = setInterval(() => {
      const count = 2 + Math.floor(Math.random() * 3);
      const indices = new Set();
      while (indices.size < count) indices.add(Math.floor(Math.random() * params.length));
      setFlashIdx(indices);
      setTimeout(() => setFlashIdx(new Set()), 400);
    }, 1200);
    return () => clearInterval(interval);
  }, [flashErrors, params.length]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
      {params.map((p, i) => {
        const isFlashing = flashIdx.has(i);
        return (
          <div key={i} style={{
            fontFamily: MONO, fontSize: 8, padding: "3px 6px", borderRadius: 3,
            background: isFlashing ? "#E24B4A30" : `${color}10`,
            border: `1px solid ${isFlashing ? "#E24B4A" : color + "30"}`,
            color: isFlashing ? "#E24B4A" : `${color}aa`,
            transition: "all 0.2s ease",
            letterSpacing: "0.02em",
          }}>{p}</div>
        );
      })}
    </div>
  );
}

function WhatIfComparison({ model, choice }) {
  const allOutcomes = {
    bicycle: { trust: { pos: "P5", pts: 10, color: "#5DCAA5", summary: "Off by 0.4s but knew why. Conservative setup, consistent race." }, question: { pos: "P5", pts: 10, color: "#5DCAA5", summary: "Manual correction worked. Driver confident, solid points." } },
    multibody: { trust: { pos: "P12", pts: 0, color: "#E24B4A", summary: "Off by 0.9s, could not diagnose. Tires failed by lap 15." }, question: { pos: "P8", pts: 4, color: "#EF9F27", summary: "Spent time debugging instead of developing. Compromise setup." } },
  };

  const yourResult = allOutcomes[model][choice];
  const otherModel = model === "bicycle" ? "multibody" : "bicycle";
  const otherTrust = allOutcomes[otherModel]["trust"];
  const otherQuestion = allOutcomes[otherModel]["question"];

  return (
    <div>
      <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>What if you picked the other model?</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <div style={{ border: `2px solid ${yourResult.color}60`, borderRadius: 8, padding: 12, background: `${yourResult.color}08` }}>
          <div style={{ fontFamily: MONO, fontSize: 9, color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Your path</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <F1CarSide color={yourResult.color} width={60} number="7" />
            <div><div style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700, color: yourResult.color }}>{yourResult.pos}</div><div style={{ fontFamily: MONO, fontSize: 10, color: yourResult.pts > 0 ? yourResult.color : "#6b6b6b" }}>{yourResult.pts} pts</div></div>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 11, color: "#8a8a8a", lineHeight: 1.5 }}>{yourResult.summary}</div>
        </div>
        <div style={{ border: "1px solid #2a2a2a", borderRadius: 8, padding: 12 }}>
          <div style={{ fontFamily: MONO, fontSize: 9, color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{otherModel === "bicycle" ? "Bicycle" : "Multibody"} (trusted)</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <F1CarSide color={otherTrust.color} width={60} number="7" />
            <div><div style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700, color: otherTrust.color }}>{otherTrust.pos}</div><div style={{ fontFamily: MONO, fontSize: 10, color: otherTrust.pts > 0 ? otherTrust.color : "#6b6b6b" }}>{otherTrust.pts} pts</div></div>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 11, color: "#6b6b6b", lineHeight: 1.5 }}>{otherTrust.summary}</div>
        </div>
        <div style={{ border: "1px solid #2a2a2a", borderRadius: 8, padding: 12 }}>
          <div style={{ fontFamily: MONO, fontSize: 9, color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{otherModel === "bicycle" ? "Bicycle" : "Multibody"} (questioned)</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <F1CarSide color={otherQuestion.color} width={60} number="7" />
            <div><div style={{ fontFamily: MONO, fontSize: 20, fontWeight: 700, color: otherQuestion.color }}>{otherQuestion.pos}</div><div style={{ fontFamily: MONO, fontSize: 10, color: otherQuestion.pts > 0 ? otherQuestion.color : "#6b6b6b" }}>{otherQuestion.pts} pts</div></div>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 11, color: "#6b6b6b", lineHeight: 1.5 }}>{otherQuestion.summary}</div>
        </div>
      </div>
    </div>
  );
}

function RevealScreen({ model, choice, onContinue }) {
  return (
    <ScreenWrapper>
      <FadeIn><div style={{ fontFamily: MONO, fontSize: 10, color: "#AFA9EC", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>The reveal</div></FadeIn>
      <FadeIn delay={200}><h2 style={{ fontFamily: SANS, fontSize: 30, fontWeight: 600, color: "#e8e8e8", margin: "0 0 16px", lineHeight: 1.2 }}>This has a name.</h2></FadeIn>

      <FadeIn delay={400}><WhatIfComparison model={model} choice={choice} /></FadeIn>

      <FadeIn delay={700}><Divider/></FadeIn>

      <FadeIn delay={800}><p style={{ fontFamily: SANS, fontSize: 15, color: "#8a8a8a", lineHeight: 1.7, margin: "0 0 10px" }}>The bicycle model was less accurate on paper. But the engineer who used it understood its boundaries, corrected for them, and made better decisions.</p><p style={{ fontFamily: SANS, fontSize: 15, color: "#8a8a8a", lineHeight: 1.7, margin: "0 0 20px" }}>The multibody model had more physics, more parameters. But that sophistication masked where it was wrong.</p></FadeIn>
      <FadeIn delay={1000}><div style={{ borderLeft: "3px solid #AFA9EC", paddingLeft: 16, marginBottom: 20 }}><div style={{ fontFamily: MONO, fontSize: 16, fontWeight: 600, color: "#AFA9EC", marginBottom: 6 }}>Automation bias</div><p style={{ fontFamily: SANS, fontSize: 14, color: "#b0b0b0", margin: 0, lineHeight: 1.7 }}>The tendency to favor the output of an automated system over your own judgment, especially when the system appears sophisticated and confident.</p><p style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", margin: "10px 0 0", lineHeight: 1.6 }}>A systematic review of 74 studies found the primary driver is miscalibrated trust. (Lyell and Coiera, 2017)</p></div></FadeIn>
      <FadeIn delay={1200}><div style={{ borderLeft: "3px solid #E24B4A", paddingLeft: 16, marginBottom: 24 }}><div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 600, color: "#E24B4A", marginBottom: 6 }}>This is not hypothetical</div><p style={{ fontFamily: SANS, fontSize: 14, color: "#b0b0b0", fontStyle: "italic", margin: "0 0 10px", lineHeight: 1.7 }}>"You have simplified models back here in the factory and those simplified models are powerful for steering you one way or the other. But all of them have their shortcomings and all of them have their correlation issues."</p><p style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", margin: 0 }}>James Allison, Mercedes Technical Director, on the team's poor start to 2024.</p></div></FadeIn>

      <FadeIn delay={1400}><Divider/></FadeIn>

      <FadeIn delay={1500}>
        <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>What does "6 vs 35+" actually look like?</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div style={{ border: "1px solid #5DCAA530", borderRadius: 8, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
              <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 700, color: "#5DCAA5" }}>6</div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", textTransform: "uppercase" }}>Bicycle params</div>
            </div>
            <ParameterGrid params={BICYCLE_PARAMS} color="#5DCAA5" />
            <div style={{ fontFamily: SANS, fontSize: 11, color: "#5DCAA5", marginTop: 10 }}>You can check every single one.</div>
          </div>
          <div style={{ border: "1px solid #AFA9EC30", borderRadius: 8, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
              <div style={{ fontFamily: MONO, fontSize: 28, fontWeight: 700, color: "#AFA9EC" }}>38</div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6b6b", textTransform: "uppercase" }}>Multibody params</div>
            </div>
            <ParameterGrid params={MULTIBODY_PARAMS} color="#AFA9EC" flashErrors />
            <div style={{ fontFamily: SANS, fontSize: 11, color: "#E24B4A", marginTop: 10 }}>The error is hiding in one of these. Which one?</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={1800}><div style={{ textAlign: "center" }}><ActionButton onClick={onContinue}>This is not just a motorsport problem</ActionButton></div></FadeIn>
    </ScreenWrapper>
  );
}

function ClosingScreen({ onRestart }) {
  const parallels = [{field:"Finance",desc:"Pricing models built on assumptions about market conditions that may no longer hold",color:"#F0997B"},{field:"Medicine",desc:"Clinical decision support trained on populations that may not match the patient",color:"#ED93B1"},{field:"Software",desc:"A/B tests that measured the wrong metric with high statistical confidence",color:"#EF9F27"}];
  return (
    <ScreenWrapper>
      <FadeIn><h2 style={{ fontFamily: SANS, fontSize: 30, fontWeight: 600, color: "#e8e8e8", margin: "0 0 20px", lineHeight: 1.2 }}>This is not just a motorsport problem.</h2></FadeIn>
      <FadeIn delay={300}><div style={{ display: "grid", gap: 10, marginBottom: 24 }}>{parallels.map((p,i)=>(<FadeIn key={i} delay={400+i*200}><div style={{ border: `1px solid ${p.color}30`, borderRadius: 8, padding: 14, display: "flex", gap: 14, alignItems: "flex-start" }}><div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: p.color, textTransform: "uppercase", letterSpacing: "0.06em", minWidth: 68 }}>{p.field}</div><div style={{ fontFamily: SANS, fontSize: 13, color: "#8a8a8a", lineHeight: 1.6 }}>{p.desc}</div></div></FadeIn>))}</div></FadeIn>
      <FadeIn delay={1100}><div style={{ textAlign: "center", padding: "28px 20px", border: "1px solid #333", borderRadius: 12, marginBottom: 24 }}><p style={{ fontFamily: SANS, fontSize: 18, fontWeight: 500, color: "#e8e8e8", margin: "0 0 6px", lineHeight: 1.4 }}>The tool is never the problem.</p><p style={{ fontFamily: SANS, fontSize: 14, color: "#6b6b6b", margin: 0, lineHeight: 1.6 }}>The problem is the gap between what the tool assumes and what the user understands about those assumptions.</p></div></FadeIn>
      <FadeIn delay={1400}><p style={{ fontFamily: SANS, fontSize: 15, color: "#9FE1CB", textAlign: "center", margin: "0 0 24px", lineHeight: 1.6 }}>The goal is not to distrust your tools. It is to know what question the model can actually answer before you ask it.</p></FadeIn>
      <FadeIn delay={1600}><Divider/><div style={{ fontFamily: MONO, fontSize: 9, color: "#4a4a4a", lineHeight: 2.2, marginBottom: 20, textAlign: "center" }}>Sagmeister et al., TU Munich (2025) | Ly et al., UT Austin (2025) | Chrosniak et al., IEEE RA-L (2024)<br/>Singh & Sivaramakrishnan (2023) | Siegler et al., SAE (2000) | Heilmeier et al., IEEE (2019)<br/>Lyell & Coiera, JAMIA (2017) | Gosiewska et al., Info. Sci. (2021) | Allison, Sky Sports F1 (2024)</div><div style={{ textAlign: "center" }}><ActionButton onClick={onRestart} secondary color="#6b6b6b">Start over</ActionButton></div></FadeIn>
    </ScreenWrapper>
  );
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.INTRO);
  const [model, setModel] = useState(null);
  const [choice, setChoice] = useState(null);
  const topRef = useRef(null);
  const scrollTop = () => { if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" }); };
  const goTo = (s) => { setScreen(s); setTimeout(scrollTop, 50); };

  return (
    <div ref={topRef} style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      {screen === SCREENS.INTRO && <IntroScreen onChoose={(m)=>{setModel(m);goTo(SCREENS.ROUND1);}}/>}
      {screen === SCREENS.ROUND1 && <Round1Screen model={model} onContinue={()=>goTo(SCREENS.ROUND2)}/>}
      {screen === SCREENS.ROUND2 && <Round2Screen model={model} onChoice={(c)=>{setChoice(c);goTo(SCREENS.ROUND2_RESULT);}}/>}
      {screen === SCREENS.ROUND2_RESULT && <Round2ResultScreen model={model} choice={choice} onContinue={()=>goTo(SCREENS.FINISH_LINE)}/>}
      {screen === SCREENS.FINISH_LINE && <FinishLineScreen model={model} choice={choice} onDone={()=>goTo(SCREENS.ROUND3)}/>}
      {screen === SCREENS.ROUND3 && <Round3Screen model={model} choice={choice} onContinue={()=>goTo(SCREENS.REVEAL)}/>}
      {screen === SCREENS.REVEAL && <RevealScreen model={model} choice={choice} onContinue={()=>goTo(SCREENS.CLOSING)}/>}
      {screen === SCREENS.CLOSING && <ClosingScreen onRestart={()=>{setModel(null);setChoice(null);goTo(SCREENS.INTRO);}}/>}
    </div>
  );
}