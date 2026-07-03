const { get } = require("../routes/likeRoutes");
const likeService = require("../services/likeService");

const toggleLike = async (req, res, next) => {
  try {
    const result = await likeService.toggleLike(
      req.params.postId,
      req.user.userId
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getLikes = async (req, res, next) => {
    try {
        const result = await likeService.getLikes(req.params.postId);

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {
  toggleLike,
  getLikes
};