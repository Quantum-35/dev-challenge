import express from 'express';
import passport from 'passport';

// routes
import REGISTER from './register';

//validations middleware
import { validateRequest, validatePhone } from '../../../middlewares/validateBody';

const router = express.Router();

router.post('/register', validateRequest('signup'), validatePhone, REGISTER);

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

export default router;
