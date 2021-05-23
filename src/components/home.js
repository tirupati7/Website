import React, { Component } from 'react';
import HomeCoursel from './homeCoursel';
import '../styles/home.css';
import { WEB_SITE_TITLE } from '../constants';
import HomePagePosts from './homePagePosts';
import { connect } from "react-redux";
class Home extends Component {

    constructor(props) {
        console.log('constructor is called');
        super(props);
    }

    render() {
        return (
            <div>
                <HomeCoursel></HomeCoursel>
                <div className="home-wrapper">
                    <h3>{WEB_SITE_TITLE}</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);