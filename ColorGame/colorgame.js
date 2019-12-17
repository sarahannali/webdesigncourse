var colors = randomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbDisplay = document.querySelector("#rgbDisplay");
var prompt = document.querySelector(".prompt");

rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = "rgb" + colors[i];
    squares[i].addEventListener("click",function(){
        if(this.style.backgroundColor === pickedColor){
            correctSquares();
            prompt.textContent = "Correct";
        }
        else{
            this.style.backgroundColor = "white";
            prompt.textContent = "Try Again";
        }
    })
}

function correctSquares(){
    squares.forEach(function(square){
        square.style.backgroundColor = pickedColor;
    })
}

function randomColors(num){
    var arr = []
    for(var i = 0; i <= num; i++){
        arr.push(randomColor())
    }
    function randomColor(){
        rgb = [0, 0, 0];
        for(var i =0; i < rgb.length; i++){
            rgb[i] = Math.floor(Math.random() * 256);
        }
        return "(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")"
    }
    return arr
}

function pickColor(){
    var randNum = Math.floor(Math.random() * 7)
    return colors[randNum]
}