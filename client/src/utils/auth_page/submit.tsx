import SwalAlert from "../../hook/swal_alert";
import { loginSchema, registerSchema } from "../../schemas/auth";

export const validateForm = async (isLogin: boolean, state: any) => {
    const { email, username, password, password_confirmation } = state

    const validate = await (isLogin ? registerSchema : loginSchema).validate(isLogin ? { username, email, password, password_confirmation } : { email, password })

    if (validate.error) {
        console.log(validate.error);

        return false
    }
    return validate
}

export const handleSubmit = async (isLogin: boolean, state: any, createAccount: any, loginUser: any) => {
    try {
        const validate = await validateForm(isLogin, state)

        if (validate === false) {
            return SwalAlert('Invalid credentials.', '', 'warning')
        }

        let result;

        if (isLogin) {
            result = await createAccount(validate?.value)
        } else {
            result = await loginUser(validate?.value)
        }

        if (result.ok === false) {
            return SwalAlert(result.msg, '', 'warning')
        }
    } catch (error) {
        console.log('error ', error);

        return SwalAlert('There was a error', '', 'error')
    }
}