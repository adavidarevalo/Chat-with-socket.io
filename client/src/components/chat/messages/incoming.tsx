import { IMessage } from "../../../types/message"
import dateFormat from "../../../utils/date_format"


export default function IncomingMessage({ message }: { message: IMessage }) {

    const { message: messageText, createdAt } = message

    return (
        <li className="flex flex-col items-start mb-2">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span className="block">{messageText}</span>
            </div>
            <span className="text-xs text-slate-500">{dateFormat(createdAt)}</span>
        </li>
    )
}
