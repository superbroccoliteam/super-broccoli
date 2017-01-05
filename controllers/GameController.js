/**
 * Created by Jens-Laptop on 1/3/2017.
 */
const user = require('../models/User'),
    mongoose = require('mongoose'),
    validator = require('validator'),
    game = require('../models/Game');
//test; //586c0524169a6f5c04623749
exports.getAllGames = function (req,res) {

    game.find(function (err,resp) {
       if(err){res.status(500).send({message: "Error: " + err });}
       else {res.status(200).send(resp);}
    });
};
exports.getGameById = function (req,res) {
    if (!validator.isMongoId(req.params.gameId)) {
        return res.status(404).send('Game not found.');
    }
    game.findById(req.params.gameId,function (err, resp) {
        if(err){res.status(500).send({message: "Error: " + err });}
        else {res.status(200).send(resp);}
    });
};
exports.createGame = function (req,res) {
  if(req.user.role === 'ADMIN'){
      req.checkBody('name','The name of the game is not valid').notEmpty().isLength({min:2,max:40});
      req.checkBody('company','The company of the game is not valid').notEmpty().isLength({min:2,max:40});
      req.checkBody('description','The discription of the game is not valid').notEmpty();
      req.checkBody('image','The image of the game is not valid').notEmpty();

      const newGame = new game({
          name:  req.body.name,
          company: req.body.company,
          description: req.body.description,
          image: req.body.image,
          boxart: req.body.boxart
      });

      newGame.save(function (err) {
          if(err){
              res.status(500).send({message: err});

          }
          else res.status(201).send({message:"Succes"});
      });
  }
  else {
      res.status(401).send({message: 'Unauthorized'});
  }
};