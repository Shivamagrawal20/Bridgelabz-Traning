const express = require('express');

const fileHandler = require('./modules/filehandler');

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');




// Dashboard
app.get('/', (req, res) => {

    let employees = fileHandler.read();

    res.render('index', { employees });

});




// Show Add Form
app.get('/add', (req, res) => {

    res.render('add');

});




// Add Employee
app.post('/add', (req, res) => {

    let employees = fileHandler.read();


    let newEmployee = {

        id: Date.now(),

        name: req.body.name,

        profileImage: req.body.profileImage,

        gender: req.body.gender,

        department: req.body.department,

        salary: req.body.salary,

        startDate: req.body.startDate

    };


    employees.push(newEmployee);


    fileHandler.write(employees);


    res.redirect('/');

});




// Delete
app.get('/delete/:id', (req, res) => {

    let employees = fileHandler.read();


    let newList = employees.filter(emp => emp.id != req.params.id);


    fileHandler.write(newList);


    res.redirect('/');

});



app.listen(3000, () => {

console.log("Server running");

});