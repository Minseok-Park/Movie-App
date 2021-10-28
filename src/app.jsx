import React, { useEffect, useReducer, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MovieList from "./components/movidList/movieList";
import MovieScreen from "./components/movieScreen/movieScreen";

function App({ movieData }) {
  const initialData = {
    movieList: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movieList: action.data,
        };
      default:
        throw new Error("dd");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialData);
  const { movieList } = state;
  useEffect(() => {
    movieData.movieList().then((response) => {
      dispatch({
        type: "GET_MOVIES",
        data: response.data.results,
      });
    });
  }, [movieData]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <MovieScreen />
        <MovieList movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
