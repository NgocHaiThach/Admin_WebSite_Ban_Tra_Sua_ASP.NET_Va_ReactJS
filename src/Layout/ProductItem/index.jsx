import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { item, index } = props
    return (
        <tr>
            <td >{index + 1}</td>
            <td >{item.productId}</td>
            <td >{item.productName}</td>
            <td >{item.categoryId}</td>
            {/* <td >{item.description}</td> */}
            <td >{item.price}</td>
            <td >30</td>
            {/* <td className="col-lg-2">{item.image}</td> */}
            <td className="col-lg-2">
                <Button variant="success" className="mr-5">
                    <Link to={`/product/${item.productId}/edit`}>
                        Sửa
                    </Link>
                </Button>
                <Button variant="danger" className="ml-5">Xóa</Button>
            </td>
        </tr>
    );
}

export default ProductItem;