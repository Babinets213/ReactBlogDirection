import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: "#007bff", // синій як bg-primary
      color: "white",
      textAlign: "center",
      padding: "15px 0",
      position: "fixed", // фіксує до низу
      bottom: 0,
      left: 0,
      width: "100%",
    };

    return (
      <footer style={footerStyle}>
        <p style={{ margin: 0 }}>© bootcatch.com 2019</p>
      </footer>
    );
  }
}

export default Footer;
