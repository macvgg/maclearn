const start = document.getElementById("start");
const next = document.getElementById("next");
const sentence = document.getElementById("sentence");
const quiz = document.getElementById("question-container");
const question = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scorePlace = document.getElementById("score");
const point = document.getElementById("thing");
document.designMode = "on"; 

let shuffledQuestions, currentQuestionIndex;
let score = 0;

start.addEventListener("click", startQuiz);
next.addEventListener("click", () => {
  currentQuestionIndex ++ ;
  setNextQuestion();
})

function startQuiz() {
  console.log("working");
  start.classList.add("hide");
  quiz.classList.remove("hide");
  shuffledQuestions = questions;
  currentQuestionIndex = 0; 
  setNextQuestion();
  
}

function setNextQuestion() {
  reset();
  showQuestion(questions[currentQuestionIndex]);
  scorePlace.innerText = score;
}

function reset() {
  next.classList.add("hide");
  point.classList.remove("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(q){
  question.innerText = q.question;
  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedAnswer = e.target;
  const correct = selectedAnswer.dataset.correct;
  sentence.classList.remove("hide");
    sentence.classList.add("sentence");
    
  if (selectedAnswer.dataset.correct) {
    sentence.innerText = "Correct!";
    console.log("correct!");
    score+=10;
    if (questions.length > currentQuestionIndex+2) {
      next.classList.remove("hide");
    } else {
      next.innerText = "See my score";
      next.classList.remove("hide");
    }
  } else {
    next.classList.add("hide");
    console.log("wrong!");
    sentence.innerText = "Wrong!";
  }  
}

const questions = [
  {
    question: "What does <!DOCTYPE html> do?",
    answers: [
      {text: "4", correct:true },
      {text: "2", correct:true },
      {text: "10", correct:false },
      {text: "3", correct:false },
      {text: "5.5", correct:false }
    ]
  },
  {
    question: "Question2",
    answers: [
      {text: "5", correct:true },
      {text: "2", correct:true },
      {text: "3", correct:false },
      {text: "qwertyu", correct:false },
      {text: "dxfcgvhbjnkm", correct:false }
    ]
  },
  {
    question: "Question2",
    answers: [
      {text: "5", correct:true },
      {text: "2", correct:true },
      {text: "3", correct:false },
      {text: "qwertyu", correct:false },
      {text: "dxfcgvhbjnkm", correct:false }
    ]
  },
  {
    question: "",
    answers: [
      
    ]
  }
]