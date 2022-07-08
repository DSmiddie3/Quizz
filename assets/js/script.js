var questions = [
    {
        question: "Who made the Millennium Falcon the fastest ship in the galexay?",
        answers: ["Han Solo", "Chubacha", "Lando", "Ray"],
        correct: 3
    },
    {
        question: "Who was the bounty hunter who stole the holocorn?",
        answers: ["Guido", "Boba-Fett", "Cade Bane", "Q9-0"],
        correct: 3
    },
    {
        question: "What was the name of the first planet destroyed by the Empire?",
        answers: ["Ondoron", "Aldoron", "Jakko", "Mgie"],
        correct: 2
    },
    {
        question: "Who is the leader of Cloud City?",
        answers: ["Han Solo", "Luck", "Lando", "Maz"],
        correct: 3
    },
    {
        question: "Who is the oldest crew member?",
        answers: ["Han Solo", "Chubacha", "Lando", "Old Ben"],
        correct: 2
    },
   {
        question: "Who was 'Red 5'?",
        answers: ["Han Solo", "Chubacha", "Biggs", "Luke"],
        correct: 4
    },
    {
        question: "Who runs the watering hole Cantine?",
        answers: ["Han Solo", "Maz", "Wado", "Ray"],
        correct: 2
    }
];
var scoresArray = [];

var startButtonEl = document.querySelector("#start-quiz");
var questions = document.querySelector(".questions-container");
var questionName = document.querySelector(".question-title");