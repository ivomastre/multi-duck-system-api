import multer from "multer"
export default multer({
    storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const time = Date.now();
            const filename = `${time}-${file.originalname}`;
            cb(null, filename);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.indexOf('image/') !== 0) {
            cb(new Error('File is not an image'));
        } else {
            cb(null, true);
        }
    },
    limits: {
        fileSize: 2000000,
    }
})