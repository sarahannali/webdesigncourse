var listItems = document.querySelectorAll("li");

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function () {
        this.classList.toggle("hover");
    })
    listItems[i].addEventListener("click", function () {
        this.classList.toggle("done");
    })
}