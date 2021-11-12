import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/main";
import MovieDetailPage from "./components/movieDetailPage/movieDetailPage";
import { MovieProvider } from "./components/movieProvider";

function App({ movieService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieProvider>
            <Main movieService={movieService} />
          </MovieProvider>
        </Route>
        <Route path="/detail/:id">
          <MovieProvider>
            <MovieDetailPage movieService={movieService} />
          </MovieProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
