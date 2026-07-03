const authService = require("../services/auth.service");
const ApiResponse = require("../utils/ApiResponse");

const signup = async (req, res) => {
  const result = await authService.signup(req.body);

  return res.status(201).json(
    new ApiResponse(
      201,
      "User registered successfully",
      result
    )
  );
};

const signin = async (req, res) => {
  const result = await authService.signin(req.body);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Login successful",
      result
    )
  );
};

module.exports = {
  signup,
  signin,
};