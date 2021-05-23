import React, { Component } from "react";
import "../styles/home.css";
import { connect } from "react-redux";
class ContactUS extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar-wrapper home-wrapper contact-us-wrapper">
                <h3>Contact US Page</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUS);