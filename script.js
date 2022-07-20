/* ALL questions, answer choices, and correct answers included in quiz */
const quizData = [
    {
        question: "Commonly used data types DO NOT include:",
         choices:["strings",
         "booleans",
         "alerts",
         "numbers"],
        correct: "c",
    },
    {
        question: "The condition in an if/else statesment is enclosed with __________.",
         choices:["quotes",
         "curly brackets",
         "parenthesis",
         "square brackets"],
        correct: "b",
    },
    {
        question: "Arrays in JavaScript can be used to store _______________.",
         choices:["numbers and strings",
         "other arrays",
         "booleans",
         "all of the above"],
        correct: "d",
    },
    {
        question: "String values must be enclosed within ____________ when being assigned to variables.",
         choices:["commas",
         "curly brackets",
         "quotes",
         "parenthesis"],
        correct: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
         choices:["JavaScript",
         "terminal/bash",
         "for loops",
         "console.log"],
        correct: "d",
    }
    
];

var currentQuestionIndex= 0;
var timer= 75;
var timeId;

/* Variables for questions and answers */
// var quiz= document.getElementById('quiz')
var questionEl= document.getElementById('questions')
var startBtn= document.getElementById('startBtn')
var choicesEl= document.getElementById('choices')
var timeLeft= document.getElementById('time-left')

/* Variables for possible answers */


let currentQuiz = 0
let score = 0

/*startQuiz();

/* Function to call quiz to load questions */
function startQuiz(){
    // Setting a class attribute of hidden to make it disappear.
    var startScreen= document.getElementById('start-screen');
    startScreen.setAttribute('class', 'hidden');

    questionEl.removeAttribute('class');

    //starting timer
    timerId = setInterval(startTimer, 1000);

    timeLeft.textContent= timer;

    getCurrentQuestion();
} 

function getCurrentQuestion() {
    // Get current question from array
    var currentQuestion = quizData[currentQuestionIndex];
    // Setting div element in HTML equal to our question property from quiz data
    var questionTitle = document.getElementById('question-title');
    questionTitle.textContent = currentQuestion.question;
    // Clears previous choices
    choicesEl.innerHTML = "";

    // 
    currentQuestion.choices.forEach(function(choice, i){
        var choiceButton = document.createElement('button');
        choiceButton.setAttribute('class', 'choice');
        choiceButton.setAttribute('value', choice);

        choiceButton.textContent = i + 1 + "." + choice;

        choiceButton.onClick = userChoice;

        choicesEl.appendChild(choiceButton);
    });
}

function questionCheck() {
    if (this.value !== quizData[currentQuestionIndex].correct){
        timer -= 15;

        if (timer < 0) {
            timer = 0;
        }
    }

    currentQuestionIndex++

    if (currentQuestionIndex=== quizData.length) {
        gameOver();
    } else {
        getCurrentQuestion();
    }
}

function gameOver() {
    clearInterval(timerId);

    questionEl.setAttribute('class', 'hidden')
}

function startTimer(){
    timer--;
    timeLeft.textContent = timer;

    if (timer <= 0){
        console.log("game over");
    }
}
//     const currentQuizData= quizData[currentQuiz]
    

startBtn.onclick(console.log('clicked'));
startBtn.onclick = startQuiz;