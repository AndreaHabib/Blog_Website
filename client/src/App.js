import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReadMore from "./components/ReadMore";
import ScrollToTop from "./ScrollToTop";
import {
  BrowserRouter as Switch,
  Redirect,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemModal, NavBar, Blogs, Footer } from "./components/index";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <NavBar />
              <Route exact path="/Blogs">
//                 <ItemModal />
                <Blogs />
              </Route>
              <Route exact path="/ReadMore/:id">
                <ReadMore />
              </Route>
              <Footer />
              <ScrollToTop>
                <Route exact path="/">
                  <Redirect to="/Blogs" />
                </Route>
              </ScrollToTop>
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
