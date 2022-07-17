import React, { useEffect, useState } from 'react';

import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../../Layout/ProductList';
import { FormatInput } from '../../Utils/FormatInput';
import RequestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';


function ProductListPage(props) {
    const adminInfo = cookies.load('admin')

    const [input, setInput] = useState('')
    const [listToSearch, setListToSearch] = useState([])

    //get api lưu vào productList để cho việc hiển thị  

    const [productList, setProductList] = useState([])
    const getProductList = async () => {
        const res = await RequestApi('api/products/full', 'GET')
        return setProductList(res.data)
    }
    useEffect(() => {
        getProductList()
    }, [])

    //get api lưu vào ListToSearch để cho việc filter 
    const getToSearch = async () => {
        const res = await RequestApi('api/products/full', 'GET')
        setListToSearch(res.data)
    }



    useEffect(() => {
        getToSearch()
    }, [input])

    //xu ly search product
    const handleSearch = (input) => {

        const val = FormatInput(input.search)
        const filter = listToSearch.filter((item) => {
            const name = FormatInput(item.productName)
            if (name.includes(val)) {
                return item
            }
        })
        setProductList(filter)
        setInput(input)
        console.log("filter", filter)
    }

    //xu ly xoa 1 san pham
    const handleDeleteProduct = async (id) => {
        try {
            await RequestApi(`api/products/${id}`, 'DELETE')
            getProductList()
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {adminInfo && <Container>
                <Button variant="primary" className="mb-20 mt-20 button-custome">
                    <Link to='/add/products'>
                        Thêm sản phẩm
                    </Link>
                </Button>
                <ProductList
                    productList={productList}
                    handleSearch={handleSearch}
                    handleDeleteProduct={handleDeleteProduct}
                />
            </Container>}
        </>
    );
}

export default ProductListPage;