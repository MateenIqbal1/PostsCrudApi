const express = require("express");
const router = express.Router();
const validate = require("../middleware/validationMiddleware");
const {  signupSchema , signinSchema } = require('../validation/authValidation')

const { signup ,signin} = require("../controllers/authController");


router.post("/auth/signup",validate(signupSchema) , signup);
router.post("/auth/signin",validate(signinSchema), signin);

module.exports = router;
