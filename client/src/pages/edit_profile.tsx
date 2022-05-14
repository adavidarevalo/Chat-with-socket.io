import { Link } from "react-router-dom";
import EditPage from "../components/edit";

export default function EditProfile() {
    return (
        <div className="bg-indigo-600 min-h-screen">
            <Link
                to='/'
                className="py-2.5 px-5 m-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                Return the Chat...
            </Link>

            <div
                style={{ minHeight: "85vh" }}
                className="flex justify-center items-center">
                <EditPage />
            </div>
        </div >
    )
}
