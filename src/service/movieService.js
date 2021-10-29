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
    const detailResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ko`
    );
    const similarResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
    );
    this.movieList.push(detailResponse.data, similarResponse.data);

    return this.movieList;
  }
}

export default movieService;
