//* Le damos permisos para crear una database y acceder a ella

const mysql = require("mysql2")

const db = mysql.createConnection({
    host : 'localhost',
    user : 'tu usuario de Mysql',
    password : 'Tu password de Mysql',
    database : 'Tu database'
})

db.connect()

module.exports = db;
