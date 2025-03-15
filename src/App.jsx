import { useState, useRef } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import Questions from "./assets/questions.json";

function App() {
  const questions = Questions;
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [boderColor, setBorderColor] = useState("Input");
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const checkAnswer = () => {
    console.log(`${inputText} = ${questions[count].answer}`);
    if (inputText.toLowerCase() == questions[count].answer.toLowerCase()) {
      setBorderColor("InputCorrect");
      setScore(score + 1);
    } else {
      setBorderColor("InputWrong");
      if (score > highestScore) {
        setHighestScore(score);
      }
      setScore(0);
    }
  };

  const next = () => {
    setBorderColor("Input");
    setInputText("");
    if (count < 9) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const back = () => {
    setBorderColor("Input");
    setInputText("");

    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(9);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Computer Science Quiz</h1>
        <div className="scoreContainer">
          <h3>Score: {score}</h3>
          <h3>Highest Score: {highestScore}</h3>
        </div>
        <h3>Question: {count + 1}</h3>

        <Flashcard
          question={questions[count].question}
          answer={questions[count].answer}
        />
        <div className="AnswerContainer">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            className={boderColor}
          />
          <button onClick={checkAnswer} className="checkAnswer">
            Check answer
          </button>
        </div>
        <button onClick={back} className="next">
          &lt;
        </button>
        <button onClick={next} className="next">
          &gt;
        </button>
      </div>
    </>
  );
}

export default App;
