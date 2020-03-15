import express from 'express';

import auth from './auth';


const router = express.Router();

// Routes
router.use('/auth', auth);

export default router;
