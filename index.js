const express = require("express");
const app = express();
const PORT = "3000";
const db = require("./config/database");

app.use(express.json());

//! ROUTES
app.use("/products", require("./routes/products"))

//* EXERCISE 1

//todo CREATE DATA BASE
app.get("/createdbd", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created :)...");
  });
});

//todo CREAR TABLE PRODUCTS
app.get("/createTableProducts", (req, res) => {
  let sql =
    "CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(255), price DECIMAL(10,2), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table products created :)");
  });
});

//todo CREAR TABLE CATEGORIES
app.get("/createTableCategories", (req, res) => {
  let sql =
    "CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Tabla creada correctamente :)");
  });
});


//XERCISE 2

//todo INSERT NEW PRODUCT FROM POSTMAN
// app.post("/createNewProduct/", (req, res) => {
//   let sql = `INSERT INTO products (name, price) values 
//               ('${req.body.name}', ${req.body.price});`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Nuevo producto añadido correctamente :)");
//   });
// });* E


//todo INSERT NEW CATEGORY FROM POSTMAN
app.post("/createNewCategory/", (req, res) => {
  let sql = `INSERT INTO categories (name) values 
              ('${req.body.name}');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Nueva category añadida correctamente :)");
  });
});

//* EXERCISE 3

//todo UPDATE PRODUCTS FROM POSTMAN
//? UPDATE PRODUCT NAME
app.put("/updateProductNameById/:id/", (req, res) => {
  let sql = `UPDATE products SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Se actualiza el nombre del producto correctamente :) SIUUU");
  });
});
//! ME IMPRIMÍA TANTO EL NOMBRE COMO EL PRECIO EN LA MISMA COLUMNA "name".
//! HE PROBADO DONDE PONE "UPDATE products SET name"
//! PONER "UPDATE products SET (name,price) = ('${req.body.name}', ${req.body.price}) "
//! Y UN MONTÓN DE VARIANTES añadiendo y quitando cosas, añadí incluso el values, poner comillas especiales ``... Y NADA :(
//! No quiere...

//! NO ME QUEDA OTRA QUE CREAR OTRA app QUE SE ENCARGUE ÚNICAMENTE DEL PRECIO...

//? UPDATE PRODUCT PRICE
app.put("/updateProductPriceById/:id/", (req, res) => {
  let sql = `UPDATE products SET price = '${req.body.price}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Se ha actualizado el precio del producto correctamente :)");
  });
});

//todo UPDATE PRODUCT NAME
//? La tabla categories solo contiene la columna "name"
app.put("/updateCategoryNameById/:id", (req, res) => {
  let sql = `UPDATE categories SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Se ha actualizado el precio del producto correctamente :)");
  });
});

//* EXERCISE 3

// todo SHOW ALL PRODUCTS
app.get("/showAllProducts", (req, res) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//todo SHOW ALL CATEGORIES
app.get("/showAllCategories", (req, res) => {
  let sql = "SELECT * FROM categories";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//todo SHOW PRODUCTS WITH THEIR CATEGORIES

//todo SELECT A PRODUCT BY ID
app.get("/showProductById/:id", (req, res) => {
  let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//todo SHOW PRODUCTS DESCENDINGLY
app.get("/showProductsDesc", (req, res) => {
  let sql = "SELECT * FROM products order by id desc";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//todo SHOW CATEGORY BY ID
app.get("/showCategoryById/:id", (req, res) => {
  let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//todo SHOW BY NAME
app.get("/showProductByName/:name", (req, res) => {
  let sql = `SELECT * FROM products WHERE name = '${req.params.name}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//* EXERCISE 4
//todo  DELETE PRODUCT BY ID
app.delete("/deleteProductByID/:id", (req, res) => {
  let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product deleted by Id. See you in the next life... :_)");
  });
});

app.listen(PORT, () => {
  console.log("Servidor levantado en el port 3000");
});
