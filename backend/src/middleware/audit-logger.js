// Konzept: Hier später in audit_logs Tabelle persistieren.
export function auditLogger(req, res, next) {
  const payload = {
    requestId: req.context?.requestId,
    tenantId: req.auth?.tenantId,
    userId: req.auth?.userId,
    method: req.method,
    path: req.originalUrl,
    statusCode: res.statusCode,
    timestamp: new Date().toISOString()
  };

  console.info('AUDIT_EVENT', payload);
  next();
}
