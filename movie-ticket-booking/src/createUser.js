import fs from "fs";

function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    let users = [];

    if (fs.existsSync("user.json")) {
      const data = fs.readFileSync("user.json", "utf-8");
      users = JSON.parse(data);

      const isUser = users.find(a => a.email === email );
      if (isUser) {
        return res.status(409).send("User already exists");
      }
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(newUser);

    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));

    res.status(201).send("User created successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default createUser;