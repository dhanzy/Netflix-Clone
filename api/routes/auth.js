const router = require('express').Router()
const User = require('../models/User')
const { RegisterUser } = require('../controllers/auth');


router.route("/register").post(RegisterUser)


module.exports = router;
