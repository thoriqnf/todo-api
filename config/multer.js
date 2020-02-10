const multer = require("multer");

const configuration = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./assets/images");
    },
    filename: (req, file, cb) => {
        let filetype = "";

        if (file.mimetype === "image/png") {
            filetype = "png";
        } else if (
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg"
        ) {
            filetype = "jpg";
        }

        cb(null, file.originalname.replace(/ /g, "_"));
    }
});

const upload = multer({ storage: configuration });

module.exports = upload;
