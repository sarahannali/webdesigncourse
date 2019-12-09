var inAns = prompt("Are we there yet?")

while (inAns.indexOf("yes") === -1) {
    var inAns = prompt("Are we there yet?");
}

alert("Yes, we finally made it!")