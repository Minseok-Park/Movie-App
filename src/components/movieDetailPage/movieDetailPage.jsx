import React, { useEffect } from "react";
import styles from "./movieDetailPage.module.css";
import { useHistory } from "react-router";
import MovieInfo from "../movieInfo/movieInfo";
import MovieList from "../movieList/movieList";

const MovieDetailPage = ({ movieList, movieDetail, dispatch }) => {
  const history = useHistory();
  const historyState = history.location.state;

  useEffect(() => {
    dispatch({
      type: "RELATION_MOVIES",
      data: historyState.movieDetailList[1].results,
    });
  }, [dispatch, historyState.movieDetailList]);

  return (
    <div className={styles.movieDeatilPage}>
      <MovieInfo movieDetailList={historyState.movieDetailList[0]} />
      <div>
        <h1>관련 있는 영화 목록들</h1>
        <MovieList movieList={movieList} movieDetail={movieDetail} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
