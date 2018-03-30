var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: 'bamazon'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO products (product_name, department_name, price, stock) VALUES ?";
    var values = [
      ['Speaker', 'Music', 30, 120],
      ['Keyboard', 'Computers', 45, 150],
      ['Mouse', 'Computers', 25, 88],
      ['Headphones', 'Music', 65, 125],
      ['Laptop', 'Computers', 1500, 15],
      ['Phone', 'Mobile', 1000, 45],
      ['Laptop Charger', 'Computers', 150, 35],
      ['Couch', 'Furniture', 900, 12],
      ['Coffee Table', 'Furniture', 125, 50],
      ['End Table', 'Furniture', 75, 50],
      ['Phone Charger', 'Mobile', 25, 100],
      ['Printer', 'Computers', 175, 65],
      ['Lamp', 'Furniture', 35, 90],
      ['Chair', 'Furniture', 350, 31]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });