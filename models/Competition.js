/**
 * Created by Jens-Laptop on 12/30/2016.
 */
const mongoose = require('mongoose'),
    scheme = mongoose.Schema,
    competitionScheme= new scheme({
        name: {
            type: String,
            required: true
        },
        prizepool: {
            type: String

        },
        gameId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Game'
        },
        stageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stage'
        },
        image: {
            type: String

        }
    });
module.exports = mongoose.model('Games',gameScheme);