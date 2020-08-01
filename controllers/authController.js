const { validationResult } = require("express-validator");
const userModel = require("../models/user");

const userLogin = (req, res) => {
  const errors = validationResult(req);
  const mailArray = [];
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  console.log(req.body);
  userModel
    .create({
      username: req.body.username,
      password: req.body.password,
    })
    .then(() => {
      return res.json({ status: "account created" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false });
    });
};

module.exports = userLogin;
