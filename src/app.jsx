import React from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MovieScreen from "./components/movieScreen/movieScreen";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <MovieScreen />
      </div>
    </div>
  );
}

export default App;
