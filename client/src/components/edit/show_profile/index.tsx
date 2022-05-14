import React from 'react'
import { IEditState } from '../../../types/context/edit_page'
import UpdateAvatar from './update_avatar'

interface IShowEdit {
    state: IEditState,
    setState: React.Dispatch<React.SetStateAction<IEditState>>
}

export default function ShowProfile({ state, setState }: IShowEdit) {

    const { image, userName, email, description } = state

    return (
        <div className="flex flex-col justify-center items-center border-r-4 border-indigo-500">
            <h2>{userName}</h2>
            <UpdateAvatar image={image} userName={userName} setState={setState} />
            <p>{email}</p>
            <p>{description}</p>
        </div>
    )
}
