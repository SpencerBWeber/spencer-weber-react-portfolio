import React, { Component } from "react";
import axios from "axios";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
      content: ""
    };
  }

  handleRichTextEditorChange = content => {
    this.setState({ content });
  };

  buildForm = () => {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.content);

    return formData;
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://jingledjango.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          title: "",
          blog_status: "",
          content: ""
        });

        this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
      })
      .catch(error => {
        console.log("handleSubmit for blog error", error);
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
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
        </div>

        <div className="one-column">
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
          />
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}
