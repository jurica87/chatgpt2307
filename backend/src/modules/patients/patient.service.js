import { v4 as uuidv4 } from 'uuid';
import { createPatient, listPatientsByTenant } from './patient.repository.js';

export function getPatients(tenantId) {
  return listPatientsByTenant(tenantId);
}

export function addPatient({ tenantId, createdBy, body }) {
  if (!body?.name || !body?.birthDate) {
    const error = new Error('name and birthDate are required');
    error.status = 400;
    throw error;
  }

  const patient = {
    id: uuidv4(),
    tenantId,
    name: body.name,
    birthDate: body.birthDate,
    careLevel: body.careLevel || null,
    ventilation: Boolean(body.ventilation),
    createdBy,
    createdAt: new Date().toISOString()
  };

  return createPatient(patient);
}
