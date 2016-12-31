/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const extrct = require('passport-jwt').ExtractJwt,
    strat = require('passport-jwt').Strategy,
    user = require('../models/User');
module.exports = function (pass) {
    let options = {};
    options.jwtFromRequest = extrct.fromAuthHeader();
    options.secretOrKey = "NMCT";
    pass.use(new strat(options,function (load,done) {
        user.findOne({email: load.email}, function (err,user) {
            if(err) return done(err,false);
            if(user) return(null,user);
            else done (null,false)
        });
    })) ;
};