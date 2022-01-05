import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CategoryItem(props) {

    const { item, index, handleDeleteCategory } = props
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onDeleteCategory = (id) => {
        handleDeleteCategory(id)
        if (handleDeleteCategory) {
            handleClose()
        }
    }


    return (

        <tr>
            <td >{index + 1}</td>
            <td >{item.categoryId}</td>
            <td >{item.categoryName}</td>
            <td >
                <label>
                    <input
                        className="checkbox-category__status"
                        type="checkbox"
                        defaultChecked={item.enable && 'checked'}
                    />
                    Còn hàng
                </label>
            </td>

            <td className="col-lg-2">
                <Button variant="success"
                    className="mr-5"
                >
                    <Link to={`/category/${item.categoryId}/edit`}>
                        Sửa
                    </Link>
                </Button>
                <Button variant="danger"
                    className="ml-5"
                    onClick={handleShow}
                >
                    Xóa
                </Button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn chắc chắn muốn xóa sản phẩm này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => onDeleteCategory(item.categoryId)}
                    >
                        Xóa sản phẩm
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
}

export default CategoryItem;