import React, { Component } from 'react';
import HomeCoursel from './homeCoursel';
import '../styles/home.css';
import { WEB_SITE_TITLE } from '../constants';
import HomePagePosts from './homePagePosts';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div>
                <HomeCoursel></HomeCoursel>
                <div className="home-wrapper">
                    <div className="web-site-title">{WEB_SITE_TITLE}</div>
                    <HomePagePosts></HomePagePosts>
                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));