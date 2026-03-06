const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const { getUsers, saveUsers } = require('../model/userModel');

const SECRET = "secret123";


exports.signup = (req,res)=>{

let users = getUsers();

let hash = bcrypt.hashSync(req.body.password,8);

users.push({

email:req.body.email,

password:hash

});

saveUsers(users);

res.redirect('/login');

};



exports.login = (req,res)=>{

let users = getUsers();

let user = users.find(u=>u.email==req.body.email);

if(!user) return res.send("User not found");

let valid = bcrypt.compareSync(req.body.password,user.password);

if(!valid) return res.send("Wrong password");

let token = jwt.sign({email:user.email},SECRET);

res.cookie('token',token);

res.redirect('/');

};