import { ROLE_PERMISSIONS } from '../config/roles.js';

export function requirePermission(permission) {
  return (req, res, next) => {
    const userRole = req.auth?.role;
    const allowed = ROLE_PERMISSIONS[userRole] ?? [];

    if (!allowed.includes(permission)) {
      return res.status(403).json({
        error: 'Forbidden',
        details: `Missing permission: ${permission}`,
        requestId: req.context?.requestId
      });
    }

    return next();
  };
}
