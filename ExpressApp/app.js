var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hi there, welcome to my assignment!")
})

app.get('/speak/:animal/', function(req,res){
    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof!'"
    };
    var reqAnimal = req.params.animal;
    var sound = sounds[reqAnimal];
    res.send("The " + reqAnimal + " says " + sound);
})

app.get('/repeat/:word/:num', function(req,res){
    var str = [];
    var reqWord = req.params.word;
    var reqNum = req.params.num;
    for (var i = 0; i < reqNum; i++){
        str.push(reqWord)
    };
    res.send(str.join(' '));
})

app.get('*', function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
console.log('Server Has Started!');
});