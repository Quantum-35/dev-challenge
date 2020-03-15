import passport from 'passport';
import LocalStrategy from 'passport-local';

import { UserServices } from '../src/services';
import verifyPassword from '../utils/verifyPassword';


const userOp = new UserServices();

passport.use(new LocalStrategy({
    usernameField: 'phone',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
}, async (req, phone, password, done) => {
    await userOp.findOneUser(phone, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        const { user: { password : userPass } } = user;
        if (!verifyPassword(password, userPass)) { return done(null, false); }
        passport.serializeUser(function(user, done) {
            done(null, user);
          });
          
          passport.deserializeUser(function(user, done) {
            done(null, user);
          });
        return done(null, user);
    });
}));