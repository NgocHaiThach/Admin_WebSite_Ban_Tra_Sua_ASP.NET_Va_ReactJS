import React from 'react';
import { Row, Table } from 'react-bootstrap';
import ProductItem from '../ProductItem';

function ProductList(props) {
    const { productList } = props
    return (

        <Row>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Mã</th>
                                <th >Tên</th>
                                <th >Loại</th>
                                {/* <th >Mô tả</th> */}
                                <th >Giá</th>
                                <th >Số lượng</th>
                                <th >Hoạt động</th>
                                {/* <th >Hình ảnh</th> */}
                            </tr>
                        </thead>
                        {productList.map((item, index) => (
                            <tbody key={index}>
                                <ProductItem item={item} index={index} />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </Row>
    );
}

export default ProductList;