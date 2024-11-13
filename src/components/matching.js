import { useState } from "react";
import { useEffect } from "react";
import "../pages/Quizzes page/quizzes.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "answer",
    item: { item },
    collect: (monitor) => ({ isdragging: !!monitor.isDragging() }),
  }));
  return (
    <span className="draggable" ref={drag}>
      {item}
    </span>
  );
};

const Droppablearea = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "answer",
    drop: (item) => console.log(item),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));
  return (
    <span
      className="droppable"
      ref={drop}
      style={{
        backgroundColor: isOver ? "blue" : "gray",
      }}
    >
      {isOver ? "Release to drop" : "Drag item here"}
    </span>
  );
};

const Matching = ({ options }) => {
  const [answers, setAnswers] = useState([""]);
  const [questions, setQuestions] = useState([""]);

  const handleChoices = () => {
    setAnswers(options.slice(options.length / 2));
    setQuestions(options.slice(0, options.length / 2));
  };

  useEffect(() => {
    handleChoices();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="matching">
        <h3>Matching Activity</h3>
        <div id="choices-container">
          <div id="questions">
            {questions.map((item) => (
              <DraggableItem item={item} />
            ))}
          </div>
          <div id="answers">
            {answers.map((item) => (
              <span>
                {item}
                <Droppablearea />
              </span>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Matching;
