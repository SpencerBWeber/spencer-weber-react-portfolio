import React, { Component } from "react";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      url: "",
      category: "",
      position: "",
      thumb_image: "",
      banner_image: "",
      logo: ""
    };
  }

  handleChange = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="">
        <h1>PortfolioForm</h1>

        <form>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio Item Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="url"
              placeholder="Portfolio Item URL"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              placeholder="Portfolio Item Position"
              value={this.state.position}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Portfolio Item category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Portfolio Item description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
