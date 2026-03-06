const express = require('express');

const router = express.Router();

const authController = require('../controller/authController');


// routes

router.get('/login', (req,res)=>{

res.render('login');

});


router.get('/signup', (req,res)=>{

res.render('signup');

});


router.post('/login', authController.login);

router.post('/signup', authController.signup);


// IMPORTANT LINE

module.exports = router;