
const Like = require("../models/Like");
const Post = require("../models/Post");
const ApiError = require("../utils/ApiError");


const toggleLike = async (postId, userId) => {

 
  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  const existingLike = await Like.findOne({
    postId,
    userId,
  });

  if (existingLike) {
    await Like.findByIdAndDelete(existingLike._id);

    return {
      liked: false,
      message: "Like removed",
    };
  }

  await Like.create({
    postId,
    userId,
  });

  return {
    liked: true,
    message: "Post liked",
  };
};

module.exports = {
  toggleLike,
};