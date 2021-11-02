import React from "react";
import { useEffect } from "react/cjs/react.development";
import MovieList from "../movieList/movieList";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieService }) => {
  const initialMovieData = {
    movieList: null,
  };

  function movieReducer(state, action) {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movieList: action.data,
        };
      default:
        throw new Error(`Unhandled actino type : ${action.type}`);
    }
  }

  useEffect(() => {
    movieService.popularMovie().then((response) => console.log(response));
  }, [movieService]);

  return (
    <div>안녕</div>
    // <div>
    //   <MovieScreen movieSearch={movieSearch} />
    //   {movieSearchList === null ? (
    //     <MovieList
    //       title="가장 인기 있는 영화 목록"
    //       movieList={movieList}
    //       movieDetail={movieDetail}
    //     />
    //   ) : (
    //     <MovieList
    //       title="검색된 영화 목록"
    //       movieList={movieSearchList}
    //       movieDetail={movieDetail}
    //     />
    //   )}
    // </div>
  );
};

export default Main;
