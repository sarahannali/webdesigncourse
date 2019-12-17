var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var prompt = document.querySelector(".prompt");
var refresh = document.querySelector("#refresh");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var numSquares = 6;
var colors = randomColors(numSquares);
var pickedColor = pickColor(6);
var header = document.querySelector("#header")

rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor =  colors[i];
    squares[i].addEventListener("click",function(){
        if(this.style.backgroundColor === pickedColor){
            correctSquares();
            prompt.textContent = "Correct";
            refresh.textContent = "Play Again?";
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
    header.style.backgroundColor = pickedColor;
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
        return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")"
    }
    return arr
}

function pickColor(num){
    var randNum = Math.floor(Math.random() * num)
    return colors[randNum]
}

function refreshFunc(num){
    refresh.textContent = "New Colors";
    colors = randomColors(num-1);
    pickedColor = pickColor(num);
    rgbDisplay.textContent = pickedColor;
    prompt.textContent = "Pick a Color!";
    for(var i = 0; i < squares.length; i++){
        if (i in colors){
            squares[i].style.backgroundColor =  colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }
}

refresh.addEventListener("click",function(){
    return refreshFunc(numSquares)
})

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    return refreshFunc(numSquares)
})

hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numSquares = 6;
    return refreshFunc(numSquares)
})