<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";

const GlobalStyle = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'DM Sans', sans-serif; background: #F0F4F8; color: #1a1a2e; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .card {
      background: #fff;
      border-radius: 20px;
      border: 1px solid #E2ECF8;
      padding: 32px 28px;
      box-shadow: 0 2px 16px rgba(21,101,192,0.06);
      transition: box-shadow 0.3s, transform 0.3s;
    }
    .card:hover {
      box-shadow: 0 8px 32px rgba(21,101,192,0.13);
      transform: translateY(-2px);
    }

    .nav-link {
      background: none; border: none; cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-size: 12.5px; font-weight: 500;
      color: rgba(255,255,255,0.75);
      padding: 10px 14px; white-space: nowrap;
      border-bottom: 2px solid transparent;
      transition: color 0.2s, border-color 0.2s;
      letter-spacing: 0.3px;
    }
    .nav-link:hover, .nav-link.active {
      color: #fff;
      border-bottom-color: #64B5F6;
    }

    .stat-card {
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.22);
      border-radius: 16px;
      padding: 18px 22px;
      transition: background 0.25s, transform 0.25s;
    }
    .stat-card:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-3px);
    }

    .badge {
      display: inline-block;
      padding: 4px 13px; border-radius: 20px;
      font-size: 12px; font-weight: 600;
      letter-spacing: 0.4px;
    }

    .obj-item {
      display: flex; align-items: flex-start; gap: 14px;
      background: #fff; border: 1px solid #E2ECF8;
      border-radius: 14px; padding: 16px 18px;
      transition: border-color 0.25s, box-shadow 0.25s;
    }
    .obj-item:hover {
      border-color: #90CAF9;
      box-shadow: 0 4px 16px rgba(21,101,192,0.09);
    }

    .comp-card {
      background: #fff;
      border-radius: 18px;
      padding: 22px 20px;
      border: 1px solid #E2ECF8;
      border-top-width: 4px;
      transition: transform 0.25s, box-shadow 0.25s;
    }
    .comp-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 36px rgba(0,0,0,0.09);
    }

    .timeline-dot {
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 15px; color: #fff;
      flex-shrink: 0; z-index: 1;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .timeline-card {
      flex: 1; background: #fff;
      border-radius: 14px; padding: 16px 20px;
      border: 1px solid #E2ECF8;
      border-left-width: 3px;
      transition: box-shadow 0.25s;
    }
    .timeline-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); }

    .budget-row { transition: background 0.2s; }
    .budget-row:hover { background: #EFF6FF !important; }

    .outcome-card {
      background: #fff; border: 1px solid #C8E6C9;
      border-left: 4px solid #2E7D32;
      border-radius: 12px; padding: 16px 18px;
      display: flex; gap: 12px; align-items: flex-start;
      transition: transform 0.22s, box-shadow 0.22s;
    }
    .outcome-card:hover {
      transform: translateX(4px);
      box-shadow: 0 4px 16px rgba(46,125,50,0.1);
    }

    .sdg-pill {
      border-radius: 14px; padding: 16px 20px;
      display: flex; flex-direction: column; gap: 8px;
      border: 2px solid; transition: transform 0.22s, box-shadow 0.22s;
      background: #fff;
    }
    .sdg-pill:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }

    .progress-bar-fill {
      height: 100%; border-radius: 4px;
      transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
    }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #F0F4F8; }
    ::-webkit-scrollbar-thumb { background: #90CAF9; border-radius: 3px; }
  `}</style>
);

const ORG = "Shri Vishvkarma Charitable and Education Society";
const PROJECT = "Shiksha Vikas Abhiyan";
const SUBTITLE = "Quality Education & Digital Learning Initiative";

const COMPONENTS = [
  { title: "Academic Support Program", icon: "📚", color: "#1565C0",
    items: ["After-school coaching classes", "Subject-wise mentoring & assessments", "Regular academic performance tracking"] },
  { title: "Digital Learning Centers", icon: "💻", color: "#2E7D32",
    items: ["20 computers lab setup", "Internet & digital platforms", "Digital literacy training"] },
  { title: "Study Materials & Kits", icon: "🎒", color: "#E65100",
    items: ["Books, notebooks & stationery", "School bags & educational kits", "Digital learning resources"] },
  { title: "Career Guidance", icon: "🎯", color: "#6A1B9A",
    items: ["Career counseling sessions", "Higher education awareness", "Scholarship guidance programs"] },
  { title: "Community Awareness", icon: "🏘️", color: "#880E4F",
    items: ["Parent counseling sessions", "Village-level campaigns", "Community engagement activities"] },
];

const PHASES = [
  { phase: "Phase 1", time: "Month 1–3",   act: "Baseline survey & planning",             color: "#1565C0" },
  { phase: "Phase 2", time: "Month 4–8",   act: "Digital learning center setup",           color: "#2E7D32" },
  { phase: "Phase 3", time: "Month 9–18",  act: "Academic support & training programs",    color: "#E65100" },
  { phase: "Phase 4", time: "Month 19–22", act: "Career guidance & awareness campaigns",   color: "#6A1B9A" },
  { phase: "Phase 5", time: "Month 23–24", act: "Evaluation & final reporting",            color: "#880E4F" },
];

const BUDGET_ITEMS = [
  { head: "Digital Learning Center Setup",      amount: 900000 },
  { head: "Academic Support Programs",           amount: 750000 },
  { head: "Study Materials & Educational Kits",  amount: 420000 },
  { head: "Teachers & Trainers Honorarium",      amount: 450000 },
  { head: "Project Coordinator & Staff",         amount: 320000 },
  { head: "Career Guidance Programs",            amount: 120000 },
  { head: "Awareness Programs",                  amount: 110000 },
  { head: "Monitoring & Evaluation",             amount: 120000 },
  { head: "Administrative Expenses",             amount: 130000 },
  { head: "Contingency",                         amount: 130000 },
];

const BAR_COLORS = ["#1565C0","#2E7D32","#E65100","#6A1B9A","#880E4F","#00695C","#BF360C","#0277BD","#4E342E","#37474F"];
const TOTAL = BUDGET_ITEMS.reduce((s, i) => s + i.amount, 0);
const fmt = (n) => "₹" + n.toLocaleString("en-IN");

const OUTCOMES = [
  "650 students receiving improved educational support",
  "Increased digital literacy among rural students",
  "Improved academic performance & reduced dropout rates",
  "Enhanced awareness about higher education opportunities",
  "Strengthened community educational infrastructure",
];

const MONITORING = [
  { icon: "📈", text: "Monthly academic performance tracking" },
  { icon: "✅", text: "Attendance & participation monitoring" },
  { icon: "🖥️", text: "Digital lab usage tracking" },
  { icon: "📋", text: "Beneficiary feedback surveys" },
  { icon: "📑", text: "Mid-term & final evaluation reports" },
  { icon: "🔍", text: "Financial audit & utilization certificate" },
];

const SUSTAINABILITY = [
  { icon: "🤝", title: "Community Participation", desc: "Continued programs through active community involvement" },
  { icon: "🏫", title: "School Collaboration",    desc: "Partnership with local schools & institutions" },
  { icon: "💼", title: "CSR Partnerships",        desc: "Long-term corporate social responsibility support" },
  { icon: "🏛️", title: "Government Integration",  desc: "Integration with government education schemes" },
];

const SDGS = [
  { code: "CSR Schedule VII", label: "Promoting Education",           color: "#1565C0" },
  { code: "SDG 4",            label: "Quality Education",             color: "#E65100" },
  { code: "SDG 8",            label: "Decent Work & Economic Growth", color: "#2E7D32" },
  { code: "SDG 10",           label: "Reduced Inequalities",          color: "#880E4F" },
];

const NAV_SECTIONS = [
  "Summary","About","Problem","Objectives","Components","Timeline","Budget","Outcomes","Monitoring","Sustainability","SDG",
];

function useVisible(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function AnimSection({ id, children }) {
  const ref = useRef(null);
  const visible = useVisible(ref);
  return (
    <div ref={ref} id={id} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      marginBottom: 28,
    }}>
      {children}
    </div>
  );
}

function SectionCard({ title, icon, children }) {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "linear-gradient(135deg,#1565C0,#42A5F5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, flexShrink: 0,
          boxShadow: "0 4px 12px rgba(21,101,192,0.25)"
        }}>{icon}</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22, fontWeight: 700, color: "#0D47A1", lineHeight: 1.2
        }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Counter({ target, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const visible = useVisible(ref);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return (
    <span ref={ref} style={{ fontFamily: "'Playfair Display', serif" }}>
      {prefix}{val}{suffix}
    </span>
  );
}

function BudgetBar({ pct, color, visible }) {
  return (
    <div style={{ width: 80, height: 6, background: "#EFF6FF", borderRadius: 4, overflow: "hidden" }}>
      <div className="progress-bar-fill" style={{ width: visible ? `${pct}%` : "0%", background: color }} />
    </div>
  );
}

export default function ProjectReport({ onLogout }) {
  const [activeNav, setActiveNav] = useState("Summary");
  const [budgetVisible, setBudgetVisible] = useState(false);
  const budgetRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setBudgetVisible(true);
    }, { threshold: 0.1 });
    if (budgetRef.current) obs.observe(budgetRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const ids = NAV_SECTIONS.map(s => s.replace(/\s+/g, "-"));
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top < 120) {
          setActiveNav(NAV_SECTIONS[i]); break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (label) => {
    const id = label.replace(/\s+/g, "-");
=======
import { useState } from "react";

const data = {
  orgName: "Shri Vishvkarma Charitable and Education Society",
  projectTitle: "Shiksha Vikas Abhiyan",
  subtitle: "Quality Education & Digital Learning Initiative",
  budget: "₹34,50,000",
  duration: "24 Months",
  beneficiaries: 650,
  executive: `Shri Vishvkarma Charitable and Education Society proposes the "Shiksha Vikas Abhiyan", an initiative aimed at improving access to quality education and promoting digital learning among students from rural and economically weaker communities. The project focuses on strengthening academic support, developing digital learning infrastructure, and ensuring access to educational resources.`,
  about: `Shri Vishvkarma Charitable and Education Society is a registered non-profit organization working in Education development, Social welfare initiatives, Community development, and Youth empowerment. The organization is committed to promoting inclusive and quality education.`,
  problem: `Students in rural and underserved communities face limited access to quality education, lack of digital learning infrastructure, financial constraints affecting education continuation, and poor academic support leading to higher dropout rates. There is a need for structured education support and digital learning facilities.`,
  objectives: [
    "To provide educational support to 650 students.",
    "To establish digital learning centers and computer labs.",
    "To provide after-school coaching and mentoring.",
    "To distribute educational kits and study materials.",
    "To improve academic performance and reduce dropout rates.",
  ],
  beneficiaryGroups: [
    "650 school students",
    "Students from economically weaker households",
    "Rural youth interested in computer education",
    "Parents, teachers, and community members (indirect)",
  ],
  components: [
    {
      title: "Academic Support Program",
      icon: "📚",
      color: "#1565C0",
      bg: "#E3F2FD",
      items: ["After-school coaching classes", "Subject-wise mentoring and assessments", "Regular academic performance tracking"],
    },
    {
      title: "Digital Learning Centers",
      icon: "💻",
      color: "#1B5E20",
      bg: "#E8F5E9",
      items: ["Setup of computer labs with 20 computers", "Internet connectivity and digital platforms", "Digital literacy training"],
    },
    {
      title: "Study Materials & Educational Kits",
      icon: "🎒",
      color: "#E65100",
      bg: "#FFF3E0",
      items: ["Books, notebooks, and stationery", "School bags and educational kits", "Digital learning resources"],
    },
    {
      title: "Career Guidance & Counseling",
      icon: "🎯",
      color: "#4A148C",
      bg: "#F3E5F5",
      items: ["Career counseling sessions", "Awareness about higher education", "Scholarship guidance programs"],
    },
    {
      title: "Community Education Awareness",
      icon: "🏘️",
      color: "#880E4F",
      bg: "#FCE4EC",
      items: ["Parent counseling sessions", "Village-level awareness campaigns", "Community engagement activities"],
    },
  ],
  phases: [
    { phase: "Phase 1", timeline: "Month 1–3", activity: "Baseline survey & planning", color: "#1565C0" },
    { phase: "Phase 2", timeline: "Month 4–8", activity: "Digital learning center setup", color: "#1B5E20" },
    { phase: "Phase 3", timeline: "Month 9–18", activity: "Academic support and training programs", color: "#E65100" },
    { phase: "Phase 4", timeline: "Month 19–22", activity: "Career guidance & awareness", color: "#4A148C" },
    { phase: "Phase 5", timeline: "Month 23–24", activity: "Evaluation & final reporting", color: "#880E4F" },
  ],
  budget_items: [
    { head: "Digital Learning Center Setup", amount: 900000 },
    { head: "Academic Support Programs", amount: 750000 },
    { head: "Study Materials & Educational Kits", amount: 420000 },
    { head: "Teachers & Trainers Honorarium", amount: 450000 },
    { head: "Project Coordinator & Staff", amount: 320000 },
    { head: "Career Guidance Programs", amount: 120000 },
    { head: "Awareness Programs", amount: 110000 },
    { head: "Monitoring & Evaluation", amount: 120000 },
    { head: "Administrative Expenses", amount: 130000 },
    { head: "Contingency", amount: 130000 },
  ],
  outcomes: [
    "650 students receiving improved educational support",
    "Increased digital literacy among students",
    "Improved academic performance and reduced dropout rates",
    "Enhanced awareness about higher education opportunities",
    "Strengthened educational infrastructure",
  ],
  monitoring: [
    "Monthly academic performance tracking",
    "Attendance and participation monitoring",
    "Digital lab usage tracking",
    "Beneficiary feedback surveys",
    "Mid-term and final evaluation reports",
    "Financial audit & utilization certificate",
  ],
  sustainability: [
    "Continued programs through community participation",
    "Collaboration with schools and institutions",
    "CSR partnerships for long-term support",
    "Integration with government education schemes",
  ],
  sdgs: [
    { code: "CSR Schedule VII", label: "Promoting Education", color: "#1565C0" },
    { code: "SDG 4", label: "Quality Education", color: "#E65100" },
    { code: "SDG 8", label: "Decent Work & Economic Growth", color: "#1B5E20" },
    { code: "SDG 10", label: "Reduced Inequalities", color: "#880E4F" },
  ],
};

const formatINR = (n) => "₹" + n.toLocaleString("en-IN");
const totalBudget = data.budget_items.reduce((s, i) => s + i.amount, 0);
const COLORS = ["#1565C0","#1B5E20","#E65100","#4A148C","#880E4F","#37474F","#BF360C","#006064","#4E342E","#263238"];

export default function ProjectReport() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    "Executive Summary","About","Problem","Objectives","Components","Implementation","Budget","Outcomes","Monitoring","Sustainability","SDG Alignment",
  ];

  const scrollTo = (id) => {
>>>>>>> 2d4b8f341547b4ee3b9630ecd040a534ae54814f
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />

      {/* Sticky Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 200,
        background: "linear-gradient(135deg, #0D3B8E 0%, #1565C0 55%, #1976D2 100%)",
        boxShadow: "0 4px 24px rgba(13,59,142,0.3)"
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0
          }}>🏫</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: 0.8, textTransform: "uppercase" }}>
              {ORG}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', serif" }}>
              {PROJECT}
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', serif" }}>₹34,50,000</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>24 Months</div>
          </div>
          <button onClick={onLogout} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 8, padding: "7px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", flexShrink: 0, transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.15)"}
          >🚪 Logout</button>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", overflowX: "auto" }}>
          <div style={{ display: "flex", maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            {NAV_SECTIONS.map((s) => (
              <button key={s} className={`nav-link${activeNav === s ? " active" : ""}`} onClick={() => scrollTo(s)}>{s}</button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(140deg, #0D3B8E 0%, #1565C0 45%, #1E88E5 75%, #42A5F5 100%)",
        padding: "64px 24px 80px", position: "relative", overflow: "hidden"
      }}>
        <div style={{ position:"absolute", top:-60, right:-60, width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>
        <div style={{ position:"absolute", bottom:-60, left:"35%", width:320, height:320, borderRadius:"50%", background:"rgba(255,255,255,0.04)" }}/>
        <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", animation: "fadeIn 0.8s ease" }}>
          <span className="badge" style={{ background:"rgba(255,255,255,0.15)", color:"#fff", border:"1px solid rgba(255,255,255,0.3)", marginBottom:18, display:"inline-block" }}>
            📄 Project Report • 2024 – 2026
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px,5vw,52px)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, marginBottom: 12
          }}>{PROJECT}</h1>
          <p style={{ fontSize: "clamp(15px,2vw,19px)", color: "rgba(255,255,255,0.85)", marginBottom: 40, maxWidth: 580 }}>
            {SUBTITLE}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {[
              { icon:"👨‍🎓", val:650,  suffix:"+", label:"Students Benefited" },
              { icon:"📅",   val:24,   suffix:" Months", label:"Project Duration" },
              { icon:"💻",   val:20,   suffix:" Computers", label:"Digital Lab Setup" },
              { icon:"🎯",   val:5,    suffix:" Phases", label:"Implementation Phases" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div style={{ fontSize: 26, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, color: "#fff" }}>
                  <Counter target={s.val} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>{s.label}</div>
=======
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#F5F7FA", minHeight: "100vh", color: "#1a1a2e" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
        color: "#fff", padding: "0", position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 2px 12px rgba(0,0,0,0.18)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🏫</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, opacity: 0.85, letterSpacing: 0.5 }}>{data.orgName}</div>
            <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.2 }}>{data.projectTitle}</div>
          </div>
          <div style={{ fontSize: 13, opacity: 0.85, textAlign: "right", display: "flex", flexDirection: "column", gap: 2 }}>
            <span>📅 {data.duration}</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>{data.budget}</span>
          </div>
        </div>
        <div style={{ overflowX: "auto", background: "rgba(0,0,0,0.15)" }}>
          <div style={{ display: "flex", maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s.replace(/\s+/g, "-"))}
                style={{ background: "none", border: "none", color: "#fff", fontSize: 12, padding: "8px 12px", cursor: "pointer", whiteSpace: "nowrap", opacity: 0.85, borderBottom: "2px solid transparent", transition: "all 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.borderBottomColor = "#fff"; }}
                onMouseLeave={e => { e.target.style.opacity = 0.85; e.target.style.borderBottomColor = "transparent"; }}
              >{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1976D2 60%, #42A5F5 100%)", color: "#fff", padding: "48px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -60, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "4px 14px", fontSize: 12, marginBottom: 14, border: "1px solid rgba(255,255,255,0.25)" }}>Project Report • 2024–2026</div>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, margin: "0 0 8px", lineHeight: 1.2 }}>{data.projectTitle}</h1>
          <p style={{ fontSize: 18, opacity: 0.9, margin: "0 0 32px" }}>{data.subtitle}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {[
              { label: "Total Students", value: "650+", icon: "👨‍🎓" },
              { label: "Project Budget", value: data.budget, icon: "💰" },
              { label: "Duration", value: data.duration, icon: "📅" },
              { label: "Digital Computers", value: "20", icon: "💻" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "14px 20px", backdropFilter: "blur(4px)", minWidth: 130 }}>
                <div style={{ fontSize: 22 }}>{stat.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{stat.value}</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>{stat.label}</div>
>>>>>>> 2d4b8f341547b4ee3b9630ecd040a534ae54814f
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Main Content */}
      <main style={{ maxWidth: 1140, margin: "0 auto", padding: "36px 24px 60px" }}>

        <AnimSection id="Summary">
          <SectionCard title="Executive Summary" icon="📋">
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#445", marginBottom: 20 }}>
              Shri Vishvkarma Charitable and Education Society proposes the{" "}
              <strong style={{ color: "#1565C0" }}>"Shiksha Vikas Abhiyan"</strong>, an initiative aimed at improving access to quality education and promoting digital learning among students from rural and economically weaker communities. The project focuses on strengthening academic support, developing digital learning infrastructure, and ensuring access to educational resources.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["650 Students (Grades 1–12)", "Economically Weaker Households", "Rural Youth in Digital Education"].map(b => (
                <span key={b} className="badge" style={{ background: "#E3F2FD", color: "#1565C0", border: "1px solid #BBDEFB" }}>{b}</span>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="About">
          <SectionCard title="About the Organization" icon="🏛️">
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#445", marginBottom: 20 }}>
              A registered non-profit committed to promoting inclusive and quality education across rural India, working in education development, social welfare, community building, and youth empowerment.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
              {[
                { icon:"📖", label:"Education Development" },
                { icon:"🤲", label:"Social Welfare Initiatives" },
                { icon:"🏘️", label:"Community Development" },
                { icon:"💪", label:"Youth Empowerment" },
              ].map(item => (
                <div key={item.label} style={{
                  background: "#F0F7FF", border: "1px solid #BBDEFB", borderRadius: 14,
                  padding: "16px", display: "flex", alignItems: "center", gap: 12,
                  transition: "transform 0.22s", cursor: "default"
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: "#1565C0" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Problem">
          <SectionCard title="Problem Statement" icon="⚠️">
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#445", marginBottom: 20 }}>
              Students in rural and underserved communities face severe barriers to quality education that demand urgent structural intervention.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
              {[
                { icon:"📉", title:"Limited Access",     desc:"No quality education in rural areas",        bg:"#FFF8E1", color:"#F57F17" },
                { icon:"🖥️", title:"No Digital Infra",   desc:"Lack of computers & internet access",        bg:"#FCE4EC", color:"#C62828" },
                { icon:"💸", title:"Financial Barriers", desc:"Poverty limits education continuation",      bg:"#F3E5F5", color:"#6A1B9A" },
                { icon:"🚪", title:"High Dropout Rates", desc:"Poor support leads to school abandonment",   bg:"#E8F5E9", color:"#1B5E20" },
              ].map(p => (
                <div key={p.title} style={{
                  background: p.bg, border: `1px solid ${p.color}25`,
                  borderRadius: 16, padding: "20px",
                  transition: "transform 0.22s"
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: p.color, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Objectives">
          <SectionCard title="Project Objectives" icon="🎯">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "To provide educational support to 650 students.",
                "To establish digital learning centers and computer labs.",
                "To provide after-school coaching and mentoring.",
                "To distribute educational kits and study materials.",
                "To improve academic performance and reduce dropout rates.",
              ].map((obj, i) => (
                <div key={i} className="obj-item">
                  <div style={{
                    minWidth: 34, height: 34, borderRadius: 10,
                    background: "linear-gradient(135deg,#1565C0,#42A5F5)",
                    color: "#fff", fontWeight: 700, fontSize: 14,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 3px 8px rgba(21,101,192,0.3)", flexShrink: 0
                  }}>{i + 1}</div>
                  <span style={{ fontSize: 14, color: "#333", lineHeight: 1.65, paddingTop: 6 }}>{obj}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Components">
          <SectionCard title="Project Components" icon="🧩">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
              {COMPONENTS.map(c => (
                <div key={c.title} className="comp-card" style={{ borderTopColor: c.color }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: c.color, marginBottom: 14, fontFamily: "'Playfair Display',serif" }}>
                    {c.title}
                  </div>
                  <ul style={{ paddingLeft: 16, margin: 0 }}>
                    {c.items.map((item, i) => (
                      <li key={i} style={{ fontSize: 13, color: "#555", marginBottom: 7, lineHeight: 1.55 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Timeline">
          <SectionCard title="Implementation Timeline — 24 Months" icon="📅">
            <div style={{ position: "relative", paddingLeft: 22 }}>
              <div style={{
                position: "absolute", left: 21, top: 22, bottom: 22,
                width: 2, background: "linear-gradient(to bottom,#1565C0,#42A5F5,#E3F2FD)", borderRadius: 2
              }}/>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {PHASES.map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, paddingBottom: i < PHASES.length - 1 ? 24 : 0, alignItems: "flex-start" }}>
                    <div className="timeline-dot" style={{ background: p.color }}>{i + 1}</div>
                    <div className="timeline-card" style={{ borderLeftColor: p.color }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: p.color, fontFamily: "'Playfair Display',serif" }}>{p.phase}</span>
                        <span className="badge" style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>{p.time}</span>
                      </div>
                      <div style={{ fontSize: 13.5, color: "#555" }}>{p.act}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Budget">
          <div className="card" ref={budgetRef}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "linear-gradient(135deg,#1565C0,#42A5F5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, boxShadow: "0 4px 12px rgba(21,101,192,0.25)"
              }}>💰</div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: "#0D47A1" }}>Budget Breakdown</h2>
                <div style={{ fontSize: 13, color: "#888" }}>Total: {fmt(TOTAL)}</div>
              </div>
            </div>
            <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #E2ECF8" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "linear-gradient(90deg,#0D3B8E,#1976D2)", color: "#fff" }}>
                    {["#","Budget Head","Amount","Share"].map((h, i) => (
                      <th key={h} style={{ padding: "13px 16px", textAlign: i >= 2 ? "right" : "left", fontWeight: 600, fontSize: 12, letterSpacing: 0.5, textTransform: "uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BUDGET_ITEMS.map((item, i) => {
                    const pct = ((item.amount / TOTAL) * 100).toFixed(1);
                    return (
                      <tr key={i} className="budget-row" style={{ background: i % 2 === 0 ? "#F8FAFF" : "#fff", borderBottom: "1px solid #EEF4FF" }}>
                        <td style={{ padding: "12px 16px", color: "#AAB", fontSize: 12 }}>{i + 1}</td>
                        <td style={{ padding: "12px 16px", color: "#333", fontWeight: 500 }}>{item.head}</td>
                        <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: BAR_COLORS[i], fontFamily: "'Playfair Display',serif" }}>{fmt(item.amount)}</td>
                        <td style={{ padding: "12px 16px", textAlign: "right" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10 }}>
                            <BudgetBar pct={pct} color={BAR_COLORS[i]} visible={budgetVisible} />
                            <span style={{ fontSize: 12, color: "#888", minWidth: 36 }}>{pct}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr style={{ background: "linear-gradient(90deg,#0D3B8E,#1976D2)", color: "#fff", fontWeight: 700 }}>
                    <td colSpan={2} style={{ padding: "13px 16px", fontFamily: "'Playfair Display',serif" }}>Grand Total</td>
                    <td style={{ padding: "13px 16px", textAlign: "right", fontFamily: "'Playfair Display',serif", fontSize: 16 }}>{fmt(TOTAL)}</td>
                    <td style={{ padding: "13px 16px", textAlign: "right" }}>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimSection>

        <AnimSection id="Outcomes">
          <SectionCard title="Expected Outcomes" icon="🌟">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
              {OUTCOMES.map((o, i) => (
                <div key={i} className="outcome-card">
                  <span style={{ fontSize: 20, flexShrink: 0 }}>✅</span>
                  <span style={{ fontSize: 14, color: "#333", lineHeight: 1.65 }}>{o}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Monitoring">
          <SectionCard title="Monitoring & Evaluation" icon="📊">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
              {MONITORING.map((m, i) => (
                <div key={i} style={{
                  background: "#F8FAFF", border: "1px solid #E2ECF8",
                  borderRadius: 14, padding: "16px 18px",
                  display: "flex", gap: 12, alignItems: "flex-start",
                  transition: "transform 0.22s, box-shadow 0.22s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(21,101,192,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <span style={{ fontSize: 13.5, color: "#444", lineHeight: 1.6 }}>{m.text}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="Sustainability">
          <SectionCard title="Sustainability Plan" icon="♻️">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
              {SUSTAINABILITY.map((s, i) => (
                <div key={i} style={{
                  background: "linear-gradient(135deg,#E8F5E9,#F1F8E9)",
                  border: "1px solid #A5D6A7", borderRadius: 16,
                  padding: "22px 18px", textAlign: "center",
                  transition: "transform 0.22s, box-shadow 0.22s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(46,125,50,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#2E7D32", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>{s.title}</div>
                  <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        <AnimSection id="SDG">
          <SectionCard title="Alignment with CSR & SDGs" icon="🌐">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {SDGS.map(s => (
                <div key={s.code} className="sdg-pill" style={{ borderColor: s.color, minWidth: 190 }}>
                  <span className="badge" style={{ background: s.color, color: "#fff" }}>{s.code}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </AnimSection>

        {/* Conclusion */}
        <AnimSection id="Conclusion">
          <div style={{
            background: "linear-gradient(140deg,#0D3B8E 0%,#1565C0 50%,#1E88E5 100%)",
            borderRadius: 24, padding: "44px 32px", color: "#fff",
            textAlign: "center", position: "relative", overflow: "hidden",
            boxShadow: "0 16px 48px rgba(13,59,142,0.3)"
          }}>
            <div style={{ position:"absolute", top:-50, right:-50, width:200, height:200, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>
            <div style={{ position:"absolute", bottom:-60, left:-30, width:240, height:240, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }}/>
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>🎓</div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, marginBottom: 16 }}>
                Conclusion
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.85, opacity: 0.9, maxWidth: 680, margin: "0 auto 32px" }}>
                The <strong>"Shiksha Vikas Abhiyan – Quality Education & Digital Learning Initiative"</strong> by Shri Vishvkarma Charitable and Education Society aims to transform educational access across rural communities. With a total investment of <strong>₹34,50,000</strong> over 24 months, this project will empower 650+ students and build a brighter, educated society.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
                {[
                  { val:"650+",    label:"Students Benefited" },
                  { val:"₹34.5L", label:"Total Investment" },
                  { val:"5",       label:"Project Phases" },
                  { val:"20",      label:"Computers Setup" },
                ].map(s => (
                  <div key={s.label} style={{
                    background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 14, padding: "14px 22px", backdropFilter: "blur(4px)"
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Playfair Display',serif" }}>{s.val}</div>
                    <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimSection>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "24px 0 8px", borderTop: "1px solid #E2ECF8", marginTop: 8 }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#1565C0", marginBottom: 4 }}>
            {ORG}
          </div>
          <div style={{ fontSize: 13, color: "#999" }}>
            Shiksha Vikas Abhiyan • Project Report 2024–2026 • All Rights Reserved
          </div>
        </div>

      </main>
    </>
  );
}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

        <Section id="Executive-Summary" title="Executive Summary" icon="📋">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", margin: 0 }}>{data.executive}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
            {["650 students (Grades 1–12)", "Economically weaker households", "Rural youth in digital education"].map((b) => (
              <span key={b} style={{ background: "#E3F2FD", color: "#1565C0", border: "1px solid #BBDEFB", borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </Section>

        <Section id="About" title="About the Organization" icon="🏛️">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", margin: "0 0 16px" }}>{data.about}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12 }}>
            {["Education development", "Social welfare initiatives", "Community development", "Youth empowerment"].map((item) => (
              <div key={item} style={{ background: "#fff", border: "1px solid #E0E7FF", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>✅</span>
                <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Problem" title="Problem Statement" icon="⚠️">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", margin: "0 0 16px" }}>{data.problem}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { t: "Limited Access", d: "No quality education in rural areas", c: "#FFF3E0", tc: "#E65100", ic: "📉" },
              { t: "No Digital Infra", d: "Lack of computers & internet", c: "#FCE4EC", tc: "#C62828", ic: "🖥️" },
              { t: "Financial Strain", d: "Poverty limits education access", c: "#F3E5F5", tc: "#6A1B9A", ic: "💸" },
              { t: "High Dropout Rates", d: "Poor academic support", c: "#E8F5E9", tc: "#2E7D32", ic: "🚪" },
            ].map((p) => (
              <div key={p.t} style={{ background: p.c, borderRadius: 12, padding: "16px", border: `1px solid ${p.tc}22` }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{p.ic}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: p.tc }}>{p.t}</div>
                <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Objectives" title="Project Objectives" icon="🎯">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.objectives.map((obj, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "#fff", border: "1px solid #E3F2FD", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ minWidth: 32, height: 32, borderRadius: "50%", background: "#1565C0", color: "#fff", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{i + 1}</div>
                <span style={{ fontSize: 14, color: "#333", lineHeight: 1.6, paddingTop: 4 }}>{obj}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Beneficiaries" title="Target Beneficiaries" icon="👥">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {data.beneficiaryGroups.map((b, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #BBDEFB", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{["👨‍🎓","🏠","🌐","👨‍👩‍👧‍👦"][i]}</div>
                <div style={{ fontSize: 13, color: "#444", fontWeight: 500 }}>{b}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Components" title="Project Components" icon="🧩">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {data.components.map((c) => (
              <div key={c.title} style={{ background: "#fff", border: `1px solid ${c.color}30`, borderTop: `4px solid ${c.color}`, borderRadius: 12, padding: "18px 16px" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: c.color, marginBottom: 12 }}>{c.title}</div>
                <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                  {c.items.map((item, i) => (
                    <li key={i} style={{ fontSize: 13, color: "#555", marginBottom: 6, lineHeight: 1.5 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Implementation" title="Implementation Plan (24 Months)" icon="📅">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 20, top: 24, bottom: 24, width: 2, background: "#E0E0E0", borderRadius: 2 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {data.phases.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20, paddingBottom: 24 }}>
                  <div style={{ minWidth: 40, height: 40, borderRadius: "50%", background: p.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, zIndex: 1, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ background: "#fff", border: `1px solid ${p.color}30`, borderLeft: `3px solid ${p.color}`, borderRadius: 10, padding: "12px 16px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: p.color }}>{p.phase}</span>
                      <span style={{ background: `${p.color}15`, color: p.color, borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 500 }}>{p.timeline}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>{p.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="Budget" title={`Budget Breakdown — Total: ${data.budget}`} icon="💰">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#1565C0", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", borderRadius: "8px 0 0 0" }}>#</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>Budget Head</th>
                  <th style={{ padding: "12px 16px", textAlign: "right" }}>Amount (INR)</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", borderRadius: "0 8px 0 0" }}>% Share</th>
                </tr>
              </thead>
              <tbody>
                {data.budget_items.map((item, i) => {
                  const pct = ((item.amount / totalBudget) * 100).toFixed(1);
                  return (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#F8FAFF" : "#fff", borderBottom: "1px solid #E3F2FD" }}>
                      <td style={{ padding: "11px 16px", color: "#888" }}>{i + 1}</td>
                      <td style={{ padding: "11px 16px", color: "#333" }}>{item.head}</td>
                      <td style={{ padding: "11px 16px", textAlign: "right", fontWeight: 600, color: "#1565C0" }}>{formatINR(item.amount)}</td>
                      <td style={{ padding: "11px 16px", textAlign: "right" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                          <div style={{ width: 60, height: 6, background: "#E3F2FD", borderRadius: 3 }}>
                            <div style={{ width: `${pct}%`, height: "100%", background: COLORS[i % COLORS.length], borderRadius: 3 }} />
                          </div>
                          <span style={{ fontSize: 12, color: "#666", minWidth: 36 }}>{pct}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr style={{ background: "#1565C0", color: "#fff", fontWeight: 700 }}>
                  <td colSpan={2} style={{ padding: "12px 16px", borderRadius: "0 0 0 8px" }}>Total</td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>{formatINR(totalBudget)}</td>
                  <td style={{ padding: "12px 16px", textAlign: "right", borderRadius: "0 0 8px 0" }}>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="Outcomes" title="Expected Outcomes" icon="🌟">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {data.outcomes.map((o, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E8F5E9", borderLeft: "4px solid #2E7D32", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>✅</span>
                <span style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{o}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Monitoring" title="Monitoring & Evaluation" icon="📊">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {data.monitoring.map((m, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E3F2FD", borderRadius: 10, padding: "12px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16 }}>📌</span>
                <span style={{ fontSize: 13, color: "#444" }}>{m}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Sustainability" title="Sustainability Plan" icon="♻️">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {data.sustainability.map((s, i) => (
              <div key={i} style={{ background: "#E8F5E9", border: "1px solid #A5D6A7", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{["🤝","🏫","💼","🏛️"][i]}</div>
                <div style={{ fontSize: 13, color: "#2E7D32", fontWeight: 500 }}>{s}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="SDG-Alignment" title="Alignment with CSR & SDGs" icon="🌐">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {data.sdgs.map((sdg) => (
              <div key={sdg.code} style={{ background: "#fff", border: `2px solid ${sdg.color}`, borderRadius: 12, padding: "16px 20px", minWidth: 180, display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ background: sdg.color, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 700, alignSelf: "flex-start" }}>{sdg.code}</span>
                <span style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>{sdg.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Conclusion */}
        <div style={{ background: "linear-gradient(135deg, #0D47A1, #1976D2)", borderRadius: 16, padding: "32px 28px", color: "#fff", marginBottom: 32, textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🎓</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Conclusion</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.9, maxWidth: 700, margin: "0 auto 20px" }}>
            The <strong>"Shiksha Vikas Abhiyan – Quality Education & Digital Learning Initiative"</strong> by Shri Vishvkarma Charitable and Education Society aims to improve educational access and promote digital learning. With a total budget of {data.budget}, the project will empower students and contribute to building a better and educated society.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { value: "650+", label: "Students Benefited" },
              { value: data.budget, label: "Total Investment" },
              { value: "24 Months", label: "Project Duration" },
            ].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 20px" }}>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", fontSize: 13, color: "#888", paddingBottom: 20 }}>
          <div style={{ fontWeight: 600, color: "#1565C0", marginBottom: 4 }}>{data.orgName}</div>
          <div>Project Report • Shiksha Vikas Abhiyan • 2024–2026</div>
        </div>

      </div>
    </div>
  );
}

function Section({ id, title, icon, children }) {
  return (
    <div id={id} style={{ background: "#fff", borderRadius: 14, border: "1px solid #E8EEF8", padding: "24px 22px", marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <span style={{ fontSize: 22 }}>{icon}</span>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1a1a2e" }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

