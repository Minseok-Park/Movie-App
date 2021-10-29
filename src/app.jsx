import React, { useEffect, useReducer } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MovieList from "./components/movieList/movieList";
import MovieScreen from "./components/movieScreen/movieScreen";

function App({ movieService }) {
  const initialData = {
    movieList: [],
    movieDetailList: {},
  };

  function reducer(state, action) {
    switch (action.type) {
      case "GET_MOVIES":
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
        throw new Error(`Unhandled action type : ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialData);
  const { movieList } = state;
  useEffect(() => {
    movieService.popularMovie().then((response) => {
      dispatch({
        type: "GET_MOVIES",
        data: response.data.results,
      });
    });
  }, [movieService]);

  function movieDetail(movieId) {
    movieId && console.log(movieId);
    movieService.detailMovie(movieId).then((response) => {
      dispatch({
        type: "DETAIL_MOVIES",
        data: response.data,
      });
    });
    console.log(state.movieDetailList);
  }

  return (
    <div className={styles.app}>
      <Header />
      {/* <div className={styles.container}>
        <MovieScreen />
        <MovieList movieList={movieList} movieDetail={movieDetail} />
      </div> */}
    </div>
  );
}

export default App;
