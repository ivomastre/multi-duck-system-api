import "reflect-metadata";
import express, { Router, Request } from "express";
import { CluesController } from "../controller/cluesController";
import { IGenericPagination } from "../dto/genericPagination.type";
import { joiMiddleware } from "../utils/joiMiddleware";
import Joi from "joi";
import multer from "../config/multerConfig";
import { ICreateClueRequest } from "../@types/routes/clues";
import uploadToImgur from "../utils/uploadToImgur";
import { handleAsyncErr } from "../utils/routeErrorHandler";
const cluesRoutes = Router();
const controller = new CluesController();

cluesRoutes.get(
  "/clues",
  joiMiddleware(
    Joi.object({
      query: {
        limit: Joi.number().integer().min(1).max(20).default(10),
        offset: Joi.number().integer().min(0).default(0),
      },
    })
  ),
  handleAsyncErr(async (req: IGenericPagination, res) => {
    return res.json(await controller.list(req.query));
  })
);

cluesRoutes.get(
  "/clues/:id",
  joiMiddleware(
    Joi.object({
      params: {
        id: Joi.string().required(),
      },
    })
  ),
  handleAsyncErr(async (req, res) => {
    const id = req.params.id;

    return res.json(await controller.show(id));
  })
);

cluesRoutes.post(
  "/clues",
  multer.array("photos", 20),
  joiMiddleware(
    Joi.object({
      body: {
        title: Joi.string().required(),
        description: Joi.string(),
      },
    })
  ),
  handleAsyncErr(async (req: ICreateClueRequest, res) => {
    return res.json(
      await controller.create({
        photos: await uploadToImgur(req.files, { ...req.body }),
        ...req.body,
      })
    );
  })
);
export default cluesRoutes;
