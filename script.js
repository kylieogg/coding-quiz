let quizData = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        correct: "c",
    },
    {
        question: "The condition in an if/else statesment is enclosed with __________.",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        correct: "b",
    },
    {
        question: "Arrays in JavaScript can be used to store _______________.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correct: "d",
    },
    {
        question: "String values must be enclosed within ____________ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        correct: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
        correct: "d",
    }
    
];

/* Variables for questions and answers */
let quiz= document.getElementById('quiz')
let answer= document.querySelectorAll('.answer')
let question= document.getElementById('question')

/* Variables for possible answers */
let a_text= document.getElementById('a_text')
let b_text= document.getElementById('b_text')
let c_text= document.getElementById('c_text')
let d_text= document.getElementById('d_text')

/* Variable for submit button */
let submitBtn= document.getElementById('submit')