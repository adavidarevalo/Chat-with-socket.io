import { createContext, useReducer } from 'react'
import { IProps } from '../../types/context'
import { IState } from '../../types/context/chat'
import { chatReducer } from './reducer'

const initialState: IState = {
    uid: null,
    activeChat: null,
    users: [],
    messages: [],
    dispatch: (x: {}) => { }
}

export const ChatContext = createContext<IState>({
    ...initialState,
})

export const ChatProvider = ({ children }: IProps) => {
    const [chatState, dispatch] = useReducer(chatReducer, initialState)

    return (
        <ChatContext.Provider value={{
            ...chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )
}
