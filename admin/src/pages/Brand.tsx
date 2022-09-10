import { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getBrand } from '../api/brandCategory';

const Brand = () => {
    let [brand, setBrand] = useState([]);

    useEffect(() => {
        getBrand().then((res: any) => {
            setBrand(res.data.response);
        });
    }, []);

    const navigate = useNavigate();
    //@ts-ignore
    const user = useSelector((state: any) => state.user);

    if (!user.token) {
        navigate('/signin');
    }

    return (
        <Card className="p-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>

                        <th>createdBy</th>
                    </tr>
                </thead>
                <tbody>
                    {brand &&
                        brand.map(
                            (item: any, index) =>
                                item.isActive && (
                                    <>
                                        <tr key={index}>
                                            <td>{item.name}</td>

                                            <td>{item.createdBy}</td>
                                        </tr>
                                    </>
                                )
                        )}
                </tbody>
            </Table>
        </Card>
    );
};
export default Brand;
