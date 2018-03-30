var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    //Create a database names "bamazon"
    con.query("CREATE DATABASE bamazon", function (err, result) {
        if(err) throw err;
        console.log("Database Created");
    })
})