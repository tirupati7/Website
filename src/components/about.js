import React, { Component } from 'react';
import '../styles/home.css';
import { connect } from "react-redux";
class About extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="navbar-wrapper home-wrapper about-wrapper">
                <h3>About Page</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);