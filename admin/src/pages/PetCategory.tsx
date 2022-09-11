import { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { getPetCategory } from '../api/PetCategory';
import IsActive from '../components/IsActive';

const PetCategory = () => {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        getPetCategory().then((res) => {
            setCategory(res.data.response);
        });
    }, []);

    return (
        <Card className="p-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {category &&
                        category.map((item: any, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <IsActive
                                    collection="petCategory"
                                    item={item}
                                />
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Card>
    );
};
export default PetCategory;
