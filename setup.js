var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  //database: "mydb"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");// Lav Databasen
    var sql = "CREATE DATABASE mydb"; //SQL is the query that will be executed on the server
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Created DB = mydb");
    });
  });

  var conc = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
  });
  
  conc.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");// Lav TABEL OG DATA i Databasen
    //SQL is the query that will be executed on the server
    con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
      if (err) throw err;
      console.log("Created tabel = customers");
    });

    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['Mathias', 'Highway 69'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633'],
      ['William', 'Central st 954']
    ]; //CREATED DUMMY DATA name and customers 
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("inserted Dummydata");
    });
  });