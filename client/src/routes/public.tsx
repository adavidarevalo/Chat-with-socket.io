import { Navigate } from "react-router-dom";
import { IRoute } from "../types/routes";

export default function PublicRoute({ logged, component }: IRoute) {
    return (logged === false)
        ? (
            <>
                {component}
            </>
        ) : <Navigate to="/" />;
}