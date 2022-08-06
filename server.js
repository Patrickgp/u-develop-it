const mysql = require("mysql2");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to mysql database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: "root",
    // MySQL password
    password: "",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
// Put after all API Calls!!!!
app.use((req, res) => {
  res.status(404).end();
});

// Starts Express.js server on port designated above
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
