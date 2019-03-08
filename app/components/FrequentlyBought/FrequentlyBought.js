import React, { Component } from "react";
import Slider from "react-slick";
import { importAllImages } from "../custom.js";
function SampleNextArrow(props) {
  const images = importAllImages(
    require.context(
      "../../../server/static/assets",
      false,
      /\.(png|jpe?g|JPE?G)$/
    )
  );
  /*
  Following require.context() has been tried & didn't work. 
  So, used the "true" - flag to include sub-directories & modified the path 
  */
  //require.context("../../../static/assets", false, /\.(png|jpe?g|JPE?G)$/) //-didn't work
  //require.context("../../../server/static/assets/",false,/\.(png|jpe?g|JPE?G)$/) //didn't work
  //require.context("../../../*.*", false, /\.(png|jpe?g|JPE?G)$/) //didn't work
  //..\..\..\server\static\
  //require.context("../")
  console.log("props in FrquentlyBought :" + props);
  const { className, style, onClick } = props;
  return (
    <img
      src={images["arrowaWithCircle_right.png"]}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const images = importAllImages(
    require.context(
      "../../../server/static/assets",
      false,
      /\.(png|jpe?g|JPE?G)$/
    )
  );
  const { className, style, onClick } = props;
  return (
    <img
      src={images["arrowaWithCircle_left.png"]}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

class FrequentlyBought extends Component {
  render() {
    const isEnabled = this.props.isEnabled;
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    if (isEnabled == true) {
      return (
        <div class="products padding0 col-lg-12 margintop20">
          <p class="sectionTitle mobilesection-title col-12">
            <b>{this.props.title}</b>
          </p>
          <Slider {...settings}>{this.props.details}</Slider>
        </div>
      );
    } else {
      return <span />;
    }
  }
}

export default FrequentlyBought;
