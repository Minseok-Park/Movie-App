import React, { useState, memo, useCallback } from "react";
import { useHistory } from "react-router";

import styles from "./movieItem.module.css";

const MovieItem = ({ id, title, poster, vote, date }) => {
  const imgLink = "https://image.tmdb.org/t/p/w200/";

  const [uid, setUid] = useState(id);

  const history = useHistory();

  const goToDetail = useCallback(() => {
    setUid(id);
    history.push({
      pathname: `/detail/${uid}`,
      state: {
        uid,
      },
    });
  }, [history, id, uid]);

  return (
    <>
      <li className={styles.movie} onClick={goToDetail}>
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
