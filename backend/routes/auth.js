const express = require('express');
const router = express.Router();
const User = require('../models/User')


router.get('/', (req,res)=>{


    res.send(req.body);
    const user = User(req.body);
    user.save()
    console.log(req.body);
})

module.exports = router