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
                    const { date, light } = feed
                    // เพิ่มเงื่อนไขตรวจสอบค่า NaN และแทนที่ด้วย 0
                    const lights = isNaN(parseFloat(light)) ? 0 : parseFloat(light)
                    return {
                        ...acc,
                        [date]: lights,
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
            height: 350,
        },
        xaxis: {
            type: 'datetime',
        },
        annotations: {
            yaxis: [
                {
                    y: 600,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#28a745",
                        },
                        text: "Over 600",
                    },
                },
                {
                    y: 300,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#ffc107",
                        },
                        text: "Less than 300",
                    },
                },
            ],
        },
    }

    const series = [
        {
            name: 'ght',
            data: Object.entries(data || {}).map(([time, lights]) => [
                new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)),
                lights
            ]),
        },
    ];



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