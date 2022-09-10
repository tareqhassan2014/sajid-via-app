import { useRoutes } from 'react-router-dom';
import SignIn from '../pages/SignIn';

// project import
//import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        MainRoutes,
        {
            path: 'signin',
            element: <SignIn />,
        },
    ]);
}
