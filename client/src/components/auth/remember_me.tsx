import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteEmailLocalStorage, getEmailLocalStorage, setEmailLocalStorage } from '../../utils/localStorage'

interface IProps {
    email: string,
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RememberMe({ email, setForm }: IProps) {
    const [rememberMe, setRememberMe] = useState(false)

    useEffect(() => {
        const result = getEmailLocalStorage()
        setRememberMe(!!result)
    }, [])

    const rememberMeFn = () => {
        if (rememberMe === false && email.length > 0) {
            setEmailLocalStorage(email)
        } else {
            deleteEmailLocalStorage()
        }
    }

    const handleCheck = () => {
        setRememberMe(!rememberMe)
        rememberMeFn()
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center" onClick={handleCheck}>
                <input
                    type="checkbox"
                    checked={rememberMe}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" />
                <label className="ml-2 block text-sm text-gray-900 cursor-pointer"> Remember me </label>
            </div>

            <div className="text-sm font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">
                <p onClick={() => setForm(true)}>Create Account</p>
            </div>
        </div>
    )
}
