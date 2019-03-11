import React, { Component } from "react";
//import "../../../static/assets/header.css";
//import "../../../server/static/assets/header.scss";
import "styles/common.scss";
import { CustomFunction, importAllImages } from "../custom";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import { isNullOrUndefined } from "util";

class FilterFacets extends Component {
  state = {
    products: [],
    redirect: false,
    searchParam: null
  };

  componentDidMount() {}

  handleChecked = (event, val, index) => {
    this.setState({ redirect: true });
    this.setState({ searchParam: val });
  };

  displayFacets() {
    const facetLists = this.props.facets;
    if (!isNullOrUndefined(facetLists)) {
      return Object.entries(facetLists).map(([key, value], index) => {
        return (
          <div className="panel panel-default" key={index}>
            <div className="panel-heading" role="tab" id={"heading" + index}>
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href={"#collapse" + index}
                  aria-expanded="true"
                  aria-controls={"collapse" + index}
                >
                  Memory Capacity
                </a>
              </h4>
            </div>
            <div
              id={"collapse" + index}
              className="panel-collapse collapse in show"
              role="tabpanel"
              aria-labelledby={"heading" + index}
            >
              <div className="panel-body">
                <div>
                  <form>
                    {value.map((val, index) => {
                      return (
                        <label className="container" key={index}>
                          <input
                            type="checkbox"
                            key={index}
                            onChange={e => this.handleChecked(e, val, index)}
                            value={val}
                          />
                          {val}
                          <span className="checkmark" />
                          {this.state.redirect == true && (
                            <Redirect
                              to={
                                "/facets/products/search=" +
                                this.props.searchString +
                                "/" +
                                "param=" +
                                this.state.searchParam
                              }
                            />
                          )}
                        </label>
                      );
                    })}
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    const images = importAllImages(
      require.context(
        "../../../server/static/assets/",
        false,
        /\.(png|jpe?g|JPE?G)$/
      )
    );
    return (
      <div
        className="col-12 col-lg-3 plp-overlay plpFilters content-start"
        id="filters-plp"
      >
        <div className="col-12 filterstart">
          <i className="fa fa-filter" />
          <span className="filter-columns">Filters</span>
        </div>
        <div
          className="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          {this.displayFacets()}
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Price
                </a>
              </h4>
            </div>
            <div
              id="collapseTwo"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <div className="panel-body">
                <input type="text" name="FirstName" value="" size="4" />
                <span className="pricefrom"> to</span>
                <input type="text" name="LastName" value="" size="4" />
                <div className="col-12 padding0 margintop20">
                  <label className="container">
                    $20-$50
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Customer Rating
                </a>
              </h4>
            </div>
            <div
              id="collapseThree"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div className="panel-body">
                <label className="container">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" /> & up
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>

                <div>
                  <label className="container">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" /> & up
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div>
                  <label className="container">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" /> & up
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div>
                  <label className="container">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" /> & up
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plp-reset col-12">
          <div className="row">
            <div className="col-5 addtocart" id="">
              Reset
            </div>
            <div className="col-5 plp-bn buynow" id="plpapply">
              Apply
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterFacets;
