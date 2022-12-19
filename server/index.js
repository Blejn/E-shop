const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const { response } = require("express");
const client = new Client({
  host: "tomaszrozko97.helioho.st",
  user: "tomaszrozko97_DBUser",
  port: 5432,
  password: "PostgresDB123",
  database: "tomaszrozko97_eshop",
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

app.get("/products", async (req, res) => {
  try {
    await client.query("SELECT * FROM products", (err, response) => {
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

app.post("/products/add", jsonParser, async (req, res) => {
  try {
    let randId = Math.floor(Math.random() * 10000000000);
    const title = req.body.title;
    const author = req.body.author;
    const price = req.body.price;
    const image = req.body.image;
    const category = req.body.category;
    const newProduct = await client.query(
      "INSERT INTO products(id, title, author, price, image, category) VALUES ($1, $2, $3, $4, $5,$6)",
      [randId, title, author, price, image, category]
    );
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.get("/products/promotions", jsonParser, async (req, res) => {
  try {
    await client.query(
      "SELECT * FROM products WHERE promotion = true",
      (err, response) => {
        res.status(200).json(response.rows);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(process.env.PORT || 3500, () => {
  console.log(`Server running`);
});
