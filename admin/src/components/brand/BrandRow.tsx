import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import DeleteItem from '../DeleteItem';
import IsActive from '../IsActive';
import UpdateBrandModal from './UpdateBrandModel';

const BrandRow = ({ item }: any) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <IsActive collection="brand" item={item} />

                <td>
                    <IconButton
                        aria-label="edit"
                        color="success"
                        onClick={() => setModalOpen(true)}
                    >
                        <DriveFileRenameOutlineIcon />
                    </IconButton>
                </td>

                <DeleteItem collection="brand" item={item} />
            </tr>

            <UpdateBrandModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default BrandRow;
