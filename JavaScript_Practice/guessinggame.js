var ans = Math.floor(Math.random()*11)
alert("A number between 0 and 10 has been chosen")
var guess = Number(prompt("Guess a number."))

if (guess === ans) {
    alert("You got it right!")
}

else if (guess > ans) {
    alert("Too high. Guess again.")
}

else (guess < ans) {
    alert("Too low. Guess again.")
}