import "./Courses.css";
import ClassCard from "../../components/ClassCard";

function Courses() {
  const classes = [
    { grade: "10th Grade", cover: "/junior.jpg", name: "10A" },
    { grade: "10th Grade", cover: "/junior.jpg", name: "10B" },
    { grade: "10th Grade", cover: "/junior.jpg", name: "10C" },
    { grade: "11th Grade", cover: "/sophmore.jpg", name: "11A" },
    { grade: "11th Grade", cover: "/sophmore.jpg", name: "11B" },
    { grade: "11th Grade", cover: "/sophmore.jpg", name: "11C" },
    { grade: "12th Grade", cover: "/senior.jpg", name: "12A" },
    { grade: "12th Grade", cover: "/senior.jpg", name: "12B" },
    { grade: "12th Grade", cover: "/senior.jpg", name: "12C" },
  ];
  return (
    <div id="courses-container">
      <h1>Courses</h1>
      <div id="classes-list">
        {classes.map((item) => (
          <ClassCard grade={item.grade} cover={item.cover} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
