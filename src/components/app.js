import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'

import PortfolioComponent from "./portfolio/portfolio-container";
import NavigationComponent from "./navigation/navigation-container"

export default class App extends Component {
  render() {
    return (
      <div className="app">

        <Router>
          <div>
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />

            </Switch>
          </div>
        </Router>

        <h1>Spencer Weber's Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioComponent />
      </div>
    );
  }
}
