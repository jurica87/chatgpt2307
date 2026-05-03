import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'pflegedoc-backend', timestamp: new Date().toISOString() });
});

export default router;
