import multer from "multer"
export default multer({
    storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const time = Date.now();
            const filename = `${time}-${file.originalname}`;
            cb(null, filename);
        }
    })
})