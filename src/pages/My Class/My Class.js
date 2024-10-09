import "./My Class.css";
import BookCard from "../../components/bookCard";
import { useParams } from "react-router-dom";

function Myclass() {
  const tenthGrade = [
    {
      image: "/Le petit Prince.jpg",
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
    },
    {
      image: "/TGG.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      image: "/The catcher in the rye.png",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
    },
  ];

  const { name } = useParams();
  const { grade } = useParams();

  return (
    <div id="mycourse">
      <h1>
        My Class: {grade}
        {name}
      </h1>
      <ul>
        <li>Upcoming</li>
        <li>Completed</li>
      </ul>
      <div id="ten">
        {tenthGrade.map((item) => (
          <BookCard
            image={item.image}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Myclass;
