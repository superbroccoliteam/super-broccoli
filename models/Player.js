/**
 * Created by Jens-Laptop on 12/30/2016.
 */
const mongoose = require('mongoose'),
    scheme = mongoose.Schema,
    gameScheme= new scheme({
        fullname: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        teamId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
            required: true
        },
        gameId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Game',
            required: true
        },
        role: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model('Players',gameScheme);