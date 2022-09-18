import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useUpdateProductCategoryMutation } from '../../features/product/productApi';
import IsActive from '../IsActive';
import UpdateProductCategoryModal from './UpdateProductCategoryModal';

interface IProps {
    item: any;
}

const ProductCategoryRow = ({ item }: IProps) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [updateProductCategory] = useUpdateProductCategoryMutation();

    const handelDelete = async (id: string) => {
        try {
            await updateProductCategory({ param: id, body: { isActive: -1 } });
        } catch (error) {
            console.log(error);
        }
    };

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

            <UpdateProductCategoryModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default ProductCategoryRow;
