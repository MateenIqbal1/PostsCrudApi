const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { createLike } = require("../controllers/likeController");
const validateObjectId=require("../middleware/likeMiddleware")


router.post("/posts/:postId/like", authMiddleware,validateObjectId,createLike);

module.exports = router;