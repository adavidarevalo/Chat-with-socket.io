import { useContext } from 'react'
import { ChatContext } from '../../context/chat'
import HeaderChat from './header_chat'
import Messages from './messages'
import NewChat from './new_chat'
import SelectChat from './select_chat'

export default function PrincipalMessagesContainer() {
    const { activeChat } = useContext(ChatContext)

    return (
        <div className="hidden lg:col-span-2 lg:block">
            <div className="w-full h-screen">
                {
                    activeChat
                        ? (
                            <>
                                <HeaderChat />
                                <Messages />
                                <NewChat />
                            </>
                        )
                        : <SelectChat />
                }
            </div>
        </div>
    )
}
