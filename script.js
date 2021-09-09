var questionsBox = document.querySelector('#question-box');
var highScore = document.getElementById('high-score');
var scoreCounter = 0;
var timeLeft = 60;
var timerEl = document.getElementById('timer');
var startEl = document.getElementById('start');
var quizQuestions = [
    
   { question:'String values must be enclosed within______ when being assigned to variables.',
    possibleAnswers:['commas','curly brackets','quotes','parenthesis'],
    correctAnswer:'quotes',
},
   { question:'A very useful tool used during development and debugging for printing content to the bugger is',
    possibleAnswers:['JavaScript','Terminal/Bash','For loops','Console.log'],
    correctAnswer:'Console.log',
},
   { question:'Arrays in JavaScript can be used to store___.',
    possibleAnswers:['numbers and strings','other arrays','booleans','all of the above'],
    correctAnswer:'all of the above',
},
   { question:'Which is NOT a commonly used data types?',
    possibleAnswers:['Boolean','Character','String','CSS'],
    correctAnswer:'CSS',
},
]

//timer function
function timer(){

var timeInterval = setInterval(function () {
    
    if (timeLeft > 1){
        timerEl.textContent = 'Time Left: ' + timeLeft + ' seconds';
        timeLeft --;

    } if (timeLeft === 0){
    clearInterval(timeInterval);
    timer=60;
    }
    }, 1000);
}

var currentQuestion=0;

function startQuiz() {
    console.log('startQuiz');
    introBox.innerHTML='';
    
    startEl.disabled= true;

    questionsBox.innerHTML=' ';
    var question= quizQuestions[currentQuestion];
    var questionName= document.createElement('h1');
    questionName.textContent= question.question;
    questionsBox.appendChild(questionName);
    console.log(question.question);

for(var i=0; i < question.possibleAnswers.length; i++){
    var questionAnswer = document.createElement('button');
    questionAnswer.addEventListener('click', function(){
        if(question.correctAnswer === this.textContent){
            console.log(true);
            scoreCounter++;
        }else{
            timeLeft==10;
        }
        if(currentQuestion < quizQuestions.length){
            startQuiz();
        } else{
            quizOver();
        }
    })

    questionAnswer.textContent = question.possibleAnswers[i];
    questionsBox.appendChild(questionAnswer);
}}

currentQuestion++;
    if(timeLeft <= 0 || currentQuestion === quizQuestions.length){
        timeLeft = 60;
        quizOver();
    }
    
    var quizOverEl=document.querySelectorAll('#quiz-content');
    function quizOver(){
        isHidden = quizOverEl.style.display;
        if(isHidden === 'none'){
            isHidden = 'block';
        }
        var boxEl = document.querySelectorAll('.box');
        show = boxEl.style.display;
        if(show === 'block'){
            show = 'none';
    }
    }

    function setScore(){
        highScore.textContent = scoreCounter;
        localStorage.setItem('scoreCount', scoreCounter);
    }
    setScore();

    function correctAnswerCounter(){
        var storedCorrect = localStorage.getItem('scoreCount');
        if(storedCorrect === null){
            scoreCounter=0;
        } else{
            scoreCounter = storedCorrect;
        }
    }