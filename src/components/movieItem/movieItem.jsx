import React, { useState, memo } from "react";
import { useCallback } from "react/cjs/react.development";
import styles from "./movieItem.module.css";

const MovieItem = ({ movieDetail, id, title, poster, vote, date }) => {
  const imgLink = "https://image.tmdb.org/t/p/w200/";
  const [info, setInfo] = useState(id);

  const onDetail = useCallback(() => {
    setInfo(id);
    movieDetail(info);
  }, [id, info, movieDetail]);

  return (
    <>
      <li onClick={onDetail} className={styles.movie}>
        <img
          className={styles.poster}
          src={`${imgLink}${poster}`}
          alt="영화 포스터"
        />
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.date}>{date}</h3>
        <div className={styles.vote}>{vote}</div>
      </li>
    </>
  );
};

export default memo(MovieItem);
