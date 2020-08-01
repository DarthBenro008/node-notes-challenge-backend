const { check } = require("express-validator");
const router = require("express").Router();
const notesController = require("../controllers/noteController");

router.post(
  "/sites",
  [
    check("title")
      .not()
      .isEmpty()
      .withMessage("title cannot be empty.")
      .trim()
      .escape(),
    check("body")
      .isLength({ min: 5 })
      .withMessage("body should be more than 5 characters")
      .trim()
      .escape(),
  ],
  notesController.createNotes
);

router.get('/sites',notesController.fetchNotes)

module.exports = router;
