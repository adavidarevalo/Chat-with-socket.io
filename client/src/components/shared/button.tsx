import { IButton } from '../../types/button'

export default function Button({ title, disable, onClick }: IButton) {
    return (
        <button
            disabled={disable}
            type="button"
            onClick={onClick}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${disable ? 'bg-slate-400' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}>
            {title}
        </button>
    )
}
