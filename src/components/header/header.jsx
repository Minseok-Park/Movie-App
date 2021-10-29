import React, { memo } from "react";
import styles from "./header.module.css";
import {
  FaPlus,
  FaSearch,
  FaInfoCircle,
  FaCanadianMapleLeaf,
} from "react-icons/fa";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={`${styles.nav} ${styles.menu}`}>
          <li className={styles.logo}>
            MS-MOVIE <FaCanadianMapleLeaf />
          </li>
          <li>영화</li>
          <li>TV 프로그램</li>
          <li>인물</li>
          <li>More</li>
        </ul>

        <ul className={`${styles.nav}`}>
          <li className={styles.icon}>
            <FaPlus />
          </li>
          <li className={styles.icon}>
            <FaSearch />
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
