import passport from 'passport';
import LocalStrategy from 'passport-local';

import db from '../src/sequelize/models';

const { User } = db;

passport.use(new LocalStrategy({
    usernameField: 'phone',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
}, (req, username, password, done) => {
    User.findOne({ phone: username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
    })
}));