//* Le damos permisos para crear una database y acceder a ella

const mysql = require("mysql2")

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin123',
    database : 'expressdb'
})

db.connect()

module.exports = db;
