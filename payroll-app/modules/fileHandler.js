const fs = require('fs');

const file = 'employees.json';


// read file
function read() {

    let data = fs.readFileSync(file);

    return JSON.parse(data);

}


// write file
function write(data) {

    fs.writeFileSync(file, JSON.stringify(data, null, 2));

}


module.exports = { read, write };