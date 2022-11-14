import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import "./Navbar.css";
import logo from "../img/logo_ML_black.svg";

import { Drawer, Button } from "antd";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="menuCon">
          <div className="menu-item">
            <div className="leftMenu">
              <LeftMenu />
            </div>
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
