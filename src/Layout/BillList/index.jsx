import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import { formatPrice } from '../../Utils/FormatPrice';
import BillItem from '../BillItem';
import moment from 'moment'

function BillList(props) {
    const { billList, handleSearch } = props;

    const listLast7Day = []
    const listLastDay = []

    const totalMoney = billList.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const lengthBill = billList.length

    const [search, setSearch] = useState('')
    const typingTimoutRef = useRef(null)

    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handleSearch) {
                handleSearch(formvalues)
            }
        }, 300)

    }

    // const dateTo = moment().format('YYYY-MM-DD');
    const last7Day = moment().subtract(7, 'd').format('YYYY-MM-DD');
    const lastDay = moment().subtract(1, 'd').format('YYYY-MM-DD');


    billList.map(item => {
        if (item.orderDate > last7Day)
            listLast7Day.push(item)
        if (item.orderDate > lastDay)
            listLastDay.push(item)
    })



    const totalMoneyLast7Day = listLast7Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)

    const totalMoneyLastDay = listLastDay.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)



    return (

        <Row>
            <div className="panel panel-primary">

                <div className="panel-heading">
                    <h3 className="panel-title mt-20 mb-40">Danh Sách Hóa Đơn</h3>
                </div>
                <div className="total-money">
                    Tổng doanh thu: {formatPrice(totalMoney)}đ

                </div>

                <div className="total-money">
                    Tổng doanh thu 7 ngày gần nhất: {formatPrice(totalMoneyLast7Day)}đ

                </div>

                <div className="total-money">
                    Tổng doanh thu hôm qua: {formatPrice(totalMoneyLastDay)}đ

                </div>
                <div className="total-money">
                    Tổng số hóa đơn: {lengthBill}
                </div>
                <form className='search-product mb-20'>
                    <input className='search__input'
                        placeholder='Tên khách hàng bạn muốn tìm hóa đơn'
                        value={search}
                        onChange={onSearch}
                    />
                </form>
                <div className="panel-body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Mã</th>
                                <th >Tên Khách Hàng</th>
                                <th >Tổng Tiền</th>
                                <th >Thời Gian</th>
                                <th >Chi Tiết</th>
                            </tr>
                        </thead>
                        {billList.map((item, index) => (
                            <tbody key={index}>
                                <BillItem
                                    item={item}
                                    index={index}

                                />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>

        </Row>

    );
}

export default BillList;