import React, { Component } from "react";
//import "./style.scss";
import "./footer.scss";

import { importAllImages } from "../custom.js";

class Footer extends Component {
  render() {
    const images = importAllImages(
      require.context("../../images/", false, /\.(png|jpe?g|JPE?G)$/)
    );
    return (
      <div className="footer container-fluid" id="footer">
        <div className="subFooter1 row margin0 col-lg-12 paddingmob0">
          <div className="col-6 col-lg-2 vertical-line">
            <a href="#" className="freeDelivery">
              <span className="footersmall-icon col-4 col-lg-5">
                <img src={images["freeDeliveryIcon.jpg"]} />
              </span>
              <span className="footersmall-icon-text col-8 col-lg-7">
                Free Delivery
              </span>
            </a>
          </div>
          <div className="col-6 col-lg-2 vertical-line">
            <a href="#" className="supportCustomer">
              <span className="footersmall-icon col-4 col-lg-5">
                <img src={images["customerSupportIcon.png"]} />
              </span>
              <span className="footersmall-icon-text col-8 col-lg-7">
                Support Customer
              </span>
            </a>
          </div>
          <div className="col-6 col-lg-2 vertical-line">
            <a href="#" className="securePayments">
              <span className="footersmall-icon col-4 col-lg-5">
                <img src={images["securePaymentIcon.png"]} />
              </span>
              <span className="footersmall-icon-text col-8 col-lg-7">
                Secure Payments
              </span>
            </a>
          </div>
          <div className="col-6 col-lg-2 vertical-line">
            <a href="#" className="discount">
              <span className="footersmall-icon col-4 col-lg-5">
                <img src={images["discountIcon.jpg"]} />
              </span>
              <span className="footersmall-icon-text col-8 col-lg-7">
                {" "}
                Discount
              </span>
            </a>
          </div>
          <div className="col-6 col-lg-2 vertical-line">
            <a href="#" className="cashback">
              <span className="footersmall-icon col-4 col-lg-5">
                <img src={images["cashbackIcon.png"]} />
              </span>
              <span className="footersmall-icon-text col-8 col-lg-7">
                Cashback
              </span>
            </a>
          </div>
          <div className="col-6 col-lg-2 lastitem vertical-line">
            <a href="#" className="bonus">
              <span className="footersmall-icon col-4 col-lg-5">
                <img src={images["bonusIcon.png"]} />
              </span>
              <span className="footersmall-icon-text col-8 col-lg-7">
                Bonus
              </span>
            </a>
          </div>
        </div>

        <div className="subFooter2 col-lg-12 row">
          <div className="Moovit footerblocks col-6 col-lg-2">
            <p>Logixal</p>
            <p>+(855)362-4719</p>
            <p className="Media-Market-LLC-5-South-Main-Street-Englishtown-NJ-07726">
              Logixal Inc <br />
              20 Commerce Drive,Suite 135, <br />
              Cranford , NJ 07016
              <br />
            </p>
            <div>
              <div className="col-12 socialshare-homepage nopadding">
                <a href="" className="fb-left">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </a>
                <a href="">
                  {" "}
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="About-Us  footerblocks col-6 col-lg-2">
            <p>About Us</p>
            <div className="Company-info-News-Investors-Careers-Government-relations-Polici">
              Company
              <br />
              News
              <br />
              Investors
              <br />
              Careers
              <br />
              Government Relations
              <br />
              Policies
              <br />
            </div>
          </div>

          <div className="Shop-by-Category footerblocks col-6 col-lg-2">
            <p>Shop By Category</p>
            <div className="Tadays-Deals-Best-Sellers-New-Arrivals-Top-Rated-Popular-Featu">
              Today's Deal
              <br />
              Best Seller
              <br />
              New Arrivals
              <br />
              Top Rated
              <br />
              Popular
              <br />
              Featured
              <br />
            </div>
          </div>

          <div className="Support-and-Service footerblocks col-6 col-lg-2">
            <p> Support And Service</p>
            <div className="Customer-Service-Protection-Plans-Schedule-a-Service-Trade-In-P">
              Customer Service
              <br />
              Protection Plans
              <br />
              Schedule A Service
              <br />
              Trade-In Program
              <br />
              Product Recalls
              <br />
              FAQ
              <br />
            </div>
          </div>

          <div className="Partnerships footerblocks col-6 col-lg-2">
            <p>Partnerships</p>
            <div className="Affiliate-Program-Developers-Mediamarket-Ignite-Mediamarket-for">
              Affiliate Program
              <br />
              Developers
              <br />
              Mediamarket Ignite
              <br />
              Mediamarket for Education
              <br />
              Mediamarket Direct
              <br />
              Advertise With Us
              <br />
            </div>
          </div>

          <div className="Customer-Care footerblocks  col-6 col-lg-2">
            <p>Customer Care</p>
            <div className="My-Account-Track-Order-Shop-Wishlist-Compare-ReturnsExchange">
              My Account
              <br />
              Track Orders
              <br />
              Shop
              <br />
              Wishlist
              <br />
              Compare
              <br />
              Returns/Exchange
              <br />
            </div>
          </div>
        </div>

        <div className="subFooter3 col-12 content-start col-lg-12 row">
          <div className="payments col-12 col-lg-4">
            <div className="row">
              <div className="col-2 col-lg-2">
                <img src={images["visa.jpg"]} />
              </div>
              <div className="col-2 col-lg-2">
                <img src={images["masterCard.png"]} />
              </div>
              <div className="col-2 col-lg-2">
                <img src={images["paypal.png"]} />
              </div>
              <div className="col-2 col-lg-2">
                <img src={images["wu.png"]} />
              </div>
              <div className="col-2 col-lg-2">
                <img src={images["skrill.png"]} />
              </div>
            </div>
          </div>
          <div className="copyright padding20  col-12 col-lg-4 text-center">
            © 2019 Logixal. All right reserved
          </div>
          <div className="email col-12 col-lg-4 padding20 text-center">
            <form>
              <input
                type="text"
                value=""
                placeholder="Enter your email"
                className="email-input col-lg-6 col-12"
                readOnly
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
