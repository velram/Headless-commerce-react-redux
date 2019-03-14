import React, { Component } from "react";
import Slider from "react-slick";
import { importAllImages } from "../../components/custom";
function SampleNextArrow(props) {
  const images = importAllImages(
    require.context("../../images", false, /\.(png|jpe?g|JPE?G)$/)
  );

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
    require.context("../../images", false, /\.(png|jpe?g|JPE?G)$/)
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

class SpecialProducts extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
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
          breakpoint: 668,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1
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
    const isEnabled = this.props.isEnabled;
    if (isEnabled == true) {
      return (
        <div class="products col-lg-12 margintop32 padding0 slick-arrow-icons">
          <p
            class="sectionTitle mobilesection-title  col-12 padding0"
            id="recommended-p"
          >
            <b>
              <p class="recommended-p">{this.props.title}</p>
            </b>
          </p>
          <Slider {...settings}>{this.props.details}</Slider>
        </div>
      );
    } else {
      return <span />;
    }
  }
}

export default SpecialProducts;
