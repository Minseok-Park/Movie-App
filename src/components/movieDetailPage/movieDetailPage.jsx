import React from "react";
import styles from "./movieDetailPage.module.css";
import { useHistory } from "react-router";
import MovieInfo from "../movieInfo/movieInfo";

const MovieDetailPage = () => {
  const history = useHistory();
  const historyState = history.location.state;
  console.log(historyState.movieDetailList[0]);
  console.log(historyState.movieDetailList[1]);

  return (
    <div className={styles.movieDeatilPage}>
      <MovieInfo movieDetailList={historyState.movieDetailList[0]} />
      <div>관련 있는 영화 목록</div>
    </div>
  );
};

export default MovieDetailPage;
