import { useState } from "react";

export default function EmergencyAccess() {
  const [active, setActive] = useState(false);
  const [expiresAt, setExpiresAt] = useState(null);

  const activateEmergency = () => {
    const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    setActive(true);
    setExpiresAt(expiry.toLocaleTimeString());

    setTimeout(() => {
      setActive(false);
      setExpiresAt(null);
    }, 15 * 60 * 1000);
  };

  return (
    <div className="card emergency-box">
      <h3>🚨 Emergency Access</h3>

      {active ? (
        <>
          <p style={{ color: "#d9534f", fontWeight: "bold" }}>
            Emergency Access ACTIVE
          </p>
          <p>⏱ Expires at: {expiresAt}</p>
          <p>
            🔓 Temporary access granted to emergency medical responders.
          </p>
        </>
      ) : (
        <>
          <p>
            Enable temporary emergency access to your medical records for
            critical situations.
          </p>
          <button
            className="danger-btn"
            onClick={activateEmergency}
          >
            Activate Emergency Access
          </button>
        </>
      )}
    </div>
  );
}
