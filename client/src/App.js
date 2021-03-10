import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemModal, NavBar, Blogs } from "./components/index";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <ItemModal />
          <Blogs />
        </div>
      </Provider>
    );
  }
}
