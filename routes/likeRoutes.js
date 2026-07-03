const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { toggleLike , getLikes} = require("../controllers/likeController");
const validateObjectId = require("../middleware/likeMiddleware")


router.post("/posts/:postId/like", authMiddleware,validateObjectId,toggleLike);
router.get("/posts/:postId/likes", authMiddleware,validateObjectId,getLikes);


module.exports = router;