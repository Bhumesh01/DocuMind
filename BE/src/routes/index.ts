import { Router } from "express";
import uploadRouter from "./upload.js";
const router =  Router();
router.get("/", (req, res)=>{
    res.status(200).json({
        message: "Success"
    })
})
router.use("/upload", uploadRouter)
export default router;