import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";
import { useEffect } from "react";

const ShortAnswer = ({ question, options, index, storeData, savedData }) => {
  const [input, setInput] = useState(savedData?.split(",") || []);

  useEffect(() => {
    storeData(input.join(","), index);
  }, [input]);

  return (
    <div id="sa-container">
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

export default ShortAnswer;
