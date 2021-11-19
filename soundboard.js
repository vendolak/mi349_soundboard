<button id="my-first-button">
    I'm a button!
</button>

var buttonElement = document.getElementById('my-first-button')

buttonElement.addEventListener('click', soundPlay());

function soundPlay(){
    var audio = new Audio("bloop_x.wav");
    audio.play();
}