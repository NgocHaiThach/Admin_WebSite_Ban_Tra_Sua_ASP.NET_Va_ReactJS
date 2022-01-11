import React from 'react';
import moment from 'moment';
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Pie, defaults } from 'react-chartjs-2'
import { formatPrice } from '../../Utils/FormatPrice'


function ChartSoldView(props) {
    const { billList } = props;
    const listLastDay = []
    const listLast2Day = []
    const listLast3Day = []
    const listLast4Day = []
    const listLast5Day = []
    const listLast6Day = []
    const listLast7Day = []

    const now = moment().subtract(0, 'd').format('YYYY-MM-DD');
    const lastDay = moment().subtract(1, 'd').format('YYYY-MM-DD');
    const last2Day = moment().subtract(2, 'd').format('YYYY-MM-DD');
    const last3Day = moment().subtract(3, 'd').format('YYYY-MM-DD');
    const last4Day = moment().subtract(4, 'd').format('YYYY-MM-DD');
    const last5Day = moment().subtract(5, 'd').format('YYYY-MM-DD');
    const last6Day = moment().subtract(6, 'd').format('YYYY-MM-DD');
    const last7Day = moment().subtract(7, 'd').format('YYYY-MM-DD');



    billList.map(item => {
        if (item.orderDate > lastDay) {
            listLastDay.push(item)
        }
        if (item.orderDate > last2Day) {
            listLast2Day.push(item)
        }
        if (item.orderDate > last3Day) {
            listLast3Day.push(item)
        }
        if (item.orderDate > last4Day) {
            listLast4Day.push(item)
        }
        if (item.orderDate > last5Day) {
            listLast5Day.push(item)
        }
        if (item.orderDate > last6Day) {
            listLast6Day.push(item)
        }
        if (item.orderDate > last7Day) {
            listLast7Day.push(item)
        }
        // if (last5Day <= item.orderDate && item.orderDate <= last7Day) {
        //     console.log('between', item.orderDate)
        // } else {
        //     console.log('none')
        // }
    })

    const totalMoneyLastDay = listLastDay.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const totalMoneyLast2Day = listLast2Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const totalMoneyLast3Day = listLast3Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const totalMoneyLast4Day = listLast4Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const totalMoneyLast5Day = listLast5Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const totalMoneyLast6Day = listLast6Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)
    const totalMoneyLast7Day = listLast7Day.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)

    const totalMoney = billList.reduce(function (sum, bill) {
        return sum + bill.totolPrice
    }, 0)

    return (
        <>

            <div>
                <Bar
                    data={{
                        labels: [now, lastDay, last2Day, last3Day, last4Day, last5Day, last6Day],
                        datasets: [
                            {
                                label: 'Doanh thu trong ngày',
                                data: [totalMoneyLastDay, totalMoneyLast2Day - totalMoneyLastDay, totalMoneyLast3Day - totalMoneyLast2Day, totalMoneyLast4Day - totalMoneyLast3Day, totalMoneyLast5Day - totalMoneyLast4Day, totalMoneyLast6Day - totalMoneyLast5Day, totalMoneyLast7Day - totalMoneyLast6Day],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 2,
                            },
                            // {
                            //     label: 'Quantity',
                            //     data: [47, 52, 67, 58, 9, 50],
                            //     backgroundColor: 'orange',
                            //     borderColor: 'red',
                            // },
                        ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        // scales: {
                        //     yAxes: [
                        //         {
                        //             ticks: {
                        //                 beginAtZero: true,
                        //             },
                        //         },
                        //     ],
                        // },
                        legend: {
                            labels: {
                                fontSize: 25,
                            },
                        },
                    }}
                />
            </div>
            <div className="total-money mt-20">
                Tổng doanh thu: {formatPrice(totalMoney)}đ

            </div>
            <div className="total-money">
                Tổng doanh thu 7 ngày gần nhất: {formatPrice(totalMoneyLast7Day)}đ

            </div>

            <div className="total-money">
                Tổng doanh thu hôm qua: {formatPrice(totalMoneyLastDay)}đ

            </div>
        </>
    );
}

export default ChartSoldView;