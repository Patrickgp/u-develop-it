const mysql = require("mysql2");

// Connect to mysql database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: "root",
    // MySQL password
    password: "1956sell",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
