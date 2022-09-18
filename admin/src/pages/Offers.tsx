import { Key } from 'react';
import { Card, Table } from 'react-bootstrap';
import AddOfferModal from '../components/offer/AddOfferModal';
import OfferRow from '../components/offer/OfferRow';
import { useGetOfferQuery } from '../features/offers/offerApi';

const Offers = () => {
    const { data } = useGetOfferQuery('');

    return (
        <>
            <AddOfferModal />

            <Card className="p-5">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Sub Title</th>
                            <th>Description</th>
                            <th>Active</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.response &&
                            data?.response.map((item: any, index: Key) => (
                                <OfferRow item={item} key={index} />
                            ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default Offers;
