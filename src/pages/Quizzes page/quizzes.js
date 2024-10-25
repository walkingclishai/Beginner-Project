import "./quizzes.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MultipleChoice from "../../components/multiplechoice";

function Quizzes() {
  const [info, setInfo] = useState(null);

  const { id } = useParams();

  const fetchQuestions = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/questions`, {
        id,
      });
      setInfo(response.data);
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
    console.log(info);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return <div></div>;
}

export default Quizzes;
