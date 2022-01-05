import React from 'react';
import { Row, Table } from 'react-bootstrap';
import BillItem from '../BillItem';

function BillList(props) {
    const { billList } = props;

    return (

        <Row>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title mt-20 mb-40">Danh Sách Hóa Đơn</h3>
                </div>
                {/* <form className='search-product mb-20'>
                    <input className='search__input'
                        placeholder='Loại sản phẩm bạn muốn tìm'
                        value={search}
                        onChange={onSearch}
                    />
                </form> */}
                <div className="panel-body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Mã</th>
                                <th >Tên Khách Hàng</th>
                                <th >Tổng Tiền</th>
                                <th >Thời Gian</th>
                                <th >Chi Tiết</th>
                            </tr>
                        </thead>
                        {billList.map((item, index) => (
                            <tbody key={index}>
                                <BillItem
                                    item={item}
                                    index={index}

                                />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>

        </Row>

    );
}

export default BillList;