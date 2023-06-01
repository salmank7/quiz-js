const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
    options: ["London", "Berlin", "Rome", "Paris"],
  },
  {
    id: 2,
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
  },
  {
    id: 3,
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: ["Beijing", "Seoul", "Tokyo", "Shanghai"],
  },
  {
    id: 4,
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: ["Paris", "Berlin", "Madrid", "Vienna"],
  },
  {
    id: 5,
    question: "What is the capital of Canada?",
    answer: "Ottawa",
    options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
  },
  {
    id: 6,
    question: "What is the capital of Italy?",
    answer: "Rome",
    options: ["Athens", "Rome", "Florence", "Milan"],
  },
  {
    id: 7,
    question: "What is the capital of South Korea?",
    answer: "Seoul",
    options: ["Tokyo", "Seoul", "Beijing", "Taipei"],
  },
  {
    id: 8,
    question: "What is the capital of Brazil?",
    answer: "Brasília",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
  },
  {
    id: 9,
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
  },
  {
    id: 10,
    question: "What is the capital of United Kingdom?",
    answer: "London",
    options: ["Edinburgh", "Dublin", "London", "Manchester"],
  },
  {
    id: 11,
    question: "What is the capital of China?",
    answer: "Beijing",
    options: ["Shanghai", "Hong Kong", "Beijing", "Guangzhou"],
  },
  {
    id: 12,
    question: "What is the capital of Mexico?",
    answer: "Mexico City",
    options: ["Monterrey", "Mexico City", "Guadalajara", "Cancun"],
  },
  {
    id: 13,
    question: "What is the capital of Egypt?",
    answer: "Cairo",
    options: ["Alexandria", "Giza", "Luxor", "Cairo"],
  },
  {
    id: 14,
    question: "What is the capital of Argentina?",
    answer: "Buenos Aires",
    options: ["São Paulo", "Rio de Janeiro", "Buenos Aires", "Cordoba"],
  },
  {
    id: 15,
    question: "What is the capital of Spain?",
    answer: "Madrid",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
  },
  {
    id: 16,
    question: "What is the capital of Russia?",
    answer: "Moscow",
    options: ["St. Petersburg", "Moscow", "Kazan", "Novosibirsk"],
  },
  {
    id: 17,
    question: "What is the capital of South Africa?",
    answer: "Pretoria",
    options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
  },
  {
    id: 18,
    question: "What is the capital of Turkey?",
    answer: "Ankara",
    options: ["Istanbul", "Ankara", "Antalya", "Izmir"],
  },
  {
    id: 19,
    question: "What is the capital of Nigeria?",
    answer: "Abuja",
    options: ["Lagos", "Abuja", "Kano", "Ibadan"],
  },
  {
    id: 20,
    question: "What is the capital of Sweden?",
    answer: "Stockholm",
    options: ["Helsinki", "Oslo", "Copenhagen", "Stockholm"],
  },
];

let questionCounter = 0;
let marks = 0;
let Answered = false;
let getAnswer;

const question = document.querySelector(".question");
const options = document.querySelectorAll(".button");
const updateChoices = document.querySelectorAll(".choice");
const prevNext = document.querySelectorAll(".lrButton");
let mainCtr = document.querySelector(".mainCtr");
let score = document.querySelector(".score");

function updateDisplay() {
  question.innerText = quizQuestions[questionCounter].question;
  updateChoices[0].innerText = quizQuestions[questionCounter].options[0];
  updateChoices[1].innerText = quizQuestions[questionCounter].options[1];
  updateChoices[2].innerText = quizQuestions[questionCounter].options[2];
  updateChoices[3].innerText = quizQuestions[questionCounter].options[3];
  score.innerText = marks;
  Answered = false;
  resetButtons();
}
function resetButtons() {
  options.forEach((option) => {
    option.classList.remove("activeRight");
    option.classList.remove("activeWrong");
  });
}

updateDisplay();

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    getAnswer = quizQuestions[questionCounter].options[option.id - 1];
    checkAnswer(getAnswer, option);
  });
});

function activateRight(getOptionButton) {
  getOptionButton.classList.add("activeRight");
}
function activateWrong(getOptionButton) {
  getOptionButton.classList.add("activeWrong");
}

function checkAnswer(inputAnswer, option) {
  if (!Answered)
    if (inputAnswer == quizQuestions[questionCounter].answer) {
      activateRight(option);
      marks += 5;
      console.log("correct");
    } else {
      marks -= 5;
      activateWrong(option);
    }
  Answered = true;
}

document.addEventListener("DOMContentLoaded", () => {});
prevNext.forEach((single) => {
  single.addEventListener("click", (event) => {
    if (Answered != false) {
      if (
        single.classList.contains("next") &&
        questionCounter < quizQuestions.length
      ) {
        questionCounter++;
        updateDisplay();
      }
      if (single.classList.contains("previous") && questionCounter > 0) {
        questionCounter--;
        updateDisplay();
      }
    } else console.log("choose an option");
  });
});
