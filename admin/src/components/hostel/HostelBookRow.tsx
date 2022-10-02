import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import DeleteItem from '../DeleteItem';
import HostelDropDown from './HostelDropDown';
import UpdateHostelBookModel from './UpdateHostelBookModel';

const HostelBookRow = ({ item }: any) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    return (
        <>
            <tr>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.phone}</td>
                <td>{item?.reservationDate}</td>
                <td>{item?.reservationTime}</td>

                <td>
                    <HostelDropDown
                        id={item?.id}
                        defaultValue={item?.reservationStatus}
                    />
                </td>

                <td>
                    <IconButton
                        aria-label="edit"
                        color="success"
                        onClick={() => setModalOpen(true)}
                    >
                        <DriveFileRenameOutlineIcon />
                    </IconButton>
                </td>
                <DeleteItem collection="hostel-book" item={item} />
            </tr>

            <UpdateHostelBookModel
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default HostelBookRow;
