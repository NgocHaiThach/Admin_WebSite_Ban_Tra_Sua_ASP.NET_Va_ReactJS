import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ProductForm from '../../Layout/ProductForm';

function AddProductPage(props) {
    return (
        <Container>
            <h3 className="mt-20">Thêm Sản Phẩm</h3>
            <ProductForm />
            <Button variant="secondary" className="mr-5">Trở Lại</Button>
            <Button variant="primary" className="ml-5">Thêm Sản Phẩm</Button>

        </Container>
    );
}

export default AddProductPage;