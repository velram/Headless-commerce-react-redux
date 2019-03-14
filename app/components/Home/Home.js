import React, { Component } from "react";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import SpecialProducts from "../SpecialProducts/SpecialProducts";
import SpecialProducts2 from "../SpecialProducts2/SpecialProducts2";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredDealsProductDetails: [],
      currentTrendingProductDetails: [],
      bestSellerProductDetails: [],
      isEnabled: true,
      title: null
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:80/data/featuredProducts.json") //replace with endpoint in live mode
      .then(response => {
        return response.data;
      })
      .then(data => {
        let details_of_product = data.products.map(detailOfProduct => {
          return (
            <div
              key={detailOfProduct.id}
              class="text-center col-lg-3 col-sm-6 marginbottom20"
            >
              <div class="d-md-block d-none">
                <img
                  class="img-fluid"
                  src={detailOfProduct.productImageURLWeb}
                />
              </div>
              <div class="d-sm-block d-md-none">
                <img
                  class="img-fluid"
                  src={detailOfProduct.productImageURLMobile}
                />
              </div>
            </div>
          );
        });
        this.setState({ featuredDealsProductDetails: details_of_product });
        console.log(this.state.productDetails);
      });

    Axios.get("http://localhost:80/data/currentTrendingProducts.json")
      .then(response => {
        return response.data;
      })
      .then(data => {
        let details_of_productCategory = data.productCategory.map(
          detailOfProductCategory => {
            return (
              <div>
                <div class="current-trend" key={detailOfProductCategory.id}>
                  <img
                    class="img-fluid"
                    src={detailOfProductCategory.categoryImageURL}
                  />
                </div>
                <p class="p-label">
                  <span>
                    <strong>{detailOfProductCategory.categoryName}</strong>
                  </span>
                </p>
              </div>
            );
          }
        );
        this.setState({
          currentTrendingProductDetails: details_of_productCategory
        });
        console.log(this.state.productDetails);
      });

    Axios.get("http://localhost:80/data/bestSellerProducts.json")
      .then(resposne => {
        return resposne.data;
      })
      .then(data => {
        let details_of_product = data.products.map(detailOfProduct => {
          return (
            <div>
              <div key={detailOfProduct.id} class="best-sellerProducts">
                <Link
                  className="label-anchor"
                  to={
                    "/productDetails/" +
                    detailOfProduct.categoryName +
                    "/" +
                    detailOfProduct.brandName +
                    "/" +
                    detailOfProduct.productName.replace(/\s+/g, "") +
                    "/" +
                    detailOfProduct.id
                  }
                >
                  <span
                    className={
                      detailOfProduct.isNewProduct
                        ? "notify-badge-new"
                        : "notify-badge-none"
                    }
                  >
                    NEW
                  </span>
                  <span
                    className={
                      detailOfProduct.salePrice < detailOfProduct.listPrice
                        ? "notify-badge-sale"
                        : "notify-badge-none"
                    }
                  >
                    SALE
                  </span>

                  <img
                    class="img-fluid"
                    src={detailOfProduct.productImageURL}
                  />
                </Link>
              </div>
              <div class="price price-label">
                {detailOfProduct.salePrice < detailOfProduct.listPrice && (
                  <span>
                    <span>${detailOfProduct.salePrice}</span>
                    <span class="disc-price">
                      {" "}
                      <strike> ${detailOfProduct.listPrice}</strike>
                    </span>
                  </span>
                )}
                {detailOfProduct.salePrice >= detailOfProduct.listPrice && (
                  <span>${detailOfProduct.listPrice}</span>
                )}
              </div>
              <Link
                to={
                  "/productDetails/" +
                  detailOfProduct.categoryName +
                  "/" +
                  detailOfProduct.brandName +
                  "/" +
                  detailOfProduct.productName.replace(/\s+/g, "") +
                  "/" +
                  detailOfProduct.id
                }
              >
                <div class="prodName price-label">
                  <strong>{detailOfProduct.productName}</strong>
                </div>
              </Link>
            </div>
          );
        });
        this.setState({ bestSellerProductDetails: details_of_product });
        console.log(this.state.productDetails);
      });
    Axios.get("http://localhost:80/data/trendingProducts.json")
      .then(resposne => {
        return resposne.data;
      })
      .then(data => {
        let details_of_product = data.products.map(detailOfProduct => {
          return (
            <div key={detailOfProduct.id}>
              <div class="best-sellerProducts">
                <a href="#" class="label-anchor">
                  <span
                    className={
                      detailOfProduct.isNewProduct
                        ? "notify-badge-new"
                        : "notify-badge-none"
                    }
                  >
                    NEW
                  </span>
                  <span
                    className={
                      detailOfProduct.salePrice < detailOfProduct.listPrice
                        ? "notify-badge-sale"
                        : "notify-badge-none"
                    }
                  >
                    SALE
                  </span>
                  <img
                    src={detailOfProduct.productImageURL}
                    class="img-fluid"
                  />
                </a>
                <div class="price price-label">
                  {detailOfProduct.salePrice < detailOfProduct.listPrice && (
                    <span>
                      <span>${detailOfProduct.salePrice}</span>
                      <span class="disc-price">
                        {" "}
                        <strike> ${detailOfProduct.listPrice}</strike>
                      </span>
                    </span>
                  )}
                  {detailOfProduct.salePrice >= detailOfProduct.listPrice && (
                    <span>${detailOfProduct.listPrice}</span>
                  )}
                </div>
                <div class="prodName price-label">
                  <strong>{detailOfProduct.productName}</strong>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ trendingProductsDetails: details_of_product });
        console.log(this.state.productDetails);
      });

    Axios.get("http://localhost:80/data/newArrival.json")
      .then(resposne => {
        return resposne.data;
      })
      .then(data => {
        let details_of_product = data.products.map(detailOfProduct => {
          return (
            <div>
              <div key={detailOfProduct.id} class="best-sellerProducts">
                <a href="#" className="label-anchor">
                  <span
                    className={
                      detailOfProduct.isNewProduct
                        ? "notify-badge-new"
                        : "notify-badge-none"
                    }
                  >
                    NEW
                  </span>
                  <span
                    className={
                      detailOfProduct.salePrice < detailOfProduct.listPrice
                        ? "notify-badge-sale"
                        : "notify-badge-none"
                    }
                  >
                    SALE
                  </span>
                  <img
                    src={detailOfProduct.productImageURL}
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="price price-label">
                {detailOfProduct.salePrice < detailOfProduct.listPrice && (
                  <span>
                    <span>${detailOfProduct.salePrice}</span>
                    <span class="disc-price">
                      <strike> ${detailOfProduct.listPrice}</strike>
                    </span>
                  </span>
                )}
                {detailOfProduct.salePrice >= detailOfProduct.listPrice && (
                  <span>${detailOfProduct.listPrice}</span>
                )}
              </div>
              <div class="prodName price-label">
                <strong>{detailOfProduct.productName}</strong>
              </div>
            </div>
          );
        });
        this.setState({ newArrival: details_of_product });
        console.log(this.state.productDetails);
      });

    Axios.get("http://localhost:80/data/recommendedProduct.json")
      .then(resposne => {
        return resposne.data;
      })
      .then(data => {
        let details_of_product = data.products.map(detailOfProduct => {
          return (
            <div key={detailOfProduct.id} class="text-center">
              <a href="#" class="a-recommendedproduct">
                <img
                  src={detailOfProduct.productImageURL}
                  class="img-fluid mobile-pdding20"
                />
              </a>
              <div class="prodName price head-text">
                ${detailOfProduct.listPrice}
              </div>
              <a href="#">
                <div class="prodName padding-pn">
                  {detailOfProduct.productName}
                </div>
              </a>
            </div>
          );
        });
        this.setState({ recommendedProduct: details_of_product });
        console.log(this.state.productDetails);
      });
  }

  render() {
    return (
      <div class="col-lg-12 padding0 homepage">
        <Navigation />
        <div class="banner">
          <Banner bannertype="main" />
        </div>
        <FeaturedProducts
          isEnabled="true"
          title="Featured Deals"
          details={this.state.featuredDealsProductDetails}
        />
        <span class="currentTrend">
          <SpecialProducts2
            title="Current Trending Products"
            details={this.state.currentTrendingProductDetails}
          />
        </span>
        <Banner bannertype="secondary" />
        <SpecialProducts2
          isEnabled={this.state.isEnabled}
          title="Best Sellers Products"
          details={this.state.bestSellerProductDetails}
        />

        <SpecialProducts2
          isEnabled={this.state.isEnabled}
          title="New Arrivals"
          details={this.state.newArrival}
        />

        <div class="content-start recommendsOnBrowsing">
          <SpecialProducts
            isEnabled={this.state.isEnabled}
            title="Recommended based on recent browsing"
            details={this.state.recommendedProduct}
          />
        </div>
        <div class="content-start trendingItems">
          <SpecialProducts
            isEnabled={this.state.isEnabled}
            title="Trending Items"
            details={this.state.trendingProductsDetails}
          />
        </div>
      </div>
    );
  }
}

export default Home;
