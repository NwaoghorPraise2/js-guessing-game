


const username = document.getElementById('username');
const stages = document.getElementById('stage');
const points = document.getElementById('points');
const rangeValue = document.getElementById('rangeValue');


function elup(){
    alert('Hi.....');
    console.log('sript working');
}

//Update Username from local storage
user = localStorage.getItem('username');
username.innerHTML = user;

// document.getElementById("guess-btn").addEventListener("submit", guess);

//Global Varaibles
let rangeMaxValue = 2;
let point = 0;
let stage = 0;
let maxLevel = 10;

//Create the guess function
function guess() {
    if (user){
        //1. Generate the random number
        let randomNumber = Math.floor(Math.random() * rangeMaxValue + 1);

        console.log(randomNumber);
        rangeValue.innerHTML = rangeMaxValue;

        //2. Make sure guessed value is a number.
        const guessNumber = document.getElementById('guessed-number').value;
        if (isNaN(guessNumber)){
            alert('You enter an invalid input, please enter a number between 0-9');
            guessNumber = 0;
        }else if(guessNumber === randomNumber) {
            rangeValue.innerHTML = rangeMaxValue++;
            points.innerHTML = point += 5;
            stages.innerHTML = stage++;
            // localStorage.setItem('point', points);
            // localStorage.setItem('stage', stages);
            alert('Wow... thats so nice, you have moved to the next stage');

        } else if(rangeMaxValue === maxLevel) {
            alert('Congratulation, you reached the final stage');
            restart()
        } else {
            tryAgain();
        }
    }
}








//Declearing Global Variables
// let maxLevel = 10;
// let rangeMaxValue = 2;
// let checkCondition = true;
// let userGuess = 0;

//Reusegable Functions
tryAgain = () => {
    console.log(`oops...,${username} you guessed wrong. Try Again\n`);
}



restart = () => {
    console.log(welcomeMessage);
    console.log("Let's do this again");
    points = 0;
    level = 1;
    rangeMaxValue = 2;
    username = prompt("Enter your name");
}


// const welcomeMessage = "Welcome to Js Guessing Game. \n By Nwaoghor Praise for I4gxZuri Traning Cohort II 2022.\n I need you to follow the instuctions, thank you.\n";
// console.log(welcomeMessage);
// let username = prompt("Enter your name");

// while (checkCondition) {
//   if (username) {
//     let randomNumber = Math.floor(Math.random() * rangeMaxValue + 1)
//     console.log(`${username}, I have pick a number between 1 and ${rangeMaxValue}\n`);
    
//     //Take User Guess
//     userGuess = parseInt(prompt(`${username}, Try guessing this number`));

//     //check if user guess is a number
//     if (isNaN(userGuess)) {
//       console.log(`${username}, you enter an alphabet. Please enter a number`);
//       userGuess = parseInt(prompt(`${username}, Try and guess this number`));
//     } else if (randomNumber === userGuess) {
//       rangeMaxValue++;
//       points++;
//       level++;
//       console.log(`${username}, you just earned 1 point and you are now in level: ${level}.\nTotal Point: ${points}`);
//     } else if (rangeMaxValue === maxLevel) {
//       console.log (`${username}, Congratulations... You nailed it`);
//       console.clear();
//       restart();
//     } else {
//       tryAgain();
//     } 
//   }
// }   















// const guess = (e) => {
//     e.preventDefault();
//     alert('nice');

//     //1. generate a random number between 1 and 2
//     // const guess = document.getElementById('guess').value;
//     // const number = Math.floor(Math.random() * 10) + 1;
//     // if (guess == number) {
//     //     alert('You got it right!');
//     // } else {
//     //     alert('You got it wrong!');
//     // }
//     // console.log(number);
//     // document.getElementById('guess').value = '';
// }


