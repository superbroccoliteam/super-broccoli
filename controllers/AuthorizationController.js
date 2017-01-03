/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const mongoose = require('mongoose'),
    user = require('../models/User');



exports.registerUser = function (req,res) {
  req.checkBody('firstName','The firstname is not valid').notEmpty().isLength({min:2,max:40});
  req.checkBody('lastName','The lastname is not valid').notEmpty().isLength({min:2,max:40});
  req.checkBody('email','The email is not valid').notEmpty().isEmail();
  req.checkBody('nickname', 'The nickname is not valid').notEmpty().isLength({min:2,max:40});
  req.checkBody('password', 'Invalid Password').notEmpty().matches('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}');
    let err = req.validationErrors() ||[];
  if(err.length >0 ) return res.status(400).send({message: err});

  const newUser = new user({
     firstName:  req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password : req.body.password,
      sports: req.body.sports,
      nickname: req.body.nickname
  });
  if(req.checkBody('adminSecret').notEmpty && req.body.adminSecret == "TeamEefjeAdmin-159"){
      newUser.role= 'ADMIN';
  }
  newUser.save(function (err) {
      if(err){
          res.status(500).send({message: err});

      }
      else res.status(201).send({message:"Succes"});
  })
};

exports.loginUser = function(req, res){
    req.checkBody('email', 'Invalid email param').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password param').notEmpty();
    console.log('1');
    let err = req.validationErrors() ||[];
    if(err.length >0 ) return res.status(400).send({message: err});

    const email = req.body.email,
        password = req.body.password;
    user.findOne({
        email: email

    }, function (err, user) {
        if(err) {
            res.status(500).send({message: err});
            console.log('2');
        }
        if(!user) {
            res.status(401).send({message: "User not found"});
            console.log('3');
        }
        else {
            console.log('4');
            user.comparePasswords(password, function (err, match) {
                if(match && !err){
                    user.token = user.createToken();
                    user.save(function (err) {
                        if(err) res.status(400).send({message: "Token failure: " + err});
                    });
                    res.status(200).send({
                       email: user.email,
                        token: 'JWT ' + user.token
                    });
                }
                else {
                    res.status(401).send('Wrong password');
                }
            });
        }
    });
};
exports.logoutUser = function (req,res) {
    if(req.user.token == null){return res.status(400).send({message: "wrong token"})}
    user.findByIdAndUpdate(req.user._id, {
        $set:{
            token: undefined
        }
    }, function (err,user) {
       if(err) res.status(500).send({message: "Error: " + err});
       if(!user) res.status(401).send({message: "User do not exist"});
       else res.status(200).send({message: "Logged Out"});
    });
};
