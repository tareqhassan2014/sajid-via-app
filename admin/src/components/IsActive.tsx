import Switch from '@mui/material/Switch';
import * as React from 'react';
import { useUpdateBrandMutation } from '../features/brand/brandApi';
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

const IsActive = ({ item, collection }: IProps) => {
    const [checked, setChecked] = React.useState(item.isActive ? true : false);

    const [updateBrand] = useUpdateBrandMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [updateProductCategory] = useUpdateProductCategoryMutation();
    const [updateOffer] = useUpdateOfferMutation();
    const [updatePetCategory] = useUpdatePetCategoryMutation();
    const [updatePet] = useUpdatePetMutation();

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const isActive = !!event.target.checked;

            switch (collection) {
                case 'brand':
                    await updateBrand({ param: item.id, body: { isActive } });
                    setChecked(isActive);
                    break;

                case 'pet':
                    await updatePet({ param: item.id, body: { isActive } });
                    setChecked(isActive);
                    break;

                case 'product':
                    await updateProduct({ param: item.id, body: { isActive } });
                    setChecked(isActive);
                    break;

                case 'offer':
                    await updateOffer({ param: item.id, body: { isActive } });
                    setChecked(isActive);
                    break;

                case 'petCategory':
                    await updatePetCategory({
                        param: item.id,
                        body: { isActive },
                    });
                    setChecked(isActive);
                    break;

                case 'productCategory':
                    await updateProductCategory({
                        param: item.id,
                        body: { isActive },
                    });
                    setChecked(isActive);
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
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </td>
    );
};

export default IsActive;
