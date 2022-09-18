import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Pagination, Paper, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { Key, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useGetPetHostelOrderQuery } from '../features/pet/petApi';

const TreatmentOrder = () => {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(5);

    const { data, refetch } = useGetPetHostelOrderQuery(page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div>
            <Paper sx={{ p: 5, pt: 1 }}>
                <Box sx={{ textAlign: 'end' }}>
                    <Tooltip title="Refresh">
                        <IconButton
                            onClick={() => refetch()}
                            aria-label="refresh"
                            color="success"
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

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
            </Paper>
        </div>
    );
};

export default TreatmentOrder;
