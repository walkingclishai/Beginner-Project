import { useState } from "react";

const Matching = ({ choices }) => {
  const [answers, setAnswers] = useState([""]);
  const [questions, setQuestions] = useState([""]);

  const handleChoices = () => {
    setAnswers(choices.slice(choices.length / 2));
    setQuestions(choices.slice(0, choices.length / 2 - 1));
  };

  return (
    <div>
      <h3>Matching Activity</h3>
      <div id="choices-container">
        <div id="questions">
          {questions.map((item) => (
            <span>{item}</span>
          ))}{" "}
        </div>
        <div id="answers">
          {answers.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matching;
