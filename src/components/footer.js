import React, { Component } from "react";
import "../styles/home.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="#">OurTirupati@2021</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));
