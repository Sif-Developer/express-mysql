const express = require("express");
const router = express.Router();

const db = require("../config/database")



//* EXERCISE 2

//todo INSERT NEW PRODUCT FROM POSTMAN
router.post("/createNewProduct/", (req, res) => {
    let sql = `INSERT INTO products (name, price) values 
                ('${req.body.name}', ${req.body.price});`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Nuevo producto añadido correctamente :)");
    });
  });



  
module.exports = router
