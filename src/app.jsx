import React, { useEffect, useReducer, useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/Main/main";
import MovieDetailPage from "./components/movieDetailPage/movieDetailPage";

function App({ movieService }) {
  const history = useHistory();

  const initialData = {
    movieList: null,
    movieDetailList: null,
    movieSearchList: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movieList: action.data,
          movieDetailList: null,
          movieRelationList: null,
        };
      case "DETAIL_MOVIES":
        return {
          ...state,
          movieDetailList: action.data,
        };
      case "SEARCH_MOVIES":
        return {
          ...state,
          movieSearchList: action.data,
          movieDetailList: null,
          movieRelationList: null,
        };
      case "RELATION_MOVIES":
        return {
          ...state,
          movieRelationList: action.data,
        };

      default:
        throw new Error(`Unhandled action type : ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialData);
  const { movieList, movieDetailList, movieSearchList } = state;

  // 영화 자세한 페이지
  // const movieDetail = useCallback(
  //   (movieId) => {
  //     movieService.detailMovie(movieId).then((response) => {
  //       console.log(response);
  //       dispatch({
  //         type: "DETAIL_MOVIES",
  //       });
  //     });
  //   },
  //   [movieService]
  // );

  const movieDetail = (movieId) => {
    console.log(movieId);
    movieService.detailMovie(movieId).then((response) => console.log(response));

    movieService.detailMovie(movieId).then((response) => {
      dispatch({
        type: "DETAIL_MOVIES",
        data: response,
      });
    });
  };

  // 검색 기능
  const movieSearch = useCallback(
    (keyword) => {
      movieService.searchMovie(keyword).then((response) => {
        dispatch({
          type: "SEARCH_MOVIES",
          data: response.data.results,
        });
      });
    },
    [movieService]
  );

  // 자세한 목록 페이지로 이동
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToDetail = () => {
    history.push({
      pathname: "/detail",
      state: {
        movieDetailList,
      },
    });
  };

  useEffect(() => {
    movieService.popularMovie().then((response) => {
      dispatch({
        type: "GET_MOVIES",
        data: response.data.results,
      });
    });
  }, [movieService]);

  useEffect(() => {
    if (movieDetailList !== null) goToDetail();
  }, [goToDetail, movieDetailList]);

  console.log(movieDetailList);

  return (
    <Switch>
      <>
        <div className={styles.app}>
          <Header />
          <Route path="/" exact>
            <Main
              movieList={movieList}
              movieDetail={movieDetail}
              movieSearch={movieSearch}
              movieSearchList={movieSearchList}
            />
          </Route>
          <Route path="/detail">
            <MovieDetailPage />
          </Route>
        </div>
      </>
    </Switch>
  );
}

export default App;
