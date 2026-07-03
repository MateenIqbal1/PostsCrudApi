const Comment = require("../models/Comment");
const Post = require("../models/Post");
const ApiError = require("../utils/ApiError");

const createComment = async (postId, userId, data) => {
  const { content } = data;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  const comment = await Comment.create({
    postId,
    userId,
    content,
  });

  return comment;
};
const getCommentsByPost = async (postId) => {

    const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  const comments = await Comment.find({ postId })
    .populate("userId", "name")
    .sort({ createdAt: 1 });

  return comments;
};

module.exports = {
  createComment,getCommentsByPost
};