import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type Props = {
    children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
    const navigate = useNavigate();
    //@ts-ignore
    const user = useSelector((state) => state.user);

    //@ts-ignore
    if (user?.token) {
        return <>{children}</>;
    } else {
        navigate('/signin');
        return <></>;
    }
};

export default PrivateRoute;
