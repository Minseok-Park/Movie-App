import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import movieService from "./service/movieService";
import { BrowserRouter } from "react-router-dom";

const movieData = new movieService();

ReactDOM.render(
  <BrowserRouter basename="/ms-movie">
    <App movieService={movieData} />
  </BrowserRouter>,
  document.getElementById("root")
);
