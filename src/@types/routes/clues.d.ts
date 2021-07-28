import { File } from "multer";

export interface ICreateClueRequest {
    [x: string]: any;
    body: {
        title: string,
        description: string,
    }
}