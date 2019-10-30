var mysql = require('mysql');

var concc = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
  });

  concc.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");// Lav TABEL OG DATA i Databasen
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
    concc.query(sql, [values], function (err, result) {r
      if (err) throw err;
      console.log("inserted Dummydata");
      console.log("Setup finished");
    });
  });