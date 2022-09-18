import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useUpdateProductMutation } from '../../features/product/productApi';
import IsActive from '../IsActive';
import UpdateProductModal from './UpdateProductModal';

const ProductRow = ({ item }: any) => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [updateProduct] = useUpdateProductMutation();

    const handelDelete = async (id: string) => {
        try {
            await updateProduct({ param: id, body: { isActive: -1 } });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <tr>
                <td>
                    <img
                        src={`https://petcareapi.sajidurapp.xyz/media/img/${item?.ProductImage}`}
                        alt={item?.name}
                        height="50"
                        width="50"
                    />
                </td>

                <td>{item?.name}</td>
                <td>{item.description}</td>
                <td>{item.details}</td>
                <td>{item.price}</td>
                <IsActive collection="product" item={item} />
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

            <UpdateProductModal
                closeModal={setModalOpen}
                modalOpen={modalOpen}
                item={item}
            />
        </>
    );
};

export default ProductRow;
