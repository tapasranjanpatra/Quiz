const questions = [
    {
        question: "What is the capital of odisha?",
        options: ["bhubaneswar", "Mumbai", "Paris", "Rome"],
        answer: "bhubaneswar"
    },
    {
        question: "What is the capital of Tamil Nadu?",
        options: ["Chennai", "Mumbai", "Paris", "Rome"],
        answer: "Chennai"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the capital of Maharashtra?",
        options: ["Chennai", "Mumbai", "Paris", "Rome"],
        answer: "Mumbai"
    },  
    {
        question: "What is the capital of Madhya Pradesh?",
        options: ["Bhopal", "Mumbai", "Paris", "Rome"],
        answer: "Bhopal"
    },  
    {
        question: "What is the capital of odisha?",
        options: ["bhubaneswar", "Mumbai", "Paris", "Rome"],
        answer: "bhubaneswar"
    },
    {
        question: "sum of 2+2=?",
        options: ["4", "6", "20", "21"],
        answer: "4"
    }, 
    {
        question: "What is the capital bihar?",
        options: ["Bhopal", "Mumbai", "Patna", "Rome"],
        answer: "patna"
    },
    {
        question: "Who is the ceo of google?",
        options: ["sundar", "nalin", "ryan", "Rooomi"],
        answer: "sundar"
    },   
    {
        question: "Who is the maamal animal?",
        options: ["zebra", "dolphin", "yellowbird", "Romme"],
        answer: "dolphin"
    },  
    {
        question: "Which is big river in odisha?",
        options: ["mahanadi", "ganga", "barma", "roominadi"],
        answer: "mahanadi"
    },
    {
        question: "Who is my best friend?",
        options: ["jitu", "indrajit", "saiful", "srujan"],
        answer: "jitu"
    },        
    {
        question: "Which is my fav city?",
        options: ["Bhopal", "Mumbai", "Paris", "Rome"],
        answer: "Bhopal"
    },  
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Venus"],
        answer: "Jupiter"
      },
      {
        question: "In which year did Christopher Columbus first reach the Americas?",
        options: ["1492", "1776", "1865", "2001"],
        answer: "1492"
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
        answer: "Nitrogen"
      },
      {
        question: "What is the capital of Tamil Nadu?",
        options: ["Chennai", "Mumbai", "Paris", "Rome"],
        answer: "Chennai"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the capital of Maharashtra?",
        options: ["Chennai", "Mumbai", "Paris", "Rome"],
        answer: "Mumbai"
    },  
    {
        question: "What is the capital of Madhya Pradesh?",
        options: ["Bhopal", "Mumbai", "Paris", "Rome"],
        answer: "Bhopal"
    },  
    
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz complete!";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
});

displayQuestion();
