import CancelIcon from '@mui/icons-material/Cancel';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdatePetMutation } from '../../features/pet/petApi';

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

interface IPet {
    name: string;
    brand: string;
    description: string;
    weight: number;
    birthDate: string;
    breed: string;
    gender: string;
    photo: File;
}

export default function UpdatePetModal({
    modalOpen,
    closeModal,
    item,
}: IProps) {
    const [updatePet] = useUpdatePetMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IPet>();

    const onSubmit: SubmitHandler<IPet> = async (data) => {
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

            await updatePet({
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
                        Update Pet
                    </Typography>

                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="pet name"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label="Pet Name"
                        helperText={errors.name?.message}
                        defaultValue={item.name || ' '}
                        {...register('name', {
                            required: 'Product name is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        autoComplete="breed"
                        margin="normal"
                        error={!!errors.breed}
                        label="Breed"
                        helperText={errors.breed?.message}
                        defaultValue={item.breed || ' '}
                        {...register('breed', {
                            required: 'Breed is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        autoComplete="description"
                        margin="normal"
                        error={!!errors.description}
                        label="Description"
                        helperText={errors.description?.message}
                        defaultValue={item.description || ' '}
                        {...register('description', {
                            required: 'description is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        type="date"
                        autoComplete="Birth Date"
                        margin="normal"
                        error={!!errors.birthDate}
                        label="Birth Date"
                        helperText={errors.birthDate?.message}
                        defaultValue={item.birthDate || ' '}
                        {...register('birthDate', {
                            required: 'birthDate is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        autoComplete="gender"
                        margin="normal"
                        error={!!errors.gender}
                        label="Gender"
                        helperText={errors.gender?.message}
                        defaultValue={item.gender || ' '}
                        {...register('gender', {
                            required: 'gender is required',
                        })}
                    />

                    <TextField
                        required
                        fullWidth
                        autoComplete="weight"
                        margin="normal"
                        error={!!errors.weight}
                        label="Weight"
                        helperText={errors.weight?.message}
                        defaultValue={item.weight || ' '}
                        {...register('weight', {
                            required: 'weight is required',
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
                                {...register('photo')}
                            />
                        </Button>
                    </Box>

                    <Box sx={{ textAlign: 'right' }}>
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
                            Update Pet
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
