import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { useUpdateHostelBookMutation } from '../../features/hostel/hostelApi';

interface IValue {
    defaultValue: string;
    id: string;
}

const options = [
    'Rejected',
    'On Queue',
    'Accepted',
    'Completed',
    'New Reservation Request',
    'Unable to reach customer',
];

export default function HostelDropDown({ defaultValue, id }: IValue) {
    const [value, setValue] = React.useState(defaultValue);
    const [updateHostelBook] = useUpdateHostelBookMutation();

    const handleChange = async (event: SelectChangeEvent) => {
        try {
            setValue(event.target.value);

            await updateHostelBook({
                param: id,
                body: {
                    reservationStatus: event.target.value,
                },
            });
        } catch (error: any) {
            console.log(error?.data?.message);
        }
    };

    return (
        <FormControl sx={{ width: 200 }} size="small">
            <InputLabel id="demo-select-small">Status</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label="Status"
                onChange={handleChange}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
