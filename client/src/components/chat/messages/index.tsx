import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/auth'

import { ChatContext } from '../../../context/chat'
import { IMessage } from '../../../types/message'
import { scrollToBottom, scrollToBottomAnimated } from '../../../utils/scroll'
import IncomingMessage from './incoming'
import OutgoingMessage from './outgoing'


export default function Messages() {

    const { messages: messagesList } = useContext(ChatContext)
    const { uid } = useContext(AuthContext)

    return (
        <div className="relative w-full p-6 overflow-y-auto h-[44rem]">
            <ul
                id="messages"
                className="space-y-2">
                {
                    messagesList.map((message: IMessage) =>
                        message.from === uid
                            ? <OutgoingMessage key={message._id} message={message} />
                            : <IncomingMessage key={message._id} message={message} />
                    )
                }
            </ul>
        </div>
    )
}
