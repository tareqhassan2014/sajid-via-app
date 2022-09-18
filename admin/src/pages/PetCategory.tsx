import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import CreatePetCategoryModel from '../components/petCategory/CreatePetCategoryModel';
import PetCategoryRow from '../components/petCategory/PetCategoryRow';
import { useGetPetCategoryQuery } from '../features/pet/petApi';

const PetCategory = () => {
    const { data } = useGetPetCategoryQuery('');

    return (
        <>
            <CreatePetCategoryModel />
            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <PetCategoryRow item={item} key={index} />
                            ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default PetCategory;
