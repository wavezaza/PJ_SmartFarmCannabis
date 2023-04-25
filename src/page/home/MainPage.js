import React from "react";
import {  Routes, Route, Outlet } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Performance from "./page/performance";
import Navbar from "../../component/navbar/navbar.js";
import Footer from "../../component/footer/footer.js";

const HomePage = () => {


    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
const MainPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Performance" element={<Performance />} />
        </Routes>
    );
};

export default function MainPageWrapper() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Performance" element={<Performance />} />
            </Route>
        </Routes>
    );
}