import React, { useRef, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import ProductItem from '../ProductItem';

function ProductList(props) {
    const { productList, handleSearch, handleDeleteProduct } = props
    const lengthProduct = productList.length
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

    const onDeleteProduct = (id) => {
        handleDeleteProduct(id)
    }

    return (

        <Row>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title mb-40">Danh Sách Sản Phẩm</h3>
                </div>

                <div className="total-money">
                    Tổng số sản phẩm: {lengthProduct}
                </div>

                <form className='search-product mb-20'>
                    <input className='search__input'
                        placeholder='Sản phẩm bạn muốn tìm'
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
                                <th >Loại</th>
                                <th >Giá</th>
                                <th >Số lượng</th>
                                <th >Hoạt động</th>
                            </tr>
                        </thead>
                        {productList.map((item, index) => (
                            <tbody key={index}>
                                <ProductItem
                                    item={item}
                                    index={index}
                                    onDeleteProduct={onDeleteProduct}
                                />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </Row>
    );
}

export default ProductList;