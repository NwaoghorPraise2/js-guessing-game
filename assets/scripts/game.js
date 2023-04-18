const username = document.getElementById('username');
const stages = document.getElementById('stage');
const points = document.getElementById('points');
const rangeValue = document.getElementById('rangeValue');
const guessedValues = document.getElementById('guessed-values');

document.querySelector(".getGame-data").addEventListener('submit', guess);

//Update Username from local storage
user = localStorage.getItem('username');
username.innerHTML = user;

//Global Varaibles
let rangeMaxValue = 2;
let point = 0;
let stage = 1;
let maxLevel = 10;
let numberOfGuess = 0;
let guessedNumbers = [];

//function to check if their is a username
const checkForUsername = () => {
    if (!user){
        alert('Please, enter a username');
        window.location.assign('/index.html');
    }
}

//function to generate random numbers
const generateRandomNumbers = () => {
    return randomNumber = Math.floor(Math.random() * rangeMaxValue + 1);
}

//tryagain
tryAgain = () => {
    alert(`oops...,${user} you guessed wrong. Try Again\n`);
}

const checkGuess = (guessNumber, randomNumber) =>{
    if (guessNumber == randomNumber) {
        alert('Wow correct... thats so nice, you have moved to the next stage');
        guessedNumbers.push(guessNumber);
        rangeMaxValue ++;
        point += 5;
        stage ++;
    } else {
        tryAgain();
    }
} 

restart = () => {
    alert('Congratulation... you just reached the final stage.')
    rangeMaxValue = 2;
    point = 0;
    stage = 1;
    maxLevel = 20;
    numberOfGuess = 0;
    guessedNumbers = [];
    alert('Reseting...')
}

//Create the guess function
function guess(e) {
    e.preventDefault();
    //1. Check if user has a name
    checkForUsername();
    //2. Generate Random Number
    const randomNumber = generateRandomNumbers();
    //3. Get user Input.
    let guessNumber = document.getElementById('gussed-number').value;
    console.log(randomNumber);
    console.log(guessNumber);
    //0. Make sure guessed number is a number
    if (isNaN(guessNumber))
    return alert('You enter an invalid input, please enter a number between 0-9');
    checkGuess(guessNumber, randomNumber);
    localStorage.setItem("point", point);
    localStorage.setItem("stage", stage);
    localStorage.setItem("guesses", guessedNumbers);
    points.innerHTML = localStorage.getItem('point');
    stages.innerHTML = localStorage.getItem('stage');
    guessedValues.innerHTML = localStorage.getItem('guesses');
    rangeValue.innerHTML = rangeMaxValue;
    if (guessNumber === maxLevel) restart();
}
