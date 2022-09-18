import { Pagination } from '@mui/material';
import { Key, useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import AddProductModal from '../components/product/AddProductModal';
import ProductRow from '../components/product/ProductRow';
import { useGetProductQuery } from '../features/product/productApi';

const Products = () => {
    const [page, setPage] = useState(1);
    const { data, refetch } = useGetProductQuery(page);
    const [count, setCount] = useState(5);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <>
            <AddProductModal />

            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>IsActive</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <ProductRow item={item} key={index} />
                            ))}
                    </tbody>
                </Table>

                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    //@ts-ignore
                    color="success"
                />
            </Card>
        </>
    );
};

export default Products;
