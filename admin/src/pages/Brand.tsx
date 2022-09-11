import { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { getBrand } from '../api/brandCategory';
import IsActive from '../components/IsActive';

const Brand = () => {
    let [brand, setBrand] = useState([]);

    useEffect(() => {
        getBrand().then((res: any) => {
            setBrand(res.data.response);
        });
    }, []);

    return (
        <Card className="p-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>IsActive</th>
                        <th>createdBy</th>
                    </tr>
                </thead>
                <tbody>
                    {brand &&
                        brand.map((item: any, index) => (
                            <>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <IsActive collection="brand" item={item} />
                                    <td>{item.createdBy}</td>
                                </tr>
                            </>
                        ))}
                </tbody>
            </Table>
        </Card>
    );
};
export default Brand;
