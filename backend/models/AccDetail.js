const mongoose = require('mongoose');
const {Schema} = mongoose;

const AccSchema = new Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

    accountBalance:{
        type:Number,
        required:true,
        default:1
    },
});

module.exports = mongoose.model('accDetail', AccSchema);