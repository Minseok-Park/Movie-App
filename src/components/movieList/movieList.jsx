import React from "react";
import MovieItem from "../movieItem/movieItem";
import styles from "./movieList.module.css";

const MovieList = ({ movieList, movieDetail }) => {
  console.log(movieList);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>가장 인기 있는 프로그램</h1>
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
