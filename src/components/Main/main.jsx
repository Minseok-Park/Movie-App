import React, { useReducer, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import MovieList from "../movieList/movieList";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieService }) => {
  const initialMovieData = {
    movieList: null,
  };

  const [search, setSearch] = useState(false);

  function movieReducer(state, action) {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movieList: action.data,
        };
      case "SEARCH_MOVIES":
        return {
          ...state,
          movieList: action.data,
        };
      default:
        throw new Error(`Unhandled actino type : ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(movieReducer, initialMovieData);
  const { movieList } = state;

  useEffect(() => {
    movieService.popularMovie().then((response) => {
      dispatch({
        type: "GET_MOVIES",
        data: response,
      });
    });
    setSearch(false);
  }, [movieService]);

  const onSearch = (keyword) => {
    console.log("keyword : ", keyword);
    movieService.searchMovie(keyword).then((response) => {
      dispatch({
        type: "SEARCH_MOVIES",
        data: response,
      });
    });
    setSearch(true);
  };

  console.log(movieList);

  return (
    <div>
      <MovieScreen onSearch={onSearch} />
      {search && (
        <MovieList title="가장 인기 있는 영화 목록" movieList={movieList} />
      )}
      {/* {movieSearchList === null ? (
        <MovieList
          title="가장 인기 있는 영화 목록"
          movieList={movieList}
          movieDetail={movieDetail}
        />
      ) : (
        <MovieList
          title="검색된 영화 목록"
          movieList={movieSearchList}
          movieDetail={movieDetail}
        />
      )} */}
    </div>
  );
};

export default Main;
