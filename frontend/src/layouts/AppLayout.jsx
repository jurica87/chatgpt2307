export function AppLayout({ children, patients, onOpenPatient, selectedId }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>PflegeDoc V0.1</h1>
      </header>

      <div className="content-grid">
        <aside className="sidebar">
          <h3>Patientenliste</h3>

          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`patient-list-item ${selectedId === patient.id ? 'active' : ''}`}
            >
              <div>
                <strong>{patient.name}</strong>
                <div>Status: {patient.status}</div>
                <div>Offene Aufgaben: {patient.tasksOpen}</div>
              </div>
              <button className="secondary-btn" onClick={() => onOpenPatient(patient.id)}>
                Öffnen
              </button>
            </div>
          ))}
        </aside>

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
