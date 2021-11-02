import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/Main/main";

function App({ movieService }) {
  return (
    <Switch>
      <>
        <div className={styles.app}>
          <Header />
          <Route path="/" exact>
            <Main movieService={movieService} />
          </Route>
        </div>
      </>
    </Switch>
  );
}

export default App;
