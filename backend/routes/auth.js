const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Prabhavisagoodboy';

//Create a User using: POST '/api/auth/createuser
router.post('/createuser', [
    body('firstName', 'Enter a Valid Name').isLength({ min: 3 }),
    body('lastName', 'Enter a Valid Name').isLength({ min: 3 }),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password must be of 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    //If there are error, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt); 
        //create a new user
        user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: secPass,
            accountNumber: req.body.accountNumber,
            accountDescription: req.body.accountDescription,
            branch: req.body.branch,
            cifNo: req.body.cifNo,
            ifscCode: req.body.ifscCode,
            micrCode: req.body.micrCode,
        });

        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        // res.json({error: 'Please Enter a unique value for email,account number',messsage:err.messsage})});
        
        const data ={
            user:{
                id:user.id 
            }
        }


        const authtoken = jwt.sign(data, JWT_SECRET);
        

        // res.json(user);
        res.json({authtoken});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

module.exports = router