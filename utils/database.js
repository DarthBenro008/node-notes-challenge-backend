const Sequelize = require("sequelize");

console.log(process.env.DB_SCHEMA)
const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
