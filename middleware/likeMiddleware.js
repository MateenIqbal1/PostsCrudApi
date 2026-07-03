const mongoose = require("mongoose");
const ApiError = require("../utils/ApiError");

const validateObjectId = (req, res, next) => {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return next(new ApiError(400, "Invalid post id"));
    }

    next();
};

module.exports = validateObjectId;