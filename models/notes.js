const Sequelize = require("sequelize");
var EncryptedField = require('sequelize-encrypted');
const sequelize = require("../utils/database");


var key = process.env.ENCRYPTION_KEY;
 
var enc_fields = EncryptedField(Sequelize, key);

const Notes = sequelize.define("notes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  encrypted: enc_fields.vault('encrypted'),
  title: enc_fields.field('title'),
  body: enc_fields.field('body'),
});

module.exports = Notes;
