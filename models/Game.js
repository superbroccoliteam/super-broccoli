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
        company: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        boxart: {
            type: String,

        },
        image: {
            type: String,
            required: true
        }
    });
module.exports = mongoose.model('Games',gameScheme);