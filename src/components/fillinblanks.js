import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";

const FillInTheBlank = ({ question, options }) => {
  const [input, setInput] = useState([]);

  const handleBlanks = (phrase) => {
    return phrase.split("_______");
  };

  return (
    <div id="fillblanks">
      <h3>{question}</h3>
      {options.map((item) => (
        <h2>
          {handleBlanks(item).map((part, index) => (
            <>
              {part}
              {index < handleBlanks(item).length - 1 && (
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
              )}
            </>
          ))}
        </h2>
      ))}
    </div>
  );
};

export default FillInTheBlank;
