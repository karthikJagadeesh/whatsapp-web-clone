/*
  😄
    An attempt to clone whatsapp web app as I learn
    to work my way around React eco-system
  😄
*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./Components/app";
import "./index.css";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector("#root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./Components/app", _ => {
    const NextRootContainer = require("./Components/app").default;
    render(NextRootContainer);
  });
}
