import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Answers() {
  const { userId } = useParams();
  const { name } = useParams();

  const [submitted, setSubmitted] = useState([]);

  const fetchAnswers = async () => {
    try {
      console.log(userId);
      const response = await axios.post("http://localhost:5000/answers", {
        userId,
      });
      setSubmitted(response.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  return (
    <>
      {submitted.map((item) => (
        <>
          {item.answers.map((answer) => (
            <>
              <h1>{answer}</h1>
            </>
          ))}
        </>
      ))}
    </>
  );
}

export default Answers;
