import React from 'react';
import { Row } from 'react-bootstrap';

function EditForm(props) {
    const { valueUpdate } = props
    console.log('item2', valueUpdate)

    return (
        <Row>
            <form className="mt-20">
                <p className="form-group">
                    <label>Tên Sản Phẩm</label>
                    <input
                        className="form-control max-width"
                        type="text"
                        value={valueUpdate.productName}
                    />
                </p>
                <p className="form-group">
                    <label>Loại Sản Phẩm</label>
                    <input
                        className="form-control max-width "
                        type="text"
                        value={valueUpdate.categoryId}
                    />
                </p>
                <p className="form-group">
                    <label>Giá</label>
                    <input
                        className="form-control max-width "
                        type="text"
                        value={valueUpdate.price}
                    />
                </p>
                <p className="form-group">
                    <label>Số Lượng</label>
                    <input
                        className="form-control max-width "
                        type="text"
                        value="30"
                    />
                </p>
                <p className="form-group">
                    <label>Hình Ảnh</label>
                    <input
                        className="form-control max-width "
                        type="text"
                        value={valueUpdate.image}
                    />
                </p>
            </form>
        </Row>
    );
}

export default EditForm;