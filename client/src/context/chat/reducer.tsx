import { CLEAR_CHAT, LOAD_USERS, NEW_MESSAGE, SELECT_CHAT } from "../../utils/redux_types";
import { IState } from '../../types/context/chat'

export const chatReducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_USERS:
            return {
                ...state,
                users: payload
            }
        case SELECT_CHAT:
            if (state.activeChat === payload) return state;
            const { id, messages } = payload;

            return {
                ...state,
                messages: messages,
                activeChat: id
            }
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, payload],
            }
        case CLEAR_CHAT:
            return {
                uid: null,
                activeChat: null,
                users: [],
                messages: [],
            }
        default:
            return state;
    }

}