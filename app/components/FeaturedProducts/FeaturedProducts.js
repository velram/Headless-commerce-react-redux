import React, { Component } from "react";

class SpecialProducts extends Component {
  render() {
    const isEnabled = this.props.isEnabled;
    if (isEnabled == "true") {
      return (
        <div className="content-start">
          <div className="products col-lg-12 padding0 margintop30">
            <p className="sectionTitle col-12 padding0 mobilesection-title">
              <b>{this.props.title}</b>
            </p>
            <div className="col-lg-12  mobile-padding padding0 paddingbottom0 ">
              <div className="row featured-prod-mobile">
                {this.props.details}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <span />;
    }
  }
}

export default SpecialProducts;
