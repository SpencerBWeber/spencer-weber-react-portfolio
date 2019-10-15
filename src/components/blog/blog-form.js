import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSuccessfulFormSubmission(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          placeholder="Blog Title"
          value={this.state.title}
        />

        <input
          onChange={this.handleChange}
          type="text"
          name="blog_status"
          placeholder="Blog Status"
          value={this.state.blog_status}
        />

        <button>Save</button>
      </form>
    );
  }
}
