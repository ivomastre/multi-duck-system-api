import express from "express";
import Joi from "joi";
export function joiMiddleware(schema: Joi.ObjectSchema) {
  return async (req, res: express.Response, next) => {
    const { error } = schema.validate(req, {
        abortEarly: false, 
        allowUnknown: true, 
        stripUnknown: true 
    });
    if (error) {
      return res.status(400).json({
        error: error.details,
      });
    }
    await next();
  };
}