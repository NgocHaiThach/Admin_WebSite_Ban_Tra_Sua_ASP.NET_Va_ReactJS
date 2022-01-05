import React, { useRef, useState } from 'react';
import CategoryItem from '../CategoryItem';
import { Row, Table } from 'react-bootstrap';


function CategoryList(props) {
    const { categoryList, handleSearch, handleDeleteCategory } = props

    const [search, setSearch] = useState('')
    const typingTimoutRef = useRef(null)

    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handleSearch) {
                handleSearch(formvalues)
            }
        }, 300)

    }
    return (
        <Row>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title mb-40">Danh Sách Loại Sản Phẩm</h3>
                </div>
                <form className='search-product mb-20'>
                    <input className='search__input'
                        placeholder='Loại sản phẩm bạn muốn tìm'
                        value={search}
                        onChange={onSearch}
                    />
                </form>
                <div className="panel-body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Mã</th>
                                <th >Tên</th>
                                <th >Trạng thái</th>
                                <th >Hoạt động</th>
                            </tr>
                        </thead>
                        {categoryList.map((item, index) => (
                            <tbody key={index}>
                                <CategoryItem
                                    item={item}
                                    index={index}
                                    handleDeleteCategory={handleDeleteCategory}
                                />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </Row>
    );
}

export default CategoryList;