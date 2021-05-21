import React, { useState } from 'react'

import './App.css';

function App() {
  const questions = [
    {
      questionText: '2>1?',
      answerOptions: [
        {answerText: 'yes', isCorrect: true},
        {answerText: 'no', isCorrect: false}
      ]
    },
    {
      questionText: '3=3?',
      answerOptions: [
        {answerText: 'yes', isCorrect: true},
        {answerText: 'no', isCorrect: false}
      ]
    },
    {
      questionText: '2+2?',
      answerOptions: [
        {answerText: '4', isCorrect: true},
        {answerText: '6', isCorrect: false}
      ]
    },
    {
      questionText: '2*16?',
      answerOptions: [
        {answerText: '32', isCorrect: true},
        {answerText: '24', isCorrect: false}
      ]
    },
    {
      questionText: '5/2?',
      answerOptions: [
        {answerText: '2.5', isCorrect: true},
        {answerText: '1.2', isCorrect: false}
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0 )
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="App">
      
      {
        showScore
          ? <div className="sectionScore">
              <div>Correct answers {score} of {questions.length}</div>
              <button
                onClick={refresh}
              >Play again</button>
            </div>
          : <div className="quiz">
              <div className="question_section">
                <div className="question_count">
                  <span>Question {currentQuestion + 1}</span> of {questions.length}
                </div>
                <div className="question_text">{questions[currentQuestion].questionText}</div>
              </div>
              <div className="question_answer">
                {questions[currentQuestion].answerOptions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestion(question.isCorrect)}
                  >{question.answerText}</button>
                )
                )}
              </div>
            </div>
      }
    </div>
  );
}

export default App;
