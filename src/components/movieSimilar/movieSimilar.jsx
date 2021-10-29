import React from "react";
import MovieItem from "../movieItem/movieItem";
import styles from "./movieSimilar.module.css";

const MovieSimilar = ({ movieSimilarList }) => {
  const { results } = movieSimilarList;

  return (
    <section className={styles.section}>
      <h1>추천 작품</h1>
    </section>
  );
};

export default MovieSimilar;
