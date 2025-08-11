const multer = require("multer");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "../../uploads/dnis");
fs.mkdirSync(dir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, dir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `dni_${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const ok = ["image/jpeg","image/png","image/webp","application/pdf"].includes(file.mimetype);
  cb(ok ? null : new Error("Tipo de archivo no permitido"), ok);
};

module.exports = multer({ storage, fileFilter, limits: { fileSize: 2 * 1024 * 1024 } }); // 2MB
