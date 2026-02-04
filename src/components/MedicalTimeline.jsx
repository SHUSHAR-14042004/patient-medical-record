import { useState } from "react";
import { medicalRecords } from "../utils/medicalRecords";

export default function MedicalTimeline() {
  const [records, setRecords] = useState(medicalRecords);

  const grantAccess = (id) => {
    const expiry = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour
    setRecords((prev) =>
      prev.map((record) =>
        record.id === id
          ? { ...record, accessGranted: true, expiresAt: expiry }
          : record
      )
    );
  };

  const revokeAccess = (id) => {
    setRecords((prev) =>
      prev.map((record) =>
        record.id === id
          ? { ...record, accessGranted: false, expiresAt: null }
          : record
      )
    );
  };

  const isExpired = (expiresAt) => {
    if (!expiresAt) return false;
    return new Date(expiresAt) < new Date();
  };

  return (
    <div style={{ marginTop: "25px" }}>
      <h3>Medical History Timeline</h3>

      {records.map((record) => {
        const expired = isExpired(record.expiresAt);
        const active = record.accessGranted && !expired;

        return (
          <div key={record.id} className="card">
            <strong>{record.date}</strong> — {record.type}
            <br />
            <span>🏥 {record.hospital}</span>
            <br />
            <span>🔒 Encrypted | Format: {record.format}</span>
            <br />

            <span
              className={`badge ${
                active ? "badge-green" : "badge-red"
              }`}
            >
              {active ? "Access Active" : "Access Inactive"}
            </span>

            <br />

            {record.expiresAt && active && (
              <small>⏱ Expires at: {record.expiresAt}</small>
            )}

            <br />
            <br />

            {!active ? (
              <button
                className="primary-btn"
                onClick={() => grantAccess(record.id)}
              >
                Grant Access (1 hour)
              </button>
            ) : (
              <button
                className="danger-btn"
                onClick={() => revokeAccess(record.id)}
              >
                Revoke Access
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
