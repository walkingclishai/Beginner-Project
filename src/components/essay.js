import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";
import { useEffect } from "react";

const Essay = ({ question, index, storeData, savedData }) => {
  const [input, setInput] = useState(savedData || "");

  useEffect(() => {
    storeData(input, index);
  }, [input]);

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
