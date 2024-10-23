import { useState } from "react";

const ShortAnswer = ({ question, options }) => {
  const [input, setInput] = useState([""]);

  return (
    <div>
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
