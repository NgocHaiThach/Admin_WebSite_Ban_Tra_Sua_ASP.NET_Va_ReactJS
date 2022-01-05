import React from 'react';
import { Container } from 'react-bootstrap';
import ProductForm from '../../Layout/ProductForm';
import RequestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';

function AddProductPage(props) {
    const adminInfo = cookies.load('admin')

    const handleAddProduct = async (item) => {
        try {
            await RequestApi(`api/products`, 'POST', {
                productName: item.name,
                image: item.image,
                price: item.price,
                description: item.description,
                inventory: item.quantity,
                categoryId: item.category,
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {adminInfo &&
                <Container>
                    <h3 className="mt-20">Thêm Sản Phẩm</h3>
                    <ProductForm handleAddProduct={handleAddProduct} />
                </Container>}
        </>
    );
}

export default AddProductPage;