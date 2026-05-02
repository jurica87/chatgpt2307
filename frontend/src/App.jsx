import { useEffect, useState } from 'react';
import { AppLayout } from './layouts/AppLayout.jsx';
import { PatientDashboardPage } from './pages/PatientDashboardPage.jsx';
import { api } from './api/client.js';

export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api('/api/patients')
      .then((result) => setPatients(result.data || []))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!selectedId) return;

    api(`/api/patients/${selectedId}/dashboard`)
      .then((result) => {
        setDashboard(result.data);
        setError('');
      })
      .catch((err) => setError(err.message));
  }, [selectedId]);

  const refreshDashboard = () => {
    if (!selectedId) return;
    api(`/api/patients/${selectedId}/dashboard`)
      .then((result) => setDashboard(result.data))
      .catch((err) => setError(err.message));
  };

  return (
    <AppLayout patients={patients} onOpenPatient={setSelectedId} selectedId={selectedId}>
      {error ? <p className="error-box">Fehler: {error}</p> : null}
      <PatientDashboardPage patientId={selectedId} dashboard={dashboard} refresh={refreshDashboard} />
    </AppLayout>
  );
}
