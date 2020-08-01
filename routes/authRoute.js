const { check } = require('express-validator')
const router = require('express').Router()
const authController = require('../controllers/authController')


router.post('/user',[
  check('username')
    .not()
    .isEmpty()
    .withMessage('Username cannot be empty.')
    .trim()
    .escape(),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password should be more than 5 characters')
    .trim()
    .escape()
], authController.userRegistration)

router.post("/user/auth",[
  check('username')
    .not()
    .isEmpty()
    .withMessage('Username cannot be empty.')
    .trim()
    .escape(),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password should be more than 5 characters')
    .trim()
    .escape()
],authController.userLogin)

module.exports = router