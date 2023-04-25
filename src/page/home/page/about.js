import React from "react";
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Container className={` d-flex justify-content-center align-items-center mt-5`}>
                <div className="w-100 container-fluid bg-dashboard">
                    <div className="container d-flex justify-content-center align-items-center flex-column">
                        <div className="container d-flex justify-content-center align-items-center flex-column">
                            <div className="card p-4 mt-4 w-100">
                                <h2>เกี่ยวกับเว็บไซต์</h2>
                                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เว็บไซต์นี้เป็นเว็บไซต์เกี่ยวกับ สมาร์ทฟาร์มกัญชา โดยเว็บของเราจะให้ความรู้ในเรื่องของกัญชา และ สมาร์ทฟาร์ม</h5>
                                <h5>นอกจากนี้ยังมีส่วนสำคัญ คือส่วนของ Dashboard สำหรับผู้ดูแลฟาร์มที่ใช้งานระบบสมาร์ทฟาร์ม</h5>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-lg-6 card p-4 w-100 align-items-center">
                                <h2>ผู้จัดทำเว็บไซต์</h2>
                                <ul>
                                    <li><h5>นาย ชัยณรงค์ แก้วประเสริฐ</h5></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 card p-4 w-100 align-items-center">
                                <h2>ผู้จัดทำด้านอุปกรณ์ IOT</h2>
                                <ul>
                                    <li><h5>นาย ธนาคาร สุวรรณทา</h5></li>
                                </ul>
                            </div>
                        </div>
                        <div className="container ">
                            <div className="card p-4 mt-4 w-100 align-items-center">
                                <h2>อาจารย์ผู้ดูแลโปรเจค</h2>
                                <ul>
                                    <li><h5>อาจารย์ พีรวิชญ์ เควด</h5></li>
                                    <li><h5>อาจารย์ จักริน วีแก้ว</h5></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default About;