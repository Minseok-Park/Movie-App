import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import movieService from "./service/movieService";

const movieData = new movieService();

ReactDOM.render(
  <App movieService={movieData} />,
  document.getElementById("root")
);
