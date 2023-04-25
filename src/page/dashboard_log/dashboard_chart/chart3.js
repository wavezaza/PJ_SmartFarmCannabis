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
                    const { date, soil_moisture } = feed
                    // เพิ่มเงื่อนไขตรวจสอบค่า NaN และแทนที่ด้วย 0
                    const soil_moistures = isNaN(parseFloat(soil_moisture)) ? 0 : parseFloat(soil_moisture)
                    return {
                        ...acc,
                        [date]: soil_moistures,
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
                    y: 1025,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#28a745",
                        },
                        text: "Over 1025",
                    },
                },
                {
                    y: 1000,
                    borderColor: "#dc3545",
                    borderWidth: 3,
                    label: {
                        borderColor: "#000",
                        style: {
                            color: "#fff",
                            background: "#ffc107",
                        },
                        text: "Less than 1000",
                    },
                },
            ],
        },
    }

    const series = [
        {
            name: 'soil_moisture',
            data: Object.entries(data || {}).map(([time, soil_moistures]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), soil_moistures]),
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