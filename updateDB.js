const connection = require("./database");

function update(price) {
    connection.connect(function(err) {
        console.log("This is the price: " + price);
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO price_data (date_time, ask_price) VALUES ?";
        var values = [
          ['2021-10-10 00:23:50', price],
        ];
        connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        });
    });
}

module.exports =  update ;