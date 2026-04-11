import { Router } from "express";
import uploadRouter from "./upload.js";
import chatRouter from "./chat.js";
const router =  Router();
router.get("/", (req, res)=>{
    res.status(200).json({
        message: "Success"
    })
})
router.use("/upload", uploadRouter)
router.use("/chat", chatRouter)
export default router;