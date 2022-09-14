import CancelIcon from '@mui/icons-material/Cancel';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateBrandMutation } from '../../features/brand/brandApi';

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

interface IProps {
    modalOpen: boolean;
    closeModal: (open: boolean) => void;
    item: any;
}

interface IBrand {
    name: string;
    createdBy: number;
}

export default function UpdateBrandModal({
    modalOpen,
    closeModal,
    item,
}: IProps) {
    const [updateBrand] = useUpdateBrandMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<IBrand>();

    const onSubmit: SubmitHandler<IBrand> = async (body) => {
        try {
            await updateBrand({
                param: item.id,
                body,
            });
            reset();
            closeModal(false);
        } catch (error: any) {
            console.log(error?.data?.message);
        }
    };

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={() => closeModal(false)}
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
                        Update Brand
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
                        defaultValue={item.name || ' '}
                        {...register('name', {
                            required: 'Name is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        autoComplete="created-by"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Created By'}
                        helperText={errors.createdBy?.message}
                        defaultValue={item.createdBy || ' '}
                        {...register('createdBy', {
                            required: 'createdBy is required',
                        })}
                    />

                    <Box sx={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            color="error"
                            endIcon={<CancelIcon />}
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
                            Update Brand
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
