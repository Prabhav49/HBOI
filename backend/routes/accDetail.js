const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
const Balance = require('../models/AccDetail')
const { body, validationResult } = require('express-validator');

//ROUTE - 1 :Get all the Details: GET '/api/accDetail/getuser. Login Required
router.get('/fetchalldetails', fetchuser, async (req, res) => {
    try {
        const Balance = await Balance.find({ user: req.user.id });
        res.json(details)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//ROUTE - 2 :Adding Amount: POST '/api/accDetail/addamount. Login Required
router.get('/addamount', fetchuser, [
    body('accountBalance', 'Enter a Valid Amount').isNumeric({ min: 1 }),], async (req, res) => {

    try {
        const{accountBalance} = req.body;
        //If there are error, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const amount = new Balance({
            accountBalance, user:req.user.id
        })
    
        const savedAmount = await amount.save()
    
        res.json(savedAmount)
    }catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//ROUTE - 3 :Updating Amount: POST '/api/accDetail/updateamount. Login Required
router.put('/updateamount/:id', fetchuser, async (req, res) => {
   const {accountBalance} = req.body;
   //Create a newAmount object

   const newAmount = {};

   if(accountBalance) {newAmount.accountBalance = accountBalance};

   //Find the amount to be updated and update it
   let userAmount = await Balance.findById(req.params.id);
   if(!userAmount){return res.status(404).send("Not Found")}
   
   if(newAmount.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed");
   }

   newAmount = await Balance.findByIdAndUpdate(req.params.id, {$set: newAmount}, {new:true})

   res.json(newAmount)
})

module.exports = router