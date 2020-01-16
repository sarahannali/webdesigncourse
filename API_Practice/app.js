var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('search');
})

app.get('/results', function(req, res){
    const searchTerm = req.query.search;
    const url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render("results", {data:data})
        }
    })
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
console.log('Movie App Has Started!');
});