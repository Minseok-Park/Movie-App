import axios from "axios";

class tvService {
  async popularTv() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_AOO_API_KEY}&page=1`
    );
    return response;
  }
}

export default tvService;
