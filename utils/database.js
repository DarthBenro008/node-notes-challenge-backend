const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-database", "nodejs", "node", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
