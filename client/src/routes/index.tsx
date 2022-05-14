import { useContext } from 'react';
import { BrowserRouter, Route, Routes as RoutesReact } from 'react-router-dom';
import Loading from '../components/shared/loading';
import { AuthContext } from '../context/auth';
import Chat from '../pages/chat';
import NotFount from '../pages/not_fount';
import PrivateRoute from './private';
import PublicRoute from './public';
import EditProfile from '../pages/edit_profile';
import Auth from '../pages/auth';

const publicRoutes = [
    {
        path: "/auth",
        element: <Auth />
    }
]

const privateRoutes = [
    {
        path: "/",
        element: <Chat />
    },
    {
        path: "/edit",
        element: <EditProfile />
    },
]

export default function Routes() {
    const { logged, checking } = useContext(AuthContext)

    if (checking) {
        return <Loading />
    }

    return (
        <BrowserRouter>
            <RoutesReact>
                {
                    publicRoutes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <PublicRoute logged={logged} component={element} />
                            }
                        />
                    ))
                }
                {
                    privateRoutes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <PrivateRoute logged={logged} component={element} />
                            }
                        />
                    ))
                }
                <Route
                    path="*"
                    element={<NotFount />}
                />
            </RoutesReact>
        </BrowserRouter>
    )
}
