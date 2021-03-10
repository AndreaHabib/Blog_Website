import React, { Component } from "react";
import "../styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <p className="brand">
          Andrea <i class="fas fa-blog">log </i>
        </p>
      </nav>
    );
  }
}

export default NavBar;
