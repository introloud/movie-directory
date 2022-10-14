//TMDB
const API_KEY = 'api_key=79514b1bff00ab3f2719c1db1371e9b9';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const searchBar = document.getElementById('search');

const showMovies = (data => {
  main.innerHTML = '';

  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
          <img src="${IMG_URL+poster_path}" alt="${title}">

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getRatingColor(vote_average)}"> ${vote_average}</span>
        </div>

        <div class="overview">
          <h3>Overview</h3>
            ${overview}
          </div>
      `;

      main.appendChild(movieEl);
  });
});

const getMovies = (url => {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results);
    showMovies(data.results);
  });
});
getMovies(API_URL);

/**
 * \getRatingColor
 * simply changes the background color of the rating block to distinguish from good ratings to worst
*/
const getRatingColor = (vote => {
  if(vote >= 7) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm) {
    getMovies(searchURL + '&query=' + searchTerm);
  } else {
    getMovies(API_URL);
  }
});