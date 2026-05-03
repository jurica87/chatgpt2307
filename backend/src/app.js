import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { requestContext } from './middleware/request-context.js';
import { authContext } from './middleware/auth-context.js';
import { auditLogger } from './middleware/audit-logger.js';
import healthRouter from './routes/health.routes.js';
import patientRouter from './routes/patient.routes.js';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(',') ?? ['http://localhost:5173'] }));
  app.use(express.json({ limit: '1mb' }));
  app.use(morgan('tiny'));

  app.use(requestContext);
  app.use(authContext);

  app.use('/health', healthRouter);
  app.use('/api/patients', patientRouter);

  app.use(auditLogger);

  app.use((err, req, res, _next) => {
    console.error('Unhandled error', { message: err.message, requestId: req.context?.requestId });
    res.status(500).json({ error: 'Internal server error', requestId: req.context?.requestId });
  });

  return app;
}
