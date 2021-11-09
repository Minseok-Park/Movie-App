import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import MovieList from "../movieList/movieList";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieService, state, dispatch, onDetail }) => {
  const history = useHistory();
  const { movieList, movieDetailList } = state;

  // 검색 여부 확인 state
  const [search, setSearch] = useState(false);

  // 처음 render() 되었을 때 가장 인기 있는 영화 목록을 가져와서 화면에 보여줌 => movieList
  // setSearch(false) => 검색 여부를 false로 설정함으로 초기 화면 설정
  useEffect(() => {
    movieService.popularMovie().then((response) => {
      dispatch({
        type: "GET_MOVIES",
        data: response,
      });
    });
    setSearch(false);
  }, [dispatch, movieService]);

  // onDetail(movieId) 를 통해 영화 id를 받아온 후 movieDetailList에 값이 존재하면 /detail 페이지로 이동
  useEffect(() => {
    movieDetailList &&
      history.push({
        pathname: "/detail",
        state: movieDetailList,
      });
  }, [history, movieDetailList]);

  // 키워드를 받아와 movieList에 있던 인기 있는 목록을 검색 목록으로 바꿔줌 => movieList + (keyword)
  // setSearch(true) => 검색 여부를 true로 바꿈으로 목록이 변경됨
  const onSearch = useCallback(
    (keyword) => {
      console.log("keyword : ", keyword);
      movieService.searchMovie(keyword).then((response) => {
        dispatch({
          type: "SEARCH_MOVIES",
          data: response,
        });
      });
      setSearch(true);
    },
    [dispatch, movieService]
  );

  return (
    <>
      <MovieScreen onSearch={onSearch} />
      {search && (
        <MovieList
          title="검색된 영화 목록"
          movieList={movieList}
          onDetail={onDetail}
        />
      )}
      {!search && (
        <MovieList
          title="가장 인기 있는 영화 목록"
          movieList={movieList}
          onDetail={onDetail}
        />
      )}
    </>
  );
};

export default Main;
