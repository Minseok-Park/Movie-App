import React from "react";
import styles from "./movieDetailPage.module.css";
import { useHistory } from "react-router";
import MovieInfo from "../movieInfo/movieInfo";
import MovieSimilar from "../movieSimilar/movieSimilar";

const MovieDetailPage = () => {
  const history = useHistory();
  const historyState = history.location.state;

  return (
    <div className={styles.movieDeatilPage}>
      <MovieInfo movieDetailList={historyState.movieDetailList[0]} />
      <MovieSimilar movieSimilarList={historyState.movieDetailList[1]} />
    </div>
  );
};

export default MovieDetailPage;
