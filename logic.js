// Timer section which will be called upon wrong answer

var sec = 90;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("You lose!! :(");
    }
}    
