import express from 'express';
import passport from 'passport';

// auth controllers
import { AuthController } from '../../controllers';

const authControllers = new AuthController();

//validations middleware
import { validateRequest, validatePhone } from '../../../middlewares/validateBody';

const router = express.Router();

router.post('/register', validateRequest('signup'), validatePhone, authControllers.register);

router.post('/login', 
  passport.authenticate('local'), authControllers.login);

export default router;
