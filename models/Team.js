/**
 * Created by Jens-Laptop on 12/30/2016.
 */
const mongoose = require('mongoose'),
    scheme = mongoose.Schema,
    gameScheme= new scheme({
        name: {
            type: String,
            required: true
        },
        gameId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Game',
            required: true
        },
        image: {
            type: String,
            required: true
        }

    });
module.exports = mongoose.model('Teams',gameScheme);