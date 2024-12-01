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
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id } = useParams();
  const { title } = useParams();
  const { chapters } = useParams();

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

  const storeData = (answer, index) => {
    const newData = [...data];
    newData[index] = answer;
    setData(newData);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    console.log(data);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <div id="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fed668"
            d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m0-3.2q.275 0 .513-.2t.287-.525q.05-.3.212-.55t.588-.675q.75-.75 1-1.213t.25-1.087q0-1.125-.788-1.838T14 5q-.825 0-1.5.375T11.425 6.45q-.15.25-.025.525t.425.4q.275.125.538.025t.437-.35q.225-.325.525-.487T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.725.625-.925.963t-.25.987q-.025.3.188.525T14 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"
          />
        </svg>
        <h1>{title}: </h1>
        <h1> chapters: {chapters}</h1>
      </div>
      <div id="quiz-container">
        {questions.length > 0 &&
          questions[0] &&
          (questions[currentIndex].type == "mc" ? (
            <MultipleChoice
              question={questions[currentIndex].question}
              options={questions[currentIndex].choices}
              index={currentIndex}
              storeData={storeData}
              savedData={data[currentIndex]}
            />
          ) : questions[currentIndex].type == "t-f" ? (
            <TrueFalse
              question={questions[currentIndex].question}
              options={questions[currentIndex].choices}
              index={currentIndex}
              storeData={storeData}
              savedData={data[currentIndex]}
            />
          ) : questions[currentIndex].type == "s-a" ? (
            <ShortAnswer
              question={questions[currentIndex].question}
              options={questions[currentIndex].choices}
              index={currentIndex}
              storeData={storeData}
              savedData={data[currentIndex]}
            />
          ) : questions[currentIndex].type == "blanks" ? (
            <FillInTheBlank
              question={questions[currentIndex].question}
              options={questions[currentIndex].choices}
              index={currentIndex}
              storeData={storeData}
              savedData={data[currentIndex]}
            />
          ) : questions[currentIndex].type == "matching" ? (
            <Matching
              options={questions[currentIndex].choices}
              index={currentIndex}
              storeData={storeData}
              savedData={data[currentIndex]}
            />
          ) : questions[currentIndex].type == "essay" ? (
            <Essay
              question={questions[currentIndex].question}
              options={questions[currentIndex].choices}
              index={currentIndex}
              storeData={storeData}
              savedData={data[currentIndex]}
            />
          ) : (
            <></>
          ))}

        {/*
        {questions.map((item, index) => (
          <>
            {item.type == "mc" && (
              <MultipleChoice
                question={item.question}
                options={item.choices}
                index={index}
                storeData={storeData}
              />
            )}
          </>
            ))} */}
        <div id="buttons">
          {currentIndex != 0 && (
            <button onClick={handlePrevious}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fed668"
                  d="M10.928 21a2.98 2.98 0 0 1-2.121-.879L1.686 13l7.121-7.121c1.133-1.134 3.109-1.134 4.242 0c.566.564.879 1.317.879 2.119c0 .746-.27 1.451-.764 2.002H18c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.836c.493.549.764 1.252.764 1.998a2.98 2.98 0 0 1-.879 2.124a2.98 2.98 0 0 1-2.121.878m-6.414-8l5.707 5.707a1.023 1.023 0 0 0 1.414 0c.189-.189.293-.441.293-.708s-.104-.517-.291-.705L8.342 14H18a1.001 1.001 0 0 0 0-2H8.342l3.293-3.293a.996.996 0 0 0 .001-1.413a1.023 1.023 0 0 0-1.415-.001z"
                ></path>
              </svg>
              Previous
            </button>
          )}

          {currentIndex === questions.length - 1 ? (
            <button onClick={() => console.log(data)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fed668"
                  d="M17 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.81c-.39-.66-.64-1.4-.74-2.16a2.994 2.994 0 0 1-1.87-3.81C9.61 13.83 10.73 13 12 13c.44 0 .88.1 1.28.29c2.29-1.79 5.55-1.7 7.72.25V7zm-2 6H5V5h10zm.75 12L13 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"
                ></path>
              </svg>
              Submit
            </button>
          ) : (
            <button
              className={currentIndex == 0 ? "singleButton" : ""}
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fed668"
                  d="M12 21c-.801 0-1.555-.312-2.121-.879S8.999 18.8 9 17.998c0-.746.271-.998.764-1.998H4.928c-1.654 0-3-1.347-3-3s1.346-3 3-3h4.836C9.27 9 9 8.745 9 7.999a2.98 2.98 0 0 1 .88-2.121c1.132-1.132 3.108-1.133 4.241.001L21.242 13l-7.121 7.121A2.98 2.98 0 0 1 12 21m-7.072-9a1.001 1.001 0 0 0 0 2h9.658l-3.293 3.293a1 1 0 0 0-.293.706c0 .269.104.519.293.708a1.023 1.023 0 0 0 1.414 0L18.414 13l-5.707-5.707a1.023 1.023 0 0 0-1.414 0a1 1 0 0 0-.293.706c0 .268.104.519.293.708L14.586 12z"
                ></path>
              </svg>
              Next
            </button>
          )}
        </div>
        {/*
            {item.type == "t-f" && (
              <TrueFalse
                question={item.question}
                options={item.choices}
                index={index}
                storeData={storeData}
              />
            )}
            {item.type == "s-a" && (
              <ShortAnswer
                question={item.question}
                options={item.choices}
                index={index}
                storeData={storeData}
              />
            )}
            {item.type == "blanks" && (
              <FillInTheBlank
                question={item.question}
                options={item.choices}
                index={index}
                storeData={storeData}
              />
            )}
            {item.type == "matching" && (
              <Matching
                options={item.choices}
                index={index}
                storeData={storeData}
              />
            )}
            {item.type == "essay" && (
              <Essay
                question={item.question}
                options={item.choices}
                index={index}
                storeData={storeData}
              />
            )}
          </>
            ))}

        */}
      </div>
    </>
  );
}

export default Quizzes;
