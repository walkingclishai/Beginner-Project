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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {window.innerWidth < 600 ? <Phonebar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myclass/:grade/:name" element={<Myclass />} />
        <Route path="/quizzes/:id/:title/:chapters" element={<Quizzes />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
