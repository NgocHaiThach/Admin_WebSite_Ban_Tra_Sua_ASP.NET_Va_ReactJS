import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../../Layout/ProductList';
import requestApi from '../../Utils/RequestApi';


function ProductListPage(props) {

    const [productList, setProductList] = useState([])
    const getProductList = async () => {
        const res = await requestApi('api/products', 'GET')
        setProductList(res.data)
    }

    useEffect(() => {
        getProductList()
    }, [])


    return (
        <Container>
            <Button variant="primary" className="mb-20 mt-20 button-custome">
                <Link to='/add'>
                    Thêm sản phẩm
                </Link>
            </Button>
            <ProductList productList={productList} />
        </Container>
    );
}

export default ProductListPage;