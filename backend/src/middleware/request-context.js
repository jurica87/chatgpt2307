import { v4 as uuidv4 } from 'uuid';

export function requestContext(req, _res, next) {
  req.context = {
    requestId: uuidv4(),
    startedAt: new Date().toISOString()
  };
  next();
}
