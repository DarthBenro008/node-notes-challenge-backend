const { validationResult } = require("express-validator");
const notesModel = require("../models/notes");

const createNotes = async (req, res) => {
  const errors = validationResult(req);
  const mailArray = [];
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  notesModel
    .create({
      title: req.body.title,
      body: req.body.body,
      userId: req.body.id,
    })
    .then(() => {
      return res.json({ status: "sucess" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, error: err.toString() });
    });
};

module.exports = createNotes;
