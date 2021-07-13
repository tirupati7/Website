import React, { Component } from "react";
import "../styles/home.css";
import "../styles/post.css";
import "../styles/about.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Image from "react-bootstrap/Image";
import firebase from "../firebase/config";
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet";
class DetailedPostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedPost: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    let postURL = this.props.match.params.id;
    const postRef = firebase.database().ref(`posts/${postURL}`);
    postRef.once("value", (snapshot) => {
      let postDetail = snapshot.val();
      postDetail.descArr = postDetail.desc.split("_N");
      this.setState({
        detailedPost: postDetail,
        isLoading: false,
      });
    });
  }

  findHeading(str) {
    const regex = new RegExp(/_H.+?_H/g);
    let testRes = regex.test(str);
    let matchRes;
    if (testRes) matchRes = str.substring(2, str.length - 2);
    return { testRes, matchRes };
  }

  render() {
    const { detailedPost, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="navbar-wrapper home-wrapper detailed-post-wrapper">
          <Skeleton />
          <center>
            <Skeleton width={1000} height={500} />
          </center>
          <Skeleton count={10} />
        </div>
      );
    }

    return (
      <div className="navbar-wrapper home-wrapper detailed-post-wrapper">
        {detailedPost && (
          <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{detailedPost.title}</title>
                <link rel="canonical" href={"http://ourtirupati.com/" + this.props.match.params.id} />
                <meta name="description" content={detailedPost.metaDesc} />
            </Helmet>

            <div className="detailed-post-title">{detailedPost.title}</div>
            <div className="detailed-post-img">
              <Image
                src={detailedPost.image}
                fluid
                width="1000px"
                height="555px"
              />
            </div>
            {detailedPost.descArr.length > 0 &&
              detailedPost.descArr.map((para, i) => {
                if (this.findHeading(para).testRes)
                  return (
                    <div className="about-page-headings">
                      {this.findHeading(para).matchRes}
                    </div>
                  );
                else return <div className="detailed-post-desc">{para}</div>;
              })}
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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailedPostView)
);
