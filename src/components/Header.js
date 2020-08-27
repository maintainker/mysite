import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
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
          <button class="alaram send"><i class="xi-bell-o"></i></button>
          <button className="toggle-btn" onClick={this.showMenu}>
            <span className="img">M</span>
            <i className="xi-angle-down"></i>
          </button>

          {this.state.showMenu ? (
            <div className="menu toggle-content" ref={(element) => { this.dropdownMenu = element; }} >
              <p>
                <button>뭘 담을까</button>
                <button className="copy">고민을 좀</button>
              </p>
              <p className="gubun">
                <button>해봐야겠어</button>
              </p>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
