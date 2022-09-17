import { Key, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import AddProductModal from '../components/product/AddProductModal';
import ProductRow from '../components/product/ProductRow';
import { useGetProductQuery } from '../features/product/productApi';
let index = 1;

const Products = () => {
    let [nextDisbale, setNextDisable] = useState(false);
    let [prevDisbale, setPrevDisable] = useState(false);

    const { data } = useGetProductQuery(index || 1);

    const prev = () => {
        setNextDisable(false);
        if (index - 1 > 0) {
            index -= 1;
        } else {
            index = 1;
            setPrevDisable(true);
        }
    };

    const next = () => {
        setPrevDisable(false);
        index += 1;
    };

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
                <nav aria-label="Page navigation example">
                    <button
                        disabled={prevDisbale}
                        onClick={prev}
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                    <button
                        aria-label="Previous"
                        disabled={nextDisbale}
                        onClick={next}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </nav>
            </Card>
        </>
    );
};

export default Products;
