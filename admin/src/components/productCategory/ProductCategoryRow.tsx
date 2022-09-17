import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import IsActive from '../IsActive';
import UpdateProductCategoryModal from './UpdateProductCategoryModal';

interface IProps {
    item: any;
}

const ProductCategoryRow = ({ item }: IProps) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <IsActive collection="productCategory" item={item} />
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

            <UpdateProductCategoryModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default ProductCategoryRow;
