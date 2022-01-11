import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { formatPrice } from '../../Utils/FormatPrice';

function BillItem(props) {

    const { item, index } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()

    const onDetailBill = (id) => {
        history.push(`bill/${id}/detail`)
    }
    return (
        <>
            <tr>
                <td >{index + 1}</td>
                <td >{item.orderId}</td>
                <td >{item.receive.name}</td>
                <td >{formatPrice(item.totolPrice)}đ</td>
                <td >{item.orderDate}</td>

                <td className="col-lg-2">
                    <Button
                        variant="primary"
                        className="ml-5"
                        onClick={() => onDetailBill(item.orderId)}
                    >
                        Chi Tiết
                    </Button>
                </td>
            </tr>
        </>
    );
}

export default BillItem;