import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/main";
import Header from "./components/header/header";
import MovieDetailPage from "./components/movieDetailPage/movieDetailPage";
import { MovieProvider } from "./components/movieProvider";

function App({ movieService }) {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
