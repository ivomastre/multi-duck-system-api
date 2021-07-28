import { Schema, model } from 'mongoose'

export interface IClues {
    title: string,
    description: string,
    photos: string[],
}
const CluesSchema = new Schema({
    title: String,
    description: String,
    photos: [String]
}, { timestamps: true })

export default model<IClues>('clues', CluesSchema)