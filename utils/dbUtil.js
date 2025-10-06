const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("students", "root", "vm4udte@W", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
  }
})();

module.exports = sequelize;

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "vm4udte@W",
//   database: "students",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log("database connection failed");
//     return;
//   }

//   console.log("database connected successfully");

//   let createTable =
//     "CREATE TABLE students (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(100), email VARCHAR(100));";

//   connection.execute(createTable, (error) => {
//     if (error) {
//       console.log("table creation failed!!");
//       return;
//     }
//     console.log("Table created successfully");
//   });
// });

// module.exports = connection;
