import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BillForm(props) {
    const { billValue } = props;
    console.log('bill', billValue)
    return (
        <>
            <Row>
                <form className="mt-20">
                    <p className="form-group">
                        <label>Mã hóa đơn</label>
                        <input
                            defaultValue={billValue.orderId}
                            name="name"
                            className="form-control max-width"
                            type="text"
                        />
                    </p>
                    <p className="form-group">
                        <label>Tên Khách Hàng</label>
                        <input
                            defaultValue={billValue.receive.name}
                            name="category"
                            className="form-control max-width"
                            type="text"
                        />
                    </p>
                    <p className="form-group">
                        <label>Số Điện Thoại</label>
                        <input
                            defaultValue={billValue.receive.phone}
                            name="quantity"
                            className="form-control max-width"
                            type="text"

                        />
                    </p>
                    <p className="form-group">
                        <label>Địa Chỉ</label>
                        <input
                            defaultValue={billValue.receive.region + ', ' + billValue.receive.district + ', ' + billValue.receive.ward + ', ' + billValue.receive.address}
                            name="image"
                            className="form-control max-width"
                            type="text"
                        />
                    </p>
                    <p className="form-group">
                        <label>Thời Gian</label>
                        <input
                            defaultValue={billValue.orderDate}
                            name="price"
                            className="form-control max-width"
                            type="text"

                        />
                    </p>


                    <p className="form-group">
                        {billValue.dishOrders.map((item, index) => (
                            <>
                                <label>Sản Phẩm</label>
                                <input
                                    defaultValue={item.product.productName + ', Số lượng: ' + item.quantily + ', Size: ' + item.sizeName}
                                    name="description"
                                    className="form-control max-width"
                                    type="text"
                                />
                            </>
                        ))}

                    </p>

                    <p className="form-group">
                        <label>Tổng Tiền</label>
                        <input
                            defaultValue={billValue.totolPrice}
                            name="description"
                            className="form-control max-width"
                            type="text"
                        />
                    </p>
                </form>

            </Row>
            <Button
                variant="secondary"
                className="mr-5"
            >
                <Link to='/bills'>
                    Trở Lại
                </Link>
            </Button>
        </>
    );
}

export default BillForm;