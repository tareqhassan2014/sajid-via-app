import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Pagination, Paper, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { Key, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useGetHostelBooksQuery } from '../features/hostel/hostelApi';

import * as React from 'react';
import HostelBookRow from '../components/hostel/HostelBookRow';

const HostelBook = () => {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(50);

    const { data, refetch } = useGetHostelBooksQuery(page);

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
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <HostelBookRow key={index} item={item} />
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

export default HostelBook;
