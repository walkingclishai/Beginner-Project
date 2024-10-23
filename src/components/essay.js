import { useState } from "react";

const Essay = ({ question }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h3>{question}</h3>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="5"
        cols="50"
      />
    </div>
  );
};

export default Essay;
