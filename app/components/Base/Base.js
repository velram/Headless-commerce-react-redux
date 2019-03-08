import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

class Base extends Component {
  render() {
    return (
      <div className="appcontainer_wrapper container-fluid">
        <div className="row">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Base;
