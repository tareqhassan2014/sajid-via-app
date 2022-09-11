import { useSelector } from 'react-redux';
import SignIn from '../pages/SignIn';

type Props = {
    children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
    const user = useSelector((state: any) => state.user);

    return user?.token ? <>{children}</> : <SignIn />;
};

export default PrivateRoute;

// return user?.token ? <>{children}</> : <Navigate to="/signin" replace />;
