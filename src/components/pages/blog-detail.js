import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {}
    };
  }

  getBlogItem = () => {
    axios
      .get(
        `https://jingledjango.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then(response => {
        console.log("getBlogItem response", response);
      })
      .catch(error => {
        console.log("getBlogItem error", error);
      });
  };

  componentDidMount = () => {
    this.getBlogItem();
  };

  render() {
    return (
      <div>
        <h1>Blog Detail</h1>
      </div>
    );
  }
}
