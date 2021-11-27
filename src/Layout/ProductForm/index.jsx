import React from 'react';
import { Row } from 'react-bootstrap';

function ProductForm(props) {
    return (
        <Row>
            <form className="mt-20">
                <p className="form-group">
                    <label>Tên Sản Phẩm</label>
                    <input className="form-control max-width" type="text" />
                </p>
                <p className="form-group">
                    <label>Loại Sản Phẩm</label>
                    <input className="form-control max-width " type="text" />
                </p>
                <p className="form-group">
                    <label>Giá</label>
                    <input className="form-control max-width " type="text" />
                </p>
                <p className="form-group">
                    <label>Số Lượng</label>
                    <input className="form-control max-width " type="text" />
                </p>
                <p className="form-group">
                    <label>Hình Ảnh</label>
                    <input className="form-control max-width " type="text" />
                </p>
            </form>
        </Row>
    );
}

export default ProductForm;