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
        console.log(
          "response is : " + response + "response.data : " + response.data
        );
        return response.data;
      })
      .then(data => {
        console.log(" data.products : " + data.products);
        let details_of_product = data.products.map(detailOfProduct => {
          return (
            <div
              key={detailOfProduct.id}
              className="text-center col-lg-3 col-sm-6 marginbottom20"
            >
              <div className="d-md-block d-none">
                <img
                  className="img-fluid"
                  src={detailOfProduct.productImageURLWeb}
                />
              </div>
              <div className="d-sm-block d-md-none">
                <img
                  className="img-fluid"
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
                <div className="current-trend" key={detailOfProductCategory.id}>
                  <img
                    className="img-fluid"
                    src={detailOfProductCategory.categoryImageURL}
                  />
                </div>
                <p>
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
              <div key={detailOfProduct.id} className="best-sellerProducts">
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
                    className="img-fluid"
                    src={detailOfProduct.productImageURL}
                  />
                </Link>
              </div>
              <div className="price">
                {detailOfProduct.salePrice < detailOfProduct.listPrice && (
                  <span>
                    <span>${detailOfProduct.salePrice}</span>
                    <span className="disc-price">
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
                <div className="prodName">
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
            <div key={detailOfProduct.id} className="text-center">
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
              <a href="#">
                <img
                  src={detailOfProduct.productImageURL}
                  height="250px"
                  width="250px"
                  className="img-fluid align-middle d-block mobile-pdding20 bestseller-img"
                />
              </a>
              <div className="prodName price head-text">
                {detailOfProduct.salePrice < detailOfProduct.listPrice && (
                  <span>
                    <span>${detailOfProduct.salePrice}</span>
                    <span className="disc-price">
                      {" "}
                      <strike> ${detailOfProduct.listPrice}</strike>
                    </span>
                  </span>
                )}
                {detailOfProduct.salePrice >= detailOfProduct.listPrice && (
                  <span>${detailOfProduct.listPrice}</span>
                )}
              </div>
              <a href="#">
                <div className="prodName padding-pn">
                  {detailOfProduct.productName}
                </div>
              </a>
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
              <div key={detailOfProduct.id} className="arrivalsNew">
                <a href="#">
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
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="price">
                {detailOfProduct.salePrice < detailOfProduct.listPrice && (
                  <span>
                    <span>${detailOfProduct.salePrice}</span>
                    <span className="disc-price">
                      <strike> ${detailOfProduct.listPrice}</strike>
                    </span>
                  </span>
                )}
                {detailOfProduct.salePrice >= detailOfProduct.listPrice && (
                  <span>${detailOfProduct.listPrice}</span>
                )}
              </div>
              <div className="prodName">
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
            <div key={detailOfProduct.id} className="text-center">
              <a href="#" className="a-recommendedproduct">
                <img
                  src={detailOfProduct.productImageURL}
                  className="img-fluid mobile-pdding20"
                />
              </a>
              <div className="prodName price head-text">
                ${detailOfProduct.listPrice}
              </div>
              <a href="#">
                <div className="prodName padding-pn">
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
      <div className="col-lg-12 padding0 homepage">
        <Navigation />
        <div className="banner">
          <Banner bannertype="main" />
        </div>
        <FeaturedProducts
          isEnabled="true"
          title="FEATURED DEALS"
          details={this.state.featuredDealsProductDetails}
        />
        <span className="currentTrend">
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

        <div className="content-start recommendsOnBrowsing">
          <SpecialProducts
            isEnabled={this.state.isEnabled}
            title="Recommended based on recent browsing"
            details={this.state.recommendedProduct}
          />
        </div>
        <div className="content-start trendingItems">
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
