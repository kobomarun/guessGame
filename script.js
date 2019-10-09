function guessNow() {
    var hidden_value = document.getElementById('hidden_number').value;
    var number = document.getElementById('number').value;

    if (number == hidden_value) {
        alert("Hurray!!!! You guessed right");
    } else {

        alert("Whoops!!! Try again");
    }

}

function startGame() {
    var number_to_guess = generateRandomNumbers(10)
    var gameBoard = document.getElementById("gameBoard");
    gameBoard.style = "display:block";
    var startBtn = document.getElementById("start");
    startBtn.style = "display:none";
    document.getElementById('hidden_number').value = number_to_guess;

}

function generateRandomNumbers(n) {
    var random = Math.floor(Math.random() * n);
    return random;
}
