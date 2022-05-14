export interface IContext {
    createAccount?: () => void;
    loginUser: (email: string, password: string) => Promise<void>;
    logOut?: () => void;
    validateToken?: () => void;
    uid: null;
    checking: null;
    logged: boolean;
    name: null;
    email: null;
}