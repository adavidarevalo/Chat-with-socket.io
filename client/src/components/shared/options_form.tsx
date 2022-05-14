import { IEditState } from '../../types/context/edit_page'
import Input from './input'

interface IProfileForm {
    state: IEditState,
    options: {
        title: string;
        type: string;
        name: string;
    }[],
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function OptionsForm({ options, state, handleChange }: IProfileForm) {
    return (
        <>
            {
                options.map(({ title, type, name }) => (
                    <Input
                        key={title}
                        title={title}
                        type={type}
                        name={name}
                        value={{ ...state }[name] as string || ''}
                        onChange={handleChange}
                    />
                ))
            }
        </>
    )
}
