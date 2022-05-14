import { IMessage } from "../../../types/message"

export default function IncomingMessage({ message }: { message: IMessage }) {

    const { message: messageText } = message

    return (
        <li className="flex justify-start mb-2">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span className="block">{messageText}</span>
            </div>
        </li>
    )
}
