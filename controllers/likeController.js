const likeService = require("../services/likeService");

const createLike = async (req, res, next) => {
  try {
    const result = await likeService.createLike(
      req.params.postId,
      req.user.id
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLike,
};