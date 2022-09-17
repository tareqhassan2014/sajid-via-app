import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddProductCategoryMutation } from '../../features/product/productApi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max(400px,  40vw)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IBrand {
    name: string;
}

export default function CreateProductCategoryModel() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [addProductCategory] = useAddProductCategoryMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<IBrand>();

    const onSubmit: SubmitHandler<IBrand> = async (body) => {
        try {
            await addProductCategory(body);
            reset();
            handleClose();
        } catch (error: any) {
            console.log(error?.data?.message);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 1 }}>
            <Button
                variant="contained"
                color="success"
                onClick={handleOpen}
                startIcon={<AddIcon />}
            >
                Add Category
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={style}
                >
                    <Typography variant="h2" align="center">
                        Create New Category
                    </Typography>

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="product category name"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label="Category Name"
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Name is required',
                        })}
                    />

                    <Box sx={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            color="error"
                            endIcon={<CancelIcon />}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>

                        <LoadingButton
                            type="submit"
                            variant="contained"
                            loading={false}
                            color="success"
                            sx={{ ml: 1 }}
                        >
                            Add Category
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
