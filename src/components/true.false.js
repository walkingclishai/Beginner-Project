import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";

const TrueFalse = ({ question, options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div id="tf-container">
      <h3>{question}</h3>
      {options.map((item) => (
        <>
          <h2>{item}</h2>
          <label>
            <input
              type="radio"
              name={item}
              value="True"
              onChange={() => setSelected(true)}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name={item}
              value="False"
              onChange={() => setSelected(false)}
            />
            False
          </label>
        </>
      ))}
    </div>
  );
};

export default TrueFalse;
