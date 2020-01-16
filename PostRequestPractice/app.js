var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Kevin", "Abby", "Ravi", "Bhaargavi"]

app.get("/", function(req, res){
    res.render("home");
})

app.get("/friends", function(req,res){
    res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server Has Started!');
});