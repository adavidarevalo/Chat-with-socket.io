import { IMessage } from "../message";
import { IUser } from "../user";

export interface IState {
    uid: string | null;
    activeChat: string | null;
    users: IUser[];
    messages: IMessage[],
    dispatch: (x: {}) => void
}