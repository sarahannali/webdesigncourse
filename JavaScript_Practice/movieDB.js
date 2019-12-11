var movies = [
    {name: "Frozen 2", seen: false, rating: 7},
    {name: "Iron Man", seen: true, rating: 9},
    {name: "Knives Out", seen: false, rating: 8},
    {name: "The Room", seen: true, rating: 2}
]

movies.forEach(function(movie){
    if (movie.seen){
        watched = "watched "
    }
    else {
        watched = "not seen "
    }
    result = "You have " + watched + movie.name + " - " + movie.rating + "/10"
    return console.log(result)
})