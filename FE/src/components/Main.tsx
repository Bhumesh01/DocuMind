import { useState } from "react"
import drop from "../assets/drop.svg"
import Button from "./Button";
import axios, {isAxiosError} from "axios";
import MessageCard from "./Card";
export default function Main(){
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>("Please Select Your Pdf File");
    const [selectedPdf, setSelectedPdf] = useState<boolean>(false);
    const [response, setResponse] = useState<string>("");
    async function Summarize(file:File) {
        try{
            const formData = new FormData();
            formData.append("pdf", file); // key must match backend

            const res = await axios.post(
                "http://localhost:3000/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            setResponse(res.data.message);
        }
        catch(error){
            if(isAxiosError(error)){
                setResponse("Error Summarizing")
            }
        }
    }
    return(
        <div className="flex justify-center items-center gap-5 flex-col">
            <div className="bg-surface  flex h-fit justify-start px-4 py-6 items-center flex-col rounded-2xl w-fit gap-2">
                <h1 className="text-4xl font-semibold">Analyze Your Pdf</h1>
                <div className="text-indigo-700 font-medium">{message}</div>
                <label className="w-60 mt-5 mb-5 h-50 border-2 border-indigo-800 border-dotted rounded-2xl flex items-center justify-center gap-2 flex-col hover:bg-indigo-100">
                    <img src={drop} alt="Drop Icon"></img>
                    <div>Click to upload</div>
                    <input onChange={(event)=>{
                        setSelectedPdf(false);
                        setPdfFile(null);
                        const files = event.target.files;
                        if(files?.length==0){
                            setMessage("Please Select Your Pdf File");
                            return;
                        }
                        const file = event.target.files?.[0];
                        if(file){
                            setMessage("Please press the button to get the summary");
                            setPdfFile(file);
                            setSelectedPdf(true);
                        }
                    }} type="file" accept=".pdf" className="hidden" ></input>
                    <div className="text-sm font-light text-gray-500 text-center max-w-50 truncate" title={pdfFile ? pdfFile.name : ""}>{pdfFile ? pdfFile.name : "PDF files only (Max 20MB)"}</div>
                </label>
                <Button text={selectedPdf?"Summarize":"Select a file first"} onClick={()=>{if(pdfFile)Summarize(pdfFile)}} ></Button>
            </div>
            <div className="w-full">
                {response&&<MessageCard message={response}></MessageCard>}
            </div>
        </div>
    )
}