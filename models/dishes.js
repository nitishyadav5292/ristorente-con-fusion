const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const dishSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Currency,
        required : true,
        min : 0
    },
    label : {
        type : String,
        default : ''
    },
    featured : {
        type : Boolean,
        default : false
    },
}, {
    timestamps : true
});

var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes;