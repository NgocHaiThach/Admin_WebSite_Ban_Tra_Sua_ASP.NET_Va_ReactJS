import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup.string().required().min(5),
    category: yup.string().required(),
    price: yup.string().required(),
    quantity: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),
}).required();


function ProductForm(props) {

    const { handleAddProduct } = props


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        handleAddProduct(data)
        if (handleAddProduct) {
            handleShow()
            reset()
        }
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
                        <label>Loại Sản Phẩm</label>
                        <input
                            name="category"
                            className="form-control max-width"
                            type="text"
                            {...register("category")}
                        />
                    </p>
                    {errors?.category?.type === "required" && <p className="valid-form__message">* Vui lòng nhập loại sản phẩm</p>}
                    <p className="form-group">
                        <label>Giá</label>
                        <input
                            name="price"
                            className="form-control max-width"
                            type="text"
                            {...register("price")}
                        />
                    </p>
                    {errors?.price?.type === "required" && <p className="valid-form__message">* Vui lòng nhập giá sản phẩm</p>}
                    <p className="form-group">
                        <label>Số Lượng</label>
                        <input
                            name="quantity"
                            className="form-control max-width"
                            type="text"
                            {...register("quantity")}
                        />
                    </p>
                    {errors?.quantity?.type === "required" && <p className="valid-form__message">* Vui lòng nhập số lượng sản phẩm</p>}
                    <p className="form-group">
                        <label>Hình Ảnh</label>
                        <input
                            name="image"
                            className="form-control max-width"
                            type="text"
                            {...register("image")}
                        />
                    </p>
                    {errors?.image?.type === "required" && <p className="valid-form__message">* Vui lòng nhập đường dẫn hình ảnh sản phẩm</p>}
                    <p className="form-group">
                        <label>Mô tả</label>
                        <input
                            name="description"
                            className="form-control max-width"
                            type="text"
                            {...register("description")}
                        />
                    </p>
                    {errors?.description?.type === "required" && <p className="valid-form__message">* Vui lòng nhập mô tả sản phẩm</p>}
                </form>
            </Row>
            <Button
                variant="secondary"
                className="mr-5"
            >
                <Link to="/products">
                    Trở Lại
                </Link>
            </Button>
            <Button
                onClick={handleSubmit(onSubmit)}
                variant="primary"
                className="ml-5"
            >

                Thêm Sản Phẩm

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

export default ProductForm;