import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BillList from '../../Layout/BillList';
import cookies from 'react-cookies';
import requestApi from '../../Utils/RequestApi';
import { FormatInput } from '../../Utils/FormatInput';



function BillPage(props) {

    const adminInfo = cookies.load('admin')

    const [input, setInput] = useState('')
    const [billList, setBillList] = useState([])
    const [listToSearch, setListToSearch] = useState([])



    const getBill = async () => {
        const res = await requestApi('api/orders', 'GET')
        setBillList(res.data)
    }

    //get api lưu vào ListToSearch để cho việc filter 
    const getToSearch = async () => {
        const res = await requestApi('api/orders', 'GET')
        setListToSearch(res.data)
    }

    useEffect(() => {
        getBill()
        //khi để dependence input ở useEffect này thì bất đồng bộ 
        //hàm trên sẽ chạy sau dẫn tới kết quả sẽ là nguyên list cũ
    }, [])

    useEffect(() => {
        getToSearch()
    }, [input])

    const handleSearch = (input) => {

        const val = FormatInput(input.search)
        const filter = listToSearch.filter((item) => {
            const name = FormatInput(item.receive.name)
            if (name.includes(val)) {
                return item
            }
        })
        setBillList(filter)
        setInput(input)
    }




    return (
        <>
            {adminInfo &&
                <Container>
                    <BillList
                        billList={billList}
                        handleSearch={handleSearch}
                    />
                </Container>
            }
        </>
    );
}

export default BillPage;