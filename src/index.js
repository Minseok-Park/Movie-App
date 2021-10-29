import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import movieService from "./service/movieService";
import { BrowserRouter } from "react-router-dom";

const movieData = new movieService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App movieService={movieData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
