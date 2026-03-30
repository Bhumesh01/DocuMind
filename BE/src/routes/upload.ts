import { Router } from "express";
import multer from "multer";
import path from "path";
import getSummary from "../services/summarize.js";
import createChunks from "../services/createChunks.js";
import insertChunks from "../db/pinecone.js";

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
const uploadRouter = Router();

uploadRouter.post("/", upload.single("pdf"), async (req, res) => {
    try {
        const filename = req.file?.filename;
        if (!filename) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const chunks = await createChunks(filename);
        if(chunks){
            await insertChunks(chunks);
        }
        const response = await getSummary("./uploads/" + filename);
        res.json({ message: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error processing PDF" });
    }
});


export default uploadRouter;