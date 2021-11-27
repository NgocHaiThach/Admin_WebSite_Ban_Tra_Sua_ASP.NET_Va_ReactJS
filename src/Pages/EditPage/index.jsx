import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import EditForm from '../../Layout/EditForm';
import requestApi from '../../Utils/RequestApi';

function EditPage(props) {

    const { id } = useParams()
    const [productList, setProductList] = useState([])
    const getProductList = async () => {
        const res = await requestApi('api/products', 'GET')
        setProductList(res.data)
    }

    useEffect(() => {
        getProductList()
    }, [])

    const valueUpdate = productList.find(item => item.productId === +id)
    console.log('item', valueUpdate)

    return (
        <Container>
            <h3 className="mt-20">Sửa Sản Phẩm</h3>
            {valueUpdate && <EditForm valueUpdate={valueUpdate} />}
            {valueUpdate && <Button variant="secondary" className="mr-5">Trở Lại</Button>}
            {valueUpdate && <Button variant="primary" className="ml-5">Lưu Lại</Button>}
        </Container>
    );
}

export default EditPage;