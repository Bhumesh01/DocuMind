import axios from "axios";
import Button from "./Button";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
export default function Chat(){
    const queryRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    async function sendQuery(){
        setLoading(true);
        setMessage("");
        const query = queryRef.current?.value;
        if(!query){
            setMessage("Please Enter the query!");
            return;
        }
        try{
            const response = await axios.get("http://localhost:3000/api/v1/chat",{
                params: {
                    text: query
                }
            });
            setMessage(response.data.message);
        }
        catch(err){
            console.log(err);
            setMessage("Error Fetching Details");
        }
        finally{
            if (queryRef.current) {
                queryRef.current.value = "";
            }
            setLoading(false);
        }
    }
    return(
        <div className="flex justify-center items-center gap-5 w-md flex-col">
            <div className="bg-surface  flex h-fit justify-start px-4 py-6 items-center flex-col rounded-2xl w-md gap-5">
                <h1 className="text-4xl font-semibold">Query Your PDFs</h1>
                <ReactMarkdown>
                    {message}
                </ReactMarkdown>
                <div className="flex justify-between w-full px-2 gap-2">
                    <input ref={queryRef} className="flex-8/9 border border-indigo-500 rounded-2xl px-2" type="text" placeholder="Enter Your Query" alt="User Query" onKeyDown={(e) => {if (e.key === "Enter") sendQuery();}}></input>
                    <div onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          sendQuery();
                        }
                    }} className="flex-1/9">
                        <Button text={`${loading?"⏳":"➤"}`} disabled={loading} onClick={sendQuery}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}