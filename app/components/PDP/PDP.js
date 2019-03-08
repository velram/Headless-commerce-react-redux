import React, { Component } from "react";
import SpecialProducts from "../SpecialProducts/SpecialProducts";
import Navigation from "../Navigation/Navigation";
import ProductDetails from "../ProductDetails/ProductDetails";
import Axios from "axios";
import { importAllImages } from "../custom";

class PDP extends Component {
  render() {
    console.log("Match params ID : " + this.props.match.params.id);
    console.log(
      "Match params brandName : " + this.props.match.params.brandName
    );
    console.log(
      "Match params categoryName : " + this.props.match.params.categoryName
    );
    return (
      <div class="col-lg-12 padding0">
        <Navigation />
        <div class="col-lg-12 padding0 pdpPage" id="pdp-page">
          <ProductDetails
            categoryName={this.props.match.params.categoryName}
            brandName={this.props.match.params.brandName}
            productId={this.props.match.params.id}
          />
        </div>
      </div>
    );
  }
}

export default PDP;
