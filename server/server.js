const PORT = process.env.PORT ?? 8000;
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// todo requests
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

const database = {
  todos: [
    {
      id: "0",
      user_email: "paula@gmail.com",
      title: "First todo",
      progress: 10,
      date: "123",
    },
    {
      id: "1",
      user_email: "ania@gmail.com",
      title: "First todo",
      progress: 10,
      date: "123",
    },
  ],
  users: [
    { email: "paula@gmail.com", hashed_password: "cookies" },
    { email: "ania@gmail.com", hashed_password: "123" },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  //   bcrypt.compare(
  //     "apples",
  //     "$2b$10$W9i1LuTnpk295hCNCBUo1u0HIw4bQUt6lFHZmX7zGwomG7vP3ZtPS",
  //     function (err, result) {
  //       console.log("first guess", res);
  //     }
  //   );

  if (
    req.body.email === database.users[0].email &&
    req.body.hashed_password === database.users[0].hashed_password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/register", (req, res) => {
  const { email, hashed_password } = req.body;

  const hash = bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // console.log(hash);
    });
  });

  database.users.push({
    id: "125",
    email: email,
    password: password,
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
