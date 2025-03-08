import React, { useState } from "react";
import "../App.css";

function Flashcard(props) {
  const question = props.question;
  const answer = props.answer;
  const [flipped, setFlipped] = useState(false);
  const flip = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={flip}>
      <div className="card-face front">{question}</div>
      <div className="card-face back">{answer}</div>
    </div>
  );
}

export default Flashcard;
