const connection = require("./database");
const { mail } = require("./mail");

function update(time ,price) {
    connection.connect(function(err) {
        mail(price);
        console.log("This is the price: " + price);
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO price_data (date_time, ask_price) VALUES ?";
        var values = [
          [time, price],
        ];
        connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        });
    });
}

module.exports =  update ;