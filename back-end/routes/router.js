import express from 'express';

import router from './complaintRoute.js';
import agencyRouter from './agencyRoute.js';
  const app = express();

  app.use(express.json());
  app.use('/api/complaint', router);
  app.use('/api/agency', agencyRouter);


   export default app;