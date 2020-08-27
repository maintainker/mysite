import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <NavLink to={"/"}>
            Mountain
            <img src="./assets/images/logo.png" alt="" />
          </NavLink>
        </h1>
        <div className="toggle-wrap">
          <label for="profileMenu" className="toggle-btn">
            <span className="img">
              <img src="./assets/images/mountain.jpeg" alt="" />
            </span>
            <span className="ko">박산아</span>
            <i className="xi-angle-down"></i>
          </label>
          <input type="checkbox" id="profileMenu" />
          <nav className="toggle-content">
            <p>
              <button>My Profile</button>
              <button className="copy">Invite co-worker</button>
            </p>
            <p className="gubun">
              <button>Logout</button>
            </p>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
