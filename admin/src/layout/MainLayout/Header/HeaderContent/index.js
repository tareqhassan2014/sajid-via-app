import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../features/auth/authSlice';

const HeaderContent = () => {
    const dispatch = useDispatch();

    return (
        <Tooltip title="Log Out">
            <IconButton color="error" onClick={() => dispatch(logOut())}>
                <LogoutIcon />
            </IconButton>
        </Tooltip>
    );
};

export default HeaderContent;
