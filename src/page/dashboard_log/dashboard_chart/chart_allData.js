import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexChart = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3008/data/allSensor')
                const result = await response.json()

                const formattedData = result.reduce((acc, feed) => {
                    const { date, temperature, humidity, soil_moisture, light, pH } = feed
                    // เพิ่มเงื่อนไขตรวจสอบค่า NaN และแทนที่ด้วย 0
                    const temperatures = isNaN(parseFloat(temperature)) ? 0 : parseFloat(temperature)
                    const humiditys = isNaN(parseFloat(humidity)) ? 0 : parseFloat(humidity)
                    const soil_moistures = isNaN(parseFloat(soil_moisture)) ? 0 : parseFloat(soil_moisture)
                    const lights = isNaN(parseFloat(light)) ? 0 : parseFloat(light)
                    const pHs = isNaN(parseFloat(pH)) ? 0 : parseFloat(pH)
                    return {
                        ...acc,
                        [date]: { temperatures, humiditys, soil_moistures, lights, pHs },
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
    }

    const series = [
        {
            name: 'Temperature',
            data: Object.entries(data || {}).map(([time, sensorData]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), sensorData.temperatures]),
        },
        {
            name: 'Humidity',
            data: Object.entries(data || {}).map(([time, sensorData]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), sensorData.humiditys]),
        },
        {
            name: 'Soil Moisture',
            data: Object.entries(data || {}).map(([time, sensorData]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), sensorData.soil_moistures]),
        },
        {
            name: 'Light',
            data: Object.entries(data || {}).map(([time, sensorData]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), sensorData.lights]),
        },
        {
            name: 'pH',
            data: Object.entries(data || {}).map(([time, sensorData]) => [new Date(new Date(time).getTime() + (7 * 60 * 60 * 1000)), sensorData.pHs]),
        },
    ]

    return (
        <div>
            <div id="chart">
                <div className="toolbar"></div>
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

export default ApexChart
