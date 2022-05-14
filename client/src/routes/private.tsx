import { Navigate } from "react-router-dom";
import { IRoute } from "../types/routes";

export default function PrivateRoute({ logged, component }: IRoute) {
    return (logged)
        ? (
            <>
                {component}
            </>
        ) : <Navigate to="/auth" />;
}