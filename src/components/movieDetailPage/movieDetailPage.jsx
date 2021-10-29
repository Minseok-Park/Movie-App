import React from "react";
import styles from "./movieDetailPage.module.css";
import { useHistory } from "react-router";
import MovieInfo from "../movieInfo/movieInfo";

const MovieDetailPage = () => {
  const history = useHistory();
  const historyState = history.location.state;
  console.log(historyState);

  return (
    <div className={styles.movieDeatilPage}>
      <MovieInfo movieDetailList={historyState.movieDetailList} />
    </div>
  );
};

export default MovieDetailPage;
