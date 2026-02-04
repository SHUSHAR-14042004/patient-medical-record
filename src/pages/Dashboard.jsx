import MedicalTimeline from "../components/MedicalTimeline";
import EmergencyAccess from "../components/EmergencyAccess";

export default function Dashboard() {
  return (
    <div>
      <h2>Patient Dashboard</h2>

      <ul>
        <li>🔐 All records encrypted</li>
        <li>👁 You control who can access your data</li>
        <li>⏱ Emergency access inactive</li>
      </ul>

      <MedicalTimeline />
      <EmergencyAccess />
    </div>
  );
}
