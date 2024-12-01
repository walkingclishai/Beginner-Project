import { useState, useEffect } from "react";
import "../pages/Quizzes page/quizzes.css";

const FillInTheBlank = ({ question, options, index, storeData, savedData }) => {
  const [input, setInput] = useState(savedData?.split(",") || []);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    let blanksData = options.map((phrase) => phrase.split("_______"));
    setData(blanksData);

    blanksData = options.map((phrase) => phrase.split("_______").slice(0, -1));
    setNewData(blanksData);
  }, [options]);

  useEffect(() => {
    storeData(input.join(","), index);
  }, [input]);

  return (
    <div id="fillblanks">
      <h3>{question}</h3>
      {options.map((item, i) => (
        <h2 key={i}>
          {data[i]?.map((part, index) => (
            <span key={index}>
              {part}
              {index < data[i].length - 1 && (
                <input
                  type="text"
                  value={input[index + newData.slice(0, i).flat().length] || ""}
                  onChange={(e) => {
                    setInput((prevInput) => {
                      const newInput = [...prevInput];
                      const j = index + newData.slice(0, i).flat().length;
                      newInput[j] = e.target.value;

                      return newInput;
                    });
                  }}
                />
              )}
            </span>
          ))}
        </h2>
      ))}
    </div>
  );
};

export default FillInTheBlank;
