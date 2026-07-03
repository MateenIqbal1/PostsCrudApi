const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validationMiddleware");

const { createComment , getCommentsByPost} = require("../controllers/commentController");

const {createCommentSchema , } = require("../validation/commentValidation");

router.post("/posts/:postId/comments",authMiddleware,validate(createCommentSchema),createComment);
router.get("/posts/:postId/comments",getCommentsByPost)

module.exports = router;