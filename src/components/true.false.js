import { useState } from "react";
import "../pages/Quizzes page/quizzes.css";

const TrueFalse = ({ question, options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div id="tf-container">
      <h4>{question}</h4>
      {options.map((item) => (
        <>
          <h3>{item}</h3>
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
