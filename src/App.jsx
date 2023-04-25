import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Start from "./page/start/start.js";
import MainPage from "./page/home/MainPage.js";
import DashboardWrapper  from "./page/dashboard_log/dashboard_log.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/home/*" element={<MainPage />} />
          <Route path="/dashboard/*" element={<DashboardWrapper />} />
        </Routes>
        <RefreshToStart />
      </BrowserRouter>
    </div>
  );
}

function RefreshToStart() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/dashboard/"  && location.pathname !== "/dashboard/server1" && location.pathname !== "/dashboard") {
      let countdown = 300;
      const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown === 0) {
          clearInterval(countdownInterval);
          localStorage.removeItem("isAuthenticated");
          console.log(localStorage.getItem('isAuthenticated'));
          window.location.reload();
        }
      },1000);
    }

  }, [location.pathname]);
  return null;
}

export default App;

