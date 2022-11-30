const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
// app.use(function (req, res, next) {
//   res.setHeader("Cross-Origin-Resource-Policy", "same-site");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT || 3500, () => {
  console.log(`Server running`);
});
