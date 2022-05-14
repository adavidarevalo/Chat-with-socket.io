import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/auth";
import SimpleModal from "../../shared/modal";

export default function ModalMenu() {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const menu = [
        {
            title: "Edit Profile",
            onClick: () => {
                navigate('/edit');
            }
        },
        {
            title: "Log Out",
            onClick: () => {
                logOut && logOut()
            }
        },
    ]

    return (
        <SimpleModal
            trigger={<svg className="h-6 w-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="12" cy="5" r="1" /></svg>}
            content={
                (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => (
                    <div className="w-60 text-center">
                        <div className="pb-3">
                            <h2 className="text-xl border-b-2 border-gray-300 my-3">Menu</h2>
                        </div>
                        <ul>
                            {
                                menu.map(({ title, onClick }) => (
                                    <li key={title}>
                                        <button
                                            onClick={() => {
                                                setIsOpen(false)
                                                onClick()
                                            }}
                                            type="button"
                                            className="py-2.5 px-5 w-full text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                                            {title}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        />
    )
}
