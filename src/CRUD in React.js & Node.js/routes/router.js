const express = require('express');

const router = express.Router();

const {User} = require('../models/user');

// Get all users 
router.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Save the user to the
router.post('/api/users/add', (req, res) =>{
    const usr = new User({
        firsName: req.body.firsName,
        lastName: req.body.lastName
    }); 
    usr.save((err, data) => {
        res.status(200).json({
            code:200, 
            message:'User added susccessfully!', 
            User:data});
    })
    //res.status(500).send({ error: "boo:(" });
})

module.exports = router;