/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
/*
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
*/
import { BrowserRouter, Route } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import Base from "../../components/Base/Base";
import Home from "../../components/Home/Home";
import ProductList from "../../components/ProductList/ProductList";
import PDP from "../../components/PDP/PDP";
import SearchResult from "../../components/SearchResult/SearchResult";
//import "./style.scss";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <ScrollContext>
      <Base>
        <Route path="/home" component={Home} />
        <Route
          path="/productDetails/:categoryName/:brandName/:productName/:id"
          component={PDP}
        />
        <Route path="/products/search=:searchString" component={SearchResult} />
        <Route
          exact
          path="/facets/products/search=:searchString/param=:param"
          component={SearchResult}
        />
      </Base>
    </ScrollContext>
  </BrowserRouter>
);

/*
class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Footer />{" "}
      </div>
    );
  }
}
*/
export default App;
