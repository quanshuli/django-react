import React, { Component, Fragment } from "react";
import { ReactDOM, render } from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    </Provider>
  );
};

export default App;
