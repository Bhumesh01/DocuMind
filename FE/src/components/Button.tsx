import type { MouseEventHandler } from "react"

type Buttonprops = {
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean

}
export default function Button(props:Buttonprops){
    return(
        <button disabled={props.disabled?true: false} className="bg-indigo-500 hover:bg-indigo-700 text-white
                   font-bold rounded-2xl px-6 py-2.5 text-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" onClick={props.onClick}>
                    {props.text}
        </button>
    )
}