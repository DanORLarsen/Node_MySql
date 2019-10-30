var express = require('express');
var router = express.Router();
var connection = require('../connection.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('layout', { title: 'Movieseat' });

  connection.connect();

    connection.query('SELECT * FROM customers', function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      console.log(results);
      var resultss = "";
      var i = 1;
      results.forEach(element => {
        resultss = resultss + ("Customer "+i+" - name: "+element.name + " address: " + element.address + "<br>");
        i++;
      });
      res.send('<html><body><h2>Database Data</h2><p>' +  resultss  + ' </p></body></html>');
    });
    
  connection.end();
});

module.exports = router;