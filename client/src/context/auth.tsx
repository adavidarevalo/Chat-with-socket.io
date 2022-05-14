import React, { useState, useMemo, useEffect, useContext } from 'react'
import { getDataByToken, loginService, registerService } from '../service/auth'
import { ICreateUser, ILogin, IState } from '../types/context/auth'
import { IProps } from '../types/context'
import { deleteTokenLocalStorage, setTokenLocalStorage, getTokenLocalStorage } from '../utils/localStorage'
import { CLEAR_CHAT } from '../utils/redux_types'
import { ChatContext } from './chat'

const initialState: IState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
    description: null,
    avatar: null,
}

export const AuthContext = React.createContext<IState>(initialState)

export const AuthProvider = ({ children }: IProps) => {
    const [state, setState] = useState(initialState)

    const { dispatch } = useContext(ChatContext)

    useEffect(() => {
        validateToken()
    }, [])

    const createAccount = async (payload: ICreateUser) => {
        try {
            const resultHttp = await registerService(payload)
            if (resultHttp?.ok === false) {
                return resultHttp
            }

            const { token, user: { uid, username, email, avatar, description } } = resultHttp

            setState({
                logged: true,
                uid: uid,
                checking: false,
                name: username,
                email,
                avatar,
                description
            })

            setTokenLocalStorage(token)

            return true
        } catch (error) {
            return {
                ok: false,
                msg: "Error in the server."
            }
        }
    }


    const loginUser = async (payload: ILogin) => {
        try {
            const resultHttp = await loginService(payload)
            if (resultHttp?.ok === false) {
                return resultHttp
            }

            const { token, user: { uid, username, email, avatar, description } } = resultHttp

            setState({
                logged: true,
                uid: uid,
                checking: false,
                name: username,
                email,
                avatar,
                description
            })

            setTokenLocalStorage(token)

            return true
        } catch (error) {
            return {
                ok: false,
                msg: "Error in the server."
            }
        }
    }

    const logOut = () => {
        dispatch({
            type: CLEAR_CHAT
        })
        setState({
            uid: null,
            checking: false,
            logged: false,
            name: null,
            email: null,
            avatar: null,
            description: null
        })
        deleteTokenLocalStorage()
    }

    const validateToken = async () => {
        const token = getTokenLocalStorage()
        if (!!token === false) {
            setState({
                logged: false,
                uid: null,
                checking: false,
                name: null,
                email: null,
                avatar: null,
                description: null
            })
            return
        };

        try {
            const resultHttp = await getDataByToken()
            if (resultHttp?.ok === false) {
                setState({
                    logged: false,
                    uid: null,
                    checking: false,
                    name: null,
                    email: null,
                    avatar: null,
                    description: null
                })
                return resultHttp
            }

            const { token, user: { uid, username, email, description, avatar } } = resultHttp

            setState({
                logged: true,
                uid: uid,
                checking: false,
                name: username,
                email,
                avatar,
                description
            })

            setTokenLocalStorage(token)
        } catch (error) {
            return {
                ok: false,
                msg: "Error in the server."
            }
        }
    }

    const updateProfile = (profile: any) => {
        const { avatar, description, email, username, uid } = profile
        setState({
            logged: true,
            uid: uid,
            checking: false,
            name: username,
            email,
            avatar,
            description
        })

    }

    const values = useMemo(() => {
        return {
            ...state,
            createAccount,
            loginUser,
            logOut,
            validateToken,
            updateProfile
        }
    }, [state])
    return (
        <AuthContext.Provider value={{
            ...values
        }}>
            {children}
        </AuthContext.Provider>
    )

}
