import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { IconButton } from '@mui/material';
import React from 'react';
import IsActive from '../IsActive';
import UpdateOfferModal from './UpdateOfferModal';

interface IProps {
    item: any;
}

const OfferRow = ({ item }: IProps) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    return (
        <>
            <tr>
                <td>
                    <img
                        src={`https://petcareapi.sajidurapp.xyz/media/img/${item?.image}`}
                        alt={item?.name}
                        height="50"
                        width="50"
                    />
                </td>
                <td>{item.title}</td>
                <td>{item.subTitle}</td>
                <td>{item.description}</td>
                <IsActive collection="offer" item={item} />
                <td>
                    <IconButton
                        aria-label="edit"
                        color="success"
                        onClick={() => setModalOpen(true)}
                    >
                        <DriveFileRenameOutlineIcon />
                    </IconButton>
                </td>
            </tr>

            <UpdateOfferModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default OfferRow;
