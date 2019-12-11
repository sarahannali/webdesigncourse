window.setTimeout(function () {
    var todo = []
    function todoList() {
        var input = prompt("What would you like to do?")
        if (input === "new") {
            toAdd = prompt("What task would you like to add?")
            todo.push(toAdd)
            console.log("Added " + toAdd)
            return todoList()
        }
        else if (input === "list") {
            console.log("*****")
            todo.forEach(function(x,i){
                console.log(i, x);
            })
            console.log("*****")
            return todoList()
        }
        else if (input === "delete") {
            var index = prompt("What task would you like to delete?")
            todo.splice(index,1)
            console.log("Item " + index + " deleted.")
            return todoList()
        }
        return console.log("You've quit the app.")
    }

    todoList()
}, 500);