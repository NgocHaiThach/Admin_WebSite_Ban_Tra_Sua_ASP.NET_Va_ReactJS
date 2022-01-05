import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required().min(5),
    category: yup.string().required(),
    price: yup.string().required(),
    quantity: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),
}).required();


function EditForm(props) {
    const { valueUpdate, handleEditProduct } = props
    // console.log('edit', valueUpdate)

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState(
        {
            name: valueUpdate.productName,
            category: valueUpdate.categoryId,
            price: valueUpdate.price,
            quantity: valueUpdate.inventory,
            image: valueUpdate.image,
            desc: valueUpdate.description,
        }
    )

    const onSubmit = (data) => {
        handleEditProduct(data)
        if (handleEditProduct) {
            handleShow()
            reset()
            console.log('data', data)
        }

    }
    return (
        <>
            <Row>
                <form className="mt-20">
                    <p className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input
                            value={value.name}
                            name="name"
                            className="form-control max-width"
                            type="text"
                            {...register("name")}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </p>
                    {errors?.name?.type === "required" && <p className="valid-form__message">* Vui lòng nhập tên sản phẩm</p>}
                    {errors?.name?.type === "min" && <p className="valid-form__message">* Tên phải dài hơn 5 ký tự</p>}
                    <p className="form-group">
                        <label>Loại Sản Phẩm</label>
                        <input
                            value={value.category}
                            name="category"
                            className="form-control max-width"
                            type="text"
                            {...register("category")}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </p>
                    {errors?.category?.type === "required" && <p className="valid-form__message">* Vui lòng nhập loại sản phẩm</p>}
                    <p className="form-group">
                        <label>Giá</label>
                        <input
                            value={value.price}
                            name="price"
                            className="form-control max-width"
                            type="text"
                            {...register("price")}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </p>
                    {errors?.price?.type === "required" && <p className="valid-form__message">* Vui lòng nhập giá sản phẩm</p>}
                    <p className="form-group">
                        <label>Số Lượng</label>
                        <input
                            value={value.quantity}
                            name="quantity"
                            className="form-control max-width"
                            type="text"
                            {...register("quantity")}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </p>
                    {errors?.quantity?.type === "required" && <p className="valid-form__message">* Vui lòng nhập số lượng sản phẩm</p>}
                    <p className="form-group">
                        <label>Hình Ảnh</label>
                        <input
                            value={value.image}
                            name="image"
                            className="form-control max-width"
                            type="text"
                            {...register("image")}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </p>
                    {errors?.image?.type === "required" && <p className="valid-form__message">* Vui lòng nhập đường dẫn hình ảnh sản phẩm</p>}
                    <p className="form-group">
                        <label>Mô tả</label>
                        <input
                            value={value.desc}
                            name="description"
                            className="form-control max-width"
                            type="text"
                            {...register("description")}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </p>
                    {errors?.description?.type === "required" && <p className="valid-form__message">* Vui lòng nhập mô tả sản phẩm</p>}
                </form>

            </Row>
            <Button
                variant="secondary"
                className="mr-5"

            >
                <Link to='/products'>
                    Trở Lại
                </Link>
            </Button>


            <Button
                variant="primary"
                className="ml-5"
                onClick={handleSubmit(onSubmit)}
            >
                Lưu Lại
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cập nhật sản phẩm thành công!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditForm;