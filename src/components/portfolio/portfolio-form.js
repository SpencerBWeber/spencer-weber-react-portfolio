import React, { Component } from "react";
import axios from "axios";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      url: "",
      category: "eCommerce",
      position: "",
      thumb_image: "",
      banner_image: "",
      logo: ""
    };
  }

  buildForm = () => {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

    return formData;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://jingledjango.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolioItem);
        console.log("response", response);
      })
      .catch(error => {
        console.log("portfolio form handle submit error", error);
      });
  };

  render() {
    return (
      <div className="">
        <h1>PortfolioForm</h1>

        <form onSubmit={this.handleSubmit}>
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

            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="eCommerce">eCommerce</option>
              <option value="Scheduling">Scheduling</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          <div>
            <textarea
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
