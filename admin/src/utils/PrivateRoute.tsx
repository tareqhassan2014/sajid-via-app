import { useSelector } from 'react-redux';
import SignIn from '../pages/SignIn';

type Props = {
    children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
    const user = useSelector((state: any) => state.user);

    if (user?.token) {
        return <>{children}</>;
    } else {
        return <SignIn />;
    }
};

export default PrivateRoute;
