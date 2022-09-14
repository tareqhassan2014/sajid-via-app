import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import IsActive from '../components/IsActive';
import { useGetPetsQuery } from '../features/pet/petSlice';

const Pets = () => {
    const { data } = useGetPetsQuery('');

    return (
        <Card className="p-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Description</th>
                        <th>Breed</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.response &&
                        data?.response.map((item: any, index: Key) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <IsActive collection="pet" item={item} />
                                <td>{item.description}</td>
                                <td>{item.breed}</td>
                                <td>{item.birthDate}</td>
                                <td>{item.gender}</td>
                                <td>{item.weight}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Card>
    );
};
export default Pets;
