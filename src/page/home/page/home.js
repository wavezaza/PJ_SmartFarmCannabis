import React from "react";
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import smartFarmImage from "./image/smart_farm.jpg";
import marijuanaImage from "./image/marijuana.jpg";
import image1 from "./image/1.jpg"
import image2 from "./image/2.jpg"
import image3 from "./image/3.jpg"
import image4 from "./image/4.jpg"
import image5 from "./image/5.jpg"
import image6 from "./image/6.jpg"
const Home = () => {
    return (
        <>
            <Container className={` d-flex justify-content-center align-items-center mt-5`}>
                <div className="w-100 container-fluid  bg-dashboard ">
                    <div className="container d-flex justify-content-center align-items-center flex-column">
                        <section className="content-header d-flex justify-content-center align-items-center  flex-column">
                            <h1 className="mt-3">ยินดีตอนรับทุกๆท่านที่เข้ามาเยี่ยมชม</h1>
                            <p>เว็บไซต์นี้เป็นเว็บไซต์เกี่ยวกับ สมาร์ทฟาร์มกัญชา</p>
                        </section>
                        <section className="content mb-4 d-flex justify-content-center align-items-center" style={{ width: window.innerWidth >= 768 ? "600px" : "350px", height: "auto" }}>
                            <Carousel className=" w-100 ">
                                <Carousel.Item >
                                    <img
                                        className=" w-100"
                                        src={image1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                        <h3>การปลูกแบบระบบปิด</h3>
                                        <p>ภาพถ่ายจากโรงเรือนที่สุราษฎร์ธานี</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={image2}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                        <h3>การเป็นอยู่ของกัญชา</h3>
                                        <p>ภาพถ่ายจากโรงเรือนที่สุราษฎร์ธานี</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={image3}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                        <h3>การปลูกแบบระบบปิด</h3>
                                        <p>ภาพถ่ายจากโรงเรือนที่สุราษฎร์ธานี</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={image4}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                        <h3>การปลูกแบบระบบเปิด</h3>
                                        <p>ภาพถ่ายจากชุมชนที่สุราษฎร์ธานี</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={image5}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                        <h3>การปลูกแบบระบบเปิด</h3>
                                        <p>ภาพถ่ายจากชุมชนที่สุราษฎร์ธานี</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=" w-100"
                                        src={image6}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                        <h3>การปลูกแบบระบบปิด</h3>
                                        <p>ภาพถ่ายจากโรงเรือนที่สุราษฎร์ธานี.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </section >
                        <section className="content  mt-5 w-100 mb-4 d-flex justify-content-center align-items-center">
                            <Row>
                                <Col md={6} className="mb-5">
                                    <div className="card">
                                        <img src={marijuanaImage} alt="Marijuana" className="w-100" />
                                        <div className="card-body">
                                            <h2>กัญชาคืออะไร</h2>
                                            <p>กัญชาเป็นพืชที่มีสารสกัด THC หรือ tetrahydrocannabinol ที่สร้างผลของการบริโภคเป็นยาเสพติด ซึ่งมีผลกระทบต่อสมองและร่างกายได้ การใช้กัญชาเพื่อเพิ่มเรื่องเสียง และให้ความรู้สึกผ่อนคลายได้ก็ได้รับความสนใจสูงขึ้นในเมืองไทยในเวลาสุดท้ายนี้</p>
                                        </div>
                                    </div>

                                </Col>
                                <Col md={6} className="mb-5">
                                    <div className="card">
                                        <img src={smartFarmImage} alt="Smart Farm" className="w-100" />
                                        <div className="card-body">
                                            <h2>ข้อดีขฟาร์มกัญชาแบบสมาร์ท</h2>
                                            <p>การใช้เทคโนโลยีและอุปกรณ์ในการทำฟาร์มกัญชาแบบสมาร์ทนั้น มีข้อดีอยู่หลายอย่าง ได้แก่</p>
                                            <ul>
                                                <li>ประหยัดพื้นที่และใช้ประโยชน์จากที่ดินได้มากขึ้น</li>
                                                <li>ลดการใช้น้ำและปุ๋ยต่ำลง</li>
                                                <li>ติดตามและควบคุมการเจริญเติบโตของพืชได้ง่ายขึ้น</li>
                                                <li>สามารถควบคุมสภาพอากาศภายในเพื่อเพิ่มผลผลิตได้</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </div >
                </div>
            </Container>
        </>
    )
}
export default Home;