export type IImage = {
    type: string;
    body: File;
    mineType: string;
    fileName: string;
} | string | null | undefined;