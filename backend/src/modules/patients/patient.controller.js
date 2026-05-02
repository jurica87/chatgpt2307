import { addPatient, getPatients } from './patient.service.js';

export function getPatientsHandler(req, res, next) {
  try {
    const data = getPatients(req.auth.tenantId);
    res.status(200).json({ data, requestId: req.context.requestId });
  } catch (error) {
    next(error);
  }
}

export function createPatientHandler(req, res, next) {
  try {
    const patient = addPatient({
      tenantId: req.auth.tenantId,
      createdBy: req.auth.userId,
      body: req.body
    });
    res.status(201).json({ data: patient, requestId: req.context.requestId });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ error: error.message, requestId: req.context.requestId });
    }
    return next(error);
  }
}
