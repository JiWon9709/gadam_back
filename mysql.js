var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host     : 'localhost',
        user     : 'root',
        password : '111111',
        database : 'test'
        //port : '3306'
    }
);

connection.connect();
  
connection.query('SELECT * FROM crew', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();