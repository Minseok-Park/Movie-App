import React from "react";
import styles from "./movieItem.module.css";

const MovieItem = ({ title, poster, vote, date }) => {
  const imgLink = "https://image.tmdb.org/t/p/w200/";
  return (
    <li className={styles.movie}>
      <img
        className={styles.poster}
        src={`${imgLink}${poster}`}
        alt="영화 포스터"
      />
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.vote}>{vote}</div>
    </li>
  );
};

export default MovieItem;
