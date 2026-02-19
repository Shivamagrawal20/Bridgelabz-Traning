import fs from "fs";
import bcrypt from "bcrypt";

let userfile = "modules/employees.json";

// Create User
export function createuser(name, email, password) {
    try {

        if (!fs.existsSync(userfile)) {
            fs.writeFileSync(userfile, JSON.stringify([]));
        }

        let data = JSON.parse(fs.readFileSync(userfile, "utf-8"));

        let isemail = data.find((value) => value.email === email);
        if (isemail) {
            return "user already exists";
        }

        let salt = bcrypt.genSaltSync(10);
        let hashpassword = bcrypt.hashSync(password, salt);

        let ob = {
            id: Date.now(),
            name,
            email,
            password: hashpassword
        };

        data.push(ob);

        fs.writeFileSync(userfile, JSON.stringify(data, null, 2));

        return ob;

    } catch (error) {
        console.log(error);
        console.log("Error creating user");
        return null;
    }
}


// Login Function
export function login(email, password) {
    try {

        if (!fs.existsSync(userfile)) {
            return "No users found";
        }

        let data = JSON.parse(fs.readFileSync(userfile, "utf-8"));

        let isemail = data.find((value) => value.email === email);
        if (!isemail) {
            return "User does not exits";
        }

        let check = bcrypt.compareSync(password, isemail.password);
        if (!check) {
            return null;
        }

        return isemail;

    } catch (error) {
        console.log(error);
        console.log("Error logging in");
        return null;
    }
}


// Update User Function
export function updateUser(id, password, email, name) {
    try {

        if (!fs.existsSync(userfile)) {
            return "no Users Found";
        }

        let data = JSON.parse(fs.readFileSync(userfile, "utf-8"));

        let userindex = data.findIndex((value) => value.id == id);

        if (userindex === -1) {
            return "user not found";
        }

        data[userindex].name = name;
        data[userindex].email = email;

        if (password) {
            let salt = bcrypt.genSaltSync(10);
            let hashpassword = bcrypt.hashSync(password, salt);
            data[userindex].password = hashpassword;
        }

        fs.writeFileSync(userfile, JSON.stringify(data, null, 2));

        let ob = {
            name: data[userindex].name,
            mail: data[userindex].email
        };

        return ob;

    } catch (error) {
        console.log("user update", error);
        return null;
    }
}