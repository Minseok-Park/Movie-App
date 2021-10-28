import React from "react";
import styles from "./movieList.module.css";

const MovieList = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>가장 핫한 프로그램</h1>
        <ul className={styles.menu}>
          <li>영화</li>
          <li>TV</li>
        </ul>
      </div>
    </section>
  );
};

export default MovieList;
