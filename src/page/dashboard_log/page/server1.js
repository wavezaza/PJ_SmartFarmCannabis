import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Chart from "../dashboard_chart/chart";
import ChartAllData from "../dashboard_chart/chart_allData";
import Chart2 from "../dashboard_chart/chart2";
import Chart3 from "../dashboard_chart/chart3";
import Chart4 from "../dashboard_chart/chart4";
import Chart5 from "../dashboard_chart/chart5";
import DashboardTable from "../dashboard_table/dashboard_table";
import 'chart.js/auto';
import './css-text.css';
import Swal from 'sweetalert2';
function scrollToChart() {
    const chart_humidity = document.getElementById('Humidity');
    chart_humidity.scrollIntoView({ behavior: "smooth" });
}
function scrollToChart1() {
    const chart_Temperature = document.getElementById('Temperature');
    chart_Temperature.scrollIntoView({ behavior: "smooth" });
}
function scrollToChart2() {
    const chart_pH = document.getElementById('pH');
    chart_pH.scrollIntoView({ behavior: "smooth" });
}
function scrollToChart3() {
    const chart_SoilMoisture = document.getElementById('SoilMoisture');
    chart_SoilMoisture.scrollIntoView({ behavior: "smooth" });
}
function scrollToChart4() {
    const chart_Light = document.getElementById('Light');
    chart_Light.scrollIntoView({ behavior: "smooth" });
}


