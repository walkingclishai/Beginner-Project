import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";
import Phonebar from "./components/Phone-Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/footer";
import SignIn from "./pages/Sign in/Sign in";
import Courses from "./pages/Courses/Courses";
import Myclass from "./pages/My Class/My Class";
import Quizzes from "./pages/Quizzes page/quizzes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminDashboard from "./pages/Admin/admin dashboard";
import Answers from "./pages/Answers/Answers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Routers = () => {
  const [admin, setAdmin] = useState(() => {
    const savedAdmin = localStorage.getItem("adminState");
    return savedAdmin ? JSON.parse(savedAdmin) : false;
  });

  useEffect(() => {
    localStorage.setItem("adminState", admin);
  }, [admin]);

  return (
    <React.StrictMode>
      <Router>
        {window.innerWidth < 600 ? (
          <Phonebar setadmin={setAdmin} admin={admin} />
        ) : (
          <Navbar setadmin={setAdmin} admin={admin} />
        )}
        {admin == true ? (
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/answers/:userId/:name" element={<Answers />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signin" element={<SignIn admin={setAdmin} />} />
            <Route path="/myclass/:grade/:name" element={<Myclass />} />
            <Route path="/quizzes/:id/:title/:chapters" element={<Quizzes />} />
          </Routes>
        )}
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

root.render(<Routers />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
