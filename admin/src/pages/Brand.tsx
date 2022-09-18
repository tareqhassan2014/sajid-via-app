import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import BrandRow from '../components/brand/BrandRow';
import CreateBrandModal from '../components/brand/CreateBrandModal';
import { useGetBrandsQuery } from '../features/brand/brandApi';

const Brand = () => {
    const { data } = useGetBrandsQuery('/api');

    return (
        <>
            <CreateBrandModal />
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
                                <BrandRow key={index} item={item} />
                            ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default Brand;
