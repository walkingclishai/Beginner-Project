import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";
import { useEffect } from "react";

const FillInTheBlank = ({ question, options, index, storeData }) => {
  const [input, setInput] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBlanks = (phrase) => {
    return phrase.split("_______");
  };

  const imSoDone = (nonsense) => {
    const anything = [];
  };

  useEffect(() => {
    storeData(input.join(","), index);
  }, [input]);

  return (
    <div id="fillblanks">
      <h3>{question}</h3>
      {options.map((item, i) => (
        <h2>
          {handleBlanks(item).map((part, index) => (
            <>
              {part}

              {index < handleBlanks(item).length - 1 && (
                <input
                  type="text"
                  value={input[index + options.slice(0, i).flat().length]}
                  onChange={(e) => {
                    setInput((prevInput) => {
                      const newInput = [...prevInput];
                      const j = index + options.slice(0, i).flat().length;
                      newInput[j] = e.target.value;
                      console.log(j);
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
