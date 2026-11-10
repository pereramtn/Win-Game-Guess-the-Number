
    //generate random numbers
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    //count attempts
    let attempts = 0;

    //game status
    let gameOver = false;

    function checkGuess() {

        //get number
        let guess = Number(document.getElementById("guess").value);

        if (guess < 1 || guess > 100 || !Number.isInteger(guess)) {
            document.getElementById("message").innerHTML = "🧩 Please Enter a number between 1-100 ";
            return;
        }

        if (gameOver) {
            document.getElementById("message").innerHTML = "🕹️ Please restart the game !";
            return;

        }

        //increase attempts
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;

        //check the numbers
        if (guess == randomNumber) {
            document.getElementById("message").innerHTML = " 🏆 Congratulations! You guessed correctly!";
            gameOver = true;

        } else if (guess > randomNumber) {
            document.getElementById("message").innerHTML = " ⬆️ Too Hight! Try a smaller number";

        } else {
            document.getElementById("message").innerHTML = "⬇️ Too Low! Try a bigger number";
        }
    }

    // game restart
    function restartGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;

        attempts = 0;
        gameOver = false;
        hintUsed = false;

        document.getElementById("attempts").innerHTML = 0;

        document.getElementById("message").innerHTML = " 🎯 New Game Started!";

        document.getElementById("guess").value = "";

        document.getElementById("hint").innerHTML = "";
    }

    //get hint
    let hintUsed = false;

function getHint() {

    if (gameOver) return;

    if (hintUsed) {
        document.getElementById("hint").innerHTML =
            "You have already used your hint!";
        return;
    }

    let result = randomNumber % 2 === 0 ? "Even" : "Odd";

    document.getElementById("hint").innerHTML =
        "💡 Hint: The number is " + result;

    hintUsed = true;
}

