import React from 'react';
import { Link } from 'react-router-dom';
import './css-text.css';
const Overview = () => {

  return (
    <>
      <div className="w-75 container-fluid  bg-dashboard">
        <div className=" container ">
        <section className="content-header">
          <h1 className="mt-3 text-all">สถาณะเซิร์ฟเวอร์</h1>
          <div className="mt-2">
            <div  style={{display: "inline-block", marginRight: "15px"}} className="text-all">
              <div   style={{width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "green", display: "inline-block", marginRight: "5px"}}></div>
              <span  style={{verticalAlign: "middle"}}>เซิร์ฟเวอร์ออนไลน์</span>
            </div>
            <div style={{display: "inline-block"}} className="text-all">
              <div style={{width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "red", display: "inline-block", marginRight: "5px"}}></div>
              <span style={{verticalAlign: "middle"}}>เซิร์ฟเวอร์ออฟไลน์</span>
            </div>
          </div>
        </section>
          <section className="content mt-4 text-all">
            <div className="row">
              <div className="col-lg-6 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>ฟาร์มที่ 1</h3>
                    <p>สถาณะ : ออนไลน์</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <Link to="/dashboard/server1" className="small-box-footer">ไปที่เซิร์ฟเวอร์  <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>ฟาร์มที่ 2</h3>
                    <p>สถาณะ : ออฟไลน์</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <Link to="#" className="small-box-footer">ยังไม่มีเซิร์ฟเวอร์  <i className="fa fa-times"></i></Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};


export default Overview;
