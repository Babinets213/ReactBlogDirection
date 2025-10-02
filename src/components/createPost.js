import React, { Component } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class CreatePost extends Component {
  state = {
    title: "",
    category: [], // список категорій
    selectedCategory: "",
    body: "",
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = () => {
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then((res) => {
        this.setState({
          category: res.data,
          selectedCategory: res.data.length > 0 ? res.data[0].category : "",
        });
      })
      .catch((err) => console.error(err));
  };

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChangeCategory = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };

  handleChangeBody = (data) => {
    this.setState({ body: data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, selectedCategory, body } = this.state;

    axios
      .post("http://localhost:8000/api/posts", {
        title,
        category: selectedCategory,
        body,
      })
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/");
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { title, category, selectedCategory, body } = this.state;

    return (
      <div className="container mt-5 mb-5">
        <h1>Create Post</h1>

        <div className="row">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              {/* Title */}
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  value={title}
                  onChange={this.handleChangeTitle}
                  required
                />
              </div>

              {/* Category */}
              <div className="form-group">
                <label>Category:</label>
                <select
                  className="custom-select"
                  value={selectedCategory}
                  onChange={this.handleChangeCategory}
                >
                  {category.map((cat, index) => (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Body */}
              <div className="form-group">
                <label>Body:</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={body}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.handleChangeBody(data);
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
