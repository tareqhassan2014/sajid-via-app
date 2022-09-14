import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import BrandRow from '../components/brand/BrandRow';
import { useGetBrandsQuery } from '../features/brand/brandApi';

const Brand = () => {
    const { data } = useGetBrandsQuery('/api');

    return (
        <>
            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IsActive</th>
                            <th>createdBy</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <BrandRow key={index} item={item} />
                            ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default Brand;
