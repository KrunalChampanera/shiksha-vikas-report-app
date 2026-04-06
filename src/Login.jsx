import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "deepak@gmail.com" && password === "Deepak@Gajjar122") {
      onLogin();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0D47A1, #1976D2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 400, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🏫</div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>Welcome Back</h2>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#888" }}>Sign in to access the project report</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#333", display: "block", marginBottom: 6 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(""); }}
              placeholder="Enter your email"
              required
              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #D0D7E3", fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
              onFocus={e => e.target.style.border = "1px solid #1565C0"}
              onBlur={e => e.target.style.border = "1px solid #D0D7E3"}
            />
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#333", display: "block", marginBottom: 6 }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(""); }}
                placeholder="Enter your password"
                required
                style={{ width: "100%", padding: "10px 40px 10px 14px", borderRadius: 8, border: "1px solid #D0D7E3", fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
                onFocus={e => e.target.style.border = "1px solid #1565C0"}
                onBlur={e => e.target.style.border = "1px solid #D0D7E3"}
              />
              <span onClick={() => setShow(!show)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", cursor: "pointer", fontSize: 16 }}>
                {show ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {error && <div style={{ background: "#FFEBEE", color: "#C62828", borderRadius: 8, padding: "10px 14px", fontSize: 13 }}>⚠️ {error}</div>}

          <button type="submit" style={{ background: "linear-gradient(135deg, #0D47A1, #1976D2)", color: "#fff", border: "none", borderRadius: 8, padding: "12px", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 4 }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
