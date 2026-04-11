import { Router } from "express";
import { searchText } from "../db/pinecone.js";
const chatRouter = Router();

chatRouter.get("/", async(req, res)=>{
    const text = req.body.text;
    try{
        const response = await searchText(text);
        res.status(200).json({
            message: response
        });
    }
    catch(err){
        console.error(err);
        res.json({
            message: "Error Fetching results"
        })
    }
})

export default chatRouter;