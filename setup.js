var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
  //database: "mydb"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");// Lav Databasen
    var sql = "CREATE DATABASE mydb"; //SQL is the query that will be executed on the server
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Created DB = mydb");
      console.log("start setup2.js");
      
    });
  });