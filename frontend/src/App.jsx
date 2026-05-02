import { useEffect, useState } from 'react';
import { AppLayout } from './layouts/AppLayout.jsx';
import { PatientDashboardPage } from './pages/PatientDashboardPage.jsx';
import { api } from './api/client.js';
export default function App(){const [patients,setPatients]=useState([]);const [selectedId,setSelectedId]=useState(null);const [dashboard,setDashboard]=useState(null);useEffect(()=>{api('/api/patients').then((r)=>setPatients(r.data||[]));},[]);useEffect(()=>{if(selectedId)api(`/api/patients/${selectedId}/dashboard`).then((r)=>setDashboard(r.data));},[selectedId]);return <AppLayout patients={patients} onOpenPatient={setSelectedId} selectedId={selectedId}><PatientDashboardPage patientId={selectedId} dashboard={dashboard} refresh={()=>api(`/api/patients/${selectedId}/dashboard`).then((r)=>setDashboard(r.data))}/></AppLayout>;}
