import React, { useReducer } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useCallback, useEffect } from "react/cjs/react.development";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/Main/main";
import MovieDetailPage from "./components/movieDetailPage/movieDetailPage";

function App({ movieService }) {
  const history = useHistory();
  // 초기 state 데이터
  const initialMovieData = {
    movieList: null,
    movieDetailList: null,
  };

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

  const onDetail = useCallback(
    (movieId) => {
      movieService.detailMovie(movieId).then((response) => {
        dispatch({
          type: "DETAIL_MOVIES",
          data: response,
        });
      });
    },
    [movieService]
  );

  // 처음 DetailList의 state를 null 값으로 변경
  useEffect(() => {
    state.movieDetailList = null;
  }, [state]);

  // movieDetailList에 값이 들어오면 /detail 페이지로 이동
  useEffect(() => {
    state.movieDetailList &&
      history.push({
        pathname: "/detail",
        state: state.movieDetailList,
      });
  }, [history, state.movieDetailList]);

  return (
    <Switch>
      <>
        <div className={styles.app}>
          <Header />
          <Route path="/" exact>
            <Main
              movieService={movieService}
              state={state}
              dispatch={dispatch}
              onDetail={onDetail}
            />
          </Route>
          <Route path="/detail">
            <MovieDetailPage
              onDetail={onDetail}
              movieDetailList={state.movieDetailList}
            />
          </Route>
        </div>
      </>
    </Switch>
  );
}

export default App;
