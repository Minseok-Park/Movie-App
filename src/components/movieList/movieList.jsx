import React from "react";
import MovieItem from "../movieItem/movieItem";
import styles from "./movieList.module.css";

const MovieList = ({ movieList, movieDetail }) => {
  console.log(movieList);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>가장 핫한 프로그램</h1>
        <ul className={styles.menu}>
          <li className={styles.toggle}>영화</li>
          <li className={styles.toggle}>TV</li>
        </ul>
      </div>

      <div className={styles.container}>
        <ul className={styles.movieContainer}>
          {movieList &&
            movieList.map((movie) => (
              <MovieItem
                movieDetail={movieDetail}
                key={movie.id}
                id={movie.id}
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
