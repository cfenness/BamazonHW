var mysql = require('mysql');
var inquirer = require("inquirer");

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bamazon'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT item_id, product_name, department_name, price, stock FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  start();
});


function start() {
   inquirer
    .prompt([
        {
        name: "item",
        type: "input",
        message: "What item would you like to Purchase?",
        choice: function(){
            var choiceArray = [];
            for (var i = 0; i<results.length; i++) {
                choiceArray.push(results[i].item_id);
            }
            return choiceArray;
        }
        },
        {
        name: "bid",
        type: "input",
        message: "How many would you like?"

        }
    ])

    .then (function(answer) {
        var chosenItem;
        for(var i=0; i<results.length; i++){
            if(results[i].item_id === answer.choice) {
                chosenItem = results[i];
            }
        }
        if (chosenItem.highest_bid > parseInt(answer.bid)) {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock: stock - answer.bid
                  },
                  {
                    id: chosenItem.id
                  }
                ],
                function(error) {
                    if (error) throw err;
                    console.log("Order placed successfully!");
                    start();
                  }
                );
        }
        else {
            // bid wasn't high enough, so apologize and start over
            console.log("Sorry, looks like we're out of stock. How about something else...");
            start();
          }
    })
}