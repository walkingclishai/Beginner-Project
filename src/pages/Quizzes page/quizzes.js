import "./quizzes.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MultipleChoice from "../../components/multiplechoice";
import TrueFalse from "../../components/true.false";
import ShortAnswer from "../../components/shortanswer";
import FillInTheBlank from "../../components/fillinblanks";
import Matching from "../../components/matching";
import Essay from "../../components/essay";

function Quizzes() {
  const [questions, setQuestions] = useState([]);

  const { id } = useParams();

  const fetchQuestions = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/questions`, {
        id,
      });

      setQuestions(response.data);
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((item) => (
        <>
          {item.type == "mc" && (
            <MultipleChoice question={item.question} options={item.choices} />
          )}
          {item.type == "t-f" && (
            <TrueFalse question={item.question} options={item.choices} />
          )}
          {item.type == "s-a" && (
            <ShortAnswer question={item.question} options={item.choices} />
          )}
          {item.type == "blanks" && (
            <FillInTheBlank question={item.question} options={item.choices} />
          )}
          {item.type == "matching" && <Matching options={item.choices} />}
          {item.type == "essay" && (
            <Essay question={item.question} options={item.choices} />
          )}
        </>
      ))}
    </div>
  );
}

export default Quizzes;
