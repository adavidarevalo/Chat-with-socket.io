export interface IState {
    uid: string | null;
    checking: boolean;
    logged: boolean;
    name: string | null;
    email: string | null;
    description?: string | null,
    avatar?: string | null,
    logOut?: () => void,
    updateProfile?: (profile: any) => void
}

export interface ICreateUser {
    email: string;
    username: string;
    password: string;
    password_confirmation: string;
}

export interface ILogin {
    email: string;
    password: string;
}