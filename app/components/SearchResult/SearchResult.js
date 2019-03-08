import React, { Component } from "react";
import Product from "../model/Product";
import Navigation from "../Navigation/Navigation";
import Axios from "axios";
import $ from "jquery";
import { importAllImages } from "../custom";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import FilterFacets from "../FilterFacets/FilterFacets";
import { isNullOrUndefined } from "util";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: new Array(),
      category: null,
      brand: null,
      activePage: 1,
      itemPerPage: 6,
      facets: new Array()
    };
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  handleFilterButton(event) {
    document.getElementById("filters-plp").style.display = "block";
  }
  componentDidMount() {
    var searchTerm = this.props.match.params.searchString;
    var filterParam = this.props.match.params.param;
    if (
      !isNullOrUndefined(searchTerm) &&
      !isNullOrUndefined(filterParam) &&
      filterParam != "abc"
    ) {
      Axios.get(
        "http://localhost/data/facetResults_" +
          searchTerm.toLowerCase() +
          "_" +
          filterParam +
          ".json"
      )
        .then(response => {
          return response.data.facetResults;
        })
        .then(data => {
          this.setState({ searchResults: data });
        });

      Axios.get(
        "http://localhost/data/facets_" + searchTerm.toLowerCase() + ".json"
      )
        .then(response => {
          return response.data.facets;
        })
        .then(data => {
          this.setState({ facets: data });
        });
    } else {
      Axios.get(
        "http://localhost/data/facets_" + searchTerm.toLowerCase() + ".json"
      )
        .then(response => {
          return response.data.facets;
        })
        .then(data => {
          this.setState({ facets: data });
        });

      Axios.get(
        "http://localhost/data/searchString_" +
          searchTerm.toLowerCase() +
          ".json"
      )
        .then(response => {
          this.setState({ category: response.data.category });
          this.setState({ brand: response.data.brand });
          return response.data.searchResults;
        })
        .then(data => {
          this.setState({ searchResults: data });
        });
    }

    $(document).ready(function() {
      function toggleIcon(e) {
        $(e.target)
          .prev(".panel-heading")
          .find(".more-less")
          .toggleClass("glyphicon-plus glyphicon-minus");
      }
      $(".panel-group").on("hidden.bs.collapse", toggleIcon);
      $(".panel-group").on("shown.bs.collapse", toggleIcon);

      $("#mobile-filterbutton").click(function() {
        document.getElementById("filters-plp").style.display = "block";
      });
      $("#plpapply").click(function() {
        document.getElementById("filters-plp").style.display = "none";
      });
    });
  }

  displayPrice(searchResult) {
    if (
      searchResult.salePrice != "" &&
      searchResult.salePrice < searchResult.listPrice
    ) {
      return (
        <span>
          <span className="actual-price">${searchResult.salePrice}</span>
          <span className="disc-price socialshare-icon">
            <strike>${searchResult.listPrice}</strike>
          </span>
        </span>
      );
    } else {
      return <span className="actual-price">${searchResult.listPrice}</span>;
    }
  }

  displayReview(searchResult) {
    if (searchResult.reviewStars > 0) {
      return (
        <span>
          <span id="starsRating">
            <StarRatings
              rating={searchResult.reviewStars}
              starRatedColor="rgb(254,215,0)"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="0px"
            />
          </span>
        </span>
      );
    }
  }

  render() {
    const images = importAllImages(
      require.context(
        "../../../server/static/assets/PLPImages/",
        false,
        /\.(png|jpe?g|JPE?G)$/
      )
    );
    console.log("current state : " + this.state);
    console.log("search results : " + this.state.searchResults);
    if (this.state.searchResults.length > 0) {
      var indexOfLastTodo = this.state.activePage * this.state.itemPerPage;
      var indexOfFirstTodo = indexOfLastTodo - this.state.itemPerPage;
      var renderedProduct = this.state.searchResults.slice(
        indexOfFirstTodo,
        indexOfLastTodo
      );
      var pageRangeDisplayed =
        this.state.searchResults.length / this.state.itemPerPage;
      var listItems = renderedProduct.map((item, index) => {
        return (
          <div
            className="col-6 col-lg-4 plp-product marginbottom20"
            key={item.product_id}
          >
            <div className="col-12 plp-outer">
              <Link
                to={
                  "/productDetails/" +
                  item.categoryName +
                  "/" +
                  item.brandName +
                  "/" +
                  item.displayName.replace(/\s+/g, "") +
                  "/" +
                  item.product_id
                }
              >
                <div className="col-12 padding0">
                  <img src={item.productImageURL} className="col-12 padding0" />
                </div>
                <div className="prod-plp-name">{item.displayName}</div>
              </Link>
              <div className="row col-12 plp-price-review">
                <div className="col-12 col-lg-6 padding0 plp-price">
                  {this.displayPrice(item)}
                </div>
                <div className="col-12 col-lg-6 plp-rating padding0">
                  {this.displayReview(item)}
                </div>
              </div>
              <a href="#">
                <div className="col-10 col-lg-11 addtocart white">
                  Add to Cart
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="col-12 row">
        <Navigation />
        <FilterFacets
          facets={this.state.facets}
          searchString={this.props.match.params.searchString}
        />

        {this.state.searchResults.length <= 0 && (
          <div className="col-12 col-lg-9 row plp-content">
            <div className="font-size">
              <div className="col-12 searchResult content-start">
                No Search Results found for
                <span className="searchResultText">
                  <b>{this.props.match.params.searchString}</b>
                </span>
              </div>
            </div>
          </div>
        )}
        {this.state.searchResults.length > 0 && (
          <div className="col-12 col-lg-9 row plp-content">
            <div className="col-4 font-size">
              <div />

              <div className="searchResult">
                Search Results for
                <span className="searchResultText">
                  <b>{this.props.match.params.searchString}</b>
                </span>
              </div>
            </div>

            <div className="col-8 row text-right padding0 font-size">
              <div className="col-8 col-lg-11 mobile-breadbrumbs">
                Showing {this.state.activePage} -{" "}
                {this.state.searchResults.length} of{" "}
                {this.state.searchResults.length} products
              </div>
              <div className="col-4 col-lg-1 padding0">
                <u>Sort By</u>
              </div>
            </div>
            {listItems}
            <div className="col-12">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemPerPage}
                totalItemsCount={this.state.searchResults.length}
                pageRangeDisplayed={Math.ceil(pageRangeDisplayed)}
                onChange={this.handlePageChange}
                innerclassName="paginationUL"
                activeclassName="active"
                disabledclassName="enabled"
                itemclassName="paginationLI"
                linkclassName="linkHref"
              />
            </div>
            <div className="plp-filter-mobile col-12" id="mobile-filterbutton">
              <img src={images["filter.png"]} className="filter-imgmob" />
              <div className="filterButton" onClick={this.handleFilterButton}>
                Filter
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchResult;
