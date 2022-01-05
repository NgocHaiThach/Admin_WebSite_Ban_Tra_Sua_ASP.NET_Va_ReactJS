import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup.string().required().min(5),
}).required();

function CategoryForm(props) {

    const { handleAddCategory } = props;

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [status, setStatus] = useState(true);

    const onSubmit = (data) => {
        handleAddCategory(data, status)
        if (handleAddCategory) {
            handleShow()
            reset()
        }
    }

    const handleChange = (e) => {
        let isChecked = e.target.checked;
        setStatus(isChecked)
    }


    return (
        <>
            <Row>
                <form className="mt-20">
                    <p className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input
                            name="name"
                            className="form-control max-width"
                            type="text"
                            {...register("name")}
                        />
                    </p>
                    {errors?.name?.type === "required" && <p className="valid-form__message">* Vui lòng nhập tên sản phẩm</p>}
                    {errors?.name?.type === "min" && <p className="valid-form__message">* Tên phải dài hơn 5 ký tự</p>}
                    <p className="form-group">
                        <label
                            className="checkbox-category__status">
                            Còn hàng
                        </label>
                        <input
                            name="status"
                            type="checkbox"
                            checked={status}
                            onChange={e => handleChange(e)}
                        />
                    </p>
                </form>
            </Row>
            <Button
                variant="secondary"
                className="mr-5"
            >
                <Link to="/categories">
                    Trở Lại
                </Link>
            </Button>
            <Button
                onClick={handleSubmit(onSubmit)}
                variant="primary"
                className="ml-5"
            >
                Thêm Loại Sản Phẩm

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thêm sản phẩm thành công!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CategoryForm;