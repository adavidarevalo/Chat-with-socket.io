import React from 'react'
import { IEditState } from '../../../types/context/edit_page'
import { IImage } from '../../../types/update_image'
import { getAvatar } from '../../../utils/edit_page/get_avatar'
import UpdateFile from '../../shared/dropzone'

interface IUpdateAvatar {
    image: IImage;
    userName: string | null;
    setState: React.Dispatch<React.SetStateAction<IEditState>>
}

export default function UpdateAvatar({ image, userName, setState }: IUpdateAvatar) {

    const updateImage = (file: File) => {

        const { name, type } = file

        setState(prevState => ({
            ...prevState,
            image: {
                type: "file",
                body: file,
                mineType: type,
                fileName: name
            }
        }))
    }

    return (
        <UpdateFile
            content={
                <div className="relative">
                    <img
                        className="rounded-full my-4 cursor-pointer max-w-[10rem] h-screen max-h-40 hover:blur-sm"
                        alt={userName || ''}
                        src={getAvatar(image)} />
                    <div
                        className="flex opacity-0 h-full w-full max-h-40 rounded-full my-4 cursor-pointer max-w-[10rem] absolute z-20 hover:opacity-100 justify-center items-center"
                        style={{ top: "-16px" }}
                    >
                        <svg className="h-12 w-12 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="3" />  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />  <line x1="15" y1="6" x2="21" y2="6" />  <line x1="18" y1="3" x2="18" y2="9" /></svg>
                    </div>
                </div>
            }
            onSubmit={updateImage}
        />
    )
}
