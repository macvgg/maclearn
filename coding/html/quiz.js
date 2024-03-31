document.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById("start");
  const quiz = document.getElementById("question-container");
  const question = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const back = document.getElementById("back");
  const controls = document.getElementById("controls");
  const results = document.getElementById("results");
  let currentQuestionIndex, index;
  let answerArray = [];
  let correctArray = [];
  back.classList.add("hide");
  results.classList.add("hide");
  start.addEventListener("click", () => {
    if (start.innerHTML === "Start") {
      startQuiz();
      controls.style.display = "none";
    } else if (start.innerHTML === "Next") {
      currentQuestionIndex++;
      setNextQuestion();
    } else if (start.innerHTML === "Finish") {
      currentQuestionIndex++;
      question.classList.add("hide");
      results.classList.remove("hide");
      answerButtonsElement.classList.add("hide");
      let actualCount = 0;
      correctArray.forEach((correct) => {
        if (correct !== null) {
          actualCount++;
        }
      });
      let percentage = Math.round((actualCount / questions.length) * 100);
      results.innerHTML = "Your quiz score is " + percentage + "% correct. <br> Go back, review, and improve your score!";
      start.innerHTML = "Review!";
        start.addEventListener("click", () => {
          window.location.href = "/maclearn/coding/html/what-is-coding.html";
        });
      if (percentage > 80) {
        results.innerHTML = "Your quiz score is " + percentage + "% correct! <br> Move on to the more advanced HTML lessons!";
        start.innerHTML = "Go!";
        start.addEventListener("click", () => {
          window.location.href = "/maclearn/coding/html/html-forms.html";
        });
      }
    }
  });

  back.addEventListener("click", () => {
    if (currentQuestionIndex >= 1) {
      currentQuestionIndex--;
      setNextQuestion();
      question.classList.remove("hide");
      answerButtonsElement.classList.remove("hide");
      results.classList.add("hide");
      start.innerHTML = "Next";
      if (currentQuestionIndex === 6) {
        start.innerHTML = "Finish";
      }
    } else {
      controls.style.display = "flex";
      start.innerHTML = "Start";
      message.classList.remove("hide");
      quiz.classList.add("hide");
      back.classList.add("hide");
    }
  });

  function startQuiz() {
    start.innerHTML = "Next";
    message.classList.add("hide");
    quiz.classList.remove("hide");
    shuffledQuestions = questions;
    currentQuestionIndex = 0;
    back.classList.remove("hide");
    setNextQuestion();
  }

  function setNextQuestion() {
    reset();
    showQuestion(questions[currentQuestionIndex]);
    if (currentQuestionIndex === 6) {
      start.innerHTML = "Finish";
    }
  }

  function reset() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function showQuestion(q) {
    question.innerText = q.question;
    index = 0;
    q.answers.forEach((answer) => {
      const button = document.createElement("div");
      const label = document.createElement("label");
      const radioButton = document.createElement("input");
      radioButton.setAttribute("type", "radio");
      label.setAttribute("for", index);
      radioButton.setAttribute("id", index);
      radioButton.setAttribute("name", "radio");
      label.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
      button.appendChild(radioButton);
      button.appendChild(label);
      if (answerArray[currentQuestionIndex]) {
        if (answerArray[currentQuestionIndex] === button.innerHTML) {
          radioButton.checked = true;
        }
      }
      index++;
    });
  }

  function selectAnswer(e) {
    const selectedAnswer = e.target;
    const correct = selectedAnswer.parentElement.dataset.correct;
    if (questions.length > currentQuestionIndex + 1) {
      start.innerHTML = "Next";
    } else {
      start.innerHTML = "Finish";
    }
    if (selectedAnswer.parentElement.dataset.correct) {
      correctArray[currentQuestionIndex] = selectedAnswer;
    } else {
      correctArray.splice(currentQuestionIndex, 1);
    }
    answerArray[currentQuestionIndex] = selectedAnswer.parentElement.innerHTML;
  }

  const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hypertext Marking Language", correct: false },
        { text: "Hacking Technology Manual Language", correct: false },
        { text: "Hypertext Markup Language", correct: true },
        { text: "Http Text Making Language", correct: false },
      ],
    },
    {
      question: "Which tag and attribute is used to create links?",
      answers: [
        { text: '<link href = " ">', correct: false },
        { text: "<anchor>", correct: false },
        { text: '<a src = " ">', correct: false },
        { text: '<a href = " ">', correct: true },
      ],
    },
    {
      question: "Which tag is used to create a level one heading?",
      answers: [
        { text: "<heading>", correct: false },
        { text: "<h1>", correct: true },
        { text: "<h6>", correct: false },
        { text: "<head>", correct: false },
      ],
    },
    {
      question: "Which pair of tags wraps the visible content of a webpage?",
      answers: [
        { text: "<information>", correct: false },
        { text: "<body>", correct: true },
        { text: "<head>", correct: false },
        { text: "<content>", correct: false },
      ],
    },
    {
      question: 'Fill in the blank: <img _____ = "image.png">',
      answers: [
        { text: "link", correct: false },
        { text: "source", correct: false },
        { text: "image", correct: false },
        { text: "src", correct: true },
      ],
    },
    {
      question: "Which tag is used to make list items?",
      answers: [
        { text: "<list-items>", correct: false },
        { text: "<list>", correct: false },
        { text: "<li>", correct: true },
        { text: "<ul>", correct: false },
      ],
    },
    {
      question:
        'What is the alt attribute for: <img src="image.png" alt="An image.">',
      answers: [
        { text: "Alternative Image", correct: false },
        { text: "Alternative Text", correct: true },
        { text: "Autoclick", correct: false },
        { text: "It doesn't do anything", correct: false },
      ],
    },
  ];
});
