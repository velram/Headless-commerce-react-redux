import React, { Component } from "react";
import "./style.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Base from "../Base/Base";
import Home from "../Home";
import PDP from "../PDP";
import SearchResult from "../SearchResult";
import { ScrollContext } from "react-router-scroll-4";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollContext>
          <Base>
            <Route path="/home" component={Home} />
            <Route
              path="/productDetails/:categoryName/:brandName/:productName/:id"
              component={PDP}
            />
            <Route
              path="/products/search=:searchString"
              component={SearchResult}
            />
            <Route
              exact
              path="/facets/products/search=:searchString/param=:param"
              component={SearchResult}
            />
          </Base>
        </ScrollContext>
      </BrowserRouter>
    );
  }
}

export default App;
