import Switch from '@mui/material/Switch';
import * as React from 'react';
import { updateBrand } from '../api/updateBrand';
import { updatePet } from '../api/updatePet';
import { updateOffer } from '../api/updatePet copy';
import { updatePetCategory } from '../api/updatePetCategory';
import { updateProductCategory } from '../api/updateProductCategory';

interface IProps {
    item: {
        isActive: number;
        id: number;
    };
    collection: string;
}

const IsActive = ({ item, collection }: IProps) => {
    const [checked, setChecked] = React.useState(item.isActive ? true : false);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const isActive = event.target.checked;
            if (collection === 'brand') {
                await updateBrand(item.id, isActive);
            } else if (collection === 'productCategory') {
                await updateProductCategory(item.id, isActive);
            } else if (collection === 'petCategory') {
                await updatePetCategory(item.id, isActive);
            } else if (collection === 'pet') {
                await updatePet(item.id, isActive);
            } else if (collection === 'offer') {
                await updateOffer(item.id, isActive);
            }
            setChecked(isActive);
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
