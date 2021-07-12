import React, { Component } from "react";
import firebase from "../firebase/config";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/post.css";
import cardSampleImg from "../cardSample.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { storeAllPosts, updateSinglePost } from "../store/actions/postActions";
import Skeleton from "react-loading-skeleton";
class HomePagePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    //console.log('componentDidMount')
    const postRef = firebase.database().ref("posts");
    postRef.on("value", (snapshot) => {
      //console.log('posts')
      let posts = snapshot.val();
      let newStatePosts = [];
      for (let p in posts) {
        newStatePosts.push({
          id: p,
          title: posts[p].title,
          desc: posts[p].desc,
          image: posts[p].image,
          createdAt: posts[p].createdAt,
        });
      }
      //console.log('Posts:::: ' + JSON.stringify(newStatePosts));
      this.setState(
        {
          posts: newStatePosts,
          isLoading: false,
        },
        () => {
          this.props.storeAllPosts(this.state.posts);
        }
      );
    });
  }

  goToDetailedPost(post) {
    //console.log("::::post.title::::" + JSON.stringify(post.title));
    post.URLTitle = post.title.replace(/ /g, "-");
    //console.log("::::post.URLTitle::::" + JSON.stringify(post.URLTitle));
    this.props.updateSinglePost(post);
    let path = `/detailed-post-view/${post.URLTitle}`;
    this.props.history.push(path);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Skeleton width={2000} height={450} />;
    }
    return (
      <div className="posts-block">
        {/* <div className="posts-heading">{POSTS}</div> */}
        {this.state.posts.map((post, i) => {
          return post ? (
            <div className="post-content" key={i}>
              <Card style={{ width: "17.5rem", margin: "5px" }}>
                <Card.Img
                  variant="top"
                  src={post.image ? post.image : cardSampleImg}
                  width="100%"
                  height="200px"
                />
                <Card.Body height="200px">
                  <Card.Title>
                    {post.title && post.title.length > 36
                      ? post.title.substring(0, 36) + "..."
                      : post.title}
                  </Card.Title>
                  <Card.Text style={{ height: "100px" }}>
                    {post.desc && post.desc.length > 124
                      ? post.desc.substring(0, 124) + "..."
                      : post.desc}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => this.goToDetailedPost(post)}
                  >
                    Read More...
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    detailedPost: state.posts.detailedPost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeAllPosts: (posts) => dispatch(storeAllPosts(posts)),
    updateSinglePost: (post) => dispatch(updateSinglePost(post)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePagePosts)
);
