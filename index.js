const express = require("express");
const app = express();
const PORT = "3000";
const db = require("./config/database.js");

app.use(express.json());

//? Rutas
// app.use("/products",require("./routes/products.js"))
// app.use("/categories",require("./routes/posts"))

//? CREAR BASE DE DATOS
app.get("/createdbd", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created :)...");
  });
});

//? CREAR TABLE PRODUCTS
app.get("/createTableProducts", (req, res) => {
  let sql =
    "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(255), price DECIMAL(10,2), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table products created :)");
  });
});
//? CREAR TABLE CATEGORIES
app.get("/createTableCategories", (req, res) => {
  let sql =
    "CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Tabla creada correctamente :)");
  });
});

// //? DELETE TABLE CATEGORIES
// app.get("/dropTableCategories", (req, res) => {
//   let sql =
//       "DROP TABLE categories";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Table categories deleted. See you in the next life... :)");
//   });
// });

//? INSERT NEW PRODUCT FROM POSTMAN
app.post("/createNewProduct/", (req, res) => {
  let sql = `INSERT INTO products (name, price) values 
              ('${req.body.name}', ${req.body.price});`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Nuevo producto añadido correctamente :)");
  });
});

//? INSERT NEW CATEGORY FROM POSTMAN
app.post("/createNewCategory/", (req, res) => {
  let sql = `INSERT INTO categories (name) values 
              ('${req.body.name}');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result); 
    res.send("Nueva category añadida correctamente :)");
  });
});
// ? GET ALL PRODUCTS
app.get("/id/:id", (req,res) =>{
  let sql = `SELECT * FROM products WHERE id = ('${req.body.name}', ${req.body.price})`;
  db.query(sql, (err,result) =>{
    if(err) throw err;
    res.send(result)
  })
})

app.put("/id/:id/", (req, res) => {
  let sql = `UPDATE products SET name = "magia" WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Se actualiza el producto correctamente :)");
  });
});







app.listen(PORT, () => {
  console.log("Servidor levantado en el port 3000");
});
