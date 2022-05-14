import React from 'react'
import { buttonChangeFormOptions } from '../../utils/edit_page/change_form_options'

interface IProps {
    selectForm: boolean;
    setSelectForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChangeForm({ selectForm, setSelectForm }: IProps) {
    return (
        <div className="absolute flex rotate-90"
            style={{ right: '-20%' }}
        >
            {
                buttonChangeFormOptions.map(({ title, value }) => (
                    <button
                        onClick={() => setSelectForm(value)}
                        type="button"
                        className={`py-2.5 px-5 mb-2 text-sm font-medium ${selectForm === value ? 'bg-gray-200 text-black' : 'text-gray-900 bg-white'} focus:outline-none hover:bg-gray-100 `}>
                        {title}
                    </button>
                ))
            }
        </div>
    )
}
