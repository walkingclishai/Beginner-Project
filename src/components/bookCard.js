import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function BookCard({ image, title, author }) {
  const [quiz, setQuiz] = useState([""]);

  const fetchQuiz = async () => {
    try {
      const response = await axios.post("http://localhost:5000/quizzes", {
        book: title,
      });

      setQuiz(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching quizzes:", err);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <div id="book-container">
      <img src={image} width="120px" height="160px" />
      <div id="book-content">
        <h3>{title}</h3>
        <p>By {author}</p>
      </div>
      <div id="quiz-titles">
        {quiz.map((item) => (
          <>
            <a href={`/quizzes/${item.id}/${title}/${item.chapters}`}>
              {item.section}
            </a>
            <span>Chapters:{item.chapters}</span>
          </>
        ))}
      </div>
    </div>
  );
}

export default BookCard;
