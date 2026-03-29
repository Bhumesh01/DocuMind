import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Hello World",
    });
})

app.listen(3000, ()=>{
    console.log("App running at Port 3000")
});