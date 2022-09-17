import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddPetMutation } from '../../features/pet/petApi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max(400px,  50vw)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IProduct {
    name: string;
    createdBy: number;
    description: string;
    price: number;
    details: string;
    photo: File;
}
export default function AddProductModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [addPet] = useAddPetMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IProduct>();

    const onSubmit: SubmitHandler<IProduct> = async (data) => {
        try {
            const formData = new FormData();

            for (const property in data) {
                //@ts-ignore
                if (property === 'photo') {
                    //@ts-ignore
                    if (data?.photo?.length > 0) {
                        //@ts-ignore
                        formData.append('photo', data?.photo[0]);
                    }
                } else {
                    //@ts-ignore
                    formData.append(property, data[property]);
                }
            }

            await addPet(formData);

            reset();
            handleClose();
        } catch (error: any) {
            console.log(error);
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
                Add product
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
                        Add Product
                    </Typography>

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="product-name"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Product Name'}
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Product name is required',
                        })}
                    />

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="product-description"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Price'}
                        helperText={errors.price?.message}
                        {...register('price', {
                            required: 'Price is required',
                        })}
                    />

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="product-description"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Product Description'}
                        helperText={errors.description?.message}
                        multiline
                        rows={5}
                        {...register('description', {
                            required: 'Product Description is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        autoComplete="created-by"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Details'}
                        helperText={errors.details?.message}
                        multiline
                        rows={5}
                        {...register('details', {
                            required: 'Details is required',
                        })}
                    />

                    <Box sx={{ textAlign: 'right', mb: 1 }}>
                        <Button
                            variant="contained"
                            component="label"
                            endIcon={<PhotoCamera />}
                        >
                            Upload
                            <input
                                hidden
                                accept="image/*"
                                type="file"
                                {...register('photo')}
                            />
                        </Button>
                    </Box>

                    <Box sx={{ textAlign: 'right', mt: 1 }}>
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
                            Add Product
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
