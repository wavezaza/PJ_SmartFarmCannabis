import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "./css.css"
function DashboardTable() {
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(25); // state สำหรับจำนวนข้อมูลที่แสดงในหน้าเว็บ
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://localhost:3008/data/allSensor", {
                params: {
                    startDate,
                    endDate
                }
            }
            );
            setData(result.data);
        };
        fetchData();
    }, [startDate, endDate]);

    const renderTableHeader = () => {
        return (
            <thead>
                <tr className="text-all ">
                    <th className="bg-dark">วันที่/เวลา</th>
                    <th className="bg-dark">ความชื้น</th>
                    <th className="bg-dark">อุณหภูมิ</th>
                    <th className="bg-dark">ค่าความเป็นกรดด่าง</th>
                    <th className="bg-dark">ความชื้นในดิน</th>
                    <th className="bg-dark">ความเข้มของแสง</th>
                </tr>
            </thead>
        );
    };

    const renderTableBody = () => {
        // แปลงข้อมูลเป็น array ของข้อมูลตาม pageSize ที่ต้องการ
        const dataToRender = data.slice(0, pageSize);

        return (
            <tbody>
                {dataToRender.map((feed, index) => (
                    <tr key={index} className="text-all" >
                        <td className="bg-gray">{new Date(feed.date).toLocaleString("th-TH", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                        })}</td>
                        <td style={{ backgroundColor: (feed.humidity >= 58 && feed.humidity <= 69) ? '#28a745' : (feed.humidity >= 52 && feed.humidity <= 73) ? '#ffc107' : '#dc3545' }}>{feed.humidity.toFixed(2)}%</td>
                        <td style={{ backgroundColor: (feed.temperature >= 29 && feed.temperature <= 33) ? '#28a745' : (feed.temperature >= 26 && feed.temperature <= 35) ? '#ffc107' : '#dc3545' }}>{feed.temperature.toFixed(2)}°C</td>
                        <td style={{ backgroundColor: (feed.pH > 4 && feed.pH < 6) ? '#28a745' : (feed.pH > 3 && feed.pH < 7) ? '#ffc107' : '#dc3545' }}>{feed.pH.toFixed(2)}</td>
                        <td style={{ backgroundColor: (feed.soil_moisture >= 300 && feed.soil_moisture <= 1020) ? '#28a745' : (feed.soil_moisture >= 150 && feed.soil_moisture <= 1023) ? '#ffc107' : '#dc3545' }}>{feed.soil_moisture.toFixed(2)}%</td>
                        <td style={{ backgroundColor: (feed.light >= 150 && feed.light <= 220) ? '#28a745' : (feed.light >= 0 && feed.light <= 400) ? '#ffc107' : '#dc3545' }}>{feed.light.toFixed(2)}lux</td>
                    </tr>
                ))}
            </tbody>
        );
    };

    // ฟังก์ชั่นสำหรับเปลี่ยนจำนวนข้อมูลที่แสดง
    const handlePageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
    };

    const handleDateRangeChange = () => {
        const filteredData = data.filter(feed => {
            const feedDate = new Date(feed.date);
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);

            if (startDateObj.getTime() === endDateObj.getTime()) {
                return feedDate.toLocaleDateString() === startDateObj.toLocaleDateString();
            } else {
                return feedDate >= startDateObj && feedDate <= endDateObj;
            }
        });
        setData(filteredData);
    };
    return (
        <div className="App" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <h1 className="text-all">ตารางข้อมูลทั้งหมด</h1>
            <nav className="bg-dark d-flex flex-wrap justify-content-center align-items-center pt-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", opacity: 1 }}>
                <section className="content-header">
                    <h1 className=" text-all">ความหมายของสี</h1>
                    <div className="mt-2">
                        <div style={{ display: "inline-block", marginRight: "15px" }} className="text-all">
                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#28a745", display: "inline-block", marginRight: "5px" }}></div>
                            <span style={{ verticalAlign: "middle" }}>ปกติ</span>
                        </div>
                        <div style={{ display: "inline-block", marginRight: "15px" }} className="text-all">
                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#ffc107", display: "inline-block", marginRight: "5px" }}></div>
                            <span style={{ verticalAlign: "middle" }}>ควรแก้ไข</span>
                        </div>
                        <div style={{ display: "inline-block", marginRight: "15px" }} className="text-all">
                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#dc3545", display: "inline-block", marginRight: "5px" }}></div>
                            <span style={{ verticalAlign: "middle" }}>อันตราย</span>
                        </div>
                    </div>
                </section>
                <label className="mt-2 text-all mx-1">
                    จำนวนข้อมูล :
                    <select className="m-2" value={pageSize} onChange={handlePageSizeChange}>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                        <option value={data.length}>All</option>
                    </select>
                </label>
                <label className="mt-2 text-all ">
                    เริ่มวันที่ :
                    <input
                        className="ml-2"
                        type="date"
                        value={startDate || ''}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <label className="mt-2 text-all mx-3">
                    ถึง :
                    <input
                        className="ml-2"
                        type="date"
                        value={endDate || ''}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>
                <button className="btn btn-primary mt-2 mx-2" onClick={handleDateRangeChange}>ยืนยัน</button>
            </nav>
            {data && data.length > 0 ? (
                <Table className="my-custom-table" striped bordered hover>
                    {renderTableHeader()}
                    {renderTableBody()}
                </Table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default DashboardTable;