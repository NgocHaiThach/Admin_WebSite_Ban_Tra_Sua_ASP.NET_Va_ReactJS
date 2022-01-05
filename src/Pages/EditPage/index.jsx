import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import EditForm from '../../Layout/EditForm';
import RequestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';

function EditPage(props) {

    const adminInfo = cookies.load('admin')

    const { id } = useParams()
    const [valueUpdate, setValueUpdate] = useState()

    const getProductEdit = async () => {
        try {
            const res = await RequestApi(`api/products/full/${id}`, 'GET')
            setValueUpdate(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductEdit()
    }, [])


    const handleEditProduct = async (item) => {
        try {
            await RequestApi(`api/products/${id}`, 'PUT', {
                productId: id,
                productName: item.name,
                image: item.image,
                price: item.price,
                description: item.description,
                inventory: item.quantity,
                categoryId: item.category,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {adminInfo && <Container>
                <h3 className="mt-20">Sửa Sản Phẩm</h3>
                {valueUpdate && <EditForm
                    valueUpdate={valueUpdate}
                    handleEditProduct={handleEditProduct}
                />}
            </Container>}
        </>
    );
}

export default EditPage;