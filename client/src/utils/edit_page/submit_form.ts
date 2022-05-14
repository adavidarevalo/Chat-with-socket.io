import SwalAlert from "../../hook/swal_alert"
import { IEditState } from "../../types/context/edit_page"
import { ISocket } from "../../types/context/socket"
import { validateForm } from "./validate_form"

export const handleSubmit = async (form: IEditState, selectForm: boolean, socket: ISocket | undefined) => {
    const { userName, email, description, image } = form
    try {
        const validate: any = await validateForm(form, selectForm)

        if (!!validate === false) {
            return SwalAlert('Invalid Values =(.', '', 'warning')
        }

        if (selectForm === false) {
            socket?.emit('edit-profile', { userName, email, description, image })
        }


    } catch (error) {
        return SwalAlert('Error =(.', error.message, 'error')
    }
}