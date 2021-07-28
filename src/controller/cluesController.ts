import { IGenericPagination } from "../dto/genericPagination.type"
import { CluesModel } from "../models"
import { IClues } from "../models/clues.model"


export class CluesController {
    async list({limit, offset}){
        return await CluesModel.find().limit(Number(limit)).skip(Number(offset)).sort({ createdAt: -1 })
    }

    async create(clue: IClues) {
        console.log(clue)
        const x = CluesModel.create(clue)
        return await CluesModel.create(clue)
    }
}