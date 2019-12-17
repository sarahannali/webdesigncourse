var button = document.querySelector("button");
var isColor = false;

// button.addEventListener("click",function(){
//     if(isColor){
//         document.body.style.background = "pink";
//     }
//     else{
//         document.body.style.background = "blue";
//     }
//     isColor = !isColor;
// })

button.addEventListener("click",function(){
    document.body.classList.toggle("color");
})
