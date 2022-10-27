const express = require("express");
const app = express();
const PORT = "3000";
const db = require("./config/database.js");

app.use(express.json());

app.get("/createdbd", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created :)...");
  });
});

app.listen(PORT, () => {
  console.log("Servidor levantado en el port 3000");
});
