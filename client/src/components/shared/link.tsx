import { Link } from "react-router-dom";

interface ILink {
    path: string;
    title: string;
}

export default function LinkContainer({ path, title }: ILink) {
    return (
        <div className="text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            <Link to={path}>{title}</Link>
        </div>
    )
}
