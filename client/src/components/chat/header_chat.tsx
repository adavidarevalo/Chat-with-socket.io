import { useContext } from "react"
import { ChatContext } from "../../context/chat"
import { IUser } from "../../types/user"
import defaultUser from './../../../public/assets/default-user.png'


export default function HeaderChat() {
    const { activeChat, users } = useContext(ChatContext)


    const user = users.find((x: IUser) => x.uid === activeChat)

    const { username, online } = user

    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <img className="object-cover w-10 h-10 rounded-full"
                src={defaultUser} alt="username" />
            <span className="block ml-2 font-bold text-gray-600">{username}</span>
            <span className={`absolute w-3 h-3 ${online ? "bg-green-600" : "bg-red-600"} rounded-full left-10 top-3`}>
            </span>
        </div>
    )
}
