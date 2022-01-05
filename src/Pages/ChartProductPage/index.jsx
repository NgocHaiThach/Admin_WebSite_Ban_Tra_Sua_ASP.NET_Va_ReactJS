import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ChartProductView from '../../Layout/ChartProductView';
import requestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';

function ChartProductPage(props) {

    const adminInfo = cookies.load('admin')

    const [productList, setProductList] = useState([])
    const getProductList = async () => {
        const res = await requestApi('api/products/full', 'GET')
        setProductList(res.data)
    }

    useEffect(() => {
        getProductList()
    }, [])
    return (
        <>
            {adminInfo &&
                <Container className="mt-20">
                    <ChartProductView productList={productList} />
                </Container>
            }
        </>
    );
}

export default ChartProductPage;