import React from 'react';

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Pie, defaults } from 'react-chartjs-2'


function ChartProductView(props) {
    const { productList } = props;

    let lableProduct = []
    let numberofLabel = []
    productList.map((item, index) => {
        lableProduct.push(item.productName)
        numberofLabel.push((item.inventory))
    })

    return (

        <div>
            <Bar
                data={{
                    labels: lableProduct,
                    datasets: [
                        {
                            label: 'Số lượng còn lại',
                            data: numberofLabel,
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

    );
}

export default ChartProductView;