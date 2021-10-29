import React from "react";
import MovieList from "../movieList/movieList";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieList, movieDetail }) => {
  return (
    <div>
      <MovieScreen />
      <MovieList movieList={movieList} movieDetail={movieDetail} />
    </div>
  );
};

export default Main;
