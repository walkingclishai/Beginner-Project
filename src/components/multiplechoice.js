import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";

const MultipleChoice = ({ question, options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div id="mc-container">
      <h3>{question}</h3>
      {options.map((item, index) => (
        <label key={index}>
          <input
            type="radio"
            name={question}
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
