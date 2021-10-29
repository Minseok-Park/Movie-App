import React from "react";
import styles from "./movieInfo.module.css";
import { FaCrown } from "react-icons/fa";

const MovieInfo = ({ movieDetailList }) => {
  console.log(movieDetailList);
  const imgLink = "https://image.tmdb.org/t/p/w300/";
  const {
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    tagline,
    overview,
    homepage,
    backdrop_path,
    vote_average,
  } = movieDetailList;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={`${imgLink}${poster_path}`}
          alt="포스터 이미지"
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.date}>{release_date}</span>
          {genres.map((genre) => (
            <span className={styles.genre} key={genre.id}>
              {genre.name},
            </span>
          ))}
          <span className={styles.runtime}>상영 시간 : {runtime}분</span>
          <div className={styles.rank}>
            <FaCrown /> &nbsp;{vote_average}
          </div>

          <h3 className={styles.tagline}>{tagline}</h3>
          <h2 className={styles.subtitle}>개요</h2>
          <p className={styles.overview}>{overview}</p>
          <span className={styles.homeInfo}>영화 홈페이지 : </span>
          <a className={styles.homepage} href={homepage}>
            {homepage}
          </a>
        </div>
        <img
          className={styles.backImage}
          src={`${imgLink}${backdrop_path}`}
          alt="배경 이미지"
        />
      </div>
    </section>
  );
};

export default MovieInfo;
