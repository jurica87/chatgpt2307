import { db } from '../../data/mockData.js';
export function listPatientsByTenant(tenantId){return db.patients.filter((p)=>p.tenantId===tenantId);}export function createPatient(patient){db.patients.push(patient);return patient;}
