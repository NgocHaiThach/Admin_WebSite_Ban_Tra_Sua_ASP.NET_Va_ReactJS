import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EditCategoryForm from '../../Layout/EditCategoryForm';
import RequestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';

function EditCategoryPage(props) {

    const adminInfo = cookies.load('admin')

    const { id } = useParams()
    const [valueUpdate, setValueUpdate] = useState()

    //xử lý laod thông tin một category lên để update
    const getCategoryEdit = async () => {
        try {
            const res = await RequestApi(`api/categories/full/${id}`, 'GET')
            setValueUpdate(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCategoryEdit()
    }, [])

    //xử lý update category
    const handleEditCategory = async (item, status) => {
        try {
            await RequestApi(`api/categories/${id}`, 'PUT', {
                categoryId: id,
                categoryName: item.name,
                enable: status,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>{adminInfo &&
            <Container>
                {valueUpdate && < EditCategoryForm
                    valueUpdate={valueUpdate}
                    handleEditCategory={handleEditCategory}
                />}
            </Container>}
        </>
    );
}

export default EditCategoryPage;