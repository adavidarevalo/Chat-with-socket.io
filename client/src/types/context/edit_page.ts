export interface IEditState {
    userName: string | null;
    email: string | null;
    description: string;
    oldPassword: string;
    newPassword: string;
    image: {
        type: string;
        body: File;
        mineType: string;
        fileName: string;
    } | string | null | undefined;
    disable: boolean;
}
