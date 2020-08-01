const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Notes = sequelize.define("notes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  body: Sequelize.STRING,
});

module.exports = Notes;
