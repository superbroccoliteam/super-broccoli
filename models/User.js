/**
 * Created by Jens-Laptop on 12/29/2016.
 */
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    config = require('../config/main'),
    scheme = mongoose.Schema;

    const UserScheme = new scheme({
        firstName:{
            type: String,
            required : true
        },
        lastName:{
            type: String,
            required : true
        },
        email : {
            type: String,
            required : true,
            unique: true
        },
        password : {
            type: String,
            required : true
        },
        sports: [{
            type: String
        }],
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER',
            uppercase: true
        },
        token: {
            type: String
        },
        nickname:{
            type: String,
            required: true,
            unique: true
        },
        competitions:[{
            type: String
        }]

    });
UserScheme.pre('save', function (next) {
    let user = this;
    if(user.isModified('password')|| user.isNew){
        bcrypt.genSalt(10,function (err,salt) {
            bcrypt.hash(user.password,salt,function (err,hash){
                user.password = hash;
                next();
            });
        });
    }else{
        return next();
    }
});

UserScheme.methods.comparePasswords = function (inp, callback) {
  let user = this;
  bcrypt.compare(inp,user.password, function (err,match) {
      if(err){
          return callback(err)
      }
      callback(null,match);
  })
};

UserScheme.methods.createToken = function (){
    let user = this;
    return jwt.sign({email: user.email, user_id: user._id}, 'NMCT', {expiresIn:1500000});
};

module.exports = mongoose.model('User', UserScheme);
