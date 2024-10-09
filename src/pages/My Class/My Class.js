import "./My Class.css";
import BookCard from "../../components/bookCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Myclass() {
  const [books, setBooks] = useState([]);

  const { name } = useParams();
  const { grade } = useParams();

  const fetchBooks = async () => {
    try {
      console.log(grade);
      const response = await axios.get(
        `http://localhost:5000/books?gradeNumber=${grade}`
      );
      setBooks(response.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
        {books.map((item) => (
          <BookCard
            image={item.cover}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Myclass;
