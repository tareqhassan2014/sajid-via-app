import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useUpdatePetCategoryMutation } from '../../features/pet/petApi';
import IsActive from '../IsActive';
import UpdatePetCategoryModal from './UpdatePetCategoryModal';

interface IProps {
    item: any;
}

const PetCategoryRow = ({ item }: IProps) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [updatePetCategory] = useUpdatePetCategoryMutation();

    const handelDelete = async (id: string) => {
        try {
            await updatePetCategory({ param: id, body: { isActive: -1 } });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <IsActive collection="petCategory" item={item} />
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

            <UpdatePetCategoryModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default PetCategoryRow;
