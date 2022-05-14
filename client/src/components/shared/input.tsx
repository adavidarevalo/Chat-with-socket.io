import { IInput } from '../../types/input'

export default function Input({ title, type, name, value, onChange }: IInput) {
    return (
        <div className="mb-5">
            <label>{title}</label>
            <input
                onChange={onChange}
                value={value}
                name={name}
                type={type}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={title}
            />
        </div>
    )
}
