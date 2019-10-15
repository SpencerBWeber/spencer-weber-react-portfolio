import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      blog_status: "",
      content: "",
      featured_image: ""
    };

    this.featuredImageRef = React.createRef();
  }

  componentWillMount = () => {
    if (this.props.editMode) {
      this.setState({
        id: this.props.blog.id,
        title: this.props.blog.title,
        status: this.props.blog.status
      });
    }
  };

  handleRichTextEditorChange = content => {
    this.setState({ content });
  };

  componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  handleFeaturedImageDrop = () => {
    return {
      addedfile: file => this.setState({ featured_image: file })
    };
  };

  buildForm = () => {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.content);

    if (this.state.featured_image) {
      formData.append(
        "portfolio_blog[featured_image]",
        this.state.featured_image
      );
    }

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
        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }

        this.setState({
          title: "",
          blog_status: "",
          content: "",
          featured_image: ""
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
            editMode={this.props.editMode}
            contentToEdit={
              this.props.editMode && this.props.blog.content
                ? this.props.blog.content
                : null
            }
          />
        </div>

        <div className="image-uploaders">
          {this.props.editMode && this.props.blog.featured_image_url ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.props.blog.featured_image_url} />

              <div className="image-removal-link">
                <a className="remove-icon">
                  <FontAwesomeIcon icon="eraser" />
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.featuredImageRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleFeaturedImageDrop()}
            >
              <div className="dz-message">Featured Image</div>
            </DropzoneComponent>
          )}
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}
