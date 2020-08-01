const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncremenet: true,
    allowNull: false,
    primaryKey: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports.User;
