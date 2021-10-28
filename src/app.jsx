import React from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MovieList from "./components/movidList/movieList";
import MovieScreen from "./components/movieScreen/movieScreen";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <MovieScreen />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
