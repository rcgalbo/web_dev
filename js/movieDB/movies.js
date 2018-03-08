var movies = [
  {
    title: "Shot In The Dark",
    rating: 11,
    hasWatched: false
  },

  {
    title: "Blade Runner",
    rating: 8.7,
    hasWatched: true
  },
  {
    title: "Total Recall",
    rating: 7.3,
    hasWatched: true
  },
  {
    title: "Conan the Barbarian",
    rating: 6.9,
    hasWatched: true
  }];

function listMovies(movies){
  movies.forEach(function(movie){
    if (movie.hasWatched === true){
      console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
      console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }});
}

listMovies(movies);
