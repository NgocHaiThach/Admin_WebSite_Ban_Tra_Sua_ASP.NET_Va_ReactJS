import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


function UserItem(props) {
    const { item, index, handleDeleteUser } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onDeleteUser = (id) => {
        handleDeleteUser(id)
        handleClose()
    }
    return (
        <>
            <tr>
                <td >{index + 1}</td>
                <td >{item.userId}</td>
                <td >{item.userName}</td>
                <td >{item.password}</td>
                <td >{item.fullName}</td>
                <td >{item.email}</td>
                <td className="col-lg-2">
                    <Button
                        variant="danger"
                        className="ml-5"
                        onClick={handleShow}
                    >
                        Khóa
                    </Button>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn chắc chắn muốn khóa user này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => onDeleteUser(item.userId)}>
                        Khóa user
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserItem;