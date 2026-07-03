const commentService = require("../services/comment.service");
const ApiResponse = require("../utils/ApiResponse");

const createComment = async (req, res) => {
  const comment = await commentService.createComment(
    req.params.postId,
    req.user.userId,
    req.body
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      "Comment added successfully",
      comment
    )
  );
};
const getCommentsByPost = async (req, res) => {
  const comments = await commentService.getCommentsByPost(
    req.params.postId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Comments fetched successfully",
      comments
    )
  );
};

module.exports = {
  createComment,
  getCommentsByPost,
};
