const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(150)
    .required(),

  content: Joi.string()
    .min(10)
    .required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(150),

  content: Joi.string(),
}).min(1);

module.exports = {
  createPostSchema,updatePostSchema
};