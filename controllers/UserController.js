/**
 * Created by Jens-Laptop on 1/2/2017.
 */
'use-strcit'
const user = require('../models/User'),
    mongoose = require('mongoose'),
    validator = require('validator');

exports.getAllUsers = function(req, res){
    if(req.user.token == null){return res.status(400).send({message: "wrong token"})}
    if(req.user.role === 'ADMIN'){
        user.find(function (err, resp) {
           if(err){res.status(500).send({message:"Error: " + err});}
           else { res.status(200).send(resp);}
        });
    }
    else {
        res.status(401).send({message: 'Unauthorized'});
    }
};
exports.getUserById = function(req,res){
    if(req.user.token == null){return res.status(400).send({message: "wrong token"})}
  if(validator.isMongoId(req.params.userId)){
    user.findById(req.params.userId,function (err,resp) {
       if(err){res.status(400).send({message: 'Error: ' + err});}
       else {res.status(200).send(resp);}
    });
  }
  else{
      return res.status(404).send({message:'User not found'})
  }
};
exports.changePassword = function (req, res) {
    if(req.user.token == null){return res.status(400).send({message: "wrong token"})}
    req.checkBody('oldPassword', 'Invalid Password').notEmpty();
    req.checkBody('newPassword', 'Invalid New Password').notEmpty().matches('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}');

    user.findById(req.user._id,function (err,usr) {
        if(err){res.status(400).send({message: 'Error: ' + err});}
        else {
            usr.comparePasswords(req.body.oldPassword, function (error, match) {
                if (match && !err) {
                    usr.password = req.body.newPassword;
                    usr.save(function (err) {
                        if (err) res.status(400).send({message: "Password: " + error});
                    });
                    res.status(200).send({message: "Password Changed"});
                }
                else {
                    console.log(usr.password + " " + req.body.oldPassword );
                    res.status(401).send('Wrong password');
                }
            });

        }
    });
};