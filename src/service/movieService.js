import axios from "axios";

class movieService {
  constructor() {
    this.movieList = [];
  }
  async popularMovie() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=ko`
    );
    return response;
  }

  async detailMovie(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ko`
    );
    return response;
  }

  async searchMovie(keyword) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&include_adult=false`
    );
    return response;
  }
}

export default movieService;
