import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";

const Essay = ({ question }) => {
  const [input, setInput] = useState("");

  return (
    <div id="essay">
      <h3>{question}</h3>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="5"
        cols="50"
      />
    </div>
  );
};

export default Essay;
