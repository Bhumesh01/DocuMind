import ReactMarkDown from "react-markdown";
import binLogo from "../assets/bin.svg"
export default function MessageCard(props:{message: string, setResponse: React.Dispatch<React.SetStateAction<string>>}){
    return(
        <div className="bg-surface flex justify-start px-4 py-6 items-center flex-col rounded-2xl gap-2 mb-5 w-md">
            <div className="flex justify-end w-full text-2xl px-2">
                <div onClick={()=>{props.setResponse("")}}>
                    <img className="hover:scale-110" src={binLogo} alt="Delete option"></img>
                </div>
            </div>
            <h1 className="text-2xl font-semibold">SUMMARY</h1>
            <ReactMarkDown>{props.message}</ReactMarkDown>
        </div>
    )
}