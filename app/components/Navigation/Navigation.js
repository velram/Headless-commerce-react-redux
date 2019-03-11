import React, { Component } from "react";
//import "../../static/assets/header.css";
//import "../Header/header.scss";
import "styles/common.scss";
class Navigation extends Component {
  render() {
    return (
      <div className="col-lg-12 padding0 content-start">
        <nav className="navbar navbar-expand-lg navbar-light navigationbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapse_nav_target"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapse_nav_target">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item shop-by">
                <a className="navShopByCategory nav-link" href="#">
                  SHOP BY CATEGORY
                </a>
              </li>
              <li className="nav-item home-padding">
                <a className="navHome nav-link blueColor" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="navBlog nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navPages nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Mobile Phones
                  </a>
                  <a className="dropdown-item" href="#">
                    Digital Camera
                  </a>
                  <a className="dropdown-item" href="#">
                    Smart Watch
                  </a>
                  <a className="dropdown-item" href="#">
                    Headphones
                  </a>
                  <a className="dropdown-item" href="#">
                    Tablets
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="navPages nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  BRANDS
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Apple
                  </a>
                  <a className="dropdown-item" href="#">
                    Samsung
                  </a>
                  <a className="dropdown-item" href="#">
                    Bose
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="navTodaysDeal nav-link" href="#">
                  TODAY's DEAL
                </a>
              </li>
              <li className="nav-item">
                <a className="navNewArrivals nav-link" href="#">
                  NEW ARRIVALS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
