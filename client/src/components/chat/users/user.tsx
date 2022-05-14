import { useContext } from 'react';

import { ChatContext } from "../../../context/chat"
import { getMessages } from '../../../service/messages';
import { IUser } from '../../../types/user';
import { lastConnection } from '../../../utils/date_format';
import { SELECT_CHAT } from '../../../utils/redux_types';
import { scrollToBottom } from '../../../utils/scroll';
import defaultUser from './../../../../public/assets/default-user.png'

export default function User({ user: { username, updatedAt, uid, online, description, avatar } }: { user: IUser }) {
    const { dispatch, activeChat } = useContext(ChatContext)

    const handleClick = async () => {
        const response = await getMessages(uid)

        if (response.ok === false) return;

        dispatch({
            type: SELECT_CHAT,
            payload: {
                id: uid,
                messages: response.messages
            }
        })
        setTimeout(() => {
            scrollToBottom('messages')
        }, 1);
    }

    return (
        <div
            onClick={handleClick}
            className={`flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out ${activeChat === uid ? 'bg-gray-200' : 'bg-white'} border-b border-gray-300 cursor-pointer focus:outline-none`}>
            <div className="relative">
                <img className="object-cover w-10 h-10 rounded-full"
                    src={avatar || defaultUser} alt="username" />
                <div className={`w-3 h-3 absolute right-0 top-8 rounded-full drop-shadow ${online ? "bg-green-500" : "bg-red-600"}`}>
                </div>
            </div>
            <div className="w-full pb-2">
                <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">{username}</span>
                    <span className="block ml-2 text-sm text-gray-600">{online ? 'Active' : lastConnection(updatedAt)}</span>
                </div>
                <span className="block ml-2 text-sm text-gray-600">{description}</span>
            </div>
        </div>
    )
}
