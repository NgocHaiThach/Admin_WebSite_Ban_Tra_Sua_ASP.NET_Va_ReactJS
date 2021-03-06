import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { item, index, onDeleteProduct } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //xử lý xóa sản phẩm
    const handleDeleteProduct = (id) => {
        onDeleteProduct(id)
        handleClose()
    }

    return (
        <tr>
            <td >{index + 1}</td>
            <td >{item.productId}</td>
            <td >{item.productName}</td>
            <td >{item.categoryId}</td>
            <td >{item.price}</td>
            <td >{item.inventory}</td>
            <td className="col-lg-2">
                <Button variant="success"
                    className="mr-5"
                >
                    <Link to={`/product/${item.productId}/edit`}>
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
                        onClick={() => handleDeleteProduct(item.productId)}>
                        Xóa sản phẩm
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
}

export default ProductItem;