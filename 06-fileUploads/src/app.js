import express from "express"
import multer, { MulterError } from "multer"
const app = express();

app.use(express.json());

app.get("/health", (req,res) => { 
    res.send("hi i am alive");
})

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, JPG and PNG files are allowed"));
    }
  },
});

app.post("/uploads",upload.array("files",2), (req, res) => { 
    res.json({message:"File has been Uploaded Successsfully ",file:req.files})
})


app.use((err, req, res, next) => {
    if (err instanceof MulterError) {
        return res.status(400).json(err.message);
    }

    if (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
    next();
})

export default app;