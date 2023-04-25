import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Chart = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3008/data/allSensor')
                const result = await response.json()

                const formattedData = result.reduce((acc, feed) => {
                    const { date, humidity } = feed
                    // เพิ่มเงื่อนไขตรวจสอบค่า NaN และแทนที่ด้วย 0
                    const humiditys = isNaN(parseFloat(humidity)) ? 0 : parseFloat(humidity)
                    return {
                        ...acc,
                        [date]: humiditys,
                    }
                }, {})
                setData(formattedData)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    const options = {
        chart: {
            type: "line",
            height: 350,
        },
        xaxis: {
            type: "datetime",
        },
        annotations: {
            yaxis: [
                {
                    y: 67,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#28a745",
                        },
                        text: "Over 67",
                    },
                },
                {
                    y: 60,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#ffc107",
                        },
                        text: "Less than 60",
                    },
                },
            ],
        },
    };

    const series = [
        {
            name: 'Humidity',
            data: Object.entries(data || {}).map(([time, humiditys]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), humiditys]),
        },
    ]



    return (
        <div>
            <div id="chart">
                <div className="toolbar">

                </div>
                <div id="chart-timeline">
                    {data ? (
                        <ReactApexChart options={options} series={series} type="line" height={350} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chart