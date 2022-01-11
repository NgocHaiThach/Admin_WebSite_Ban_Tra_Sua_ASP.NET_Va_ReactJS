import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ChartSoldView from '../../Layout/ChartSoldView';
import requestApi from '../../Utils/RequestApi';

function ChartSoldPage(props) {

    const [billList, setBillList] = useState([])

    const getBill = async () => {
        const res = await requestApi('api/orders', 'GET')
        setBillList(res.data)
    }

    useEffect(() => {
        getBill()
    }, [])
    return (
        <Container>
            <ChartSoldView billList={billList} />
        </Container>
    );
}

export default ChartSoldPage;