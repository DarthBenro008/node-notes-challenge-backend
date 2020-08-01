const { validationResult } = require("express-validator");
const userModel = require("../models/user");

const userLogin = async (req, res) => {
  const errors = validationResult(req);
  const mailArray = [];
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }

  const userInfo = await userModel.findOne({
    where: { username: req.body.username },
  });
  if (userInfo === null) {
    console.log("Not Found");
    return res.json({ status: false, error: "User Does not exist!" });
  } else {
    console.log(userInfo.password);
    if (userInfo.password === req.body.password) {
      return res.json({ status: "success", userId: userInfo.id });
    }
    return res.json({ status: false, error: "Invalid Password" });
  }
};

const userRegistration = (req, res) => {
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
      return res.json({ success: false, error: err.toString() });
    });
};

module.exports = { userRegistration, userLogin };
