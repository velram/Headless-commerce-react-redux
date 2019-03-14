import React, { Component } from "react";
import "./footer.scss";

import { importAllImages } from "../custom.js";

class Footer extends Component {
  render() {
    const images = importAllImages(
      require.context("../../images/", false, /\.(png|jpe?g|JPE?G)$/)
    );
    return (
      <div class="footer container-fluid" id="footer">
        <div class="subFooter1 row margin0 col-lg-12 paddingmob0">
          <div class="col-6 col-lg-2 vertical-line">
            <a href="#" class="freeDelivery">
              <span class="footersmall-icon col-4 col-lg-5">
                <img src={images["freeDeliveryIcon.jpg"]} />
              </span>
              <span class="footersmall-icon-text col-8 col-lg-7">
                Free Delivery
              </span>
            </a>
          </div>
          <div class="col-6 col-lg-2 vertical-line">
            <a href="#" class="supportCustomer">
              <span class="footersmall-icon col-4 col-lg-5">
                <img src={images["customerSupportIcon.png"]} />
              </span>
              <span class="footersmall-icon-text col-8 col-lg-7">
                Support Customer
              </span>
            </a>
          </div>
          <div class="col-6 col-lg-2 vertical-line">
            <a href="#" class="securePayments">
              <span class="footersmall-icon col-4 col-lg-5">
                <img src={images["securePaymentIcon.png"]} />
              </span>
              <span class="footersmall-icon-text col-8 col-lg-7">
                Secure Payments
              </span>
            </a>
          </div>
          <div class="col-6 col-lg-2 vertical-line">
            <a href="#" class="discount">
              <span class="footersmall-icon col-4 col-lg-5">
                <img src={images["discountIcon.jpg"]} />
              </span>
              <span class="footersmall-icon-text col-8 col-lg-7">
                {" "}
                Discount
              </span>
            </a>
          </div>
          <div class="col-6 col-lg-2 vertical-line">
            <a href="#" class="cashback">
              <span class="footersmall-icon col-4 col-lg-5">
                <img src={images["cashbackIcon.png"]} />
              </span>
              <span class="footersmall-icon-text col-8 col-lg-7">Cashback</span>
            </a>
          </div>
          <div class="col-6 col-lg-2 lastitem vertical-line">
            <a href="#" class="bonus">
              <span class="footersmall-icon col-4 col-lg-5">
                <img src={images["bonusIcon.png"]} />
              </span>
              <span class="footersmall-icon-text col-8 col-lg-7">Bonus</span>
            </a>
          </div>
        </div>

        <div class="subFooter2 col-lg-12 row">
          <div class="Moovit footerblocks col-6 col-lg-2">
            <p>Logixal</p>
            <div>+(855)362-4719</div>
            <p class="Media-Market-LLC-5-South-Main-Street-Englishtown-NJ-07726">
              Logixal Inc <br />
              20 Commerce Drive,Suite 135, <br />
              Cranford , NJ 07016
              <br />
            </p>
            <p>
              <div class="col-12 socialshare-homepage nopadding">
                <a href="" class="fb-left">
                  <i class="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="">
                  <i class="fa fa-pinterest" aria-hidden="true" />
                </a>
                <a href="">
                  {" "}
                  <i class="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </p>
          </div>

          <div class="About-Us  footerblocks col-6 col-lg-2">
            <p>About Us</p>
            <div class="Company-info-News-Investors-Careers-Government-relations-Polici footer-links">
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

          <div class="Shop-by-Category footerblocks col-6 col-lg-2">
            <p>Shop By Category</p>
            <div class="Tadays-Deals-Best-Sellers-New-Arrivals-Top-Rated-Popular-Featu footer-links">
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

          <div class="Support-and-Service footerblocks col-6 col-lg-2">
            <p> Support And Service</p>
            <div class="Customer-Service-Protection-Plans-Schedule-a-Service-Trade-In-P footer-links">
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

          <div class="Partnerships footerblocks col-6 col-lg-2">
            <p>Partnerships</p>
            <div class="Affiliate-Program-Developers-Mediamarket-Ignite-Mediamarket-for footer-links">
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

          <div class="Customer-Care footerblocks  col-6 col-lg-2">
            <p>Customer Care</p>
            <div class="My-Account-Track-Order-Shop-Wishlist-Compare-ReturnsExchange footer-links">
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

        <div class="subFooter3 col-12 content-start col-lg-12 row">
          <div class="payments col-12 col-lg-4">
            <div class="row">
              <div class="col-2 col-lg-2">
                <img src={images["visa.jpg"]} />
              </div>
              <div class="col-2 col-lg-2">
                <img src={images["masterCard.png"]} />
              </div>
              <div class="col-2 col-lg-2">
                <img src={images["paypal.png"]} />
              </div>
              <div class="col-2 col-lg-2">
                <img src={images["wu.png"]} />
              </div>
              <div class="col-2 col-lg-2">
                <img src={images["skrill.png"]} />
              </div>
            </div>
          </div>
          <div class="copyright footer-links padding20  col-12 col-lg-4 text-center">
            © 2019 Logixal. All right reserved
          </div>
          <div class="email col-12 col-lg-4 padding20 text-center">
            <form class="col-lg-6 col-12">
              <input
                type="text"
                value=""
                size="44"
                placeholder="Enter your email"
                class="email-input"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
