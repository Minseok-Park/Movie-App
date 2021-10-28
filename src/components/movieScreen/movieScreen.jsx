import React from "react";
import styles from "./movieScreen.module.css";

const MovieScreen = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.screen}>
        <h1 className={styles.title}>환영합니다!</h1>
        <h2 className={styles.text}>
          당신의 브라우저에서 여러 종류의 영화를 검색해보세요
        </h2>
        <form className={styles.searchForm}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="영화, TV 프로그램 검색..."
          />
          <button className={styles.searchBtn}>검색</button>
        </form>
      </div>
    </section>
  );
};

export default MovieScreen;
