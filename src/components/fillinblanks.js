import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";

const FillInTheBlank = ({ question, options }) => {
  const [input, setInput] = useState("");

  return (
    <div id="fillblanks">
      <h3>{question}</h3>
      {options.map((item, index) => (
        <>
          <h2>{item}</h2>

          <input
            type="text"
            value={input[index]}
            onChange={(e) => {
              setInput((prevInput) => {
                const newInput = [...prevInput];
                newInput[index] = e.target.value;
                return newInput;
              });
            }}
          />
        </>
      ))}
    </div>
  );
};

export default FillInTheBlank;
