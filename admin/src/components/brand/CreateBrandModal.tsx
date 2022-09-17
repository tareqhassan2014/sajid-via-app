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
import { useCreateBrandMutation } from '../../features/brand/brandApi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IBrand {
    name: string;
}

export default function CreateBrandModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [createBrand] = useCreateBrandMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<IBrand>();

    const onSubmit: SubmitHandler<IBrand> = async (body) => {
        try {
            await createBrand(body);
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
                Add Brand
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
                        Create New Brand
                    </Typography>

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="brand-name"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Brand Name'}
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
                            Add Brand
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
