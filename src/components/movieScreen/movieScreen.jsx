import React, { useRef, useState, memo, useCallback } from "react";
import styles from "./movieScreen.module.css";

const MovieScreen = ({ onSearch }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const [value, setValue] = useState();

  const onChange = useCallback((e) => {
    const { value } = e.target;
    inputRef.current = value;
    setValue(inputRef.current);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      value && onSearch(value);
      formRef.current.reset();
    },
    [onSearch, value]
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
            ref={inputRef}
            onChange={onChange}
            type="text"
            className={styles.searchInput}
            placeholder="영화를 검색해주세요"
          />
          <button className={styles.searchBtn} onClick={onSubmit}>
            검색
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(MovieScreen);
