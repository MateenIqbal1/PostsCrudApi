const Post = require("../models/Post");
const ApiError = require("../utils/ApiError");

const createPost = async (data, userId) => {
  const { title, content } = data;



  const post = await Post.create({
    title,
    content,
    userId: userId,
  });

  return post;
};

const getAllPosts = async () => {
  return await Post.find().populate("userId", "name email");
};

const getPostById = async (postId) => {
  const post = await Post.findById(postId).populate("userId", "name email");

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  return post;
};

const updatePost = async (postId, data, userId) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  if (post.userId.toString() !== userId) {
    throw new ApiError(403, "You are not authorized to update this post");
  }

  if (data.title !== undefined) {
    post.title = data.title;
  }

  if (data.content !== undefined) {
    post.content = data.content;
  }

  await post.save();

  return post;
};

const deletePost = async (postId, userId) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  if (post.userId.toString() !== userId) {
    throw new ApiError(403, "You are not authorized to delete this post");
  }

  await Post.findByIdAndDelete(postId);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};