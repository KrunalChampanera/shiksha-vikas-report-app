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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
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
              </div>
            ))}
          </div>
        </div>
      </div>

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
