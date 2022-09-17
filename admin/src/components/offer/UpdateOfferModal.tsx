import CancelIcon from '@mui/icons-material/Cancel';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateOfferMutation } from '../../features/offers/offerApi';

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
    title: string;
    subTitle: string;
    description: string;
    image: File;
}

export default function UpdateOfferModal({
    modalOpen,
    closeModal,
    item,
}: IProps) {
    const [updateOffer] = useUpdateOfferMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<IBrand>();

    const onSubmit: SubmitHandler<IBrand> = async (data) => {
        try {
            const formData = new FormData();
            for (const property in data) {
                //@ts-ignore
                formData.append(property, data[property]);
            }

            //@ts-ignore
            formData.append('photo', data?.image[0]);

            await updateOffer({
                param: item.id,
                body: formData,
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
                        Update Offer
                    </Typography>

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        margin="normal"
                        label="Offer Title"
                        error={!!errors.title}
                        autoComplete="offer title"
                        helperText={errors.title?.message}
                        defaultValue={item.title || ' '}
                        {...register('title', {
                            required: 'Product title is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        autoComplete="sub title"
                        error={!!errors.subTitle}
                        label="Sub Title"
                        helperText={errors.subTitle?.message}
                        defaultValue={item.subTitle || ' '}
                        {...register('subTitle', {
                            required: 'Sub Title is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        rows={5}
                        multiline
                        margin="normal"
                        label="Description"
                        error={!!errors.description}
                        autoComplete="description"
                        helperText={errors.description?.message}
                        defaultValue={item.description || ' '}
                        {...register('description', {
                            required: 'Description is required',
                        })}
                    />
                    <Box sx={{ textAlign: 'right' }}>
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
                                {...register('image')}
                            />
                        </Button>
                    </Box>

                    <Box sx={{ textAlign: 'right', mt: 1 }}>
                        <Button
                            variant="contained"
                            color="error"
                            endIcon={<CancelIcon />}
                            onClick={() => closeModal(false)}
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
                            Update Offer
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
