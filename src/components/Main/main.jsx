import React, { useCallback, useEffect, useState } from "react";
import MovieList from "../movieList/movieList";
import Header from "../header/header";
import { useMovieDispatch, useMovieState } from "../movieProvider";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieService }) => {
  const state = useMovieState();
  const dispatch = useMovieDispatch();
  const { movieList } = state;
  // 검색 여부 확인 state
  const [search, setSearch] = useState(false);

  const onSearch = useCallback(
    (id) => {
      movieService.searchMovie(id).then((data) =>
        dispatch({
          type: "SEARCH_MOVIES",
          data,
        })
      );
      setSearch(true);
    },
    [dispatch, movieService]
  );

  useEffect(() => {
    movieService.popularMovie().then((data) =>
      dispatch({
        type: "GET_MOVIES",
        data,
      })
    );
  }, [dispatch, movieService]);

  return (
    <>
      <Header />
      <MovieScreen onSearch={onSearch} />
      {search && <MovieList title="검색된 영화 목록" movieList={movieList} />}
      {!search && (
        <MovieList title="가장 인기 있는 영화 목록" movieList={movieList} />
      )}
    </>
  );
};

export default Main;
