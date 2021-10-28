import React from "react";

const MovieItem = ({ title, poster, rank, releaseDate }) => {
  const http = "https://image.tmdb.org/t/p/w200/";
  return (
    <li>
      <img src={`${http}${poster}`} alt="" />
      <h2>{title}</h2>
    </li>
  );
};

export default MovieItem;
