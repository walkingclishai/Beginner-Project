import { useState, useEffect } from "react";
import axios from "axios";
import "./admin dashboard.css";

function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      setCourses(response.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      setStudents(response.data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchStudents();
  }, []);

  return (
    <div id="dashboard-container">
      <div id="dashboard-course">
        {courses.map((item) => (
          <div id="class">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  width="39"
                  height="31"
                  x="4.5"
                  y="8.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  rx="4"
                  ry="4"
                />
                <rect
                  width="31"
                  height="23.2"
                  x="8.5"
                  y="12.4"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  rx="1"
                  ry="1"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M29.68 33.41h6.62v2.19h-6.62zM25.84 19a2.6 2.6 0 0 0-3.677-.003L22.16 19h0a2.61 2.61 0 1 0 4.46 1.86a2.54 2.54 0 0 0-.8-1.86zM22 25.53h4a3 3 0 0 1 3 3h0v1.21H19v-1.21a3 3 0 0 1 3-3m-4.58-4.06a2 2 0 0 0-2.828-.012l-.012.012h0A2 2 0 1 0 18 22.91a2 2 0 0 0-.6-1.43z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.34 27.14a2 2 0 0 0-1.47-.65h-3.74a2 2 0 0 0-2 2v1.25H19m14.42-8.27a2 2 0 0 0-2.828-.012l-.012.012h0A2 2 0 1 0 34 22.91a2 2 0 0 0-.6-1.43zM29 29.74h6.86v-1.25a2 2 0 0 0-2-2h-3.73a2 2 0 0 0-1.47.65"
                />
              </svg>
              {item.grade}th Grade {item.name}
              <span className="arrow">&#9660;</span>
              {/* start of the dropdown menu */}
              <ul id="dropdown-students">
                {students.map(
                  (student) =>
                    !student.Admin &&
                    item.users.includes(student.email) && (
                      <li>
                        <a href="#">{student.fullname}</a>
                      </li>
                    )
                )}
              </ul>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
