import express from 'express';

import { TasksController } from '.././../controllers/tasks';

const taskControllers = new TasksController();
const router = express.Router();

router.get('/assigned', taskControllers.getTasks)

export default router;