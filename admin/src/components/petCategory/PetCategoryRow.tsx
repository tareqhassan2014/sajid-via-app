import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import DeleteItem from '../DeleteItem';
import IsActive from '../IsActive';
import UpdatePetCategoryModal from './UpdatePetCategoryModal';

interface IProps {
    item: any;
}

const PetCategoryRow = ({ item }: IProps) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

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

                <DeleteItem collection="petCategory" item={item} />
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
