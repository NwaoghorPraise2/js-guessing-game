
document.querySelector(".getForm-Data").addEventListener("submit", submit);


function submit(e) {
    e.preventDefault();
    alert("working");
window.location.assign('views/main-game/game.html');
}
