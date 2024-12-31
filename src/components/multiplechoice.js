import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";
import { useEffect } from "react";

const MultipleChoice = ({ question, options, index, storeData, savedData }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(String(savedData));
  }, []);

  useEffect(() => {
    storeData("Multiple Choice: " + selected, index);
  }, [selected]);

  return (
    <div id="mc-container">
      <h3>{question}</h3>
      {options.map((item, index) => (
        <label key={index}>
          <input
            type="radio"
            name={question}
            checked={selected == item}
            value={item}
            onChange={() => setSelected(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default MultipleChoice;
