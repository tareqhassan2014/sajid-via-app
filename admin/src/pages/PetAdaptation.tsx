import { Pagination } from '@mui/material';
import { Key, useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useGetPetAdaptationQuery } from '../features/pet/petApi';

const PetAdaptation = () => {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(5);

    const { data, refetch } = useGetPetAdaptationQuery(page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div>
            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Order Status</th>
                            <th>Transaction ID</th>
                            <th>Payment Status</th>
                            <th>Cash On</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.orderStatus}</td>
                                    <td>
                                        {item.transactionID
                                            ? item.transactionID
                                            : ' '}
                                    </td>
                                    <td>
                                        {item.paymentStatus
                                            ? item.paymentStatus
                                            : 'Not Paid'}
                                    </td>
                                    <td>{item.cashOn ? 'YES' : 'NO'}</td>
                                    <td>
                                        {item.totalAmount
                                            ? item.totalAmount
                                            : 0}
                                    </td>
                                </tr>
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
        </div>
    );
};

export default PetAdaptation;
