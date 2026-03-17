import type { MouseEventHandler } from "react"

type Buttonprops = {
    text: string,
    onClick: MouseEventHandler<HTMLDivElement>,

}
export default function Button(props:Buttonprops){
    return(
        <div className="bg-indigo-500 hover:bg-indigo-700 text-white
                   font-bold rounded-2xl px-6 py-2.5 text-center cursor-pointer" onClick={props.onClick}>
                    {props.text}
        </div>
    )
}