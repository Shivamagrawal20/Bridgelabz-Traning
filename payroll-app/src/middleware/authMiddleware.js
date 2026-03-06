const jwt = require('jsonwebtoken');

const SECRET = "secret123";

module.exports = (req,res,next)=>{

let token = req.cookies.token;

if(!token) return res.redirect('/login');

try{

jwt.verify(token,SECRET);

next();

}
catch{

res.redirect('/login');

}

};