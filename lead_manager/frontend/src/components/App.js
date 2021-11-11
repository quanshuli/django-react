import React, { Component, Fragment } from "react";
import { ReactDOM, render } from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Dashboard />
    </Fragment>
  );
};

export default App;
