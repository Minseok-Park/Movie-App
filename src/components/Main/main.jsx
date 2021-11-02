import React, { useReducer, useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import MovieList from "../movieList/movieList";
import MovieScreen from "../movieScreen/movieScreen";

const Main = ({ movieService }) => {
  const history = useHistory();
  // 초기 state 데이터
  const initialMovieData = {
    movieList: null,
    movieDetailList: null,
  };

  // 검색 여부 확인 state
  const [search, setSearch] = useState(false);

  // 영화 state를 관리해주는 reducer
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
      case "DETAIL_MOVIES":
        return {
          ...state,
          movieDetailList: action.data,
        };
      default:
        throw new Error(`Unhandled actino type : ${action.type}`);
    }
  }

  // state와 dispatch
  const [state, dispatch] = useReducer(movieReducer, initialMovieData);
  const { movieList, movieDetailList } = state;

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
  }, [movieService]);

  useEffect(() => {
    movieService.detailMovie(580489).then((response) => {
      console.log(response);
    });
  }, [movieService]);

  // 키워드를 받아와 movieList에 있던 인기 있는 목록을 검색 목록으로 바꿔줌 => movieList + (keyword)
  // setSearch(true) => 검색 여부를 true로 바꿈으로 목록이 변경됨
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

  const onDetail = (movieId) => {
    movieService.detailMovie(movieId).then((response) => {
      dispatch({
        type: "DETAIL_MOVIES",
        data: response,
      });
    });
  };

  console.log(movieList);
  console.log(movieDetailList);

  // onDetail(movieId) 를 통해 영화 id를 받아온 후 movieDetailList에 값이 존재하면 /detail 페이지로 이동
  useEffect(() => {
    movieDetailList &&
      history.push({
        pathname: "/detail",
        state: movieDetailList,
      });
  }, [history, movieDetailList]);

  return (
    <div>
      <MovieScreen onSearch={onSearch} />
      {search && (
        <MovieList
          title="검색된 영화 목록"
          movieList={movieList}
          onDetail={onDetail}
        />
      )}
      <MovieList
        title="가장 인기 있는 영화 목록"
        movieList={movieList}
        onDetail={onDetail}
      />
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
