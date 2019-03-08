import React, { Component, Fragment } from "react";
/*
import Product from "../model/Product";
import Axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
*/
//import SearchTest from "./SearchTest";
//old headless commerce code
/*
 * The following components doesn't exist even in old headless code.
 */
//import SiteApis from "../../api/SiteApis.js";
//import SearchResultList from "./SearchResultList";
//import SearchResult from "../Search"

import Product from "../model/Product";
import SearchResult from "../SearchResult/SearchResult";

class ProductList extends Component {
  state = {
    results: []
  };

  onSearchSubmit = async term => {
    const response = await SiteApis.get("/searchList/?displayName=" + term);
    this.setState({ results: response.data });
    console.log(response.data);
  };

  render() {
    return (
      <div>
        <SearchTest onSubmit={this.onSearchSubmit} />
        <SearchResult searchList={this.state.results} />
      </div>
    );
  }
}
export default ProductList;
