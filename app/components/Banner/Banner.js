import React, { Component } from "react";
import { importAllImages } from "../custom";
import Slider from "react-slick";
class Banner extends Component {
  render() {
    const images = importAllImages(
      require.context(
        "../../images/homePageImages/bannerImage",
        false,
        /\.(png|jpe?g|JPE?G)$/
      )
    );

    var settings = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: null,
      autoplay: true,
      dots: true
    };
    const bannerType = this.props.bannertype;
    if (bannerType === "main") {
      return (
        <div>
          <div className="d-block d-sm-none col-xs-12 padding0 margintop20">
            <Slider {...settings}>
              <div>
                <img
                  className="img-fluid"
                  width="100%"
                  src={images["banner1mobile.jpg"]}
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  width="100%"
                  src={images["BannerMobile2.jpg"]}
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  width="100%"
                  src={images["mobileBanner3.jpg"]}
                />
              </div>
            </Slider>
            {/* <img className="img-fluid" width="100%" src={images['banner1mobile.jpg']} /> */}
          </div>
          <div className="d-none d-sm-block col-lg-12 padding0 margintop20">
            <Slider {...settings}>
              <div>
                <img
                  className="img-fluid"
                  width="100%"
                  src={images["banner1.jpg"]}
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  width="100%"
                  src={images["webBanner2.jpg"]}
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  width="100%"
                  src={images["webBanner3.jpg"]}
                />
              </div>
            </Slider>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-block d-sm-none col-lg-12 padding0 margintop20">
            <img
              className="img-fluid"
              width="100%"
              src={images["banner2mobile.jpg"]}
            />
          </div>
          <div className="d-none d-sm-block col-lg-12 padding0 margintop20">
            <img
              className="img-fluid"
              width="100%"
              src={images["banner2.jpg"]}
            />
          </div>
        </div>
      );
    }
  }
}

export default Banner;
