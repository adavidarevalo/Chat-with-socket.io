import { passwordsSchema } from "../../schemas/auth"
import { editUser } from "../../schemas/edit"
import { IEditState } from "../../types/context/edit_page"

export const validateForm = async (state: IEditState, selectForm: boolean) => {

    const { userName, email, description, oldPassword, newPassword } = state

    const validate = await (selectForm
        ? passwordsSchema
        : editUser).validate(selectForm
            ? { oldPassword, newPassword }
            : { userName, email, description })

    if (validate.error) {
        return false
    }
    return validate
}

export const isDisableTheButton = async (state: IEditState, selectForm: boolean, setState: React.Dispatch<React.SetStateAction<IEditState>>) => {
    const result = await validateForm(state, selectForm)

    setState(preState => ({
        ...preState,
        disable: !Boolean(result)
    }))
}