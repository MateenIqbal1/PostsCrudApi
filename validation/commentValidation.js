const Joi = require("joi");

const createCommentSchema = Joi.object({
  content: Joi.string()
    .trim()
    .min(1)
    .required(),
});

module.exports = {
  createCommentSchema,
};