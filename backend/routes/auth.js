const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Create a User using: POST '/api/auth/createuser
router.get('/createuser', [
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

    let user = User.findOne({ email: req.body.email });
    if(user){
        return req.status(400).json({error: "Sorry a user with this email already exists"})
    }
    user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        accountNumber: req.body.accountNumber,
        accountDescription: req.body.accountDescription,
        branch: req.body.branch,
        cifNo: req.body.cifNo,
        ifscCode: req.body.ifscCode,
        micrCode: req.body.micrCode,
    })

    // .then(user => res.json(user))
    // .catch(err => {console.log(err)
    // res.json({error: 'Please Enter a unique value for email,account number',messsage:err.messsage})});

})

module.exports = router