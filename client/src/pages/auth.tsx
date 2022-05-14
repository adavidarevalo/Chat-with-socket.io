import { useContext, useEffect, useState } from "react"
import RememberMe from "../components/auth/remember_me"
import Button from "../components/shared/button"
import FormHeader from "../components/shared/form-header"
import OptionsForm from "../components/shared/options_form"
import { AuthContext } from "../context/auth"
import { loginInputOptions, registerInputOptions } from "../utils/auth_page/form_options"
import { handleSubmit, validateForm } from "../utils/auth_page/submit"

export default function Auth() {
    const [isLogin, setForm] = useState(false)

    const { loginUser, createAccount } = useContext(AuthContext)


    const [state, setstate] = useState<any>({
        email: '',
        password: '',
        rememberMe: false,
        username: '',
        password_confirmation: '',
        disable: true
    })

    const { email, username, password, password_confirmation, disable } = state

    useEffect(() => {
        isDisableTheButton()
    }, [
        username,
        email,
        password,
        password_confirmation,
        disable
    ])

    const isDisableTheButton = async () => {
        const result = await validateForm(isLogin, state)
        setstate((preState: any) => ({
            ...preState,
            disable: !Boolean(result)
        }))
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setstate((preState: any) => ({
            ...preState,
            [name]: value
        }))
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-md w-full space-y-8">
                <FormHeader
                    title={isLogin ? "Create Account" : 'Sign in to your account'}
                />
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <OptionsForm
                            options={isLogin ? registerInputOptions : loginInputOptions}
                            state={state}
                            handleChange={handleChange}
                        />
                    </div>
                    {
                        isLogin === false && <RememberMe email={email} setForm={setForm} />
                    }
                    <Button
                        title={isLogin ? 'Register' : "Sign in"}
                        disable={disable}
                        onClick={() => handleSubmit(isLogin, state, createAccount, loginUser)}
                    />
                    {
                        isLogin && (
                            <div className="text-sm text-center font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">
                                <p onClick={() => setForm(false)}>Login</p>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}
