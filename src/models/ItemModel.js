const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Name:{
        type:String
    },
    Address:{
        type:String
    },
    City:{
        type:String
    },
    PinCode:{
        type:Number
    },
    Country:{
        type:String
    }
});

const Item = mongoose.model('Item',ItemSchema);
module.exports = Item;