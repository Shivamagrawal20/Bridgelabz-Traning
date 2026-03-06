const fs = require('fs');

const file = 'users.json';

function getUsers(){

return JSON.parse(fs.readFileSync(file));

}

function saveUsers(users){

fs.writeFileSync(file, JSON.stringify(users,null,2));

}

module.exports = { getUsers, saveUsers };