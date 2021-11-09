import React, { memo, useCallback } from "react";
import styles from "./header.module.css";
import { FaPlus, FaInfoCircle, FaCanadianMapleLeaf } from "react-icons/fa";
import { useHistory } from "react-router";

const Header = (props) => {
  const history = useHistory();
  const goToMain = useCallback(() => {
    history.push({
      pathname: "/",
    });
  }, [history]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={`${styles.nav} ${styles.menu}`}>
          <li className={styles.logo} onClick={goToMain}>
            MS-MOVIE <FaCanadianMapleLeaf />
          </li>
          <li className={styles.tag}>영화</li>
          {/* <li>TV 프로그램</li>
          <li>인물</li>
          <li>More</li> */}
        </ul>

        <ul className={`${styles.nav}`}>
          <li className={styles.icon}>
            <a href="https://www.themoviedb.org/movie/new?language=ko">
              <FaPlus />
            </a>
          </li>

          <li className={styles.icon}>
            <FaInfoCircle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
