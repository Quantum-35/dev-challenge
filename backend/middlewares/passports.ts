import passport from 'passport';
import LocalStrategy from 'passport-local';

import db from '../src/sequelize/models';
import { UserServices } from '../src/services';
import verifyPassword from '../utils/verifyPassword';

const { User } = db;
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
        return done(null, user);
    });
}));