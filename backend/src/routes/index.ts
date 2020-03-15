import express from 'express';

import auth from './auth';
import tasks from './task';


const router = express.Router();

// Routes
router.use('/auth', auth);
router.use('/tasks', tasks)

export default router;