const Server1 = () => {
    const navigate = useNavigate();
    const LocalStorage = localStorage.getItem("isAuthenticated");
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        if (LocalStorage === "true") {
            Swal.fire({
                icon: 'info',
                title: 'กำลังดาวน์โหลดข้อมูล',
                showConfirmButton: false,
                backdrop: 'rgba(0,0,0,1)',
                html: '<div class="d-flex justify-content-center"><div class="spinner-border text-info" role="status"></div></div>',
                timer: 2000
            });
            const fetchAPIData = async () => {
                try {
                    const response = await fetch('http://localhost:3008/api/data');
                    const data = await response.json();
                    setAPIData(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchAPIData();
            // ตั้งค่า interval เพื่อเรียก API ทุก 5 วินาที
            setInterval(fetchAPIData, 60000);
        } else {
            navigate("/home");
            alert("กรุณา login ก่อนเข้าหน้านี้");
        }
    }, [LocalStorage, navigate]);
    const humidity = APIData.humidity;
    const temperature = APIData.temperature;
    const ph = APIData.ph;
    const soil_moisture = APIData.soil_moisture;
    const light = APIData.light;

    return (
        <>
            <div className={`container-fluid text-all ${window.innerWidth < 768 ? '' : 'w-75'}  bg-dashboard`}>
                <div className=" container-fluid">
                    <section className="content mt-4 p-3 mx-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", opacity: 1 }}>
                        <h1 className="mt-2 mb-4">แดชบอร์ด สมาร์ทฟาร์มกัญชา</h1>
                        <section className="content-header">
                            <h1 className=" text-all">ความหมายของสี</h1>
                            <div className="mt-2">
                                <div style={{ display: "inline-block", marginRight: "15px" }} className="text-all">
                                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#28a745", display: "inline-block", marginRight: "5px" }}></div>
                                    <span style={{ verticalAlign: "middle" }}>ปกติ</span>
                                </div>
                                <div style={{ display: "inline-block" , marginRight: "15px" }} className="text-all">
                                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#ffc107", display: "inline-block", marginRight: "5px" }}></div>
                                    <span style={{ verticalAlign: "middle" }}>ควรแก้ไข</span>
                                </div>
                                <div style={{ display: "inline-block" , marginRight: "15px" }} className="text-all">
                                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#dc3545", display: "inline-block", marginRight: "5px" }}></div>
                                    <span style={{ verticalAlign: "middle" }}>อันตราย</span>
                                </div>
                            </div>
                        </section>
                        <div className="row">
                            <div className="col-lg-4 col-xs-6">
                                <div className="small-box text-light" style={{ backgroundColor: (humidity >= 58 && humidity <= 69) ? '#28a745' : (humidity >= 52 && humidity <= 73) ? '#ffc107' : '#dc3545' }}>
                                    <div className="inner">
                                        <h3>{parseFloat(humidity).toFixed(2)}%</h3>
                                        <p>ความชื้น</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-tint"></i><i className="fa fa-tint"></i>
                                    </div>
                                    <Link href="#chart" onClick={scrollToChart} className="small-box-footer">ดูกราฟ <i className="fa fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-6">
                                <div className="small-box text-light" style={{ backgroundColor: (temperature >= 29 && temperature <= 33) ? '#28a745' : (temperature >= 26 && temperature <= 35) ? '#ffc107' : '#dc3545' }}>
                                    <div className="inner">
                                        <h3>{parseFloat(temperature).toFixed(2)}°C</h3>
                                        <p>อุณหภูมิ</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-thermometer-full" aria-hidden="true"></i> <i className="fa fa-thermometer-three-quarters"></i>
                                    </div>
                                    <Link href="#" onClick={scrollToChart1} className="small-box-footer">ดูกราฟ <i className="fa fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-6">
                                <div className="small-box text-light" style={{ backgroundColor: (ph >= 4 && ph <= 6) ? '#28a745' : (ph >= 3 && ph <= 7) ? '#ffc107' : '#dc3545' }}>
                                    <div className="inner">
                                        <h3>{parseFloat(ph).toFixed(2)}</h3>
                                        <p>ค่าความเป็นกรดด่าง</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-flask"></i><i className="fa fa-flask"></i>
                                    </div>
                                    <Link href="#" onClick={scrollToChart2} className="small-box-footer">ดูกราฟ <i className="fa fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-6">
                                <div className="small-box text-light" style={{ backgroundColor: (soil_moisture >= 300 && soil_moisture <= 600) ? '#28a745' : (soil_moisture >= 150 && soil_moisture <= 750) ? '#ffc107' : '#dc3545' }}>
                                    <div className="inner">
                                        <h3>{parseFloat(soil_moisture).toFixed(2)}%</h3>
                                        <p>ความชื้นในดิน</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-tree"></i><i className="fa fa-tree"></i>
                                    </div>
                                    <Link href="#" onClick={scrollToChart3} className="small-box-footer">ดูกราฟ <i className="fa fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-6">
                                <div className="small-box text-light" style={{ backgroundColor: (light >= 150 && light <= 200) ? '#28a745' : (light >= 0 && light <= 400) ? '#ffc107' : '#dc3545' }}>
                                    <div className="inner">
                                        <h3>{parseFloat(light).toFixed(2)}lux</h3>
                                        <p>ความเข้มของแสง</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-sun-o"></i><i className="fa fa-sun-o"></i>
                                    </div>
                                    <Link href="#" onClick={scrollToChart4} className="small-box-footer">ดูกราฟ <i className="fa fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="card-body mt-5 p-4 mx-1 " style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", opacity: 1 }}>
                        <div className="col-xs-12 bg-white mt-4 p-3">
                            <h1 className="mx-3">กราฟรวมเซ็นเซอร์ทุกตัว</h1>
                            <ChartAllData />
                        </div>
                        <div className="row">
                            <div id="Humidity" className="col-lg-6 col-xs-12  mt-4 px-2">
                                <div className=" bg-white px-3 p-3">
                                    <h1>ความชื้น</h1>
                                    <Chart2 />
                                </div>
                            </div>
                            <div id="Temperature" className="col-lg-6 col-xs-12  mt-4 px-2">
                                <div className=" bg-white px-3 p-3">
                                    <h1>อุณหภูมิ</h1>
                                    <Chart />
                                </div>
                            </div>
                            <div id="pH" className="col-lg-6 col-xs-12  mt-4 px-2">
                                <div className=" bg-white px-3 p-3">
                                    <h1>ค่าความเป็นกรดด่าง</h1>
                                    <Chart5 />
                                </div>
                            </div>
                            <div id="SoilMoisture" className="col-lg-6 col-xs-12  mt-4 px-2">
                                <div className=" bg-white px-3 p-3">
                                    <h1>ความชื้นในดิน</h1>
                                    <Chart3 />
                                </div>
                            </div>
                            <div id="Light" className="col-lg-6 col-xs-12  mt-4 px-2">
                                <div className=" bg-white px-3 p-3">
                                    <h1>ความเข้มของแสง</h1>
                                    <Chart4 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body mt-5 p-4 mx-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", opacity: 1 }}>
                        <div className="col-xs-12 bg-white mt-4 p-4">
                            <DashboardTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Server1;