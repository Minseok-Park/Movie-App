import React from "react";
import styles from "./movieDetailPage.module.css";
import MovieInfo from "../movieInfo/movieInfo";
import MovieList from "../movieList/movieList";

const MovieDetailPage = ({ onDetail, movieDetailList }) => {
  return (
    <>
      {movieDetailList ? (
        <div className={styles.movieDeatilPage}>
          <MovieInfo detailMovie={movieDetailList[0]} />
          <MovieList
            movieList={movieDetailList[1]}
            onDetail={onDetail}
            title="관련된 영화 목록"
          />
        </div>
      ) : (
        <div className={styles.error}>
          <h2>MS-MOVIE를 클릭하여 데이터를 다시 받아주세요</h2>
        </div>
      )}
    </>
  );
};

export default MovieDetailPage;
