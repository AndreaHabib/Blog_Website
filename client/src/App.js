import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReadMore from "./components/ReadMore";
import {
  BrowserRouter as Switch,
  Redirect,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemModal, NavBar, Blogs } from "./components/index";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path="/Blogs">
                <NavBar />
                <ItemModal />
                <Blogs />
              </Route>
              <Route exact path="/ReadMore/:id">
                <NavBar />
                <ReadMore />
              </Route>
              <Route exact path="/">
                <Redirect to="/Blogs" />
              </Route>
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
