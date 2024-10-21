import { useState } from "react";

const MultipleChoice = ({ question, options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
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
