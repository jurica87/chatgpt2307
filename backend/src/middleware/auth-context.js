import { ROLES } from '../config/roles.js';

export function authContext(req, _res, next) {
  const tenantId = req.header('x-tenant-id') || 'demo-tenant';
  const userId = req.header('x-user-id') || 'demo-user';
  const role = req.header('x-user-role') || ROLES.ADMIN;

  req.auth = { tenantId, userId, role };
  next();
}
