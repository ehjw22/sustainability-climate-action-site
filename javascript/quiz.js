// array of objects for the questions, choices and answers
const quizQuestions = [
  {
    question: "Which of these is NOT one of the 5 zero waste principles?",
    choices: ["Reducing", "Refusing", "Recycling", "Repurchasing"],
    answer: "Repurchasing",
    explanation: "The 5 zero waste principles are Refuse, Reduce, Reuse, Recycle, and Rot. 'Repurchasing' is not part of the framework."
  },
  {
    question: "What is one way to make more sustainable food choices?",
    choices: [
      "Buy imported produce only",
      "Throw away leftovers regularly",
      "Eat more plant-based meals",
      "Use excessive packaging"
    ],
    answer: "Eat more plant-based meals",
    explanation: "Plant-based meals generally have a smaller carbon footprint and use fewer natural resources compared to meat-heavy diets."
  },
  {
    question: "Which of these helps to conserve energy at home in Singapore?",
    choices: [
      "Leave appliances plugged in all day",
      "Set aircon temperature to 25°C",
      "Use incandescent light bulbs",
      "Take extra-long hot showers"
    ],
    answer: "Set aircon temperature to 25°C",
    explanation: "In Singapore's climate, 25°C is an optimal aircon setting that balances comfort with energy efficiency."
  },
  {
    question: "Which option supports reducing packaging waste?",
    choices: [
      "Buy individually wrapped products",
      "Always request extra plastic bags",
      "Avoid recycling",
      "Bring your own reusable bags and containers"
    ],
    answer: "Bring your own reusable bags and containers",
    explanation: "Reusable containers and bags cut down on single-use plastic waste and reduce demand for disposable packaging."
  },
  {
    question: "Which is an example of 'Rotting' in zero waste principles?",
    choices: [
      "Burning food scraps",
      "Throwing food waste into general trash",
      "Composting kitchen leftovers",
      "Buying more packaged food"
    ],
    answer: "Composting kitchen leftovers",
    explanation: "'Rot' refers to composting organic waste, turning it into nutrient-rich soil instead of sending it to landfills."
  },
  {
    question: "What is sustainability?",
    choices: [
        "Meeting our needs without compromising future generations",
      "Focusing only on economic growth",
      "Ignoring environmental impacts",
      "Using as many resources as possible"
    ],
    answer: "Meeting our needs without compromising future generations",
    explanation: "Sustainability means balancing social, economic, and environmental needs to ensure a healthy planet for the future."
  },
  {
    question: "What does climate action involve?",
    choices: [
      "Increasing fossil fuel consumption",
      "Promoting deforestation",
      "Efforts to reduce greenhouse gas emissions and adapt to climate change",
      "Ignoring climate science"
    ],
    answer: "Efforts to reduce greenhouse gas emissions and adapt to climate change",
    explanation: "Climate action includes reducing emissions, switching to clean energy, and adapting communities to climate impacts."
  }
];


// retrieving the different elements from the form
const question = document.getElementById("quizQuestion");
const choices = document.getElementById("quizChoices");
const submitBtn = document.getElementById("submitAnsBtn");
const correctAnswer = document.getElementById("correctAnswer");
const explanation = document.getElementById("explanation");
const nextBtn = document.getElementById("nextQuestion");
const message = document.getElementById("message");
const quizQuestionArea = document.getElementById("quizQuestionArea");
const quizFeedbackArea = document.getElementById("quizFeedbackArea");
const redoBtn = document.getElementById("redoQuizBtn");
const quizCounter = document.getElementById("quizCounter");

// initializing variables for the quiz
const numQuestions = 5;
let questionList = [];
let currentIndex = 0;
let score = 0;

// start the quiz, generate the questions and show them, hide the feedback screen
document.addEventListener("DOMContentLoaded", () => {
    generateRandomQuestions();
    renderQuestion(questionList[currentIndex]);
    submitBtn.disabled = true;
    quizFeedbackArea.style.display = "none";
    quizQuestionArea.style.display = "block";
    redoBtn.style.display = "none";
    quizCounter.style.display = "block";
});

// function to generate questions index
function generateRandomQuestions() {
    while (questionList.length < numQuestions) {
        let rand = Math.floor(Math.random() * quizQuestions.length);
        if (!questionList.includes(rand)) questionList.push(rand);
    }
}

// rendering question onto the screen
function renderQuestion(index) {

    // getting the question from the array of objects
    // making sure feedback screen content is nothing
    const qObj = quizQuestions[index];
    question.textContent = qObj.question;
    message.textContent = "";
    correctAnswer.textContent = "";
    explanation.textContent = "";
    quizCounter.textContent = `${currentIndex + 1} / ${numQuestions}`;
    // add all of the html to the choices
    choices.innerHTML = qObj.choices.map((choice, i) => {
        const choiceId = `option${i}`;
        return `
        <div class="form-check text-start mb-3">
            <input class="form-check-input" type="radio" name="quizOptions" id="${choiceId}" value="${choice}">
            <label class="form-check-label fs-5" for="${choiceId}">${choice}</label>
        </div>`;
    }).join('');

    if (currentIndex === 4){
      nextBtn.textContent="See final result"
    }

    submitBtn.disabled = true;
    submitBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    quizFeedbackArea.style.display = "none";
    quizQuestionArea.style.display = "block";
}

// enable submit button once a option is selected
choices.addEventListener("change", () => {
    submitBtn.disabled = false;
});

// submit button clicked, show feedback whether right or wrong and explanation
submitBtn.addEventListener("click", () => {

    // getting value of user answer and of the correct answer
    const selected = document.querySelector('input[name="quizOptions"]:checked');  
    const selectedValue = selected.value;
    const currentQuestion = quizQuestions[questionList[currentIndex]];

    // condition check whether user right or wrong
    if (selectedValue === currentQuestion.answer) {
        message.textContent = "🎉 Congratulations, you got the correct answer!";
        score++;
    } else {
        message.textContent = "❌ That was not the correct answer.";
    }

    // rendering onto the screen
    correctAnswer.textContent = `Correct Answer: ${currentQuestion.answer}`;
    explanation.textContent = currentQuestion.explanation;

    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    quizQuestionArea.style.display = "none";
    quizFeedbackArea.style.display = "block";
});

// going to next question, if already finish, show score
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < numQuestions) {
        renderQuestion(questionList[currentIndex]);
    } else {
        showFinalResults();
    }
});

// show only the score and redo button and nothing else
function showFinalResults() {
    question.textContent = `Quiz completed! Your score: ${score} / ${numQuestions}`;
    choices.innerHTML = "";
    message.textContent = "";
    correctAnswer.textContent = "";
    explanation.textContent = "";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
    nextBtn.style.display = "none";
    quizFeedbackArea.style.display = "none";
    quizQuestionArea.style.display = "block";
    quizCounter.style.display = "none";
    redoBtn.style.display = "inline-block";
}

// resetting
redoBtn.addEventListener("click", () => {
    // Reset variables
    score = 0;
    currentIndex = 0;
    questionList = [];

    // Generate new random questions and render the first one
    generateRandomQuestions();
    renderQuestion(questionList[currentIndex]);

    // Reset visibility
    redoBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    quizFeedbackArea.style.display = "none";
    quizQuestionArea.style.display = "block";
    quizCounter.style.display = "block";
    nextBtn.textContent="Next"
});
