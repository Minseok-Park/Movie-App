import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import MovieData from "./service/movieData";

const movieData = new MovieData();

ReactDOM.render(
  <React.StrictMode>
    <App movieData={movieData} />
  </React.StrictMode>,
  document.getElementById("root")
);
