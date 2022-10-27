const express = require("express");
const app = express();
const PORT = "3000";
const db = require("./config/database.js");

app.use(express.json());

//* CREAR BASE DE DATOS
app.get("/createdbd", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created :)...");
  });
});

//* CREAR TABLE PRODUCTS
app.get("/createTableProducts", (req, res) => {
  let sql =
  "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(255), price DECIMAL(10,2), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table products created :)");
  });
});

app.get("/createTableCategories", (req, res) => {
  let sql = 
      "CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table categories created :)");
  });
});

app.listen(PORT, () => {
  console.log("Servidor levantado en el port 3000");
});
