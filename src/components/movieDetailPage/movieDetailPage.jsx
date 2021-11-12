import React, { useEffect } from "react";
import styles from "./movieDetailPage.module.css";
import Header from "../header/header";
import MovieInfo from "../movieInfo/movieInfo";
import MovieList from "../movieList/movieList";
import { useParams } from "react-router";
import { useMovieDispatch, useMovieState } from "../movieProvider";

const MovieDetailPage = ({ movieService }) => {
  const { id } = useParams();
  const state = useMovieState();
  const dispatch = useMovieDispatch();

  useEffect(() => {
    movieService.detailMovie(id).then((data) =>
      dispatch({
        type: "DETAIL_MOVIES",
        data,
      })
    );
  }, [dispatch, id, movieService]);

  const { movieDetailList } = state;
  const detailMovie = movieDetailList[0];
  const movieList = movieDetailList[1];

  return (
    <>
      <Header />
      <div className={styles.movieDeatilPage}>
        {movieDetailList[0] && <MovieInfo detailMovie={detailMovie} />}
        <MovieList movieList={movieList} title="관련된 영화 목록" />
      </div>
    </>
  );
};

export default MovieDetailPage;
