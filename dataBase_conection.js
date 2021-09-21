var mysql = require("mysql");

var dataBase = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "admin",
    database: "mercado"
});

dataBase.connect(function(err){
    if (err) throw err;
    console.log("Banco de dados conectado!")
});

module.exports = dataBase;