import { NavigateFunction } from "react-router"
import SwalAlert from "../../hook/swal_alert"
import { editPasswordService } from "../../service/edit"
import { IEditState } from "../../types/context/edit_page"
import { ISocket } from "../../types/context/socket"
import { validateForm } from "./validate_form"


export const handleSubmit = async (form: IEditState, selectForm: boolean, socket: ISocket | undefined, navigate: NavigateFunction) => {
    const { userName, email, description, image, oldPassword, newPassword } = form

    try {
        const validate: any = await validateForm(form, selectForm)

        if (!!validate === false) {
            return SwalAlert('Invalid Values =(.', '', 'warning')
        }

        if (selectForm === false) {
            socket?.emit('edit-profile', { userName, email, description, image })
        } else {
            const result = await editPasswordService({ oldPassword, newPassword })
            if (result.ok) {
                return navigate('/');
            }
            return SwalAlert('Error =(.', '', 'error')
        }


    } catch (error) {
        return SwalAlert('Error =(.', error.message, 'error')
    }
}