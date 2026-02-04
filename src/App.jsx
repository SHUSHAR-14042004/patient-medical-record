import Dashboard from "./pages/Dashboard.jsx";
import Security from "./pages/Security.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app-container">
      <h1>Secure Patient Medical Record Portal</h1>
      <p>Your data. Your control. Fully encrypted.</p>

      <nav>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("security")}>Privacy & Security</button>
      </nav>

      {page === "dashboard" ? <Dashboard /> : <Security />}
    </div>
  );
}

export default App;
