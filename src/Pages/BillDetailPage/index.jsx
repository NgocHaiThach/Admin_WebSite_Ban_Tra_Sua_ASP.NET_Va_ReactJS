import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BillForm from '../../Layout/BillForm';
import requestApi from '../../Utils/RequestApi';

function BillDetailPage(props) {

    const { id } = useParams()
    const [billValue, setBillValue] = useState()

    const getBillValue = async () => {
        try {
            const res = await requestApi(`api/orders/${id}`, 'GET')
            setBillValue(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBillValue()
    }, [])
    return (
        <Container>
            {billValue && <BillForm billValue={billValue} />}
        </Container>
    );
}

export default BillDetailPage;