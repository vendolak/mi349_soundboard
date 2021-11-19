<button id="my-first-button">
    I'm a button!
</button>

var button = document.getElementById('b1');

button.addEventListener('click', soundPlay); 

function soundPlay(){
    var audio = new Audio("bloop_x.wav");
    audio.play();
}