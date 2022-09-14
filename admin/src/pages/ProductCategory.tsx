import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import IsActive from '../components/IsActive';
import { useGetProductCategoryQuery } from '../features/product/productApi';

const ProductCategory = () => {
    const { data } = useGetProductCategoryQuery('');

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
                    {data?.response &&
                        data?.response.map((item: any, index: Key) => (
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
