import "./Courses.css";
import ClassCard from "../../components/ClassCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

function Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      setCourses(response.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const handleCourses = (students) => {
    const cookieEmail = new Cookies().get("email");
    return students.includes(cookieEmail);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div id="courses-container">
      <h1>Courses</h1>

      <div id="classes-list">
        {courses.map((item) => (
          <ClassCard
            grade={item.grade}
            cover={item.cover}
            name={item.name}
            permission={handleCourses(item.users)}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
