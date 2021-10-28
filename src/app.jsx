import React from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}></div>
    </div>
  );
}

export default App;
