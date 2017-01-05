/**
 * Created by Jens-Laptop on 12/31/2016.
 */
const mongoose = require('mongoose'),
    user = require('../models/User');

/**
 * @apiDeescription Register a new user.
 * @api {POST} /authorization/register Create new user.
 * @apiName Register
 * @apiGroup Authorization
 *
 * @apiParam {String} first_name         The first name of the user.
 * @apiParam {String} last_name          The lastName of the user.
 * @apiParam {String} email              The email address of the user.
 * @apiParam {String} password           The password of the user.
 * @apiParam {String} nickname           Represents the nickname of the user.
 * @apiParam {String} sports             The users favorite sport.
 *
 * @apiParamExample {json} Request
 * {
 *     "first_name": "Johny",
 *     "last_name": "Brave",
 *     "email": "j.brav0@email.com",
 *     "password": "Password-1",
 *     "nickname": "Bravz420",
 *     "sports": "id1,id2,id3"
 * }
 *
 *
 */

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
      nickname: req.body.nickname
  });
  if(req.checkBody('adminSecret').notEmpty && req.body.adminSecret == "TeamEefjeAdmin-159"){
      newUser.role= 'ADMIN';
  }
  newUser.save(function (err, usr) {
      if(err){
          res.status(500).send({message: err});}
      else{
          console.log(req.body.sports);
          if(req.body.sports != undefined) {
              user.findByIdAndUpdate(usr._id, {$pushAll: {sports: req.body.sports.split(',')}}, function (erro) {
                  if (erro) {
                      res.status(500).send({message: erro});
                  }
                  else res.status(201).send({message: "Succes"});
              });
          }
          else {
              res.status(201).send({message: "Succes"});
          }
      }

  })
};

/**
 * @apiDeescription login with your credentials.
 * @api {POST} /authorization/login Authenticate user.
 * @apiName login
 * @apiGroup Authorization
 *
 * @apiParam {String} email              The email address of the user.
 * @apiParam {String} password           The password of the user.
 *
 * @apiParamExample {json} Request
 * {
 *     "email": "j.brav0@email.com",
 *     "password": "Password-1"
 * }
 *@apiSuccessExample Response
 * {
 *      "email": "j.brav0@email.com",
 *      "token": "JWT token"
 *}
 */
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
                        if(err) return res.status(400).send({message: "Token failure: " + err});
                    });
                    res.status(200).send({
                       email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        nickname:user.nickname,
                        _id: user._id,
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

/**
 * @apiDescription logs the user off.
 *
 * @api {POST} /authorization/logout Sign out
 * @apiName Log out / Sign out
 * @apiGroup Authorization
 *
 * @apiHeader {String} Authorization JWT <code>token</code>
 * @apiHeaderExample Headers
 * {
 *     "Authorization": "JWT token"
 * }
 *
*/

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
