/**
 * Created by Jens-Laptop on 1/3/2017.
 */
const user = require('../models/User'),
    mongoose = require('mongoose'),
    validator = require('validator'),
    game = require('../models/Game'),
    team = require('../models/Team');
// 586c196e7519240d18879266
exports.getAllTeams = function (req,res) {
    team.find(function (err,resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    })

};
exports.getTeamById = function (req,res) {
    if (!validator.isMongoId(req.params.teamId)) {
        return res.status(404).send({message:'Competition not found.'});
    }
    team.findById(req.params.teamId,function (err, resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.createTeam =  function (req,res) {
    if(req.user.role === 'ADMIN'){
        let errors = req.validationErrors() || [];
        if (errors.length > 0) {
            // If we have errors, send 400 Bad Request
            return res.status(400).send(errors);
        }

        req.checkBody('name','The name of the team is not valid').notEmpty().isLength({min:2,max:40});
        req.checkBody('description','The discription of the team is not valid').notEmpty().isLength({min:2,max:40})
        req.checkBody('gameId','The gameId of the team is not valid').notEmpty();
        req.checkBody('image','The image of the team is not valid').notEmpty();

        if (!validator.isMongoId(req.body.gameId)) {
            return res.status(404).send({message: 'GameId is not valid.'});
        }

        const newTeam = new team({
            name:  req.body.name,
            description: req.body.description,
            gameId: req.body.gameId,
            image: req.body.image
        });
       newTeam.save(function (err) {
            if(err){
                res.status(500).send({message: err});
            }
            else res.status(201).send({message:"Succes"});
        });
    }
    else {
        res.status(401).send({message:'No permission'});
    }
};
exports.getAllTeamsByGameId = function (req, res) {
    if (!validator.isMongoId(req.params.gameId)) {
        return res.status(404).send({message:'Competition not found.'});
    }
    team.find({gameId:req.params.gameId},function (err,resp) {
        if(err){res.status(500).send({message: err});}
        else {res.status(200).send(resp)}
    });
};
exports.updateTeam = function (req, res) {
    if (req.user.role === 'ADMIN') {
        let errors = req.validationErrors() || [];
        if (errors.length > 0) {
            // If we have errors, send 400 Bad Request
            return res.status(400).send(errors);
        }
        req.checkBody('teamId', 'The teamId is not valid').notEmpty();
        req.checkBody('name', 'The name of the team is not valid').notEmpty().isLength({min: 2, max: 40});
        req.checkBody('description', 'The discription of the team is not valid').notEmpty().isLength({min: 2, max: 40})
        req.checkBody('gameId', 'The gameId of the team is not valid').notEmpty();
        req.checkBody('image', 'The image of the team is not valid').notEmpty();

        if (!validator.isMongoId(req.body.gameId)) {
            return res.status(404).send({message: 'GameId is not valid.'});
        }
        if (!validator.isMongoId(req.body.teamId)) {
            return res.status(404).send({message: 'teamId is not valid.'});
        }
        team.findById(req.body.teamId, function (err, tea) {
            if (err) {
                res.status(404).send({message: 'team not found'})
            }
            else {
                tea.name = req.body.name;
                tea.description = req.body.description;
                tea.gameId = req.body.gameId;
                tea.image = req.body.image;
                tea.save(function (error) {
                    if (error) {
                        res.status(500).send({message: 'Not saved'})
                    }
                    else {
                        res.status(201).send({message: 'Succes'})
                    }
                });
            }

        });

    }
};