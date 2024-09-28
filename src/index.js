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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {window.innerWidth < 600 ? <Phonebar /> : <Navbar />}
    <Courses />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
