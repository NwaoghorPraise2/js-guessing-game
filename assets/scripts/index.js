const form = document.querySelector(".getForm-Data")
form.addEventListener("submit", submit);
const username = document.getElementById("username");


function submit(e) {
    e.preventDefault();
  //1. Get the username from the form and save in local storage
    localStorage.setItem("username", username.value);
//2. Redirect to main game
    window.location.assign('views/main-game/index.html');
}