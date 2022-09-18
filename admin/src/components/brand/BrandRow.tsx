import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useUpdateBrandMutation } from '../../features/brand/brandApi';
import IsActive from '../IsActive';
import UpdateBrandModal from './UpdateBrandModel';

const BrandRow = ({ item }: any) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    const [updateBrand] = useUpdateBrandMutation();

    const handelDelete = async (id: string) => {
        try {
            await updateBrand({ param: id, body: { isActive: -1 } });
        } catch (error) {
            console.log(error);
        }
    };

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

                <td>
                    <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handelDelete(item.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </td>
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
