import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: true,
      data: []
    };
  }

  getPortfolioItems = (filter = null) => {
    axios
      .get("https://jingledjango.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            }),
            isLoading: false
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
            isLoading: false
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  PortfolioItems = () => {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  };

  handleFilter = filter => {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  };

  componentDidMount = () => {
    this.getPortfolioItems();
  };

  render() {
    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button className="btn" onClick={() => this.handleFilter("Frontend")}>
            Frontend
          </button>
          <button className="btn" onClick={() => this.handleFilter("Backend")}>
            Backend
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Fullstack")}
          >
            Fullstack
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            ALL
          </button>
        </div>

        <div className="portfolio-items-wrapper">
          {this.state.isLoading ? (
            <div className="content-loader">
              <FontAwesomeIcon icon="spinner" spin />
            </div>
          ) : (
            this.PortfolioItems()
          )}
        </div>
      </div>
    );
  }
}
