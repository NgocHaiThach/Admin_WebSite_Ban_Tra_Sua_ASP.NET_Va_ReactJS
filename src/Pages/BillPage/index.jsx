import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BillList from '../../Layout/BillList';
import cookies from 'react-cookies';
import requestApi from '../../Utils/RequestApi';

function BillPage(props) {

    const adminInfo = cookies.load('admin')

    const [billList, setBillList] = useState([])

    const getBill = async () => {
        const res = await requestApi('api/orders', 'GET')
        setBillList(res.data)
    }

    useEffect(() => {
        getBill()
    }, [])


    return (
        <>
            {adminInfo &&
                <Container>
                    <BillList billList={billList} />
                </Container>
            }
        </>
    );
}

export default BillPage;