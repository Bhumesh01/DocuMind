export default function MessageCard(props:{message: string}){
    return(
        <div className="bg-surface flex justify-start px-4 py-6 items-center flex-col rounded-2xl gap-2 mb-5 w-full">
            <h1 className="text-2xl font-semibold">SUMMARY</h1>
            <p >
                {props.message}
            </p>
        </div>
    )
}