import React, { Component } from "react";
import "../styles/home.css";
import "../styles/post.css";
import "../styles/about.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import firebase from "../firebase/config";
import {
  ABOUT_US,
  FOUNDER_AND_CEO,
  DB_AND_HOSTING,
  DESIGNER_AND_DEVELOPER,
  SEO_AND_CONTENT_WRITING,
} from "../constants";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const postRef = firebase.database().ref("aboutUSPage");
    postRef.on("value", (snapshot) => {
      let aboutUSObj = snapshot.val();
      this.setState({
        aboutUSObj: aboutUSObj,
      });
    });
  }

  render() {
    let aboutArr =
      this.state.aboutUSObj && this.state.aboutUSObj.aboutUS.split("_N");
    return (
      <div className="navbar-wrapper home-wrapper about-wrapper">
        {this.state.aboutUSObj && (
          <div>
            <div className="page-title">{ABOUT_US}</div>
            {aboutArr &&
              aboutArr.length > 0 &&
              aboutArr.map((para, i) => {
                return (
                  <div key={i} className="detailed-post-desc">
                    {para}
                  </div>
                );
              })}
            <div className="about-page-headings">{FOUNDER_AND_CEO}:</div>
            <div className="detailed-post-desc">{this.state.aboutUSObj.ceo}</div>
            <div className="about-page-headings">{DB_AND_HOSTING}:</div>
            <div className="detailed-post-desc">{this.state.aboutUSObj.database}</div>
            <div className="about-page-headings">{DESIGNER_AND_DEVELOPER}:</div>
            <div className="detailed-post-desc">{this.state.aboutUSObj.developer}</div>
            <div className="about-page-headings">{SEO_AND_CONTENT_WRITING}:</div>
            <div className="detailed-post-desc">{this.state.aboutUSObj.seo}</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        )}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
