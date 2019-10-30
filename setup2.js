var mysql = require('mysql')

var conc = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
  });
  
  conc.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");// Lav TABEL OG DATA i Databasen
    conc.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
      if (err) throw err;
     console.log("Created tabel = customers");
     console.log("start setup3.js");
     
    });
  });