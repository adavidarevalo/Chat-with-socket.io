import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ISocket } from '../types/context/socket';
import { getTokenLocalStorage } from '../utils/localStorage';


export const useSocket = (serverPath: string) => {
    const [socket, setSocket] = useState<ISocket>()
    const [online, setOnline] = useState<boolean | undefined>(false);

    const token = getTokenLocalStorage()

    const connectSocket = useCallback(() => {
        const socketTemp = io(serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                "Authorization": `Bearer ${token}`
            }
        })
        setSocket(socketTemp)
    }, [serverPath])

    const disconnectSocket = useCallback(() => {
        socket?.disconnect()
    }, [socket])

    useEffect(() => {
        setOnline(socket?.connected);
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline(true));
    }, [socket])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline(false));
    }, [socket])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket
    }
}