import chat from './../../../public/assets/chat.png'
export default function SelectChat() {
    return (
        <div className="h-full flex justify-center items-center flex-col">
            <img
                className="w-2/12 mb-7"
                src={chat}
                alt="select chat icon" />
            <h2 className="text-lg font-bold text-slate-600">Select a Chat</h2>
        </div>
    )
}
