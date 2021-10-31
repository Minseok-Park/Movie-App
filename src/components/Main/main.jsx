import React from "react";
import MovieList from "../movieList/movieList";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieList, movieDetail, movieSearch, movieSearchList }) => {
  return (
    <div>
      <MovieScreen movieSearch={movieSearch} />
      {movieSearchList === null ? (
        <MovieList movieList={movieList} movieDetail={movieDetail} />
      ) : (
        <MovieList movieList={movieSearchList} movieDetail={movieDetail} />
      )}
    </div>
  );
};

export default Main;
