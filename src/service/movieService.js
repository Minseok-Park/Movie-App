import axios from "axios";

class movieService {
  // 유명 영화 목록
  async popularMovie() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=ko`
    );
    return response;
  }
  // 자세한 페이지, 영화 연관 목록
  async detailMovie(movieId) {
    const resDetail = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ko`
    );
    const resRelation = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
    );
    return Promise.all([resDetail.data, resRelation.data]);
  }
  // 영화 검색 목록
  async searchMovie(keyword) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&include_adult=false`
    );
    return response;
  }
}

export default movieService;
