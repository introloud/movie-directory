//TMDB
const API_KEY = 'api_key=79514b1bff00ab3f2719c1db1371e9b9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
                + API_KEY;



const getMovies = (url => {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results);
    //showMovies(data.results);
  });
});

getMovies(API_URL);