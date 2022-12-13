const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5000,
  password: "admin",
  database: "eshop",
});

client.connect();

app.use(cors());
// app.use(function (req, res, next) {
//   res.setHeader("Cross-Origin-Resource-Policy", "same-site");
//   next();
// });
const jsonParser = bodyParser.json();
app.get("/users", async (req, res) => {
  try {
    await client.query("SELECT * FROM users", (err, response) => {
      res.status(200).json(response.rows);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
app.put("/users/edit/:id", jsonParser, async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.body.email;
    const newEmail = await client.query(
      "UPDATE users SET email = $1 WHERE id = $2",
      [email, id]
    );

    res.status(200).json(newEmail);
  } catch (err) {
    res.status(500).json(err);
  }
});



app.listen(process.env.PORT || 3500, () => {
  console.log(`Server running`);
});

