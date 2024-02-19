import Joi from "joi";

export const creatProduct = Joi.object({
  name: Joi.string().min(6).max(30).trim().required(),
  description: Joi.string().min(6).max(100).trim().required(),
  categoryId: Joi.number().integer().required(),
  price: Joi.number().integer().min(1).required(),
  photo: Joi.string().uri().required()
});