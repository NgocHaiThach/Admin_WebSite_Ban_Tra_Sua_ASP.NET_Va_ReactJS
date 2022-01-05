import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CategoryList from '../../Layout/CategoryList';
import { Link } from 'react-router-dom';
import RequestApi from '../../Utils/RequestApi';
import { FormatInput } from '../../Utils/FormatInput';
import cookies from 'react-cookies';


function CategoryListPage(props) {

    const adminInfo = cookies.load('admin')

    const [categoryList, setCategoryList] = useState([])
    const [listToSearch, setListToSearch] = useState([])
    const [input, setInput] = useState('')

    //get api lưu vào ListToSearch để cho việc hiển thị  
    const getCategoryList = async () => {
        const res = await RequestApi('api/categories/full', 'GET')
        setCategoryList(res.data)
    }

    //get api lưu vào ListToSearch để cho việc filter 
    const getToSearch = async () => {
        const res = await RequestApi('api/categories/full', 'GET')
        setListToSearch(res.data)
    }

    useEffect(() => {
        getCategoryList()
    }, [])

    useEffect(() => {
        getToSearch()
    }, [input])


    //xu ly search category
    const handleSearch = (input) => {

        const val = FormatInput(input.search)
        const filter = listToSearch.filter((item) => {
            const name = FormatInput(item.categoryName)
            if (name.includes(val)) {
                return item
            }
        })
        setCategoryList(filter)
        setInput(input)
    }


    //xu ly xoa category
    const handleDeleteCategory = async (id) => {
        try {
            await RequestApi(`api/categories/${id}`, 'DELETE')
            getCategoryList()
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {adminInfo && <Container>
                <Button variant="primary" className="mb-20 mt-20 button-custome">
                    <Link to='/add/categories'>
                        Thêm loại sản phẩm
                    </Link>
                </Button>

                <CategoryList
                    categoryList={categoryList}
                    handleSearch={handleSearch}
                    handleDeleteCategory={handleDeleteCategory}
                />
            </Container>}
        </div>
    );
}

export default CategoryListPage;