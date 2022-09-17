import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { IconButton } from '@mui/material';
import React from 'react';
import IsActive from '../IsActive';
import UpdatePetModal from './UpdatePetModal';

interface IProps {
    item: any;
}

const PetRow = ({ item }: IProps) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    return (
        <>
            <tr>
                <td>
                    <img
                        src={`https://petcareapi.sajidurapp.xyz/media/img/${item?.petImage}`}
                        alt={item?.name}
                        height="50"
                        width="50"
                    />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.breed}</td>
                <td>{item.birthDate}</td>
                <td>{item.gender}</td>
                <td>{item.weight}</td>
                <IsActive collection="pet" item={item} />

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

            <UpdatePetModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default PetRow;
