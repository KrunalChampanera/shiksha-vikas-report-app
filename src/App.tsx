import { useState } from "react";
import Login from "./Login";
import ProjectReport from "./ProjectReport";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem("auth") === "true");

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setLoggedIn(true);
  };

  return loggedIn ? <ProjectReport /> : <Login onLogin={handleLogin} />;
}