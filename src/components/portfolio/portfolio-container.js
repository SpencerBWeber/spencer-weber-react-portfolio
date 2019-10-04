import React, { Component } from "react";
import axios from 'axios'
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        {title: "Quip", category: "eCommerce", slug: "quip"},
        {title: "Eventbrite", category: "Scheduling", slug: "eventbrite"},
        {title: "Ministry Safe", category: "Enterprise", slug: "ministry-safe"},
        {title: "SwingAway", category: "eCommerce", slug: "swingaway"}
      ]
    }
  }

  getPortfolioItems = () => {    
    // Make a request for a user with a given ID
    axios.get('https://jingledjango.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log("response data", response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }

  PortfolioItems = () => {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
    })
  }

  handleFilter = filter => {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    this.getPortfolioItems()

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('eCommerce')}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter('Scheduling')}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter('Enterprise')}>
          Enterprise
        </button>

        {this.PortfolioItems()}

      </div>
    );
  }
}
