import React, { Component } from "react";
import "./header.scss";
import { CustomFunction, importAllImages } from "../custom";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  state = {
    products: [],
    redirect: false
  };

  renderRedirectWeb = event => {
    if (event.key == "Enter" || event.type == "click") {
      let searchString = document.getElementById("searchFieldWeb").value;
      this.setState({ searchString: searchString });
      this.setState({ redirect: true });
    }
  };

  renderRedirectMobile = event => {
    if (event.key == "Enter" || event.type == "click") {
      let searchString = document.getElementById("searchFieldMobile").value;
      this.setState({ searchString: searchString });
      this.setState({ redirect: true });
    }
  };

  componentDidMount() {
    CustomFunction("myHeader");
    $(document).ready(function() {
      $("#searchMob").click(function() {
        document.getElementById("myOverlay").style.display = "block";
      });
      $("#closesearch").click(function() {
        document.getElementById("myOverlay").style.display = "none";
      });

      var input = document.getElementById("searchFieldMobile");
      input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          document.getElementById("closesearch").click();
        }
      });
    });
  }
  render() {
    const images = importAllImages(
      require.context("../../images/", false, /\.(png|jpe?g|JPE?G)$/)
    );
    return (
      <div
        className="col-lg-12 mobil-topmargin stickySearch content-start"
        id="myHeader"
      >
        <div className="row search-bar">
          <div className="col-2 d-lg-none" />
          <div className="col-5 col-lg-3 col-sm-6 mobile-logo logo">
            <Link to={"/home"}>
              <img
                className="img-fluid img-dimension"
                src={images["Logixal-logo.jpg"]}
              />
            </Link>
          </div>
          <div className="d-none d-lg-block col-lg-5">
            <form className="searchform-block">
              <button
                type="submit"
                className="fa fa-search search-icon"
                onClick={this.renderRedirectWeb}
              />
              <input
                id="searchFieldWeb"
                type="text"
                placeholder="What can we help you find?"
                className="col-md-12 col-lg-12 search-form"
                onKeyPress={this.renderRedirectWeb}
              />
              {this.state.redirect == true && (
                <Redirect to={"/products/search=" + this.state.searchString} />
              )}
            </form>
          </div>
          <div className="col-5 col-lg-4 col-sm-4 text-right-web">
            <span className="deskhide" id="searchMob">
              <span className="headerIcon-Right">
                <img
                  className="img-fluid headerIcon"
                  src={images["search-copy.png"]}
                />
              </span>
            </span>
            <span className="headerIcon-Right">
              <img
                className="img-fluid headerIcon"
                src={images["registry.png"]}
              />
            </span>
            <span className="headerIcon-Right cart">
              <img className="img-fluid headerIcon" src={images["cart.png"]} />
            </span>

            <div className="overlay" id="myOverlay">
              <span className="closebtn" id="closesearch" title="Close Overlay">
                ×
              </span>

              <form>
                <input
                  type="text"
                  id="searchFieldMobile"
                  placeholder="what can we help you find?"
                  className="col-md-12 col-lg-12 search-form"
                  onKeyPress={this.renderRedirectMobile}
                />
                <span className="fa fa-search overlay-search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
