const movieTitle = document.querySelector(".movie-title");
const releaseDate = document.querySelector(".release-date");
const movieGenres = document.querySelector(".genres");
const movieDuration = document.querySelector(".movie-duration");
const moviePoster = document.querySelector(".movie-poster-container img");
const movieQuote = document.querySelector(".movie-info-quote");
const movieOverview = document.querySelector(".movie-info-overview");
const footerYear = document.querySelector(".currentYear");

window.onload = () => {
  let movieId = "872585";
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=95ad7d4eb26fc0b6ce1566fce9ac0b48`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      movieTitle.textContent = data.title;

      let date = new Date(data.release_date);
      releaseDate.textContent = `${date.getFullYear()} ${
        data.production_countries[0].iso_3166_1
      }`;

      movieDuration.textContent = `${data.runtime}min`;

      let genresToDisplay = "";
      data.genres.forEach((genre) => {
        genresToDisplay = genresToDisplay + `${genre.name}, `;
        let genres = genresToDisplay.slice(0, -2) + ".";
      });
      movieGenres.textContent = genresToDisplay;

      let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
      moviePoster.src = posterUrl;
      moviePoster.alt = `${movieTitle} poster`;

      movieQuote.textContent = data.tagline;
      movieOverview.textContent = data.overview;
    });

  footerYear.textContent = new Date().getFullYear();
};
