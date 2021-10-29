import React from "react";
import { useHistory } from "react-router";
import MovieInfo from "../movieInfo/movieInfo";

const MovieDetailPage = () => {
  const history = useHistory();
  const historyState = history.location.state;

  return (
    <div>
      <MovieInfo movieDetailList={historyState.movieDetailList} />
    </div>
  );
};

export default MovieDetailPage;
