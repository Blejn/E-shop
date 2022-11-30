const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5000,
  password: "admin",
  database: "eshop",
});

client.connect();
client.query("Select * from users", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
// module.exports = database;
