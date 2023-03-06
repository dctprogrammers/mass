import type { Component } from "solid-js";
import { hashIntegration, Route, Router, Routes } from "solid-app-router";
import Navbar from "./components/Navbar";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <Router source={hashIntegration()}>
      <div class={styles.App}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" component={() => <div>Home Component</div>}></Route>
        <Route
          path="/about"
          component={() => <div>About Component</div>}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
