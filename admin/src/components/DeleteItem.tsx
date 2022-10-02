import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useUpdateBrandMutation } from '../features/brand/brandApi';
import { useUpdateHostelBookMutation } from '../features/hostel/hostelApi';
import { useUpdateOfferMutation } from '../features/offers/offerApi';
import {
    useUpdatePetCategoryMutation,
    useUpdatePetMutation,
} from '../features/pet/petApi';
import {
    useUpdateProductCategoryMutation,
    useUpdateProductMutation,
} from '../features/product/productApi';

interface IProps {
    item: {
        isActive: number;
        id: number;
    };
    collection: string;
}

const DeleteItem = ({ item, collection }: IProps) => {
    const [updatePet] = useUpdatePetMutation();
    const [updateBrand] = useUpdateBrandMutation();
    const [updateOffer] = useUpdateOfferMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [updateHostelBook] = useUpdateHostelBookMutation();
    const [updatePetCategory] = useUpdatePetCategoryMutation();
    const [updateProductCategory] = useUpdateProductCategoryMutation();

    const handleJDelete = async () => {
        try {
            const isActive = -1;

            switch (collection) {
                case 'brand':
                    await updateBrand({ param: item.id, body: { isActive } });

                    break;

                case 'pet':
                    await updatePet({ param: item.id, body: { isActive } });

                    break;

                case 'product':
                    await updateProduct({ param: item.id, body: { isActive } });

                    break;

                case 'offer':
                    await updateOffer({ param: item.id, body: { isActive } });

                    break;

                case 'petCategory':
                    await updatePetCategory({
                        param: item.id,
                        body: { isActive },
                    });

                    break;
                case 'hostel-book':
                    await updateHostelBook({
                        param: item.id,
                        body: { isActive: -3 },
                    });

                    console.log('hostel-book');

                    break;

                case 'productCategory':
                    await updateProductCategory({
                        param: item.id,
                        body: { isActive },
                    });

                    break;

                default:
                    break;
            }
        } catch (error: any) {
            window.alert(
                error.message ? error.message : 'something went wrong!'
            );
            console.log(error);
        }
    };

    return (
        <td>
            <IconButton
                aria-label="delete"
                color="error"
                onClick={handleJDelete}
            >
                <DeleteIcon />
            </IconButton>
        </td>
    );
};

export default DeleteItem;
