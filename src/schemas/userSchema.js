import Joi from "joi";

export const schemaSignUp = Joi.object({
  name: Joi.string().min(3).max(30).trim().required(),
  email: Joi.string().email().max(100).trim().required(),
  password: Joi.string().min(6).max(25).trim().required(),
  cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
  phone: Joi.string().length(11).pattern(/^[0-9]+$/).required()
});

export const schemaSignIn = Joi.object({
  email: Joi.string().email().max(100).trim().required(),
  password: Joi.string().min(6).max(25).trim().required(),
});