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
                    const { date, pH } = feed
                    // เพิ่มเงื่อนไขตรวจสอบค่า NaN และแทนที่ด้วย 0
                    const pHs = isNaN(parseFloat(pH)) ? 0 : parseFloat(pH)
                    return {
                        ...acc,
                        [date]: pHs,
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
            type: 'line',
            height: 20,
        },
        xaxis: {
            type: 'datetime',
        },
        annotations: {
            yaxis: [
                {
                    y: 6,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#28a745",
                        },
                        text: "Over 6",
                    },
                },
                {
                    y: 4,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#ffc107",
                        },
                        text: "Less than 4",
                    },
                },
            ],
        },
    }

    const series = [
        {
            name: 'Light',
            data: Object.entries(data || {}).map(([time, pHs]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), pHs]),
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