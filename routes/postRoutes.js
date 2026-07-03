const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const validate = require("../middleware/validationMiddleware")
const {  createPostSchema ,updatePostSchema} = require('../validation/postValidation')


router.post("/posts/create", authMiddleware,validate(createPostSchema), createPost);

router.get("/posts/", getAllPosts);

router.get("/posts/:id", getPostById);

router.put("/posts/:id", authMiddleware,validate(updatePostSchema) , updatePost);

router.delete("/posts/:id", authMiddleware, deletePost);

module.exports = router;