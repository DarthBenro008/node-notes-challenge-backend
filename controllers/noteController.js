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
      userId: req.query.user,
    })
    .then(() => {
      return res.json({ status: "sucess" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, error: err.toString() });
    });
};

const fetchNotes = async (req, res) => {
  const notesInfo = await notesModel.findAll({
    where: { userId: req.query.user },
  });
  console.log(notesInfo[0]);
  if (notesInfo === null) {
    return res.json({ success: false });
  } else {
    return res.json({ notes: notesInfo });
  }
};

module.exports = {createNotes,fetchNotes};
