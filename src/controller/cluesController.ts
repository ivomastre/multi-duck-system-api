import { IGenericPagination } from "../dto/genericPagination.type";
import { CluesModel } from "../models";
import { IClues } from "../models/clues.model";

export class CluesController {
  async list({ limit, offset }) {
    return {
      pagination: {
        limit,
        offset,
        total: await CluesModel.countDocuments(),
      },
      data: await CluesModel.find()
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({ createdAt: -1 }),
    };
  }

  async show(id: string) {
    return {
      data: await CluesModel.findById(id),
    };
  }

  async create(clue: IClues) {
    return await CluesModel.create(clue);
  }
}
