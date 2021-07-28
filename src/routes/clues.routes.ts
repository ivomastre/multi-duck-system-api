import 'reflect-metadata'
import express, { Router, Request } from 'express';
import { CluesController } from '../controller/cluesController';
import { IGenericPagination } from '../dto/genericPagination.type';
import { joiMiddleware } from '../utils/joiMiddleware';
import Joi from 'joi';
import multer from '../config/multerConfig'
import { ICreateClueRequest } from '../@types/routes/clues';
import uploadToImgur from '../utils/uploadToImgur';
import { handleErr } from '../utils/routeErrorHandler';
const cluesRoutes = Router();

cluesRoutes.get(
  '/clues',
  joiMiddleware(Joi.object({
    query: {
      limit: Joi.number().integer().min(1).max(20).default(10),
      offset: Joi.number().integer().min(0).default(0),
    }
  })),
  handleErr(async (req: IGenericPagination, res) => { 
    const controller = new CluesController();
    return res.json(await controller.list(req.query))
  })
);

cluesRoutes.post(
  '/clues',
  multer.array('photos', 20),
  handleErr(async (req: ICreateClueRequest, res) => {
    const controller = new CluesController();
    return res.json(await controller.create({
      photos: await uploadToImgur(req.files),
      ...req.body
    }))
  })
);
export default cluesRoutes;
