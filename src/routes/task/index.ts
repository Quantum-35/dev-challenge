import express from 'express';
import passport from 'passport';

import { TasksController } from '.././../controllers/tasks';
import jwtValidation from '../../../middlewares/validatejwt';

const taskControllers = new TasksController();
const router = express.Router();

router.get('/assigned',[jwtValidation], taskControllers.getTasks);

router.post('/', [jwtValidation], taskControllers.postTasks);

export default router;