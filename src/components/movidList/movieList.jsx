import React from "react";
import MovieItem from "../movieItem/movieItem";
import styles from "./movieList.module.css";

const MovieList = ({ movieList }) => {
  console.log(movieList);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>가장 핫한 프로그램</h1>
        <ul className={styles.menu}>
          <li>영화</li>
          <li>TV</li>
        </ul>
      </div>

      <div className={styles.container}>
        <ul className={styles.movieContainer}>
          {movieList &&
            movieList.map((movie) => (
              <MovieItem
                key={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                vote={movie.vote_average}
                date={movie.release_date}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default MovieList;
