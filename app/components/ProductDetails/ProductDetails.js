import React, { Component } from "react";
import Product from "../model/Product";
import Axios from "axios";
import $ from "jquery";
import { Tabs, Tab } from "react-bootstrap-tabs";
import StarRatings from "react-star-ratings";
import Swatches from "../Swatches/Swatches";
import FrequentlyBought from "../FrequentlyBought/FrequentlyBought";
import SpecialProducts from "../SpecialProducts/SpecialProducts";
import ReactImageMagnify from "react-image-magnify";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.handleChangeThumb = this.handleChangeThumb.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  state = {
    currentImage: null
  };

  handleChangeThumb(event) {
    $("#largeImage").attr("src", event.target.src.replace("thumbs", "large"));
    var img = $("#largeImage").attr("src");
    this.setState({ currentImage: img });
  }

  state = {
    product: new Product(),
    thumbnailImages: [],
    swatches: [],
    storage: [],
    colors: new Map(),
    threshold: 5,
    relatedProducts: [],
    frequentlyBought: [],
    price: 0,
    isEnabledRelatedProducts: false,
    isEnabledAccessories: false
  };

  componentDidMount() {
    Axios.get(
      "http://localhost/data/product_" + this.props.productId + ".json"
    ).then(response => {
      this.setState({ product: response.data.productData });
      this.setState({
        thumbnailImages: response.data.productData.thumbnailImages
      });
      this.setState({ swatches: response.data.productData.swatches });
      this.setState({ colors: response.data.productData.swatches.colors });
      this.setState({ storage: response.data.productData.swatches.storage });
      this.setState({
        currentImage: response.data.productData.productImageURL
      });
      if (response.data.productData.relatedProducts.length > 0) {
        this.setState({ isEnabledRelatedProducts: true });
      }
      if (response.data.productData.accessories.length > 0) {
        this.setState({ isEnabledAccessories: true });
      }
      let relatedProducts = response.data.productData.relatedProducts.map(
        detailOfProduct => {
          return (
            <div key={detailOfProduct.id} className="text-center col-lg-10">
              <img
                src={detailOfProduct.productImageURL}
                className="img-fluid align-middle d-block mobile-pdding20 bestseller-img"
              />
              <div className="prodName price">
                ${parseFloat(detailOfProduct.listPrice).toFixed(2)}
              </div>
              <div className="prodName padding-pn">
                {detailOfProduct.productName}
              </div>
            </div>
          );
        }
      );
      this.setState({ relatedProducts: relatedProducts });

      let details_of_product = response.data.productData.accessories.map(
        detailOfProduct => {
          return (
            <div key={detailOfProduct.id} className="text-center col-lg-10">
              <img
                src={detailOfProduct.productImageURL}
                height="256px"
                width="256px"
                className="img-fluid align-middle d-block mobile-pdding20 bestseller-img"
              />
              <div className="prodName price">
                ${parseFloat(detailOfProduct.listPrice).toFixed(2)}
              </div>
              <div className="prodName padding-pn">
                {detailOfProduct.productName}
              </div>
              <div>
                <label className="container">
                  <input
                    type="checkbox"
                    name="frequentlyBought"
                    id={detailOfProduct.id}
                    onClick={e =>
                      this.handleChecked(e, detailOfProduct.listPrice)
                    }
                  />
                  <span className="pdpjs checkmark" />
                </label>
              </div>
            </div>
          );
        }
      );
      this.setState({ frequentlyBought: details_of_product });
    });
    $(document).ready(function() {
      if ($(".pdpPage")) {
        $(".tab-section  .nav-item").addClass("col-4");
      }
    });

    $(function() {
      var $select = $(".1-10");
      for (var i = 1; i <= 10; i++) {
        $select.append(
          $("<option></option>")
            .val(i)
            .html(i)
        );
      }

      $(".thumbnailImages img").on("click", function(e) {
        // alert("inside the")
        $("#largeImage").attr(
          "src",
          $(this)
            .attr("src")
            .replace("thumb", "large")
        );
      });
    });
    $(".qtyplus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var fieldName = $(".qtyplus").attr("field");
      // Get its current value
      var currentVal = parseInt($("input[name=" + fieldName + "]").val());
      // If is not undefined
      if (!isNaN(currentVal)) {
        // Increment
        $("input[name=" + fieldName + "]").val(currentVal + 1);
      } else {
        // Otherwise put a 0 there
        $("input[name=" + fieldName + "]").val(0);
      }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var fieldName = $(".qtyminus").attr("field");
      // Get its current value
      var currentVal = parseInt($("input[name=" + fieldName + "]").val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $("input[name=" + fieldName + "]").val(currentVal - 1);
      } else {
        // Otherwise put a 0 there
        $("input[name=" + fieldName + "]").val(0);
      }
    });
  }

  handleChecked(e, listPrice) {
    const target = e.target.checked;
    if (target == false && this.state.price > 0) {
      const total = parseFloat(this.state.price) - parseFloat(listPrice);
      this.setState({ price: total });
    } else {
      const total = parseFloat(this.state.price) + parseFloat(listPrice);
      this.setState({ price: total });
    }
  }

  displayFrequentlyBought() {
    let ProductPrice = parseFloat(this.state.product.listPrice);
    if (this.state.product.salePrice <= this.state.product.listPrice) {
      ProductPrice = parseFloat(this.state.product.salePrice);
    }
    const Total = parseFloat(ProductPrice) + parseFloat(this.state.price);
    return Total.toFixed(2);
  }

  displayReview() {
    if (this.state.product.totalReviews > 0) {
      return (
        <span>
          <span id="starsRating">
            <StarRatings
              rating={this.state.product.reviewStars}
              starRatedColor="rgb(254,215,0)"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="0px"
            />
          </span>
          <span className="starRatingCount reviews">
            <b>{this.state.product.reviewStars}</b>
          </span>{" "}
          ({this.state.product.totalReviews}){" "}
          <span className="reviews">
            <a href="#" className="write-review">
              Write a review
            </a>
          </span>
        </span>
      );
    } else {
      return (
        <span className="reviews">
          <a href="#" className="write-review">
            Write the first Review!
          </a>
        </span>
      );
    }
  }
  displayPrice() {
    if (
      this.state.product.salePrice != "" &&
      this.state.product.salePrice < this.state.product.listPrice
    ) {
      return (
        <span>
          <span className="actual-price">
            ${parseFloat(this.state.product.salePrice).toFixed(2)}
          </span>
          <span className="disc-price socialshare-icon">
            <strike>
              ${parseFloat(this.state.product.listPrice).toFixed(2)}
            </strike>
          </span>
          <span className="disc-price">|</span>
          <span className="socialshare-icon highlighted-text">
            Save {this.state.product.discountPercent}%
          </span>
        </span>
      );
    } else {
      return (
        <span className="actual-price">
          ${parseFloat(this.state.product.listPrice).toFixed(2)}
        </span>
      );
    }
  }

  displayThumbnail() {
    return (
      <div className="previews col-lg-3 col-12 row">
        {/* {this.state.product.thumbnailImages.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })} */}
        {this.state.thumbnailImages.map(thumbnailImage => {
          return (
            <div
              href="#"
              id="thumbs"
              className="thumbnailImages col-4"
              data-full={thumbnailImage}
              onClick={this.handleChangeThumb}
            >
              <img src={thumbnailImage} className="thumbnail" />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    console.log("this.state : " + this.state);
    console.log("this.state.product : " + this.state.product);
    console.log("this.state.currentImage : " + this.state.currentImage);
    return (
      <div className="pdp-page-start">
        <div className="content-start">
          <div className="col-12 col-lg-8 padding0  product-image">
            <div className="col-12 col-lg-8 marginpdp breadcrumbs ">
              <a href="#" className="breadcrumbs-links">
                {this.state.product.category}
              </a>{" "}
              /{" "}
              <a href="#" className="breadcrumbs-links">
                {this.state.product.brand}
              </a>{" "}
              / {this.state.product.displayName}
            </div>
          </div>
          <div className="col-12 col-lg-8 row product-image mobile-padding">
            <div className="col-12 col-lg-2 margintop20 padding0 text-center thumbnailImgweb ">
              {this.displayThumbnail()}
            </div>
            <div className="img col-12 col-lg-9 full">
              <img
                src={this.state.thumbnailImages[0]}
                className="product-img col-12 paddingmob0"
                id="largeImage"
              />
              <div id="mobMagnify">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      src: this.state.currentImage,
                      isFluidWidth: true
                    },
                    largeImage: {
                      src: this.state.currentImage,
                      width: 1800,
                      height: 1200
                    },
                    enlargedImagePosition: "over",
                    imageClassName: "product-img"
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-2 margintop20 text-center thumbnailImgmob">
              {this.displayThumbnail()}
            </div>
          </div>
          <div id="sticky-anchor" />
          <div className="col-12 col-lg-4 product-desc" id="sidebar">
            <div className="prod-name pdp-bottom">
              {this.state.product.displayName}
            </div>
            <div className="col-12 row margin0 padding0 pdp-bottom">
              <div className="col-12 col-lg-7 nopadding">
                {this.displayReview()}
              </div>
              <div className="col-12 col-lg-5 nopadding paddingTOPmob">
                <i
                  className="fa fa-facebook socialshare-icon"
                  aria-hidden="true"
                />
                <i
                  className="fa fa-twitter socialshare-icon"
                  aria-hidden="true"
                />
                <i
                  className="fa fa-pinterest socialshare-icon"
                  aria-hidden="true"
                />
                <i
                  className="fa fa-instagram socialshare-icon"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="price">
              <div className="col-lg-12 padding0">
                {this.displayPrice()}
                {this.state.product.availableQuantity <=
                  this.state.threshold && (
                  <span>
                    <span className="highlighted-text"> |</span>
                    <span className="highlighted-text">
                      {" "}
                      Hurry! only {this.state.product.availableQuantity} left
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="Qty col-12 row margin0  padding5">
              <div className="qty-field col-2">QTY</div>
              <div className="qty-field">
                <input
                  type="button"
                  value="-"
                  className="qtyminus"
                  field="quantity"
                  max="5"
                />
                <input type="text" name="quantity" value="0" className="qty" />
                <input
                  type="button"
                  value="+"
                  className="qtyplus"
                  field="quantity"
                />
              </div>
            </div>
            <Swatches
              swatches={this.state.swatches}
              storage={this.state.storage}
              colors={this.state.colors}
            />

            <div className="radio color-box">
              <div>
                <input type="radio" id="test1" name="radio-group" checked />
                <label for="test1">Ship this item</label>
              </div>
              <div>
                <input type="radio" id="test2" name="radio-group" />
                <label for="test2">Buy Online,Pick up in Store</label>
              </div>
              <div className="col-12 shipping-details">
                <p>Check Availabilty at Nearby Stores</p>
              </div>
              <p className="col-12 shipping-det-small nopadding">
                Choose Expedited Shipping at checkout for guaranteed delivery by
                <b> Monday , November 26</b>
              </p>
            </div>
            <div className="buy-section col-12 row">
              <div className="col-6 col-lg-5 addtocart">Add to Cart</div>
              <div className="col-6 col-lg-5 buynow">Buy Now</div>
            </div>
          </div>
          {this.state.isEnabledAccessories == true && (
            <div className="pdp-extradetails col-12 col-lg-8 row">
              <div className="margintop20  col-12 col-lg-9">
                <div className="frequentlybought">
                  <FrequentlyBought
                    isEnabled={this.state.isEnabledAccessories}
                    title="Frequently Bought Together"
                    details={this.state.frequentlyBought}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-3 bundletocart">
                <span>
                  <b>Total:{this.displayFrequentlyBought()}</b>
                </span>{" "}
                <span className="bundlePrice" />
                <div className="bundleCaption">
                  Bundle Price for Selected items
                </div>
                <button type="button" className="bundleButton">
                  Add to Cart
                </button>
              </div>
            </div>
          )}
          <div className="pdp-extradetails  col-12 col-lg-8">
            <div className="related-products">
              <SpecialProducts
                isEnabled={this.state.isEnabledRelatedProducts}
                title="Related Products"
                details={this.state.relatedProducts}
              />
            </div>
          </div>
        </div>
        <div className="tab-section padding0 col-lg-8 col-12" id="tabId">
          <section className="col-12 padding0" id="tab-sec">
            <Tabs
              onSelect={(index, label) =>
                console.log(`Selected Index: ${index}, Label: ${label}`)
              }
              selected="tab 2"
            >
              <Tab label="Overview" className="">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <img
                      className="col-12"
                      src={this.state.product.productImageURL}
                    />
                  </div>
                  <div className="col-12  col-lg-7 tab-content-text">
                    <h2 className="Overview_6hpGqG __web-inspector-hide-shortcut__">
                      Details
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.product.longDescription
                      }}
                    />
                  </div>
                </div>
              </Tab>
              <Tab label="Shipping Policies" className="col-4">
                <p>
                  <b>Shipping</b>
                </p>
                <p className="tab-content-text">
                  <ul>
                    <li>Prices are shown in U.S Dollars.</li>
                    <li>
                      Any Import duties, taxes or brokerage fees due at the time
                      of delivery are the sole responsibility of the receiving
                      customer.
                    </li>
                    <li>
                      Packing slips for international shipment cannot be marked
                      as “gift” or with altered prices.
                    </li>
                    <li>
                      International orders may require 3-5 business days or more
                      of additional processing time prior to shipment as we may
                      need to consolidate items to one location for shipment.
                    </li>
                    <li>
                      Some brands may not be shipped to certain destinations due
                      to manufacturing restrictions. If you have selected an
                      item that cannot be shipped internationally we will inform
                      you on our site.
                    </li>
                  </ul>
                </p>
              </Tab>
              <Tab label="Review & Ratings" className="tab-content-text col-4">
                Reviews and Rating
              </Tab>
            </Tabs>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
