import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import CreateProductCategoryModel from '../components/productCategory/CreateProductCategoryModel';
import ProductCategoryRow from '../components/productCategory/ProductCategoryRow';
import { useGetProductCategoryQuery } from '../features/product/productApi';

const ProductCategory = () => {
    const { data } = useGetProductCategoryQuery('');

    return (
        <>
            <CreateProductCategoryModel />
            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IsActive</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <ProductCategoryRow key={index} item={item} />
                            ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default ProductCategory;
