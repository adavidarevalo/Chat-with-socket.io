import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { IEditState } from '../../types/context/edit_page'
import ChangeForm from './changeForm'
import FormContainer from './form'
import ShowProfile from './show_profile'

export default function EditPage() {
    const { name, email: emailAuth, avatar } = useContext(AuthContext)

    const [state, setState] = useState<IEditState>({
        userName: name,
        email: emailAuth,
        description: '',
        image: avatar,
        oldPassword: '',
        newPassword: '',
        disable: false
    })

    const [selectForm, setSelectForm] = useState<boolean>(false)

    return (
        <div className="bg-white w-8/12 h-8/12 rounded-lg p-5 max-w-2xl">
            <h1 className="text-center my-3 text-xl	font-medium">Edit My Profile</h1>
            <div className="grid relative grid-cols-2">
                <ShowProfile state={state} setState={setState} />
                <FormContainer selectForm={selectForm} state={state} setState={setState} />
                <ChangeForm selectForm={selectForm} setSelectForm={setSelectForm} />
            </div>
        </div>
    )
}
