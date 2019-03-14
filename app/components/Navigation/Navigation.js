import React, { Component } from "react";
//import "../../static/assets/header.css";
//import "../Header/header.scss";
import "styles/common.scss";
class Navigation extends Component {
  render() {
    return (
      <div class="col-lg-12 padding0 content-start">
        <nav class="navbar navbar-expand-lg navbar-light navigationbar">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapse_nav_target"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="collapse_nav_target">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item shop-by">
                <a class="navShopByCategory nav-link" href="#">
                  SHOP BY CATEGORY
                </a>
              </li>
              <li class="nav-item home-padding">
                <a class="navHome nav-link" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="navBlog nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="navPages nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Mobile Phones
                  </a>
                  <a class="dropdown-item" href="#">
                    Digital Camera
                  </a>
                  <a class="dropdown-item" href="#">
                    Smart Watch
                  </a>
                  <a class="dropdown-item" href="#">
                    Headphones
                  </a>
                  <a class="dropdown-item" href="#">
                    Tablets
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="navPages nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  BRANDS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Apple
                  </a>
                  <a class="dropdown-item" href="#">
                    Samsung
                  </a>
                  <a class="dropdown-item" href="#">
                    Bose
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="navTodaysDeal nav-link" href="#">
                  TODAY's DEAL
                </a>
              </li>
              <li class="nav-item">
                <a class="navNewArrivals nav-link" href="#">
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
