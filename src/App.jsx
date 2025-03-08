import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import Questions from "./assets/questions.json";

function App() {
  const questions = Questions;
  const [count, setCount] = useState(0);

  const next = () => {
    if (count < 9) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
    console.log(count);
  };
  return (
    <>
      <div className="container">
        <h1>Computer Science Quiz</h1>
        <h3>Question: {count + 1}</h3>
        <Flashcard
          question={questions[count].question}
          answer={questions[count].answer}
        />
        <button onClick={next} className="next">
          &gt;
        </button>
      </div>
    </>
  );
}

export default App;
