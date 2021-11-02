import React, { useEffect } from "react";
import styles from "./movieDetailPage.module.css";
import { useHistory } from "react-router";
import MovieInfo from "../movieInfo/movieInfo";
import MovieList from "../movieList/movieList";

const MovieDetailPage = () => {
  const history = useHistory();
  console.log(history.location.state);
  const detailMovie = history.location.state[0];
  return (
    <div className={styles.movieDeatilPage}>
      <MovieInfo detailMovie={detailMovie} />
      {/* <MovieInfo />
      <div>
        <MovieList
          movieList={movieList}
          movieDetail={movieDetail}
          title="관련 있는 영화 목록"
        />
      </div> */}
    </div>
  );
};

export default MovieDetailPage;
