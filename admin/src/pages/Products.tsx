import { Key, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { getProducts } from '../api/product';
import { useGetProductQuery } from '../features/product/productApi';
let index = 1;

const Products = () => {
    let [product, setProduct] = useState([]);
    let [nextDisbale, setNextDisable] = useState(false);
    let [prevDisbale, setPrevDisable] = useState(false);

    const { data } = useGetProductQuery(index || 1);

    const products = async () => {
        await getProducts(index).then((res) => {
            setProduct(res.data.response);
        });
    };

    console.log(product);

    const prev = () => {
        setNextDisable(false);
        if (index - 1 > 0) {
            index -= 1;
            products();
        } else {
            index = 1;
            setPrevDisable(true);
        }
    };

    const next = () => {
        setPrevDisable(false);
        index += 1;
        products();
    };

    return (
        <Card className="p-5">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.response &&
                        data?.response.map((item: any, index: Key) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        src={item.ProductImage}
                                        alt={item.name}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.details}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <nav aria-label="Page navigation example">
                <button
                    disabled={prevDisbale}
                    onClick={prev}
                    aria-label="Previous"
                >
                    {' '}
                    <span aria-hidden="true">&laquo;</span>{' '}
                </button>
                <button
                    aria-label="Previous"
                    disabled={nextDisbale}
                    onClick={next}
                >
                    {' '}
                    <span aria-hidden="true">&raquo;</span>{' '}
                </button>
            </nav>
        </Card>
    );
};
export default Products;
