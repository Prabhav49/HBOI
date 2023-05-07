const mongoose = require('mongoose');
const { Schema } = mongoose;

const crypto = require('crypto');

function generateAccountNumber() {
  const randomBytes = crypto.randomBytes(5); // generates 5 random bytes
  const accountNumber = parseInt(randomBytes.toString('hex'), 16).toString().substring(0,10); // converts to integer and takes first 10 digits
  return accountNumber;
}

function generateMicrCode() {
    const randomBytes = crypto.randomBytes(5); // generates 5 random bytes
    const micrCode = parseInt(randomBytes.toString('hex'), 16).toString().substring(0,9); // converts to integer and takes first 10 digits
    return micrCode;
  }
function generateCifNo() {
    const randomBytes = crypto.randomBytes(5); // generates 5 random bytes
    const cifNo = parseInt(randomBytes.toString('hex'), 16).toString().substring(0,11); // converts to integer and takes first 10 digits
    return cifNo;
  }
function generateBalance() {
    const randomBytes = crypto.randomBytes(5); // generates 5 random bytes
    const accBalance = parseInt(randomBytes.toString('hex'), 16).toString().substring(0,5); // converts to integer and takes first 10 digits
    return accBalance;
  }



const UserSchema = new Schema({

    firstName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:5,
    },
    accountNumber:{
        type:Number,
        unique:true,
        default:generateAccountNumber,
     
    },
    accountDescription:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    accountBalance:{
        type:Number,
        required:true,
        default:generateBalance,
    },
    cifNo:{
        type:String,
        unique:true,
        default:generateCifNo,
    },
    ifscCode:{
        type:String,
        default:"SBIN0020852",
    },
    micrCode:{
        type:Number,
        unique:true,
        default:generateMicrCode,
    }
    
},{timestamps:true});

const User = mongoose.model('user', UserSchema);
module.exports = User