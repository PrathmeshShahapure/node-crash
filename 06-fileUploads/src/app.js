import express from "express"
import multer from "multer"
const app = express();

app.use(express.json());

app.get("/health", (req,res) => { 
    res.send("hi i am alive");
})

const upload = multer({
    dest: "uploads/", fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true);
         }
        else {
     cb(new Error("Only PDF, JPG and PNG files are allowed"));
        }
    }
})

app.post("/uploads",upload.single("file"), (req, res) => { 
    res.json({message:"File has been Uploaded Successsfully ",file:req.file})
})

export default app;