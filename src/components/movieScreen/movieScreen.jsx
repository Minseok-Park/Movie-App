import React, { useRef, useState, memo, useCallback } from "react";
import styles from "./movieScreen.module.css";

const MovieScreen = ({ movieSearch }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState(0);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    value && setValue(value);
  }, []);

  inputRef.current = value;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      movieSearch(inputRef.current);
      formRef.current.reset();
    },
    [movieSearch]
  );

  return (
    <section className={styles.section}>
      <div className={styles.screen}>
        <h1 className={styles.title}>환영합니다!</h1>
        <h2 className={styles.text}>
          당신의 브라우저에서 여러 종류의 영화를 검색해보세요
        </h2>
        <form ref={formRef} className={styles.searchForm} onSubmit={onSubmit}>
          <input
            onChange={onChange}
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="영화, TV 프로그램 검색..."
          />
          <button onClick={() => onSubmit} className={styles.searchBtn}>
            검색
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(MovieScreen);
