import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";
import { useEffect } from "react";

const FillInTheBlank = ({ question, options, index, storeData }) => {
  const [input, setInput] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

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
                  value={input[currentIndex]}
                  onChange={(e) => {
                    setInput((prevInput) => {
                      const newInput = [...prevInput];
                      newInput[currentIndex] = e.target.value;
                      setCurrentIndex(currentIndex + 1);
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
