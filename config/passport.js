/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('../models/User'),
    config = require('./main');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = "NMCT";
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({email: jwt_payload.email}, function (err, user) {
            if (err) {
                return done(err, false);
            }

            if (user) {

                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};