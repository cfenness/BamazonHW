var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    //Create a database names "bamazon"
    
    var sql = "CREATE TABLE products (item_id INTEGER  NOT NULL AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(50) NOT NULL, department_name VARCHAR(50) NOT NULL, price INTEGER NOT NULL, stock INTEGER NOT NULL)"

    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("Table Created");
    })
})