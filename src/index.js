import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import movieService from "./service/movieService";
import tvService from "./service/tvService";

const movieData = new movieService();
const tvData = new tvService();

ReactDOM.render(
  <React.StrictMode>
    <App movieService={movieData} tvService={tvData} />
  </React.StrictMode>,
  document.getElementById("root")
);
