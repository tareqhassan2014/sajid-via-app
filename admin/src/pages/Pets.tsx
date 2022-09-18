import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import AddPetModal from '../components/pet/AddPetModal';
import PetRow from '../components/pet/PetRow';
import { useGetPetsQuery } from '../features/pet/petApi';

const Pets = () => {
    const { data } = useGetPetsQuery('');

    return (
        <>
            <AddPetModal />
            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Breed</th>
                            <th>Birth Date</th>
                            <th>Gender</th>
                            <th>Weight</th>
                            <th>Active</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <PetRow item={item} key={index} />
                            ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default Pets;
