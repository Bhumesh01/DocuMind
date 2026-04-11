import { Router } from "express";
import { searchText } from "../db/pinecone.js";
import { queryUsingText } from "../services/summarize.js";
const chatRouter = Router();

chatRouter.get("/", async(req, res)=>{
    const query = String(req.query.text);
    if(!query){
        res.status(400).json({
            message: "Please Enter the text"
        });
    }
    try{
        const response = await searchText(query);
        if(!response){
            res.status(200).json({
                message: "No Data Found"
            });
            return;
        }
        const result = await queryUsingText(response, query);
        res.status(200).json({
            message: result
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