import React from "react";
import styles from "./movieSimilar.module.css";

const MovieSimilar = ({ movieSimilarList }) => {
  console.log(movieSimilarList);
  return (
    <div className={styles.container}>
      <h1>추천 작품</h1>
    </div>
  );
};

export default MovieSimilar;
