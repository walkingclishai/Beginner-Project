import "./Courses.css";
import ClassCard from "../../components/ClassCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      setCourses(response.data);
      console.log(response);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div id="courses-container">
      <h1>Courses</h1>

      <div id="classes-list">
        {courses.map((item) => (
          <ClassCard grade={item.grade} cover={item.cover} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
