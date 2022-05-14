import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hook/useSocket'
import { IProps } from '../types/context';
import { ISocket } from '../types/context/socket';
import { IMessage } from '../types/message';
import { IUser } from '../types/user';
import { LOAD_USERS, NEW_MESSAGE } from '../utils/redux_types';
import { scrollToBottomAnimated } from '../utils/scroll';

import { AuthContext } from './auth';
import { ChatContext } from './chat';

export const SocketContext = createContext<{
    socket?: ISocket,
    online: boolean | undefined
}>({
    online: false
});


export const SocketProvider = ({ children }: IProps) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:4000');

    const { logged, updateProfile } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)

    useEffect(() => {
        if (logged) {
            connectSocket()
        }
        if (logged === false) {
            disconnectSocket()
        }
    }, [logged])

    useEffect(() => {
        socket?.on('user-list', (users: IUser[]) => {
            dispatch({
                type: LOAD_USERS,
                payload: users
            })
        })
        socket?.on('personal-message', (message: IMessage[]) => {
            dispatch({
                type: NEW_MESSAGE,
                payload: message
            })
            setTimeout(() => {
                scrollToBottomAnimated('messages')
            }, 1);
        })
        socket?.on('edited-profile', (user: any) => {
            updateProfile(user)
            setTimeout(() => {
                scrollToBottomAnimated('messages')
            }, 1);
        })

    }, [socket])

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )
}