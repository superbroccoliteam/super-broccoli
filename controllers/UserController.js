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
        })
            .populate('sports', '_id name');
    }
    else {
        res.status(401).send({message: 'Unauthorized'});
    }
};
/**
 * @api {GET} /user/:userId Get user by Id
 * @apiName Get user information
 * @apiGroup Authorization
 *
 * @apiHeader {String} Authorization JWT <code>token</code>
 * @apiHeaderExample Headers
 * {
 *    "token": "JWT token"
 * }
 *
 * @apiParam {String} userId The Id of the requested user.
 *
 *
 */
exports.getUserById = function(req,res){
    if(req.user.token == null){return res.status(400).send({message: "wrong token"})}
    if(validator.isMongoId(req.params.userId)) {
        user.findById(req.params.userId, function (err, resp) {
            if (err) {
                res.status(400).send({message: 'Error: ' + err});
            }
            else {
                resp.password = null;
                resp.email = null;
                res.status(200).send(resp);
            }
        });
    }else{
        return res.status(404).send({message:'User not found'})
    }
};




/**
 * @apiDeescription Change ur password.
 * @api {POST} /user/changepassword
 * @apiName change password
 * @apiGroup Authorization
 *
 * @apiParam {String} oldPassword              The old password from the user.
 * @apiParam {String} newPassword              The new password of the user
 *
 * @apiParamExample {json} Request
 * {
 *     "oldPassword": "Password-1",
 *     "newPassword": "Password-2"
 * }
 *  @apiHeader {String} Authorization JWT <code>token</code>
 * @apiHeaderExample Headers
 * {
 *    "token": "JWT token"
 * }
 */
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
                    usr.token = null;
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
/**
 * @apiDeescription Add competition by posting id.
 * @api {POST} /user/addcompetition
 * @apiName Add competition
 * @apiGroup Authorization
 *
 * @apiParam {String} competitionId              The id of the competition.
 *
 * @apiParamExample {json} Request
 * {
 *     "competitionId": "123456789-abc",
 * }
 *  @apiHeader {String} Authorization JWT <code>token</code>
 * @apiHeaderExample Headers
 * {
 *    "token": "JWT token"
 * }
 */
exports.addCompetitionByUserId = function (req, res) {
    if(req.user.token == null){return res.status(400).send({message: "wrong token"})}
    req.checkBody('competitionId', 'invalid competitionId').notEmpty();
    user.findByIdAndUpdate(req.user._id,{$push:{competitions: req.body.competitionId}} ,function (err) {
        if(err){res.status(500).send({message: err});}
        else{res.status(200).send({message: "Succes"});}
    });
};