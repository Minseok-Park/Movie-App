import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Main from "./components/Main/main";
import Header from "./components/header/header";
import MovieDetailPage from "./components/movieDetailPage/movieDetailPage";
import { MovieProvider } from "./components/movieProvider";

function App({ movieService }) {
  return (
    <HashRouter>
      <Switch>
        <MovieProvider>
          <Header />
          <Route path="/" exact>
            <Main movieService={movieService} />
          </Route>
          <Route path="/detail/:id">
            <MovieDetailPage movieService={movieService} />
          </Route>
        </MovieProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
