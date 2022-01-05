import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryForm from '../../Layout/CategoryForm';
import RequestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';

function AddCategoryPage(props) {
    const adminInfo = cookies.load('admin')

    const handleAddCategory = async (item, status) => {
        try {
            await RequestApi(`api/categories`, 'POST', {
                categoryName: item.name,
                enable: status,
                products: null,
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {adminInfo && <Container>
                <CategoryForm
                    handleAddCategory={handleAddCategory}
                />
            </Container>
            }
        </>
    );
}

export default AddCategoryPage;