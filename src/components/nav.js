import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    // inline-стилі для посилань
    const linkStyle = {
      color: "#cccccc", // сірий колір
      textDecoration: "none",
      marginRight: "15px",
    };

    const linkHoverStyle = {
      color: "#ffffff", // при ховері колір змінюється на білий
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#007bff" }}
      >
        <Link to="/" className="navbar-brand" style={{ color: "#ffffff" }}>
          React Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                to="/"
                className="nav-link"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/create"
                className="nav-link"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/category"
                className="nav-link"
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.target.style.color = linkHoverStyle.color)
                }
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
