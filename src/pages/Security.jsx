export default function Security() {
  return (
    <div>
      <h2>Privacy & Security Design</h2>

      <p>
        This platform follows a patient-centric, privacy-first architecture.
        The system never stores or processes raw medical records.
      </p>

      <ul>
        <li>🔐 All medical records are assumed to be end-to-end encrypted</li>
        <li>
          🧠 Zero-Knowledge Proof concepts ensure the platform cannot read data
        </li>
        <li>👁 Access is strictly consent-based and time-bound</li>
        <li>🚨 Emergency access is patient-triggered and auto-revoked</li>
      </ul>

      <p>
        The application only manages metadata, access permissions, and consent
        states, ensuring maximum privacy and security.
      </p>
    </div>
  );
}
