import { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { getProductCategory } from '../api/productCategory';
import IsActive from '../components/IsActive';

const ProductCategory = () => {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        getProductCategory().then((res) => {
            setCategory(res.data.response);
        });
    }, []);

    return (
        <Card className="p-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>IsActive</th>
                    </tr>
                </thead>
                <tbody>
                    {category &&
                        category.map((item: any, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <IsActive
                                    collection="productCategory"
                                    item={item}
                                />
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default ProductCategory;
