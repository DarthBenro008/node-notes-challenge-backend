const { validationResult } = require("express-validator");
const userModel = require("../models/user");

const userLogin = (req, res) => {
  const errors = validationResult(req);
  const mailArray = [];
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  return res.json({ success: "true" });
};

module.exports = userLogin;
