const postService = require("../services/post.service");
const ApiResponse = require("../utils/ApiResponse");

const createPost = async (req, res) => {
  console.log("this is user id ",req.user)
  const post = await postService.createPost(req.body, req.user.userId);
  return res.status(201).json(
    new ApiResponse(201, "Post created successfully", post)
  );
};

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();

  return res.status(200).json(
    new ApiResponse(200, "Posts fetched successfully", posts)
  );
};

const getPostById = async (req, res) => {
  const post = await postService.getPostById(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, "Post fetched successfully", post)
  );
};

const updatePost = async (req, res) => {
  const post = await postService.updatePost(
    req.params.id,
    req.body,
    req.user.userId
  );

  return res.status(200).json(
    new ApiResponse(200, "Post updated successfully", post)
  );
};

const deletePost = async (req, res) => {
  await postService.deletePost(req.params.id, req.user.userId);

  return res.status(200).json(
    new ApiResponse(200, "Post deleted successfully")
  );
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};