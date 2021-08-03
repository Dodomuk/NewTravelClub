import { RouteComponentProps } from "react-router";
import React, { Component } from "react";
import "../../resource/Header.css";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Header extends Component {
  render() {
    const menuList = ["main", "clubs", "members"];

    return (
      <nav className="navtop">
        {menuList.map((menu) => {
          {
            switch (menu) {
              case "main":
                return (
                  <h2>
                    <NavLink  to="/main" className="navStyle" style={{textDecoration: 'none'}}>
                      Main
                    </NavLink>
                  </h2>
                );
              case "clubs":
                return (
                  <h2>
                    <NavLink  to="/clubs" className="navStyle" style={{textDecoration: 'none'}}>
                      Club
                    </NavLink>
                  </h2>
                );
              case "members":
                return (
                  <h2>
                    <NavLink  to="/members" className="navStyle" style={{textDecoration: 'none'}}>
                      Member
                    </NavLink>
                  </h2>
                );
            }
          }
        })}
        <AccountCircleIcon className="loginBtn" style={{fontSize : "large" , width:"70px" , height:"70px"}}/>
      </nav>
    );
  }
}
export default Header;
