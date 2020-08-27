import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Aside extends Component {
  render() {
    return (
      <aside>
        <nav>
          <h3>MENU</h3>
          <ul className="gnb">
            <li>
              <NavLink exact to={"/"}>
                <i className="xi-face"></i>
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/project"}>
                <i className="xi-bookmark-o"></i>
                <span>Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/hobby"}>
                <i className="xi-book-o"></i>
                <span>Hobby</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/work"}>
                <i className="xi-briefcase"></i>
                <span>Careers</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav>
          <h3>EXTERNAL</h3>
          <ul className="contact-menu">
            <li>
              <a href="https://github.com/Mountainah?tab=repositories" target="_brank">
                <i className="xi-github-alt"></i>
                <span>github</span>
              </a>
            </li>
            <li>
              <a href="https://velog.io/@mountain" target="_brank">
                <i className="xi-browser-text"></i>
                <span>velog</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Aside;
