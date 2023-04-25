import React, { useEffect } from "react";
import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Server1 from "./page/server1";
import Home from "./page/Home";
import Swal from 'sweetalert2';

import "./css_dashboard.css"
const Dashboard = () => {
    const navigate = useNavigate();
    const LocalStorage = localStorage.getItem("isAuthenticated");

    useEffect(() => {
        if (LocalStorage !== "true") {
            Swal.fire({
                title: 'กรุณา login ก่อนเข้าหน้านี้',
                icon: 'error',
                confirmButtonText: 'ตกลง',
                backdrop: 'rgba(0,0,0,0.9)',
            }).then(() => {
                navigate('/home');
            });
        }
    }, [LocalStorage, navigate]);


    return (
        <>
            <Sidebar className="Sidebar-style" />
            <div className="dashboard-container">
                <Outlet />
            </div>
        </>
    );
};
const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/server1" element={<Server1 />} />
        </Routes>
    );
};

export default function DashboardWrapper() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route path="/" element={<DashboardRoutes />} />
                <Route path="*" element={<Server1 />} />
            </Route>
        </Routes>
    );
}