import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path"
import getSummary from "./summarize.js";

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); 
        cb(null, Date.now() + ext); 
    }
});
const upload = multer({ storage });

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Hello World",
    });
})
app.post("/upload", upload.single("pdf"), async (req, res) => {
    try {
        const filename = req.file?.filename;
        if (!filename) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const response = await getSummary("./uploads/" + filename);
        res.json({ message: response });
    } catch (error) {
        res.status(500).json({ message: "Error processing PDF" });
    }
});
app.listen(3000, ()=>{
    console.log("App running at Port 3000")
});