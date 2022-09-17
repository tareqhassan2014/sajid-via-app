import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useGetProductOrderQuery } from '../features/product/productApi';

const ProductOrder = () => {
    const { data } = useGetProductOrderQuery('/');

    console.log(data?.response);

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
            </Card>
        </div>
    );
};

export default ProductOrder;
