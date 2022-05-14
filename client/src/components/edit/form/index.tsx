import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../../../context/socket'
import { IEditState } from '../../../types/context/edit_page'
import { editPasswordFormOptions, editProfileFormOptions } from '../../../utils/edit_page/form_options'
import { handleSubmit } from '../../../utils/edit_page/submit_form'
import { isDisableTheButton } from '../../../utils/edit_page/validate_form'
import Button from '../../shared/button'
import OptionsForm from '../../shared/options_form'

interface IForm {
    state: IEditState,
    selectForm: boolean,
    setState: React.Dispatch<React.SetStateAction<IEditState>>
}

export default function FormContainer({ selectForm, state, setState }: IForm) {

    const navigate = useNavigate();

    const { socket } = useContext(SocketContext)

    const { userName, email, description, disable, oldPassword, newPassword } = state

    useEffect(() => {
        isDisableTheButton(state, selectForm, setState)
    }, [userName, email, description, oldPassword, newPassword])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="mx-10 flex flex-col justify-center">
            <OptionsForm
                options={selectForm ? editPasswordFormOptions : editProfileFormOptions}
                state={state}
                handleChange={handleChange}
            />
            <Button
                title="Edit"
                disable={disable}
                onClick={() => handleSubmit(state, selectForm, socket, navigate)}
            />
        </div>
    )
}
