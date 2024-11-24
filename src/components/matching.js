import { useState } from "react";
import { useEffect } from "react";
import "../pages/Quizzes page/quizzes.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";

const DraggableItem = ({ dragItem }) => {
  const [item, setItem] = useState({ name: dragItem });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "answer",
    item,
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  useEffect(() => {
    item.name = dragItem;
  }, [isDragging]);

  return (
    <span className="draggable" ref={drag}>
      {dragItem}
    </span>
  );
};

const Droppablearea = ({ handleInput, i }) => {
  const [text, setText] = useState("");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "answer",
    drop: (item) => setText(item.name),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  useEffect(() => {
    handleInput(text, i);
  }, [text]);

  return (
    <div className="droppable" ref={drop}>
      {text}
    </div>
  );
};

const Matching = ({ options, index, storeData }) => {
  const [answers, setAnswers] = useState([""]);
  const [questions, setQuestions] = useState([""]);
  const [input, setInput] = useState([]);

  const handleChoices = () => {
    setAnswers(options.slice(options.length / 2));
    setQuestions(options.slice(0, options.length / 2));
  };
  const handleInput = (txt, i) => {
    const newInput = [...input];
    newInput[i] = txt;
    setInput(newInput);
  };

  useEffect(() => {
    handleChoices();
  }, []);

  useEffect(() => {
    storeData(input.join(","), index);
  }, [input]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="matching">
        <h3>Matching Activity</h3>
        <div id="choices-container">
          <div id="questions">
            {questions.map((item, j) => (
              <div key={j}>
                <DraggableItem dragItem={item} />
              </div>
            ))}
          </div>
          <div id="answers">
            {answers.map((item, i) => (
              <span id="test5" key={i}>
                {item}
                <Droppablearea handleInput={handleInput} i={i} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Matching;
