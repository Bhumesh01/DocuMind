import { useState } from "react"
import drop from "../assets/drop.svg"
import Button from "./Button";
export default function Main(){
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>("Please Select Your Pdf File");
    const [selectedPdf, setSelectedPdf] = useState<boolean>(false);
    return(
        <div className="bg-surface h-fit flex justify-start px-4 py-6 items-center flex-col rounded-2xl shadow-2xl shadow-indigo-300 w-fit gap-2">
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
            <Button text={selectedPdf?"Summarize":"Select a file first"} onClick={()=>{}} ></Button>
        </div>
    )
}